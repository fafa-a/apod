<template>
  <section container="~" m="x-auto">
    <div v-if="loading">loading...</div>
    <article v-else flex="~ col xl:row" justify="center ">
      <ThePicture :data="data[0]" />
      <ThePictureDescription :data="data[0]" />
    </article>
  </section>
</template>
<script name="TheSection" setup>
import ThePicture from "./ThePicture.vue"
import ThePictureDescription from "./ThePictureDescription.vue"
ref: loading = true
ref: data = {}
import { onMounted } from "@vue/runtime-core"
import { picsOftheDay } from "../composable/useSupabase"
onMounted(async () => {
  const { apod } = await picsOftheDay()
  data = apod
  loading = false
})
</script>
