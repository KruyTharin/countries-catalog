<script setup lang="ts">
import type { ICountriesResponse } from "~/types";
interface Props {
  data: ICountriesResponse[];
}
defineProps<Props>();
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-4 gap-8">
      <div v-for="item in data" :key="item.id">
        <Card v-bind:data="item" />
      </div>
    </div>
  </div>
</template>
