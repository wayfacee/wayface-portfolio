import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface CardProps {
  img: StaticImport;
  desc: string;
  author: string;
  job: string;
  dark?: boolean;
}

export const Card = (props: CardProps) => {
  const { author, desc, img, job, dark } = props;

  return (
    <div
      className={`p-10 flex justify-center rounded-xl items-center gap-6 flex-col text-center h-forTest w-forTest shadow-md ${dark && 'bg-primary-black shadow-none'}`}
    >
      <Image src={img} alt="Author" width={96} height={96} />

      <p className={`max-w-72 ${dark && 'text-primary-white'}`}>{desc}</p>

      <div
        className={`border-solid border-primary-black border-b-2 rounded w-32 ${dark && 'border-primary-white'}`}
      />

      <div className={`text-xl font-semibold ${dark && 'text-primary-white'}`}>
        {author}
      </div>

      <div className={`text-base font-normal ${dark && 'text-primary-white'}`}>
        {job}
      </div>
    </div>
  );
};
