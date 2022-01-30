<template>
  <router-link
    :to="{
      path: `/search-details/${slug}`,
      query: {
        href: urlOrig,
        index: props.index,
      },
    }"
    w="255px"
    h="380px"
    m="b-2 x-0.5"
  >
    <img
      :src="type === 'audio' ? 'src/assets/icon/volume-2.svg' : urlThumbnail"
      :alt="data.data[0].title"
      w="full"
      h="340px"
      object="fill"
      loading="lazy"
    />
    <div h="40px" flex="~ col" justify="around">
      <p text="sm cool-gray-400" font="medium">
        {{ data.data[0].title }}
      </p>
    </div>
  </router-link>
</template>

<script setup>
import {
  computed,
  defineEmit,
  defineProps,
  onMounted,
  onUpdated,
  provide,
} from "@vue/runtime-dom"
import axios from "redaxios"

ref: type = ""
ref: axiosRes = {}
ref: urlArray = {}
ref: urlThumbnail = ""
ref: urlOrig = ""
ref: thumbnailData = {}

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  dataSlider: {
    type: Array,
  },
  index: {
    type: Number,
  },
})
const emit = defineEmit(["sendUrlOrig", "sendIndex"])

const slug = props.data.data[0].title.replaceAll(" ", "_")

const findHref = async () => {
  const res = axios.get(props.data.href)
  const { data } = await res
  axiosRes = data
}
const findThumbnail = () => {
  urlThumbnail = axiosRes.filter((url) => url.includes("thumb.jpg"))
  urlOrig = axiosRes.filter((url) => url.includes("orig.jpg")) || null
}
const setThumbnailData = () => {
  thumbnailData.title = props.data.data[0].title
  for (const value of urlOrig) {
    thumbnailData.url = value
  }
}

onMounted(async () => {
  await findHref()
  urlArray = axiosRes[0]
  findThumbnail()
  setThumbnailData()
  emit("sendUrlOrig", [thumbnailData])
  emit("sendIndex", props.index)
  type = props.data.data[0].media_type
})
</script>

<style lang="scss" scoped></style>
