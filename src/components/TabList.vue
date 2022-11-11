<script setup lang="ts">
import draggable from "vuedraggable";
import draggableComponent from "vuedraggable";
import ChildItem from "@/components/ChildItem.vue";
import ParentItem from "@/components/ParentItem.vue";
import {computed, ref, unref, reactive} from "vue";
import type { Ref } from 'vue'

defineProps({
  commonItems: {
    type: Array,
  },
  parentItems: {
    type: Array,
  }
})

type listItem = {
  id?: number,
  title: string,
  mustNeeded?: boolean,
  forAll?: boolean,
  text?: string,
  icons?: Array<string>,
}
interface parentListItem extends listItem {
  listChilds?: Array<listItem>,
}

const dragging = ref(false)
const close = () => {
  console.log('123')
}

const removeItem = (array, index) => {
  array.splice(index, 1)
}

const drag = (state) => {
  dragging.value = state
}

const dragOptions = computed(() => {
  return {
    animation: 200,
    disabled: false,
    ghostClass: "ghost"
  };
})
</script>

<template>
  <section class="flex flex-col w-full max-w-[1190px]">
    <draggable
        v-model="parentItems"
        item-key="title"
        group="main-category"
        class="list-group"
        v-bind="dragOptions"
        @start="dragging = true"
        @end="dragging = false"
    >
      <template #item="{ element, index }">
        <ParentItem
            @remove-item="parentItems.splice(index, 1)"
            :item="element" group="sub-category"/>
      </template>
    </draggable>
  </section>
  <section class="flex flex-col mt-[14px] w-full max-w-[1190px]">
    <draggable
        v-model="commonItems"
        item-key="title"
        group="sub-category"
        class="list-group"
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
            @remove-item="commonItems.splice(index, 1)"
        >
        </ChildItem>
      </template>
    </draggable>
  </section>
</template>

<style scoped>
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
