import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './DetailsScreen';
import ListFavorisScreen from './ListFavorisScreen';


export default function FavorisScreen() {
  
  const Stack = createNativeStackNavigator();

  return (
        <Stack.Navigator initialRouteName='List'>
            <Stack.Screen name="ListFavoris" component={ListFavorisScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
  );
}