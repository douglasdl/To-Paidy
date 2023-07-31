import React from 'react';
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

  return (
    <View 
      className='flex items-center justify-center flex-row mb-8 h-14 w-full'
      testID='task-input'
    >
      <TextInput
        className='flex flex-1 w-full h-14 bg-paidy-header rounded-md mr-2 text-paidy-text p-4 font-normal text-base'
        placeholder={words.addNewTask[language]}
        placeholderTextColor="gray"
        onChangeText={onSetTaskTitle}
        value={title}
      />
      <AddButton 
        onAdd={() => onAddTask(title)}
      />
    </View>
  );
}