<script>
import { defineComponent } from "@vue/runtime-core"
import icon from "../assets/rare-icon.svg"
import {useRouter} from "vue-router"
export default  defineComponent({
name:"Header",
setup() {
const router = useRouter()

async function livestreams() {
  await router.push("/livestreams")
}
  return  {
    router,
    icon,
    livestreams
  }
}
})
</script>

<template>
<nav class="navbar navbar-dark bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img :src="icon" alt="" width="30" height="24" class="d-inline-block align-text-top">
      RARE
    </a>
    <a class="nav-link">Home</a>
    <a class="nav-link">About</a>
    <a class="nav-link">Players</a>
    <a class="nav-link">News</a>
    <a class="nav-link" href="#" @click.prevent="livestreams">Livestreams</a>
  </div>
</nav>
</template>

<style scoped>
</style>
