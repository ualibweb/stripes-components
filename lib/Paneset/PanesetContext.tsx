import React, { ComponentType } from 'react';

export const PanesetContext = React.createContext<any>({});

export interface WithPanesetProps {
  paneset?: any;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export function withPaneset<Props extends WithPanesetProps>(WrappedComponent: ComponentType<Props>) {
  const WithPaneset = (props: Omit<Props, keyof WithPanesetProps>, ref) => {
    return (
      <PanesetContext.Consumer>
        {(paneset) => <WrappedComponent {...(props as Props)} paneset={paneset} ref={ref} />}
      </PanesetContext.Consumer>
    );
  };

  WithPaneset.displayName = `WithPaneset(${getDisplayName(WrappedComponent)})`;

  return React.forwardRef(WithPaneset);
}
