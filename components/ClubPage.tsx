// ClubPage.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function ClubPage() {
  const route = useRoute();
  const { club } = route.params as {club : any};

  return (
    <ScrollView>
      <Text>{club.name}</Text>
      <Image source={club.image} />
      <Text>Members: {club.members}</Text>
      <Text>Description: {club.description}</Text>
      {club.announcements.length > 0 && (
        <View>
          <Text>Announcements:</Text>
          {club.announcements.map((announcement, index) => (
            <Text key={index}>{announcement}</Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
}