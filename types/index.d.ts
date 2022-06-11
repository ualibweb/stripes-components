// lib/Accordion

// lib/AdvancedSearch

// lib/AutoSuggest

// lib/Avatar

// lib/Badge
export { default as Badge } from "./lib/Badge";

// lib/Button

// lib/ButtonGroup

// lib/Callout

// lib/Card

// lib/Checkbox

// lib/Commander

// lib/ConfirmationModal

// lib/ConflictDetectionBanner

// lib/CountrySelection

// lib/CurrencySelect

// lib/Datepicker

// lib/DateRangeWrapper

// lib/Dropdown

// lib/DropdownButton

// lib/DropdownMenu

// lib/Editor

// lib/EmptyMessage

// lib/ErrorBoundary

// lib/ErrorModal

// lib/ExportCsv

// lib/FilterControlGroup

// lib/FilterGroups

// lib/FilterPaneSearch

// lib/FocusLink

// lib/FormattedDate

// lib/FormattedTime

// lib/FormattedUTCDate

// lib/Headline
export { default as Headline } from "./lib/Headline";

// lib/Highlighter

// lib/HotKeys

// lib/Icon
export { default as Icon } from "./lib/Icon";

// lib/IconButton
export { default as IconButton } from "./lib/IconButton";

// lib/InfoPopover

// lib/KeyboardShortcutsModal

// lib/KeyValue

// lib/Label

// lib/Layer

// lib/Layout

// lib/LayoutBox

// lib/LayoutGrid

// lib/LayoutHeader

// lib/List

// lib/Loading

// lib/MenuItem

// lib/MenuSection

// lib/MessageBanner

// lib/MetaSection

// lib/Modal

// lib/ModalFooter

// lib/MultiColumnList

// lib/MultiSelection

// lib/NavList

// lib/NavListItem

// lib/NavListSection

// lib/NoValue

// lib/Pane

// lib/PaneBackLink

// lib/PaneCloseLink

// lib/PaneFooter

// lib/PaneHeader

// lib/PaneHeaderIconButton
export { default as PaneHeaderIconButton } from "./lib/PaneHeaderIconButton";

// lib/PaneMenu

// lib/Paneset

// lib/PaneSubheader

// lib/PasswordStrength

// lib/Popover

// lib/Popper

// lib/RadioButton

// lib/RadioButtonGroup

// lib/RepeatableField

// lib/SearchField

// lib/Select

// lib/Selection

// lib/Spinner

// lib/SRStatus

// lib/TextArea

// lib/TextField

// lib/TextLink

// lib/Timepicker

// lib/Tooltip

// hooks/useCurrencyOptions

// hooks/useFormatDate

// hooks/useFormatTime

// util/countries

// util/currencies

// util/dateTimeUtils

// util/getFocusableElements

// util/languages

// util/nativeChangeFieldValue

// util/omitProps

// util/RootCloseWrapper

import {
  Component,
  CSSProperties,
  ElementType,
  FunctionComponent,
  ReactNode,
} from "react";
import { FieldInputProps, FieldMetaState } from "react-final-form";

// either children or innerText must be provided
export const OptionSegment: FunctionComponent<
  {
    searchTerm?: string;
  } & ({ children: ReactNode } | { innerText: string })
>;
export class Loading extends Component<{}> {}
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

export class MultiSelection<OptionType = { label: string }> extends Component<{
  input: FieldInputProps<OptionType[], HTMLElement>;
  meta: FieldMetaState<OptionType[]>;

  actions?: { onSelect: Function }[];
  ariaLabelledBy?: string;
  asyncFiltering?: boolean;
  autoFocus?: boolean;
  backspaceDeletes?: boolean;
  dataOptions?: OptionType[];
  dirty?: boolean;
  disabled?: boolean;
  emptyMessage?: string;
  error?: ReactNode;
  filter?: (
    filterText: string | undefined,
    list: OptionType[]
  ) => { renderedItems: OptionType[]; exactMatch?: boolean };
  formatter?: (option: OptionType, searchTerm: string | undefined) => ReactNode;
  id?: string;
  isValid?: boolean;
  itemToString?: (option: OptionType) => string;
  label?: ReactNode;
  maxHeight?: number;
  modifiers?: object;
  onBlur?: Function;
  onChange?: Function;
  onRemove?: Function;
  placeholder?: string;
  renderToOverlay?: boolean;
  required?: boolean;
  validationEnabled?: boolean;
  value?: OptionType[];
  valueFormatter?: (option: OptionType) => ReactNode;
  warning?: ReactNode;
}> {}
