import React from "react";
import { connect } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import { setAlarmOn, setShowTimePicker, setAlarmTime } from "../state";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DatePicker = ({ dispatch, isOpen, alarmTime }) => {
  return (
    isOpen && (
      <DateTimePicker
        mode="time"
        value={alarmTime}
        is24Hour={true}
        display="spinner"
        onChange={(e, newTime) => {
          dispatch(setShowTimePicker(Platform.OS === "ios"));
          if (newTime) {
            dispatch(setAlarmOn(true));
            dispatch(setAlarmTime(newTime));
            AsyncStorage.setItem("bedside-clock", JSON.stringify(newTime));
          }
        }}
      />
    )
  );
};

const mapStateToProps = (state) => ({
  alarmTime: state.alarmTime,
  isOpen: state.showTimePicker,
});

export default connect(mapStateToProps)(DatePicker);
