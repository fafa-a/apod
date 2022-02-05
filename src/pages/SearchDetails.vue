<template>
  <section container="~" m="x-auto" h="lg:83vh">
    <Slider h="full" />
  </section>
</template>
<script setup>
import ResultDetails from "../components/ResultDetails.vue"
import Slider from "../components/Slider.vue"
import axios from "redaxios"
import { inject, onMounted, onUpdated, watchEffect } from "@vue/runtime-dom"

let urls = $ref([])
let urlFinal = $ref([])
let xdata = $ref({})

defineProps({
  dataSlider: {
    type: Array,
  },
})

const fetchUrl = async (url) => {
  const res = axios.get(url)
  const { data } = await res
  const arr = Array.from(data)
  const urlOrig = arr.filter((url) => url.includes("orig.jpg")) || null
  urlFinal.push(urlOrig)
}
</script>
