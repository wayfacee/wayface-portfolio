import { FirstProject } from '../FirstProject/FirstProject';
import { SecondProject } from '../SecondProject/SecondProject';
import { ThirdProject } from '../ThirdProject/ThirdProject';
import cl from './MyProjects.module.scss';

const MyProjects = () => {
  return (
    <section className={cl.sectionContainer}>
      <div className={cl.container}>
        <h1 className={cl.h1}>
          My <span className={cl.span}>Projects</span>
        </h1>

        <FirstProject />
        <SecondProject />
        <ThirdProject />
      </div>
    </section>
  );
};

export { MyProjects };
