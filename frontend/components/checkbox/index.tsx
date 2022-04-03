import React from 'react';
import cn from "classnames";
import scss from './index.module.scss';

interface IProps {
    onChange?: () => void
    className?: string;
    isChecked?: boolean;
}

export const MyCheckbox:React.FC<IProps> = ({
    children,
    onChange,
    isChecked = false,
    className,
    }) => {


    return (
        <label className={cn(className, scss.label, isChecked && scss.active)}>
            <div className={cn(scss.labelImg, isChecked && scss.active)}>
                {children}
            </div>
            <input onChange={onChange} className={scss.check} type="checkbox"/>
        </label>
    );
};

