import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";

const movementNotifications = [
  {
    id: "1",
    name: "Donald",
    message: "is interested in connecting",
    image: require("@/assets/images/nav bar/icons8-test-account-48.png"),
  },
];

const allNotifications = [
  {
    id: "2",
    name: "Adam Thomas",
    message: "sent a message",
    image: require("@/assets/images/nav bar/icons8-test-account-48.png"),
  },
  {
    id: "1",
    name: "Donald",
    message: "is interested in connecting",
    image: require("@/assets/images/nav bar/icons8-test-account-48.png"),
  },
];

export default function NotificationScreen() {
  const [activeTab, setActiveTab] = useState("movement");
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
      toValue: tab === "movement" ? 0 : width / 2,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const renderNotificationItem = ({ item }) => (
    <TouchableOpacity
      style={styles.notificationItem}
      onPress={() => openChat(item)}
    >
      <Image source={item.image} style={styles.profileImage} />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tabIconContainer}
          onPress={() => handleTabPress("movement")}
        >
          <Image
            source={require("@/assets/images/nav bar/icons8-handshake-50.png")}
            style={styles.tabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabIconContainer}
          onPress={() => handleTabPress("all")}
        >
          <Image
            source={require("@/assets/images/nav bar/icons8-walk-50.png")}
            style={styles.tabIcon}
          />
        </TouchableOpacity>
        <Animated.View
          style={[styles.slider, { transform: [{ translateX: animation }] }]}
        />
      </View>

      {/* Notification List */}
      <FlatList
        data={
          activeTab === "movement" ? movementNotifications : allNotifications
        }
        keyExtractor={(item) => item.id}
        renderItem={renderNotificationItem}
        style={styles.notificationList}
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
  notificationList: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#3A6B73",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  message: {
    fontSize: 14,
    color: "lightgray",
  },
});
