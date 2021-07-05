<template>
  <div><img :src="href" alt="" w="auto" /></div>
</template>

<script name="ResultDetails" setup>
import { useRoute } from "vue-router"
const route = useRoute()
const { href } = route.query
</script>

<style lang="css" scoped></style>
