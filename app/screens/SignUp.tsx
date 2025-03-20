import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Image,
  Dimensions,
} from "react-native";
import { useState } from "react";
import React from "react";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { FIREBASE_AUTH, db } from "../../FirebaseConfig";
import { Link } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "./types"; // Import the types
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


// Get the screen width to adjust the logo size dynamically
const { width } = Dimensions.get("window");

type SignUpNavigationProp = NativeStackNavigationProp<RootStackParamList, "SignUp">;

const SignUp = () => {
  const auth = FIREBASE_AUTH;
  const nav = useNavigation<SignUpNavigationProp>();;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      //Store user in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        createdAt: new Date(),
        profilePicUrl: null, //update
      });

      nav.navigate("CreateAccount", { userId: user.uid });
    } catch (error: any) {
      Alert.alert("Sign up failed", "Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/Icons/CommUnityLogo.png")}
          style={[styles.logo, { width: width * 0.8, height: width * 0.2 }]} // Responsive logo size
        />
      </View>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput
        value={name}
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(text) => setName(text)}
        placeholderTextColor="#aaa"
      />
      <TextInput
        value={email}
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        placeholderTextColor="#aaa"
      />
      <TextInput
        secureTextEntry={true}
        value={password}
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
        placeholderTextColor="#aaa"
      />
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      )}

      <Link href="./login" style={styles.loginButton}>
        <Text style={styles.loginText}>Already have an account? Log in</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C5D63",
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
  },
  header: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    marginVertical: 8,
    height: 50,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    backgroundColor: "transparent",
    borderColor: "#fff",
    fontSize: 16,
  },
  button: {
    width: "80%",
    padding: 15,
    backgroundColor: "#81D8D0",
    borderRadius: 6,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  loginButton: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "#bbb",
    fontSize: 14,
    textAlign: "center",
  },
});

export default SignUp;