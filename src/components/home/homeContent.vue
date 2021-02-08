<template>
  <v-container fill-height fluid>
    <v-row>
      <v-col cols="12" sm="6" v-for="(candidate, i) in candidates" :key="i" align="center">
        <VotingCard :candidate="candidate"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VotingCard from '@/components/common/votingCard.vue';
import { mapState } from 'vuex';
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
};
</script>
