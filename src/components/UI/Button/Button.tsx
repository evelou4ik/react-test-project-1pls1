import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  type: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
}

const Button = (props: Props) => {
  const { children, type, className, onClick } = props;
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
