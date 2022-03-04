import React from 'react';
import { Button, ETypeButton } from "../button";
import scss from './index.module.scss'
import { StarRating } from "../star-rating";
import {IProduct} from "../../interface/product.interface";

export interface IProps {
    isSale?: boolean;
    image?: string;
    onClick?(): void;
    discount?: number;
    ordinaryPrice?: number;
    cardPrice?: number;
    price?: number;
    description?: string;
    product: IProduct;
}

export const Product:React.FC<IProps> = ({
        isSale = false,
        image,
        discount,
        ordinaryPrice,
        cardPrice,
        price,
        description,
        onClick,
        product,
    }) => {

    return (
        <div className={scss.product}>
            <div className={scss.image}>
                <button className={scss.like}><img src="/img/Shape (Stroke).png" alt=""/></button>
                <img  src={product.image} alt=""/>
                {product.isSale? <div className={scss.discount}>-{product.discount}%</div>: ''}
            </div>

            <div className={scss.content}>
                {product.isSale? <div className={scss.stockPrice}>
                    <div>
                        <p className={scss.cardPrice}>{product.cardPrice} ₽</p>
                        <p className={scss.priceDescription}>С картой</p>
                    </div>
                    <div>
                        <p className={scss.ordinaryPrice}>{product.ordinaryPrice} ₽</p>
                        <p className={scss.priceDescription}>Обычная</p>
                    </div>
                </div>: <div className={scss.cardPrice}>{product.price} ₽</div>}

                <div className={scss.description}>{product.description}</div>

                <StarRating/>

                <div className={scss.buttonDiv}>
                    <Button className={scss.buttonComponent} type={ETypeButton.decoratedGreen}>В корзину</Button>
                </div>
            </div>
        </div>
    );
};

