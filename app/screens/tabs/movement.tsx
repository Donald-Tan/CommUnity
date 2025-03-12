import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { fakeGroups } from "@/data/data";
import GroupList from "@/components/GroupList";
import { useRouter } from "expo-router";

export default function Movement() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGroups = fakeGroups.filter((group) =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <TextInput
          style={styles.searchBar}
          placeholder="Find Group"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />

        <Text style={styles.sectionLabel}>Groups</Text>
        <GroupList groups={filteredGroups} showJoin={true} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C5D63",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  content: {
    flexGrow: 1,
    width: "100%",
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: 15,
    marginBottom: 5,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  searchBar: {
    width: "100%",
    height: 50,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderColor: "transparent",
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "#f3f3f4",
    color: "#0d0c22",
  },
});
