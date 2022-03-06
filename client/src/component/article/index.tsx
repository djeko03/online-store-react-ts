import React from 'react';
import scss from './index.module.scss'
import { Button } from "../button";
import { IArticle } from "../../interface/article.interface";

interface IProps {
    article: IArticle;
}

export const Article:React.FC<IProps> = ({
    article,
                                         }) => {
    return (
        <div className={scss.article}>
            <div>
                <img src={article.image} alt=""/>
            </div>
            <div className={scss.content}>
                <p className={scss.date}>{article.date}</p>
                <p className={scss.title}>{article.title}</p>
                <div className={scss.description}>
                    {article.description}
                </div>
            </div>
            <div className={scss.button}>
                <Button>Подробнее</Button>
            </div>
        </div>
    );
};

