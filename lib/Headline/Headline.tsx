/**
 * Component: Headline
 */

import React, { forwardRef } from 'react';
import { deprecated } from 'prop-types-extra';
import classNames from 'classnames';
import PropTypes, { InferProps } from 'prop-types';
import css from './Headline.css';

const propTypes = {
  /** If the headline should have display: block */
  block: PropTypes.bool,
  /**
   * Makes the headline bold
   * @deprecated use the weight prop instead
   */
  bold: deprecated(PropTypes.bool, `Use the "weight"-prop for setting font-weight instead. 
  Options: regular, medium, bold & black`),
  /** Sets the label of the headline */
  children: PropTypes.node,
  /** Adds additional classes to the element */
  className: PropTypes.string,
  /** Adds a faded style (gray color) */
  faded: PropTypes.bool,
  /** If the headline should have display: flex */
  flex: PropTypes.bool,
  /** Controls the bottom margin of the headline, corresponds to the size prop */
  margin: PropTypes.oneOf([
    'xx-small',
    'x-small',
    'small',
    'medium',
    'large',
    'x-large',
    'xx-large',
    'none',
    ''
  ]),
  /** The size of the headline */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'x-large', 'xx-large']),
  /** The tag to render the headline as */
  tag: PropTypes.elementType,
  /** Control the font-weight of the headline */
  weight: PropTypes.oneOf(['regular', 'medium', 'bold', 'black']),
};

export type HeadlineProps = InferProps<typeof propTypes>;

const Headline = forwardRef((
  { bold, size, margin, tag: Element, faded, flex, block, children, className, weight, ...rest }: HeadlineProps,
  ref
) => {
  const classes = classNames(
    // Base styling
    css.headline,
    // Size
    css[`size-${size}`],
    // Margin
    css[`margin-${margin || size}`],
    // Faded
    { [css.isFaded]: faded },
    // Fallback for deprecated "bold"-prop
    { [css['font-weight-regular']]: bold === false },
    { [css['font-weight-bold']]: bold === true },
    // Define font-weight
    { [css[`font-weight-${weight}`]]: weight && typeof bold === 'undefined' },
    // Display: flex
    { [css.flex]: flex },
    // Display: block
    { [css.block]: block },
    // Customize with className
    className,
  );

  return (
    <Element
      {...rest}
      ref={ref}
      className={classes}
      data-test-headline
    >
      {children}
    </Element>
  );
});

Headline.defaultProps = {
  faded: false,
  weight: 'bold',
  margin: '', // If nothing is set it will default to the value of size
  size: 'medium',
  tag: 'div',
};

Headline.propTypes = propTypes;

Headline.displayName = 'Headline';

export default Headline;
