// MovementPage.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function MovementPage() {
  const route = useRoute();
  const { movement } = route.params as {movement : any};

  return (
    <ScrollView>
      <Text>{movement.name}</Text>
      <Image source={movement.image} />
      <Text>Members: {movement.members}</Text>
      <Text>Description: {movement.description}</Text>
      <Text>Progress: {movement.progress * 100}%</Text>
    </ScrollView>
  );
}