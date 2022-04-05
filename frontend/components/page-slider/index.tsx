import React, {useState} from 'react';
import scss from './index.module.scss'
import {Button, ETypeButton} from "../button";
import cn from 'classnames';
import {number} from "prop-types";

interface IProps {
    className?: string;
}

const PageSlider:React.FC<IProps> = ({
    className,
                             }) => {

    const pages:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]



    return (
        <div className={cn(className, scss.navigation)}>
            <div style={{width:'320px', display:'flex', overflow:'hidden'}}>
                <div style={{position:'relative', display:'flex'}}>
                    {pages.map(page => <Button key={page} type={ETypeButton.custom} className={scss.pages}>{page}</Button>)}
                </div>
            </div>
        </div>
    );
};

export default PageSlider;