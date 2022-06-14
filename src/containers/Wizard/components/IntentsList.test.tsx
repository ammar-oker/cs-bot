import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import IntentsList from './IntentsList';
import intentsJson from '../../../assets/intents.json';
import Intent from '../../../types/Intent';

const intents = intentsJson as Intent[];

it("renders all intents' names", () => {
  render(<IntentsList />);

  intents.forEach(intent => {
    expect(screen.getByText(intent.name)).toBeInTheDocument();
  });
});

it("renders all intents' descriptions", () => {
  render(<IntentsList />);

  intents.forEach(intent => {
    expect(screen.getByText(intent.description)).toBeInTheDocument();
  });
});

test('select all', () => {
  render(<IntentsList />);

  const checkboxes = screen.getAllByTestId('intend-checkbox');
  const selectAllCheckbox = screen.getByLabelText('Select All');

  // automatically check select all when all checked
  checkboxes.forEach(checkbox => {
    fireEvent.click(checkbox);
  });
  expect(selectAllCheckbox).toBeChecked();

  // automatically uncheck select all when all checked
  checkboxes.forEach(checkbox => {
    fireEvent.click(checkbox);
  });
  expect(selectAllCheckbox).not.toBeChecked();

  // select all check
  fireEvent.click(selectAllCheckbox);
  checkboxes.forEach(checkbox => {
    expect(checkbox.querySelector('input')).toBeChecked();
  });

  // select all uncheck
  fireEvent.click(selectAllCheckbox);
  checkboxes.forEach(checkbox => {
    expect(checkbox.querySelector('input')).not.toBeChecked();
  });
});
