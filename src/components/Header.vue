<script>
import { defineComponent } from "@vue/runtime-core"
import icon from "../assets/rare-icon.svg"
import { useRouter } from "vue-router"
export default defineComponent({
  name: "Header",
  setup() {
    const router = useRouter()

    async function direct(page) {
      await router.push(page)
    }
    return {
      router,
      icon,
      direct
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
      <a class="nav-link" @click.prevent="direct('/')">Home</a>
      <a class="nav-link" @click.prevent="direct('/about')">About</a>
      <a class="nav-link" @click.prevent="direct('/players')">Players</a>
      <a class="nav-link" @click.prevent="direct('/news')">News</a>
      <a class="nav-link" href="#" @click.prevent="direct('/livestreams')">Livestreams</a>
    </div>
  </nav>
</template>

<style scoped>

</style>
