import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Home = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.Container}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Imagepik')}
                style={styles.button}
            >
                <Text style={styles.text}> Upload photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Location')}
                style={styles.button}
            >
                <Text style={styles.text}> Current Location</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: '40%',
        margin: 5,
        borderRadius: 8,
        backgroundColor: '#0E79B2',
    },
    text: {
        color: '#fff'
    }
});
