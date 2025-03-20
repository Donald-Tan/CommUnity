import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../FirebaseConfig";

const countries = [
  "USA",
  "Canada",
  "UK",
  "Australia",
  "India",
  "Germany",
  "France",
  "Japan",
  "China",
  "Brazil",
];
const ethnicities = [
  "Black",
  "Asian",
  "White",
  "Arabic",
  "Hispanic",
  "Mixed",
  "Other",
];
const graduationYears = Array.from({ length: 20 }, (_, i) =>
  (new Date().getFullYear() + i).toString()
);

const CreateAccount = ({ route }: { route: any }) => {
  const { userId } = route.params;

  const [form, setForm] = useState({
    name: "",
    birthday: null as Date | null,
    gender: null as string | null,
    ethnicity: null as string | null,
    country: null as string | null,
    graduationYear: null as string | null,
    major: "",
  });

  const [showGenderPicker, setShowGenderPicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);
  const [newInterest, setNewInterest] = useState("");

  const handleChange = (key: string, value: string | Date | null) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const addInterest = () => {
    if (newInterest.trim()) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest("");
    }
  };

  const removeInterest = (index: number) => {
    setInterests(interests.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (
      !form.name ||
      !form.birthday ||
      !form.gender ||
      !form.country ||
      !form.ethnicity
    ) {
      Alert.alert("Error", "Please fill out all required fields.");
      return;
    }

    const userData = {
      name: form.name,
      birthday: form.birthday,
      gender: form.gender,
      ethnicity: form.ethnicity,
      country: form.country,
      graduationYear: form.graduationYear,
      major: form.major,
      interests: interests,
    };

    try {
      //Save to existing account
      await setDoc(doc(db, "users", userId), userData);

      Alert.alert("Success", "Account details saved successfully!");

      //navigate to other screen
    } catch (error) {
      console.error("Error saving data to Firestore: ", error);
      Alert.alert("Error", "Failed to save data.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("@/assets/Icons/CommUnityLogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={form.name}
        onChangeText={(value) => handleChange("name", value)}
      />

      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.dropdownText}>
          {form.birthday ? form.birthday.toDateString() : "Choose Birthday"}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={form.birthday || new Date()} // Default to current date if null
          mode="date"
          display="default"
          onChange={(event, date) => {
            setShowDatePicker(false);
            if (date) handleChange("birthday", date);
          }}
        />
      )}

      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setShowGenderPicker(!showGenderPicker)}
      >
        <Text style={styles.dropdownText}>
          {form.gender || "Select Gender"}
        </Text>
      </TouchableOpacity>
      {showGenderPicker && (
        <View style={styles.picker}>
          <TouchableOpacity onPress={() => handleChange("gender", "Male")}>
            <Text style={styles.pickerItem}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleChange("gender", "Female")}>
            <Text style={styles.pickerItem}>Female</Text>
          </TouchableOpacity>
        </View>
      )}

      <TextInput
        style={styles.input}
        placeholder="Ethnicity"
        value={form.ethnicity || ""}
        onChangeText={(value) => handleChange("ethnicity", value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Country"
        value={form.country || ""}
        onChangeText={(value) => handleChange("country", value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Graduation Year"
        value={form.graduationYear || ""}
        onChangeText={(value) => handleChange("graduationYear", value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Major"
        value={form.major}
        onChangeText={(value) => handleChange("major", value)}
      />

      <View style={styles.interestContainer}>
        <TextInput
          style={[styles.input, styles.interestInput]}
          placeholder="Add Interest"
          value={newInterest}
          onChangeText={(value) => setNewInterest(value)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addInterest}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {interests.map((interest, index) => (
        <View key={index} style={styles.interestItem}>
          <Text style={styles.interestText}>{interest}</Text>
          <TouchableOpacity onPress={() => removeInterest(index)}>
            <Text style={styles.removeButton}>X</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save Details</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#2C5D63",
    alignItems: "center",
    padding: 20,
  },
  logo: { width: "80%", height: 100, marginBottom: 20 },
  title: { color: "#fff", fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  input: {
    width: "100%",
    backgroundColor: "#4E848F",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    color: "#fff",
  },
  dropdownButton: {
    width: "100%",
    backgroundColor: "#4E848F",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  dropdownText: { color: "#fff", textAlign: "center" },
  picker: {
    width: "100%",
    backgroundColor: "#4E848F",
    borderRadius: 10,
    marginBottom: 10,
  },
  pickerItem: {
    padding: 12,
    color: "#fff",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#88BDBC",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    width: "100%",
  },
  buttonText: { color: "#2C5D63", fontWeight: "bold", fontSize: 18 },
  interestContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  },
  interestInput: {
    width: "90%",
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "#88BDBC",
    padding: 10,
    borderRadius: 10,
  },
  removeButton: { color: "red", fontWeight: "bold", marginLeft: 10 },
  interestItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  interestText: { color: "#fff" },
});

export default CreateAccount;
