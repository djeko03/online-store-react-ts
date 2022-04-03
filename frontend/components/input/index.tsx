import React from 'react';
import scss from './index.module.scss';
import { Button } from '../button';
import cn from 'classnames';

interface IProps {
  withLabel?: boolean;
  labelText?: string;
  labelClassName?: string;
  iconType?: EIconType;
  className?: string;
  iconImg?: string;
  placeholder?: string;
  type?: EType;
  value?: string;
  onChange?: (e:any) => void;
}

export enum EType {
  button = 'button',
  checkbox = 'checkbox',
  password = 'password',
  radio = 'radio',
  range = 'range',
  tel = 'tel',
  text = 'text',
  number = 'number',
}

export enum EIconType {
  left = 'left',
  right = 'right',
}


export const Input:React.FC<IProps> = ({
  withLabel = false,
  labelText = 'Label',
  labelClassName,
  iconType,
  className,
  iconImg = '/img/search.png',
  placeholder,
  type = EType.text,
  value = '',
  onChange,
}) => {
  return (
        <div>
            {withLabel ? <p className={labelClassName}>{labelText}</p> : ''}
            <div className={scss.inputDiv}>
                {iconType === EIconType.left && <Button className={scss.leftIcon}><img src={iconImg} alt=""/></Button>}
                <input className={cn(scss.input, className)} type={type} placeholder={placeholder} defaultValue={value} onChange={onChange}/>
                {iconType === EIconType.right && <Button className={scss.rightIcon}><img src={iconImg} alt=""/></Button>}
            </div>
        </div>
  );
};

