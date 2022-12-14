<script setup lang="ts">
import {computed, ref} from "vue";
import draggable from "vuedraggable";
import ChildItem from "@/components/ChildItem.vue";

defineProps({
  item: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
  },
  list: {
    type: Array,
  },
  group: {
    type: String,
  }
})

const emit = defineEmits(['close', 'remove-item', 'drag-start', 'drag-end'])

const drag = () => {
  emit('drag-start')
}
const remove = () => {
  emit('remove-item')
}
const dragging = ref(false)
const expanded = ref(false)

const dragOptions = computed(() => {
  return {
    animation: 200,
    disabled: false,
    ghostClass: "ghost"
  };
})
</script>

<template>
  <div class="w-full">
    <div class="flex justify-between items-center px-[17px] py-[10px] border-[1px] border-gray-border w-full">
      <div class="flex items-center gap-x-[15px]">
        <button @click="expanded = !expanded" class="w-[22px] h-[22px] flex items-center justify-center border-[1px] border-gray-border rounded-[50%]" :class="{'rotate-180' : expanded}">
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.53976 0.194049C3.28126 0.452672 3.28126 0.871984 3.53976 1.13061L6.87001 4.46243C7.12851 4.72106 7.54762 4.72106 7.80612 4.46243C8.06462 4.20381 8.06462 3.7845 7.80612 3.52588L4.47587 0.194049C4.21737 -0.0645742 3.79826 -0.0645742 3.53976 0.194049Z" fill="#0066FF"/>
            <path d="M4.47058 0.194049C4.72908 0.452672 4.72908 0.871984 4.47058 1.13061L1.12999 4.47278C0.871489 4.7314 0.452377 4.7314 0.193876 4.47278C-0.0646252 4.21416 -0.0646252 3.79485 0.193876 3.53622L3.53447 0.194049C3.79297 -0.0645742 4.21208 -0.0645742 4.47058 0.194049Z" fill="#0066FF"/>
          </svg>
        </button>
        <span class="text-black text-[15px] font-[500]">{{ item.title }}</span>
        <div class="flex items-center gap-x-[6px]">
          <span v-for="icon in item.icons" class="w-[8px] h-[8px] rounded-[50%] border-[1px] hover:border-black hover:shadow" :class="`bg-${icon}`"></span>
        </div>
        <span v-if="item.mustNeeded" class="text-[11px] text-pink-test">????????????????????????</span>
        <span v-if="item.forAll" class="text-[11px] text-gray-text">?????? ????????</span>
        <span class="text-[11px] font-[400] text-gray-text">{{ item.text }}</span>
      </div>
      <div class="flex justify-between items-center gap-x-[20px]">
        <button type="button">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.33943 1.62805L8.63232 0.920947L8.63232 0.920948L9.33943 1.62805ZM10.8557 1V0V1ZM13 3.14431H14H13ZM12.3719 4.66057L11.6648 3.95346L11.6648 3.95346L12.3719 4.66057ZM5.16971 11.8628L5.43283 12.8276C5.60073 12.7818 5.75376 12.693 5.87682 12.5699L5.16971 11.8628ZM1 13L0.0352364 12.7369C-0.0591854 13.0831 0.0391427 13.4534 0.292893 13.7071C0.546642 13.9609 0.916904 14.0592 1.26312 13.9648L1 13ZM2.13719 8.8303L1.43009 8.12319C1.30703 8.24625 1.21822 8.39929 1.17243 8.56718L2.13719 8.8303ZM10.0465 2.33516C10.1528 2.2289 10.2789 2.14461 10.4178 2.08711L9.65241 0.239346C9.27093 0.397362 8.9243 0.62897 8.63232 0.920947L10.0465 2.33516ZM10.4178 2.08711C10.5566 2.0296 10.7054 2 10.8557 2V0C10.4428 0 10.0339 0.0813298 9.65241 0.239346L10.4178 2.08711ZM10.8557 2C11.006 2 11.1548 2.0296 11.2936 2.08711L12.059 0.239346C11.6775 0.0813296 11.2686 0 10.8557 0V2ZM11.2936 2.08711C11.4324 2.14461 11.5586 2.2289 11.6648 2.33516L13.0791 0.920947C12.7871 0.628971 12.4404 0.397363 12.059 0.239346L11.2936 2.08711ZM11.6648 2.33516C11.7711 2.44142 11.8554 2.56757 11.9129 2.7064L13.7607 1.94103C13.6026 1.55955 13.371 1.21292 13.0791 0.920947L11.6648 2.33516ZM11.9129 2.7064C11.9704 2.84523 12 2.99403 12 3.14431H14C14 2.7314 13.9187 2.32252 13.7607 1.94103L11.9129 2.7064ZM12 3.14431C12 3.29459 11.9704 3.44339 11.9129 3.58222L13.7607 4.34759C13.9187 3.9661 14 3.55722 14 3.14431H12ZM11.9129 3.58222C11.8554 3.72105 11.7711 3.8472 11.6648 3.95346L13.0791 5.36768C13.371 5.0757 13.6026 4.72907 13.7607 4.34759L11.9129 3.58222ZM11.6648 3.95346L4.46261 11.1557L5.87682 12.5699L13.0791 5.36767L11.6648 3.95346ZM4.9066 10.898L0.736884 12.0352L1.26312 13.9648L5.43283 12.8276L4.9066 10.898ZM1.96476 13.2631L3.10196 9.09342L1.17243 8.56718L0.0352364 12.7369L1.96476 13.2631ZM2.8443 9.53741L10.0465 2.33516L8.63232 0.920948L1.43009 8.12319L2.8443 9.53741ZM7 4L10 7L11.4142 5.58579L8.41421 2.58579L7 4Z" fill="#8E9CBB"/>
          </svg>
        </button>
        <button type="button" @click="remove">
          <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3C0.447715 3 0 3.44772 0 4C0 4.55228 0.447715 5 1 5V3ZM12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3V5ZM2.92846 3.6C2.92846 4.15228 3.37618 4.6 3.92846 4.6C4.48075 4.6 4.92846 4.15228 4.92846 3.6H2.92846ZM5.21418 1V0V1ZM7.78561 1V0V1ZM8.07132 3.6C8.07132 4.15228 8.51903 4.6 9.07132 4.6C9.6236 4.6 10.0713 4.15228 10.0713 3.6H8.07132ZM6 7C6 6.44772 5.55228 6 5 6C4.44772 6 4 6.44772 4 7H6ZM4 11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11H4ZM9 7C9 6.44772 8.55228 6 8 6C7.44772 6 7 6.44772 7 7H9ZM7 11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11H7ZM1 5H12V3H1V5ZM4.92846 3.6V2.3H2.92846V3.6H4.92846ZM4.92846 2.3C4.92846 2.21689 4.96122 2.13938 5.01604 2.08395L3.59404 0.677572C3.16663 1.10973 2.92846 1.69355 2.92846 2.3H4.92846ZM5.01604 2.08395C5.0705 2.02889 5.14199 2 5.21418 2V0C4.60438 0 4.02182 0.245036 3.59404 0.677572L5.01604 2.08395ZM5.21418 2H7.78561V0H5.21418V2ZM7.78561 2C7.85779 2 7.92929 2.02889 7.98374 2.08395L9.40575 0.677572C8.97796 0.245036 8.3954 0 7.78561 0V2ZM7.98374 2.08395C8.03856 2.13938 8.07132 2.21689 8.07132 2.3H10.0713C10.0713 1.69355 9.83316 1.10973 9.40575 0.677572L7.98374 2.08395ZM8.07132 2.3V3.6H10.0713V2.3H8.07132ZM4 7V11H6V7H4ZM7 7V11H9V7H7ZM10 4V12H12V4H10ZM9 13H4V15H9V13ZM3 12V4H1V12H3ZM4 13C3.44772 13 3 12.5523 3 12H1C1 13.6569 2.34315 15 4 15V13ZM10 12C10 12.5523 9.55228 13 9 13V15C10.6569 15 12 13.6569 12 12H10Z" fill="#FF238D"/>
          </svg>
        </button>
        <button type="button">
          <svg class="fill-[#8E9CBB]" fill="currentColor" width="8" height="16" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg">
            <path class="fill-[#8E9CBB]" d="M4.69594 14.7086C4.30473 15.0991 3.67045 15.0991 3.27924 14.7086L0.293409 11.7296C-0.097803 11.339 -0.0978031 10.7059 0.293409 10.3153C0.684621 9.92482 1.3189 9.92482 1.71011 10.3153L4.69594 13.2944C5.08715 13.6849 5.08715 14.318 4.69594 14.7086Z" fill="currentColor"/>
            <path class="fill-[#8E9CBB]" d="M3.30385 14.7086C3.69506 15.0991 4.32934 15.0991 4.72055 14.7086L7.70659 11.7296C8.0978 11.339 8.0978 10.7059 7.70659 10.3153C7.31538 9.92482 6.6811 9.92482 6.28989 10.3153L3.30385 13.2944C2.91264 13.6849 2.91264 14.318 3.30385 14.7086Z" fill="currentColor"/>
            <path class="fill-[#8E9CBB]" d="M3.98759 14.0157C3.43433 14.0157 2.98583 13.5679 2.98583 13.0157V3C2.98583 2.44772 3.43433 2 3.98759 2C4.54085 2 4.98935 2.44772 4.98935 3V13.0157C4.98935 13.5679 4.54085 14.0157 3.98759 14.0157Z" fill="currentColor"/>
            <path class="fill-[#8E9CBB]" d="M4.69594 0.292893C4.30473 -0.0976311 3.67045 -0.0976311 3.27924 0.292893L0.293409 3.27191C-0.097803 3.66243 -0.0978031 4.2956 0.293409 4.68612C0.684621 5.07664 1.3189 5.07664 1.71011 4.68612L4.69594 1.70711C5.08715 1.31658 5.08715 0.683417 4.69594 0.292893Z" fill="currentColor"/>
            <path class="fill-[#8E9CBB]" d="M3.30385 0.292893C3.69506 -0.0976311 4.32934 -0.0976311 4.72055 0.292893L7.70659 3.27191C8.0978 3.66243 8.0978 4.2956 7.70659 4.68612C7.31538 5.07664 6.6811 5.07664 6.28989 4.68612L3.30385 1.70711C2.91264 1.31658 2.91264 0.683417 3.30385 0.292893Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
    <Transition>
      <draggable
        v-show="expanded"
        :list="item.listChilds"
        item-key="title"
        :group="group"
        class="flex flex-col items-end max-w-[1175px] w-full mr-0 ml-auto"
        v-bind="dragOptions"
        @start="dragging = true"
        @end="dragging = false"
    >
      <template #item="{ element, index }">
        <ChildItem
            :title="element.title"
            :for-all="element.forAll"
            :must-needed="element.mustNeeded"
            :text="element.text"
            :icons="element.icons"
            @close="close"
            @remove-item="item.listChilds.splice(index, 1)"
        >
        </ChildItem>
      </template>
    </draggable>
    </Transition>
  </div>

</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-slide-enter-active,
.v-slide-leave-active {
  transition: all 0.4s ease-in-out;
}
.v-slide-enter-from,
.v-slide-leave-to {
  overflow: hidden;
  max-height: 0;
  height: 0;
}
.v-slide-enter-to,
.v-slide-leave-from {
  overflow: hidden;
  max-height: 100%;
  height: 100px;
}
</style>
