import React from 'react';
// @ts-ignore
import scss from './index.module.scss';
import ProfileSvg from '../../../assets/icons/profile-arrow.svg';

export const Profile = () => {
  return (
        <div className={scss.profile}>
            <img className={scss.ava} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJqgSJIAK87KxtYzWQm7NhvLGnLe7v9VFEA&usqp=CAU" alt=""/>
            <p>Алексей</p>
            <a className={scss.link}>
                <ProfileSvg/>
            </a>
        </div>
  );
};

