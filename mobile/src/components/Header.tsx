import { Image, Text, View } from 'react-native';
import LogoImg from '@assets/logo.svg';

export function Header() {
  return (
    <View className='w-full h-32 flex items-center justify-center flex-col bg-paidy-header'>
      <View className='flex items-center justify-center flex-row h-1/3 mt-4'>
        <Text className='text-3xl font-bold'>TO</Text>
        <LogoImg width={150} />
      </View>
      <View className='flex items-center justify-center flex-row'>
        <Text className='text-3xl font-bold'>DO</Text>
        <Text className='text-3xl text-gray-50'>UGLAS</Text>
      </View>
    </View>
  );
}
