import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, connect } from 'react-redux';
import { decrement, increment } from '../redux/cartSlice';
import { FontAwesome } from '@expo/vector-icons';

function AddCart({ingredient, cart}) {
    const dispatch = useDispatch()
    const [isCart, setIsCart] = React.useState(cart.some(cartItem => cartItem.name === ingredient.name))

    React.useEffect(() => {
        setIsCart(cart.some(cartItem => cartItem.name === ingredient.name))
    }, [cart]);

    const updateCart = () =>{
        if(!isCart){
            dispatch(increment(ingredient))
        } else {
            dispatch(decrement(ingredient))
        }
        setIsCart(cart.some(cartItem => cartItem.name === ingredient.name))
    }

    return (
        <TouchableOpacity style={styles.cart} onPress={updateCart} >
            <FontAwesome name="cart-plus" size={30} color={isCart ? "midnightblue" : "grey"} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cart: {
        
    },
})

const mapStateToProps = (state) => ({
    cart: state.cart.value
})

export default connect(mapStateToProps)(AddCart);