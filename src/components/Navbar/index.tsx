import { memo, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { ArrowSmallUpIcon } from '@heroicons/react/24/outline';

import { routes } from '@/constants';
import { scrollToTop } from '@/utils';

// type NavBarProps = {};

const Navbar = () => {
  // eslint-disable-next-line no-restricted-globals
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    const navbar = document.querySelectorAll('.navbar');
    const button = document.querySelector('#fixed-button');

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      if (lastScrollY < window.scrollY) {
        button?.classList.add('fixed-button');
        navbar?.forEach((nav) => nav.classList.add('navbar-hiden', 'navbar-boxshadow'));
      } else navbar?.forEach((nav) => nav.classList.remove('navbar-hiden'));

      if (window.scrollY === 0) {
        button?.classList.remove('fixed-button');
        navbar?.forEach((nav) => nav.classList.remove('navbar-boxshadow'));
      }

      lastScrollY = window.scrollY;
    });
  });

  return (
    <>
      <div className="navbar h-20" />
      <div className="navbar-fixed navbar bg-base-100 px-9 py-4 text-sm">
        <div className="flex-1">
          <a className="btn-ghost btn text-xl normal-case">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 ">
            {routes.map((route, i) => (
              <li key={route.name} className="p-3">
                <a
                  className={classNames(
                    active === route.path && 'text-teal-300',
                    'gap-1 p-0 hover:bg-transparent hover:text-teal-300 focus:bg-transparent',
                  )}
                  href={route.path}
                  onClick={() => setActive(route.path)}
                >
                  <span className="p-0 text-teal-300">{`0${i + 1}.`}</span> {route.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        id="fixed-button"
        className="btn-square btn fixed bottom-4 right-2 hidden"
      >
        <ArrowSmallUpIcon />
      </button>
    </>
  );
};

export default memo(Navbar);
