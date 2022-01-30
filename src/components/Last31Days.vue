<template>
  <h1 font="display" text="h3" m="x-1rem md:x-2rem lg:x-3rem">Last 31 days</h1>
  <div container="~" flex="~ row" m="x-auto t-8">
    <div v-if="loading" m="x-auto">
      <Loader />
    </div>
    <div v-else grid="~ cols-1 md:cols-3 lg:cols-4 xl:cols-7" m="x-auto">
      <CardDays v-for="item of dataNasa" :key="item.index" :item="item" />
    </div>
  </div>
</template>

<script setup>
import Loader from "./Loader.vue"
import CardDays from "./CardDays.vue"
import { onMounted } from "@vue/runtime-dom"
import { searchNasa } from "../composable/useNasa"
import { picsOfLast31Days } from "../composable/useSupabase"
import { useSessionStorage } from "vue-composable"

let [date, month, year] = new Date().toLocaleDateString("fr-FR").split("/")
const today = `${year + "-" + month + "-" + date}`
let lastMonth = month - 1
if (lastMonth === 0) {
  lastMonth = 12
  year = year - 1
}
const last31Days = `${year + "-" + lastMonth + "-" + date}`

ref: startDate = last31Days
ref: endDate = today
ref: dataNasa = {}
ref: loading = true
ref: isStored = false
onMounted(async () => {
  try {
    const { apod } = await picsOfLast31Days(last31Days)
    dataNasa = apod
    if (dataNasa.length == undefined) {
      const { data } = await searchNasa(startDate, endDate)
      dataNasa = data.reverse()
    }
    const { supported, storage } = useSessionStorage("data", dataNasa)
    loading = false
  } catch (error) {
    console.error(error)
  }
})

const fetchDataSources = async () => {
  try {
    const { apod } = await picsOfLast31Days(last31Days)
    dataNasa = apod
    // dataNasa = {}
    if (dataNasa.length == undefined) {
      const { data } = await searchNasa(startDate, endDate)
      dataNasa = data.reverse()
    }
    const { supported, storage } = useSessionStorage("data", dataNasa)
    console.log({ storage })
    loading = false
    isStored = true
  } catch (error) {
    console.error(error)
  }
}
</script>
<style></style>
