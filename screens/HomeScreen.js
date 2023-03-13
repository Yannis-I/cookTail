import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './ListScreen';
import ListTendencyScreen from './ListTendencyScreen';
import DetailsScreen from './DetailsScreen';


export default function HomeScreen() {
  
  const Stack = createNativeStackNavigator();

  return (
        <Stack.Navigator initialRouteName='List'>
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="ListTendency" component={ListTendencyScreen} />
        </Stack.Navigator>
  );
}