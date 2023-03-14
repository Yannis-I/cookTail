import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, connect } from 'react-redux';
import { decrement, increment } from '../redux/favorisSlice';
import { FontAwesome } from '@expo/vector-icons';

function FavorisButton({cocktail, favoris}) {
    const dispatch = useDispatch()
    const [isFavoris, setIsFavoris] = React.useState(favoris.some(cocktailItem => cocktailItem.id === cocktail.id))

    React.useEffect(() => {
        setIsFavoris(favoris.some(cocktailItem => cocktailItem.id === cocktail.id))
    }, [favoris]);

    const updateFavoris = () =>{
        if(!isFavoris){
            dispatch(increment(cocktail))
        } else {
            dispatch(decrement(cocktail))
        }
        setIsFavoris(favoris.some(cocktailItem => cocktailItem.id === cocktail.id))
    }

    return (
        <TouchableOpacity style={styles.favoris} onPress={updateFavoris} >
            <FontAwesome name="heart" size={20} color={isFavoris ? "red" : "grey"} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    favoris: {
        position: 'absolute',
        right: 20,
        top: 15,
    },
})

const mapStateToProps = (state) => ({
    favoris: state.favoris.value
})

export default connect(mapStateToProps)(FavorisButton);