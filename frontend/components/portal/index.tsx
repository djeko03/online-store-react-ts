import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

export const Portal: React.FC = ({ children }) => {
  const [mount, setMount] = useState(false);
  const container = useRef<any>();

  useEffect(() => {
    container.current = document.createElement('div');
    setMount(true);
    document.body.appendChild(container.current);
    return () => {
      setMount(false);
      document.body.removeChild(container.current);
    };
  }, []);

  return mount ? ReactDOM.createPortal(children, container.current) : null;
};

