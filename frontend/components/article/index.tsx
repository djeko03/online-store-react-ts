import React from 'react';
import scss from './index.module.scss';
import { Button, ETypeButton } from '../button';
import { IArticle } from '../../interface/article.interface';
import { MyImage, MyLayout } from '../image';

interface IProps {
  article: IArticle;
}

export const Article:React.FC<IProps> = ({
  article,
}) => {
  return (
        <div className={scss.article}>
            <div>
                <MyImage layout={MyLayout.intrinsic} width={376} height={162} src={article.image}/>
            </div>
            <div className={scss.content}>
                <p className={scss.date}>{article.date}</p>
                <p className={scss.title}>{article.title}</p>
                <div className={scss.description}>
                    {article.description}
                </div>
            </div>
            <div className={scss.buttons}>
                <Button type={ETypeButton.mutedGreen} className={scss.button}>Подробнее</Button>
            </div>
        </div>
  );
};

