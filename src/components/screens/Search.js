import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions
} from "react-native";
import config from "../../config";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      screenWidth: Dimensions.get("window").width
    };
  }

  //platform check(android,iphone)Get location data permission, retrieve location

  render() {
    const imageHeight = Math.floor(this.state.screenWidth*1.3);
    const imageSelection = "https://lh3.googleusercontent.com/Zvdby1W2i6NNAyi0l8-Bme5h3GJnkTzZll919EnORF8Zu7VHFQ9MDwnfAl0bRe9yVuATnAuclXxlvhkL0xamgX63ag";
    const imageUri = imageSelection + "=s" + imageHeight + "-c";
    return (
      <ImageBackground style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
        <View style={styles.overlayStyle} />
        <View
          style={{
            height: 100 + "%",
            width: 100 + "%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image style={styles.logoStyle}
            source={{ uri: "https://lh3.googleusercontent.com/wj6NpArU5v93h35urcu-Iaf7T11CDgSfklpNG_l-bxqhrca_QMUFDIaTVmz7G3HathNu-i0xSXlhztch8xfzRtICQg" }}
          />
          <Text style={styles.textStyle}>The best new homes app in the world.</Text>
          
          
            <Image style={styles.icon}
              source={config.images.searchIcon} />
            <TextInput
            autoCapitalize="none"
            value="search new homes"
            placeholder="Search new homes"
            style={styles.inputSearch}
            autoCorrect={false}
          /*onChangeText={text => this.updateText(text, "email")}
            onChangeText={text => this.props.navigation.navigate("feed")}*/
            />
          
          <TouchableOpacity
            style={styles.FilterButtonStyle}
            activeOpacity={.5}
            onPress={() => this.props.navigation.navigate("filter")}>
            <Text style={styles.filterTextStyle}> add filters </Text>
          </TouchableOpacity>
        </View>
        <Image source={{ uri: imageUri }} style={{ width: '100%', height: '33%', bottom: 0 }} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  logoStyle:{
    width: 200,
    height: 200,
  },
  icon: {
    height: 45, 
    width: 45, 
    tintColor: 'rgb(255,255,255)',
    margin:0,
    position: 'absolute',
    right: 25+"%",
    top: 68+"%",
  },
  textStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 25,
  },
  filterTextStyle:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
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

  FilterButtonStyle: {
    paddingTop: 11,
    paddingBottom: 11,
    marginLeft: 10,
    marginRight: 10,
    width: 325,
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 20,
    borderWidth: 0,
    borderColor: 'rgba(255,255,255,0.9)'
  },


});

export default Search;

