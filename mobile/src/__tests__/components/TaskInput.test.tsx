import { fireEvent, render, screen } from '@testing-library/react-native'

import { TaskInput } from '@components/TaskInput'
import { languages } from '@utils/dictionary';

describe("Component: TaskInput", () => {
  const mockOnSetTaskTitle = jest.fn();
  const mockOnAddTask = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });
    
  it('should render without errors', () => {
    render(
      <TaskInput 
        title="" 
        onSetTaskTitle={mockOnSetTaskTitle} 
        onAddTask={mockOnAddTask} 
      />
    );
    const taskInput = screen.getByTestId("task-input");
    expect(taskInput).toBeTruthy();
  });

  it('should display correct placeholder based on language', () => {
    render(
      <TaskInput 
        language={languages.JAPANESE} 
        title="" 
        onSetTaskTitle={mockOnSetTaskTitle} 
        onAddTask={mockOnAddTask} 
      />
    );
    const placeholder = screen.getByPlaceholderText('新しいタスクを追加');
    expect(placeholder).toBeTruthy();
  });

  it('should display correct TextInput value based on title prop', () => {
    render(
      <TaskInput 
        language={languages.JAPANESE} 
        title="Test Task" 
        onSetTaskTitle={mockOnSetTaskTitle} 
        onAddTask={mockOnAddTask} 
      />
    );
    const inputValue = screen.getByDisplayValue('Test Task');
    expect(inputValue).toBeTruthy();
  });

  it('should calls onSetTaskTitle with correct value when typing in TextInput', () => {
    render(
      <TaskInput 
        language={languages.ENGLISH} 
        title="" 
        onSetTaskTitle={mockOnSetTaskTitle} 
        onAddTask={mockOnAddTask} 
      />
    );
    const input = screen.getByDisplayValue('');
    fireEvent.changeText(input, 'Test Task');
    expect(mockOnSetTaskTitle).toHaveBeenCalledWith('Test Task');
  });

  it('should call onAddTask with correct value when AddButton is pressed', () => {
    render(
      <TaskInput 
        language={languages.JAPANESE} 
        title="Test Task" 
        onSetTaskTitle={mockOnSetTaskTitle} 
        onAddTask={mockOnAddTask} 
      />
    );
    const addButton = screen.getByTestId('add-button');
    fireEvent.press(addButton);
    expect(mockOnAddTask).toHaveBeenCalledWith('Test Task');
  });
})