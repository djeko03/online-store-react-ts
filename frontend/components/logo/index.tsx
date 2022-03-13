import React from 'react';
import HeaderLogo from '../../assets/icons/header-logo.svg';
import FooterLogo from '../../assets/icons/footer-logo.svg';


interface IProps {
  type?: ELogoType;
}

export enum ELogoType {
  header = 'header',
  footer = 'footer',
}

export const Logo: React.FC<IProps> = ({ type = ELogoType.footer }) => {

  if (type === ELogoType.header) {
    return (
        <HeaderLogo/>
    );
  }
  return (
        <FooterLogo/>
  );
};
