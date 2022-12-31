import { memo, ReactNode, useEffect, useRef } from 'react';
import { ArrowSmallUpIcon } from '@heroicons/react/24/outline';

import NavMenu from './NavMenu';

import { scrollToTop } from '@/utils';

import '@/styles/navbar.css';

type NavBarProps = { children: ReactNode };

const Navbar = ({ children }: NavBarProps) => {
  const refDrawer = useRef<HTMLDivElement>(null);

  const onChecked = (e: any) => {
    const { checked } = e.target;

    if (checked && refDrawer?.current) {
      refDrawer.current.style.height = '100dvh';
    } else if (refDrawer?.current) refDrawer.current.style.height = '100%';
  };

  const onScrollToTop = () => {
    scrollToTop();
    window.history.pushState
      ? window.history.pushState('', '/', window.location.pathname)
      : (window.location.hash = '');
  };

  return (
    <>
      <div className="drawer drawer-end h-full flex-col" ref={refDrawer}>
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" onClick={onChecked} />
        <div className="drawer-content flex h-full w-full">
          {/* <!-- Navbar --> */}
          <div className="navbar-fixed navbar h-16 w-full bg-base-100 px-4 text-sm sm:px-9">
            <div className="mx-2 flex-1 px-2">Navbar Title</div>
            <div className="hidden flex-none lg:block">
              <NavMenu horizontal />
            </div>
            <div className="flex-none lg:hidden">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="my-drawer-3" className="btn-ghost btn-square btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          <main>{children}</main>
        </div>

        {/* <!-- Sidebar here --> */}
        <div className="drawer-side">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="my-drawer-3" className="drawer-overlay" />
          <NavMenu />
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
