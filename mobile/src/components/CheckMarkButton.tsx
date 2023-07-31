import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface ICheckMarkButton {
  isChecked?: boolean;
  onToggle: () => void;
}

export function CheckMarkButton({ isChecked = false, onToggle }: ICheckMarkButton) {
  const checkBoxClass = isChecked ? 'border-0 bg-paidy-logo2' : 'border-2 bg-transparent'
  const checkMarkColor = isChecked ? 'text-gray-100' : 'text-transparent'
  return (
    <TouchableOpacity
      className={`flex items-center justify-center w-5 h-5 ml-3 ${checkBoxClass} border-paidy-logo rounded-full p-0`}
      onPress={ onToggle }
      testID='check-mark-button'
    >
      <Text className={`${checkMarkColor}`}>
        ✔︎
      </Text>
    </TouchableOpacity>
  );
}