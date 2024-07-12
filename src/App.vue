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
import TsxElementTable from 'Tsx-Element-Table';
import { type TableColumnProps, HandleProps } from 'Tsx-Element-Table';
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
  {
    label: 'Date',
    fixed: 'right',
    width: '180',
    prop: 'date',
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
