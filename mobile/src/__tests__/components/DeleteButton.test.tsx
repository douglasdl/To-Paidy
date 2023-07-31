import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { DeleteButton } from '@components/DeleteButton';

describe("Component: RemoveButton", () => {
    it('should render the button text', () => {
      const onRemove = jest.fn();
      render(
        <DeleteButton onRemove={onRemove} />
      );
      const buttonText = screen.getByText('🗑');
      expect(buttonText).toBeTruthy();
    });
    it('should execute the function on click the button', () => {
      const onRemove = jest.fn();
      render(
        <DeleteButton onRemove={onRemove} />
      );
      const deleteButton = screen.getByTestId("delete-button");
      fireEvent.press(deleteButton);
      expect(onRemove).toBeCalledTimes(1);
    });
  })