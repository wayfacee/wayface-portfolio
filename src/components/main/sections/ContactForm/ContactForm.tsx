import { memo, useMemo } from 'react';
import cl from './ContactForm.module.scss';
import facebookIcon from '../../../assets/facebookS.png';
import socialIcon from '../../../assets/socialS.png';
import twitterIcon from '../../../assets/twitter.png';
import discordIcon from '../../../assets/discordS.png';
import Link from 'next/link';
import Image from 'next/image';

export const ContactForm = memo(() => {
  const buttonData = useMemo(
    () => [
      { id: 1, icon: facebookIcon, dark: true },
      { id: 2, icon: socialIcon },
      { id: 3, icon: twitterIcon },
      { id: 4, icon: discordIcon },
    ],
    [],
  );

  return (
    <div className={cl.container}>
      <div className="gap-5 flex flex-col justify-start items-start py-5">
        <input
          className="w-inputOne h-14 py-8 px-6 placeholder:text-base font-normal border-2 border-solid rounded"
          type="text"
          placeholder="Your name"
          required
        />
        <input
          className="w-inputOne h-14 py-8 px-6 placeholder:text-base font-normal border-2 border-solid rounded"
          type="text"
          placeholder="Email"
          required
        />
        <input
          className="w-inputOne h-14 py-8 px-6 placeholder:text-base font-normal border-2 border-solid rounded"
          type="text"
          placeholder="Your website (if exists)"
        />
        <textarea
          className="w-inputOne h-36 max-h-36 py-8 px-6 placeholder:text-base font-normal border-2 border-solid rounded"
          placeholder="How can I help?*"
        />

        <div className="flex flex-row gap-6 items-start">
          <button
            className="w-40 text-primary-white rounded text-center py-4 px-5 bg-primary-black"
            type="submit"
          >
            Get In Touch
          </button>

          {buttonData.map(({ icon, id, dark }) => (
            <Link href="" key={id} className="w-14 h-14">
              <Image src={icon} alt="Social Media Icon" className="w-14 h-14" />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-col gap-5 mb-10">
          <h1 className="text-5xl font-semibold text-start">
            Let's <span className="font-extrabold">talk</span> for <br />{' '}
            Something special
          </h1>

          <p className="text-base font-normal text-primary-neutral">
            I seek to push the limits of creativity to create high-engaging,{' '}
            <br />
            user-friendly, and memorable interactive experiences.
          </p>
        </div>

        <h3 className="text-3xl font-semibold text-start">
          wayfacee@gmail.com
        </h3>
      </div>
    </div>
  );
});

ContactForm.displayName = 'ContactForm'