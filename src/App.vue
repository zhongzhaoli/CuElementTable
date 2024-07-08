<template>
  <div>
    <CuElementTable
      :table="{
        columns: tableColumns,
        data: tableData,
      }"
      :total="total"
      v-model:current-page="currentPage"
    >
      <template #table-name="{ row }">
        {{ row.name }}
      </template>
    </CuElementTable>
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import CuElementTable from './components/CuElementTable/index.tsx';
import { type TableColumnProps } from './components/CuElementTable/types.ts';
const tableColumns: TableColumnProps[] = [
  {
    label: '',
    type: 'index',
    align: 'center',
  },
  {
    label: 'Date',
    prop: 'date',
  },
  {
    label: 'Name',
    prop: 'name',
  },
  {
    label: 'Address',
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
const total = 100;
const currentPage = ref(2);

watchEffect(() => {
  console.log(currentPage.value);
});
</script>
<style scoped></style>
