'use client';

import { useButton } from '@mui/base/useButton';
import { forwardRef } from 'react';

import type { ButtonHTMLAttributes, ForwardedRef, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  dataTestId?: string;
  children: ReactNode;
  className?: string;
};

export const Button = forwardRef(function Button(
  { dataTestId, className, children, ...rest }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const { getRootProps } = useButton();

  return (
    <button
      data-testid={dataTestId}
      type="button"
      {...getRootProps({ ref, ...rest })}
      className={className}
    >
      {children}
    </button>
  );
});
