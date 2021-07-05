<template>
  <div w="255px" h="380px" m="b-2 x-0.5">
    <img
      :src="urlThumbnail"
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
  </div>
</template>

<script setup>
import { defineProps, onMounted } from "@vue/runtime-dom"
import axios from "redaxios"

ref: type = ""
ref: axiosRes = {}
ref: urlArray = {}
ref: urlThumbnail = ""

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})
const findHref = async () => {
  const res = axios.get(props.data.href)
  const { data } = await res
  axiosRes = data
}
const findThumbnail = () => {
  urlThumbnail = axiosRes.filter((url) => url.includes("thumb.jpg"))
}

onMounted(async () => {
  await findHref()
  urlArray = axiosRes[0]
  findThumbnail()
  type = props.data.data[0].media_type
})
</script>

<style lang="scss" scoped></style>
