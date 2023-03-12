import * as React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import FavorisButton from '../components/FavorisButton';

export default function CocktailCard({navigation, cocktail}) {

    return (
        <TouchableOpacity onPress={ () => navigation.navigate('Details', {cocktail}) } >
            <View style={styles.container}>
                <View style={styles.header} >
                    <Text style={styles.title} >{cocktail.name}</Text>
                    <FavorisButton cocktail={cocktail}/>
                </View>
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
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width - 40,
        height: 50,
        backgroundColor: 'deepskyblue',
        position: 'relative',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        verticalAlign: 'middle',
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