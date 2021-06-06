<template>
  <div h="screen">
    <h1 font="display" text="h3" m="x-1rem md:x-2rem lg:x-3rem">
      Last 31 days
    </h1>

    <div container="~" flex="~ row" m="x-auto t-4">
      <div v-if="loading" m="x-auto" >
        <loader />
      </div>
      <div v-else flex="~ wrap" justify="between">
        <cardArchive
          v-for="item of data.reverse()"
          :key="item.index"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>
<script name="Archive" setup>
import cardArchive from "../components/cardArchive.vue"
import loader from "../components/loader.vue"
import { useAxios } from "@vue-composable/axios"

const [month, date, year] = new Date().toLocaleDateString("fr-FR").split("/")
const today = `${year + "-" + date + "-" + month}`
const lastMonth = month - 1
const last31Days = `${year + "-" + lastMonth + "-" + date}`

ref: startDate = last31Days
ref: endDate = today
today
ref: imgState = {}

const { exec, data, loading } = useAxios()

try {
  exec({
    method: "GET",
    url:
      import.meta.env.VITE_NASA_BASE_URL +
      "&start_date=" +
      startDate +
      "&end_date=" +
      endDate,
  })
} catch (error) {
  console.error(error)
}
</script>
<style></style>
