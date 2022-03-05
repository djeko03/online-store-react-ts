import React from 'react';
import { MainLayout } from "../../layout/main-layout";
import scss from './index.module.scss'
import { Title } from "../../component/title";
import { Button, EArrow, EColorType, ESizeType } from "../../component/button";
import { Product } from "../../component/product";
import { Article } from "../../component/article";
import { articles } from '../../server/articles';

export const Home = () => {



    return (
        <MainLayout>
            <main className={scss.main}>

                <div className={scss.image}>
                    <img  src="/img/Sliders.jpg" alt=""/>
                </div>

                <div className={scss.container}>
                    <section>
                        <div className={scss.title}>
                            <Title>Акции</Title>
                            <Button size={ESizeType.mid} color={EColorType.decoratedGray} border={false} arrow={EArrow.right}>Все акции</Button>
                        </div>
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <Product discount={50} ordinaryPrice={50.50} cardPrice={44.50} description={'Г/Ц Блинчики с мясом вес, Россия'} image={"/img/blinchik.jpg"} isStock={true}/>
                            <Product/>
                            <Product/>
                            <Product/>
                        </div>
                    </section>
                    <section>
                        <div className={scss.title}>
                            <Title>Статьи</Title>
                            <Button size={ESizeType.mid} color={EColorType.decoratedGray} border={false} arrow={EArrow.right}>Все статьи</Button>
                        </div>
                        <div className={scss.articles}>
                            {articles.map(article => <Article article={article}/>)}
                        </div>
                    </section>

                </div>
            </main>
        </MainLayout>
    );
};

