import React, { Component } from "react";
import {
  MainFeed,
  Login,
  Register,
  Camera,
  Profile,
  Search,
  SearchFilters,
  MapSearch,
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
  map: MapSearch,
  camera: Camera,
  profile: Profile,
},
  {
    navigationOptions: () => ({
      headerStyle: { position: 'absolute',
          backgroundColor: 'transparent',
          zIndex: 100, top: 0, left: 0, right: 0 }
    }),
  }
);

const IntroStack = StackNavigator(
  {
    login: Login,
    register: Register,
    search: Search,
    filter: SearchFilters,
  },
  {
    navigationOptions: () => ({
      headerStyle: {
        position: "absolute",
        backgroundColor: "transparent",
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
        height: 18,
        marginBottom: 20

      }
    })
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
