<script setup lang="ts">
import type { ICountriesResponse } from "~/types";
defineProps<{ data: ICountriesResponse }>();
</script>

<template>
  <div
    class="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between h-full"
  >
    <div>
      <img
        class="w-full"
        :src="data.flags.png"
        style="aspect-ratio: 16 / 9"
        :alt="data.flags.png"
      />

      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ data.name.official }}</div>
        <div class="flex space-x-2">
          <span>{{ data.cca2 }} , </span>
          <span>{{ data.cca3 }}</span>
          <div>
            <span>{{ data.idd.root }}</span>
            <span v-if="!!data?.idd?.suffixes?.length">{{
              data.idd.suffixes[0]
            }}</span>
          </div>
        </div>
        <div class="text-gray-700 text-base">
          <span v-if="data?.name?.nativeName?.eng">{{
            data.name.nativeName.eng.official
          }}</span>
          <span v-if="data?.name?.nativeName?.eng">{{
            data.name.nativeName.eng.common
          }}</span>
        </div>
      </div>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        v-for="x in data.altSpellings"
        :key="x"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >#{{ x }}</span
      >
    </div>
  </div>
</template>
