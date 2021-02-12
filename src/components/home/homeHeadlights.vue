<template>
  <div class="homeHeadlights">
    <v-img
      class="white--text"
      :src="candidate.image"
    >
      <homeHeadlightsVotingCard :candidate="candidate"></homeHeadlightsVotingCard>
    </v-img>
  </div>
</template>

<script>
import homeHeadlightsVotingCard from '@/components/home/homeHeadlightsVotingCard.vue';

export default {
  name: 'homeHeadlights',
  components: {
    homeHeadlightsVotingCard,
  },
  props: {
    candidate: {
      type: Object,
      default() {
        return {
          name: 'Full Name',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum eros quam, vel ultrices',
          sector: 'Other',
          url: 'https://es.wikipedia.org/',
          image: '',
          dataSource: 'wikipedia',
        };
      },
    },
  },
};
</script>
