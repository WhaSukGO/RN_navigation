import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class HomeScreen extends Component {
  // 다른 화면에서 호출할 함수 #1
  sendSignal = (msg) => {
    console.log(`[MSG] Sending! ${msg}`);
  };

  // 다른 화면에서 호출할 함수 #2
  receiveSignal = (msg) => {
    console.log(`[MSG] Received! ${msg}`);
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            navigation.navigate("Details", {
              sendSignal: this.sendSignal,
              receiveSignal: this.receiveSignal,

              // 그 외, 다른 함수들...
              // 이름이 동일할 필요 X
              // ex) aaa : this.sendSignal
              // 위의 코드도 작동함. 다만, DetailsScreen.js에서, sendSignal을 호출하려면
              // this.props.route.params.aaa("WOW!~~");
            });
          }}
        >
          <Text>Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }}>
          <Text>Bye</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
