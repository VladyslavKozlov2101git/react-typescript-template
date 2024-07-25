import { fireEvent, render, screen } from '@testing-library/react';

import { describe, expect, it, vi } from 'vitest';

import ButtonElement from './ButtonElement';

describe('ButtonElement', () => {
  it('should render a button element with text', () => {
    render(<ButtonElement text="Test" />);
    expect(screen.getByTestId('button-element')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should call onClick handler when button is clicked', () => {
    const onClick = vi.fn();
    render(<ButtonElement text="Click Me" onClick={onClick} />);
    fireEvent.click(screen.getByTestId('button-element'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render loading state when isLoading is true', () => {
    render(<ButtonElement text="Loading" isLoading={true} />);
    expect(screen.getByTestId('button-element')).toBeInTheDocument();
    expect(screen.getByTestId('button-element-loader')).toBeInTheDocument();
  });

  it('should handle disabled state correctly', () => {
    render(<ButtonElement text="Disabled" disabled={true} />);
    const button = screen.getByTestId('button-element');
    expect(button).toBeDisabled();
  });

  it('should apply size class correctly', () => {
    const button = render(<ButtonElement text="Size Medium" size="medium" />);
    expect(button.getByTestId('button-element')).toHaveClass('medium');
  });

  // it('should render with icon if provided', () => {
  //   const Icon = () => <span>Icon</span>;
  //   render(<ButtonElement text="With Icon" icon={<Icon />} />);
  //   expect(screen.getByText('Icon')).toBeInTheDocument();
  // });

  // it('should apply size class correctly', () => {
  //   render(<ButtonElement text="Size Medium" size="medium" />);
  //   expect(screen.getByTestId('button-element')).toHaveClass('medium');
  // });

  // it('should apply view class correctly', () => {
  //   render(<ButtonElement text="Primary View" view="primary" />);
  //   expect(screen.getByTestId('button-element')).toHaveClass('primary');
  // });

  // it('should render a button with correct type', () => {
  //   render(<ButtonElement text="Submit Button" type="submit" />);
  //   expect(screen.getByTestId('button-element')).toHaveAttribute('type', 'submit');
  // });

  // it('should set aria-disabled attribute correctly for link elements', () => {
  //   render(<ButtonElement text="Disabled Link" to="/test" disabled={true} />);
  //   expect(screen.getByTestId('button-element')).toHaveAttribute('aria-disabled', 'true');
  // });
});
