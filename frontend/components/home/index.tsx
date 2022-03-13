import React from 'react';
import { MainLayout } from '../../layout/main-layout';
import scss from './index.module.scss';
import { Title } from '../title';
import { Button, EArrow, ETypeButton } from '../button';
import { Product } from '../product';
import { products, products2, products3 } from '../../server/products';
import { SpecialOffers } from '../special-offers';
import { Article } from '../article';
import { articles } from '../../server/articles';
import { MyImage, MyLayout } from '../image';

export const Home: React.FC = () => {
  return (
        <MainLayout>
            <main className={scss.main}>

                <div className={scss.image}>
                    <MyImage layout={MyLayout.responsive} height={200} width={1600} src={'/img/Sliders.jpg'}/>
                </div>

                <div className={scss.container}>

                    <section>
                        <div className={scss.title}>
                            <Title>Акции</Title>
                            <Button className={scss.main} type={ETypeButton.custom} arrow={EArrow.right}>Все акции</Button>
                        </div>
                        <div className={scss.products}>
                            {products ? products.map(product => <Product key={product.id} product={product}/>) : ''}
                        </div>
                    </section>

                    <section>
                        <div className={scss.title}>
                            <Title>Новинки</Title>
                            <Button className={scss.main} type={ETypeButton.custom} arrow={EArrow.right}>Все новинки</Button>
                        </div>
                        <div className={scss.products}>
                            {products2 ? products2.map(product => <Product key={product.id} product={product}/>) : ''}
                        </div>
                    </section>

                    <section>
                        <div className={scss.title}>
                            <Title>Покупали раньше</Title>
                            <Button className={scss.main} type={ETypeButton.custom} arrow={EArrow.right}>Все покупки</Button>
                        </div>
                        <div className={scss.products}>
                            {products3 ? products3.map(product => <Product key={product.id} product={product}/>) : ''}
                        </div>
                    </section>

                    <section>
                        <div>
                            <Title>Специальные предложения</Title>
                        </div>
                        <SpecialOffers/>
                    </section>

                    <section>
                        <div className={scss.title}>
                            <Title>Статьи</Title>
                            <Button className={scss.main} type={ETypeButton.custom} arrow={EArrow.right}>Все статьи</Button>
                        </div>
                        <div className={scss.articles}>
                            {articles.map(article => <Article key={article.title} article={article}/>)}
                        </div>
                    </section>

                </div>
            </main>
        </MainLayout>
  );
};

