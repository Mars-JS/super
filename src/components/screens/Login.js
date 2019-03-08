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

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      screenHeight: Dimensions.get("window").height
    };
  }

  render() {
    const imageHeight = Math.floor(this.state.screenHeight );
    const imageSelection = "https://lh3.googleusercontent.com/OpqsEUi7jtdlhPxcObLRUJbQ0PwBcaleUaw_7xSnFet1dDrnkAiEfcLJrp9w8XCYUePl5ZqIiKjDmsEdKAUvxTvj_YY";
    const imageUri = imageSelection + "=s" + imageHeight + "-c";
    return (
      
      <ImageBackground source={{ uri: imageUri }} style={{ width: '100%', height: '100%' }}>
        <View style={styles.overlayStyle} />

        <TouchableOpacity
          style={styles.SignUpButtonStyle}
          activeOpacity={.5}
          onPress={() => this.props.navigation.navigate("register")}>
          <Text style={styles.SignUpStyle}> s i g n   u p </Text>
        </TouchableOpacity>
        
        <View
          style={{
            height: 100 + "%",
            width: 100 + "%",
            flex: 1,
            alignItems: "center",
          }}
        >
          <Text style={styles.titleText}>H O M E S <Text style={styles.titleTextt}> C O .</Text></Text>

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
            placeholder="password"
            style={styles.input}
          />
          
          <TouchableOpacity
            style={styles.LoginButtonStyle}
            activeOpacity={.5}
            onPress={() => this.props.navigation.navigate("main")}>
            <Text style={styles.TextStyle}> l o g i n </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.pwButtonStyle}
            activeOpacity={.5}
            onPress={() => this.props.navigation.navigate("introstack")}>
            <Text style={styles.TextStyle}> f o r g o t  p a s s w o r d ? </Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={styles.SkipButtonStyle}
            activeOpacity={.5}
            onPress={() => this.props.navigation.navigate("feed")}>
            <Text style={styles.TextStyle}> skip </Text>
          </TouchableOpacity> */}

        </View>
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  overlayStyle:{
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 100 + "%",
    width: 100+"%",
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

  titleText: { //part 1
    fontFamily: 'Cochin',
    fontSize: 35,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 175,
  },
  titleTextt: { //part 2
    fontFamily: 'Cochin',
    fontSize: 35,
    fontWeight: '200',
    color: '#ffffff',
  },

  SignUpButtonStyle: {
    textAlign: 'right',
    marginTop: 0,
    paddingTop: 5,
    paddingBottom: 135,
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
  SignUpStyle:{
    color: '#fff',
    textAlign: 'right',
    fontWeight: '500',
  },
  
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  icon:{
    flex: 1,
    height: 25,
    width: 25,
  },
});

export default Login;
