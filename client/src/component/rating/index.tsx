import React from 'react';
import scss from './index.module.scss'


export const Rating = () => {


    return (
        <div className={scss.rating}>
            <div className={scss.body}>
                <div className={scss.active}></div>
                <div className={scss.items}>
                    <input className={scss.item} value='1' name='rating' type="radio"/>
                    <input className={scss.item} value='2' name='rating' type="radio"/>
                    <input className={scss.item} value='3' name='rating' type="radio"/>
                    <input className={scss.item} value='4' name='rating' type="radio"/>
                    <input className={scss.item} value='5' name='rating' type="radio"/>
                </div>
            </div>
            <div className={scss.value}>3.6</div>
        </div>
    );
};

