import axios from 'axios';
import * as React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, ScrollView, FlatList } from 'react-native';
import Ingredient from './Ingredient';

export default function DetailsScreen({navigation, route}) {
    const cocktail = route.params.cocktail;

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title} >{cocktail.name}</Text>
                <Image source={{ uri: cocktail.image }} style={styles.image} />
                <View style={styles.triangle} />
                <View style={{width: 20, height: 100, borderRadius: 0, backgroundColor: "deepskyblue",}} />
                <View style={styles.triangle2} />
                <Text style={styles.midTitle} >Instructions</Text>
                <Text style={styles.instructions} >{cocktail.instructions}</Text>
                <Text style={styles.midTitle} >Ingredients</Text>
                <FlatList 
                data={cocktail.ingredients}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <Ingredient ingredient={item} /> }
                />
            </View>
        </ScrollView>
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
    },
    triangle: {
        borderStyle : "solid",
        borderTopColor : "deepskyblue",
        borderLeftColor : "transparent",
        borderRightColor : "transparent",
        borderBottomColor: "transparent",
        borderTopWidth : 50,
        borderLeftWidth : 20,
        borderRightWidth : 20,
        borderBottomWidth: 0,
        background : "deepskyblue",
        width : 60,
        height : 30,
    },
    triangle2: {
        borderStyle : "solid",
        borderTopColor : "transparent",
        borderLeftColor : "transparent",
        borderRightColor : "transparent",
        borderBottomColor: "deepskyblue",
        borderTopWidth : 0,
        borderLeftWidth : (width - 40)/2 - 10,
        borderRightWidth : (width - 40)/2 - 10,
        borderBottomWidth: 60,
        background : "deepskyblue",
        width : width - 40,
        height : 30,
    },
    instructions: {
        textAlign: 'justify',
        color: '#333333',
        margin: 10,
        fontSize: 18,
    },
    midTitle: {
        textAlign: 'left',
        fontSize: 25,
        textDecorationLine: 'underline', 
        fontWeight: 'bold',
        color: 'dimgray',
        marginTop: 30,
    }
})