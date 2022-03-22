import React from 'react';
import { MyImage } from '../../image';
import scss from './index.module.scss';
import cn from 'classnames';

interface IProps {
  item: IItemProps;
}

interface IItemProps {
  isBig: boolean;
  src: string;
  name: string;
  gradient?: string;
}

export const CatalogItem:React.FC<IProps> = ({
  item,
}) => {
  return (
      <div className={item.isBig ? scss.itemBig : scss.item}>
        <MyImage src={item.src}/>
        <div className={scss.content} style={{ background: (item.gradient) }}>
            <p className={scss.name}>{item.name}</p>
        </div>
      </div>
  );
};

