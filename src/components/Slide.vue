<template>
  <div bg="red-500" m="x-1" min-w="screen" h="screen">
    <img :src="item.url" :alt="item.title" h="auto" w="auto" />
    <p h="50px" text="cool-gray-500" font="bold">{{ item.title }}</p>
  </div>
</template>

<script setup>
import { defineEmits, onMounted } from "@vue/runtime-dom"
import { useRoute } from "vue-router"

let slideIndex = $ref(null)

const route = useRoute()
const { index } = route.query

const emit = defineEmits(["sendSlideIndex"])

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
  },
})

const sessionData = sessionStorage.getItem("dataSlide")
const arr = JSON.parse(sessionData)
onMounted(() => {
  const numIndex = parseInt(index)
  if (props.index === numIndex) {
    slideIndex = index
    console.log(arr[slideIndex])
  }
  emit("sendSlideIndex", slideIndex)
})
</script>

<style lang="scss" scoped></style>
