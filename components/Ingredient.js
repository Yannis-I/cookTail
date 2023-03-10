import axios from 'axios';
import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

export default function Ingredient({ingredient}) {

    /*React.useEffect(() => {
        (async () => { 
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient.name}`)
            console.log(response.data);
        })();
    }, []);*/

    console.log(`https://www.thecocktaildb.com/images/ingredients/${ingredient.name}-Small.png`);

    return (
            <View style={styles.container}>
                <Image source={{uri: `https://www.thecocktaildb.com/images/ingredients/${ingredient.name}-Small.png`}} style={styles.image} />
            </View>
    );
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        marginTop: 40,
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    }
})