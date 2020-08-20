<template>
  <div id="app">
    <router-link :to="{ name: 'home' }">HOME</router-link>
    <router-link :to="{ name: 'tela2' }">Tela 2</router-link>
    <router-link :to="{ name: 'tela3' }">Tela 3</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
