import React from 'react';
// @ts-ignore
import css from './SearchInput.module.css'
import { Button } from "../../button";

const SearchInput = () => {
    return (
        <div >
            <input className={css.input} type="text" placeholder="Найти товар"/>
            <Button>
                <img src="" alt=""/>
            </Button>
        </div>
    );
};

export default SearchInput;