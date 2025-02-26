import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function EditCommunityPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit profile Page Here</Text>
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
