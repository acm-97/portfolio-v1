import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import classnames from 'classnames';

import { routes } from '@/constants';
import { Icon, Link } from '@/components';

type NavMenuProps = { horizontal?: boolean; className?: string };

const NavMenu = ({ className = '', horizontal = false }: NavMenuProps) => {
  const { t, i18n } = useTranslation('common');
  const [active, setActive] = useState(window.location.pathname);

  const menuStyles = horizontal
    ? 'menu-horizontal'
    : 'w-80 bg-base-100 p-4 flex-col justify-center items-center text-3xl';

  const handleLanguage = async () => {
    if (i18n.language === 'en') await i18n.changeLanguage('es');
    else await i18n.changeLanguage('en');
  };

  return (
    <ul className={classnames(className, menuStyles, 'menu')}>
      {routes.map((route, i) => (
        <li key={route.name} className="p-3.5">
          <Link
            external={false}
            className={classnames(
              !horizontal && 'flex flex-col ',
              active === route.path && 'sec-color',
              'gap-1 p-0  hover:bg-transparent focus:bg-transparent',
            )}
            href={route.path}
            onClick={() => setActive(route.path)}
          >
            <span className="sec-color p-0">{`0${i + 1}.`}</span> {t(route.name.toLowerCase())}
          </Link>
        </li>
      ))}
      <li className="p-3">
        <button
          type="button"
          onClick={handleLanguage}
          className={classnames(
            'sec-color-light sec-color btn mt-14 h-16 gap-2 rounded p-3 max-md:text-2xl md:mt-0 md:h-8 md:py-0 md:min-h-8',
          )}
        >
          <Icon name="Language" base className={!horizontal ? 'h-10 w-10' : 'h-5 w-5'} />
          {i18n.language}
        </button>
      </li>
    </ul>
  );
};

export default memo(NavMenu);
