import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

// Define the props for GroupItem
interface GroupItemProps {
  item: {
    id: string;
    image: any;
    name: string;
    members: number;
    announcements?: string[];
  };
  showJoin?: boolean;
  showAnnouncements?: boolean; // Added this prop
}

const GroupItem: React.FC<GroupItemProps> = ({
  item,
  showJoin,
  showAnnouncements,
}) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "../GroupPage",
      params: { id: item.id.toString() },
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.header}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.members}>{item.members} joined</Text>
          </View>
        </View>

        {/* Announcements Section (Only if showAnnouncements is true) */}
        {showAnnouncements &&
          item.announcements &&
          item.announcements.length > 0 && (
            <View style={styles.announcementContainer}>
              {item.announcements.map((announcement, index) => (
                <Text key={index} style={styles.announcement}>
                  📢 {announcement}
                </Text>
              ))}
            </View>
          )}

        {/* Join Button */}
        {showJoin && (
          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Join</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

// Define the props for GroupList
interface GroupListProps {
  groups: GroupItemProps["item"][]; // Reuse the GroupItem item type
  showJoin?: boolean;
  showAnnouncements?: boolean; // Added this prop
}

const GroupList: React.FC<GroupListProps> = ({
  groups,
  showJoin = true,
  showAnnouncements = false,
}) => {
  return (
    <FlatList
      data={groups}
      renderItem={({ item }) => (
        <GroupItem
          item={item}
          showJoin={showJoin}
          showAnnouncements={showAnnouncements}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default GroupList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4F7F7F",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
    marginRight: 15,
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  members: {
    fontSize: 12,
    color: "#d1d1d1",
  },
  announcementContainer: {
    marginTop: 10,
    backgroundColor: "#1E3A3A",
    padding: 8,
    borderRadius: 8,
  },
  announcement: {
    color: "#FFD700",
    fontSize: 12,
  },
  joinButton: {
    backgroundColor: "#2C5D63",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginTop: 10,
  },
  joinButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
