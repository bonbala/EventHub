import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TextComponent } from '../../components'
import { useDispatch } from 'react-redux'
import { removeAuth } from '../../redux/reducers/authReducer'

const HomeScreen = () => {

  const dispatch = useDispatch()

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TextComponent text='HomeScreen'/>
      <Button title='Logout' onPress={()=> dispatch(removeAuth({}))}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
