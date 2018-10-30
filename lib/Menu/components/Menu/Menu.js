/**
 * Menu
 */

import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../../Layout';

const Menu = ({ children }) => (
  <Layout className="padding-all-gutter">
    {children}
  </Layout>
);

Menu.propTypes = {
  children: PropTypes.node,
};

export default Menu;
