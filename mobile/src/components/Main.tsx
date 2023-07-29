import { useState } from 'react';
import { Alert, FlatList, Keyboard, ScrollView, Text, TextInput, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { AddButton } from '@components/AddButton';
import { Task } from '@components/Task';
import { EmptyList } from '@components/EmptyList';
import { languages, words } from '@utils/dictionary';
import { Summary } from './Summary';
import { TaskInput } from './TaskInput';

export interface TaskProps {
  id: string;
  done: boolean;
  title: string;
  onRemove?: () => void;
}

const dummyTasks:TaskProps[] = [
  { 
    id: '0001',
    done: false,
    title: '1. Implement a secured TODO list application with a bare React Native project and Expo local-authentication module.',
  },
  { 
    id: '0002',
    done: true,
    title: '2. The application MUST ask for authentication before the user can add, update and delete items on the list.',
  },
  { 
    id: '0003',
    done: true,
    title: '3. Clean and Robust state management.',
  },
  { 
    id: '0004',
    done: true,
    title: '4. Remember to keep it simple so that it’s much easier for us to review your code. Do not forget to add comments explaining what your code does.',
  },
  { 
    id: '0005',
    done: true,
    title: '5. Implement some unit tests. No need to overkill, just test the parts you think are important.',
  },
  { 
    id: '0006',
    done: true,
    title: '6. When you are done, reply to this email with the GitHub link of your work.',
  },
  { 
    id: '0007',
    done: true,
    title: '7. If you have additional questions or clarifications, you may do so by replying to this email.',
  }
] 

export function Main() {

  const [tasks, setTasks] = useState<TaskProps[]>([])//(dummyTasks);
  const [taskTitle, setTaskTitle] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [currentLanguage, setCurrentLanguage] = useState<languages>(languages.JAPANESE);

  function handleAddTask(title: string) {
    if(title === '') {
      return Alert.alert(words.taskNotEntered[currentLanguage], words.enterTaskName[currentLanguage]);
    }

    // if(tasks.includes(task => task.title === "Tarefa 1")) {
    //     return Alert.alert(words.duplicateTask[currentLanguage], words.taskAlreadyExists[currentLanguage]);
    // }

    for (const task of tasks) {
      if (task.title === title) {
        return Alert.alert(words.duplicateTask[currentLanguage], words.taskAlreadyExists[currentLanguage]);
      }
    }

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

function handleToggleTask(id: string) {
    // Check / Uncheck
    let updatedTasks = tasks.map(task => task.id === id ? {...task, done: !task.done} : task);
    // Sort order
    updatedTasks = updatedTasks.sort((a, b) => a.done && b.done ? 0 : !a.done && b.done ? -1 : 1
)
    setTasks(updatedTasks);
}

function handleDeleteTask(title: string) {
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