import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';

import ExperienceInfo from './ExperienceInfo';

import { CRAI, DOFLEINI } from '@/constants';
import { SectionHeader as Header } from '@/components';

import '@/styles/experience.css';

// type ExperienceProps = { sectioRef: any };

const jobs = ['CRAI', 'Dofleini'];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(jobs[0]);
  const { t } = useTranslation('experience');

  return (
    <div className="section-hidden w-full max-w-2xl">
      <Header num={2} text={t('title')} />
      <div className="grid-ex">
        <div className="tabs flex-col">
          {jobs.map((item) => (
            <button
              key={item}
              type="button"
              className={item === activeTab ? 'tab--active tab' : 'tab'}
              onClick={() => setActiveTab(item)}
            >
              <span>{item}</span>
            </button>
          ))}
        </div>

        <ExperienceInfo
          id={jobs[0]}
          position={t('crai.position')}
          project="CRAI"
          projectLink={CRAI}
          dateRange={t('crai.dateRange')}
          display={activeTab === jobs[0]}
        >
          <>{t('crai.description.1')}</>
          <>{t('crai.description.2')}</>
        </ExperienceInfo>

        <ExperienceInfo
          id={jobs[1]}
          position={t('dofleini.position')}
          project="Dofleini"
          projectLink={DOFLEINI}
          dateRange={t('dofleini.dateRange')}
          display={activeTab === jobs[1]}
        >
          <>
            <>{t('dofleini.description.1')}</>
          </>
          <>
            <>{t('dofleini.description.2')}</>
          </>
          <>
            <>{t('dofleini.description.3')}</>
          </>
        </ExperienceInfo>
      </div>
    </div>
  );
};

export default memo(Experience);
