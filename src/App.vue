<template>
  <v-app>
    <NabBar></NabBar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
import NabBar from '@/components/common/navBar.vue';

export default {
  name: 'App',
  components: {
    NabBar,
  },
};
</script>
