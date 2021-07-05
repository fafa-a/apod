<template>
  <section container="~" m="x-auto y-3" min-h="screen" flex="~ row">
    <div w="25vw" flex="~ col" m="r-2">
      <SearchSidebar @searchQuery="handleSearchQuery" />
    </div>
    <div w="75vw" flex="~ row wrap">
      <SearchThumbnail
        v-for="(item, index) in results"
        :key="index"
        :data="item"
      />

      <div
        v-if="results.length > 0"
        w="full"
        h="50px"
        flex="~ row"
        justify="center"
      >
        <img
          src="../assets/icon/skip-back.svg"
          alt=""
          @click="fetchLink(previousPage)"
        />
        <img
          src="../assets/icon/skip-forward.svg"
          alt=""
          @click="fetchLink(nextPage)"
        />
      </div>
    </div>
  </section>
</template>
<script name="Categories" setup>
import { onMounted } from "@vue/runtime-dom"
import axios from "redaxios"
import SearchSidebar from "../components/SearchSidebar.vue"
import SearchThumbnail from "../components/SearchThumbnail.vue"

ref: results = {}
ref: query = ""
ref: media = []
ref: isClicked = Boolean
ref: initialQueryUrl =
  import.meta.env.VITE_NASA_RESEARCH_BASE_URL + `/search?q=${query}`
ref: previousPage = ""
ref: nextPage = ""
ref: axiosData = {}

const handleSearchQuery = (args) => {
  query = args.query
  media.push(args.media)
  isClicked = args.isClicked
  search()
}

const search = async () => {
  const res = axios.get(
    import.meta.env.VITE_NASA_RESEARCH_BASE_URL + `/search?q=${query}`
  )
  const { data } = await res
  axiosData = data
  results = data.collection.items
}

const refreshFetchUrl = () => {
  nextPage = axiosData.collection.links[0].href
  previousPage = initialQueryUrl
}
onMounted(async () => {
  await handleSearchQuery()
  refreshFetchUrl()
})
</script>
