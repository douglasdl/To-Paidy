import { render, screen } from '@testing-library/react-native'

import { Summary } from '@components/Summary'
import { dummyTasks } from '@utils/dummyData';

describe("Component: Summary", () => {
  it('should render without errors', () => {
    render(<Summary tasks={dummyTasks} />);
    const summaryElement = screen.getByTestId('summary');
    expect(summaryElement).toBeTruthy();
  });
  it('should display correct summary counts', () => {
    render(
      <Summary tasks={dummyTasks} />
    );
    const summary = screen.getByTestId("summary")
    const createdTasksCount = screen.getByText(dummyTasks.length.toString());
    const completedTasksCount = screen.getByText(dummyTasks.filter((task) => task.done === true).length.toString());
    expect(createdTasksCount).toBeTruthy();
    expect(completedTasksCount).toBeTruthy();
  });
})