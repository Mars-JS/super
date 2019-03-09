import { Dimensions } from "react-native";

export default {
  images: {
    heartIcon: require("../../assets/heart.png"),
    facebookIcon: require("../../assets/Facebook-share-icon.png"),
    bubbleIcon: require("../../assets/bubble.png"),
    arrowIcon: require("../../assets/arrow.png"),
    searchIcon: require("../../assets/search.png"),
  },
  styleConstants: {
    rowHeight: 50,
    oneThirdWidth: Dimensions.get("window").width / 3
  },
  //baseUrl: "https://instaapi-kaxrq4.turbo360-vertex.com"
  baseUrl: "http://localhost:3000/api/"
};
