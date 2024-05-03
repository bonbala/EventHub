import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { EventsScreen} from '../screens';

const EventNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="EventScreen" component={EventsScreen} />
      {/* <Stack.Screen name="SearchEvents" component={SearchEvents} />
      <Stack.Screen name="EventDetail" component={EventDetail} /> */}
    </Stack.Navigator>
  );
};

export default EventNavigator;