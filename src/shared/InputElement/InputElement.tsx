import { ForwardRefRenderFunction, forwardRef, useId, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './InputElement.module.scss';

import EyeOff from '../../assets/icons/EyeOff';
import EyeOn from '../../assets/icons/EyeOn';
import { authPath } from '../../routes/paths';

interface InputElementProps {
  className?: string;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'file' | 'textarea' | 'checkbox';
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  value?: string | number | readonly string[] | undefined;
  disabled?: boolean;
  isPassword?: boolean;
  isShowPassword?: boolean;
  required?: boolean;
  withLabel?: boolean;
  checked?: boolean;
  min?: string;
  max?: string;
  isForgot?: boolean;
}

const InputElement: ForwardRefRenderFunction<
  HTMLInputElement | HTMLTextAreaElement,
  InputElementProps
> = (
  {
    className = '',
    label = '',
    placeholder = '',
    type = 'text',
    onChange,
    error = '',
    value = '',
    withLabel = false,
    disabled = false,
    isPassword = false,
    isShowPassword = false,
    required = false,
    checked = false,
    isForgot = false,
    min = '',
    max = '',
    ...props
  },
  ref,
) => {
  const [showPassword, setShowPassword] = useState(isShowPassword);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onChange) onChange(event);
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const id = useId();
  const renderInputField = () => {
    if (type === 'textarea') {
      return (
        <textarea
          ref={ref as React.RefObject<HTMLTextAreaElement>}
          value={value as string}
          onChange={handleChange}
          className={`${styles.input} ${error && styles.input__error}`}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          aria-label={label}
          {...props}
        />
      );
    }

    return (
      <input
        id={id}
        ref={ref as React.RefObject<HTMLInputElement>}
        value={value as string}
        onChange={handleChange}
        className={`${type === 'file' ? styles.fileInput : styles.input} ${
          type === 'checkbox' && styles.checkboxInput
        } ${error && styles.input__error} ${isPassword && styles.input__password}`}
        type={isPassword && !showPassword ? 'password' : type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        checked={checked}
        aria-label={label}
        min={min}
        max={max}
        {...props}
      />
    );
  };

  return (
    <div className={`${styles.root} ${className} ${error && styles.error}`}>
      <div className={styles.inputWrapper}>
        {withLabel && <label className={styles.label}>{label}</label>}
        {renderInputField()}
        {isPassword && (
          <span className={styles.passwordIcon} onClick={togglePasswordVisibility}>
            {showPassword ? <EyeOff /> : <EyeOn />}
          </span>
        )}
        {isForgot && (
          <Link className={styles.forgot} to={`/${authPath.signIn.path}`}>
            Forgot password?
          </Link>
        )}
      </div>
      {error && <p className={styles.error__text}>{error}</p>}
    </div>
  );
};

export default forwardRef(InputElement);
