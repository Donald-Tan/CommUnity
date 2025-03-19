import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

// Get the screen width to adjust the logo size dynamically
const { width } = Dimensions.get("window");

const Header = () => {
  const router = useRouter();
  const [notificationCount, setNotificationCount] = useState(3);

  const handleBellPress = () => {
    setNotificationCount(0);
    router.push("../notification"); // Navigate to the Notification screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleBellPress}
        style={styles.notificationContainer}
      >
        <Image
          id="header"
          source={require("@/assets/Icons/notificationBell.png")}
          style={styles.notificationBell}
        />
        {notificationCount > 0 && (
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>{notificationCount}</Text>
          </View>
        )}
      </TouchableOpacity>

      <Image
        source={require("@/assets/Icons/CommUnityLogo.png")}
        style={[styles.logo, { width: width * 0.4, height: width * 0.2 }]} // Make the logo responsive
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 40, // Increased paddingTop for space between logo and bell
    position: "relative",
  },
  notificationContainer: {
    position: "absolute",
    top: 20, // Position bell at the top right
    right: 20,
  },
  notificationBell: {
    width: 30,
    height: 30,
  },
  notificationBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  logo: {
    position: "absolute",
    top: 0,
    left: 10,
    resizeMode: "contain",
    marginBottom: 10,
  },
});

export default Header;
