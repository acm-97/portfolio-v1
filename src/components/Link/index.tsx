import { ReactNode, memo } from 'react';

type LinkProps = { href: string; children: ReactNode };

const Link = ({ href, children }: LinkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default memo(Link);
