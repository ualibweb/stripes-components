import {
  Component,
  CSSProperties,
  ReactNode,
  RefObject,
  UIEventHandler,
} from 'react';
import { AllOrNone, RequireOneOrNone } from '../../utils';
import { HotKeysProps } from '../HotKeys';

export type DataFieldType = keyof object;
export type ColumnWidth =
  | CSSProperties['width']
  | {
      min: number;
      max?: number;
    };
export interface PositionObject {
  /** Number of pixels from the top of the screen to add above the item being scrolled to */
  localClientTop: number;
  /** Selector to match the row, likely something like `[aria-rowindex="${rowIndex}"]` */
  selector: string;
}

export type PagingType = 'click' | 'none' | 'prev-next' | 'scroll';

export interface MultiColumnListBaseProps<DataShape> {
  /**
   * Adds a prefix to column header IDs (otherwise MCLs with conflicting column
   * header names in the same view could cause issues)
   */
  columnIdPrefix?: string;
  /** Maps data fields to labels for column headers */
  columnMapping?: Record<keyof DataShape, ReactNode>;
  /** If a column should show overflow */
  columnOverflow?: Record<keyof DataShape, boolean>;
  /** Set widths for columns, either as direct widths or min/max pixels */
  columnWidths?: Record<keyof DataShape, ColumnWidth>;
  /** A ref to the MCL's container */
  containerRef?: RefObject<HTMLDivElement>;
  /** The list's data */
  contentData: DataShape[];
  /** Custom functions that render the nodes for each column */
  formatter?: Record<keyof DataShape, (item: DataShape) => ReactNode>;
  /** Replaces the default classes with the result of this function */
  getCellClass?: (
    defaultClasses: string,
    rowData: DataShape,
    header: keyof DataShape
  ) => string;
  /** Adds additional classes to the default header's classes */
  getHeaderCellClass?: (columnName: keyof DataShape) => string;
  /** Replaces the default row container classes with the result of this function */
  getRowContainerClass?: (defaultClasses: string) => string;
  /** Adds horizontal margin to the rows and header */
  hasMargin?: boolean;
  /**
   * unknown, see
   * https://folio-project.slack.com/archives/C210UCHQ9/p1655355343636399?thread_ts=1589556430.060600&cid=C210UCHQ9
   */
  headerMetadata?: unknown;
  /** Adds a class to the header row */
  headerRowClass?: string;
  /** Add custom hotkeys to the list */
  hotKeys?: {
    keyMap?: HotKeysProps['keyMap'];
    handlers?: HotKeysProps['handlers'];
  };
  /** Override the default id for the MCL */
  id?: string;
  /** Function to pass the instance to */
  instanceRef?: (instance: MultiColumnList<DataShape>) => void;
  /** If rows should display as hoverable/clickable */
  interactive?: boolean;
  /** The message to display if the MCL is empty */
  isEmptyMessage?: ReactNode;
  /** Function to determine if a row should show as selected */
  isSelected?: (args: { item: DataShape; rowIndex: number }) => boolean;
  /** If a loading icon should be shown at the bottom of the list */
  loading?: boolean;
  /** A maximum height for the MCL, in pixels */
  maxHeight?: number;
  /** The minimum height of any row, in pixels */
  minimumRowHeight?: number;
  /** Callback for a row being focused */
  onMarkPosition?: (itemToView: PositionObject) => void;
  /** Callback to request more data to be loaded */
  onNeedMoreData?: (askAmount: number, index: number) => void;
  /** Callback for when a row is clicked */
  onRowClick?: (e: MouseEvent | KeyboardEvent, row: DataShape) => void;
  /** Callback for when the list is scrolled */
  onScroll?: UIEventHandler<HTMLDivElement>;
  /** The amount to request at a time from `onNeedMoreData` */
  pageAmount?: number;
  /** The method for pagination */
  pagingType?: PagingType;
  /** A custom formatter for an entire row */
  // TODO: add default formatter types/extension here
  rowFormatter?: unknown;
  /** Keys in the data that should not be rendered */
  rowMetadata?: (keyof DataShape)[];
  /**
   * A function that can force a row to re-render by changing its return.  This return is passed
   * directly to a pure row's props, so any change will cause a re-render.  The actual value does
   * not matter
   */
  rowUpdater?: (rowData: DataShape, rowIndex: number) => unknown;
  /** Override styles for selected rows */
  selectedClass?: string;
  /**
   * The selected row, should match a row from {@link contentData}
   * @deprecated use {@link isSelected} instead
   */
  selectedRow?: DataShape;
  /**
   * Which way a sorted column was sorted
   * @deprecated use {@link sortedOrder}
   */
  sortDirection?: 'ascending' | 'descending';
  /** The column being styled as sorted */
  sortedColumn?: string;
  /** Which way a sorted column was sorted */
  sortedOrder?: 'ascending' | 'descending';
  /** If alternating rows should have different colors, resulting in a striped appearance */
  striped?: boolean;
  /** The total number of rows, for virtualization or pagination */
  totalCount?: number;
  /** For large tables, do not render all rows into the DOM at once */
  virtualize?: boolean;
  /** A list of columns that should be rendered, takes precedence over {@link rowMetadata} */
  visibleColumns?: (keyof DataShape)[];
  /** Set the MCL's width */
  width?: number;
  /** If cells should wrap within themselves */
  wrapCells?: boolean;
}

export type MultiColumnListHeightProps = RequireOneOrNone<{
  /** If the list should fill the containing element (e.g. filling the full width/height of a pane) */
  autosize?: boolean;
  /** Set the height of the container */
  height?: CSSProperties['height'];
}>;

export type MultiColumnListHeaderClickProps<DataShape> = AllOrNone<{
  nonInteractiveHeaders?: (keyof DataShape)[];
  onHeaderClick: (
    e: MouseEvent,
    meta: { name: string; alias: ReactNode }
  ) => void;
}>;

export type MultiColumnListSpecialPagingTypes =
  | AllOrNone<{
      pagingType: 'click';
      /** If there is no more data available */
      dataEndReached?: boolean;
      /** A custom label for the load more button */
      pagingButtonLabel?: ReactNode;
    }>
  | AllOrNone<{
      pagingType: 'prev-next';
      pagingCanGoNext?: boolean;
      pagingCanGoPrevious?: boolean;
      hidePageIndices?: boolean;
    }>;

export type MultiColumnListMarkProps = AllOrNone<{
  /** Scroll to a given item */
  itemToView: PositionObject;
  /** Callback for when a row from itemToView could not be focused */
  onMarkReset?: () => void;
}>;

export type MultiColumnListProps<DataShape> =
  MultiColumnListBaseProps<DataShape> &
    MultiColumnListHeightProps &
    MultiColumnListHeaderClickProps<DataShape> &
    MultiColumnListSpecialPagingTypes &
    MultiColumnListMarkProps;

export class MultiColumnList<DataShape> extends Component<
  MultiColumnListProps<DataShape>
> {}
export default MultiColumnList;
