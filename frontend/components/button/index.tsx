import React, { useMemo } from 'react';
import scss from './index.module.scss';
import cn from 'classnames';
import BtnArrowRight from '../../assets/icons/button/button-arrow-right.svg';
import BtnArrowLeft from '../../assets/icons/button/button-arrow-left.svg';
import BtnArrowDblRight from '../../assets/icons/button/button-arrow-double-right.svg';
import BtnArrowDblLeft from '../../assets/icons/button/button-arrow-double-left.svg';

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
        <button onClick={onClick} className={cn(className, scss.Button, classButton, [arrow && scss.Arrows])}>
            {arrow === EArrow.left && <div className={scss.arrowLeft}><BtnArrowLeft/></div>}
            {arrow === EArrow.doubleLeft && <div className={scss.arrowDblLeft}><BtnArrowDblLeft/></div>}
            {children}
            {arrow === EArrow.doubleRight && <div className={scss.arrowDblRight}><BtnArrowDblRight/></div>}
            {(arrow === EArrow.right) &&
                <div className={scss.arrowRight}>
                    <BtnArrowRight/>
                </div>}
        </button>
  );
};

