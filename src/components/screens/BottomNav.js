import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
} from "react-native";
import config from "../../config";

class BottomNav extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <View
          style={{
            height: 100 + "%",
            width: 100 + "%",
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <Image style={styles.icon} source={config.images.houseIcon} />
          <Image style={styles.icon} source={config.images.searchIcon} />
          <Image style={styles.icon} source={config.images.calendarIcon} />
          <Image style={styles.icon} source={config.images.mailIcon} />
          <Image style={styles.icon} source={config.images.profileIcon} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    width: 100 + "%",
    height: 6 + "%",
    bottom: 0,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    height: 45, width: 45, 
    tintColor: "black",
    marginTop: 0,
    marginRight: 5 + "%",
  },
});

export default BottomNav;
