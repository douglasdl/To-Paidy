import React from 'react';
import { View } from 'react-native';
import { Header } from '@components/Header';
import { Main } from '@components/Main';

export function Home() {
  return (
    <View className='flex w-screen h-screen items-center justify-start bg-gray-900'>
      <Header />
      <Main />
    </View>
  );
}