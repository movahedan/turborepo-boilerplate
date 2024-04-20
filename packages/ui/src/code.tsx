import type { BaseHTMLAttributes, ReactNode } from "react";

export type CodeProps = BaseHTMLAttributes<HTMLElement> & {
  dataTestId?: string;
  children: ReactNode;
  className?: string;
};

export function Code({ dataTestId, children, className }: CodeProps) {
  return (
    <code className={className} data-testid={dataTestId}>
      {children}
    </code>
  );
}
