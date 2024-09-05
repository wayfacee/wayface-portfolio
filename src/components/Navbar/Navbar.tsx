import Image from 'next/image';
import cl from './Navbar.module.scss';
import LogoIcon from '../assets/logo.svg';
import DownloadIcon from '../assets/download.svg';
import Link from 'next/link';
import MenuIcon from '../assets/menu.svg';

export const Navbar = () => {
  return (
    <header className={cl.header}>
      <div className={cl.personal}>
        <Image src={LogoIcon} width={40} height={40} alt="Logo" />
        <p>Personal</p>
      </div>

      <button className={cl.menu}>
        <Image src={MenuIcon} alt="Menu" width={27} height={18} />
      </button>
      
      <div className={cl.navigation}>
        <Link href="/">About Me</Link>
        <Link href="/" className={cl.bold}>
          Skills
        </Link>
        <Link href="/" className={cl.bold}>
          Project
        </Link>
        <Link href="/" className={cl.bold}>
          Contact Me
        </Link>
      </div>

      <button className={cl.resume}>
        Resume
        <Image
          className={cl.logo}
          src={DownloadIcon}
          width={20}
          height={20}
          alt="Download"
        />
      </button>
    </header>
  );
};
