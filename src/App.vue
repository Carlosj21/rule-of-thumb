<template>
  <v-app>
    <NavBar></NavBar>
    <v-main>
      <router-view/>
    </v-main>
    <v-container>
      <div class="contentSeparator"></div>
      <Footer></Footer>
    </v-container>
  </v-app>
</template>
<script>
import NavBar from '@/components/common/navBar.vue';
import Footer from '@/components/common/globalFooter.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
};
</script>
