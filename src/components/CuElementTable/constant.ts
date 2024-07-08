import { ComponentSize } from './types';

// 表格插槽前缀
export const DEFAULT_SLOT_PREFIX: string = 'table-';

// 默认组件大小
export const DEFAULT_SIZE: ComponentSize = 'default';

// 默认页码
export const DEFAULT_PAGE_SIZE: number = 10;

// 默认当前页数
export const DEFAULT_PAGE: number = 1;

// 默认分页布局
export const DEFAULT_PAGE_LAYOUT: string = 'total, prev, pager, next, jumper';

// 组件大小列表
export const COMPONENT_SIZE_LIST: { value: ComponentSize; label: string }[] = [
  { value: 'large', label: '宽松' },
  { value: 'default', label: '默认' },
  { value: 'small', label: '紧凑' },
];
