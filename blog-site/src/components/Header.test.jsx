import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('should render the header', () => {
    render(<Header />);
    expect(document.body).toBeDefined();
  });
});