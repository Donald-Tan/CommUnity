import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const HEADER_HEIGHT = 60; // Adjusted for compact size

const Header = ({ scrollY }: { scrollY: Animated.Value }) => {
  const router = useRouter();

  const translateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: "clamp",
  });

  const handleBellPress = () => {
    router.push("../notification");
  };

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <Image
        source={require("@/assets/Icons/justCommunityLogo.png")}
        style={styles.logo}
      />
      {/* Notification Bell */}
      <TouchableOpacity
        onPress={handleBellPress}
        style={styles.notificationContainer}
      >
        <Image
          source={require("@/assets/Icons/notificationBell.png")}
          style={styles.notificationBell}
        />
        <View style={styles.notificationBadge}>
          <Text style={styles.notificationText}>3</Text>
        </View>
      </TouchableOpacity>

      {/* Responsive Logo */}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: "#2C5D63",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Ensures it overlays content
  },
  notificationContainer: {
    position: "relative",
    padding: 5,
  },
  notificationBell: {
    width: 30,
    height: 30,
  },
  notificationBadge: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: "red",
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  logo: {
    height: 40, // Keeps logo proportional
    width: width * 0.3, // Adjust width based on height to prevent overlapping
    resizeMode: "contain",
  },
});

export default Header;
