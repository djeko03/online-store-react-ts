import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Portal } from '../portal';
import scss from './index.module.scss';


interface IProps {
  show: boolean;
  classname?: string;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
  closeClickAway?: boolean;
}

export const Modal: React.FC<IProps> = ({
  children,
  show,
  classname,
  setShow,
  closeClickAway = true,
}) => {

  const contentRef = useRef<any>(null);
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return ()=> document.body.style.overflow = 'visible';

  }, [show]);

  const handleClickContainer = (e: any)=> {
    if (!setShow || !closeClickAway){
      return;
    }
    // eslint-disable-next-line react/no-find-dom-node
    const domNode = ReactDOM.findDOMNode(contentRef.current);
    if (!domNode || !domNode.contains(e.target)) {
      setShow(false);
    }
  };

  if (!show) {
    return null;
  }

  return (
        <Portal>
                <div onClick={handleClickContainer} className={scss.container}>
                  <div ref={contentRef} className={classname}>
                    {children}
                  </div>
                </div>
        </Portal>
  );
};

