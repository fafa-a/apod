<template>
  <nav text="uppercase md lg:lg" tracking="0.2em" flex="~ row" font="display">
    <router-link
      :to="{ path: '/archive' }"
      m="r-5"
      class="lineHover"
      duration="300"
      >archive</router-link
    >
    <router-link :to="{ path: '/categories' }" class="lineHover" duration="300"
      >categories</router-link
    >
  </nav>
</template>

<script name="TheNavbar" setup></script>
<style>
.lineHover {
  position: relative;
}
.lineHover::before {
  bottom: 0;
  content: "";
  height: 1px;
  width: 100%;
  position: absolute;
  background: #222;
  transform-origin: 100% 0;
  transform: scaleX(0);
  transition: transform 0.4s;
}
.lineHover:hover::before {
  transform-origin: 0 0;
  transform: scaleX(1);
}
</style>
