import React, { useState } from 'react';
import { Title } from "../title";
import { Button, ETypeButton } from "../button";
import scss from './index.module.scss'

export const MyMap = () => {

    const [src, setSrc] = useState<string>("https://yandex.ru/map-widget/v1/?um=constructor%3Ad4339f94527eba5eabdeb7fe08ae0ea71b4018024b14b5c76d3cc55ca56bd280&amp;source=constructor")

    return (
        <div>
            <Title>Наши магазины</Title>
            <div className={scss.buttons}>
                <Button className={scss.button} onClick={() => setSrc("https://yandex.ru/map-widget/v1/?um=constructor%3A9f08df1cc3fe16c7cd5d8c15e596a3946eca808fd8c9607cef1ceafa1f11cada&amp;source=constructor")} type={ETypeButton.gray}>м. Московские ворота</Button>
                <Button className={scss.button} onClick={() => setSrc("https://yandex.ru/map-widget/v1/?um=constructor%3A68eb482a58e6f12f14560cf5db4d9e55148857d359ff24a38f86649dbc33a200&amp;source=constructor")} type={ETypeButton.gray}>м. Электросила</Button>
                <Button className={scss.button} onClick={() => setSrc("https://yandex.ru/map-widget/v1/?um=constructor%3A121714fca8d726029aea1a14febc8c15e625df815f3a8cea886c5e3f9c36414c&amp;source=constructor")} type={ETypeButton.gray}>м. Парк Победы</Button>
            </div>
            <div className={scss.maps}>
                <iframe className={scss.map}
                    src={src}
                    width="1208" height="354" frameBorder="0">
                </iframe>
            </div>
        </div>
    );
};
