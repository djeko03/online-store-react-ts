import React from 'react';
// @ts-ignore
import css from './SearchInput.module.css'

const SearchInput = () => {
    return (
        <div >
            <input className={css.input} type="text" placeholder="Найти товар"/>
        </div>
    );
};

export default SearchInput;