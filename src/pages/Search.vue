<template>
  <section container="~" m="x-auto y-3" min-h="screen" flex="~ row">
    <div w="25vw" flex="~ col" m="r-2">
      <SearchSidebar @searchQuery="handleSearchQuery" />
    </div>
    <div w="75vw" flex="~ row wrap">
      <SearchThumbnail
        v-for="item in results"
        :key="item.data[0].nasa_id"
        :data="item"
      />

      <div
        v-if="results.length > 0"
        w="full"
        h="50px"
        flex="~ row"
        justify="center"
      >
        <button>
          <img
            src="../assets/icon/skip-back.svg"
            alt=""
            @click="search(previousPage)"
          />
        </button>
        <button>
          <img
            src="../assets/icon/skip-forward.svg"
            alt=""
            @click="search(nextPage)"
          />
        </button>
      </div>
    </div>
  </section>
</template>
<script name="Categories" setup>
import {
  computed,
  onMounted,
  onUpdated,
  watch,
  watchEffect,
} from "@vue/runtime-dom"
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
  search(import.meta.env.VITE_NASA_RESEARCH_BASE_URL + `/search?q=${query}`)
}

const search = async (url) => {
  const res = axios.get(url)
  const { data } = await res
  axiosData = data
  results = data.collection.items
}

const refreshFetchUrl = () => {
  if (axiosData.collection.links.length > 1) {
    previousPage = axiosData.collection.links[0].href
    nextPage = axiosData.collection.links[1].href
  } else {
    previousPage = initialQueryUrl
    nextPage = axiosData.collection.links[0].href
  }
}

onUpdated(() => {
  refreshFetchUrl()
})

// watch(
//   () => results,
//   (results, prevResults) => {

//     console.log({ results })
//     console.log({ prevResults })
//   }
// )
</script>
