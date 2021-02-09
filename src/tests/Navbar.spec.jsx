import { render, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('renders a message', () => {
  const { container, getByTestId } = render(<Navbar />);
  expect(container).toMatchSnapshot();

  fireEvent.click(getByTestId('button'));
});
