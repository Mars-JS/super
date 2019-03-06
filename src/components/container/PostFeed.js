import React, { Component } from "react";
import { Post } from "../presentation";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
  FlatList
} from "react-native";

class PostFeed extends Component {

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}>
        <Text>post feed</Text>
        <Post/>
      </View>
    );
  }
}

export default PostFeed;
