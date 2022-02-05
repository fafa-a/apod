<template>
  <picture>
    <span v-if="type == 'video'" h="auto xl:82vh" flex="~" place="items-center">
      <iframe
        width="960"
        height="540"
        :src="url"
        title="Video player"
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
import { useRoute } from "vue-router"
import { onMounted } from "@vue/runtime-core"

const route = useRoute()
let hdurl = $ref("")
let url = $ref("")
let title = $ref("")
let type = $ref("")

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
onMounted(() => {
  hdurl = hdurl.slice(0, 45) + "f_auto,q_auto,w_auto/" + hdurl.slice(45)
  url = url.slice(0, 45) + "f_auto,q_auto,w_auto/" + url.slice(45)
})
</script>
