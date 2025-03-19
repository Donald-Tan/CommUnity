import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ProfileInfo from "@/components/ProfileInfo";

const { width } = Dimensions.get("window");

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.name}>Victor Aguilar</Text>
        <TouchableOpacity style={styles.editIcon}>
          <FontAwesome name="pencil" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <Image
        source={require("@/assets/images/VictorPP.png")}
        style={styles.profileImage}
      />

      <ProfileInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C5D63",
    alignItems: "center",
    paddingVertical: 20,
  },
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginBottom: 10,
  },
  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  editIcon: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 5,
  },
  profileImage: {
    width: width,
    height: width,
    borderRadius: 10,
    marginBottom: 10,
    padding: 20,
  },
});

export default Profile;
