/**
 * Pane: Basic Usage
 */
import React from 'react';
import { action } from '@storybook/addon-actions';
import Paneset from '../../Paneset';
import PaneMenu from '../../PaneMenu';
import Pane from '../Pane';
import IconButton from '../../IconButton';
import { MyCustomMenu } from '../../Menu/stories/BasicUsage';

const firstMenu = (
  <PaneMenu>
    <IconButton key="icon-search" icon="search" />
  </PaneMenu>
);

const lastMenu = (
  <PaneMenu>
    <IconButton key="icon-comment" icon="comment" />
    <IconButton key="icon-edit" icon="edit" />
  </PaneMenu>
);

/**
 * Action Menu items as array of objects
 */
const actionMenuItems = [
  {
    label: 'Edit',
    onClick: () => {
      action('click!');
    },
  },
  {
    label: 'Bookmark',
    href: '#hello',
  },
  {
    label: 'Export',
    href: '#export',
  },
];

/**
 * Custom action menu
 */

const customActionMenu = ({ toggleMenu }) => <MyCustomMenu onToggleMenu={toggleMenu} />; /* eslint-disable-line */

const PaneHeaderExample = () => (
  <div style={{ margin: '-1rem' }}>
    <Paneset>
      <Pane actionMenuItems={actionMenuItems} defaultWidth="20%" paneTitle="Filters" dismissible onClose={() => {}}>
        Some content..
      </Pane>
      <Pane
        actionMenuItems={customActionMenu}
        firstMenu={firstMenu}
        lastMenu={lastMenu}
        defaultWidth="fill"
        paneTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        paneSub="121 results found"
        onClose={() => {}}
      >
        Some content..
      </Pane>
    </Paneset>
  </div>
);

export default PaneHeaderExample;
