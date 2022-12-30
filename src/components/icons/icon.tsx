import React from 'react';
import classnames from 'classnames';

import { ExternalIcon, FolderIcon, GithubIcon, LinkedInIcon, TwiterIcon, InstagramIcon } from '@/components/icons';
import { Link } from '@/components';

type IconProps = { name?: string };
type IconRenderProps = {
  name?: 'Folder' | 'GitHub' | 'LinkedIn' | 'Twiter' | 'Instagram' | 'External';
  href?: string;
  className?: string;
};

const Icon = ({ name }: IconProps) => {
  switch (name) {
    case 'Folder':
      return <FolderIcon />;
    case 'GitHub':
      return <GithubIcon />;
    case 'LinkedIn':
      return <LinkedInIcon />;
    case 'Twiter':
      return <TwiterIcon />;
    case 'Instagram':
      return <InstagramIcon />;
    default:
      return <ExternalIcon />;
  }
};

const IconRender = ({ name, href, className = '' }: IconRenderProps) => (
  <div className={classnames('icon inline-block h-9 w-9 p-2', className)}>
    {href ? (
      <Link href={href}>
        <Icon name={name} />
      </Link>
    ) : (
      <Icon name={name} />
    )}
  </div>
);
export default IconRender;
