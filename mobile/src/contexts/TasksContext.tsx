import React, { createContext, useEffect, useState } from 'react';
import { ITask } from '@utils/dummyData';
import { getStorageTasks, removeStorageTasks, saveStorageTasks } from '../libs/asyncStorage/tasksStorage';

interface ITasksContext {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const TasksContext = createContext<ITasksContext>({
  tasks: [],
  setTasks: () => {},
});

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<ITask[]>([]);

  // Load tasks from storage when the provider mounts
  useEffect(() => {
    const fetchTasksFromStorage = async () => {
      const storedTasks = await getStorageTasks();
      if (storedTasks) {
        setTasks(storedTasks);
      }
    };
    fetchTasksFromStorage();
  }, []);

  // Save tasks to storage whenever the tasks state changes
  useEffect(() => {
    const saveTasksToStorage = async () => {
      await saveStorageTasks(tasks);
    };
    saveTasksToStorage();
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
}