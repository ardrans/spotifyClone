import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../components/HomeScreen.js';
import ProPlansScreen from '../../components/ProPage.js';
import PodcastsScreen from '../../components/PodcastsPage.js';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'JioSaavn Clone' }} 
      />
       <Stack.Screen 
        name="ProPlans" 
        component={ProPlansScreen} 
        options={{ title: 'Pro Plans' }} 
      />
      <Stack.Screen 
        name="Podcasts" 
        component={PodcastsScreen} 
        options={{ title: 'Podcasts' }} 
      />
    </Stack.Navigator>
  );
}
