<template>
  <div class="home">
    <NewCandidate></NewCandidate>
    <div v-for="(candidate, i) in candidates" :key="i">
      <VotingCard :candidate="candidate"/>
    </div>
  </div>
</template>

<script>
import NewCandidate from '@/components/home/newCandidate.vue';
import VotingCard from '@/components/common/VotingCard.vue';
import { mapActions, mapState } from 'vuex';
import { homeTypes } from '@/store/modules/home/homeTypes';

export default {
  name: 'Home',
  components: {
    VotingCard,
    NewCandidate,
  },
  computed: {
    ...mapState(homeTypes.PATH, [
      'candidates',
    ]),
  },
  methods: {
    ...mapActions(homeTypes.PATH, {
      getCandidates: homeTypes.actions.GET_CANDIDATES,
    }),
  },
  mounted() {
    this.getCandidates();
  },
};
</script>
