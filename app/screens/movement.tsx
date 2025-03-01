import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import ClubList from "@/components/ClubList";
import MovementList from "@/components/MovementList";
import { SearchBar } from "react-native-screens";



export default function EditCommunityPage() {
  const [searchQuery, setSearchQuery] = useState('');



  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <TextInput style={styles.searchBar} placeholder="Find Club or Movement"/>
        <Text style={styles.sectionLabel}>Clubs</Text>
        <ClubList />
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
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
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
    alignSelf: "flex-start", // Aligns text to the left
    marginLeft: 10,
  },
  searchBar: {
    width: '100%',
    height: 50,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderColor: 'transparent',
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: '#f3f3f4',
    color: '#0d0c22',
  }
});
