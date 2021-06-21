<template>
  <span>
    <input type="checkbox" :id="value" :value="value" v-model="boxValue" />
    <label :for="value" m="l-1">{{ value }}</label>
  </span>
</template>

<script setup>
import {
  defineProps,
  defineEmit,
  onUpdated,
  watch,
  watchEffect,
} from "@vue/runtime-dom"

ref: boxValue = []

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
})

const emit = defineEmit(["boxValueSend"])

const sendBoxValue = () => {
  emit("boxValueSend", boxValue)
}

watchEffect(() => {
  if (boxValue[0] === props.value) {
    sendBoxValue()
  }
})
</script>

<style scoped></style>
