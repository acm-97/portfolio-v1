import classnames from 'classnames';
import { memo } from 'react';

type SectionHeaderProps = { num: number; text: string; className?: string };

const SectionHeader = ({ num, text, className = '' }: SectionHeaderProps) => (
  <h3 className={classnames(className, 'numbered-header mt-2 mb-10 flex w-full items-center whitespace-nowrap')}>
    <span className="sec-color font--mono mr-2 text-xl">{`0${num}.`} </span>
    {text}
  </h3>
);

export default memo(SectionHeader);
