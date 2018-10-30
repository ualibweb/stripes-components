/**
 * Menu -> Basic Usage Example
 */

import React from 'react';
import { Dropdown } from '../../Dropdown';
import DropdownMenu from '../../DropdownMenu';
import Button from '../../Button';

import { Menu, MenuSection } from '../index';
import Checkbox from '../../Checkbox';
import RadioButton from '../../RadioButton';
import NavList from '../../NavList';
import NavListItem from '../../NavListItem';
import Icon from '../../Icon';


export const MyCustomMenu = () => (
  <Menu>
    <MenuSection label="Layout">
      <RadioButton label="Automatic layout" />
      <RadioButton label="Always use table layout" />
      <RadioButton label="Always use cards layout" />
    </MenuSection>
    <MenuSection label="Toggle columns">
      <Checkbox label="Active" />
      <Checkbox label="Name" />
      <Checkbox label="Barcode" />
      <Checkbox label="Patron Group" />
      <Checkbox label="Username" />
      <Checkbox label="Email" />
    </MenuSection>
    <MenuSection label="Actions">
      <NavList>
        <NavListItem>
          <Icon size="small" icon="trashBin">Delete</Icon>
        </NavListItem>
        <NavListItem>
          <Icon size="small" icon="duplicate">Duplicate</Icon>
        </NavListItem>
        <NavListItem>
          <Icon size="small" icon="bookmark">Add bookmark</Icon>
        </NavListItem>
        <NavListItem>
          <Icon size="small" icon="archive">Archive</Icon>
        </NavListItem>
      </NavList>
    </MenuSection>
  </Menu>
);

const BasicUsage = () => (
  <div style={{ maxWidth: 300 }}>
    <MyCustomMenu />
  </div>
);

export default BasicUsage;
