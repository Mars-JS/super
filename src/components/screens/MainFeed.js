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
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

class HomesCo extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <TopNav nav={this.props.navigation} />
        <PostFeed />
        <BottomNav />
      </View>
    );
  }
}

export default HomesCo;
