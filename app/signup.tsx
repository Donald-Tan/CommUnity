import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useState } from 'react';
import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { Link } from 'expo-router';

const SignUp = () => {
    const auth = FIREBASE_AUTH;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {
            setLoading(true);
            try {
                await signInWithEmailAndPassword(auth, email, password);
                Alert.alert('Success', 'Logged in successfully!');
            } catch (error: any) {
                Alert.alert('Login failed', 'Please try again');
            } finally {
                setLoading(false);
            }
        };

    return (
        <View style={styles.container}>
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

            <Link href="/login" style={styles.loginButton}>
                <Text style={styles.loginText}>Already have an account? Log in</Text>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#2C5D63',
    },
    header: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    },
    input: {
        marginVertical: 8,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#1e1e1e',
        color: '#fff',
    },
    button: {
        marginVertical: 10,
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    loginButton: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText: {
        color: '#bbb',
        fontSize: 14,
        textAlign: 'center',
    },
})
export default SignUp;