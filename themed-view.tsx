import React from 'react';
import { View, ViewStyle, StyleSheet, ViewProps } from 'react-native';
import { useTheme } from './ThemeContext';

interface ThemedViewProps extends ViewProps {
  style?: ViewStyle;
}

const ThemedView: React.FC<ThemedViewProps> = ({ style, children, ...rest }) => {
  const { theme } = useTheme();

  const containerStyle = theme === 'light' ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[containerStyle, style]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    backgroundColor: '#fff', // light background
    flex: 1,
  },
  darkContainer: {
    backgroundColor: '#333', // dark background
    flex: 1,
  },
});

export default ThemedView;
