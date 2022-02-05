<template>
  <SearchThumbnail />
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
import SearchThumbnail from "./SearchThumbnail.vue"

defineProps({
  link: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
