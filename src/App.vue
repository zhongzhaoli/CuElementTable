<template>
  <div>
    <TsxElementTable
      ref="tsxElementTableRef"
      :tableColumns="tableColumns"
      :table="{
        data: tableData,
        loading,
      }"
      :handle="{
        show: true,
        rightColumns,
      }"
      :pagination="{
        total,
      }"
      v-model:currentPage="currentPage"
      v-model:pageSize="pageSize"
      @handle-right-click="handleRightClick"
    >
      <template #table-date-header>
        <span>日期123312</span>
      </template>
      <template #table-date2>12312</template>
    </TsxElementTable>
    <!-- <WebSocketComponet /> -->
    <el-button @click="resetPage">清0</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import TsxElementTable from './item';
import { Download } from '@element-plus/icons-vue';
// import WebSocketComponet from './webSocketComponent.vue';
import {
  type TableColumnProps,
  HandleColumnProps,
  ComponentInstance,
  HandleRightColumnProps,
} from './item/types';
const tsxElementTableRef = ref<ComponentInstance | null>(null);
const rightColumns = ref<HandleRightColumnProps[]>([
  {
    icon: Download,
    tooltip: '数据导出',
    key: 'download',
    loading: false,
  },
]);
const handleRightClick = (key: string) => {
  rightColumns.value[0].loading = true;
  setTimeout(() => {
    console.log('handleRightClick', key);
    rightColumns.value[0].loading = false;
  }, 2000);
};
const tableColumns: TableColumnProps[] = [
  {
    label: '',
    type: 'selection',
    align: 'center',
  },
  {
    label: 'Date',
    minWidth: '180',
    showOverflowTooltip: true,
    sortable: true,
    prop: 'date',
  },
  {
    label: 'Name',
    prop: 'name',
  },
  {
    label: 'Address',
    minWidth: '300',
    prop: 'address',
  },
  {
    label: 'Date2',
    fixed: 'right',
    width: '180',
    prop: 'date2',
  },
];
const tableData = ref<any[]>([
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]);
const handleList: HandleColumnProps[] = [
  {
    key: 'create',
    label: '新增',
    type: 'primary',
  },
  {
    key: 'delete',
    label: '删除',
    type: 'danger',
  },
];
const total = 11;
const currentPage = ref(1);
const pageSize = ref(10);
const loading = ref(false);

const resetPage = () => {
  currentPage.value = 1;
};
</script>
<style scoped>
/* 临时 - 美观 */
.TsxElementTableContainer {
  max-width: 1000px;
  border: 1px #eaeaea solid;
  border-radius: 4px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 100px;
}
</style>
