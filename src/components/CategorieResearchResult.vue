<template>
  <div v-if="type === 'image'" w="1/3">
    <CategoriePicture :link="link" />
  </div>
  <div v-if="type === 'video'" w="1/3">
    <CategorieVideo :link="link" />
  </div>
  <div v-if="type === 'audio'" w="1/3">
    <CategorieAudio :link="link" />
  </div>
</template>

<script setup>
import { defineProps, onMounted, provide } from "@vue/runtime-dom"
import axios from "redaxios"
import CategoriePicture from "./CategoriePicture.vue"
import CategorieVideo from "./CategorieVideo.vue"
import CategorieAudio from "./CategorieAudio.vue"

ref: axiosData = {}
ref: link = ""
ref: type = ""

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

provide("data", props.data)

const fetchLink = async () => {
  const res = axios.get(props.data.href)
  const { data } = await res
  axiosData = data
}
onMounted(async () => {
  await fetchLink()
  type = props.data.data[0].media_type
  link = axiosData[0]
})
</script>

<style lang="scss" scoped></style>
