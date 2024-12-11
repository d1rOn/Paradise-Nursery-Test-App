import { CSSProperties, FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';


import s from './Img.module.scss';

interface ImgProps {
  className?: string;
  isResetStyle?: boolean;
  src: StaticImageData | string;
  alt?: string;
  svg?: boolean;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  unoptimized?: boolean;
  style?: CSSProperties;
}

const Img: FC<ImgProps> = ({
  className,
  isResetStyle,
  src,
  alt = '',
  svg,
  priority,
  quality = 75,
  fill = true,
  sizes = '(min-width: 0) 100vw',
  unoptimized,
  width,
  height,
  style,
}) => {
  return (
    <div
      className={clsx(className,!isResetStyle && s.img, svg && s.img_svg)}
      style={style}
    >
      <Image
        src={src}
        alt={alt}
        priority={priority}
        quality={quality}
        unoptimized={unoptimized}
        {...(width && height
          ? {
              width,
              height,
            }
          : {
              fill,
              sizes,
            })}
      />
    </div>
  );
};

export default Img;
