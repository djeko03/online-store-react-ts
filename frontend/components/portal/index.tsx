import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export const Portal: React.FC = ({ children }) => {
  const [mount, setMount] = useState(false);
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    setMount(true);
    document.body.appendChild(container);
    return () => {
      setMount(false);
      document.body.removeChild(container);
    };
  }, []);

  return mount ? ReactDOM.createPortal(children, container) : null;
};

