import { memo } from 'react';

type SectionHeaderProps = { num: number; text: string };

const SectionHeader = ({ num, text }: SectionHeaderProps) => (
  <h3 className="numbered-header mt-2 mb-10 flex w-full items-center whitespace-nowrap">
    <span className="sec-color mr-2 font-mono text-xl">{`0${num}.`} </span>
    {text}
  </h3>
);

export default memo(SectionHeader);
