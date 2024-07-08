import { type ElTableColumn, ElTable } from 'element-plus/lib/components/table';
type ElTableProps = InstanceType<typeof ElTable>['$props'];
type ElTableColumnProps = InstanceType<typeof ElTableColumn>['$props'];

export interface TableColumnProps extends ElTableColumnProps {}
export interface TableProps extends ElTableProps {
  columns: TableColumnProps[];
}
export type TableDataProps = { [key: string]: any };
export type ComponentSize = 'large' | 'default' | 'small';

export interface ComponentProps {
  // Normal
  size?: 'large' | 'default' | 'small';
  // Table
  table: TableProps;
  // Pagination
  total?: number;
  'v-model:pageSize'?: number;
  'v-model:currentPage'?: number;
}
