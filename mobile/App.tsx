import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <View className='h-screen w-screen flex items-center justify-center bg-paidy-bg'>
      <Home />
      <StatusBar 
        style="dark" 
        translucent
      />
    </View>
  );
}