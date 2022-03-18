import React from 'react';
import scss from './index.module.scss';
import { Navigation } from './Navigation';
import { Profile } from './Profile';
import { Button, ETypeButton } from '../button';
import { ELogoType, Logo } from '../logo';
import { EIconType, Input } from '../input';
import Link from 'next/link';

export const Header = () => {
  return (
        <section className={scss.header}>
            <div className={scss.content}>
                <Logo type={ELogoType.header}/>
                <div className={scss.search}>
                    <Link href='/catalog'>
                        <div>
                            <Button type={ETypeButton.green} className={scss.menu}><span></span>Каталог</Button>
                        </div>
                    </Link>
                    <Input placeholder='Найти товар' iconType={EIconType.right} className={scss.searchInput}/>
                </div>
                <Navigation/>
                <Profile/>
            </div>
        </section>
  );
};

