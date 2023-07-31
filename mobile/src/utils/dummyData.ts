export interface ITask {
  id: string;
  done: boolean;
  title: string;
  onRemove?: () => void;
}

export const dummyTasks: ITask[] = [
  { 
    id: '0001',
    done: true,
    title: '1. Implement a secured TODO list application with a bare React Native project and Expo local-authentication module.',
  },
  { 
    id: '0002',
    done: true,
    title: '2. The application MUST ask for authentication before the user can add, update and delete items on the list.',
  },
  { 
    id: '0003',
    done: false,
    title: '3. Clean and Robust state management.',
  },
  { 
    id: '0004',
    done: true,
    title: '4. Remember to keep it simple so that it’s much easier for us to review your code. Do not forget to add comments explaining what your code does.',
  },
  { 
    id: '0005',
    done: false,
    title: '5. Implement some unit tests. No need to overkill, just test the parts you think are important.',
  },
  { 
    id: '0006',
    done: false,
    title: '6. When you are done, reply to this email with the GitHub link of your work.',
  },
  { 
    id: '0007',
    done: true,
    title: '7. If you have additional questions or clarifications, you may do so by replying to this email.',
  }
] 