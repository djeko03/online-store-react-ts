import React from 'react';
import scss from './index.module.scss';
import cn from 'classnames';

interface IProps {
  active: boolean;
  setActive: (bool:boolean) => void;
}

export const Modal: React.FC <IProps> = ({ 
  active, 
  setActive,
  children,
}) => {

  return (
        <div className={cn(scss.modal, [active ? scss.active : ''])} onClick={()=> setActive(false)}>
            <div className={cn(scss.content, [active ? scss.active : ''])} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
  );
};

