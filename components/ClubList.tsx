import React from 'react'
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native'
//import {fakeClubs} from '../data/data'

/*const fakeClubs = [
    {
        image: require('../assets/images/runclub.png'),
        id : '1',
        name:"UW Running Club", 
        members: 20,
        announcements: ["5k Run tomorrow @ 12:30PM"],
        description: "Descripton for Running Club"
    }, 
    {
        image: require('../assets/images/soccerball.png'),
        id: '2',
        name: "UWB Soccer Club", 
        members: 96,
        announcements: [],
        description: "Description for Soccer Club"
    }, 
    {
        image: require('../assets/images/csseclub.png'),
        id: '3',
        name: "UWB CSSE Club", 
        members: 20, 
        announcements: ["Hackathon at ARC next week!"],
        description: "Description for CSSE Club"
    },
    {
        image: require('../assets/images/badminton.png'),
        id: '4', 
        name: "UWB Badminton Club", 
        members: 65, 
        announcements: [],
        description: "Description for Badminton Club"
    },
]*/

const ClubItem = ({name, members, announcements, image, showJoin, showAnnouncements}) => {
    return (
        <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.members}>{members} members</Text>
        </View>
      </View>
      {showAnnouncements && (
      <View style={styles.announcements}>
        {announcements.length > 0 ? (
          announcements.map((announcement, index) => (
            <Text key={index} style={styles.announcement}>{announcement}</Text>
          ))
        ) : (
          <Text style={styles.announcement}>No announcements</Text>
        )}
      </View>)}
      {showJoin && <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join</Text>
        </TouchableOpacity>}
    </View>
    );
}

const ClubList = ({clubs, showJoin=true, showAnnouncements=true}) => {
    return (
        <View>
            <FlatList 
                data={clubs}
                renderItem={({item}) => (
                    <ClubItem   image={item.image} 
                                name={item.name} 
                                members={item.members} 
                                announcements={item.announcements} 
                                showJoin={showJoin}
                                showAnnouncements={showAnnouncements}
                                />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#4F7F7F",
      padding: 10,
      borderRadius: 35,
      marginBottom: 10,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 1,
    },
    imageContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 35,
      marginRight: 35,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    name: {
      top: 1,
      right: 30,
      fontSize: 15,
      fontWeight: 'bold',
    },
    members: {
      fontSize: 10,
      color: '#fff',
      position: 'absolute',
      top: -15,
      right: -20,
    },
    announcements: {
      marginTop: 4,
      marginLeft: 55,
    },
    announcement: {
      fontSize: 14,
      color: '#fff',
    },
    description: {
      fontSize: 14,
      color: '#fff',
    },
    joinButton: {
      marginTop: 10,
      backgroundColor: '#2C5D63',
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 10,
      alignSelf: 'flex-start',
    },
    joinButtonText: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
    }
});

export default ClubList;