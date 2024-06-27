<script setup lang="ts">
import { Icon } from "@iconify/vue";

type BadgeColors = "green" | "red" | "yellow";

defineProps<{
  label: String;
  color: BadgeColors;
}>();

const colorVariants = {
  green: "bg-green-500/20 text-green-500",
  red: "bg-red-500/20 text-red-500",
  yellow: "bg-yellow-500/20 text-yellow-500",
};
</script>

<template>
  <div class="flex items-center gap-1 py-1 px-3 rounded-full" :class="[colorVariants[color]]">
    <Icon icon="oui:dot" width="1.2em" height="1.2em" />
    <span>
      {{ label }}
    </span>
  </div>
</template>

<style scoped></style>
