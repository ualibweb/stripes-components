import React, { forwardRef } from 'react';
import Button from '../Button';

export default forwardRef((props, ref) => (
  <Button
    {...props}
    ref={ref}
  >
    test Label
  </Button>
));
