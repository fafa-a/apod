<template>
  <article flex="~ col xl:row" justify="center" align="xl:items-center">
    <ThePicture :data="data" />
    <ThePictureDescription :data="data" />
  </article>
</template>
<script name="TheDay" setup>
import { useRoute } from "vue-router"
import ThePicture from "./ThePicture.vue"
import ThePictureDescription from "./ThePictureDescription.vue"
import { useSessionStorage } from "vue-composable"
import { computed, watchEffect } from "@vue/runtime-dom"
ref: index = 0
ref: data = {}
const { storage } = useSessionStorage("data")

const route = useRoute()
const { id } = route.params
const params = id.replaceAll("_", " ")
const arr = Array.from(storage.value)
const findTitle = (element) => element.title == params
index = arr.findIndex(findTitle)

data = storage.value[index]
</script>
