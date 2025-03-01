import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from '../../components/Headers'
import ClubList from '../../components/ClubList'
import MovementList from '../../components/MovementList'

export default function EditCommunityPage() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        {/* Clubs Section */}
        <Text style={styles.sectionLabel}>Clubs</Text>
        <ClubList />

        {/* Movements Section */}
        <Text style={styles.sectionLabel}>Movements</Text>
        <MovementList />
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
