import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import Dashboard from './Dashboard';

describe('Dashboard', () => {
  it('should render', () => {
    render(<Dashboard />);
    expect(screen.getByTestId('dashboard')).toBeInTheDocument();
  });
});
