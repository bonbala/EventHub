import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SplashScreen } from './src/screens';
import Authnavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppRouters from './src/navigators/AppRouters';

const App = () => {
 
  return(
  <>
    <Provider store={store}>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor='transparent' 
        translucent
      />

      <NavigationContainer>
        <AppRouters/>
      </NavigationContainer>
    </Provider>  
  </>
  );
}

export default App

const styles = StyleSheet.create({})