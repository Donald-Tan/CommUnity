import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const ConnectionItem = ({ name, message, image, onPress }) => (
  <TouchableOpacity style={styles.connectionItem} onPress={onPress}>
    <Image source={image} style={styles.profileImage} />
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  </TouchableOpacity>
);

const ConnectionList = ({ connections, onConnectionPress }) => (
  <FlatList
    data={connections}
    keyExtractor={(item) => item.id}
    contentContainerStyle={styles.connectionList}
    renderItem={({ item }) => (
      <ConnectionItem
        name={item.name}
        message={item.message}
        image={item.image}
        onPress={() => onConnectionPress(item)}
      />
    )}
  />
);

const styles = StyleSheet.create({
  connectionList: {
    paddingBottom: 10,
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

export default ConnectionList;
