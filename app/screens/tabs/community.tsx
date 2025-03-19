import React, { useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "@/components/Headers";
import { fakeGroups } from "@/data/data";
import GroupList from "@/components/GroupList";

export default function EditCommunityPage() {
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Header scrollY={scrollY} />
      <Animated.FlatList
        data={fakeGroups}
        renderItem={({ item }) => <GroupList groups={[item]} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          paddingTop: 60, // Space for the header
          paddingBottom: insets.bottom + 70, // Prevent tab bar overlap
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C5D63",
    paddingHorizontal: 10,
  },
});
