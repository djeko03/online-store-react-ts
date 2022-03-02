import React from 'react';
import { MainLayout } from "../../layout/main-layout";
import scss from './index.module.scss'
import { Title } from "../../component/title";
import { Button, EArrow, ETypeButton } from "../../component/button";
import { Product } from "../../component/product";

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
                            <Button type={ETypeButton.custom} arrow={EArrow.right}>Все акции</Button>
                        </div>
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <Product discount={50} ordinaryPrice={50.50} cardPrice={44.50} description={'Г/Ц Блинчики с мясом вес, Россия'} image={"/img/blinchik.jpg"} isStock={true}/>
                            <Product discount={50} ordinaryPrice={50.50} cardPrice={44.50} description={'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...'} image={"/img/milk.jpg"} isStock={true}/>
                            <Product discount={50} ordinaryPrice={50.50} cardPrice={44.50} description={'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...'} image={"/img/kolbasa.jpg"} isStock={true}/>
                            <Product discount={50} ordinaryPrice={50.50} cardPrice={44.50} description={'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...'} image={"/img/sosiska.jpg"} isStock={true}/>
                        </div>
                    </section>
                </div>
            </main>
        </MainLayout>
    );
};

