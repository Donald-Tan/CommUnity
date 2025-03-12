import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fakeGroups } from "@/data/data";

const GroupPage = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const group = fakeGroups.find((group) => group.id.toString() === id);

  if (!group) {
    return <Text>Group not found</Text>;
  }

  const handleJoin = () => {
    alert(`Joined ${group.name}!`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <Image style={styles.groupImage} source={group.image} />

        <Text style={styles.groupName}>{group.name}</Text>
        <Text style={styles.groupDescription}>{group.description}</Text>

        <View style={styles.establishedDateContainer}>
          <Text style={styles.establishedDate}>
            Established: {group.establishedDate}
          </Text>
        </View>

        <TouchableOpacity style={styles.joinButton} onPress={handleJoin}>
          <Text style={styles.joinButtonText}>Join Group</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default GroupPage;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#2C5D63",
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  contentContainer: {
    alignItems: "center",
    width: "80%",
  },
  groupImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20, // Added spacing to improve layout
  },
  groupName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  groupDescription: {
    fontSize: 16,
    color: "#f0f0f0",
    textAlign: "center",
  },
  establishedDateContainer: {
    backgroundColor: "#e0e0e0",
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
  },
  establishedDate: {
    fontSize: 14,
    color: "gray",
  },
  joinButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  joinButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 10,
    marginLeft: "10%",
  },
  backButtonText: {
    color: "blue",
    fontSize: 16,
  },
});
