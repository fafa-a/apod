<template>
  <div m="y-3">
    <input
      type="text"
      border="1 solid gray rounded lg"
      bg="white opacity-90"
      w="14rem"
      v-model="query"
      @keydown.enter="search"
    />
    <button
      text="white"
      bg="dark-50"
      border="rounded lg"
      font="medium sans"
      p="x-1"
      @click="search"
    >
      Search
    </button>
    <input
      type="checkbox"
      id="image"
      value="image"
      v-model="mediaType"
      checked
    />
    <label for="image">Images</label>
    <input
      type="checkbox"
      id="video"
      value="video"
      v-model="mediaType"
      checked
    />
    <label for="video">Video</label>
    <input
      type="checkbox"
      id="audio"
      value="audio"
      v-model="mediaType"
      checked
    />
    <label for="audio">Audio</label>
    {{ mediaType }}
  </div>
</template>

<script name="inputResearch" setup>
import { watchEffect } from "@vue/runtime-dom"
import axios from "redaxios"
ref: query = ""
ref: keywords = []
ref: key = []
ref: tag = []
ref: mediaType = []
ref: media = ""
ref: start = 1920
ref: end = 2021
watchEffect(() => {
  console.log(mediaType)
})

const search = async () => {
  media = mediaType.join(",")
  console.log(media)
  return
  const res = axios.get(
    import.meta.env.VITE_NASA_RESEARCH_BASE_URL +
      `/search?q=${query}&page=1&media=${media}&yearStart=${start}&yearEnd=${end}`
  )
  const { data } = await res
  const { items } = data.collection

  for (const item of items) {
    keywords.push(item.data[0].keywords)
  }

  keywords.forEach((el) => {
    const k = el.filter((key) => key.toLowerCase() !== query.toLowerCase())
    key.push(k)
  })

  const keyMerged = key.reduce((a, b) => a.concat(b), [])
  const uniqueKeyword = [...new Set(keyMerged)]
  tag = uniqueKeyword
}

if (mediaType.length > 0) {
  for (item of mediaType) {
    console.log(item)
  }
}
</script>

<style scoped></style>
