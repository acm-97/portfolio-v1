import { memo } from 'react';

import { Navbar, Home } from './components';

const App = () => (
  <>
    <Navbar />
    <div>
      <Home />
    </div>
  </>
);

export default memo(App);
