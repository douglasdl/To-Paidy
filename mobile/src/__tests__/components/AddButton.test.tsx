import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { AddButton } from '@components/AddButton';

describe("Component: AddButton", () => {
  it('should render the button text', () => {
    const onAdd = jest.fn();
    render(
      <AddButton />
    );
    const buttonText = screen.getByText('＋');
    expect(buttonText).toBeTruthy();
  });
  it('should execute the function on click the button', () => {
    const onAdd = jest.fn();
    render(
      <AddButton onAdd={onAdd} />
    );
    const addButton = screen.getByTestId("add-button");
    fireEvent.press(addButton);
    expect(onAdd).toBeCalledTimes(1);
  });
})