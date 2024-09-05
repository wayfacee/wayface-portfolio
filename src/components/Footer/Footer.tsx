import Image from 'next/image';
import logo from '../assets/whiteLogo.svg';

export const Footer = () => {
  return (
    <footer className="py-6 px-20 bg-primary-black flex justify-between items-center w-full h-28">
      <div className="flex items-center justify-center gap-4">
        <Image alt="logo" src={logo} width={23} height={34} />
        <h5 className="text-xl font-bold text-primary-white">Personal</h5>
      </div>

      <div className="flex flex-col items-end justify-end gap-3">
        <h5 className="font-semibold text-base text-primary-white">
          @ 2019-2023 Personal
        </h5>
        <h5 className="font-semibold text-base text-primary-white">
          Made In Figma
        </h5>
      </div>
    </footer>
  );
};
