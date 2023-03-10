import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './ListScreen';
import DetailsScreen from './DetailsScreen';


export default function HomeScreen({navigation}) {
  
  const Stack = createNativeStackNavigator();

  return (
        <Stack.Navigator initialRouteName='List'>
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
  );
}