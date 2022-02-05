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
import { defineEmits, defineProps, watchEffect } from "@vue/runtime-core"

let query = $ref("")

defineProps({
  inputType: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(["inputQuerySend"])

const sendInputQuery = () => {
  emit("inputQuerySend", query)
}
watchEffect(() => {
  if (query.length > 1) {
    sendInputQuery()
  }
})
</script>

<style lang="scss" scoped></style>
