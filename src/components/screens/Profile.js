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
} from "react-native";

class Profile extends Component {

  render() {
    return (
      <ImageBackground source={require('./image/loginBG.jpg')} style={{ width: '100%', height: '100%' }}>

        <View
          style={{
            height: 100 + "%",
            width: 100 + "%",
            flex: 1,
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 150, height: 150, marginTop: 150 }}
            source={require('./image/user0.png')}
          />

          <TextInput
            autoCapitalize="none"
            value="fullname"
            placeholder="name lastname"
            style={styles.input}
            autoCorrect={false}
          /*onChangeText={text => this.updateText(text, "email")}*/
          />

          <TextInput
            autoCapitalize="none"
            value="username"
            placeholder="username"
            style={styles.input}
            autoCorrect={false}
          /*onChangeText={text => this.updateText(text, "email")}*/
          />

          <TextInput
            autoCapitalize="none"
            value="email"
            /*onChangeText={text => this.updateText(text, "password")}*/
            secureTextEntry={false}
            autoCorrect={false}
            placeholder="email"
            style={styles.input}
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
});

export default Profile;
