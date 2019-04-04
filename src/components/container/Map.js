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
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

class Map extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      screenWidth: Dimensions.get("window").width,
      screenHeight: Dimensions.get("window").height
    };
  }

  render() {
    console.log(this.props.item);
    const imageUri =
      "https://lh3.googleusercontent.com/ojOMnFeH9hgcZ00weHjT9_P-CMgt4dEij8WzHec2BN_VrJgAzOxYoFE1PlC_KHLWT3Eh4Jkdvv6O2TVv8LvMlAcAUQ";

    return (
      <View style={{ flex: 1, width: 100 + "%" }}>
        <ImageBackground
          style={{
            width: this.state.screenWidth,
            height: this.state.screenHeight
          }}
          source={{ uri: imageUri }}
        >
          <SearchBar />
          <View style={styles.iconBar}>
            <Image
              style={[
                styles.icon,
                {
                  marginRight: 5,
                  marginBottom: -5
                }
              ]}
              source={config.images.bubbleIcon}
            />
            <Text style={[styles.TextStyle]}>2.3k</Text>
            <Image
              style={[styles.icon, { marginRight: 5 }]}
              source={config.images.bubbleIcon}
            />
            <Text style={[styles.TextStyle]}>1.6k</Text>
          </View>

          <SearchResult />
          
        </ImageBackground>
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
  infoView: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 46
  },
  priceText: {
    fontSize: 20,
    height: 25,
    width: 70 + "%",
    color: "#ffffff",
    fontWeight: "bold",
    marginHorizontal: 50,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    textAlign: "center",
    width: 100 + "%",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  infoText: {
    height: 25,
    width: 70 + "%",
    color: "#ffffff",
    fontWeight: "bold",
    marginHorizontal: 50,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    textAlign: "center",
    width: 100 + "%",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  BuyButtonStyle: {
    paddingTop: 11,
    paddingBottom: 11,
    marginLeft: 10,
    marginRight: 10,
    width: 50 + "%",
    backgroundColor: "rgb(79,180,209)",
    borderRadius: 0,
    borderWidth: 0,
    borderColor: "#fff",
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 }
  },
  userBar: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },

  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },

  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + "%",
    flexDirection: "column",
    alignItems: "flex-end",
    backgroundColor: "rgba(0,0,0,0)"
  },
  icon: {
    width: 45,
    height: 45
  },
  TextStyle: {
    color: "#fff",
    marginRight: 10,
    fontWeight: "500",
    textAlign: "center"
  },
  inputSearch: {
    height: 45,
    width: 85 + "%",
    color: "black",
    fontWeight: "bold",
    marginHorizontal: 50,
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderWidth: 0.8,
    borderRadius: 2,
    borderColor: "#d6d7da",
    textAlign: "left"
  },

});

export default Map;
