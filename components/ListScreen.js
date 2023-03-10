import axios from 'axios';
import * as React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import CocktailCard from './CocktailCard';

export default function ListScreen({navigation}) {
    const [randomCocktails, setRandomCocktails] = React.useState([]);

    React.useEffect(() => {
        (async () => { 
            try {
                const cocktails = [];

                for (let i = 0; i < 10; i++) {
                    let newCocktail = null;

                    while (newCocktail === null) {
                        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
                        newCocktail = formatCocktail(response.data.drinks[0]);

                        cocktails.forEach(cocktail => {
                            if(cocktail.id === newCocktail.id){
                                newCocktail = null;
                            }
                        });
                    }
                    cocktails.push(newCocktail);
                }
                setRandomCocktails(cocktails);
            } catch (error) {
                console.error(error);
            }
        })();
        
    }, []);

    const formatCocktail = (data) => {
        const ingredients = [];
        for(let i = 1; i <= 15; i++){
            const idIngredient = `strIngredient${i}`;
            const idQuantity = `strMeasure${i}`;
            if(data[idIngredient]){
                ingredients.push({name: data[idIngredient], quantity: data[idQuantity]});
            }
        }

        return {
            id: data.idDrink,
            name: data.strDrink,
            image: data.strDrinkThumb,
            ingredients: ingredients,
            instructions: data.strInstructions
        }
    }


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: "100%" }}>
        <FlatList
        data={randomCocktails}
        keyExtractor={(cocktail) => cocktail.id}
        renderItem={({item}) => <CocktailCard cocktail={item} navigation={navigation} />}
        style={{ width: "100%" }}
        />
      </View>
    );
}