import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
    test('renders the header correctly', () => {
        render(<Header />);
        const headerElement = screen.getByText(/header text/i); // Replace with actual text
        expect(headerElement).toBeInTheDocument();
    });
});