"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  dataTestId?: string;
  children: ReactNode;
  className?: string;
};

export function Button({
  dataTestId,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      data-testid={dataTestId}
      type="button"
      {...rest}
      className={className}
    >
      {children}
    </button>
  );
}
