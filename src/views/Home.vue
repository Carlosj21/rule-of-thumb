<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeContent></HomeContent>
  </div>
</template>

<script>
import HomeHeader from '@/components/home/homeHeader.vue';
import HomeContent from '@/components/home/homeContent.vue';
import { mapActions } from 'vuex';
import { homeTypes } from '@/store/modules/home/homeTypes';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeContent,
  },
  methods: {
    ...mapActions(homeTypes.PATH, {
      getData: homeTypes.actions.GET_DATA,
    }),
  },
  mounted() {
    this.getData();
  },
};
</script>
