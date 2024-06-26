<script setup lang="ts">
import type { ColumnDefinition, Row } from "@/types/type";
defineProps<{
  rows: Row[];
  columns: ColumnDefinition[];
}>();
</script>

<template>
  <div class="flex-1 w-full overflow-x-auto">
    <table class="min-w-full">
      <tbody>
        <tr v-for="row in rows">
          <td
            v-for="column in columns"
            class="font-light whitespace-nowrap px-6 py-4 first-of-type:pl-0 last-of-type:pr-0"
          >
            <slot :name="column.key" :row="row">
              {{ row[column.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
