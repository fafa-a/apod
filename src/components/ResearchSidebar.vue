<template>
  <ResearchInput @inputQuerySend="handleQuery" inputType="text" />
  <span flex="~ row" justify="between">
    <ResearchCheckbox
      @boxValueSend="handleCheckbox"
      v-for="(checkbox, index) in checkboxes"
      :value="checkbox"
      :key="index"
    />
  </span>
  <ResearchButton @isClicked="handlebutton" buttonText="search" />
</template>

<script setup>
import ResearchCheckbox from "./ResearchCheckbox.vue"
import ResearchInput from "./ResearchInput.vue"
import ResearchButton from "./ResearchButton.vue"
import { defineEmit, onUpdated } from "@vue/runtime-core"

ref: media = []
ref: query = ""
ref: isClicked = false

const checkboxes = ["image", "video", "audio"]
const handleCheckbox = (args) => {
  media.push(args)
}

const handleQuery = (args) => {
  query = args
}
const handlebutton = () => {
  isClicked = true
  sendResearchQuery()
  isClicked = false
}
const emit = defineEmit(["researchQuery"])

const sendResearchQuery = () => {
  emit("researchQuery", { query, media, isClicked })
}
</script>

<style scoped></style>
