import axios from 'axios';
import * as React from 'react';
import { View, FlatList } from 'react-native';
import CocktailCard from '../components/CocktailCard';
import formatCocktail from '../utils/formater';

export default function ListScreen({navigation}) {
    const [randomCocktails, setRandomCocktails] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        (async () => { 
            await requestData();
        })();
    }, []);

    const requestData = async () => {
        try {
            const cocktails = [];

            for (let i = 0; i < 10; i++) {
                let newCocktail = null;

                while (newCocktail === null) {
                    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
                    newCocktail = formatCocktail(response.data.drinks[0]);
                    
                    if(cocktails.some(item => item.id === newCocktail.id) || randomCocktails.some(item => item.id === newCocktail.id)){
                        newCocktail = null;
                    }
                }
                cocktails.push(newCocktail);
            }
            setRandomCocktails([...randomCocktails, ...cocktails]);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    const handleLoadMore = () => {
        if (!isLoading) {
            setPage(page + 1);
            requestData();
        }
    };

    const renderFooter = () => {
        return isLoading ? (
          <View>
            <Text>Loading...</Text>
          </View>
        ) : null;
      };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: "100%" }}>
        <FlatList
        data={randomCocktails}
        keyExtractor={(cocktail) => cocktail.id}
        renderItem={({item}) => <CocktailCard cocktail={item} navigation={navigation} />}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        style={{ width: "100%" }}
        />
      </View>
    );
}