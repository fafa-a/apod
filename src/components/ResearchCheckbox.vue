<template>
  <input type="checkbox" :id="value" :value="value" v-model="boxValue" />
  <label :for="value">{{ value }}</label>
</template>

<script setup>
import { defineProps, defineEmit, onUpdated } from "@vue/runtime-dom"

defineProps({
  value: {
    type: String,
    required: true,
  },
})

ref: boxValue = []

const emit = defineEmit(["boxValueSend"])

const sendBoxValue = (args) => {
  emit("boxValueSend", args)
}

onUpdated(() => {
  sendBoxValue(boxValue)
})
</script>

<style scoped></style>
