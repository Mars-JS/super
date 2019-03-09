import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import {
  MainFeed,
  Login,
  Register,
  Camera,
  Profile,
  Search,
} from "./components/screens";

import {
  SwitchNavigator,
  TabNavigator,
  StackNavigator
} from "react-navigation";

/* const Tabs = TabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile
}); */

const BrowseStack = StackNavigator({
  feed: MainFeed,
  search: Search,
  camera: Camera,
  profile: Profile,
},
  {
    navigationOptions: () => ({
      headerStyle: { position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }
    }),
  }
  );

const IntroStack = StackNavigator({
  login: Login,
  register: Register,

},
  {
    navigationOptions: () => ({
      headerStyle: { position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 }
    }),
  }
);

const MainStack = SwitchNavigator({
  intro: IntroStack,
  main: BrowseStack
},
  {
    navigationOptions: () => ({
      header: null,
    }),
  }
);


/* MainStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
}; */

class HomesCo extends Component {
  
  storeId() {
    console.log("calling");
  };

  render() {
    return <MainStack />;
  }
};

export default HomesCo;
