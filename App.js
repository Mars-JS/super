import React, { Component } from "react";
import { StyleSheet, View, Platform } from "react-native";
import HomesCo from "./src/HomesCo.js";
import { SafeAreaView } from "react-navigation";

if (Platform.OS === "android") {
  // removes extra space at top of header on android
  SafeAreaView.setStatusBarHeight(0);
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 100+'%',
    width: 100+'%',
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.wrapper} automaticallyAdjustContentInsets={false}>
        <HomesCo />
      </View>
    );
  }
};
