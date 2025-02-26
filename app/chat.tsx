import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useNavigation } from "expo-router";
import { io } from "socket.io-client";

export default function ChatScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const socket = io("http://localhost:3000");
    navigation.setOptions({ tabBarStyle: { display: "none" } });

    return () => {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    };
  }, [navigation]);

  const router = useRouter();
  const { id, name, image } = useLocalSearchParams(); // Get connection details

  const [messages, setMessages] = useState([
    { id: "1", text: "Hey there!", sender: "them" },
    { id: "2", text: "How’s it going?", sender: "me" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([
      ...messages,
      { id: String(Date.now()), text: newMessage, sender: "me" },
    ]);
    setNewMessage(""); // Clear input after sending
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Image source={{ uri: image }} style={styles.profileImage} />
        <Text style={styles.name}>{name}</Text>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageBubble,
              item.sender === "me" ? styles.myMessage : styles.theirMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.messageContainer}
      />

      {/* Message Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C5D63",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#3A6B73",
  },
  backButton: {
    padding: 10,
  },
  backText: {
    fontSize: 20,
    color: "white",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
  messageContainer: {
    flexGrow: 1,
    padding: 10,
  },
  messageBubble: {
    maxWidth: "75%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#4CAF50",
  },
  theirMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#1E88E5",
  },
  messageText: {
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#3A6B73",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
  },
  sendText: {
    color: "white",
    fontWeight: "bold",
  },
});
