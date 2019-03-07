import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity
} from "react-native";
import config from "../../config";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      screenWidth: Dimensions.get("window").width
    };
  }

  likeToggled() {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    console.log(this.props.item);
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);
    const imageSelection =
      this.props.item % 2 == 0 
        ? "https://lh3.googleusercontent.com/kkrrzcNJj_IYhh3DPPV4zQ6sfaLsLMM71MOBEj9ll3JiftwGz0aCvw55fdMWWemRAzw2ld7tEtQfQ5-w9DiCKii1LKw"
        : "https://lh3.googleusercontent.com/I6dvmagax3RHaVBmGWjVtFmjOu4dps7wlnNQK_YA0ov3hXesk90dlGuMM5LBuovOQ2WMtEcIJBb3NzmuG9ATBeU1ow";
    const imageUri = imageSelection + "=s" + imageHeight + "-c";

    const heartIconColor = this.state.liked ? "rgb(252,61,57)" : null;

    return (
      <View style={{ flex: 1, width: 100 + "%" }}>
        {/* <View style={styles.userBar}> //user profile stuff
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.userPic}
              source={require('.././screens/image/user0.png')}
            />
            <Text style={{ marginLeft: 10 }}>UserName</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>...</Text>
          </View>
        </View> */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            this.likeToggled();
          }}
        >
          <ImageBackground
            style={{ width: this.state.screenWidth, height: 555 }}
            source={{ uri: imageUri }} >

            <View style={styles.iconBar}>
              <Image
                style={[
                  styles.icon,
                  { height: 45, width: 45, tintColor: heartIconColor, marginBottom: -5 }
            ]}
                source={config.images.heartIcon}
              />
              <Text style={[styles.TextStyle]}>1.2k</Text>
              <Image
                style={[styles.icon, { height: 36, width: 36, marginRight: 10 }]}
                source={config.images.facebookIcon}
              />
              {/* <Image
                resizeMode="stretch"
                style={[styles.icon, { height: 50, width: 40 }]}
                source={config.images.arrowIcon}
              /> */}
            </View>
            {/* <View style={styles.iconBar}>
              <Image
                style={[styles.icon, { height: 30, width: 30 }]}
                source={config.images.heartIcon}
              />
              <Text>128 Likes</Text>
            </View> */}
            <View style={styles.infoView}>
              <Text style={styles.priceText}> $650,000 </Text>
              <Text style={styles.infoText}> 21045 Willignham Ct. </Text>
              <Text style={styles.infoText}> Boulder, Co 536727 </Text>
              <Text style={styles.infoText}> 3 beds | 4 baths | 3,100 sq.ft </Text>
              
              <TouchableOpacity
                style={styles.BuyButtonStyle}
                activeOpacity={.5}
                onPress={() => this.props.navigation.navigate("profile")}>
                <Text style={styles.TextStyle}> buy </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoView: {
    alignItems: "center",
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  priceText: {
    height: 25,
    width: 70 + "%",
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 50,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    textAlign: 'center',
    width: 100 + "%",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  infoText: {
    height: 25,
    width: 70 + "%",
    color: '#ffffff',
    fontWeight: 'bold',
    marginHorizontal: 50,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    textAlign: 'center',
    width: 100 + "%",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  BuyButtonStyle: {
    paddingTop: 11,
    paddingBottom: 11,
    marginLeft: 10,
    marginRight: 10,
    width: 50+"%",
    backgroundColor: 'rgb(79,180,209)',
    borderRadius: 0,
    borderWidth: 0,
    borderColor: '#fff',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
  userBar: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },

  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },

  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + "%",
    flexDirection: "column",
    alignItems: 'flex-end',
    backgroundColor:  'rgba(0,0,0,0)',
  },
  icon: {
    marginRight: 5,
  },
  TextStyle: {
    color: '#fff',
    marginRight: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Post;
