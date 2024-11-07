import React from 'react';
import { Pressable, Text, StyleSheet, PressableProps } from 'react-native';

interface PressableComponentProps extends PressableProps {
  label: string;
  style?: object;
  labelStyle?: object;
}

const PressableComponent: React.FC<PressableComponentProps> = ({
  onPress,
  label,
  style,
  labelStyle,
  ...rest
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
      {...rest}
    >
      <Text style={[styles.text, labelStyle]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: '#28a745',
    borderRadius: 5,
    alignItems: 'center',
  },
  pressed: {
    backgroundColor: '#218838',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PressableComponent;
