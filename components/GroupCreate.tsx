import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FIREBASE_AUTH, db } from '@/FirebaseConfig';
import { doc, addDoc, updateDoc, collection } from 'firebase/firestore';
import { useRouter } from 'expo-router';

const GroupCreate = () => {
    const [groupName, setGroupName] = useState("");
    const [groupDescription, setGroupDescription] = useState("");
    const [groupImage, setGroupImage] = useState("");

    const handleCreateGroup = async () => {
        try {
            const user = FIREBASE_AUTH.currentUser;

            if (!user) {
                alert("You must be logged in to create a group!");
                return;
            }

            const groupData = {
                name: groupName,
                description: groupDescription,
                image: groupImage,
                createdAt: new Date(),
                founder: user.uid, 
                members: [user.uid]
            };

            // Add the group
            const group = await addDoc(collection(db, "groups"), groupData);
            alert("Group has been created Successfully");
            // Need to add group navigation when new group is created below


        } catch (error ) {
            alert(error);
        }
    }

    return (
        <View style={styles.container}>
            <Text>Create a Group</Text>
            <TextInput placeholder="Group Name" value={groupName} onChangeText={setGroupName} style={styles.input} />
            <TextInput placeholder="Description" value={groupDescription} onChangeText={setGroupDescription} style={styles.input} />
            <TextInput placeholder="Image URL" value={groupImage} onChangeText={setGroupImage} style={styles.input} />
            <Button title="Create Group" onPress={handleCreateGroup} />
        </View>
    )

}

const styles = StyleSheet.create({
    container: { 
        padding: 20 
    },
    input: { 
        borderWidth: 1, 
        padding: 10, 
        marginBottom: 10, 
        borderRadius: 5 
    }
});

export default GroupCreate;