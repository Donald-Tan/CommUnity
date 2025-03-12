import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from "../../../components/Headers";
import { fakeGroups } from "@/data/data";
import GroupList from "@/components/GroupList";

export default function EditCommunityPage() {
  const renderGroupList = () => (
    <>
      <Text style={styles.sectionLabel}>Groups</Text>
      <GroupList
        groups={fakeGroups}
        showAnnouncements={true}
        showJoin={false}
      />
    </>
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={[{ key: "groups" }]}
        renderItem={renderGroupList}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C5D63",
    padding: 10,
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
});
