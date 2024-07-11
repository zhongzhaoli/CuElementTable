import { type ElTableColumn, ElTable } from 'element-plus/lib/components/table';
import { type ElButton } from 'element-plus/lib/components/button';
type ElTableProps = InstanceType<typeof ElTable>['$props'];
type ElTableColumnProps = InstanceType<typeof ElTableColumn>['$props'];
type ElButtonProps = InstanceType<typeof ElButton>['$props'];

export interface TableColumnProps extends ElTableColumnProps {}
export interface TableProps extends ElTableProps {
  columns: TableColumnProps[];
}
export interface HandleColumnProps extends TableColumnProps {
  show: boolean;
}
export type TableDataProps = { [key: string]: any };
export type ComponentSize = 'large' | 'default' | 'small';
export type ButtonType = ElButtonProps['type'];
export type ColumnSlotCallback = (scope: Record<string, any>) => any;

export interface HandleProps {
  key: string;
  label: string;
  type?: ButtonType;
  action?: () => void;
}
export interface ComponentProps {
  // Normal
  size?: 'large' | 'default' | 'small';
  // Handle
  handleList?: HandleProps[];
  // Table
  table: TableProps;
  // Pagination
  total?: number;
  'v-model:pageSize'?: number;
  'v-model:currentPage'?: number;
}

declare module 'TsxElementTable' {
  export const DEFAULT_COLUMN_SLOT_PREFIX: string;
  export const DEFAULT_HANDLE_SLOT_KEY: string;
  export const SPECIAL_COLUMN: { [key: string]: string };
  export const DEFAULT_SIZE: ComponentSize;
  export const DEFAULT_PAGE_SIZE: number;
  export const DEFAULT_PAGE: number;
  export const DEFAULT_PAGE_LAYOUT: string;
  export const COMPONENT_SIZE_LIST: { value: ComponentSize; label: string }[];
  export const TableColumnProps: TableColumnProps;
  export const TableProps: TableProps;
  export const HandleColumnProps: HandleColumnProps;
  export const TableDataProps: TableDataProps;
  export const ComponentSize: ComponentSize;
  export const ButtonType: ButtonType;
  export const ColumnSlotCallback: ColumnSlotCallback;
  export const HandleProps: HandleProps;
  export const ComponentProps: ComponentProps;
}
