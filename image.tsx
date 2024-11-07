import React from 'react';
import { Image, StyleSheet, ImageProps, ImageSourcePropType } from 'react-native';

interface ImageComponentProps extends ImageProps {
  source: ImageSourcePropType;
  style?: object;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center';
}

const ImageComponent: React.FC<ImageComponentProps> = ({ source, style, resizeMode = 'cover', ...rest }) => {
  return <Image source={source} style={[styles.image, style]} resizeMode={resizeMode} {...rest} />;
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
});

export default ImageComponent;
