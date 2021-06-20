<template>
  <input
    :type="inputType"
    border="1 solid gray rounded lg"
    bg="white opacity-90"
    w="full"
    v-model.trim="query"
    lazy
    @keydown.enter="sendInputQuery"
  />
</template>

<script setup>
import { defineEmit, defineProps, onUpdated } from "@vue/runtime-core"

ref: query = ""

defineProps({
  inputType: {
    type: String,
    required: true,
  },
})

const emit = defineEmit(["inputQuerySend"])

const sendInputQuery = () => {
  emit("inputQuerySend", query)
}

onUpdated(() => {
  sendInputQuery()
})
</script>

<style lang="scss" scoped></style>
