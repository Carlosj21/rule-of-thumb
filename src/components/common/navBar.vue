<template>
  <v-app-bar
    app
    color="transparent"
  >
    <v-tabs right>
      <v-tab @click="$router.push('/')">
        <span>Home</span>
      </v-tab>
      <v-tab @click="$router.push('/trials')">
        <span>Past Trials</span>
      </v-tab>
      <v-tab @click="$router.push('/about')">
        <span>How It Works</span>
      </v-tab>
      <v-tab @click="$router.push('/login')">
        <span>Log In / Sing Up</span>
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  name: 'navBar',
};
</script>
