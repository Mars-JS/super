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
  Icon,
  Dimensions
} from "react-native";
import config from "../../config";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      screenHeight: Dimensions.get("window").height,
      screenWidth: Dimensions.get('window').width
    };
  }

  render() {
    const imageHeight = Math.floor(this.state.screenHeight+1);
    const imageSelection = "https://lh3.googleusercontent.com/OpqsEUi7jtdlhPxcObLRUJbQ0PwBcaleUaw_7xSnFet1dDrnkAiEfcLJrp9w8XCYUePl5ZqIiKjDmsEdKAUvxTvj_YY";
    const imageUri = imageSelection + "=s" + imageHeight + "-c";
    
    return (
      <ImageBackground source={{ uri: imageUri }} style={{ width: '100%', height: '100%' }}>
        <View style={styles.overlayStyle} />
        <View
          style={{
            height: 100 + "%",
            width: 100 + "%",
            flex: 1,
            alignItems: "center",
          }}
        >

          <Image style={styles.userPic}
                source={{ uri: "https://lh3.googleusercontent.com/FJlpEczYnksiJtE3JKmy2jeEQzkjBZT--KAW6uCelPiWe0Bkb41I6_bIcT8m0hv7O73Kw2P2rACMSIaPfPMk_Ixk0g" }}
          />

          <TextInput
            autoCapitalize="none"
            value="fullname"
            placeholder="fullname"
            style={styles.input}
            autoCorrect={false}
          /*onChangeText={text => this.updateText(text, "email")}*/
          />
          <TextInput
            autoCapitalize="none"
            value="username"
            placeholder="Brian"
            style={styles.input}
            autoCorrect={false}
          /*onChangeText={text => this.updateText(text, "email")}*/
          />
          <TextInput
            autoCapitalize="none"
            value="password"
            /*onChangeText={text => this.updateText(text, "password")}*/
            secureTextEntry
            autoCorrect={false}
            placeholder="Password"
            style={styles.input}
          />
          <TextInput
            autoCapitalize="none"
            value="email"
            placeholder="Email"
            style={styles.input}
            autoCorrect={false}
          /*onChangeText={text => this.updateText(text, "email")}*/
          />
          <TextInput
            autoCapitalize="none"
            value="phone"
            placeholder="Phone"
            style={styles.input}
            autoCorrect={false}
          /*onChangeText={text => this.updateText(text, "email")}*/
          />

          <TouchableOpacity
            style={styles.LoginButtonStyle}
            activeOpacity={.5}
            onPress={() => this.props.navigation.navigate("profile")}>
            <Text style={styles.TextStyle}> e d i t  p r o f i l e </Text>
          </TouchableOpacity>
          
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  profilePicContainer: {
    width: 100 + "%",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  profilePicThumb: {
    width: config.styleConstants.oneThirdWidth,
    height: config.styleConstants.oneThirdWidth
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
  input: {
    height: 50,
    width: 70 + "%",
    color: '#ffffff',
    fontWeight: 'bold',
    marginHorizontal: 50,
    backgroundColor: "rgba(0, 0, 0, 0.01)",
    marginBottom: 10,
    borderBottomWidth: 0.8,
    borderColor: '#d6d7da',
    textAlign: 'center',
  },

  titleText: {
    fontFamily: 'Cochin',
    fontSize: 30,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 175,
  },

  titleTextt: {
    fontFamily: 'Cochin',
    fontSize: 30,
    fontWeight: '200',
    color: '#ffffff',
  },

  SignUpButtonStyle: {
    textAlign: 'right',
    marginTop: 0,
    paddingTop: 5,
    paddingBottom: 55,
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 0,
    borderWidth: 0,
    borderColor: '#fff',
    alignItems: 'flex-end',
  },

  LoginButtonStyle: {
    marginTop: 10,
    paddingTop: 11,
    paddingBottom: 11,
    marginLeft: 10,
    marginRight: 10,
    width: 250,
    backgroundColor: 'rgb(121,114,187)',
    borderRadius: 20,
    borderWidth: 0,
    borderColor: '#fff'
  },

  pwButtonStyle: {
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    width: "100%",
    backgroundColor: 'rgba(50,50,50,0.9)',
    borderRadius: 0,
    borderWidth: 0,
    borderColor: '#fff'
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
  SignUpStyle: {
    color: '#fff',
    textAlign: 'right',
    fontWeight: '500',
  },

  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  icon: {
    flex: 1,
    height: 25,
    width: 25,
  },
  userPic: {
    height: 80,
    borderRadius: 40,
    width: 80,
    marginTop: 100,
  },
});

export default Profile;
