<script setup lang="ts">
import { useCountries } from "~/composables/useCountries";

const {
  paginatedCountries,
  searchQuery,
  currentPage,
  totalPages,
  sortDirection,
  prevPage,
  nextPage,
  toggleSort,
} = useCountries();
</script>

<template>
  <div class="my-10">
    <h1 class="text-3xl font-bold underline text-center my-10 text-teal-500">
      Countries Catalog Implementation
    </h1>

    <div
      class="flex md:flex-row flex-col justify-center items-center my-10 gap-5"
    >
      <input
        type="text"
        id="first_name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l focus:outline-none px-3 py-4 max-w-96"
        placeholder="Country Name"
        v-model="searchQuery"
      />
      <BasePaginate
        @next-page="nextPage"
        @prev-page="prevPage"
        :current-page="currentPage"
        :total-pages="totalPages"
      />

      <BaseSort
        text="Sort"
        @toggle="toggleSort"
        :sort-direction="sortDirection"
      />
    </div>

    <CardList :data="paginatedCountries ?? []" />
  </div>
</template>
