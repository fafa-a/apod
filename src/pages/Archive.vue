<template>
  <div h="screen">
    <h1>Archive</h1>

    <!-- <div container="~" flex="~ row" m="x-auto" justify="center">
      <div v-if="loading">Loading...</div>
      <ul v-else>
        <listItems
          v-for="item of data"
          :key="item.index"
          :item="item"
          @is-hovered="showImg"
        />
      </ul>
      <span m="x-auto">
        <TheArchivePicture :dataSearch="imgState" />
      </span>
    </div> -->
  </div>
</template>
<script name="Archive" setup>
import listItems from "../components/listItems.vue"
import TheArchivePicture from "../components/TheArchivePicture.vue"

// ref: startDate = "2021-05-15"
// ref: endDate = "2021-05-18"
// ref: imgState = {}

// const { exec, data, loading } = useAxios()

// try {
//   exec({
//     method: "GET",
//     url:
//       import.meta.env.VITE_NASA_BASE_URL +
//       "&start_date=" +
//       startDate +
//       "&end_date=" +
//       endDate,
//   })
// } catch (error) {
//   console.error(error)
// }

// const showImg = (isHovered, props) => {
//   imgState = { isHovered, props }
// }
</script>
<style></style>
