import { Text, TouchableOpacity, View } from 'react-native';
import { DeleteButton } from './DeleteButton';
import { CheckMarkButton } from './CheckMarkButton';

interface TaskProps {
    id: string;
    done?: boolean;
    title: string;
    onToggle: () => void;
    onRemove: () => void;
}

export function Task({ id, done = false, title, onToggle, onRemove }: TaskProps) {
  const nameColor = done === true ? 'text-gray-400 decoration-gray-600 line-through' : 'text-paidy-text decoration-paidy-text'
  return (
    <View 
      className='flex items-center justify-center flex-row h-16 bg-paidy-header border border-paidy-border rounded-lg mb-2'
      testID='task'
    >
      <CheckMarkButton isChecked={done} onToggle={onToggle} />

      <Text className={`w-60 text-sm font-normal ml-2 mr-2 ${nameColor}`} >
        { title }
      </Text>
      
      <DeleteButton onRemove={onRemove} />
    </View>
  );
}