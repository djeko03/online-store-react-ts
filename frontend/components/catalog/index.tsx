import React from 'react';
import scss from './index.module.scss';
import { MainLayout } from '../../layout/main-layout';
import Link from 'next/link';
import { Button, EArrow, ETypeButton } from '../button';
import { Title } from '../title';

export const Catalog = () => {


  return (
        <MainLayout>
            <main className={scss.catalog}>
                <section className={scss.container}>

                    <div>
                        <Link href='/'>
                            <Button type={ETypeButton.custom} arrow={EArrow.right}>Главная</Button>
                        </Link>
                        <Button className={scss.disabled} type={ETypeButton.custom} isDisabled={true}>Каталог</Button>
                    </div>
                    <Title isBig={true}>Каталог</Title>

                    <div className={scss.content}>

                        <div className={scss.wrapper}>

                        </div>

                    </div>

                </section>
            </main>
        </MainLayout>
  );
};

