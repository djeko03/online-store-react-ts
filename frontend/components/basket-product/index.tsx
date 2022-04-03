import React from 'react';
import scss from './index.module.scss';
import cn from 'classnames';
import {MyImage, MyLayout} from "../image";
import {Button, ETypeButton} from "../button";
import Minus from '../../assets/icons/counter/counter-minus.svg'
import Plus from '../../assets/icons/counter/counter-plus.svg'
import Checked from '../../assets/icons/basket-product-checked.svg'
import {MyCheckbox} from "../checkbox";
import basket from "../../store/basket";
import {BasketProductInterface} from "../../interface/basket-product.interface";
import {observer} from "mobx-react-lite";


interface IProps {
    className?: string;
    product: BasketProductInterface;
}

export const BasketProduct:React.FC<IProps> = observer(({
    className,
    product,
                                        }) => {

    const handleIsChecked = () => basket.changeChecked(product)

    const handleDecrement = () => basket.countDecrement(product)
    const handleIncrement = () => basket.countIncrement(product)


    return (
        <div className={cn(scss.product, className)}>
            <div className={scss.leftBox}>
                <MyCheckbox className={scss.checkbox} isChecked={product.isChecked} onChange={handleIsChecked}>
                    <Checked/>
                </MyCheckbox>
                <div className={scss.image}>
                    <MyImage layout={MyLayout.fixed} width={80} height={60} className={scss.img} src={product.image}/>
                </div>

                <div style={{marginLeft:'8px'}}>
                    <div className={scss.description}>
                        {product.description}
                    </div>
                        {product.isSale ?
                            <div className={scss.prices}>
                                <div>
                                    <p className={scss.cardPrice}>{product.cardPrice}₽</p>
                                    <p className={scss.priceDescription}>С картой</p>
                                </div>
                                <div className={scss.ordinaryPriceDiv}>
                                    <p className={scss.ordinaryPrice}>{product.ordinaryPrice}₽</p>
                                    <p className={scss.priceDescription}>Обычная</p>
                                </div>
                                <p className={scss.piece}>за шт.</p>
                                <div className={scss.discount}>-{product.discount}%</div>
                            </div>
                            : <div className={scss.cardPrice}>{product.price}₽</div>
                        }
                </div>
            </div>

            <div className={scss.rightBox}>
                <div className={scss.counter}>
                    <Button type={ETypeButton.custom} onClick={handleDecrement}><Minus/></Button>
                    <p className={scss.count}>{product.count}</p>
                    <Button type={ETypeButton.custom} onClick={handleIncrement}><Plus/></Button>
                </div>
                {product.isSale ?
                    <div className={scss.finalPrices}>
                        <p className={scss.finalPrice}>{(Number(product.cardPrice) + Number.EPSILON) * product.count} ₽</p>
                        <p className={scss.finalOldPrice}>{(Number(product.ordinaryPrice) + Number.EPSILON) * product.count} ₽</p>
                    </div> :
                    <p className={scss.finalPrice}>{(Number(product.price) + Number.EPSILON).toFixed(1) * product.count} ₽</p>
                }
            </div>
        </div>
    );
});

