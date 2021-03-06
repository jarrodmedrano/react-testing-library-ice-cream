import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { replaceCamelWithSpaces } from "../../../utils";
import { redColor, blueColor, disabledColor } from "../../../utils";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

beforeEach(() => {
  render(<SummaryForm />);
});

describe("Testing render", () => {
  test("Initial renders", async () => {
    await waitFor(() => screen.getByRole("heading"));

    expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  });
});

describe("Test button is enabled after checkbox checked", () => {
  test("Initial renders", async () => {
    const inputNode = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions",
    });
    const colorButton = screen.getByRole("button", { name: `Confirm order` });

    expect(colorButton).toBeDisabled();

    expect(inputNode).not.toBeChecked();

    await userEvent.click(inputNode);

    expect(inputNode).toBeChecked();

    expect(colorButton).toBeEnabled();
  });
});

describe("testing popover", () => {
  test("popover responds to hover", async () => {
    // popover starts out hidden
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();

    // popover appears upon mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);

    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    // popover disappears when we mouse out
    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/no ice cream will actually be delivered/i)
    );
  });
});
