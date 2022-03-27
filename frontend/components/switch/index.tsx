import React, {useRef, useState} from 'react';
import scss from './index.module.scss'
import cn from 'classnames'

export const Switch = () => {

    const [inputChecked, setInputChecked] = useState(false)


    return (
        <label className={scss.switch}>
            <input onClick={() => setInputChecked(!inputChecked)}
                   className={scss.input}
                   type='checkbox'
            />
            <span className={cn(scss.slider, inputChecked && scss.active)}/>
        </label>
    );
};

