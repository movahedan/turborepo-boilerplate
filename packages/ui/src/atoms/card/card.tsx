import type { AnchorHTMLAttributes, ReactNode } from 'react';

export type CardProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  dataTestId?: string;
  children: ReactNode;
  className?: string;
};

export function Card({
  dataTestId,
  className,
  title,
  children,
  href,
}: CardProps) {
  return (
    <a
      className={className}
      data-testid={dataTestId}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}
