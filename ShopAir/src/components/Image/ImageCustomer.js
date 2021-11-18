import Block from '@components/Block';
import React from 'react';
import {Image, StyleSheet} from 'react-native';

const ImageCustomer = ({
  source,
  style,
  resizeMode,
  width,
  height,
  maxWidth,
  maxHeight,
  paddingVertical,
  paddingHorizontal,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  borderRadius,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  ...props
}) => {
  return (
    <Block
      width={width}
      height={height}
      marginBottom={marginBottom}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      borderRadius={borderRadius}>
      <Image
        source={source}
        style={{
          width: width,
          height: height,
          resizeMode: resizeMode,
        }}
      />
    </Block>
  );
};

export default ImageCustomer;
