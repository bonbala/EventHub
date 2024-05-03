<<<<<<< HEAD
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
=======
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Authnavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/redux/store';
>>>>>>> 366051d6b85ce724dfa4ee9abc85459cb26851a2
import AppRouters from './src/navigators/AppRouters';
import store from './src/redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />

        <NavigationContainer>
          <AppRouters />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;