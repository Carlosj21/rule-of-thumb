<template>
  <v-card
    height="500"
    width="80%"
  >
    <v-img
      class="white--text"
      height="100%"
      :src="candidate.image"
    >
      <v-card-title>{{ candidate.name }}</v-card-title>
      <v-card-subtitle class="pb-0" align="left">
          <span class="white--text">
            <b>{{ timeInfo }}</b> in {{ candidate.sector }}
          </span>
      </v-card-subtitle>
      <v-card-text class="text--primary" align="left">
        <div class="white--text">
          {{ candidate.description }}
        </div>
      </v-card-text>
<!--      <v-btn-->
<!--        color="orange"-->
<!--        text-->
<!--      >-->
<!--        {{ thumbValue.up }}%-->
<!--      </v-btn>-->
<!--      <v-btn-->
<!--        color="orange"-->
<!--        text-->
<!--      >-->
<!--        {{ thumbValue.down }}%-->
<!--      </v-btn>-->
    </v-img>
  </v-card>
</template>

<script>
import moment from 'moment';

export default {
  name: 'VotingCard',
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
          createdAt: '01-01-2021 12:00:00',
          updatedAt: '01-01-2021 12:00:00',
          startDate: '01-01-2021 12:00:00',
          finishDate: '01-01-2021 12:00:00',
          thumbsUp: 0,
          thumbsDown: 0,
        };
      },
    },
  },
  computed: {
    thumbValue() {
      const total = this.candidate.thumbsUp + this.candidate.thumbsDown;
      const up = (this.candidate.thumbsUp / total) * 100;
      const down = (this.candidate.thumbsDown / total) * 100;
      return {
        up: up.toString()
          .match(/^-?\d+(?:\.\d{0,2})?/)[0],
        down: down.toString()
          .match(/^-?\d+(?:\.\d{0,2})?/)[0],
      };
    },
    thumbUpWidth() {
      const val = parseFloat(this.thumbValue.up);
      return `width: ${val.toFixed(2)}%;`;
    },
    thumbDownWidth() {
      const val = parseFloat(this.thumbValue.down);
      return `width: ${val.toFixed(2)}%;`;
    },
    timeInfo() {
      const time = moment(this.candidate.createdAt);
      return time.calendar();
    },
  },
};
</script>
