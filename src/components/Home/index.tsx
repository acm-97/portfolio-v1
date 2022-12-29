import { useTranslation } from 'react-i18next';
import { memo } from 'react';

// type ComponentProps = {};

const Home = () => {
  const { t } = useTranslation('home');
  return (
    <div className="flex w-full flex-col items-start text-start">
      <div>
        <h6 className="sec-color font--mono mb-5 ml-1 font-normal">{t('salute')}</h6>
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
        <button type="button" className="btn-teal font--mono btn-outline btn mt-12">
          {t('downloadResume')}
        </button>
      </div>
    </div>
  );
};

export default memo(Home);
