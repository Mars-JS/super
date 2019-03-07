import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import config from "../../config";
import { PostFeed } from "../container";

class HomesCo extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <View style={styles.tempNav}>
          <Text style={styles.titleMain}>H O M E S <Text style={styles.titleMain2}> C O .</Text></Text>
        </View>
        <PostFeed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 56,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  titleMain: { //part 1
    fontFamily: 'Cochin',
    fontSize: 12,
    fontWeight: '900',
    color: 'black',
  },
  titleMain2: { //part 2
    fontFamily: 'Cochin',
    fontSize: 12,
    fontWeight: '200',
    color: 'black',
  },
  
});

export default HomesCo;
