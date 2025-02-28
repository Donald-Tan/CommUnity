import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from '../../components/Headers'
import ClubList from '../../components/ClubList'
import MovementList from '../../components/MovementList'

export default function EditCommunityPage() {
  return (
    <View style={styles.container}>
      <Header />
      <ClubList />
      <MovementList />
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
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
