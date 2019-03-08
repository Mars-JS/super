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

class Header extends React.Component {

  render() {
    return (
          <Text style={styles.titleText}>H O M E S <Text style={styles.titleTextt}> C O .</Text></Text>
    );
  }
}

const styles = StyleSheet.create({

  titleText: { //part 1
    fontFamily: 'Cochin',
    fontSize: 30,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 175,
  },
  titleTextt: { //part 2
    fontFamily: 'Cochin',
    fontSize: 30,
    fontWeight: '200',
    color: '#ffffff',
  },

});

export default Header;
