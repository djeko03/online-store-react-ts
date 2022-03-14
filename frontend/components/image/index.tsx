import Image from 'next/image';
import React from 'react';

interface IProps {
  src: string;
  width?: number;
  height?: number;
  layout?: MyLayout;
  priority?: boolean;
  className?: string;
}

export enum MyLayout {
  fill = 'fill',
  responsive = 'responsive',
  fixed = 'fixed',
  intrinsic = 'intrinsic',
}

export const MyImage: React.FC<IProps> = ({
  src,
  width,
  height,
  layout = MyLayout.fill,
  className,
  priority = false,
}) => {

  return (
        <Image priority={priority} className={className} width={width} height={height} layout={layout} src={src} />
  );
};