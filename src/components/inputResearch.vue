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
      bg="red-500"
      border="rounded lg"
      font="medium sans"
      p="x-1"
      @click="search"
    >
      Search
    </button>
    {{ keywords }}
    <img
      src="http://images-assets.nasa.gov/image/PIA01973/PIA01973~thumb.jpg"
      alt=""
      srcset=""
    />
  </div>
</template>

<script name="inputResearch" setup>
import axios from "redaxios"
ref: query = ""
ref: result = {}
ref: keywords = []

const search = async () => {
  const res = axios.get(
    import.meta.env.VITE_NASA_RESEARCH_BASE_URL + `/search?q=${query}`
  )
  const { data } = await res
  result = data
  const { items } = data.collection
  
  for (const item of items) {
    keywords.push(item.data[0].keywords)
  }

}
</script>

<style scoped></style>
