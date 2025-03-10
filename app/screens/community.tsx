import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from '../../components/Headers'
import { fakeGroups } from "@/data/data";
import GroupList from "@/components/GroupList";

export default function EditCommunityPage() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        {/* Groups Section */}
        <Text style={styles.sectionLabel}>Groups</Text>
        <GroupList  groups={fakeGroups} showJoin={false}/>
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
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: 15,
    marginBottom: 5,
    alignSelf: "flex-start", // Aligns text to the left
    marginLeft: 10,
  },
});
