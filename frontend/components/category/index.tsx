import React from 'react';
import scss from "./index.module.scss";
import Link from "next/link";
import {Button, EArrow, ETypeButton} from "../button";
import {Title} from "../title";
import {products4} from "../../server/products";
import {Product} from "../product";
import {Filter} from "../filter";
import PageSlider from "../page-slider";

interface IProps {
    name: string;
}


const Category:React.FC<IProps> = ({
      name,
                           }) => {
    return (
        <main className={scss.category}>
            <div className={scss.container}>

                <div className={scss.links}>
                    <Link href='/'>
                        <a>
                            <Button className={scss.link} type={ETypeButton.custom} arrow={EArrow.right}>Главная</Button>
                        </a>
                    </Link>
                    <Link href='/catalog'>
                        <a>
                            <Button className={scss.link} type={ETypeButton.custom} arrow={EArrow.right}>Каталог</Button>
                        </a>
                    </Link>
                    <Button className={scss.disabled} type={ETypeButton.custom} isDisabled={true}>{name}</Button>
                </div>

                <Title className={scss.title} isBig={true}>{name}</Title>

                <div className={scss.filters}>
                    <Button className={scss.filter} type={ETypeButton.gray}>Товары нашего производства</Button>
                    <Button className={scss.filter} type={ETypeButton.gray}>Полезное питание</Button>
                    <Button className={scss.filter} type={ETypeButton.gray}>Без ГМО</Button>
                </div>

                <Filter>
                        <div className={scss.products}>
                            {products4.map(product => <Product key={product.id} product={product} className={scss.product}/>)}
                        </div>
                    <div className={scss.show}>
                        <Button className={scss.showBtn} type={ETypeButton.gray}>Показать еще</Button>
                    </div>
                    <PageSlider className={scss.pageSlider}/>
                </Filter>

            </div>
        </main>
    );
};

export default Category;