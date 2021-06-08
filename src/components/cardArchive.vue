<template>
  <router-link
    :to="{
      path: '/ArchiveSearch/' + slug,
      query: {
        title: item.title,
        date: item.date,
        url: Url,
        hdurl: hdURL,
        explanation: item.explanation,
        copyright: item.copyright,
        type: item.media_type,
      },
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
        :src="
          video ? 'https://i.ytimg.com/vi/' + videoURL + '/hqdefault.jpg' : Url
        "
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
import { defineProps } from "@vue/runtime-core"
import rightArrow from "./rightArrow.vue"
import { formatDate } from "../utils/formatDate"

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

if (video && props.item.id) {
  videoURL = props.item.media.urlEmbed
  Url = props.item.media.url
} else if (video) {
  const itemURL = new URL(props.item.url)
  videoURL = itemURL.pathname.slice(7)
}
if (image && props.item.id) {
  Url = props.item.media.url
  hdURL = props.item.media.hdurl
} else if (image) {
  Url = props.item.url
  hdURL = props.item.hdurl
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
