<template>
  <v-card
    class="white--text"
    width="600"
    height="600"
    outlined
    tile
    color="transparent"
  >
    <div class="highlightVoteCard">
      <span class="highlightVoteCardTitle">What's your opinion on</span>
      <br>
      <span class="highlightVoteCardName">{{ candidate.name }}?</span>
      <br>
      <p class="highlightVoteCardDescription">{{candidate.description}}</p>
      <br>
      <span><a :href="candidate.url" class="highlightVoteCardTitle">More Information</a></span>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'headlightsVotingCard',
  props: {
    candidate: {
      type: Object,
      default() {
        return {
          name: 'Full Name',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum eros quam, vel ultrices',
          sector: 'Other',
          url: 'https://es.wikipedia.org/',
          dataSource: 'wikipedia',
        };
      },
    },
  },
};
</script>
