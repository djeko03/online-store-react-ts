import React, { useMemo } from 'react';
import scss from './index.module.scss'
import cn from 'classnames'

interface IProps {
    onClick(): void;
    type?: EButtonType;
    isVisible?: boolean;
    isDisabled?: boolean;
    className?: string;
    size?: ESizeType;
}
export enum EButtonType {
    primary='primary',
    secondary='secondary',
    lightest='lightest',
    error='error'
}
export enum ESizeType {
    big='big',
    mid='mid',
    small='small',
}

const buttonStyleType = new Map<EButtonType, string>([
    [EButtonType.primary, scss.PrimaryButton],
    [EButtonType.secondary, scss.SecondaryButton],
    [EButtonType.lightest, scss.LightestButton],
    [EButtonType.error, scss.ErrorButton],
])

const buttonSize = new Map([
    [ESizeType.big, scss.BigButton],
    [ESizeType.mid, scss.MidButton],
    [ESizeType.small, scss.SmallButton],
])

export const Button: React.FC<IProps> = ({
    children,
    type = EButtonType.lightest,
    onClick,
    isVisible = true,
    isDisabled = false,
    className,
    size= ESizeType.big,
    }) => {

    const classButton = useMemo(() => cn(buttonStyleType.get(type), buttonSize.get(size)), [type, size])

    return (
        <button onClick={onClick} className={cn(className, scss.Button, classButton, buttonSize)}>{children}</button>
    );
};

