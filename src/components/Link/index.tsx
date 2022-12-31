import { ReactNode, memo } from 'react';
import classnames from 'classnames';

type LinkProps = {
  href: string;
  external: boolean;
  children: ReactNode;
  underline?: boolean;
  onClick?: () => void;
  className?: string;
};

const Link = ({
  href,
  children,
  underline = false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
  className = '',
  external = true,
}: LinkProps) =>
  external ? (
    <a href={href} onClick={onClick} className={classnames(underline && 'underline', className)}>
      {children}
    </a>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={classnames(underline && 'underline', className)}
    >
      {children}
    </a>
  );

export default memo(Link);
