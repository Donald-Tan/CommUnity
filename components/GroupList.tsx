import React from 'react'
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native'
import { Bar } from 'react-native-progress'

const GroupItem = ({name, members, announcements, image, progress, showProgressBar, showJoin, showAnnouncements}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
                <View style={styles.header}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.members}>{members} members</Text>
                </View>
            </View>
            {showAnnouncements && announcements !== undefined && (
                <View style={styles.announcements}>
                    {announcements.length > 0 ? (
                        announcements.map((announcement, index) => (
                            <Text key={index} style={styles.announcement}>{announcement}</Text>
                        ))
                    ) : (
                        <Text style={styles.announcement}>No announcements</Text>
                    )}
                </View>
            )}
            {showProgressBar && progress !== undefined && <Bar style={styles.bar} progress={progress} color="white" width={100} />}
            {showJoin && <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinButtonText}>Join</Text>
            </TouchableOpacity>}
        </View>
    );
}

const GroupList = ({groups, showProgressBar = true, showJoin = true, showAnnouncements = true}) => {
    return (
        <View>
            <FlatList
                data={groups}
                renderItem={({item}) => (
                    <GroupItem 
                        image={item.image}
                        name={item.name} 
                        members={item.members}
                        announcements={item.announcements}
                        progress={item.progress}
                        showJoin={showJoin}
                        showAnnouncements={showAnnouncements}
                        showProgressBar={showProgressBar}
                    />
                )}
                keyExtractor={(item) => item.id}
            >
            </FlatList>
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
        top: -10,
        right: 30,
        fontSize: 15,
        fontWeight: 'bold',
      },
      members: {
        fontSize: 10,
        color: '#fff',
        position: 'absolute',
        top: -15,
        right: -5,
      },
      bar: {
        marginTop: 20,
        marginLeft: 5,
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
})

export default GroupList;