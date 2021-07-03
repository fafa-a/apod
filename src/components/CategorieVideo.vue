<template>
  <CategorieThumbnail />
  <iframe
    width="960"
    height="540"
    :src="link"
    title="Video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
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
