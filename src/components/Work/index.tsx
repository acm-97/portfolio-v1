import { memo } from 'react';

import { useProjects } from '@/hooks';
import { SectionHeader as Header, Icon, Link } from '@/components';
import '@/styles/work.css';

// type WorkProps = {};

const Work = () => {
  const { personalProjects } = useProjects();
  return (
    <>
      <div className="flex w-full flex-col justify-start">
        <Header className="section-hidden" num={2} text="Some Things I’ve Built" />
        <ul className="w-full">
          {personalProjects.map((project) => (
            <li key={project.name} className="grid-wo section-hidden">
              <div className="project-content w-full">
                <div className="project-header">
                  <p className="sec-color font--mono mb-1 text-sm">Featured Project</p>
                  <p className="text-2xl">{project.name}</p>
                </div>
                <div className="project-description">{project.description}</div>
                <div className="project-keywords mb-3 text-sm">
                  {project.keyWords.map((keyWord) => (
                    <span className="mx-2" key={`${project.name}-${keyWord}`}>
                      {keyWord}
                    </span>
                  ))}
                </div>
                <div>
                  <Icon name="GitHub" href={project.github} />
                  <Icon href={project.website} />
                </div>
              </div>
              <div className="project-image-wrapper">
                <figure className="project-image relative h-full cursor-pointer grayscale filter transition-all duration-300 hover:blur-none hover:grayscale-0 max-md:blur-sm">
                  <Link href={project.website}>
                    <img className="rounded-lg" src={project.image} alt={project.name} />
                  </Link>
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default memo(Work);
