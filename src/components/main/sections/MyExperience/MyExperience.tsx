import cl from './MyExperience.module.scss';
import googleIcon from '../../../assets/google.svg';
import ytIcon from '../../../assets/youtube.svg';
import appleIcon from '../../../assets/apple.svg';
import Image from 'next/image';

const MyExperience = () => {
  return (
    <section className={cl.sectionContainer}>
      <div className={cl.container}>
        <h1 className={cl.h1}>
          My{' '}
          <span className="font-extrabold text-primary-white">Experience</span>
        </h1>

        <div className={cl.posts}>
          <div className={cl.first}>
            <div className={cl.header}>
              <div className={cl.title}>
                <Image width={20} height={10} src={googleIcon} alt="Google" />
                <span className={cl.span}>
                  Lead Software Engineer at Google
                </span>
              </div>

              <span className={cl.createdAt}>Nov 2019 - Present</span>
            </div>

            <span className={cl.desc}>
              As a Senior Software Engineer at Google, I played a pivotal role
              in developing innovative solutions for Google's core search
              algorithms. Collaborating with a dynamic team of engineers, I
              contributed to the enhancement of search accuracy and efficiency,
              optimizing user experiences for millions of users worldwide.
            </span>
          </div>

          <div className={cl.second}>
            <div className={cl.header}>
              <div className={cl.title}>
                <Image width={20} height={10} src={ytIcon} alt="Youtubr" />
                <span className={cl.span}>Software Engineer at Youtube</span>
              </div>

              <span className={cl.createdAt}>Nov 2019 - Present</span>
            </div>

            <span className={cl.desc}>
              At Youtube, I served as a Software Engineer, focusing on the
              design and implementation of backend systems for the social media
              giant's dynamic platform. Working on projects that involved
              large-scale data processing and user engagement features, I
              leveraged my expertise to ensure seamless functionality and
              scalability.
            </span>
          </div>

          <div className={cl.third}>
            <div className={cl.header}>
              <div className={cl.title}>
                <Image width={20} height={10} src={appleIcon} alt="Apple" />
                <span className={cl.span}>
                  Junior Software Engineer at Apple
                </span>
              </div>

              <span className={cl.createdAt}>Nov 2019 - Present</span>
            </div>

            <span className={cl.desc}>
              During my tenure at Apple, I held the role of Software Architect,
              where I played a key role in shaping the architecture of
              mission-critical software projects. Responsible for designing
              scalable and efficient systems, I provided technical leadership to
              a cross-functional team.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};


export  {MyExperience};
