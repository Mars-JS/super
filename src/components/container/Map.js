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
    const imageUri = "https://lh3.googleusercontent.com/proxy/rkXc8OvsoIvQtUQztV0--FtjgXDV2QAQZnoTL378alSaAmqsGilOyAp-Zwm8sMv2VCfaYtqx6miWPg6t6PmNZZGHsL2Vv9QYkQMO2GIszHiFCtXATJEjYb8boD0N1ABRYY4mRzHUv-HWpKG0IPL-jrj2U5-SOJiVzkb1LjO1Lo5HAVtOr8wfyWApvDjceP-EGq_sVEuXfZpfHh4p3JdHA_l5a19n9AdCk17HvpOJhRsAjH05CCq3PnHbbvdd3GmHysCnGrtmI_SmLUhWWR3YiqBNJuQY_jk9AekHWTyn6Yd__Vdy4Qf8P1gS0N82hxD_tR5mBSEls3X7jw=s289-p-k-rw";

    return (
      <View style={{ flex: 1, width: 100 + "%" }}>
        
          <ImageBackground
            style={{
              width: this.state.screenWidth,
              height: this.state.screenHeight
            }}
            source={{ uri: imageUri }}
          >
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
            </View>
            
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
                style={[
                  styles.icon,
                  { marginRight: 5 }
                ]}
                source={config.images.bubbleIcon}
              />
              <Text style={[styles.TextStyle]}>1.6k</Text>
            </View>
            
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
  searchBar: {
    flex: 1, 
    width: 100 + "%", 
    height: 65,
    backgroundColor: "rgba(255,255,255,0)",
    
  }
});

export default Map;
