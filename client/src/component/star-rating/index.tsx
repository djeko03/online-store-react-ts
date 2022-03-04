import React, { useState } from 'react';
import scss from './index.module.scss'

export const StarRating = () => {
    const [rating, setRating] = useState('0')

    return (
        <div className={scss.rating}>
            <div className={scss.items}>
                <input onChange={e => setRating(e.target.value)} id='rating__5' className={scss.item} value='5' name='rating' type="radio"/>
                <label  htmlFor="rating__5" className={scss.label}></label>
                <input onChange={e => setRating(e.target.value)} id='rating__4' className={scss.item} value='4' name='rating' type="radio"/>
                <label htmlFor="rating__4" className={scss.label}></label>
                <input onChange={e => setRating(e.target.value)} id='rating__3' className={scss.item} value='3' name='rating' type="radio"/>
                <label htmlFor="rating__3" className={scss.label}></label>
                <input onChange={e => setRating(e.target.value)} id='rating__2' className={scss.item} value='2' name='rating' type="radio"/>
                <label htmlFor="rating__2" className={scss.label}></label>
                <input onChange={e => setRating(e.target.value)} id='rating__1' className={scss.item} value='1' name='rating' type="radio"/>
                <label htmlFor="rating__1" className={scss.label}></label>
            </div>
            <p>{rating}</p>
        </div>
    );
};

