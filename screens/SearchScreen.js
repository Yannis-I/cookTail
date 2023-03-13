import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListSearchScreen from './ListSearchScreen';
import DetailsScreen from './DetailsScreen';


export default function SearchScreen() {
  
  const Stack = createNativeStackNavigator();

  return (
        <Stack.Navigator initialRouteName='ListSearch'>
            <Stack.Screen name="ListSearch" component={ListSearchScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
  );
}