import { memo, useEffect, useRef } from 'react';
import classNames from 'classnames';

import { HideShowNav, scrollToHashSection, showSections } from './utils';

import { Navbar, Home, About, Experience, Work } from '@/components';

const App = () => {
  const sectionAbout = useRef<HTMLDivElement>(null);
  const sectionExperience = useRef<HTMLDivElement>(null);
  const sectionWork = useRef<HTMLDivElement>(null);
  const sectionContact = useRef<HTMLDivElement>(null);

  const sections = [
    { key: 'home', component: <Home />, ref: null },
    { key: 'about', component: <About />, ref: sectionAbout },
    { key: 'experience', component: <Experience />, ref: sectionExperience },
    { key: 'work', component: <Work />, ref: sectionWork },
  ];

  useEffect(() => {
    HideShowNav();
  });

  useEffect(() => {
    showSections();
  }, []);

  useEffect(() => {
    scrollToHashSection(sectionAbout, sectionExperience, sectionWork, sectionContact);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionAbout, sectionExperience, sectionWork, sectionContact, window.location.hash]);

  return (
    <div>
      <Navbar>
        {sections.map(({ key, component, ref }, i) => (
          <section
            key={`${key}-section`}
            id={key}
            ref={ref}
            className={classNames(
              i === 0 ? 'min-h-[100vh]' : 'min-h-[60vh]',
              'section flex w-full flex-col items-center justify-center',
            )}
          >
            {component}
          </section>
        ))}
      </Navbar>
    </div>
  );
};

export default memo(App);
