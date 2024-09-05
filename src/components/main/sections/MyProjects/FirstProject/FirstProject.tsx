import Image from 'next/image';
import cl from './FirstProject.module.scss';
import FirstImg from '../../../../assets/first.png';
import GoIcon from '../../../../assets/go.svg';
import Link from 'next/link';

export const FirstProject = () => {
  return (
    <article className={cl.first}>
      <Image src={FirstImg} alt="Image" width={530} height={400} />

      <div className={cl.texts}>
        <h1>01</h1>
        <h5>Crypto Screener Application</h5>
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