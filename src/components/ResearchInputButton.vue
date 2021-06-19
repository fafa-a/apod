<template>
  <div m="y-3">
    <input
      :type="inputType"
      border="1 solid gray rounded lg"
      bg="white opacity-90"
      w="14rem"
      v-model="query"
      @keydown.enter="search"
    />
    <button
      text="white capitalize"
      bg="dark-50"
      border="rounded lg"
      font="body"
      p="x-1"
      @click="search"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
import { defineEmit, defineProps } from "@vue/runtime-core"

ref: query = ""

defineProps({
  buttonText: {
    type: String,
    required: true,
  },
  inputType: {
    type: String,
    required: true,
  },
})

const emit = defineEmit(["inputQuerySend"])

const sendInputQuery = (query) => {
  emit("inputQuerySend", query)
}
</script>

<style lang="scss" scoped></style>
