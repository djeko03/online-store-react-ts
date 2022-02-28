import React from 'react';
// @ts-ignore
import css from './Catalog.module.css'

const CatalogBtn = () => {
    return (
        <div className={css.catalog}>
            <button className={css.menu}><span></span></button>
            <p>Каталог</p>
        </div>
    );
};

export default CatalogBtn;