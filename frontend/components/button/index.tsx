import React, { useMemo } from 'react';
import scss from './index.module.scss';
import cn from 'classnames';
import BtnArrow from '../../assets/icons/button-arrow.svg';

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
  doubleRight = 'doubleRight',
}

export enum ETypeButton {
  orange = 'orange',
  green = 'green',
  gray = 'gray',
  red = 'red',
  custom = 'custom',
  mutedGreen = 'mutedGreen',
  decoratedOrange = 'decoratedOrange',
  decoratedGreen = 'decoratedGreen',
  decoratedGray = 'decoratedGray',
  decoratedRed = 'decoratedRed',
}

const buttonDefaultColorType = new Map<ETypeButton, string>([
  [ETypeButton.orange, scss.DefaultOrangeButton],
  [ETypeButton.green, scss.DefaultGreenButton],
  [ETypeButton.gray, scss.DefaultGrayButton],
  [ETypeButton.red, scss.DefaultRedButton],
  [ETypeButton.custom, scss.CustomButton],
  [ETypeButton.mutedGreen, scss.MutedGreen],
  [ETypeButton.decoratedOrange, scss.DecoratedOrangeButton],
  [ETypeButton.decoratedGreen, scss.DecoratedGreenButton],
  [ETypeButton.decoratedGray, scss.DecoratedGrayButton],
  [ETypeButton.decoratedRed, scss.DecoratedRedButton],
]);


export const Button: React.FC<IProps> = ({
  children,
  type = ETypeButton.green,
  onClick,
  isVisible = true,
  isDisabled = false,
  className,
  arrow,
}) => {

  const classButton = useMemo(() => buttonDefaultColorType.get(type), [type]);


  return (
        <button onClick={onClick} className={cn(className, scss.Button, classButton)}>
            {(arrow === EArrow.left || arrow === EArrow.doubleLeft) && <div>olol</div>}
            {arrow === EArrow.doubleRight && <div>DbRght</div>}
            {children}
            {arrow === EArrow.doubleLeft && <div>olol</div>}
            {(arrow === EArrow.right || arrow === EArrow.doubleRight) &&
                <div>
                    <BtnArrow/>
                </div>}
        </button>
  );
};

