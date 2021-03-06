import React from 'react';
import Inst from '../../assets/icons/footer/footer-instagram.svg';
import Vk from '../../assets/icons/footer/footer-vk.svg';
import Facee from '../../assets/icons/footer/footer-facebook.svg';
import Odnokl from '../../assets/icons/footer/footer-odnoklassniki.svg';
import Phone from '../../assets/icons/footer/footer-phone.svg';
import scss from './index.module.scss';
import { ELogoType, Logo } from '../logo';
import { MyImage } from '../image';

export const Footer = () => {
  return (
        <section className={scss.footer}>
            <div className={scss.container}>
                <Logo type={ELogoType.footer}/>
                <div className={scss.links}>
                    <a className={scss.link} href="">О компании</a>
                    <a className={scss.link} href="">Контакты</a>
                    <a className={scss.link} href="">Вакансии</a>
                    <a className={scss.link} href="">Статьи</a>
                    <a className={scss.link} href="">Политика обработки персональных данных</a>
                </div>
                <div className={scss.contacts}>
                    <div>
                        <a className={scss.social} href="https://www.instagram.com" target='_blank' rel="noreferrer">
                            <Inst/>
                        </a>

                        <a className={scss.social} href='https://vk.com' target='_blank' rel="noreferrer">
                            <Vk/>
                        </a>

                        <a className={scss.social} href="https://m.facebook.com" target='_blank' rel="noreferrer">
                            <Facee/>
                        </a>

                        <a className={scss.social} href="https://ok.ru" target='_blank' rel="noreferrer">
                            <Odnokl/>
                        </a>
                    </div>
                    <div className={scss.phone}>
                        <div>
                            <Phone/>
                        </div>
                        <div className={scss.number}>
                            8 800 777 33 33
                        </div>
                    </div>
                </div>
            </div>
            <MyImage className={scss.img}  src='/img/bg.png'/>

        </section>
  );
};
