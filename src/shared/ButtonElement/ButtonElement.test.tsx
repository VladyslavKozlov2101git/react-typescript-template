import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import ButtonElement from './ButtonElement';

describe('ButtonElement', () => {
  it('should render a button element with text', () => {
    render(<ButtonElement text="Test" />);
    expect(screen.getByTestId('button-element')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  // it('should render a link element when "to" prop is provided', () => {
  //   render(<ButtonElement text="Test Link" to="/test" />);
  //   const linkElement = screen.getByTestId('button-element');
  //   expect(linkElement).toBeInTheDocument();
  //   expect(linkElement.tagName).toBe('A');
  //   expect(linkElement).toHaveAttribute('href', '/test');
  // });

  // it('should call onClick handler when button is clicked', () => {
  //   const onClick = vi.fn();
  //   render(<ButtonElement text="Click Me" onClick={onClick} />);
  //   fireEvent.click(screen.getByTestId('button-element'));
  //   expect(onClick).toHaveBeenCalledTimes(1);
  // });

  // it('should render loading state when isLoading is true', () => {
  //   render(<ButtonElement text="Loading" isLoading={true} />);
  //   expect(screen.getByTestId('button-element')).toBeInTheDocument();
  //   expect(screen.getByRole('status')).toBeInTheDocument(); // Assuming you use a status role for the loader
  // });

  // it('should apply error class when error prop is true', () => {
  //   render(<ButtonElement text="Error Button" error={true} />);
  //   expect(screen.getByTestId('button-element')).toHaveClass('error');
  // });

  // it('should handle disabled state correctly', () => {
  //   render(<ButtonElement text="Disabled" disabled={true} />);
  //   const button = screen.getByTestId('button-element');
  //   expect(button).toBeDisabled();
  // });

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
