import React, { useState } from 'react';
import scss from './index.module.scss'


export const Rating = () => {

    const [rating, setRating] = useState<string>('0')

    return (
        <div className={scss.rating}>
            <div className={scss.body}>
                <div className={scss.active}></div>
                <div className={scss.items}>
                    <input onChange={e => setRating(e.target.value)} className={scss.item} value='1' name='rating' type="radio"/>
                    <input onChange={e => setRating(e.target.value)} className={scss.item} value='2' name='rating' type="radio"/>
                    <input onChange={e => setRating(e.target.value)} className={scss.item} value='3' name='rating' type="radio"/>
                    <input onChange={e => setRating(e.target.value)} className={scss.item} value='4' name='rating' type="radio"/>
                    <input onChange={e => setRating(e.target.value)} className={scss.item} value='5' name='rating' type="radio"/>
                </div>
            </div>
            <div className={scss.value}>{rating}</div>
        </div>
    );
};

