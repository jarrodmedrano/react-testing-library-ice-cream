import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

test('Order phases for happy path', async () => {
  render(<App />);

  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');

  const chocolateInput = screen.getByRole('spinbutton', { name: 'Chocolate' });

  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, '2');

  const cherriesCheckbox = await screen.findByRole('checkbox', {
    name: 'Cherries',
  });

  userEvent.click(cherriesCheckbox);

  const orderSummaryButton = screen.getByRole('button', {
    name: /order sundae/i,
  });

  userEvent.click(orderSummaryButton);

  const summaryHeading = screen.getByRole('heading', {
    name: 'Order Summary',
  });
  expect(summaryHeading).toBeInTheDocument();

  const scoopsHeading = screen.getByRole('heading', { name: 'Scoops: $6.00' });

  expect(scoopsHeading).toBeInTheDocument();

  const toppingsHeading = screen.getByRole('heading', {
    name: 'Toppings: $1.50',
  });

  expect(toppingsHeading).toBeInTheDocument();
});
