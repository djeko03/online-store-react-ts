import React, { useState } from 'react';
// @ts-ignore
import scss from './index.module.scss';
import { MyImage, MyLayout } from '../../image';
import ProfileSvg from '../../../assets/icons/profile-arrow.svg';
import { Modal } from '../../modal';
import { Button, ETypeButton } from '../../button';
import { Input } from '../../input';
import BtnCrossSvg from '../../../assets/icons/button-cross.svg';

export const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  return (
        <div className={scss.profile}>
            <div className={scss.ava}>
                <MyImage layout={MyLayout.intrinsic} width={40} height={40} src={'/img/avatar/avatar.jpg'}/>
            </div>
            <p>Алексей</p>
            <a onClick={() => setShowModal(!showModal)} className={scss.link}>
                <ProfileSvg/>
            </a>
            <Modal show={showModal} setShow={setShowModal} >
                <div className={scss.modal}>
                    <Button className={scss.close} type={ETypeButton.gray} onClick={() => setShowModal(!showModal)}><BtnCrossSvg/></Button>
                    <p className={scss.title}>Вход</p>
                    <Input className={scss.input} withLabel={true} labelClassName={scss.label} labelText='Телефон'/>
                    <Button className={scss.entrance} type={ETypeButton.orange}>Вход</Button>

                    <div className={scss.buttons}>
                        <Button className={scss.registration} type={ETypeButton.decoratedGreen}>Регистрация</Button>
                        <Button type={ETypeButton.custom}>Забыли пароль?</Button>
                    </div>
                </div>
            </Modal>
        </div>
  );
};

