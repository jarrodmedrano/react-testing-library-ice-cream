import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import {replaceCamelWithSpaces} from './utils';
import { redColor, blueColor, disabledColor } from './utils';


import App from "./App";

beforeEach(() => {
   render(<App />);
});


describe('Spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red'); 
  });
})