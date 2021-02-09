<template>
  <v-app-bar
    app
    flat
    absolute
    color="transparent"
    class="navBar white--text"
  >
    <v-app-bar-title>Rule of Thumb</v-app-bar-title>
    <v-tabs right>
      <v-tab @click="redirectTo('/')">
        <span>Home</span>
      </v-tab>
      <v-tab @click="redirectTo('/trials')">
        <span>Past Trials</span>
      </v-tab>
      <v-tab @click="redirectTo('/about')">
        <span>How It Works</span>
      </v-tab>
      <v-tab @click="redirectTo('/login')">
        <span>Log In / Sing Up</span>
      </v-tab>
    </v-tabs>
    <v-btn
      text
      icon
      @click="searchCandidates"
    >
      <v-icon large>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'navBar',
  methods: {
    searchCandidates() {
      console.log('click');
    },
    redirectTo(route) {
      this.$router.push(route)
        .catch(() => {
        });
    },
  },
};
</script>
