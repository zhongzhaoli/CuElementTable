import { defineComponent, PropType, ref, unref } from 'vue';
import {
  type ComponentProps,
  type ComponentSize,
  type TableColumnProps,
  type TableProps,
} from './types.ts';
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_LAYOUT,
  DEFAULT_PAGE_SIZE,
  DEFAULT_SIZE,
  DEFAULT_SLOT_PREFIX,
  COMPONENT_SIZE_LIST,
} from './constant.ts';
import './index.css';
import { Refresh, Operation, Open } from '@element-plus/icons-vue';

const CuElementTable = defineComponent({
  name: 'CuElementTable',
  props: {
    // Normal
    size: {
      type: String as PropType<ComponentSize>,
      default: DEFAULT_SIZE,
    },
    table: {
      type: Object as PropType<TableProps>,
      required: true,
    },
    // Pagination
    total: {
      type: Number,
      default: 0,
    },
    'v-model:pageSize': {
      type: Number,
      default: DEFAULT_PAGE_SIZE,
    },
    'v-model:currentPage': {
      type: Number,
      default: DEFAULT_PAGE,
    },
  },
  emits: [
    'update:currentPage',
    'update:pageSize',
    'size-change',
    'table-refresh',
  ],
  setup(props: ComponentProps, { slots, emit }) {
    const _size = ref(props.size);
    // 根据column的prop属性，获取对应的插槽内容
    function getSlot(column: TableColumnProps) {
      const slotName = `${DEFAULT_SLOT_PREFIX}${column.prop}`;
      return slots[slotName];
    }
    // 根据ElTableColumn的默认插槽default，放入我们自定义的插槽内容
    function renderTableColumn(column: TableColumnProps) {
      const columnSlots: {
        default?: (scope: Record<string, any>) => any;
      } = {};
      const slot = getSlot(column);
      if (slot)
        columnSlots.default = (scope: Record<string, any>) => slot(scope);

      return <el-table-column {...column}>{columnSlots}</el-table-column>;
    }
    // 生成分页器
    function renderPagination() {
      const _currentPage = props['v-model:currentPage'] || DEFAULT_PAGE;
      const _pageSize = props['v-model:pageSize'] || DEFAULT_PAGE_SIZE;
      const onPageChange = (pageNum: number) => {
        emit('update:currentPage', pageNum);
      };
      const onSizeChange = (pageSize: number) => {
        emit('update:pageSize', pageSize);
      };
      return (
        <el-pagination
          size={unref(_size)}
          defaultCurrentPage={_currentPage}
          total={props.total}
          pageSize={_pageSize}
          layout={DEFAULT_PAGE_LAYOUT}
          onCurrentChange={onPageChange}
          onSizeChange={onSizeChange}
        />
      );
    }
    // 生成table
    function renderTable() {
      const { table } = props;
      return (
        <el-table size={unref(_size)} {...table}>
          {(table.columns || []).map((column: TableColumnProps) => {
            return renderTableColumn(column);
          })}
        </el-table>
      );
    }
    // 生成Handle
    function renderHandle() {
      function renderRight() {
        const dropdownSlot = {
          default: () => <el-button circle icon={Operation}></el-button>,
          dropdown: () => (
            <el-dropdown-menu>
              {COMPONENT_SIZE_LIST.map((item) => (
                <el-dropdown-item
                  command={item.value}
                  disabled={unref(_size) === item.value}
                >
                  {item.label}
                </el-dropdown-item>
              ))}
            </el-dropdown-menu>
          ),
        };
        const sizeChange = (size: ComponentSize) => {
          _size.value = size;
          emit('size-change', size);
        };
        const tableRefresh = () => {
          emit('table-refresh');
        };
        return (
          <>
            <div>
              <el-button
                circle
                icon={Refresh}
                onClick={tableRefresh}
              ></el-button>
            </div>
            <div>
              <el-dropdown trigger="click" onCommand={sizeChange}>
                {dropdownSlot}
              </el-dropdown>
            </div>
            <div>
              <el-button circle icon={Open}></el-button>
            </div>
          </>
        );
      }
      return (
        <>
          <div className="cuLeftBox"></div>
          <div className="cuRightBox">{renderRight()}</div>
        </>
      );
    }
    return () => (
      <div className="cuElementTableContainer">
        <div className="cuHandleBox">
          {/* Handle */}
          {renderHandle()}
        </div>
        <div className="cuTableBox">
          {/* Table */}
          {renderTable()}
        </div>
        <div className="cuPaginationBox">
          {/* Pagination */}
          {renderPagination()}
        </div>
      </div>
    );
  },
});

export default CuElementTable;
