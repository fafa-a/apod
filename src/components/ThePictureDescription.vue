<template>
  <div
    flex="~ col"
    w="lg:35vw"
    max-h="lg:1/3"
    m="b-2rem t-2rem sm:x-3rem lg:x-0 lg:t-0 xl:y-auto "
    border="lg:solid 1px light-700"
    p="x-1rem xl:y-3rem xl:x-3rem"
    font="body"
  >
    <h2 text="h3 lg:h2">
      {{ title }}
    </h2>
    <span m="t-2rem">{{ today }}</span>
    <p m="t-1.5rem">
      {{ explanation }}
    </p>
    <p m="t-1.5rem" text="sm">Image Credit & Copyright: {{ copyright }}</p>
    <p text="sm">
      Authors & editors:<a
        href="https://www.mtu.edu/physics/department/faculty/nemiroff/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Robert Nemiroff (MTU)</a
      >
      &
      <a
        href="https://apod.nasa.gov/htmltest/jbonnell/www/bonnell.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jerry Bonnell (UMCP)</a
      >
    </p>
    <span flex="~" text="sm">
      <p p="t-0.7">See original article</p>
      <a
        href="https://apod.nasa.gov/apod/astropix.html"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
    </span>
  </div>
</template>
<script name="ThePictureDescription" setup>
import { defineProps } from "vue"
import { useRoute } from "vue-router"
import { formatDate } from "../utils/formatDate"

const route = useRoute()
ref: title = ""
ref: explanation = ""
ref: copyright = ""

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

title = props.data.title
explanation = props.data.explanation
copyright = props.data.copyright

const { date } = props.data
const today = formatDate(date)
</script>
