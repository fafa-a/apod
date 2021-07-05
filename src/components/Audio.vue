<template>
  <SearchThumbnail />
  <audio controls :src="link"></audio>
</template>

<script setup>
import { defineProps } from "@vue/runtime-dom"
import SearchThumbnail from "./SearchThumbnail.vue"

defineProps({
  link: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
