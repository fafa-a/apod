<template>
  <picture>
    <a :href="data.hdurl" h="auto lg:87vh" flex="~">
      <img
        :src="data.properties.media.rich_text[0].text.content"
        :alt="data.properties.title.title[0].text.content"
        max-h="full"
        height="70vh"
        m="x-auto xl:y-auto"
      />
    </a>
  </picture>
</template>
<script name="ThePicture" setup>
import { defineProps } from "@vue/runtime-core"

defineProps({
  data: {
    type: Object,
    required: true,
  },
})
console.log(data)
</script>
