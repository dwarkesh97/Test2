import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UplodeImg from '../Screens/UplodeImg'
import Home from '../Screens/Home'
import Location from '../Screens/Location'

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Imagepik" component={UplodeImg} />
                <Stack.Screen name="Location" component={Location} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
