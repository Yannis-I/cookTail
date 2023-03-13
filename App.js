import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootScreen from './screens/RootScreen';
import MenuBurger from './components/MenuBurger';

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='RootScreen' useLegacyImplementation>
          <Drawer.Screen name="RootScreen" component={RootScreen} />
          <Drawer.Screen name="MenuBurger" component={MenuBurger} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}