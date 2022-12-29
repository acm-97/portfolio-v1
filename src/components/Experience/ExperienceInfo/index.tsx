import { memo, ReactNode } from 'react';
import classNames from 'classnames';

import { CRAI } from '@/constants';
import { Link } from '@/components';

type ExperienceInfoProps = {
  id: string;
  position: string;
  project: string;
  projectLink?: string;
  dateRange: string;
  children: ReactNode[];
  display: boolean;
};

const ExperienceInfo = ({ id, position, project, projectLink, dateRange, children, display }: ExperienceInfoProps) => (
  <div id={id} className={classNames(display ? 'block' : 'hidden', 'tab-content text- flex flex-col px-5 py-1')}>
    <h5>
      <>
        {position} <span className="sec-color">@ </span>
        {projectLink ? (
          <Link underline href={projectLink}>
            {project}
          </Link>
        ) : (
          { project }
        )}
      </>
    </h5>
    <span className="primary-color-dark font--mono mt-2 mb-5 text-sm">{dateRange}</span>
    <ul className="description-list">
      {children.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

export default memo(ExperienceInfo);
