"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  appName: string;
};

export function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <button type="button" {...rest} className={className}>
      {children}
    </button>
  );
}
