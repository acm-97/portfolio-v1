import { memo, useEffect, useRef } from 'react';
import classNames from 'classnames';

import { scrollToHashSection, showSections } from './utils';

import { Navbar, Home, About } from '@/components';

const App = () => {
  const sectionAbout = useRef<HTMLDivElement>(null);
  const sectionExperience = useRef<HTMLDivElement>(null);
  const sectionWork = useRef<HTMLDivElement>(null);
  const sectionContact = useRef<HTMLDivElement>(null);

  const sections = [
    { key: 'home-section', component: <Home />, sectioRef: null },
    { key: 'about-section', component: <About sectioRef={sectionAbout} /> },
  ];

  useEffect(() => {
    showSections();
  }, []);

  useEffect(() => {
    scrollToHashSection(sectionAbout, sectionExperience, sectionWork, sectionContact);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionAbout, sectionExperience, sectionWork, sectionContact, window.location.hash]);

  return (
    <>
      <Navbar />
      {sections.map(({ key, component }, i) => (
        <section
          key={key}
          className={classNames(
            i > 0 && 'section-hidden',
            'section flex min-h-[100vh] flex-col items-start  justify-center',
          )}
        >
          {component}
        </section>
      ))}
    </>
  );
};

export default memo(App);
