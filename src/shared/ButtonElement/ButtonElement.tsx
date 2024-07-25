import React from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import styles from './ButtonElement.module.scss';

interface ButtonElementProps {
  className?: string;
  text: string;
  onClick?: () => void;
  to?: string;
  isLoading?: boolean;
  target?: string;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  view?: 'primary' | 'secondary' | 'link' | 'outline';
  size?: 'small' | 'medium' | 'large';
  dataTooltipId?: string;
  disabled?: boolean;
}

const ButtonElement: React.FC<ButtonElementProps> = ({
  className = '',
  text = 'text',
  isLoading = false,
  dataTooltipId,
  onClick,
  to,
  target,
  icon,
  type,
  size = 'medium',
  view = 'primary',
  disabled = false,
}) => {
  const buttonClasses = clsx(styles.root, styles[view], className, size);

  return (
    <>
      {to ? (
        <Link
          data-testid="link-element"
          to={to}
          target={target}
          className={buttonClasses}
          onClick={onClick}
          aria-disabled={disabled}
        >
          {icon && icon}
          {text}
        </Link>
      ) : (
        <button
          data-testid="button-element"
          className={buttonClasses}
          type={type ? type : 'button'}
          onClick={onClick}
          data-tooltip-id={dataTooltipId || ''}
          disabled={disabled}
        >
          {isLoading ? (
            <span data-testid="button-element-loader" className={styles.loader}></span>
          ) : (
            <>
              {icon && icon}
              {text}
            </>
          )}
        </button>
      )}
    </>
  );
};

export default ButtonElement;
