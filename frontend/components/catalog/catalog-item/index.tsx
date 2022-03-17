import React from 'react';
import { MyImage, MyLayout } from '../../image';

interface IItemProps {
  width: number;
  height: number;
  src: string;
}

interface IProps {
  item: IItemProps;
}

export const CatalogItem:React.FC<IProps> = ({
  item,
}) => {
  return (

            <MyImage layout={MyLayout.responsive} width={item.width} height={item.height} src={item.src}/>
  );
};

