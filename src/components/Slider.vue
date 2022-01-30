<template>
  <div flex="~ col" h="full" justify="between">
    <div flex="~ row" bg="blue-500" overflow="hidden" w="max-screen-xl">
      <Slide
        v-for="(item, index) in data"
        :key="index"
        :item="item"
        :index="index"
        @sendSlideIndex="handleSlideIndex"
      />
    </div>
    <div>{{ slideIndex }}</div>
    <div w="full" h="50px" flex="~ row" justify="center">
      <button>
        <img src="../assets/icon/skip-back.svg" alt="" @click="previous" />
      </button>
      <button>
        <img src="../assets/icon/skip-forward.svg" alt="" @click="next" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-dom"
import Slide from "./Slide.vue"

ref: data = []
ref: slideIndex = null

const sessionData = sessionStorage.getItem("dataSlide")
const obj = JSON.parse(sessionData)

onMounted(() => {
  for (const value of obj) {
    data.push(value)
  }
})
const handleSlideIndex = (num) => {
  if (num !== null) {
    slideIndex = num
  }
}

const next = () => {
  slideIndex++
}
const previous = () => {
  slideIndex--
}
</script>

<style lang="scss" scoped></style>
