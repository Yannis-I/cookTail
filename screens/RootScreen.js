import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import FavorisScreen from './FavorisScreen';
import CartScreen from './CartScreen';
import SearchScreen from './SearchScreen';

const Tab = createBottomTabNavigator();

export default function RootScreen() {

  return (
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
          name="Search"
          component={SearchScreen}
          options={{ 
            tabBarIcon: ({ color, size }) => <FontAwesome name="search" size={size} color={color} />,
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
        <Tab.Screen 
          name="Cart"
          component={CartScreen}
          options={{ 
            tabBarIcon: ({ color, size }) => <FontAwesome name="shopping-cart" size={size} color={color} />,
            headerShown: true,
          }}
        />
      </Tab.Navigator>
  );
}