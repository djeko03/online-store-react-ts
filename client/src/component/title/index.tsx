import React from 'react';
import scss from './index.module.scss'

export const Title:React.FC = ({children}) => {
    return (
        <p className={scss.title}>
            {children}
        </p>
    );
};

