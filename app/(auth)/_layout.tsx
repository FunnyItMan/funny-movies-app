import { Slot } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const AuthLayout = () => {
  return (
    <View>
      <Text>Auth Layout Header</Text>
      <Slot />
    </View>
  );
};

export default AuthLayout;
