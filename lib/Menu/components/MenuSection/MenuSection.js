/**
 * MenuSection Section
 */

import React from 'react';
import PropTypes from 'prop-types';
import Headline from '../../../Headline';
import css from './MenuSection.css';

const MenuSection = ({ children, label }) => (
  <section className={css.menuSection}>
    { label && (
      <Headline
        size="small"
        margin="none"
        className={css.menuSection__headline}
        faded
      >
        {label}
      </Headline>
    )}
    <div className={css.menuSection__content}>
      {children}
    </div>
  </section>
);

MenuSection.propTypes = {
  children: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default MenuSection;
