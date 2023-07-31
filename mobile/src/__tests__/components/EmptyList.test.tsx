import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { EmptyList } from '@components/EmptyList'
import { languages } from '@utils/dictionary';

describe("Component: EmptyList", () => {
  it('should render without errors', () => {
    render(<EmptyList />);
    const emptyList = screen.getByTestId("empty-list")
    expect(emptyList).toBeTruthy();
  });
  it('should display default text in Japanese', () => {
    render(<EmptyList />);
    const emptyList = screen.getByTestId("empty-list")
    const noTasksText = screen.getByText(/タスクが登録されていません/i);
    const createAndOrganizeText = screen.getByText(/タスクを作成し、整理する/i);
    expect(noTasksText).toBeTruthy();
    expect(createAndOrganizeText).toBeTruthy();
  });

  it('should display text in the provided language', () => {
    render(<EmptyList language={languages.ENGLISH} />);
    const noTasksText = screen.getByText(/You don't have any registered tasks/i);
    const createAndOrganizeText = screen.getByText(/Create tasks and organize your to-dos/i);
    expect(noTasksText).toBeTruthy();
    expect(createAndOrganizeText).toBeTruthy();
  });
})