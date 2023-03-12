import * as React from 'react';
import { View, FlatList } from 'react-native';
import CocktailCard from '../components/CocktailCard';
import { useSelector } from 'react-redux'

export default function ListFavorisScreen({navigation}) {
    const favoris = useSelector((state) => state.favoris.value)

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: "100%" }}>
        <FlatList
            data={favoris}
            keyExtractor={(cocktail) => cocktail.id}
            renderItem={(cocktail) => <CocktailCard cocktail={cocktail.item} navigation={navigation} />}
            style={{width: "100%"}}
        />
      </View>
    );
}