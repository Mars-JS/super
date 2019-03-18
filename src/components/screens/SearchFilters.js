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
      liked: false,
      screenWidth: Dimensions.get("window").width,
      price: 599999,
    }
  
  }

  //platform check(android,iphone)if no location data, Get location data permission, retrieve location

  render() {
    const imageUri = "https://lh3.googleusercontent.com/XqqVnVJYaMKZ8DOov0m61y4E3XhLMUwNFtA9gpJc4HubL8PCOmAzdEuK3tRjEHUcC93LQHCzMyOWkp_3IpusPuyPWQ";
    return (
      <ImageBackground
        style={{ width: "100%", height: "100%", backgroundColor: "blue" }}
        source={{ uri: imageUri }}
      >
        <View style={styles.overlayStyle} />

        <TouchableOpacity
          style={styles.LocButtonStyle}
          activeOpacity={0.5}
          //onPress={() => this.props.navigation.navigate("register")}
        >
          <Text style={styles.LocStyle}> Location </Text>
        </TouchableOpacity>

        <View
          style={{
            height: 100 + "%",
            width: 100 + "%",
            flex: 1,
            alignItems: "center"
          }}
        >
          <TextInput
            autoCapitalize="none"
            value="search location"
            placeholder="Search Location"
            style={styles.inputSearch}
            autoCorrect={false}
            /*onChangeText={text => this.updateText(text, "email")}
            onChangeText={text => this.props.navigation.navigate("feed")}*/
          />

          <TouchableOpacity
            style={styles.UseLocButtonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("main")}
          >
            <Text style={styles.UseLocStyle}>
              {" "}
              Or use current Location{" "}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.PropertyButtonStyle}
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate("main")}
        >
          <Text style={styles.PropertyStyle}> Property Types </Text>
        </TouchableOpacity>

        <View
          style={{
            width: 100 + "%",
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <TouchableOpacity
            style={styles.LeftButtonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("main")}
          >
            <Text style={styles.TypeStyle}> Homes </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.CenterButtonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("main")}
          >
            <Text style={styles.TypeStyle}> Apartments </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.RightButtonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("main")}
          >
            <Text style={styles.TypeStyle}> Townhomes </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.LeftButtonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("main")}
          >
            <Text style={styles.TypeStyle}> Condos </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.CenterButtonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("main")}
          >
            <Text style={styles.TypeStyle}> Duplex </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.RightButtonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("main")}
          >
            <Text style={styles.TypeStyle}> Triplex </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.PropertyButtonStyle}
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate("main")}
        >
          <Text style={styles.PropertyStyle}> Max Price </Text>
        </TouchableOpacity>
        <View
          style={{
            height: 100 + "%",
            width: 100 + "%",
            flex: 1,
            alignItems: "center",
            marginTop: 5
          }}
        >
          <Slider
            style={{ width: 300, transform: [{ scaleX: 1.3 }, { scaleY: 2 }] }}
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
        <TouchableOpacity
          style={styles.PropertyButtonStyle}
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate("main")}
        >
          <Text style={styles.PropertyStyle}> How will you pay ? </Text>
        </TouchableOpacity>

        <View
          style={{
            height: 100 + "%",
            width: 100 + "%",
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: 5
          }}
        >
          <TouchableOpacity
            style={styles.LeftBuyButtonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("main")}
          >
            <Text style={styles.TypePayStyle}> Cash </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.RightBuyButtonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("main")}
          >
            <Text style={styles.TypePayStyle}> Mortgage </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.SearchButtonStyle}
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate("main")}
        >
          <Text style={styles.PropertyStyle}> S E A R C H </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    height: 45,
    width: 45,
    tintColor: 'rgb(255,255,255)',
    margin: 0,
    position: 'absolute',
    right: 25 + "%",
    top: 68 + "%",
  },
  priceStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
  UseLocStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  overlayStyle: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 100 + "%",
    width: 100 + "%",
  },
  buttonViewStyle: {
    margin: 0,
  },
  inputSearch: {
    height: 50,
    width: 70 + "%",
    color: '#ffffff',
    fontWeight: 'bold',
    marginHorizontal: 50,
    backgroundColor: "rgba(0, 0, 0, 0.01)",
    borderWidth: 0.8,
    borderRadius: 20,
    borderColor: '#d6d7da',
    textAlign: 'center',
  },

  UseLocButtonStyle: {
    paddingTop: 11,
    paddingBottom: 11,
    marginLeft: 10,
    marginRight: 10,
    width: 325,
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 20,
    borderWidth: 0,
    borderColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center', alignItems: 'center'
  },

  LocButtonStyle: {
    textAlign: 'left',
    marginTop: 35,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 25,
    marginRight: 0,
    width: "100%",
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 0,
    borderWidth: 0,
    borderColor: '#fff',
    alignItems: 'flex-start',
  },
  LocStyle: {
    color: 'rgb(61, 180, 226)',
    textAlign: 'left',
    fontWeight: '500',
    fontSize: 16,
  },

  PropertyButtonStyle: {
    textAlign: 'left',
    marginTop: 5,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 25,
    marginRight: 0,
    width: "100%",
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 0,
    borderWidth: 0,
    borderColor: '#fff',
    alignItems: 'flex-start',
  },
  PropertyStyle: {
    color: 'rgb(61, 180, 226)',
    textAlign: 'left',
    fontWeight: '500',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
  },

  SearchButtonStyle: {
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 25,
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 0,
    borderWidth: 0,
    borderColor: '#fff',
    alignItems: 'center',
  },

  CenterButtonStyle: {
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    width: "27%",
    height: "35%",
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 0,
    borderWidth: 1,
    borderColor: 'rgb(61, 180, 226)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  RightButtonStyle: {
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    width: "27%",
    height: "35%",
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 0,
    borderWidth: 1,
    borderColor: 'rgb(61, 180, 226)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  LeftButtonStyle: {
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    width: "27%",
    height: "35%",
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 0,
    borderWidth: 1,
    borderColor: 'rgb(61, 180, 226)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  TypeStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 12,
  },

  RightBuyButtonStyle: {
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    width: "45%",
    height: "90%",
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 0,
    borderWidth: 1,
    borderColor: 'rgb(61, 180, 226)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  LeftBuyButtonStyle: {
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    width: "45%",
    height: "90%",
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 0,
    borderWidth: 1,
    borderColor: 'rgb(61, 180, 226)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  TypePayStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 18,
  },
});

export default SearchFilters;
