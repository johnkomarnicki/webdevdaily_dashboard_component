<script setup lang="ts">
import { Icon } from "@iconify/vue";
import BaseTable from "./components/BaseTable.vue";
import BaseBadge from "@/components/BaseBadge.vue";

const columns = [
  { key: "status", label: "Status" },
  { key: "type", label: "Type" },
  { key: "price", label: "Price" },
  { key: "vendor", label: "Vendor" },
  { key: "icon" },
];

const rows = [
  {
    status: "Completed",
    type: "Card payment",
    typeInfo: "Visa card **** 4831",
    price: "$182.94",
    date: "Jan 17, 2024",
    vendor: "Amazon",
  },
  {
    status: "Completed",
    type: "Card payment",
    typeInfo: "Mastercard **** 6642",
    price: "$99.00",
    date: "Jan 17, 2024",
    vendor: "Facebook",
  },
  {
    status: "Pending",
    type: "Bank payment",
    typeInfo: "Account ****882",
    price: "$249.89",
    date: "Jan 16, 2024",
    vendor: "Netflix",
  },
  {
    status: "Canceled",
    type: "Card payment",
    typeInfo: "Amex card **** 5666",
    price: "$10.99",
    date: "Jan 16, 2024",
    vendor: "Amazon Prime",
  },
];
</script>

<template>
  <main class="min-h-screen grid place-items-center bg-[#FEE2E2] px-8">
    <div class="flex flex-col bg-white max-w-screen-lg w-full overflow-x-auto rounded-lg shadow">
      <div class="flex p-8">
        <div>
          <h2 class="text-2xl font-bold mb-1">Transactions</h2>
          <p class="font-light">Lorem ipsum dolor sit amet, consectetur adipis.</p>
        </div>
        <button class="self-start flex items-center gap-1 ml-auto text-[#4F46E5]">
          <span> See All Transactions</span>
          <Icon
            icon="material-symbols:chevron-right"
            width="1.2em"
            height="1.2em"
            color="#4F46E5"
          />
        </button>
      </div>
      <BaseTable :rows="rows" :columns="columns">
        <template #status="{ row }">
          <div class="flex self-start">
            <BaseBadge v-if="row.status === 'Completed'" :label="row.status" color="green" />
            <BaseBadge v-else-if="row.status === 'Pending'" :label="row.status" color="yellow" />
            <BaseBadge v-else :label="row.status" color="red" />
          </div>
        </template>
        <template #type="{ row }">
          <div class="flex flex-col">
            <p class="font-bold">{{ row.typeInfo }}</p>
            <p class="font-light">{{ row.type }}</p>
          </div>
        </template>
        <template #price="{ row }">
          <div class="flex flex-col">
            <p class="font-bold">{{ row.price }}</p>
            <p class="font-light">{{ row.date }}</p>
          </div>
        </template>
        <template #icon>
          <Icon icon="fluent:more-horizontal-28-filled" width="1.2em" height="1.2em" />
        </template>
      </BaseTable>
    </div>
  </main>
</template>

<style></style>
