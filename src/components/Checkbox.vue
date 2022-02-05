<template>
  <input type="checkbox" id="image" value="image" v-model="mediaType" />
  <label for="image">Images</label>
  <input type="checkbox" id="video" value="video" v-model="mediaType" />
  <label for="video">Video</label>
  <input type="checkbox" id="audio" value="audio" v-model="mediaType" />
  <label for="audio">Audio</label>
</template>

<script setup>
import { defineEmits, onUpdated } from "@vue/runtime-core"

let mediaType = $ref([])

const emit = defineEmits(["boxChecked"])

const sendBoxChecked = (args) => {
  const media = args.join(",")
  emit("boxChecked", media)
}

onUpdated(() => {
  sendBoxChecked(mediaType)
})
</script>

<style scoped></style>
