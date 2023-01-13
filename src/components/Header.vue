<script>
import { defineComponent } from "@vue/runtime-core"

export default  defineComponent({
name:"Header",
setup() {
  
}
})
</script>

<template>
<nav class="navbar navbar-dark bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../assets/rare-icon.PNG" alt="" width="30" height="24" class="d-inline-block align-text-top">
      RARE
    </a>
    <a class="nav-link" href="about">Home</a>
    <a class="nav-link" href="about">About</a>
    <a class="nav-link" href="players">Players</a>
    <a class="nav-link" href="news">News</a>
    <a class="nav-link" href="livestreams">Livestreams</a>
  </div>
</nav>
</template>

<style scoped>
</style>
