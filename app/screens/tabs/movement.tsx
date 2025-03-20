import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, FlatList, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fakeGroups } from "@/data/data";
import GroupList from "@/components/GroupList";
import GroupCreate from "@/components/GroupCreate";

export default function MovementPage() {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreatingGroup, setIsCreatingGroup] = useState(false);

  // Filter groups based on search query
  const filteredGroups = fakeGroups.filter((group) =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateGroupPress = () => {
    setIsCreatingGroup(true);
  }

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom + 50 }]}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search groups..."
        placeholderTextColor="#ccc"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredGroups}
        renderItem={({ item }) => (
          <GroupList groups={[item]} showAnnouncements={false} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }} // Extra space for bottom visibility
      />
      <Button title="Create Group" onPress={handleCreateGroupPress} />
      {isCreatingGroup && <GroupCreate />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C5D63",
    paddingHorizontal: 10,
  },
  searchBar: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    marginVertical: 10,
    color: "#333",
  },
});
