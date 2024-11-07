import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, TouchableOpacityProps } from 'react-native';

interface TouchableOpacityComponentProps extends TouchableOpacityProps {
  label: string;
  labelStyle?: object;
  activeOpacity?: number;
}

const TouchableOpacityComponent: React.FC<TouchableOpacityComponentProps> = ({
  onPress,
  label,
  labelStyle,
  activeOpacity = 0.8,
  style,
  ...rest
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity} style={[styles.button, style]} {...rest}>
      <Text style={[styles.text, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#008CBA',
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TouchableOpacityComponent;
