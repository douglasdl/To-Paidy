import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Home } from './src/screens/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TasksProvider } from '@contexts/TasksContext';

export default function App() {
  return (
    <SafeAreaProvider className='h-screen w-screen flex items-center justify-center bg-paidy-bg'>
      <StatusBar 
        style="dark" 
        translucent
      />
      <TasksProvider>
        <Home />
      </TasksProvider>
    </SafeAreaProvider>
  );
}