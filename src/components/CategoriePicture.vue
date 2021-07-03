<template>
  <a :href="link" target="_blank" rel="noopener">
    <CategorieThumbnail />
  </a>
</template>

<script setup>
import { defineProps } from "@vue/runtime-dom"
import CategorieThumbnail from "./CategorieThumbnail.vue"

defineProps({
  link: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
