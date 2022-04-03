import React, {useRef, useState} from 'react';
import scss from './index.module.scss'
import cn from 'classnames'

export const Switch = () => {

    const [inputChecked, setInputChecked] = useState(false);

    const handleInputChecked = () => setInputChecked(!inputChecked);

    return (
        <label className={scss.switch}>
            <input onClick={handleInputChecked}
                   className={scss.input}
                   type='checkbox'
            />
            <span className={cn(scss.slider, inputChecked && scss.active)}/>
        </label>
    );
};

