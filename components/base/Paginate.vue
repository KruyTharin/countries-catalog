<script setup lang="ts">
interface Props {
  currentPage: number;
  totalPages: number;
}

defineProps<Props>();
const emit = defineEmits(["prevPage", "nextPage"]);
</script>

<template>
  <div>
    <button
      class="border-[1px] px-3 py-4 rounded-md bg-teal-500 text-white disabled:bg-teal-400"
      :disabled="currentPage === 1"
      @click="emit('prevPage')"
    >
      Previous
    </button>
    <button
      class="border-[1px] px-3 py-4 rounded-md bg-teal-500 text-white disabled:bg-teal-400 ml-3"
      :disabled="currentPage === totalPages"
      @click="emit('nextPage')"
    >
      Next
    </button>
  </div>
</template>
