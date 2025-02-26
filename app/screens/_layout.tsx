import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? require('@/assets/images/nav bar/icons8-crowd-48-2.png') : require('@/assets/images/nav bar/icons8-crowd-48.png')} style={{ width: 28, height: 28 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="movement"
        options={{
          title: 'Movement',
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? require('@/assets/images/nav bar/icons8-walking-50.png') : require('@/assets/images/nav bar/icons8-walk-50.png')} style={{ width: 28, height: 28 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="matching"
        options={{
          title: 'Matching',
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? require('@/assets/images/nav bar/icons8-connect-30.png') : require('@/assets/images/nav bar/icons8-connect-50.png')} style={{ width: 28, height: 28 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="connection"  // No need to import, expo-router will auto-detect app/connection.tsx
        options={{
          title: 'Connection',
          tabBarIcon: ({ focused}) => (
            <Image source={focused ? require('@/assets/images/nav bar/icons8-handshake-50.png') : require('@/assets/images/nav bar/icons8-handshake-50-2.png')} style={{ width: 28, height: 28 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: () => (
            <Image source={require('@/assets/images/nav bar/icons8-test-account-48.png')} style={{ width: 28, height: 28 }} />
            ),
        }}
            />
    </Tabs>
  );
}
