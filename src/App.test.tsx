import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import {replaceCamelWithSpaces} from './utils';
import { redColor, blueColor, disabledColor } from './utils';


import App from "./App";

beforeEach(() => {
   render(<App />);
});

test("button has correct initial color", () => {

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: `Change to Midnight Blue` });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: redColor });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: blueColor });

  // expect the button text to be 'Change to Medium Violet Red'
  expect(colorButton.textContent).toBe("Change to Medium Violet Red");
});
 
test("button is disabled when checkbox is checked", async () => {
 
  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: `Change to Midnight Blue` });
  
  // check that the button starts out enabled
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox", {name: 'Disable Button'});
  expect(checkbox).not.toBeChecked();
  
  await userEvent.click(checkbox);  

  // check that the button is disabled when checkbox checked
  expect(checkbox).toBeChecked();

  expect(colorButton).toBeDisabled();

});

test("initial conditions", () => {
  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: `Change to Midnight Blue` });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox", {name: 'Disable Button'});
  expect(checkbox).not.toBeChecked();
});

test("button color changes to gray when disabled", async () => {

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: `Change to Midnight Blue` });
  
  // check that the button starts out enabled
  expect(colorButton).toBeEnabled();

   // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: redColor });

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox", {name: 'Disable Button'});
  expect(checkbox).not.toBeChecked();

  // check the checkbox
  await userEvent.click(checkbox);

  expect(checkbox).toBeChecked();

  // expect the background color to be gray
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

});


test("blue button color also changes to gray when disabled", async () => {

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: `Change to Midnight Blue` });
  
  // check that the button starts out enabled
  expect(colorButton).toBeEnabled();

   // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: redColor });

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox", {name: 'Disable Button'});
  expect(checkbox).not.toBeChecked();


  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: blueColor });

  
  // check the checkbox
  await userEvent.click(checkbox);

  expect(checkbox).toBeChecked();

  // expect the background color to be gray
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

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