import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import FavorisScreen from './screens/FavorisScreen';
import { store } from './redux/store'
import { Provider } from 'react-redux'

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" 
            screenOptions={{ tabBarShowLabel: false }}>
          <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ 
              tabBarIcon: ({ color, size }) => <FontAwesome5 name="glass-martini-alt" size={size} color={color} />,
              headerShown: false,
            }}
          />
          <Tab.Screen 
            name="Favoris"
            component={FavorisScreen}
            options={{ 
              tabBarIcon: ({ color, size }) => <FontAwesome name="heart" size={size} color={color} />,
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}