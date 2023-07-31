import AsyncStorage from '@react-native-async-storage/async-storage';
import { ITask } from '@utils/dummyData';

const STORAGE_KEY = '@to-paidy:task';

export async function getStorageTasks(): Promise<ITask[] | null> {
  const storage = await AsyncStorage.getItem(STORAGE_KEY);

  const response = storage ? JSON.parse(storage) as ITask[] : null;

  return response;
}

export async function saveStorageTasks(tasks: ITask[]) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export async function removeStorageTasks() {
  await AsyncStorage.removeItem(STORAGE_KEY);
}