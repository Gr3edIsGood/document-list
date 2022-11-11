<script setup lang="ts">
import {watch, ref} from "vue";
import type { Ref } from 'vue'
const props = defineProps({
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])
const isEmpty:Ref<boolean> = ref(false)

const resetField = ():void => {
  emit('update:modelValue', '')
}
watch(
    () => props.modelValue,
    (newValue, oldValue) => {
      isEmpty.value = props.modelValue !== '';
    }
)
</script>

<template>
  <label for="" class="relative w-full block max-w-[567px]">
    <button class="absolute top-0 left-0 z-10" type="button">
      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.7037 11L14.6569 15.2426M12.1813 7C12.1813 10.3137 9.67826 13 6.59064 13C3.50301 13 1 10.3137 1 7C1 3.68629 3.50301 1 6.59064 1C9.67826 1 12.1813 3.68629 12.1813 7Z" stroke="#8E9CBB" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    <input
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        type="text"
        placeholder="Поиск"
        class="w-full border-b-[1px] border-[#BFC9E0] pl-[25px] pb-[12px] focus-none outline-none font-[400] text-[15px] text-black placeholder:italic placeholder:text-[#8E9CBB] focus:border-[#0066FF]">
    <button @click="resetField" v-if="isEmpty" class="absolute top-[5px] right-0 z-10" type="button">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.325608 10.746C-0.0649162 10.3555 -0.0649162 9.72233 0.325608 9.33181L9.36312 0.292893C9.75364 -0.0976313 10.3868 -0.0976309 10.7773 0.292893C11.1679 0.683418 11.1679 1.31658 10.7773 1.70711L1.73982 10.746C1.3493 11.1365 0.716132 11.1365 0.325608 10.746Z" fill="#FF238D"/>
        <path d="M10.6836 10.6835C11.0741 10.293 11.0741 9.65986 10.6836 9.26933L6.19533 4.78111L1.70711 0.292893C1.31658 -0.0976313 0.683417 -0.0976309 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L9.26935 10.6835C9.65987 11.0741 10.293 11.0741 10.6836 10.6835Z" fill="#FF238D"/>
      </svg>
    </button>
  </label>
</template>

<style scoped>

</style>
