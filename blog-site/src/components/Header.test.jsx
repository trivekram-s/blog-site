import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('should render the header', () => {
    const { container } = render(<Header />);
    expect(container).toBeDefined();
  });
});