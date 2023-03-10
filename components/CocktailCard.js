import * as React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

export default function CocktailCard({navigation, cocktail}) {

    return (
        <TouchableOpacity onPress={ () => navigation.navigate('Details', {cocktail}) } >
            <View style={styles.container}>
                <Text style={styles.title} >{cocktail.name}</Text>
                <Image source={{ uri: cocktail.image }} style={styles.image} />
            </View>
        </TouchableOpacity>
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        height: 50,
        width: width - 40,
        verticalAlign: 'middle',
        backgroundColor: 'deepskyblue',
        color: 'midnightblue',
    },
    image: {
        width: width - 40,
        height: width - 40,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderWidth: 5,
        borderColor: 'deepskyblue',
    }
})