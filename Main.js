import React from "react";
import { connect } from "react-redux";
import { TouchableOpacity, View, Text } from "react-native";
import Clock from "./components/Clock";
import { setNightLight } from "./state";
import Alarm from "./components/Alarm";
import AlarmNotification from "./components/AlarmNotification";
import Weather from "./components/Weather";
import Battery from "./components/Battery";

const Main = ({ dispatch, nightLight }) => {
  return (
    <View style={{ flex: 1, backgroundColor: nightLight ? "white" : "black" }}>
      <AlarmNotification />
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => dispatch(setNightLight(!nightLight))}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Battery />
          <Clock />
          <View
            style={{
              flexDirection: "row",
              width: "80%",
              marginTop: 40,
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <Alarm />
            <Weather />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  nightLight: state.nightLight,
});

export default connect(mapStateToProps)(Main);
