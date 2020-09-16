import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { clearBLE } from "../redux/actions/bleAction";

class DetailsScreen extends Component {
  onPressUpdate = () => {
    const { log, clearBLE } = this.props;

    const data = log.substring(0, 62);

    l = data.length;

    clearBLE(l);
  };

  onPressNow = () => {
    console.log(this.props.log);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={this.onPressUpdate}>
          <Text>GET!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  log: state.ble.log,
});

export default connect(mapStateToProps, { clearBLE })(DetailsScreen);
