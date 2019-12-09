import React, { useRef } from 'react';
import Button from '../Button';
import Indirect from './Indirect';

export default () => {
  const item = useRef(null);

  const focusWarning = () => {
    item.current.focus();
  };

  return (
    <div>
      <Button>Default</Button>
      <Button buttonStyle="primary" onClick={focusWarning}>Primary</Button>
      <Button buttonStyle="danger">Danger</Button>
      <Button buttonStyle="success">Success</Button>
      <Indirect buttonStyle="warning" ref={item}>Warning</Indirect>
    </div>
  );
};
