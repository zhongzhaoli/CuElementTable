<template>
  <div>
    <TsxElementTable
      :table="{
        columns: tableColumns,
        data: tableData,
      }"
      :handle-list="handleList"
      :total="total"
      v-model:current-page="currentPage"
    >
      <template #table-name="{ row }">
        {{ row.name }}
      </template>
    </TsxElementTable>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import TsxElementTable from './components/TsxElementTable/index.tsx';
import {
  HandleProps,
  type TableColumnProps,
} from './components/TsxElementTable/types.ts';
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
];
const tableData = [
  {
    date: '2016-05-03',
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
];
const handleList: HandleProps[] = [
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
const total = 100;
const currentPage = ref(2);
</script>
<style scoped></style>
