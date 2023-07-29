import { Image, Text, View } from 'react-native';
import LogoImg from '@assets/logo.svg';

export function Header() {
    return (
        <View className='w-full h-32 flex items-center justify-center flex-row bg-paidy-header'>
            <Text className='text-3xl'>TO</Text>
            <LogoImg width={150} />
        </View>
    );
}
