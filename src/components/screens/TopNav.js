import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import config from "../../config";

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const nav = this.props.nav;
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
            
            activeOpacity={0.5}
            onPress={() => this.props.nav.navigate("map")}
          >
            <Image style={styles.iconMap} source={config.images.mapIcon} />
          </TouchableOpacity>
          <Text style={styles.titleMain}>
            H O M E S <Text style={styles.titleMain2}> C O .</Text>
          </Text>
          <Image style={styles.iconCart} source={config.images.cartIcon} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topNav: {
    width: 100 + "%",
    height: 56,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  iconMap: {
    height: 45,
    width: 45,
    tintColor: "black",
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

export default TopNav;
