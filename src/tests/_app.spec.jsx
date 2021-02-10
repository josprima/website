import { render, screen } from '@testing-library/react';
import App from '../pages/_app';

const Dummy = () => <h1>Dummy</h1>;

describe('App', () => {
  it('renders without crashing', () => {
    render(<App Component={Dummy} />);
    expect(
      screen.getByRole('heading', { name: 'Dummy' }),
    ).toBeInTheDocument();
  });
});
