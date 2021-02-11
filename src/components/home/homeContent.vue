<template>
  <v-container fill-height fluid>
    <div class="sectionTitle">
      <span>Votes</span>
    </div>
    <v-row>
      <v-col cols="12" md="6" sm="12" v-for="(candidate, i) in candidates" :key="i" align="center">
        <VotingCard :candidate="candidate"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VotingCard from '@/components/common/votingCard.vue';
import { mapActions, mapState } from 'vuex';
import { homeTypes } from '@/store/modules/home/homeTypes';

export default {
  name: 'homeContent',
  components: {
    VotingCard,
  },
  computed: {
    ...mapState(homeTypes.PATH, [
      'candidates',
    ]),
  },
  watch: {
    candidates: {
      handler() {
        this.setLocalStorage();
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions(homeTypes.PATH, {
      setLocalStorage: homeTypes.actions.SET_LOCAL_STORAGE,
    }),
  },
};
</script>
