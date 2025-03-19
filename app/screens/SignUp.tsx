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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH, db } from "../../FirebaseConfig";
import { Link } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "expo-router";

// Get the screen width to adjust the logo size dynamically
const { width } = Dimensions.get("window");

const SignUp = () => {
  const auth = FIREBASE_AUTH;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();


  const validateFields = () => {
    const errors = [];

    if (!name.trim()) {
      console.log("Name is empty");
      // @ts-ignore
      errors.push("Please Enter Your Name");
    }

    if (!email.trim() || !/\w+@\w+.com/i.test(email)) {
      console.log("Email is empty");
      // @ts-ignore
      errors.push("Please Enter a Valid Email Address");
    }

    if (!password.trim() || !/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/.test(password)) {
      console.log("Password is empty");
      // @ts-ignore
      errors.push("Please Enter a valid Password");
    }
    
    if (errors.length > 0) {
      setError(errors.join(", ") as any);
      return false;
    }

    setError(null);
    console.log("Success");
    return true;

  }

  const handleSignUp = async () => {
    /*setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      Alert.alert("Success", "Logged in successfully!");
    } catch (error: any) {
      Alert.alert("Login failed", "Please try again");
    } finally {
      setLoading(false);
    }*/
    
      if (!validateFields()) return;

      setLoading(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user data to the firestore
        await setDoc(doc(db, "users", user.uid), {
          uid: userCredential.user.uid,
          name: name,
          email: userCredential.user.email, 
          createdAt: new Date()
        });

        Alert.alert("Success", "Account Created Successfully!");
        router.push("./login");
      } catch (error: any) {
        if (error.code === "/auth/email-already-in-use") {
          Alert.alert("Error", "Email Already In Use. Please Try Again.");
        } else {
          Alert.alert("Error", "Error Creating Account. Please Try Again.");
        }
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
      {error ? (
        <Text style={{ color: "#ff0d2a", fontWeight: "bold" }}>{error}</Text>
      ) : null}
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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
