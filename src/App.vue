<template>
  <div class="bg-dark">
    <div class="container">
      <Header />
      <div class="container" style="height: 2000px">
        <h1>Welcome to Squadron RARE!</h1>
        <p>
          We are a competitive, battle-focused group of players in the game War
          Thunder.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you would like to join Squadron RARE or have any questions, you can
          contact us on Discord:
        </p>
        <p>
          <a :href="discordLink" target="_blank">Join our server</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Header from "./components/Header.vue";
export default {
  name: "SquadronRarePage",
  components: {Header},
  setup() {
    const discordLink = ref("https://discord.gg/Ezw7ybbH");

    return {
      discordLink,
    };
  },
};
</script>

<style>
p{
  color: white;
}
</style>
