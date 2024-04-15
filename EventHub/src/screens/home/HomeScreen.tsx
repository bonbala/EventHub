import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TextComponent } from '../../components'

const HomeScreen = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TextComponent text='HomeScreen'/>
      <Button title='Logout' onPress={async() => await AsyncStorage.clear() }/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
