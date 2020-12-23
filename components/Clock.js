import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import { setTime } from "../state";
import moment from "moment";
import AppText from "./AppText";

const Clock = ({ dispatch, time, nightLight }) => {
  useEffect(() => {
    setInterval(() => {
      dispatch(setTime(new Date()));
    }, 1000);
  }, []);
  return (
    <>
      <AppText size={80}>{time && moment(time).format("H:mm:ss")}</AppText>
      <AppText size={20}>{moment(time).format("dddd D MMMM YYYY")}</AppText>
    </>
  );
};

const mapStateToProps = (state) => ({
  time: state.time,
  nightLight: state.nightLight,
});

export default connect(mapStateToProps)(Clock);
