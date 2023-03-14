import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import RootScreen from './screens/RootScreen';
import SearchScreen from './screens/SearchScreen';
import FavorisScreen from './screens/FavorisScreen';
import CartScreen from './screens/CartScreen';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Root" 
            screenOptions={{ tabBarShowLabel: false }}>
          <Tab.Screen 
            name="Root" 
            component={RootScreen}
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
      </NavigationContainer>
    </Provider>
  );
}