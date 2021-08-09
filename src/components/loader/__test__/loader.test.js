import { render, screen } from '@testing-library/react';
import Loader from '../loader';

describe('Loader', () => {
  it('should mount loading screen', async() => {
    render(<Loader />);
    const loaderElement = await screen.findByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  })
});
