import type { AnchorHTMLAttributes, ReactNode } from 'react';
import './button.css';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'ghost';
  children: ReactNode;
}

/** 링크형 CTA 버튼. 주 CTA는 mailto 링크로 사용된다. */
export function ButtonLink({
  href,
  variant = 'primary',
  children,
  className,
  ...rest
}: ButtonLinkProps) {
  const classes = `btn btn--${variant}${className ? ` ${className}` : ''}`;
  return (
    <a href={href} className={classes} {...rest}>
      <span className="btn__label">{children}</span>
      <span className="btn__arrow" aria-hidden="true">→</span>
    </a>
  );
}
