import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListTendencyScreen from './ListTendencyScreen';
import DetailsScreen from './DetailsScreen';


export default function TendencyScreen() {
  
  const Stack = createNativeStackNavigator();

  return (
        <Stack.Navigator initialRouteName='List'>
            <Stack.Screen name="List" component={ListTendencyScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
  );
}