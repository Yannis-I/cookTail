import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default MenuBurger = ({ navigation }) => {
    const screens = [
        {routeName: 'List', text: 'Cocktails aléatoire'},
        {routeName: 'ListTendency', text: 'Cocktails tendances'},
        {routeName: 'ListSearch', text: 'Rechercher un cocktail'},
        {routeName: 'ListFavoris', text: 'Cocktails Favoris'},
        {routeName: 'Cart', text: 'Liste de courses'},
    ]

    return (
        <View style={styles.container}>
            {screens.map((screen) => (
              <TouchableOpacity
                  key={screen.routeName}
                  style={styles.drawerItem}
                  onPress={() => navigation.navigate(screen.routeName)}
              >
                  <Text style={styles.drawerItemText}>{screen.text}</Text>
              </TouchableOpacity>
            ))}
        </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  drawerItem: {
    padding: 10,
  },
  drawerItemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});