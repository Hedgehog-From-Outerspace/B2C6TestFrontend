import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders hello world', async () => {
  render(<App />);

  // Wait for the API call to resolve and update the component
  await waitFor(() => {
    const helloWorldElement = screen.getByText('Hello world!');
    expect(helloWorldElement).toBeInTheDocument();
  });
});