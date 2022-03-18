import React from 'react';
import scss from './index.module.scss';
import { Button, ETypeButton } from '../button';
import BtnCrossSvg from '../../assets/icons/button-cross.svg';
import { Input } from '../input';

interface IProps {
  onClick?: () => void;
}

export const ModalRegistrationSignIn:React.FC<IProps> = ({
  onClick,
}) => {


  return (
      <div className={scss.modal}>
          <Button className={scss.close} type={ETypeButton.gray} onClick={onClick}><BtnCrossSvg/></Button>
          <p className={scss.title}>Вход</p>
          <Input className={scss.input} withLabel={true} labelClassName={scss.label} labelText='Телефон'/>
          <Button className={scss.entrance} type={ETypeButton.orange}>Вход</Button>

          <div className={scss.buttons}>
              <Button className={scss.registration} type={ETypeButton.decoratedGreen}>Регистрация</Button>
              <Button type={ETypeButton.custom}>Забыли пароль?</Button>
          </div>
      </div>
  );
};

