<template>
  <div h="screen">
    <h1 font="display" text="h3" m="x-1rem md:x-2rem lg:x-3rem">
      Last 31 days
    </h1>
    <div container="~" flex="~ row" m="x-auto t-8">
      <div v-if="loading" m="x-auto">
        <loader />
      </div>
      <div v-else flex="~ wrap" justify="between">
        <cardArchive v-for="item of dataNasa" :key="item.index" :item="item" />
      </div>
    </div>
  </div>
</template>
<script name="Archive" setup>
import cardArchive from "../components/cardArchive.vue"
import loader from "../components/loader.vue"
import { onMounted } from "@vue/runtime-dom"
import { searchNasa } from "../composable/useNasa"

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
    const { data } = await searchNasa(startDate, endDate)
    dataNasa = data.reverse()
    loading = false
  } catch (error) {
    console.error(error)
  }
})
</script>
<style></style>
