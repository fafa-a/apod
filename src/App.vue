<template>
  <main>
    <TheHeader />
    <router-view />
  </main>
</template>

<script name="App" setup>
import TheHeader from "./components/TheHeader.vue"
</script>
<style>
@font-face {
  font-family: "NewYork";
  src: url("./assets/fonts/NewYork/NewYork.woff2") format("woff2"),
    url("./assets/fonts/NewYork/NewYork.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Nunito";
  src: url("./assets/fonts/Nunito/Nunito-Regular.woff2") format("woff2"),
    url("./assets/fonts/Nunito/Nunito-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Nunito";
  src: url("./assets/fonts/Nunito/Nunito-SemiBold.woff2") format("woff2"),
    url("./assets/fonts/Nunito/Nunito-SemiBold.woff") format("woff");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Nunito";
  src: url("./assets/fonts/Nunito/Nunito-Bold.woff2") format("woff2"),
    url("./assets/fonts/Nunito/Nunito-Bold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
</style>
