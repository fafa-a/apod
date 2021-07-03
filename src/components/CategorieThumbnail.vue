<template>
  <img
    :src="data.links[0].href"
    :alt="data.data[0].description"
    w="auto"
    h="full"
  />
</template>

<script setup>
import { inject } from "@vue/runtime-dom"

const data = inject("data")
</script>

<style lang="scss" scoped></style>
