import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ArrowSmallUpIcon } from '@heroicons/react/24/outline';

import { HideShowNav, scrollToTop } from '@/utils';
import { routes } from '@/constants';

// type NavBarProps = {};

const Navbar = () => {
  const { t, i18n } = useTranslation('common');
  // eslint-disable-next-line no-restricted-globals
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    HideShowNav();
  });

  const handleLanguage = async () => {
    if (i18n.language === 'en') await i18n.changeLanguage('es');
    else await i18n.changeLanguage('en');
  };

  const onScrollToTop = () => {
    scrollToTop();
    window.history.pushState
      ? window.history.pushState('', '/', window.location.pathname)
      : (window.location.hash = '');
  };

  return (
    <>
      {/* <div className="navbar h-24" /> */}
      <div className="navbar-fixed navbar h-24 bg-base-100 px-9 text-sm">
        <div className="flex-1">
          <a className="btn-ghost btn text-xl normal-case">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 ">
            {routes.map((route, i) => (
              <li key={route.name} className="p-3">
                <a
                  className={classNames(
                    active === route.path && 'sec-color',
                    'gap-1 p-0 hover:bg-transparent  focus:bg-transparent',
                  )}
                  href={route.path}
                  onClick={() => setActive(route.path)}
                >
                  <span className="sec-color p-0">{`0${i + 1}.`}</span> {t(route.name.toLowerCase())}
                </a>
              </li>
            ))}
            <li className="p-3">
              <button
                type="button"
                onClick={handleLanguage}
                className="sec-color-light sec-color min-h-8 btn h-8 gap-2 p-3 py-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                  />
                </svg>
                {i18n.language}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <button
        type="button"
        onClick={onScrollToTop}
        id="fixed-button"
        className="btn-square btn fixed bottom-4 right-2 hidden"
      >
        <ArrowSmallUpIcon />
      </button>
    </>
  );
};

export default memo(Navbar);
