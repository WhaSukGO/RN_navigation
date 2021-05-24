import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { clearBLE } from "../redux/actions/bleAction";

class DetailsScreen extends Component {
  onPressSend = () => {
    this.props.route.params.sendSignal("WOW!~~");
  };

  onPressReceive = () => {
    this.props.route.params.receiveSignal("NO!~~");
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={() => this.onPressSend()}>
          <Text>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressReceive()}>
          <Text>Receive</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  log: state.ble.log,
});

export default connect(mapStateToProps, { clearBLE })(DetailsScreen);
