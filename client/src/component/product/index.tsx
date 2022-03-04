import React from 'react';
import { Button, EColorType, ESizeType } from "../button";
import scss from './index.module.scss'
import { StarRating } from "../star-rating";

export interface IProps {
    isStock?: boolean;
    image?: string;
    onClick?(): void;
    discount?: number;
    ordinaryPrice?: number;
    cardPrice?: number;
    price?: number;
    description?: string;
}

export const Product:React.FC<IProps> = ({
        isStock = false,
        image,
        discount,
        ordinaryPrice,
        cardPrice,
        price,
        description,
        onClick,
    }) => {

    return (
        <div className={scss.product}>
            <div className={scss.image}>
                <button className={scss.like}><img src="/img/Shape (Stroke).png" alt=""/></button>
                <img  src={image} alt=""/>
                {isStock? <div className={scss.discount}>-{discount}%</div>: ''}
            </div>

            <div className={scss.content}>
                {isStock? <div className={scss.stockPrice}>
                    <div>
                        <p className={scss.cardPrice}>{cardPrice} ₽</p>
                        <p className={scss.priceDescription}>С картой</p>
                    </div>
                    <div>
                        <p className={scss.ordinaryPrice}>{ordinaryPrice} ₽</p>
                        <p className={scss.priceDescription}>Обычная</p>
                    </div>
                </div>: <div className={scss.cardPrice}>{price} ₽</div>}

                <div className={scss.description}>{description}</div>



                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Button size={ESizeType.mid} color={EColorType.decoratedGreen}>В корзину</Button>
                </div>
            </div>
        </div>
    );
};

