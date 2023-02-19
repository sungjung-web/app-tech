import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  imgClassName?: string;
}

export default function TailwindImage({ src, alt, imgClassName }: Props) {
  return (
    <div className={`h-full w-full relative`}>
      <Image src={src} alt={alt} fill={true} style={{ objectFit: 'cover' }} className={imgClassName} />
    </div>
  );
}
