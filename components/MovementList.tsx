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

const fakeMovements = [
  {
    id: "1",
    image: require("../assets/images/no-smoking.png"),
    name: "No Smoking Movement",
    description: "Description about no smoking",
    members: 101,
    progress: 0.5,
  },
  {
    id: "2",
    image: require("../assets/images/daily-run.png"),
    name: "Daily Running Movement",
    description: "Description about running daily",
    members: 24,
    progress: 0.8,
  },
];

const MovementItem = ({
  name,
  members,
  image,
  progress,
  showProgressBar,
  showJoin,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.members}>{members} members</Text>
          {showProgressBar && (
            <Bar
              style={styles.bar}
              progress={progress}
              color="white"
              width={100}
            />
          )}
        </View>
      </View>
      {showJoin && (
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const MovementList = ({ showProgressBar = true, showJoin = true }) => {
  return (
    <View>
      <FlatList
        data={fakeMovements}
        renderItem={({ item }) => (
          <MovementItem
            image={item.image}
            name={item.name}
            members={item.members}
            progress={item.progress}
            showProgressBar={showProgressBar}
            showJoin={showJoin}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4F7F7F",
    padding: 10,
    borderRadius: 35,
    marginBottom: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
    marginRight: 35,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    top: -10,
    right: 30,
    fontSize: 15,
    fontWeight: "bold",
  },
  members: {
    fontSize: 10,
    color: "#fff",
    position: "absolute",
    top: -15,
    right: -5,
  },
  bar: {
    marginTop: 20,
    marginLeft: -75,
  },
  announcement: {
    fontSize: 14,
    color: "#fff",
  },
  description: {
    fontSize: 14,
    color: "#fff",
  },
  joinButton: {
    marginTop: 10,
    backgroundColor: "#2C5D63",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  joinButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default MovementList;
