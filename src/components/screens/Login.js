import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Image
} from "react-native";

class Login extends Component {

  render() {
    return (
      <ImageBackground source={require('./image/registerBG.jpg')} style={{ width: '100%', height: '100%' }}>

        <TouchableOpacity
          style={styles.SignUpButtonStyle}
          activeOpacity={.5}
          onPress={() => this.props.navigation.navigate("register")}>
          <Text style={styles.SignUpStyle}> signup </Text>
        </TouchableOpacity>
        
        <View
          style={{
            height: 100 + "%",
            width: 100 + "%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.titleText}>H O M E S <Text style={styles.titleTextt}> C O .</Text></Text>
          {/* <Image
            style={{ width: 150, height: 150 }}
            source={require('./image/logo.png')}
          /> */}
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
            value="password"
            /*onChangeText={text => this.updateText(text, "password")}*/
            secureTextEntry
            autoCorrect={false}
            placeholder="password"
            style={styles.input}
          />
          
          <TouchableOpacity
            style={styles.LoginButtonStyle}
            activeOpacity={.5}
            onPress={() => this.props.navigation.navigate("profile")}>
            <Text style={styles.TextStyle}> login </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.SkipButtonStyle}
            activeOpacity={.5}
            onPress={() => this.props.navigation.navigate("login")}>
            <Text style={styles.TextStyle}> forgot password? </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.SkipButtonStyle}
            activeOpacity={.5}
            onPress={() => this.props.navigation.navigate("feed")}>
            <Text style={styles.TextStyle}> skip </Text>
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
  },

  titleText: {
    fontFamily: 'Cochin',
    fontSize: 30,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 150,
  },

  titleTextt: {
    fontFamily: 'Cochin',
    fontSize: 30,
    fontWeight: '200',
    color: '#ffffff',
  },
  
  LoginButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    width: 200,
    backgroundColor: '#7C5B93',
    borderRadius: 20,
    borderWidth: 0,
    borderColor: '#fff'
  },

  SkipButtonStyle: {
    marginTop: 5,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    width: "100%",
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 0,
    borderWidth: 0,
    borderColor: '#fff'
  },
  SignUpButtonStyle: {
    marginTop: 0,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 0,
    borderWidth: 0,
    borderColor: '#fff'
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
  SignUpStyle:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default Login;
