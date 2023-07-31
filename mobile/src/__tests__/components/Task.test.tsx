import { fireEvent, render, screen } from '@testing-library/react-native'

import { Task } from '@components/Task'

describe("Component: Task", () => {
  const mockTask = {
    id: '1',
    done: false,
    title: 'Test Task',
    onToggle: jest.fn(),
    onRemove: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render without errors', () => {
    render(
      <Task {...mockTask} />
    );
    const task = screen.getByTestId("task");
    expect(task).toBeTruthy();
  });

  it('should display task title correctly', () => {
    render(
      <Task {...mockTask} />
    );
    const taskTitle = screen.getByText('Test Task');
    expect(taskTitle).toBeTruthy();
  });

  it('should call onToggle when CheckMarkButton is pressed', () => {
    render(
      <Task {...mockTask} />
    );
    const checkMarkButton = screen.getByTestId('check-mark-button');
    fireEvent.press(checkMarkButton);
    expect(mockTask.onToggle).toHaveBeenCalledTimes(1);
  });

  it('should call onRemove when DeleteButton is pressed', () => {
    render(
      <Task {...mockTask} />
    );
    const deleteButton = screen.getByTestId('delete-button');
    fireEvent.press(deleteButton);
    expect(mockTask.onRemove).toHaveBeenCalledTimes(1);
  });
})