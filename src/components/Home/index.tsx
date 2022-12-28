import { useTranslation } from 'react-i18next';
import { memo } from 'react';

// type ComponentProps = {};

const Home = () => {
  const { t } = useTranslation('home');
  return (
    <div id="home" className="text-start">
      <div>
        <h6 className="sec-color mb-5 ml-1 font-mono font-normal">{t('salute')}</h6>
      </div>

      <div>
        <h1 className="mb-1 font-black">{t('name')}</h1>
      </div>
      <div>
        <h1 className="font-black opacity-70">
          {t('occupation.part1')} <span className="sec-color">UI</span> {t('occupation.part2')}.
        </h1>
      </div>
      <div>
        <p className="mt-5 max-w-xl text-xl opacity-70">{t('description')}</p>
      </div>
      <div>
        <button type="button" className="btn-teal btn-outline btn mt-12 font-mono">
          {t('downloadResume')}
        </button>
      </div>
      {/* <p className="gradient-text">Home Loaded</p> */}
    </div>
  );
};

export default memo(Home);
