import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import {replaceCamelWithSpaces} from './utils';
import { redColor, blueColor, disabledColor } from './utils';

import SummaryForm from "../SummaryForm";

beforeEach(() => {
   render(<SummaryForm />);
});


describe('Testing render',  () => {

   test('Initial renders', async () => {
       await waitFor(() =>   screen.getByRole('heading'));

    expect(screen.getByRole('heading')).toHaveTextContent('hello there');
  });

});