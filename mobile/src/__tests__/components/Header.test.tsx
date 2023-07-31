import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Header } from '@components/Header'

describe("Component: Header", () => {
  it('should render without errors', () => {
    render(<Header />);
    const header = screen.getByTestId("header-1")
    expect(header).toBeTruthy();
  });
})