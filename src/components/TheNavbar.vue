<template>
  <nav
    text="uppercase md lg:lg"
    tracking="0.2em"
    flex="~ col md:row"
    font="display"
    items="center"
  >
    <router-link :to="{ path: '/last-31-days' }" m="r-5" class="lineHover"
      >last 31 days</router-link
    >
    <router-link
      :to="{ path: '/search' }"
      border="solid 1 dark-50"
      class="fill"
      w="200px"
      h="50px"
    >
      <span class="on-fill" p="y-auto">search</span>
    </router-link>
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
  transition: transform 400ms;
}
.lineHover:hover::before {
  transform-origin: 0 0;
  transform: scaleX(1);
}

.fill {
  position: relative;
}

.fill:before {
  bottom: 0;
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  background: #222;
  transition: transform 400ms;
  transform-origin: 100% 0;
  transform: scaleX(0);
}
.fill:hover::before {
  transform-origin: 0 0;
  transform: scaleX(1);
}
.on-fill {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: "";
  text-align: center;
  line-height: 50px;
}
.on-fill:hover {
  color: white;
}
</style>
