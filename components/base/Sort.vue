<script setup lang="ts">
type SortDirection = "asc" | "desc";
interface Props {
  sortDirection: SortDirection;
  text: string;
}

const props = defineProps<Props>();
const emit = defineEmits(["toggle"]);

const sortText = computed(() =>
  props.sortDirection === "asc" ? "DESC" : "ASC"
);
</script>

<template>
  <div class="flex gap-x-2 items-center rounded-md">
    <span>{{ text }}</span>
    <button class="border-[1px] px-3 py-4" @click="$emit('toggle')">
      {{ sortText }}
    </button>
  </div>
</template>
