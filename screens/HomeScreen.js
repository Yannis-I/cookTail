import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ListScreen from './ListScreen';
import ListTendencyScreen from './ListTendencyScreen';
import MenuBurger from '../components/MenuBurger';
import ListCategoryScreen from './ListCategoryScreen';

const Drawer = createDrawerNavigator();

export default function HomeScreen() {

  return (
        <Drawer.Navigator 
          initialRouteName='List' 
          useLegacyImplementation 
          drawerContent={(props) => <MenuBurger {...props}/> }
        >
            <Drawer.Screen name="List" component={ListScreen} />
            <Drawer.Screen name="Tendency" component={ListTendencyScreen} />
            <Drawer.Screen name="Category" component={ListCategoryScreen} />
        </Drawer.Navigator>
  );
}