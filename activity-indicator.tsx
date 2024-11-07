import React from 'react';
import { ActivityIndicator, View, StyleSheet, ActivityIndicatorProps } from 'react-native';

interface ActivityIndicatorComponentProps extends ActivityIndicatorProps {
  size?: 'small' | 'large';
  color?: string;
}

const ActivityIndicatorComponent: React.FC<ActivityIndicatorComponentProps> = ({ size = 'small', color = '#0000ff', ...rest }) => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size={size} color={color} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default ActivityIndicatorComponent;
