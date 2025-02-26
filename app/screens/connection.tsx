import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

const connectionRequests = [
  {
    id: "1",
    image: require("@/assets/images/nav bar/icons8-test-account-48.png"),
  },
  {
    id: "2",
    image: require("@/assets/images/nav bar/icons8-test-account-48.png"),
  },
];

const connections = [
  {
    id: "3",
    name: "Sarah Lee",
    message: "Let’s catch up soon!",
    image: require("@/assets/images/nav bar/icons8-test-account-48.png"),
  },
  {
    id: "4",
    name: "John Doe",
    message: "Excited to collaborate!",
    image: require("@/assets/images/nav bar/icons8-test-account-48.png"),
  },
];

export default function ConnectionsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter(); // Initialize router for navigation

  const filteredConnections = connections.filter((connection) =>
    connection.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openChat = (connection) => {
    router.push({
      pathname: "/chat",
      params: {
        id: connection.id,
        name: connection.name,
        image: connection.image, // Passing image too
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* Connection Requests Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.header}>Request</Text>
        <FlatList
          data={connectionRequests}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.requestList}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.requestItem}>
              <Image source={item.image} style={styles.profileImage} />
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Connections Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.header}>Connections</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <FlatList
          data={filteredConnections}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.connectionList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.connectionItem}
              onPress={() => openChat(item)} // Navigate on tap
            >
              <Image source={item.image} style={styles.profileImage} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.message}>{item.message}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C5D63",
    padding: 10,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  searchBar: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  requestList: {
    paddingBottom: 10,
  },
  connectionList: {
    paddingBottom: 10,
  },
  requestItem: {
    alignItems: "center",
    marginRight: 10,
  },
  connectionItem: {
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
