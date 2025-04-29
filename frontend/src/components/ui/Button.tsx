import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  className,
  disabled,
  ...props
}) => {
  const baseClasses = 'rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center';

  const variantClasses = {
    primary: 'bg-blue-900 text-white hover:bg-blue-800 active:bg-blue-950',
    secondary: 'bg-teal-600 text-white hover:bg-teal-500 active:bg-teal-700',
    outline: 'bg-transparent border-2 border-blue-900 text-blue-900 hover:bg-blue-50',
    danger: 'bg-red-600 text-white hover:bg-red-500 active:bg-red-700',
  };

  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  const disabledClasses = disabled
    ? 'opacity-60 cursor-not-allowed'
    : 'cursor-pointer';

  const fullWidthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${fullWidthClass} ${className || ''}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;