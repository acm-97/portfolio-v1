import React from 'react';
import classnames from 'classnames';

import {
  ExternalIcon,
  FolderIcon,
  GithubIcon,
  LinkedInIcon,
  TwiterIcon,
  InstagramIcon,
  LanguageIcon,
} from '@/components/icons';
import { Link } from '@/components';

type IconProps = { name?: string };
type IconRenderProps = {
  name?: 'Folder' | 'GitHub' | 'LinkedIn' | 'Twiter' | 'Instagram' | 'Language' | 'External';
  href?: string;
  className?: string;
  base?: boolean;
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
    case 'Language':
      return <LanguageIcon />;
    default:
      return <ExternalIcon />;
  }
};

const IconRender = ({ name, href, className = '', base = false }: IconRenderProps) => (
  <div className={classnames('icon', !base && ' h-9 w-9 p-2', className)}>
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
