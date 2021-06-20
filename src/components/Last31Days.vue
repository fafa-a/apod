<template>
  <h1 font="display" text="h3" m="x-1rem md:x-2rem lg:x-3rem">Last 31 days</h1>
  <div container="~" flex="~ row" m="x-auto t-8">
    <div v-if="loading" m="x-auto">
      <loader />
    </div>
    <div v-else grid="~ cols-1 md:cols-3 lg:cols-4 xl:cols-7" m="x-auto">
      <cardArchive v-for="item of dataNasa" :key="item.index" :item="item" />
    </div>
  </div>
</template>
<script name="Last31Days" setup>
import cardArchive from "./Card31Days.vue"
import loader from "./loader.vue"
import { onMounted } from "@vue/runtime-dom"
import { searchNasa } from "../composable/useNasa"
import { picsOfLast31Days } from "../composable/useSupabase"
import { useSessionStorage } from "vue-composable"

const [date, month, year] = new Date().toLocaleDateString("fr-FR").split("/")
const today = `${year + "-" + month + "-" + date}`
const lastMonth = month - 1
const last31Days = `${year + "-" + lastMonth + "-" + date}`

ref: startDate = last31Days
ref: endDate = today
ref: dataNasa = {}
ref: loading = true

onMounted(async () => {
  try {
    const { apod } = await picsOfLast31Days(last31Days)
    dataNasa = apod
    if (apod.length == 0 || apod[0].date !== today) {
      const { data } = await searchNasa(startDate, endDate)
      dataNasa = data.reverse()
    }
    useSessionStorage("data", dataNasa)
    loading = false
  } catch (error) {
    console.error(error)
  }
})
</script>
<style></style>
