import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

class Post extends Component {

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 200,
          padding: 20,
        }}>
        <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
        <View style={{ backgroundColor: 'white', flex: 0.5 }} />
        <Text>Post</Text>
      </View>
    );
  }
}

export default Post;
