<template>
  <nav text="uppercase md lg:lg" tracking="0.2em" flex="~ row" font="display">
    <router-link
      :to="{ path: '/archive' }"
      m="r-5"
      class="hover:text-light-900"
      duration="300"
      >archive</router-link
    >
    <router-link
      :to="{ path: '/categories' }"
      class="hover:text-light-900"
      duration="300"
      >categories</router-link
    >
  </nav>
</template>

<script name="TheNavbar" setup></script>
