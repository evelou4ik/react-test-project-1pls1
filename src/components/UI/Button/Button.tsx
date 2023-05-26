import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  type: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

const Button = (props: Props) => {
  const { children, type, className, onClick, isDisabled } = props;
  return (
    <button type={type} className={className} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
