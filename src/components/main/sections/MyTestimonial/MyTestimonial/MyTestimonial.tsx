import { Card } from '../Card/Card';
import cl from './MyTestimonial.module.scss';
import TestFirst from '../../../../assets/TestFirst.png';
import TestSecond from '../../../../assets/TestSecond.png';
import { memo, useMemo } from 'react';

export const MyTestimonial = memo(() => {
  const cardData = useMemo(
    () => [
      {
        id: 1,
        author: 'Evren Shah',
        job: 'Designer',
        desc: 'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
        img: TestFirst,
      },
      {
        id: 2,
        dark: true,
        author: 'Flora sheen',
        job: 'Designer',
        desc: 'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
        img: TestSecond,
      },
      {
        id: 3,
        author: 'Evren Shah',
        job: 'Designer',
        desc: 'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
        img: TestFirst,
      },
    ],
    [],
  );

  return (
    <section className={cl.container}>
      <h1 className={cl.h1}>
        My <span>Testimonial</span>
      </h1>

      <div className="flex flex-row gap-7 py-10 px-6">
        {cardData.map(({ id, img, author, desc, job, dark }) => (
          <Card
            key={id}
            img={img}
            author={author}
            desc={desc}
            job={job}
            dark={dark}
          />
        ))}
      </div>
    </section>
  );
});
