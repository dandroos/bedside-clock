import React, { useState, useEffect } from "react";
import * as ExpoBattery from "expo-battery";
import { View } from "react-native";
import AppText from "./AppText";

const Battery = () => {
  const [isCharging, setIsCharging] = useState(false);
  const [batteryPercentage, setBatteryPercentage] = useState(null);

  useEffect(() => {
    ExpoBattery.addBatteryStateListener(({ batteryState }) => {
      if (batteryState !== 1 && !isCharging) {
        setIsCharging(true);
      } else {
        setIsCharging(false);
      }
    });
    ExpoBattery.getBatteryLevelAsync().then((value) => {
      setBatteryPercentage(value * 100);
    });
    ExpoBattery.addBatteryLevelListener(({ batteryLevel }) => {
      setBatteryPercentage(batteryLevel * 100);
    });
  }, []);
  return (
    <>
      <AppText>{isCharging ? null : "Plug in your charger!"}</AppText>
      <AppText>
        {batteryPercentage && batteryPercentage.toFixed(0) + "%"}
      </AppText>
    </>
  );
};

export default Battery;
