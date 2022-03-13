import React from 'react';
import scss from './index.module.scss';
import { ELogoType, Logo } from '../logo';
import Inst from '../../assets/icons/footer/footer-instagram.svg';
import Vk from '../../assets/icons/footer/footer-vk.svg';
import Facee from '../../assets/icons/footer/footer-facebook.svg';
import Odnokl from '../../assets/icons/footer/footer-odnoklassniki.svg';
import Phone from '../../assets/icons/footer/footer-phone.svg';


export const Footer = () => {
  return (
        <section className={scss.footer}>
            <div className={scss.container}>
                <div className={scss.links}>
                    <Logo type={ELogoType.footer}/>
                    <a href="">О компании</a>
                    <a href="">Контакты</a>
                    <a href="">Вакансии</a>
                    <a href="">Статьи</a>
                    <a href="">Политика обработки персональных данных</a>
                </div>
                <div className={scss.contacts}>
                    <div className={scss.social}>
                        <a href="https://www.instagram.com" target='_blank' rel="noreferrer">
                            <Inst/>
                        </a>

                        <a href='https://vk.com' target='_blank' rel="noreferrer">
                            <Vk/>
                        </a>

                        <a href="https://m.facebook.com" target='_blank' rel="noreferrer">
                            <Facee/>
                        </a>

                        <a href="https://ok.ru" target='_blank' rel="noreferrer">
                            <Odnokl/>
                        </a>

                    </div>
                    <div className={scss.phone}>
                        <div>
                            <Phone/>
                        </div>
                        <div style={{ marginLeft:'10px' }}>
                            8 800 777 33 33
                        </div>
                    </div>
                </div>
            </div>
            <img style={{ backgroundColor:'#F9F4E2' }} src="/img/bg.png" alt=""/>

        </section>
  );
};
