import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SplashScreen } from './src/screens';
import Authnavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {
  const [isShowSplash, setIsShowSplash]= useState(true);
  const[accessToken, setAccessToken]=useState('');

  const{getItem,setItem} = useAsyncStorage('assetToken')

  useEffect(()=>{
    const timeout = setTimeout(() => {
      setIsShowSplash(false)
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(()=>{
    checkLogin();
  }, []);

  const checkLogin = async() => {
    const token =await getItem();

    token && setAccessToken(token);
  }

  return(
  <>
    <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
    {
      isShowSplash ? (
      <SplashScreen/>) : (
      <NavigationContainer>
        {accessToken ? <MainNavigator/> : <Authnavigator/>}
      </NavigationContainer>)
    }
  </>
  );
}

export default App

const styles = StyleSheet.create({})