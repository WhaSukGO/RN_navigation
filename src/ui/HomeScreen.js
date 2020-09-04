import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
// import moduleName from 'module'

export default class HomeScreen extends Component {
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
