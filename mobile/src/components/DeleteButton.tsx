import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface IDeleteButton {
  onRemove: () => void;
}

export function DeleteButton({ onRemove }: IDeleteButton) {
  return (
    <TouchableOpacity
      className='w-6 h-6'
      onPress={ onRemove }
      testID='delete-button'
    >
      <Text>
        🗑
      </Text>
    </TouchableOpacity>
  );
}