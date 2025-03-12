import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Bar } from "react-native-progress";
import { useRouter } from "expo-router";

const GroupItem = ({ item, showProgressBar, showJoin }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "../GroupPage",
      params: { id: item.id.toString() },
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.header}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.members}>{item.members} joined</Text>
          </View>
        </View>

        {showProgressBar && item.progress !== undefined && (
          <Bar
            style={styles.bar}
            progress={item.progress}
            color="white"
            width={100}
          />
        )}

        {showJoin && (
          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Join</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const GroupList = ({ groups, showProgressBar = true, showJoin = true }) => {
  return (
    <FlatList
      data={groups}
      renderItem={({ item }) => (
        <GroupItem
          item={item}
          showProgressBar={showProgressBar}
          showJoin={showJoin}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default GroupList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4F7F7F",
    padding: 10,
    borderRadius: 35,
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
    marginRight: 15,
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  members: {
    fontSize: 12,
    color: "#d1d1d1",
  },
  joinButton: {
    backgroundColor: "#2C5D63",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  joinButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  bar: {
    marginTop: 10,
    alignSelf: "flex-start",
    width: "90%", // Ensures the progress bar scales nicely
  },
});
