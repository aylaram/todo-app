import { render, screen } from '@testing-library/react';
import App from './App';
import Todolist from './components/Todolist';

test('renders learn react link', () => {
  render(<Todolist />);
  const linkElement = screen.getByText(/date/i);
  expect(linkElement).toBeInTheDocument();
});
