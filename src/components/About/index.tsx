import { useTranslation } from 'react-i18next';
import { memo } from 'react';

import { CRAI, DOFLEINI } from '@/constants';
import { SectionHeader as Header, Link } from '@/components';

import '@/styles/about.css';

// type AboutProps = { sectioRef: any };

const About = () => {
  const { t } = useTranslation('about');
  return (
    <div className="w-full">
      <Header num={1} text={t('title')} />
      <div className="grid-ab">
        <div className="text-xl">
          <p>{t('history.part1')}</p>
          <p className="relative">
            {t('history.part2.1')} <Link href={CRAI}>{t('history.part2.2')}</Link> {t('history.part2.3')}{' '}
            <Link href={DOFLEINI}>{t('history.part2.4')}</Link> {t('history.part2.5')}
          </p>
          <p>{t('history.part3')}</p>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Angular</li>
            <li>Python</li>
          </ul>
        </div>
        <div>
          <div className="profile-img-container">
            <div className="profile-img-frame" />
            <div className="profile-img">
              <div className="tag-name">Alejandro Cabrera Mena</div>
              <div className="tag-occupation">{t('occupation')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(About);
