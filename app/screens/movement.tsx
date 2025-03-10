import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import {fakeClubs, fakeMovements} from '@/data/data';
import ClubList from "@/components/ClubList";
import MovementList from "@/components/MovementList";
import { SearchBar } from "react-native-screens";
import {useRouter} from 'expo-router'



export default function EditCommunityPage() {
  const [searchQuery, setSearchQuery] = useState('');
  /*const [filteredClubs, setFilteredClubs] = useState<typeof fakeClubs>([]);
  const [filteredMovements, setFilteredMovements] = useState<typeof fakeMovements>([]);*/

  /*useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();

    // Filtering the clubs based on name
    const filteredClubs = fakeClubs.filter(club => 
      club.name.toLowerCase().includes(lowerCaseQuery) ||
      club.description.toLowerCase().includes(lowerCaseQuery)
    )

    // Filtering the names
    const filteredMovements = fakeMovements.filter(movement => 
      movement.name.toLowerCase().includes(lowerCaseQuery) ||
      movement.description.toLowerCase().includes(lowerCaseQuery)
    )
    
    setFilteredClubs(filteredClubs);
    setFilteredMovements(filteredMovements);

  }, [setSearchQuery]);*/
  const filteredClubs = fakeClubs.filter(club => 
    club.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredMovements = fakeMovements.filter(movement => 
    movement.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <TextInput 
          style={styles.searchBar} 
          placeholder="Find Club or Movement"
          onChangeText={setSearchQuery}
          value = {searchQuery}
          />

        <Text style={styles.sectionLabel}>Clubs</Text>
        <ClubList  clubs={filteredClubs} showAnnouncements={false}/>
        <Text style={styles.sectionLabel}>Movements</Text>
        <MovementList movements={filteredMovements} showProgressBar={false} />
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
