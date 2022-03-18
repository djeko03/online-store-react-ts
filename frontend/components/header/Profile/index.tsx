import React, { useState } from 'react';
// @ts-ignore
import scss from './index.module.scss';
import { MyImage, MyLayout } from '../../image';
import ProfileSvg from '../../../assets/icons/profile-arrow.svg';
import { Modal } from '../../modal';
import { Button, ETypeButton } from '../../button';
import { Input } from '../../input';
import BtnCrossSvg from '../../../assets/icons/button/button-cross.svg';
import { ModalRegistrationSignIn } from '../../modal-registration-sign';

export const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  return (
        <div className={scss.profile}>
            <div className={scss.ava}>
                <MyImage layout={MyLayout.intrinsic} width={40} height={40} src={'/img/avatar/avatar.jpg'}/>
            </div>
            <p className={scss.name}>Алексей</p>
            <a onClick={() => setShowModal(!showModal)} className={scss.link}>
                <ProfileSvg/>
            </a>
            <Modal show={showModal} setShow={setShowModal} >
                <ModalRegistrationSignIn onClick={() => setShowModal(!showModal)}/>
            </Modal>
        </div>
  );
};

