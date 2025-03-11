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
import { connections, connectionRequests } from "@/data/data";
import ConnectionList from "@/components/ConnectionList";

export default function ConnectionsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredConnections = connections.filter((connection) =>
    connection.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openChat = (connection) => {
    router.push({
      pathname: "/chat",
      params: {
        id: connection.id,
        name: connection.name,
        image: connection.image,
      },
    });
  };

  return (
    <View style={styles.container}>
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

      <View style={styles.sectionContainer}>
        <Text style={styles.header}>Connections</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <ConnectionList
          connections={filteredConnections}
          onConnectionPress={openChat}
        />
      </View>
    </View>
  );
}

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
  requestItem: {
    alignItems: "center",
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});
