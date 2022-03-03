import React, { useMemo } from 'react';
import scss from './index.module.scss'
import cn from 'classnames'

interface IProps {
    onClick?(): void;
    type?: ETypeButton;
    isVisible?: boolean;
    isDisabled?: boolean;
    className?: string;
    arrow?: EArrow;
}

export enum EArrow {
    left = 'left',
    right = 'right',
    doubleLeft = 'doubleLeft',
    doubleRight = 'doubleRight'
}

export enum ETypeButton {
    orange='orange',
    green='green',
    gray='gray',
    red='red',
    custom='custom',
    decoratedOrange='decoratedOrange',
    decoratedGreen='decoratedGreen',
    decoratedGray='decoratedGray',
    decoratedRed='decoratedRed'
}

const buttonDefaultColorType = new Map<ETypeButton, string>([
    [ETypeButton.orange, scss.DefaultOrangeButton],
    [ETypeButton.green, scss.DefaultGreenButton],
    [ETypeButton.gray, scss.DefaultGrayButton],
    [ETypeButton.red, scss.DefaultRedButton],
    [ETypeButton.custom, scss.CustomButton],
    [ETypeButton.decoratedOrange, scss.DecoratedOrangeButton],
    [ETypeButton.decoratedGreen, scss.DecoratedGreenButton],
    [ETypeButton.decoratedGray, scss.DecoratedGrayButton],
    [ETypeButton.decoratedRed, scss.DecoratedRedButton],
])


export const Button: React.FC<IProps> = ({
    children,
    type = ETypeButton.green,
    onClick,
    isVisible = true,
    isDisabled = false,
    className,
    arrow,
    }) => {

    const classButton = useMemo(() => buttonDefaultColorType.get(type), [type])


    return (
        <button onClick={onClick} className={cn(className, scss.Button, classButton)}>
            {(arrow === EArrow.left || arrow === EArrow.doubleLeft) && <div>olol</div>}
            {arrow === EArrow.doubleRight && <div>DbRght</div>}
            {children}
            {arrow === EArrow.doubleLeft && <div>olol</div>}
            {(arrow === EArrow.right || arrow === EArrow.doubleRight) &&
                <div>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355L1.35355 13.3536C1.15829 13.5488 0.841709 13.5488 0.646447 13.3536C0.451184 13.1583 0.451184 12.8417 0.646447 12.6464L6.29289 7L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#606060"/>
                    </svg>
                </div>}
        </button>
    );
};
