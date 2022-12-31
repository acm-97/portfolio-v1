/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-key */
import { Trans, useTranslation } from 'react-i18next';
import { ReactNode } from 'react';

export type PersonalProjectsProps = {
  name: string;
  description: ReactNode;
  keyWords: string[];
  github: string;
  website: string;
  image: string;
};

const useProjects = () => {
  const { t } = useTranslation('work');
  const personalProjects: PersonalProjectsProps[] = [
    {
      name: 'ACMFolio',
      description: t('myBuilds.acmfolio.description'),
      keyWords: ['React', 'Styled Components', 'TypeScript'],
      github: 'https://github.com/acm-97/AcmFolio',
      website: 'https://portfolio-v2-swart-zeta.vercel.app/',
      image: '/projects/acmfolio.png',
    },
    {
      name: 'Snake Game',
      description: (
        <Trans
          // @ts-ignore
          defaults={t('myBuilds.snakegame.description')}
          values={{ npm: 'NPM' }}
          components={[<a className="underline" href="https://www.npmjs.com/package/@acm-97/react-snake-game" />]}
        />
      ),
      keyWords: ['React', 'CSS', 'TypeScript', 'NPM'],
      github: 'https://github.com/acm-97/react-snake-game',
      website: 'https://acm-97.github.io/react-snake-game/',
      image: '/projects/snakegame.png',
    },
    {
      name: 'Eslint-Prettier Config',
      description: (
        <Trans
          // @ts-ignore
          defaults={t('myBuilds.eslintprettier.description')}
          values={{ npm: 'NPM' }}
          components={[<a className="underline" href="https://www.npmjs.com/package/@acm-97/eslint-prettier-config" />]}
        />
      ),
      keyWords: ['Eslint', 'Prettier', 'NPM'],
      github: 'https://github.com/acm-97/react-snake-game',
      website: 'https://acm-97.github.io/react-snake-game/',
      image: '/projects/eslintprettier.png',
    },
  ];

  return { personalProjects };
};

export default useProjects;
