<template>
  <div class="bg-dark mh-100" style="height: 2500px">
    <div class="container">
      <Header />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import { RouterView } from "vue-router";

</script>

<style>
p,
h1,
h2,
h3,
a,
li {
  color: white;
}
</style>
