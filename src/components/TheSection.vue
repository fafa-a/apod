<template>
  <section container="~" m="x-auto">
    <div v-if="loading" m="x-auto">
      <loader />
    </div>
    <article v-else flex="~ col xl:row" justify="center ">
      <ThePicture :data="dataApod[0]" />
      <ThePictureDescription :data="dataApod[0]" />
    </article>
  </section>
</template>
<script name="TheSection" setup>
import ThePicture from "./ThePicture.vue"
import ThePictureDescription from "./ThePictureDescription.vue"
import loader from "./loader.vue"
import { onMounted } from "@vue/runtime-core"
import { picsOftheDay } from "../composable/useSupabase"
import { fetchNasa } from "../composable/useNasa"
ref: loading = true
ref: dataApod = {}

onMounted(async () => {
  try {
    const { apod } = await picsOftheDay()
    dataApod = apod
    if (dataApod.length == 0) {
      const data = await fetchNasa()
      dataApod.push(data)
    }
    loading = false
  } catch (error) {
    console.error(error)
  }
})
</script>
