<template>
  <div class="home">
    <a href="#" @click="che">CLICK</a>
    <VotingCard/>
  </div>
</template>

<script>
import VotingCard from '@/components/common/VotingCard.vue';
import { homeTypes } from '@/store/modules/home/homeTypes';
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    VotingCard,
  },
  methods: {
    ...mapActions(homeTypes.PATH, {
      getCandidates: homeTypes.actions.GET_CANDIDATES,
    }),
    che() {
      this.getCandidates();
    },
  },
  mounted() {
  },
};
</script>
