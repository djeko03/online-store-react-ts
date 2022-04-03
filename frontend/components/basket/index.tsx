import React, {useCallback, useRef, useState} from 'react';
import {MainLayout} from "../../layout/main-layout";
import scss from './index.module.scss'
import {Button, EArrow, ETypeButton} from "../button";
import Link from 'next/link';
import {Title} from '../title';
import {BasketProduct} from "../basket-product";
import {Switch} from "../switch";
import cn from 'classnames';
import { MyCheckbox } from "../checkbox";
import Minus from '../../assets/icons/minus.svg'
import basket from "../../store/basket";
import {observer} from "mobx-react-lite";

export const Basket = observer(() => {

    const [checked, setChecked] = useState(false)
    const handleAllChecked = () => {
        setChecked(!checked)
        basket.doAllChecked()
    }

    const handleRemoveBtn = () => basket.removeProduct()

    return (
        <MainLayout>
            <main className={scss.basket}>
                <div className={scss.container}>

                    <div>
                        <Link href='/'>
                            <a><Button type={ETypeButton.custom} arrow={EArrow.right}>Главная</Button></a>
                        </Link>
                        <Button className={scss.basketDisabledLink} type={ETypeButton.custom} isDisabled={true}>Корзина</Button>
                    </div>
                    <Title className={scss.title} isBig={true}>Корзина</Title>

                    {basket.basketProducts.length !== 0 ?
                        <div className={scss.mainButtons}>
                            <div className={scss.selectAllBtn}>
                                <MyCheckbox
                                    isChecked={checked}
                                    onChange={handleAllChecked}
                                >
                                    <Minus/>
                                </MyCheckbox>
                                <p className={scss.checkboxName}>Выделить всё</p>
                            </div>
                            <Button className={scss.deleteBtn} type={ETypeButton.custom} onClick={handleRemoveBtn}>Удалить выбранные</Button>
                        </div> : ''}

                    <div className={scss.content}>

                        <div className={scss.basketProducts}>
                            {basket.basketProducts.length === 0 && <div className={scss.emptyBasket}>Корзина пуста</div>}
                            {basket.basketProducts.map(product =>
                                <BasketProduct
                                               key={product.id}
                                               className={scss.basketProduct}
                                               product={product}
                                />)}
                        </div>

                        <div className={scss.menu}>

                            <div className={scss.cardAccumulation}>
                                <div className={scss.switcher}>
                                    <Switch/>
                                    <p className={scss.switcherText}>Списать 200 ₽</p>
                                </div>
                                <p className={scss.text}>На карте накоплено 200 ₽</p>
                            </div>

                            <div className={scss.overline}>
                                <div className={scss.displayFlex}>
                                    <p className={scss.text}>{basket.basketProducts.length} Товара</p>
                                    <p>{basket.calculateAllPrices()}  ₽</p>
                                </div>
                                <div className={scss.displayFlex}>
                                    <p className={scss.text}>Скидка</p>
                                    <p className={scss.discountProfit}>-{basket.showDiscount()}  ₽</p>
                                </div>
                            </div>

                            <div className={cn(scss.displayFlex, scss.overline)}>
                                <p className={scss.text}>Итог</p>
                                <p className={scss.totalPrice}>{basket.calculateFinalPrice()} ₽</p>
                            </div>

                            <div className={scss.minSumDiv}>
                                <div className={scss.minSum}>Минимальная сумма заказа 1000р</div>
                            </div>

                            <Button className={scss.checkout} type={ETypeButton.orange}>Оформить заказ</Button>

                        </div>
                    </div>

                </div>
            </main>
        </MainLayout>
    );
});

