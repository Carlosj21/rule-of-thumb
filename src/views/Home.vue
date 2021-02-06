<template>
  <div class="home">
    <a href="#" @click="getCandidates">CLICK</a>
    <VotingCard/>
  </div>
</template>

<script>
import VotingCard from '@/components/common/VotingCard.vue';
import { mapActions } from 'vuex';
import { homeTypes } from '@/store/modules/home/homeTypes';

export default {
  name: 'Home',
  components: {
    VotingCard,
  },
  methods: {
    ...mapActions(homeTypes.PATH, {
      getCandidates: homeTypes.actions.GET_CANDIDATES,
    }),
  },
  mounted() {
  },
};
</script>
