<template>
  <a :href="link" target="_blank" rel="noopener">
    <SearchThumbnail />
  </a>
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
