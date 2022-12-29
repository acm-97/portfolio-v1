import { ReactNode, memo } from 'react';

type LinkProps = { href: string; children: ReactNode; underline?: boolean };

const Link = ({ href, children, underline = false }: LinkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={underline ? 'underline' : ''}>
    {children}
  </a>
);

export default memo(Link);
