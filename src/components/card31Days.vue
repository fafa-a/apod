<template>
  <router-link
    :to="{
      path: '/the-day/' + slug,
    }"
  >
    <div
      w="full md:200px"
      h="420px"
      flex="~ col"
      border="solid 1px light-700"
      m="b-2 x-1"
    >
      <img
        :src="thumbnail"
        alt="item.title"
        w="full"
        h="380px"
        object="cover center"
        loading="lazy"
      />
      <p font="body" text="cool-gray-400" m="y-auto l-2">
        {{ itemDate }}
      </p>
    </div>
  </router-link>
</template>
<script name="cardArchive" setup>
import { defineProps, onMounted } from "@vue/runtime-core"
import rightArrow from "./rightArrow.vue"
import { formatDate } from "../utils/formatDate"
import { fetchVimeo } from "../composable/useVimeo"

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const { date } = props.item
const itemDate = formatDate(date)

const slug = props.item.title.replaceAll(" ", "_")
const video = props.item.media_type == "video"
const image = props.item.media_type == "image"

ref: Url = ""
ref: hdURL = ""
ref: videoURL = ""
ref: videoHostname = ""
ref: thumbnail = ""

if (video && props.item.id) {
  let itemURL = new URL(props.item.media.url)
  videoURL = itemURL.pathname.slice(7)
  Url = props.item.media.url
} else if (video) {
  let itemURL = new URL(props.item.url)
  videoURL = itemURL.pathname.slice(7)
  Url = props.item.url
}

if (image && props.item.id) {
  Url = props.item.media.url
  hdURL = props.item.media.hdurl
} else if (image) {
  Url = props.item.url
  hdURL = props.item.hdurl
}

const { hostname } = new URL(Url)
videoHostname = hostname

if (videoHostname === "www.youtube.com") {
  thumbnail = "https://i.ytimg.com/vi/" + videoURL + "/hqdefault.jpg"
}
onMounted(async () => {
  if (videoHostname === "player.vimeo.com") {
    const { thumbnail_url } = await fetchVimeo(Url)
    thumbnail = thumbnail_url
  }
})
if (image) {
  thumbnail = Url
}
</script>
<style scoped>
div {
  filter: grayscale(100%);
}
div:hover {
  filter: none;
  transition: filter 400ms;
}
</style>
