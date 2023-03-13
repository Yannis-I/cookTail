import axios from 'axios';
import * as React from 'react';
import { TextInput, View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import formatCocktail from '../utils/formater';
import CocktailCard from '../components/CocktailCard'

export default function ListSearchScreen({navigation}) {
    const [isLoading, setIsLoading] = React.useState(true);
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [ingredientList, setIngredientList] = React.useState([]);
    const [inputValue, setInputValue] = React.useState("");
    const [autocompletionList, setAutocompletionList] = React.useState([]);
    const [ingredientIsValid, setIngredientIsValid] = React.useState(false);
    const [cocktailsByIngredient, setcocktailsByIngredient] = React.useState([]);

    React.useEffect(() => {
        (async () => { 
            await requestIngredients();
        })();
    }, []);

    React.useEffect(() => {
        let newAutocompletionList = [];
        if(inputValue != ""){
            ingredientList.forEach(item => {
                if(item.includes(inputValue)){
                    newAutocompletionList.push(item);
                }
            });
        }
        setAutocompletionList(newAutocompletionList);
    }, [inputValue])

    React.useEffect(() => {
        console.log(autocompletionList);
    }, [autocompletionList])

    const requestIngredients = async () => {
        try {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
            const formattedDatas = response.data.drinks.map(item => item.strIngredient1)
            setIngredientList(formattedDatas);
        } catch (error) {
            console.error(error);
        }
    }

    const requestCocktail = async (strIngredient) => {
        try {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${strIngredient}`)

            const formattedCocktails = await Promise.all(response.data.drinks.map(async drink => {
                const response2 = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`)
                return formatCocktail(response2.data.drinks[0])
            }))
            setcocktailsByIngredient(formattedCocktails);
        } catch (error) {
            console.error(error);
            setErrorMessage('Une erreur est survenu réessayez ultérieurement')
        }
    }

    const validationIngredient = (strIngredient) => {
        setInputValue(strIngredient)
        setIngredientIsValid(true)
        requestCocktail(strIngredient)
    }

    const onSubmitEditing = () => {
        if(ingredientList.includes(inputValue)){
            setIngredientIsValid(true)
            requestCocktail(inputValue)
        }
    }

    const autocompletion = () => {
        return (
            <FlatList 
                data={autocompletionList}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                    <>
                        <TouchableOpacity style={styles.completion} onPress={() => validationIngredient(item)}>
                            <Text style={styles.completionText} >{item}</Text>
                        </TouchableOpacity>
                        <View style={styles.separator} />
                    </>
                )}
                style={styles.listAutocompletion}
            />
        )
    }

    const onChangeText = (text) => {
        setInputValue(text)
        setIngredientIsValid(false)
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 20, width: "100%" }}>
        <TextInput 
            placeholder='Entrez un ingredient' 
            onChangeText={text => onChangeText(text)}
            value={inputValue}
            autoFocus={true}
            inputMode={"search"}
            onSubmitEditing={() => onSubmitEditing()}
            style={styles.search}
        />
        { 
            (autocompletionList.length != 0 && !ingredientIsValid)
            ? 
                autocompletion() 
            : 
                (inputValue != "" && !ingredientIsValid) && <Text>Aucun ingredient trouvé</Text> 
        }
        {
            (ingredientIsValid && cocktailsByIngredient.length != 0)
            &&
                (!errorMessage)
                ?
                    <FlatList 
                        data={cocktailsByIngredient}
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

const styles = StyleSheet.create({
    search: {
        width: "95%",
        height: 40,
        padding: 5,
        borderBottomWidth: 2,
        borderStyle: "solid",
        borderColor: "darkgrey",
        fontSize: 18,
        backgroundColor: "white",
    },
    listAutocompletion: {
        width: "95%",
    },
    completion: {
        width: "100%",
        padding: 2,
        fontSize: 18,
        height: 35,
        backgroundColor: "white",
    },
    completionText: {
        width: "100%",
        padding: 2,
        fontSize: 18,
        height: 35,
        backgroundColor: "white",
    },
    separator: {
        width: "96%",
        marginRight: "2%",
        marginLeft: "2%",
        height: 1,
        backgroundColor: "lightgrey",
    }
})