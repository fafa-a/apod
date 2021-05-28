<template>
  <section container="~" m="x-auto">
    <div v-if="loading">loading...</div>
    <article v-else flex="~ col xl:row" justify="center ">
      <ThePicture :data="apod" />
      <ThePictureDescription :data="data" />
    </article>
  </section>
</template>
<script name="TheSection" setup>
import ThePicture from "../components/ThePicture.vue"
import ThePictureDescription from "../components/ThePictureDescription.vue"
ref: loading = true

import { picsOftheDay } from "../composable/useSupabase"
const { apod, error } = await picsOftheDay()
console.log(apod)
// const fetchData = async () => {
//   return apod || console.log(error)
// }
</script>
