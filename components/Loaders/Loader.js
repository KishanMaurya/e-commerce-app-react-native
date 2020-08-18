import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const Loader = () => {
  return (
    <View
      style={{
        position: 'absolute',
        flex: 1,
        width,
        height,
        backgroundColor: 'rgba(12,13,52,0.5)',
        zIndex: 1001,
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator size='large' color='#2CB9B0' />
    </View>
  );
};

export default Loader;