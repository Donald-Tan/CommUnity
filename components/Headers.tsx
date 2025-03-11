import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const Header = () => {
  const router = useRouter();
  const [notificationCount, setNotificationCount] = useState(3);

  const handleBellPress = () => {
    setNotificationCount(0);
    router.push("/notification"); // Navigate to the Notification screen
  };

  return (
    <View style={styles.header}>
      <Image
        source={require("@/assets/Icons/CommUnityLogo.png")}
        style={{ width: 300, height: 70 }}
      />
      <TouchableOpacity
        onPress={handleBellPress}
        style={styles.notificationContainer}
      >
        <Image
          id="header"
          source={require("@/assets/Icons/notificationBell.png")}
          style={{ width: 30, height: 30 }}
        />
        {notificationCount > 0 && (
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>{notificationCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  notificationContainer: {
    position: "relative",
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
});
export default Header;
