import React from 'react';
// @ts-ignore
import scss from './index.module.scss'

export const Profile = () => {
    return (
        <div className={scss.profile}>
            <img className={scss.ava} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJqgSJIAK87KxtYzWQm7NhvLGnLe7v9VFEA&usqp=CAU" alt=""/>
            <p>Алексей</p>
            <a className={scss.link}>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7 6.29289L12.6464 0.646447C12.8417 0.451184 13.1583 0.451184 13.3536 0.646447C13.5488 0.841709 13.5488 1.15829 13.3536 1.35355L7.35355 7.35355C7.15829 7.54882 6.84171 7.54882 6.64645 7.35355L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#414141"/>
                </svg>

            </a>
        </div>
    );
};
