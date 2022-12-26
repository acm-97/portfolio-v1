import { memo } from 'react';

// type ComponentProps = {};

const Home = () => (
  <div className=" min-h-[100vh] px-14">
    <h1 className="gradient-text font-black">Home Loaded</h1>
  </div>
);

export default memo(Home);
