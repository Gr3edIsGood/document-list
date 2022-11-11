<script setup lang="ts">
import SearchField from "@/components/SearchField.vue";
import TabList from "@/components/TabList.vue";
import type {Ref} from 'vue'
import {computed, reactive, ref} from "vue";

const val:Ref<string> = ref('')

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
const parentItems: Array<parentListItem> = reactive([
  {
    title: 'Обязательные для всех',
    text: 'Документы, обязательные для всех сотрудников без исключения',
    icons: ['yellow-icon','orange-icon', 'pink-test'],
    listChilds: [
      {
        title: 'Паспорт',
        mustNeeded: true,
        text: 'Для всех',
        icons: ['blue-icon']
      },
      {
        title: 'ИНН',
        mustNeeded: true,
        text: 'Для всех'
      },
    ],
  },
  {
    title: 'Обязательные для трудоустройства',
    text: 'Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от граж',
    listChilds: [],
  },
  {
    title: 'Специальные',
    listChilds: [],
  },
])

const commonItems: Array<listItem> = reactive([
  {
    title: 'Гражданство',
    text: 'Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха'
  },
  {
    title: 'Трудовой договор',
    icons: ['blue-icon', 'gray-text']
  },
  {
    title: 'Мед. книжка',
  }
])

const commonFiltered = computed(() => {
    let filtered = commonItems

    if (val.value != '') {
      return filtered.filter(item => item.title.trim().toUpperCase().includes(val.value.toUpperCase()))
    } else {
      return filtered
    }
})

const parentFiltered = computed(() => {
  let filtered = parentItems

  if (val.value != '') {
    let isYes = false
    filtered.filter(obj => {
      obj.listChilds?.filter(item => {
        if (item.title.trim().toUpperCase().includes(val.value.toUpperCase())) {
          isYes = true
        }
      })
    })

    if (isYes) {
      filtered.forEach(obj => {
        if (obj.listChilds?.length > 0) {
          obj.listChilds?.forEach(item => {
            if (item.title.trim().toUpperCase().includes(val.value.toUpperCase())) {
              filtered = []
              filtered.push(obj)
            }
          })
        }
      })

      return filtered
    } else {
      return filtered.filter(obj => {
        return obj.title.trim().toUpperCase().includes(val.value.toUpperCase())
      })
    }
  } else {
    return filtered
  }
})

</script>

<template>
  <main>
    <div class="container">
      <SearchField v-model.trim="val" class="mb-[19px]"/>
      <TabList :common-items="commonFiltered" :parent-items="parentFiltered" />
    </div>
  </main>
</template>

<style scoped>

</style>
