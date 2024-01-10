<script setup lang="ts">
import type { ICountriesResponse } from "~/types";

const config = useRuntimeConfig();
const { data } = useFetch<ICountriesResponse[]>(
  `${config.public.apiBase}/all?fields=name,flags,cca2,cca3,altSpellings,idd`
);

// console.log(data.value);
</script>

<template>
  <h1 class="text-3xl font-bold underline text-center my-10 text-teal-500">
    Countries Catalog Implementation
  </h1>
  <CardList :data="data ?? []" />
</template>
