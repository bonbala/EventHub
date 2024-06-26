import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator';
import { HomeScreen } from '../screens';

const MainNavigator = () => {
    const Stack= createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={HomeScreen}/>
    </Stack.Navigator>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})