import React from 'react';
import scss from './index.module.scss';
import cn from 'classnames';

interface IProps {
  className?: string;
  isBig?: boolean;
}

export const Title:React.FC<IProps> = ({ 
  children,
  className,
  isBig = false,
}) => {
  return (
        <p className={cn(scss.title, className, [isBig && scss.Big])}>
            {children}
        </p>
  );
};

