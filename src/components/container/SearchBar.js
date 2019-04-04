import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TextInput
} from "react-native";
import config from "../../config";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      screenWidth: Dimensions.get("window").width,
      screenHeight: Dimensions.get("window").height
    };
  }

  render() {

    return (

        <View style={styles.topNav}>
          <View
            style={{
              height: 100 + "%",
              width: 100 + "%",
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexWrap: "wrap"
            }}
          >
          <TouchableOpacity
            style={styles.StatNavButton}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("main")}
          >
            <Text style={styles.TypeStyle}> lillli </Text>
          </TouchableOpacity>
            <TextInput
              autoCapitalize="none"
              value="search"
              placeholder="Search"
              style={styles.inputSearch}
              autoCorrect={false}
              /*onChangeText={text => this.updateText(text, "email")}
              onChangeText={text => this.props.navigation.navigate("feed")}*/
            />
          </View>
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
            <TouchableOpacity
              style={styles.ZeroNavButton}
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate("main")}
            >
              <Text style={styles.TypeStyle}> button 0 </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.SearchNavButton}
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate("main")}
            >
              <Text style={styles.TypeStyle}> button 1 </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ZeroNavButton}
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate("main")}
            >
              <Text style={styles.TypeStyle}> button 2 </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.SearchNavButton}
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate("main")}
            >
              <Text style={styles.TypeStyle}> button 3 </Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  topNav: {
    width: 100 + "%",
    height: 100,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  inputSearch: {
    height: 40,
    width: 75 + "%",
    color: "black",
    fontWeight: "bold",
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderWidth: 0.8,
    borderRadius: 2,
    borderColor: "#d6d7da",
    textAlign: "left"
  },
  StatNavButton: {
    marginRight: 1,
    marginLeft: 1,
    width: "15%",
    height: "75%",
    backgroundColor: "rgba(0,0,0,0)",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "rgb(233, 233, 233)",
    alignItems: "center",
    justifyContent: "center"
  },
  ZeroNavButton: {
    marginRight: 1,
    marginLeft: 1,
    width: "23%",
    height: "75%",
    backgroundColor: "rgba(0,0,0,0)",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "rgb(233, 233, 233)",
    alignItems: "center",
    justifyContent: "center"
  },
  SearchNavButton: {
    marginRight: 1,
    marginLeft: 1,
    width: "23%",
    height: "75%",
    backgroundColor: "rgba(0,0,0,0)",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "rgb(61, 180, 226)",
    alignItems: "center",
    justifyContent: "center"
  },
  TypeStyle: {
    color: "rgb(61, 180, 226)",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 14
  }
});

export default SearchBar;
