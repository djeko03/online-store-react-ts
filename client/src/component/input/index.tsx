import React from 'react';
import scss from './index.module.scss'
import { Button } from "../button";
import cn from 'classnames'

interface IProps {
    withLabel?: boolean;
    labelText?: string;
    labelClassName?: string;
    disabled?: boolean;
    iconType?: EIconType;
    className?: string;
    iconImg?: string;
}
export enum EIconType {
    left = 'left',
    right = 'right',
}



export const Input:React.FC<IProps> = ({
    children,
    withLabel= false,
    labelText = 'Label',
    labelClassName,
    disabled= false,
    iconType,
    className,
    iconImg= '/img/search.png',
}) => {
    return (
        <div>
            {withLabel? <p className={labelClassName}>{labelText}</p> : ''}
            <div className={scss.inputDiv}>
                {iconType === EIconType.left && <Button className={scss.leftIcon}><img src={iconImg} alt=""/></Button>}
                <input className={cn(scss.input, className)} type="text" placeholder="Найти товар"/>
                {iconType === EIconType.right && <Button className={scss.rightIcon}><img src={iconImg} alt=""/></Button>}
            </div>
        </div>
    );
};

