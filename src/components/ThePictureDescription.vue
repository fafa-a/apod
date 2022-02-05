<template>
  <div
    flex="~ col"
    w="xl:35vw"
    h="max-content"
    class="height-fit-content"
    m="b-2rem t-2rem sm:x-3rem xl:x-0"
    border="xl:solid 1px light-700"
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
        class="hover:text-cool-gray-400"
      >
        Robert Nemiroff (MTU)</a
      >
      &
      <a
        href="https://apod.nasa.gov/htmltest/jbonnell/www/bonnell.html"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-cool-gray-400"
      >
        Jerry Bonnell (UMCP)</a
      >
    </p>
    <span flex="~" text="sm">
      <a
        href="https://apod.nasa.gov/apod/astropix.html"
        target="_blank"
        rel="noopener noreferrer"
        class="right-arrow text-sm"
        flex="~ row"
        align="items-center"
      >
        See original article
      </a>
    </span>
  </div>
</template>
<script name="ThePictureDescription" setup>
import { useRoute } from "vue-router"
import { formatDate } from "../utils/formatDate"

const route = useRoute()
let title = $ref("")
let explanation = $ref("")
let copyright = $ref("")

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
<style scoped>
.right-arrow::after {
  content: "";
  visibility: hidden;
  background: url("../assets/icon/arrow-up-right.svg");
  width: 16px;
  height: 16px;
}
.right-arrow:hover::after {
  visibility: visible;
}
</style>
