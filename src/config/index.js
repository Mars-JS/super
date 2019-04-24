import { Dimensions } from "react-native";

export default {
  images: {
    heartIcon: require("../../assets/heart.png"),
    facebookIcon: require("../../assets/Facebook-share-icon.png"),
    bubbleIcon: require("../../assets/bubble.png"),
    arrowIcon: require("../../assets/arrow.png"),
    searchIcon: require("../../assets/search.png"),
    houseIcon: require("../../assets/house.png"),
    calendarIcon: require("../../assets/calendar.png"),
    mailIcon: require("../../assets/mail.png"),
    hamburgerIcon: require("../../assets/hamburger.png"),
    cartIcon: require("../../assets/cart.png"),
    mapIcon: require("../../assets/map.png"),
    profileIcon: require("../../assets/profile.png"),
    logoIcon: require("../../assets/logo.png")

  },
  styleConstants: {
    rowHeight: 50,
    oneThirdWidth: Dimensions.get("window").width / 3
  },
  //baseUrl: "https://instaapi-kaxrq4.turbo360-vertex.com"
  baseUrl: "http://localhost:3000/api/"
};
