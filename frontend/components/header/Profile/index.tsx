import React from 'react';
// @ts-ignore
import scss from './index.module.scss';
import { MyImage, MyLayout } from '../../image';
import ProfileSvg from '../../../assets/icons/profile-arrow.svg';

export const Profile = () => {
  return (
        <div className={scss.profile}>
            <div className={scss.ava}>
                <MyImage layout={MyLayout.intrinsic} width={40} height={40} src={'/img/avatar/avatar.jpg'}/>
            </div>
            <p>Алексей</p>
            <a className={scss.link}>
                <ProfileSvg/>
            </a>
        </div>
  );
};

