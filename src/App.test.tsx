import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'


import App from "./App";

beforeEach(() => {
   render(<App />);
})

test("button has correct initial color", () => {

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe("Change to red");
});

test("button is disabled when checkbox is checked", async () => {
 
  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  
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
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox", {name: 'Disable Button'});
  expect(checkbox).not.toBeChecked();
});

test("button color changes to gray when disabled", async () => {

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  
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
