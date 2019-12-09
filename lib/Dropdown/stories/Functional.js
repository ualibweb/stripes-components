import React from 'react';
import Button from '../../Button';
import DropdownMenu from '../../DropdownMenu';
import Dropdown from '../Dropdown';

export default (props) => {
  const renderTrigger = ({ getTriggerProps }) => (
    <Button
      {...getTriggerProps()}
    >
      Test Dropdown
    </Button>
  );

  const renderMenu = ({ open }) => (
    <DropdownMenu open={open}>
      <Button>Test Dropdown Child</Button>
    </DropdownMenu>
  );

  return (
    <Dropdown
      renderTrigger={renderTrigger}
      renderMenu={renderMenu}
    />
  );
};
