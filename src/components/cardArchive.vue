<template>
  <router-link
    :to="{
      path: '/ArchiveSearch/' + slug,
      query: {
        title: item.title,
        date: item.date,
        url: item.url,
        hdurl: item.hdurl,
        explanation: item.explanation,
        copyright: item.copyright,
        type: item.media_type,
      },
    }"
  >
    <div
      w="350px"
      h="420px"
      flex="~ col"
      border="solid 1px light-700 rounded-xl"
      m="b-4 x-auto"
    >
      <span v-if="item.media_type == 'video'">
        <img
          :src="'https://i.ytimg.com/vi/' + videoURL + '/hqdefault.jpg'"
          alt="item.title"
          w="full"
          h="300px"
          object="cover center"
          border="rounded-t-xl"
        />
      </span>
      <span v-else>
        <img
          :src="item.url"
          alt="item.title"
          w="full"
          h="300px"
          object="cover center"
          border="rounded-t-xl"
        />
      </span>
      <div font="body" flex="~ col" m="t-2" p="l-2">
        <p text="cool-gray-400">{{ item.date }}</p>
        <h2 text="lg cool-gray-800" m="t-1">{{ item.title }}</h2>
        <span flex="~ row" justify="end" p="r-2">
          <rightArrow />
        </span>
      </div>
    </div>
  </router-link>
</template>
<script name="cardArchive" setup>
import { defineProps } from "@vue/runtime-core"
import rightArrow from "./rightArrow.vue"

const slug = props.item.title.replaceAll(" ", "_")
const itemURL = new URL(props.item.url)
const videoURL = itemURL.pathname.slice(7)

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>
<style></style>
