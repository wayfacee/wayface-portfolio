import Image from 'next/image';
import cl from './SkillsSection.module.scss';
import gitImg from '../../../assets/git.png';
import jsImg from '../../../assets/js.png';
import sassImg from '../../../assets/sass.png';
import nestImg from '../../../assets/nest.png';
import storybookImg from '../../../assets/storybook.png';
import socketIoImg from '../../../assets/socket.png';

const SkillsSection = () => {
  return (
    <section className={cl.sectionContainer}>
      <div className={cl.container}>
        <h1 className={cl.h1}>
          My <span className="font-extrabold">Skills</span>
        </h1>

        <div className={cl.skills}>
          <Image src={gitImg} width={185} height={185} alt="gitImg" />
          <Image src={jsImg} width={185} height={185} alt="jsImg" />
          <Image src={sassImg} width={185} height={185} alt="sassImg" />
          <Image src={nestImg} width={185} height={185} alt="nestImg" />
          <Image
            src={storybookImg}
            width={185}
            height={185}
            alt="storybookImg"
          />
          <Image src={socketIoImg} width={185} height={185} alt="socketIoImg" />
          <Image src={gitImg} width={185} height={185} alt="gitImg" />
          <Image src={jsImg} width={185} height={185} alt="jsImg" />
          <Image src={sassImg} width={185} height={185} alt="sassImg" />
          <Image src={nestImg} width={185} height={185} alt="nestImg" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
