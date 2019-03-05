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
        <Button
          title="signup"
          color="rgba(0,0,0,0.01)"
          onPress={() => this.props.navigation.navigate('register')}
        />

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
          <Image
            style={{ width: 150, height: 150 }}
            source={require('./image/logo.png')}
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
            secureTextEntry
            autoCorrect={false}
            placeholder="password"
            style={styles.input}
          />
          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate("feed")}
          />
          <Button
            uppercase={false}
            title="forgot password?"
            color="rgba(0,0,0,0.0)"
            shadowRadius='0'
          />

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
    fontSize: 20,
    fontWeight: '900',
    color: '#ffffff',
  },
  titleTextt: {
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: '200',
    color: '#ffffff',
  },
});

export default Login;
