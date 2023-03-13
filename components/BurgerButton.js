import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const BurgerButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Entypo name="menu" size={24} color="darkgrey" />
  </TouchableOpacity>
);

export default BurgerButton;