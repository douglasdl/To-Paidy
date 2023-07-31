import React from 'react';
import { render, fireEvent, waitFor, screen, within, act } from '@testing-library/react-native';
import { Main } from '@components/Main'
import { Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

// Mock the expo-local-authentication module
jest.mock('expo-local-authentication', () => ({
  hasHardwareAsync: jest.fn(() => Promise.resolve(true)),
  isEnrolledAsync: jest.fn(() => Promise.resolve(true)),
  authenticateAsync: jest.fn(() => Promise.resolve({ success: true })),
}));

describe("Component: Main", () => {
  it('should render EmptyList component when tasks are empty', () => {
    render(
      <Main />
    );
    const emptyList = screen.getByTestId('empty-list');
    expect(emptyList).toBeTruthy();
  });
})