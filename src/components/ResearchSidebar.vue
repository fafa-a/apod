<template>
  <ResearchInputButton
    @inputQuerySend="handleQuery"
    buttonText="search"
    inputType="text"
  />
  <ResearchCheckbox
    @boxValueSend="handleCheckbox"
    v-for="(checkbox, index) in checkboxes"
    :value="checkbox"
    :key="index"
  />
</template>

<script setup>
import ResearchCheckbox from "./ResearchCheckbox.vue"
import ResearchInputButton from "./ResearchInputButton.vue"

ref: media = []
ref: query = ""

const checkboxes = ["image", "video", "audio"]
const handleCheckbox = ([args]) => {
  media.push(args)
}
const handleQuery = (args) => {
  query = args
}
</script>

<style scoped></style>
