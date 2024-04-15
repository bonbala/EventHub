import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ForgotPassword, LoginScreen,SignUpScreen, Verication } from '../screens'


const Authnavigator = () => {

    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
        <Stack.Screen name='Verication' component={Verication}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>

    </Stack.Navigator>
  )
}

export default Authnavigator

const styles = StyleSheet.create({})
