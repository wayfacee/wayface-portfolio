import Image from 'next/image';
import cl from './ThirdProject.module.scss';
import ThirdImg from '../../../../assets/third.png';
import GoIcon from '../../../../assets/go.svg';
import Link from 'next/link';

export const ThirdProject = () => {
  return (
    <article className={cl.third}>
      <Image src={ThirdImg} alt="Image" width={530} height={400} />

      <div className={cl.texts}>
        <h1>03</h1>
        <h5>Blog Website Template</h5>
        <p>
          I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to specimen book.
        </p>

        <Link target="_blank" href={'https://t.me/wayfaceee'}>
          <Image src={GoIcon} width={20} height={20} alt="Check Project" />
        </Link>
      </div>
    </article>
  );
};