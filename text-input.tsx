import React from 'react';
import { TextInput, StyleSheet, TextInputProps, View } from 'react-native';

interface TextInputComponentProps extends TextInputProps {
  label: string;
  secureTextEntry?: boolean;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  placeholder,
  style,
  ...rest
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder || label}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default TextInputComponent;
