import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import HomeScreen from './components/HomeScreen';

function FavorisScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Favoris Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {

  return (
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
            options={{ tabBarIcon: ({ color, size }) => <FontAwesome name="heart" size={size} color={color} /> }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}