import * as React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux'
import Ingredient from '../components/Ingredient';

export default function CartScreen() {
    const cart = useSelector((state) => state.cart.value)

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: "100%" }}>
        <FlatList
            data={cart}
            keyExtractor={(ingredient) => ingredient.name}
            renderItem={(ingredient) => <Ingredient ingredient={ingredient.item} />}
            style={{width: "100%"}}
        />
      </View>
    );
}