<template>
  <picture>
    <span v-if="type == 'video'" h="auto xl:82vh" flex="~" place="items-center">
      <iframe
        width="960"
        height="540"
        src="url"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </span>

    <span v-else>
      <a :href="hdurl" h="auto xl:82vh" flex="~">
        <img
          :src="url"
          :alt="title"
          max-h="full"
          height="70vh"
          m="x-auto xl:y-auto"
        />
      </a>
    </span>
  </picture>
</template>
<script name="ThePicture" setup>
import { defineProps } from "@vue/runtime-core"
import { useRoute } from "vue-router"

const route = useRoute()
ref: hdurl = ""
ref: url = ""
ref: title = ""
ref: type = ""

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

if (route.name === "the-day") {
  hdurl = props.data.hdurl
  url = props.data.url
  title = props.data.title
  type = props.data.media_type
} else if (props.data.id) {
  hdurl = props.data.media.hdurl
  url = props.data.media.url
  type = props.data.media_type
} else {
  hdurl = props.data.hdurl
  url = props.data.url
  type = props.data.media_type
}
</script>
