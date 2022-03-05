import React from 'react';
import { MainLayout } from "../../layout/main-layout";
import scss from './index.module.scss'
import { Title } from "../../component/title";
import { Button, EArrow, ETypeButton } from "../../component/button";
import { Product } from "../../component/product";
import { products } from "../../server/products";
import { SpecialOffers } from "../../component/special-offers";

export const Home = () => {
    return (
        <MainLayout>
            <main className={scss.main}>

                <div className={scss.image}>
                    <img  src="/img/Sliders.jpg" alt=""/>
                </div>

                <div className={scss.container}>
                    <section>
                        <div className={scss.stock}>
                            <Title>Акции</Title>
                            <Button className={scss.main} type={ETypeButton.custom} arrow={EArrow.right}>Все акции</Button>
                        </div>
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            {products.map(product => <Product product={product}/>)}

                        </div>
                    </section>

                    <section>
                        <SpecialOffers/>
                    </section>
                </div>
            </main>
        </MainLayout>
    );
};

