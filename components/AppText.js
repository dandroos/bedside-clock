import React from "react";
import { connect } from "react-redux";
import { Text } from "react-native-paper";

const AppText = ({ children, nightLight, size }) => {
  return (
    <Text style={{ color: nightLight ? "black" : "silver", fontSize: size }}>
      {children}
    </Text>
  );
};

const mapStateToProps = (state) => ({
  nightLight: state.nightLight,
});

export default connect(mapStateToProps)(AppText);
