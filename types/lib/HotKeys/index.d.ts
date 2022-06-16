import { ComponentType, KeyboardEvent, KeyboardEventHandler } from 'react';

export interface HotKeysBaseProps {
  /** An object with keys mapping custom key names to an array of real keys */
  keyMap?: Record<string, KeyboardEvent['key'][]>;
  /** An object mapping either custom key names {@link keyMap} or real key names to event handlers */
  handlers: Record<string | KeyboardEvent['key'], KeyboardEventHandler>;
}

export type HotKeysWrapperProps =
  | {
      noWrapper?: false | undefined | never;
      component: ComponentType;
    }
  | {
      noWrapper: true;
      component?: never;
    };

export type HotKeysProps = HotKeysBaseProps & HotKeysWrapperProps;
