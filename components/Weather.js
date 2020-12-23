import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import AppText from "./AppText";
import * as Location from "expo-location";
import axios from "axios";
import {
  setLocation,
  setTemperature,
  setLocationName,
  setWeatherDescription,
} from "../state";

const Weather = ({
  dispatch,
  currentLocation,
  locationName,
  temperature,
  weatherDescription,
}) => {
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      console.log(status);
      if (status !== "granted") {
        //handle no location
        return;
      }
      Location.watchPositionAsync(
        { accuracy: Location.Accuracy.Balanced, timeInterval: 600000 },
        (data) => {
          console.log("called");
          dispatch(
            setLocation({
              lat: data.coords.latitude,
              lon: data.coords.longitude,
            })
          );
        }
      );
    })();
  }, []);

  useEffect(() => {
    if (currentLocation) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.lat}&lon=${currentLocation.lon}&appid=dfdfee778361ae34d0b4afd266af429e&units=metric`
        )
        .then((res) => {
          dispatch(setWeatherDescription(res.data.weather[0].main));
          dispatch(setTemperature(res.data.main.temp));
          dispatch(
            setLocationName(`${res.data.name}, ${res.data.sys.country}`)
          );
        });
    }
  }, [currentLocation]);

  return temperature ? (
    <View style={{ alignItems: "flex-end" }}>
      <AppText size={30}>{temperature}°C</AppText>
      <AppText size={20}>{weatherDescription}</AppText>
      <AppText>{locationName}</AppText>
    </View>
  ) : (
    <AppText>Loading weather data...</AppText>
  );
};

const mapStateToProps = (state) => ({
  currentLocation: state.location,
  locationName: state.locationName,
  weatherDescription: state.weatherDescription,
  temperature: state.temperature,
});

export default connect(mapStateToProps)(Weather);
