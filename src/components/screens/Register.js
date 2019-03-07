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

class Register extends Component {

  render() {
    return (
      <ImageBackground source={require('./image/registerBG.jpg')} style={{ width: '100%', height: '100%' }}>
        
        <View
          style={{
            height: 100 + "%",
            width: 100 + "%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.titleTextReg}>H O M E S <Text style={styles.titleTexttReg}> C O .</Text></Text>
          <TextInput
            autoCapitalize="none"
            value="fullname"
            placeholder="Full Name"
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
            value="password"
            /*onChangeText={text => this.updateText(text, "password")}*/
            secureTextEntry={false}
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
            onPress={() => this.props.navigation.navigate("feed")}>
            <Text style={styles.TextStyle}> s i g n  u p </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.SkipButtonStyle}
            activeOpacity={.5}
            onPress={() => this.props.navigation.navigate("feed")}>
            <Text style={styles.TextStyle}> s k i p </Text>
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

  titleTextReg: { //part 1
    fontFamily: 'Cochin',
    fontSize: 30,
    fontWeight: '900',
    color: '#ffffff',
    marginTop: 50,
    marginBottom: 50,
  },
  titleTexttReg: {  //part 2
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

  SkipButtonStyle: {
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

});

export default Register;

