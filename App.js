import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import FavorisScreen from './screens/FavorisScreen';
import CartScreen from './screens/CartScreen';
import TendencyScreen from './screens/TendencyScreen';

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='RootScreen' useLegacyImplementation>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Tendency" component={TendencyScreen} />
          <Drawer.Screen name="Search" component={SearchScreen} />
          <Drawer.Screen name="Favoris" component={FavorisScreen} />
          <Drawer.Screen name="Cart" component={CartScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}