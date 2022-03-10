import React from 'react';
import scss from './index.module.scss';
import { MyImage, MyLayout } from '../image';

export const SpecialOffers = () => {
  return (
        <div>
            <div className={scss.banners}>
                <div className={scss.orange}>
                    <div className={scss.content}>
                        <p className={scss.title}>Оформите карту «Северяночка»</p>
                        <p className={scss.text}>И получайте бонусы при покупке в магазинах и на сайте</p>
                    </div>
                    <MyImage layout={MyLayout.intrinsic} width={584} height={200} src={'/img/special-offers-img/orangeSection.jpg'}/>
                </div>
                <div className={scss.green}>
                    <div className={scss.content}>
                        <p className={scss.title}>Покупайте акционные товары</p>
                        <p className={scss.text}>И получайте вдвое больше бонусов</p>
                    </div>
                    <MyImage layout={MyLayout.intrinsic} width={584} height={200} src={'/img/special-offers-img/greenSection.jpg'}/>
                </div>
            </div>
        </div>
  );
};

