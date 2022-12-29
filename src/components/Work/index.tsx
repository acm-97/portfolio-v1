import { memo } from 'react';

import { SectionHeader as Header } from '@/components';
// type WorkProps = {};

const Work = () => (
  <>
    <div className="flex w-full justify-start">
      <Header num={2} text="Where I’ve Worked" />
    </div>
  </>
);

export default memo(Work);
