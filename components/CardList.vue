<script setup lang="ts">
import type { ICountriesResponse } from "~/types";
interface Props {
  data: ICountriesResponse[];
}
defineProps<Props>();
</script>

<template>
  <div class="container">
    <div
      class="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
    >
      <div v-for="item in data" :key="item.id">
        <Card v-bind:data="item" />
      </div>
    </div>
    <div
      class="text-center text-3xl text-rose-500 z-10"
      v-if="data.length === 0"
    >
      No Data Found
    </div>
  </div>
</template>
