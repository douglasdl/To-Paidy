import React from 'react';
import { Text, View } from 'react-native';
import { languages, words } from '@utils/dictionary';
import { ITask } from '@utils/dummyData';

interface ISummary {
  tasks: ITask[]
  language?: languages
}

export function Summary({ tasks, language = languages.JAPANESE }: ISummary) {
  return (
    <View 
      className='flex items-center justify-between flex-row mb-5'
      testID='summary'
    >
   
      <View className='flex items-center flex-row'>
        <Text className='text-sm font-bold text-paidy-active'>
          {words.createdTasks[language]}
        </Text>
        <View className='bg-paidy-logo py-1 px-2 rounded-full ml-2'>
          <Text 
            className='text-xs font-bold text-paidy-header'
            testID='created-tasks'
          >
            {tasks.length}
          </Text> 
        </View>
      </View>
      
      <View className='flex items-center flex-row'>
        <Text className='text-sm font-bold text-paidy-active'>
          {words.completedTasks[language]}
        </Text>
        <View className='bg-paidy-logo py-1 px-2 rounded-full ml-2'>
            <Text 
              className='text-xs font-bold text-paidy-header'
              testID='completed-tasks'
            >
                {tasks.filter(task => task.done === true).length}
            </Text>
        </View>
      </View>
    </View>
  );
}