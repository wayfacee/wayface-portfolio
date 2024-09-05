import Image from 'next/image';
import abmImg from '../../../assets/abm.png';
import cl from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <section className={cl.container}>
      <Image width={525} height={572} src={abmImg} alt="About Me Image" />

      <div className={cl.layout}>
        <h1 className={cl.h1}>
          About <span className={cl.span}>Me</span>
        </h1>

        <div className={cl.text}>
          <p className={cl.p}>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className={cl.p}>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className={cl.p}>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
        </div>
      </div>
    </section>
  );
};

export  {AboutMe};
