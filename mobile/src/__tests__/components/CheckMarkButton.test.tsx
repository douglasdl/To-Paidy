import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { CheckMarkButton } from '@components/CheckMarkButton';

describe("Component: CheckMarkButton", () => {
    it('should render the button text', () => {
      const onToggle = jest.fn();
      render(
        <CheckMarkButton isChecked onToggle={onToggle} />
      );
      const buttonText = screen.getByText('✔︎');
      expect(buttonText).toBeTruthy();
    });
    it('should execute the function on click the button', () => {
      const onToggle = jest.fn();
      render(
        <CheckMarkButton onToggle={onToggle} />
      );
      const checkMarkButton = screen.getByTestId("check-mark-button");
      fireEvent.press(checkMarkButton);
      expect(onToggle).toBeCalledTimes(1);
    });
  })