import React from "react";
import { connect } from "react-redux";
import { Portal, Dialog, Paragraph, Button } from "react-native-paper";
import { setAlarmNotification, setAlarmSounding } from "../state";
import moment from "moment";

const AlarmNotification = ({ dispatch, isOpen, alarmTime }) => {
  return (
    <Portal>
      <Dialog
        visible={isOpen}
        style={{ width: "25%", alignSelf: "center", alignItems: "center" }}
      >
        <Dialog.Title>Alarm</Dialog.Title>
        <Dialog.Content>
          <Paragraph>It's {moment(alarmTime).format("H:mm")}!</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            contentStyle={{ padding: 20, width: "100%" }}
            mode="contained"
            onPress={() => {
              dispatch(setAlarmSounding(false));
              dispatch(setAlarmNotification(false));
            }}
          >
            Off
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.alarmNotification,
  alarmTime: state.alarmTime,
});

export default connect(mapStateToProps)(AlarmNotification);
