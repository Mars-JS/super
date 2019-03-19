import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  Slider,
} from "react-native";

import config from "../../config";

class SearchFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      screenWidth: Dimensions.get("window").width,
      price: 599999,
      text: "",
    };
  }

  selectToggle() {
    this.setState({
      selected: !this.state.selected
    });
  }
  
  //platform check(android,iphone)if no location data, Get location data permission, retrieve location

  render() {
    const bgColor1 = this.state.selected ? "rgba(61, 180, 226, 0.9)" : null;
    const bgColor2 = this.state.selected ? "rgba(61, 180, 226, 0.9)" : null;
    const imageUri =
      "https://lh3.googleusercontent.com/XqqVnVJYaMKZ8DOov0m61y4E3XhLMUwNFtA9gpJc4HubL8PCOmAzdEuK3tRjEHUcC93LQHCzMyOWkp_3IpusPuyPWQ";
    return (
      <ImageBackground
        style={{ width: "100%", height: "100%", backgroundColor: "blue" }}
        source={{ uri: imageUri }}
      >
        <View style={styles.overlayStyle} />

        <View style={styles.LocTitleStyle}>
          <Text style={styles.LocStyle}> Location </Text>
        </View>

        <View
          style={{
            height: 100 + "%",
            width: 100 + "%",
            flex: 1,
            alignItems: "center"
          }}
        >
          <TextInput
            underlineColorAndroid="transparent"
            editable={true}
            maxLength={40}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            autoCapitalize="none"
            placeholder="search location"
            style={styles.inputSearch}
            autoCorrect={false}
            /*onChangeText={text => this.updateText(text, "email")}*/
          />

          <TouchableOpacity
            style={styles.UseLocButtonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("main")}
          >
            <Text style={styles.UseLocStyle}> Or use current Location </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.FilterTitleStyle}>
          <Text style={styles.FilterText}> Property Types </Text>
        </View>

        <View
          style={{
            width: 100 + "%",
            height: 100 + "%",
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <TouchableOpacity
            style={styles.PropertyButtonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("main")}
          >
            <Text style={styles.TypeStyle}> Homes </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.PropertyButtonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("main")}
          >
            <Text style={styles.TypeStyle}> Apartments </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.PropertyButtonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("main")}
          >
            <Text style={styles.TypeStyle}> Townhomes </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.PropertyButtonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("main")}
          >
            <Text style={styles.TypeStyle}> Condos </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.PropertyButtonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("main")}
          >
            <Text style={styles.TypeStyle}> Duplex </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.PropertyButtonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("main")}
          >
            <Text style={styles.TypeStyle}> Triplex </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.FilterTitleStyle}>
          <Text style={styles.FilterText}> Max Price </Text>
        </View>

        <View
          style={{
            height: 100 + "%",
            width: 100 + "%",
            flex: 1,
            alignItems: "center"
          }}
        >
          <Slider
            style={{
              width: 300,
              transform: [{ scaleX: 1.3 }, { scaleY: 2 }]
            }}
            step={1000}
            minimumValue={1000}
            maximumValue={2000000}
            value={this.state.price}
            onValueChange={val => this.setState({ price: val })}
            thumbTintColor={"rgb(61, 180, 226)"}
            maximumTrackTintColor={"#fff"}
            minimumTrackTintColor={"#fff"}
          />
          <Text style={styles.priceStyle}>${this.state.price}</Text>
        </View>

        {/* <Image source={{ uri: imageUri }} style={{ width: '100%', height: '33%', bottom: 0 }} /> */}
        <View style={styles.FilterTitleStyle}>
          <Text style={styles.FilterText}> How will you pay ? </Text>
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
            style={[
              styles.PayButtonStyle,
              { backgroundColor: bgColor1 }
            ]}
            activeOpacity={0.5}
            onPress={() => { this.selectToggle();
            }}
          >
            <Text style={styles.PayText}> Cash </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.PayButtonStyle,
              
            ]}
            activeOpacity={0.5}
            onPress={() => {
              this.backgroundColor="rgba(255,255,255,0.5)";
            }}
          >
            <Text style={styles.PayText}> Mortgage </Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity
          style={styles.SearchButtonStyle}
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate("main")}
        >
          <Text style={styles.FilterText}> S E A R C H </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  priceStyle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  },
  UseLocStyle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
    textDecorationLine: "underline",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  },
  overlayStyle: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 100 + "%",
    width: 100 + "%"
  },

  inputSearch: {
    height: 50,
    width: 70 + "%",
    color: "#ffffff",
    fontWeight: "bold",
    marginHorizontal: 50,
    backgroundColor: "rgba(0, 0, 0, 0.01)",
    borderWidth: 0.8,
    borderRadius: 20,
    borderColor: "#d6d7da",
    textAlign: "center"
  },

  UseLocButtonStyle: {
    paddingTop: 11,
    paddingBottom: 11,
    marginLeft: 10,
    marginRight: 10,
    width: 325,
    backgroundColor: "rgba(0,0,0,0)",
    borderRadius: 20,
    borderWidth: 0,
    borderColor: "rgba(255,255,255,0.9)",
    justifyContent: "center",
    alignItems: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  },

  LocTitleStyle: {
    textAlign: "left",
    marginTop: 9 + "%",
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 5.5 + "%",
    marginRight: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0)",
    borderRadius: 0,
    borderWidth: 0,
    borderColor: "#fff",
    alignItems: "flex-start"
  },
  LocStyle: {
    color: "rgb(61, 180, 226)",
    textAlign: "left",
    fontWeight: "500",
    fontSize: 16,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  },

  FilterTitleStyle: {
    textAlign: "left",
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 5 + "%",
    marginLeft: 5.5 + "%",
    marginRight: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0)",
    borderRadius: 0,
    borderWidth: 0,
    borderColor: "#fff",
    alignItems: "flex-start"
  },
  FilterText: {
    color: "rgb(61, 180, 226)",
    textAlign: "left",
    fontWeight: "600",
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  },

  SearchButtonStyle: {
    textAlign: "center",
    marginTop: 10 + "%",
    marginBottom: 10 + "%",
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0)",
    borderRadius: 0,
    borderWidth: 0,
    borderColor: "#fff",
    alignItems: "center"
  },

  PropertyButtonStyle: {
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    width: "27%",
    height: "45%",
    backgroundColor: "rgba(0,0,0,0)",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "rgb(61, 180, 226)",
    alignItems: "center",
    justifyContent: "center"
  },
  TypeStyle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 14,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  },

  PayButtonStyle: {
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    width: "45%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0)",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "rgb(61, 180, 226)",
    alignItems: "center",
    justifyContent: "center"
  },
  PayText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  }
});

export default SearchFilters;
