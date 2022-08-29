// make TS understand CSS module imports
declare module '*.css' {
  const styles: { [className: string]: string };
  export = styles;
}

declare module 'prop-types-extra' {
  import PropTypes from 'prop-types';

  export function deprecated<T>(propType: T, warning: string): T;

  export const elementType: typeof PropTypes.elementType;
}
