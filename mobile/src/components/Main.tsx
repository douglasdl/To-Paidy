import { useState } from 'react';
import { Alert, FlatList, Keyboard, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '@components/Task';
import { Summary } from '@components/Summary';
import { EmptyList } from '@components/EmptyList';
import { TaskInput } from '@components/TaskInput';
import { languages, words } from '@utils/dictionary';
import { authenticateWithBiometrics } from '@utils/authentication';
import { useTasks } from '@hooks/useTasks';

export function Main() {

  const { tasks, setTasks } = useTasks();
  const [taskTitle, setTaskTitle] = useState('');

  const [currentLanguage, setCurrentLanguage] = useState<languages>(languages.JAPANESE);

  async function handleAddTask(title: string) {
    if(title === '') {
      return Alert.alert(words.taskNotEntered[currentLanguage], words.enterTaskName[currentLanguage]);
    }

    for (const task of tasks) {
      if (task.title === title) {
        return Alert.alert(words.duplicateTask[currentLanguage], words.taskAlreadyExists[currentLanguage]);
      }
    }

    const isAuthenticated = await authenticateWithBiometrics(currentLanguage)

    if(isAuthenticated) {
      setTasks(prevState => [
        ...prevState,
        { 
            id: uuidv4().toString(),
            done: false,
            title: title,
        },
      ]);
      setTaskTitle('');
      Keyboard.dismiss();
    }
  }

  async function handleToggleTask(id: string) {
    const isAuthenticated = await authenticateWithBiometrics(currentLanguage)

    if(isAuthenticated) {
      // Check / Uncheck
      let updatedTasks = tasks.map(task => task.id === id ? {...task, done: !task.done} : task);
      // Sort order
      updatedTasks = updatedTasks.sort((a, b) => a.done && b.done ? 0 : !a.done && b.done ? -1 : 1
  )
      setTasks(updatedTasks);
    }
  }

  async function handleDeleteTask(title: string) {
    const isAuthenticated = await authenticateWithBiometrics(currentLanguage)

    if(isAuthenticated) {
      return Alert.alert(words.deleteTask[currentLanguage], `${words.confirmDelete[currentLanguage]} "${title}"?`, [
        {
          text: words.yes[currentLanguage],
          onPress: () => {setTasks(prevState => prevState.filter(task => task.title !== title))}
        },
        {
          text: words.no[currentLanguage],
          style: 'cancel',
        },
      ]);
    }
  }
  
  return (
    <View className='w-full flex flex-1 ml-6 mr-6 p-4 bg-paidy-bg'>
      <TaskInput 
        language={currentLanguage}
        title={taskTitle}
        onSetTaskTitle={(text:string) => setTaskTitle(text)}
        onAddTask={() => handleAddTask(taskTitle)}
      />

      <Summary
        language={currentLanguage}
        tasks={tasks}
      />

      <View className='flex items-center justify-center flex-1 w-full border-t-gray-800 border-t-0 pb-16 -mb-4'>
        <FlatList 
          className='flex-grow w-full'
          data={tasks}
          contentInset={{ bottom: 60 }}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Task 
              key={item.id}
              id={item.id}
              title={item.title}
              done={item.done}
              onToggle={() => handleToggleTask(item.id)}
              onRemove={() => handleDeleteTask(item.title)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <EmptyList />
          )}

        />
      </View>
    </View>
  );
}