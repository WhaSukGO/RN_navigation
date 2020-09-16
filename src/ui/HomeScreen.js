import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { updateBLE } from "../redux/actions/bleAction";

class HomeScreen extends Component {
  componentDidMount() {
    const { updateBLE } = this.props;

    setInterval(() => {
      updateBLE("#");
    }, 3000);
  }

  // onPressLog = () => {
  //   const { log } = this.props;

  //   const d = new Date();
  //   const n = d.getTime();

  //   console.log(n);
  //   console.log(log);
  //   console.log();
  // };

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
          // onPress={() => this.onPressLog()}
          onPress={() => navigation.navigate("Details")}
        >
          <Text>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
          onPress={() => navigation.navigate("Information")}
        >
          <Text>Information</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  log: state.ble.log,
});

export default connect(mapStateToProps, { updateBLE })(HomeScreen);
