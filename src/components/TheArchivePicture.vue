<template>
  <picture>
    <div
      v-if="dataSearch.isHovered"
      h="76vh"
      flex="~"
      justify="center"
      items="center"
    >
      <img
        :src="dataSearch.props?.url"
        :alt="dataSearch.props?.title"
        max-h="full"
      />
    </div>
    <div v-else>
      <div h="76vh" flex="~" justify="center" items="center">
        <img :src="data?.url" :alt="data?.title" max-h="full" />
      </div>
    </div>
  </picture>
</template>
<script name="TheArchivePicture" setup>
import { defineProps } from "@vue/runtime-core"
// import { useAxios } from "@vue-composable/axios"
// const { exec, data } = useAxios()

// try {
//   exec({
//     method: "GET",
//     url: import.meta.env.VITE_NASA_BASE_URL,
//   })
// } catch (error) {
//   console.error(error)
// }
// defineProps({
//   dataSearch: {
//     type: Object,
//     required: true,
//   },
// })
</script>
