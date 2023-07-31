import { MaterialCommunityIcons } from '@expo/vector-icons';
import { languages, words } from '@utils/dictionary';
import { Text, View } from 'react-native';

interface IEmptyList {
  language?: languages
}

export function EmptyList({ language = languages.JAPANESE }: IEmptyList) {
  return (
    <View 
      className='flex items-center justify-center border-t-paidy-border border-t'
      testID='empty-list'
    >
      <View className='flex items-center justify-center'>
        <View className='flex items-center justify-center w-14 h-14 rounded-md mt-12 mb-4'>
          <MaterialCommunityIcons
            className='text-gray-400'
            name="clipboard-text-outline" 
            size={56} 
          />
        </View>

        <Text className='text-paidy-text text-sm font-bold mb-1'>
          {words.noTasks[language]}
        </Text>
        <Text className='text-paidy-text text-sm font-normal'>
          {words.createAndOrganize[language]}
        </Text>
      </View>
    </View>
  );
}