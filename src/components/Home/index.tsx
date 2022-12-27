import { useTranslation } from 'react-i18next';
import { memo } from 'react';

// type ComponentProps = {};

const Home = () => {
  const { t } = useTranslation('home');
  return (
    <div className="flex min-h-[100vh] flex-col items-start justify-center text-start">
      <h6 className="sec-color mb-5 ml-1 font-mono font-normal">{t('salute')}</h6>
      <h1 className="mb-1 font-black">{t('name')}</h1>
      <h1 className="font-black opacity-70">
        {t('occupation.part1')} <span className="sec-color">UI</span> {t('occupation.part2')}.
      </h1>
      <p className="mt-5 max-w-xl text-xl opacity-70">{t('description')}</p>
      <button type="button" className="btn-teal btn-outline btn mt-12 font-mono">
        {t('downloadResume')}
      </button>
      {/* <p className="gradient-text">Home Loaded</p> */}
    </div>
  );
};

export default memo(Home);
