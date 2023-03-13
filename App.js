import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootScreen from './screens/RootScreen';

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="RootScreen" component={RootScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}