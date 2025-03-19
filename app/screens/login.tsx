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
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { Link } from "expo-router";

// Get the screen width to adjust the logo size dynamically
const { width } = Dimensions.get("window");

const Login = () => {
  const auth = FIREBASE_AUTH;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Logged in successfully!");
    } catch (error: any) {
      Alert.alert("Login failed", "Please try again");
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
      <Text style={styles.header}>Log In</Text>
      <TextInput
        value={email}
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        placeholderTextColor="#aaa"
        textContentType="emailAddress"
      />
      <TextInput
        secureTextEntry={true}
        value={password}
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
        placeholderTextColor="#aaa"
        textContentType="password"
      />
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      )}

      <Link href="./SignUp" style={styles.registerButton}>
        <Text style={styles.registerText}>Don't have an account? Sign up</Text>
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
  registerButton: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    color: "#bbb",
    fontSize: 14,
    textAlign: "center",
  },
});

export default Login;
