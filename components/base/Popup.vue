<script setup lang="ts">
import { useStateModalPopup } from "~/composables/useModalPopup";

const modal = useStateModalPopup();
</script>

<template>
  <div
    v-if="modal.isShow.value"
    id="large-modal"
    tabindex="-1"
    class="fixed top-0 bg-slate-500 bg-opacity-10 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative flex w-full h-full justify-center items-center">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow max-w-4xl h-fit">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-sm"
        >
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Country Details
          </h3>
          <button class="text-xl font-bold" @click="modal.hide">Close</button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5 space-y-4">
          <div class="grid grid-cols-2">
            <img
              class="w-full shadow-md"
              :src="modal?.data?.value?.flags.png"
              style="aspect-ratio: 16 / 9"
              :alt="modal?.data?.value?.flags.png"
            />

            <div class="px-6 py-4">
              <button class="font-bold text-xl mb-2 text-start hover:underline">
                {{ modal?.data?.value?.name.official }}
              </button>
              <div class="flex space-x-2">
                <span v-if="modal.data.value?.cca2"
                  >{{ modal.data.value.cca2 }} ,
                </span>
                <span v-if="modal.data.value?.cca3">{{
                  modal.data.value.cca3
                }}</span>
                <div>
                  <span>{{ modal?.data?.value?.idd.root }}</span>
                  <span v-if="!!modal.data.value?.idd?.suffixes?.length">{{
                    modal.data.value.idd.suffixes[0]
                  }}</span>
                </div>

                <div v-if="!!modal.data.value?.capital?.length">
                  <span v-for="x in modal.data.value?.capital" :key="x">{{
                    x
                  }}</span>
                </div>
                <div v-if="modal?.data?.value?.region">
                  {{ modal.data.value?.region }}
                </div>
              </div>

              <div class="text-gray-700 text-base">
                <span v-if="modal.data.value?.name?.nativeName?.eng">{{
                  modal.data.value.name.nativeName.eng.official
                }}</span>
                <br />
                <span v-if="modal.data.value?.name?.nativeName?.eng">{{
                  modal.data.value.name.nativeName.eng.common
                }}</span>
              </div>
              <div>
                {{ modal.data.value?.flags.alt }}
              </div>
              <div class="pt-4 pb-2">
                <span
                  v-for="x in modal?.data?.value?.altSpellings"
                  :key="x"
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >#{{ x }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
