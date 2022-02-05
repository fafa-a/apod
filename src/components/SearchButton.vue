<template>
  <button
    text="white capitalize"
    bg="dark-50"
    border="rounded lg"
    font="body"
    p="x-1"
    @click="buttonClicked"
  >
    {{ buttonText }}
  </button>
</template>

<script setup>
import { defineEmits, defineProps } from "@vue/runtime-core"

defineProps({
  buttonText: {
    type: String,
    required: true,
  },
})
const emit = defineEmits(["isClicked"])
const buttonClicked = () => {
  emit("isClicked")
}
</script>

<style scoped></style>
