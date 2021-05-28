<template>
  <router-link
    to="/futureComponent"
    @mouseover="hover"
    @mouseleave="isHovered = !isHovered"
  >
    <li border="1 solid light-500" p="y-1" w="30vw" font="body">
      <span p="x-3">{{ item.date }}</span>
      <span>{{ item.title }} </span>
    </li>
  </router-link>
</template>
<script name="listItems" setup>
import { defineProps, defineEmit } from "@vue/runtime-core"

ref: isHovered = false
const emit = defineEmit(["isHovered"])

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const hover = () => {
  isHovered = true
  emit("isHovered", isHovered, props.item)
}
</script>
<style></style>
