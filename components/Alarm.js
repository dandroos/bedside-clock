import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Platform } from "react-native";
import { Button } from "react-native-paper";
import AppText from "./AppText";
import {
  setShowTimePicker,
  setAlarmSounding,
  setAlarmNotification,
  setAlarmTime,
  setAlarmOn,
} from "../state";
import { Audio } from "expo-av";

const Alarm = ({ dispatch, alarmOn, alarmTime, alarmSounding, time }) => {
  useEffect(() => {
    if (alarmTime && alarmOn) {
      if (
        time.toISOString().substr(11, 8) ===
        alarmTime.toISOString().substr(11, 5) + ":00"
      ) {
        if (!alarmSounding) {
          dispatch(setAlarmSounding(true));
        }
      }
    }
  }, [time]);

  const [sound, setSound] = useState(new Audio.Sound());

  const [soundLoaded, setSoundLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await sound
        .loadAsync(require("../assets/alarm.mp3"), {
          isLooping: true,
        })
        .then(() => setSoundLoaded(true));
      try {
        const storedData = await AsyncStorage.getItem("bedside-clock");
        if (storedData !== null) {
          dispatch(setAlarmTime(new Date(JSON.parse(storedData))));
          dispatch(setAlarmOn(true));
        }
      } catch (e) {}
    })();
  }, []);

  useEffect(() => {
    if (alarmSounding) {
      dispatch(setAlarmNotification(true));
      sound.playAsync();
    } else {
      if (soundLoaded) {
        sound.stopAsync();
      }
    }
  }, [alarmSounding]);

  return (
    <View style={{ alignItems: "flex-start" }}>
      <AppText>
        {alarmOn
          ? `Alarm is set for ${alarmTime.toISOString().substr(11, 5)}`
          : "No alarm set"}
      </AppText>
      <Button
        icon="alarm"
        onPress={() => dispatch(setShowTimePicker(true))}
        mode="contained"
        contentStyle={{ padding: 5 }}
        style={{ marginTop: 10, borderColor: "silver", borderRadius: 0 }}
      >
        {alarmOn ? "Change alarm" : "Set alarm"}
      </Button>
    </View>
  );
};

const mapStateToProps = (state) => ({
  alarmOn: state.alarmOn,
  alarmTime: state.alarmTime,
  time: state.time,
  alarmSounding: state.alarmSounding,
});

export default connect(mapStateToProps)(Alarm);
