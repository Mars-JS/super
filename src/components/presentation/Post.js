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
        <Text>Post</Text>
      </View>
    );
  }
};

export default Post;
