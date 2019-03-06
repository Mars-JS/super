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

class Profile extends Component {

  render() {
    return (
      <ImageBackground source={require('./image/registerBG.jpg')} style={{ width: '100%', height: '100%', color: 'rgba(255, 255, 255, 0.6)' }}>
        <Text>Profile</Text>
        <View
          style={{
            height: 100 + "%",
            width: 100 + "%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >

          <Image
            style={{ width: 150, height: 150 }}
            source={require('./image/logo.png')}
          />
          <Text style={styles.TextStyle}> name lastname</Text>
          <Text style={styles.TextStyle}> username </Text>
          <Text style={styles.TextStyle}> email </Text>
          <Text style={styles.TextStyle}> phone </Text>
          <TouchableOpacity
            style={styles.EditButtonStyle}
            activeOpacity={.5}
            onPress={() => this.props.navigation.navigate("login")}>
            <Text style={styles.TextStyle}> EDIT </Text>
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
  EditButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    width: 200,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    borderWidth: 0,
    borderColor: '#fff'
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default Profile;
