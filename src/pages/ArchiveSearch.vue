<template>
  <section container="~" m="x-auto">
    <article flex="~ col xl:row" justify="center">
      <ThePicture :data="dataPicture" />
      <ThePictureDescription :data="dataDescription" />
    </article>
  </section>
</template>
<script name="ArchiveSearch" setup>
import { useRoute } from "vue-router"
import ThePicture from "../components/ThePicture.vue"
import ThePictureDescription from "../components/ThePictureDescription.vue"

const route = useRoute()
const title = route.query.title
const date = route.query.date
const explanation = route.query.explanation
const copyright = route.query.copyright
const url = route.query.url
const hdurl = route.query.hdurl
const type = route.query.type
const dataPicture = { hdurl, url, title, type }
const dataDescription = { url, title, date, explanation, copyright }
</script>
