<template>
  <footer h="lg:5vh">
    <nav
      font="body"
      text="uppercase xs cool-gray-300"
      flex="~ col md:row"
      justify="md:between"
      h="full"
      m="y-1rem md:x-3rem lg:y-0"
      p="x-1rem"
      align="md:items-center"
    >
      <div flex="~ col">
        <a
          href="https://api.nasa.gov/"
          target="_blank"
          rel="noopener"
          class="lg:right-arrow-nasa hover:text-cool-gray-400"
          flex="~ row"
          align="items-center"
          >nasa api
        </a>

        <a
          href="https://www.nasa.gov/"
          target="_blank"
          rel="noopener"
          class="lg:right-arrow-nasa hover:text-cool-gray-400"
          flex="~ row"
          align="items-center"
          >nasa website</a
        >
      </div>
      <div flex="~ col">
        <a
          href="https://github.com/fafa-a"
          target="_blank"
          rel="noopener"
          class="lg:right-arrow hover:text-cool-gray-400"
          flex="~ row"
          align="items-center"
          >github</a
        >
        <a
          href="https://twitter.com/FabienPuech"
          target="_blank"
          rel="noopener"
          class="lg:right-arrow hover:text-cool-gray-400"
          flex="~ row"
          align="items-center"
          >twitter</a
        >
      </div>
    </nav>
  </footer>
</template>
<script name="TheFooter" setup></script>
<style scoped>
.right-arrow-nasa::after {
  content: "";
  visibility: hidden;
  background: url("../assets/icon/arrow-up-right.svg");
  width: 16px;
  height: 16px;
}
.right-arrow-nasa:hover::after {
  visibility: visible;
  color: red;
}
.right-arrow::before {
  content: "";
  visibility: hidden;
  background: url("../assets/icon/arrow-up-right.svg");
  width: 16px;
  height: 16px;
}
.right-arrow:hover::before {
  visibility: visible;
  color: red;
}
</style>
