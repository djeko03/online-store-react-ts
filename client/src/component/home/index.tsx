import React from 'react';
import { MainLayout } from "../../layout/main-layout";
import scss from './index.module.scss'
import { Title } from "../title";
import { Button, EArrow, EColorType, ESizeType } from "../button";

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
                            <Button size={ESizeType.mid} color={EColorType.decoratedGray} border={false} arrow={EArrow.right}>Все акции</Button>
                        </div>
                        <div>

                        </div>
                    </section>
                </div>
            </main>
        </MainLayout>
    );
};

