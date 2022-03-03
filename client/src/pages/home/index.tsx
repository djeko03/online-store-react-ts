import React from 'react';
import { MainLayout } from "../../layout/main-layout";
import scss from './index.module.scss'
import { Title } from "../../component/title";
import { Button, EArrow, EColorType, ESizeType } from "../../component/button";
import { Product } from "../../component/product";
import { Article } from "../../component/article";

export const Home = () => {

    const articles = [
        {image: '/img/articles/image 5.jpg', date: '05.03.2021', title: 'Режим использования масок и перчаток на территории магазинов', description: 'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.'},
        {image: '/img/articles/image 5 (1).jpg', date: '05.03.2021', title: 'Весеннее настроение для каждой', description: '8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.'},
        {image: '/img/articles/image 5 (2).jpg', date: '22.02.2020', title: 'ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!', description: 'Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!'},
    ]

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

