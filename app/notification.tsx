import React, { useState, useRef } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import NotificationList from "@/components/NotificationList";
import { communityNotifications, connectionNotifications } from "@/data/data";

export default function NotificationScreen() {
  const [activeTab, setActiveTab] = useState("connection");
  const router = useRouter();
  const animation = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get("window");

  const openChat = (notification) => {
    router.push({
      pathname: "/chat",
      params: {
        id: notification.id,
        name: notification.name,
        image: notification.image,
      },
    });
  };

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    Animated.timing(animation, {
      toValue: tab === "connection" ? 0 : width / 2,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tabIconContainer}
          onPress={() => handleTabPress("connection")}
        >
          <Image
            source={
              activeTab === "connection"
                ? require("@/assets/images/nav bar/icons8-handshake-50.png")
                : require("@/assets/images/nav bar/icons8-handshake-50-2.png")
            }
            style={{ width: 28, height: 28 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabIconContainer}
          onPress={() => handleTabPress("community")}
        >
          <Image
            source={
              activeTab === "community"
                ? require("@/assets/images/nav bar/icons8-crowd-48-2.png")
                : require("@/assets/images/nav bar/icons8-crowd-48.png")
            }
            style={{ width: 28, height: 28 }}
          />
        </TouchableOpacity>
        <Animated.View
          style={[styles.slider, { transform: [{ translateX: animation }] }]}
        />
      </View>

      {/* Notification List */}
      <NotificationList
        data={
          activeTab === "connection"
            ? connectionNotifications
            : communityNotifications
        }
        onPress={openChat}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C5D63",
    padding: 10,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    width: "100%",
    position: "relative",
  },
  tabIconContainer: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  tabIcon: {
    width: 24,
    height: 24,
    tintColor: "white",
  },
  slider: {
    height: 3,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "50%",
  },
});
