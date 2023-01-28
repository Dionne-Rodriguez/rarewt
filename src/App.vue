<template>
  <div class="bg-dark">
    <div class="container">
      <Header />
      <div class="container" style="height: 2000px">
        <div class="container">
          <img
            :src="bannerImg"
            class="img-fluid pt-3"
            style="width: inherit"
            alt="banner"
          />
        </div>
        <div class="container"> 
          <h1 class="pt-5">Welcome to RARE</h1>
          <p class="pt-2">
            We are a competitive squadron battle focused group of players in the game of
            War Thunder.
          </p>
          <iframe src="https://player.twitch.tv/?channel=goflexdickie&parent=rarewt.com" frameborder="0" allowfullscreen="true" scrolling="no" height="400" width="620"></iframe>

          <h2 class="pt-5">Contact Us</h2>
          <p class="pt-2">
            If you would like to join Squadron RARE or have any questions, you
            can contact us on Discord:
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import bannerImg from "./assets/COPEY_BANNER.svg"
import Header from "./components/Header.vue";
export default {
  name: "SquadronRarePage",
  components: { Header },
  setup() {
    const discordLink = ref("https://discord.gg/Ezw7ybbH");

    return {
      bannerImg,
      discordLink,
    };
  },
};
</script>

<style>
p, h1, h2, h3, a, li {
  color: white;
}
</style>
