import axios from 'axios';
import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import formatCocktail from '../utils/formater';
import CocktailCard from '../components/CocktailCard'

export default function ListTendencyScreen({navigation}) {
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [famousCocktails, setFamousCocktails] = React.useState([]);

    React.useEffect(() => {
        (async () => { 
            await requestCocktail();
        })();
    }, []);

    const requestCocktail = async () => {
        try {
            const cocktails = [];

            for (let i = 0; i < 10; i++) {
                let newCocktail = null;

                while (newCocktail === null) {
                    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
                    newCocktail = formatCocktail(response.data.drinks[0]);
                    
                    if(cocktails.some(item => item.id === newCocktail.id)){
                        newCocktail = null;
                    }
                }
                cocktails.push(newCocktail);
            }
            setFamousCocktails(cocktails);
        } catch (error) {
            console.error(error);
            setErrorMessage('Une erreur est survenu réessayez ultérieurement')
        }
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 20, width: "100%" }}>
        <Text style={{}}>Cocktail tendences</Text>
        {
            (!errorMessage)
            ?
                <FlatList 
                    data={famousCocktails}
                    keyExtractor={item => item.id}
                    renderItem={item => <CocktailCard cocktail={item.item} navigation={navigation} />}
                    style={{width: '100%'}}
                />
            :
                <Text>{errorMessage}</Text>
        }
      </View>
    );
}