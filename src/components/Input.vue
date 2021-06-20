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
      font="body"
      p="x-1"
      @click="search"
    >
      Search
    </button>

    {{ result }}
  </div>
</template>

<script name="inputResearch" setup>
import axios from "redaxios"
import { watchEffect } from "@vue/runtime-dom"

ref: query = ""
ref: result = {}
ref: keywords = []
ref: key = []
ref: tag = []

ref: start = 1920
ref: end = 2021
ref: slugs = ""

const insertSlug = () => {
  if (media) {
    slugs = `&media_type=${media}`
  }
}

const search = async () => {
  media = mediaType.join(",")
  insertSlug()
  const res = axios.get(
    import.meta.env.VITE_NASA_RESEARCH_BASE_URL + `/search?q=${query}+${slugs}`
  )
  const { data } = await res
  result = data
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
