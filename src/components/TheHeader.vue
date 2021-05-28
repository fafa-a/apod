<template>
  <header
    flex="~"
    justify="between"
    align="items-center"
    h="12vh"
    m="x-1rem md:x-2rem lg:x-3rem"
  >
    <TheTitle title="astronomy picture of the day" />
    <span v-if="L">
      <TheNavbar />
    </span>
    <span v-else>
      <TheMenuMobile />
    </span>
  </header>
</template>
<script name="TheHeader" setup>
import TheTitle from "./TheTitle.vue"
import TheNavbar from "./TheNavbar.vue"
import TheMenuMobile from "./TheMenuIcon.vue"

import { useBreakpoint } from "vue-composable"

const { L } = useBreakpoint({
  L: 769,
})
</script>
