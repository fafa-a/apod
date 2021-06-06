<template>
  <router-link :to="{ path: '/home' }">
    <div w="220px md:full">
      <h1 text="capitalize h3 md:h1" font="display">{{ title }}</h1>
    </div>
  </router-link>
</template>

<script name="TheTitle" setup>
import { defineProps } from "@vue/runtime-core"

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
<style></style>
