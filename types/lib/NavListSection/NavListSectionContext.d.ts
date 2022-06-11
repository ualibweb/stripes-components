import { Context } from "react";
import * as History from "history";

export interface NavListSectionContextContents {
  activeLink: History.LocationDescriptor | string;
  striped: boolean;
}

declare const toExport: Context<NavListSectionContextContents>;
export default toExport;
