<template>
  <div id="app">
    <div class="navBar">
      <router-link to="/">Home</router-link>
      <router-link to="/trials">Past Trials</router-link>
      <router-link to="/about">How It Works</router-link>
      <router-link to="/login">Log In / Sing Up</router-link>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
