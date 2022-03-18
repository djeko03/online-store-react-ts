import React from 'react';
import scss from './index.module.scss';
import { MainLayout } from '../../layout/main-layout';
import Link from 'next/link';
import { Button, EArrow, ETypeButton } from '../button';
import { Title } from '../title';
import { catalogProducts } from '../../server/catalog-products';
import { CatalogItem } from './catalog-item';
import cn from 'classnames';

export const Catalog = () => {

  return (
        <MainLayout>
            <main className={scss.catalog}>
                <section className={scss.container}>

                    <div>
                        <Link href='/'>
                            <span>
                                <Button type={ETypeButton.custom} arrow={EArrow.right}>Главная</Button>
                            </span>
                        </Link>
                        <Button className={scss.disabled} type={ETypeButton.custom} isDisabled={true}>Каталог</Button>
                    </div>
                    <Title isBig={true}>Каталог</Title>

                        <div className={scss.wrapper}>
                            {catalogProducts.map(product =>
                                    <CatalogItem key={product.id} item={product}/>,
                            )}
                        </div>

                </section>
            </main>
        </MainLayout>
  );
};

