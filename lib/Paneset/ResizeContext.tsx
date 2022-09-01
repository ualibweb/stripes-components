import React, { ComponentType, createContext } from 'react';

export const { Provider: ResizeProvider, Consumer: ResizeConsumer } = createContext<any>({});

export interface WithResizeProps {
  resizer?: any;
}

export function withResize<Props extends WithResizeProps>(Component: ComponentType<Props>) {
  const WrappedComponent = (props: Omit<Props, keyof WithResizeProps>) => (
    <ResizeConsumer>{(resizer) => <Component resizer={resizer} {...(props as Props)} />}</ResizeConsumer>
  );

  return WrappedComponent;
}
