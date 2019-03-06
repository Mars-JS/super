import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { PostFeed } from "../container";

class InstaClone extends Component {

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
          backgroundColor: 'rgba(25,25,25,0.5)',
        }}>
        <Text>MainFeed</Text>
        <PostFeed />
      </View>
    );
  }
}

export default InstaClone;
