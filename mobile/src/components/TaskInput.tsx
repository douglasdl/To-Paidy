import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { AddButton } from './AddButton';
import { languages, words } from '@utils/dictionary';

interface ITaskInput {
  language?: languages
  title: string
  onSetTaskTitle: (title: string) => void
  onAddTask: (title: string) => void
}

export function TaskInput({ language = languages.JAPANESE, title, onSetTaskTitle, onAddTask }: ITaskInput) {

  const [isInputFocused, setIsInputFocused] = useState(false);

  const inputStyle = 'flex-1 h-14 bg-white rounded-md mr-2 px-4 text-base';
  const focusedInputStyle = 'border-2 border-blue-500';

  function handleTextInputFocus() {
    setIsInputFocused(true);
  }

  function handleTextInputBlur() {
    setIsInputFocused(false);
  }

  return (
    <View className='flex items-center justify-center flex-row mb-8 h-14 w-full'>
      <TextInput
        className='flex flex-1 w-full h-14 bg-paidy-header rounded-md mr-2 text-paidy-text p-4 font-normal text-base'
        placeholder={words.addNewTask[language]}
        placeholderTextColor="gray"
        onChangeText={onSetTaskTitle}
        value={title}
        onFocus={handleTextInputFocus}
        onBlur={handleTextInputBlur}
      />
      <AddButton 
        onAdd={() => onAddTask(title)}
      />
    </View>
  );
}