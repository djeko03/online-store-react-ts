import React from 'react';
import scss from './index.module.scss'
import { Button } from "../button";
import cn from 'classnames'

interface IInputProps {
    withLabel?: boolean;
    labelText?: string;
    labelClassName?: string;
    disabled?: boolean;
    icon?: EIconType;
    className?: string;
    iconImg?: string;
}
export enum EIconType {
    left = 'left',
    right = 'right',
}



export const Input:React.FC<IInputProps> = ({
    children,
    withLabel= false,
    labelText = 'Label',
    labelClassName,
    disabled= false,
    icon,
    className,
    iconImg= '/img/search.png',
}) => {
    return (
        <div>
            {withLabel? <p className={labelClassName}>{labelText}</p> : ''}
            <div className={scss.inputDiv}>
                {icon === EIconType.left && <Button className={scss.leftIcon}><img src={iconImg} alt=""/></Button>}
                <input className={cn(scss.input, className)} type="text" placeholder="Найти товар"/>
                {icon === EIconType.right && <Button className={scss.rightIcon}><img src={iconImg} alt=""/></Button>}
            </div>
        </div>
    );
};

