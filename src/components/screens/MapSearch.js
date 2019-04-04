import React, { Component } from "react";
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import Map from "../container/Map";
import BottomNav from "./BottomNav";
import config from "../../config";

class MapSearch extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        
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
            <Image style={styles.iconMap} source={config.images.mapIcon} />
            <Text style={styles.titleMain}>
              H O M E S <Text style={styles.titleMain2}> C O .</Text>
            </Text>
            <Image style={styles.iconCart} source={config.images.cartIcon} />
          </View>
        </View>
        
        <Map />
        <BottomNav />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  topNav: {
    width: 100 + "%",
    height: 56,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(50,50,50)",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  iconMap: {
    height: 45,
    width: 45,
    tintColor: "transparent",
    marginTop: 0,
    marginRight: 20 + "%"
  },
  iconCart: {
    height: 45,
    width: 45,
    tintColor: "black",
    marginTop: 0,
    marginLeft: 20 + "%"
  },
  titleMain: {
    //part 1
    fontFamily: "Cochin",
    fontSize: 12,
    fontWeight: "900",
    color: "black"
  },
  titleMain2: {
    //part 2
    fontFamily: "Cochin",
    fontSize: 12,
    fontWeight: "200",
    color: "black"
  }
});

export default MapSearch;
