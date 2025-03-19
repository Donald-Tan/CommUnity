import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const ProfileInfo = () => {
  return (
    <View style={styles.infoContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.topTable}
      >
        <View style={styles.infoCard}>
          <Text>👥 22</Text>
        </View>
        <View style={styles.infoCard}>
          <Text>♂️ M</Text>
        </View>
        <View style={styles.infoCard}>
          <Text>🌎 Hispanic</Text>
        </View>
        <View style={styles.infoCard}>
          <Text>🏡 From Seattle</Text>
        </View>
      </ScrollView>

      <View style={styles.infoRow}>
        <Text>📖 Computer Science</Text>
        <Text>🎓 25'</Text>
      </View>

      <View style={styles.infoRow}>
        <Text>❤️ Soccer</Text>
      </View>

      <View style={styles.infoRow}>
        <Text>🚶 UWB soccer, NNN</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    width: "90%",
    backgroundColor: "#4E848F",
    borderRadius: 10,
    padding: 15,
  },
  topTable: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoCard: {
    backgroundColor: "#2C5D63",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    color: "#fff",
  },
});

export default ProfileInfo;
