import { memo } from 'react';

import { Navbar, Home, About } from './components';

const sections = [
  { key: 'home-section', component: <Home /> },
  { key: 'about-section', component: <About /> },
];

const App = () => (
  <>
    <Navbar />
    {sections.map(({ key, component }) => (
      <div key={key} className="section flex min-h-[100vh] flex-col items-start  justify-center">
        {component}
      </div>
    ))}
  </>
);

export default memo(App);
