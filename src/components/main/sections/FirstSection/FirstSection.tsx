import cl from './FirstSection.module.scss';
import facebookImg from '../../../assets/facebook.png';
import socialImg from '../../../assets/social.png';
import twitterImg from '../../../assets/twitter.png';
import discordImg from '../../../assets/discord.png';
import Image from 'next/image';
import Link from 'next/link';
import BannerImg from '../../../assets/banner.png';

const FirstSection = () => {
  return (
    <section className={cl.container}>
      <div className={cl.text}>
        <h1 className={cl.h1}>
          Hello I’am{' '}
          <span className="font-semibold">
            Wildesh. <br /> Frontend{' '}
            <span className="font-extrabold">Developer</span>
          </span>
          <br />
          Based in Somewhere
        </h1>

        <p className={cl.p}>
          I'm Wildesh. Lorem Ipsum is simply dummy text of the printing and{' '}
          <br />
          typesetting industry. Lorem Ipsum has been the industry's standard{' '}
          <br />
          dummy text ever since the 1500s, when an unknown printer took a <br />
          galley of type and scrambled it to specimen book.
        </p>
      </div>

      <div className={cl.links}>
        <Link target="_blank" href={'https://t.me/wayfaceee'}>
          <Image src={facebookImg} width={50} height={50} alt="facebook" />
        </Link>
        <Link target="_blank" href={'https://t.me/wayfaceee'}>
          <Image src={socialImg} width={50} height={50} alt="social" />
        </Link>
        <Link target="_blank" href={'https://t.me/wayfaceee'}>
          <Image src={twitterImg} width={50} height={50} alt="twitter" />
        </Link>
        <Link target="_blank" href={'https://t.me/wayfaceee'}>
          <Image src={discordImg} width={50} height={50} alt="discord" />
        </Link>
      </div>

      <Image
        className={cl.banner}
        src={BannerImg}
        width={750}
        height={600}
        alt="Banner Image"
      />
    </section>
  );
};

export { FirstSection };
