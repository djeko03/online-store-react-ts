import React, {useState} from 'react';
import {Button, ETypeButton} from "../button";
import scss from './index.module.scss'
import {EType, Input} from "../input";
import {Switch} from "../switch";


export const Filter:React.FC = ({children}) => {
    const [minPrice, setMinPrice] = useState('1')
    const [maxPrice, setMaxPrice] = useState('100')

    return (
        <div className={scss.container}>
            <div className={scss.filterDiv}>
                <div className={scss.filterBtn}>
                    <p>Фильтр</p>
                </div>
                <div className={scss.price}>
                    <p>Цена</p>
                    <Button className={scss.clearBtn} type={ETypeButton.gray}>Очистить</Button>
                </div>
                <div className={scss.inputs}>
                    <Input className={scss.input} type={EType.number} value={minPrice} onChange={e => setMinPrice(e.target.value)}/>
                    <div className={scss.separator}>-</div>
                    <Input className={scss.input} type={EType.number} value={maxPrice} onChange={e => setMaxPrice(e.target.value)}/>
                </div>
                <div className={scss.filters}>
                    <Button type={ETypeButton.custom} className={scss.type}>Молоко</Button>
                    <Button type={ETypeButton.custom} className={scss.type}>Сливки</Button>
                    <Button type={ETypeButton.custom} className={scss.type}>Яйцо</Button>
                    <div className={scss.switch}>
                        <Switch/>
                        <p className={scss.switchName}>В наличии</p>
                    </div>
                    <Button className={scss.apply} type={ETypeButton.decoratedGreen}>Применить</Button>
                </div>
            </div>
            <div>
                <div>
                    <Button className={scss.filter} type={ETypeButton.gray}>Фильтр 4</Button>
                    <Button className={scss.filter} type={ETypeButton.gray}>Цена от {minPrice} до {maxPrice}</Button>
                    <Button className={scss.filter} type={ETypeButton.gray}>Очистить фильтры</Button>
                    {children}
                </div>
            </div>
        </div>
    );
};
