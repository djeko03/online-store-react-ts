import React from 'react';
import scss from './index.module.scss';
import cn from 'classnames';

interface IProps {
  className?: string;
}

export const Title:React.FC<IProps> = ({ children, className }) => {
  return (
        <p className={cn(scss.title, className)}>
            {children}
        </p>
  );
};

