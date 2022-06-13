import * as History from "history";
import {
  AriaAttributes,
  CSSProperties,
  ForwardRefExoticComponent,
  MouseEventHandler,
  PropsWithoutRef,
  ReactNode,
  RefAttributes,
} from "react";
import { AllOrNone, RequireOneOrNone } from "../../utils";
import { BadgeProps } from "../Badge/Badge";
import { IconType } from "../Icon/Icon";

export class Pane extends Component<{
  actionMenu?: Function;
  actionMenuAutoFocus?: boolean;
  appIcon?: ReactNode; // TODO: explicitly require an <AppIcon> once stripes-core specifies typings
  centerContent?: boolean;
  children?: ReactNode;
  defaultWidth: `${number}%` | "fill";
  dismissible?: boolean | "last";
  firstMenu?: ReactNode;
  fluidContentWidth?: boolean;
  footer?: ReactNode;
  height?: string;
  id?: string;
  lastMenu?: ReactNode;
  noOverflow?: boolean;
  onClose?: Function;
  onMount?: Function;
  padContent?: boolean;
  paneSub?: ReactNode;
  paneTitle?: ReactNode;
  paneTitleRef?: ReactNode;
  renderHeader?: Function;
  subheader?: ReactNode;
  tagName?: ElementType;
  transition?: string;
}> {}

export interface PaneProps extends AriaAttributes {
  /** Activates the action menu dropdown; function must return a node/component (probably a `<MenuSection>`) */
  actionMenu?: () => ReactNode;
}

// these are mutually exclusive (and can be entirely omitted, if needed)
export interface ButtonButtonLinkProps {
  /** Set the type of `<button>`.  Incompatible with `href` and `to` */
  type: JSX.IntrinsicElements["button"]["type"];
  /** Adds a link to the button, like a normal <a>.  Incompatible with `type` and `to`. */
  href: string;
  /**
   * Controls where the link should go, like for a `<Link>`.
   * This prop is incompatible with `type` and `href`.
   * @see https://github.com/remix-run/react-router/blob/f9c4a0e8ec022545b2679d381dc41652f1694804/docs/components/link.md
   */
  to: History.LocationDescriptor;
}

// badgeColor may not be specified without badgeCount
export interface ButtonBadgeProps {
  /**
   * Sets the badge color
   * @see badgeCount for the required content of the badge
   */
  badgeColor?: BadgeProps["color"];
  /** Adds a badge with the given contents */
  badgeCount: BadgeProps["children"];
}

export type ButtonProps = ButtonBaseProps &
  RequireOneOrNone<ButtonButtonLinkProps, "type" | "href" | "to"> &
  AllOrNone<ButtonBadgeProps>;

/**
 * Renders a given button
 * @example
 * <Button
 *   icon="comment"
 *   badgeCount="3"
 *   onClick={...}
 * />
 */
export const Button: ForwardRefExoticComponent<
  PropsWithoutRef<ButtonProps> &
    RefAttributes<HTMLAnchorElement | HTMLButtonElement>
>;
export default Button;
