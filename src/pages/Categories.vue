<template>
  <section container="~" m="x-auto y-3" min-h="screen" flex="~ row">
    <div w="33vw" flex="~ col" m="r-2">
      <ResearchSidebar @researchQuery="handleResearchQuery" />
    </div>
    <div w="77vw" flex="~ row wrap">
      <CategorieResearchResult
        v-for="(item, index) in results"
        :key="index"
        :data="item"
      />
    </div>
  </section>
</template>
<script name="Categories" setup>
import axios from "redaxios"
import ResearchSidebar from "../components/ResearchSidebar.vue"
import CategorieResearchResult from "../components/CategorieResearchResult.vue"

ref: results = {}
ref: query = ""
ref: media = []
ref: isClicked = Boolean

const handleResearchQuery = (args) => {
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

  results = data.collection.items
}
</script>
