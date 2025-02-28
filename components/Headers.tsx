/* 
    The Header component will be used for displaying the logo and notifcation bell at the homepage 
*/ 

import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'


const Header = () => {
    // Example showing notification count on the bell icon
    // Future implementations will deal with real time data using backend
    const [notificationCount, setNotificationCount] = useState(3) 

    const handleBellPress = () => {
        setNotificationCount(0);
    }

    return (
        <View style={styles.header}>
            <Text style={styles.logo}>Community Logo</Text>
            <TouchableOpacity onPress={handleBellPress} style={styles.notificationContainer}>
                <Text style={styles.notificationBell}>🔔</Text>
                {notificationCount > 0 && (
                    <View style={styles.notificationBadge}>
                        <Text style={styles.notificationText}>{notificationCount}</Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    logo: {
        fontSize: 24,
        fontWeight: "bold"
    },
    notificationContainer: {
        position: "relative",
    },
    notificationBell: {
        fontSize: 24,
    },
    notificationBadge: {
        position: "absolute",
        top: -5,
        right: -5,
        backgroundColor: "red",
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    notificationText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
    }
});
export default Header;