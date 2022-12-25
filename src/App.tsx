import { memo } from 'react';

import { Navbar, Home } from './components';

const App = () => (
  <>
    <Navbar />
    <div className="px-14">
      <Home />
    </div>
  </>
);

export default memo(App);
