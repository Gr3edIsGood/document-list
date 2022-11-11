<script setup lang="ts">
import HeaderButton from "@/components/HeaderButton.vue";
</script>

<template>
  <header class="mt-[38px] mb-[23px]">
    <div class="container flex justify-between items-center flex-wrap">
      <h1 class="header_title text-[22px] font-[500] leading-[108%] text-[#000000]">Документы</h1>
      <div class="flex justify-between gap-x-[10px]">
        <button class="w-[30px] h-[30px] flex justify-center items-center rounded-[50%] border-gray-border border-[1px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[12px] h-[12px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>
        </button>
        <HeaderButton>
          <span class="text-[12px] font-[500] leading-[108%] text-black">Новый тип</span>
        </HeaderButton>
        <HeaderButton>
          <span class="text-[12px] font-[500] leading-[108%] text-black">Новый документ</span>
        </HeaderButton>
      </div>
    </div>
  </header>
  <RouterView />
</template>