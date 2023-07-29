import { Text, TouchableOpacity, View } from 'react-native';

interface TaskProps {
    id: string;
    done: boolean;
    title: string;
    onToggle: () => void;
    onRemove: () => void;
}

export function Task({ id, done, title, onToggle, onRemove }: TaskProps) {
  const nameColor = done === true ? 'text-gray-400 decoration-gray-600 line-through' : 'text-paidy-text decoration-paidy-text'
  const checkBoxClass = done === true ? 'border-0 bg-paidy-logo2' : 'border-2 bg-transparent'
  const checkMarkColor = done === true ? 'text-gray-100' : 'text-transparent'
  return (
    <View className='flex items-center justify-center flex-row h-16 bg-paidy-header border border-paidy-border rounded-lg mb-2'>

      <TouchableOpacity 
        className={`flex items-center justify-center w-5 h-5 ml-3 ${checkBoxClass} border-paidy-logo rounded-full p-0`}
        onPress={ onToggle }
      >
        <Text className={`${checkMarkColor}`}>
            ✔︎
        </Text>
      </TouchableOpacity>

      <Text className={`w-60 text-sm font-normal ml-2 mr-2 ${nameColor}`} >
        { title }
      </Text>
      <TouchableOpacity
        className='w-6 h-6'
        onPress={ onRemove }
      >
        <Text>
          🗑
        </Text>
      </TouchableOpacity>
    </View>
  );
}