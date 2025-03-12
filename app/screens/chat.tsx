import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useNavigation } from "expo-router";
import { io, Socket } from "socket.io-client";

export default function ChatScreen() {
  interface Message {
    id: string;
    text: string;
    sender: string;
  }

  const [messages, setMessages] = useState<Message[]>([]);
  const navigation = useNavigation();
  const router = useRouter();
  const socketRef = useRef<Socket | null>(null);

  const { id, name, image } = useLocalSearchParams(); // Connection details
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    socketRef.current = io("http://localhost:3000"); // Replace with your IP and port

    navigation.setOptions({ tabBarStyle: { display: "none" } });

    socketRef.current.on("connect", () => {
      console.log("Connected to server");
    });

    socketRef.current?.on("messages", (receivedMessages) => {
      setMessages(receivedMessages);
    });

    socketRef.current?.on("newMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socketRef.current?.disconnect();
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    };
  }, [navigation]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const messageData = {
      id: String(Date.now()),
      text: newMessage,
      sender: "me",
    };

    if (socketRef.current) {
      socketRef.current.emit("newMessage", messageData); // Send the message to the server
    }
    setNewMessage(""); // Clear input
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={90} // Adjust based on your header height
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Image source={{ uri: String(image) }} style={styles.profileImage} />
        <Text style={styles.name}>{name}</Text>
      </View>

      {/* Message List */}
      <FlatList
        data={messages}
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
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
      />

      {/* Input Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
          placeholder="Type a message..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#2C5D63",
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
  messageList: {
    padding: 10,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    maxWidth: "75%",
  },
  myMessage: {
    backgroundColor: "#2C5D63",
    alignSelf: "flex-end",
    color: "white",
  },
  theirMessage: {
    backgroundColor: "#ddd",
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 16,
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  inputField: {
    flex: 1,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    backgroundColor: "#fff",
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#2C5D63",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
