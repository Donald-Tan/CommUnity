import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fakeGroups } from "@/data/data";
import GroupList from "@/components/GroupList";

export default function MovementPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movements</Text>
      <GroupList groups={fakeGroups} showAnnouncements={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C5D63",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 20,
  },
});
