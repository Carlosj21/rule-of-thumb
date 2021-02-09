<template>
  <v-card
    height="800"
    width="80%"
    elevation="0"
    tile
    align="left"
  >
    <v-img
      class="white--text"
      height="100%"
      :src="candidate.image"
    >
      <div class="cardContent">
        <div class="cardInfo">
          <div class="candidateName">
            {{ candidate.name }}
          </div>
          <div>
          <span class="candidateDate">
            <b>{{ timeInfo }}</b> in {{ candidate.sector }}
          </span>
          </div>
          <div class="candidateDescription">
            {{ candidate.description }}
          </div>
        </div>
        <div class="thumbsBarArea">
          <div class="thumbUpBar" :style="thumbUpWidth">
          <span class="pa-2">
            <v-icon large color="white">mdi-thumb-up</v-icon>
          </span>
            {{ thumbValue.up }}%
          </div>
          <div class="thumbDownBar" :style="thumbDownWidth">
            {{ thumbValue.down }}%
            <span class=" pa-2">
              <v-icon large color="white">mdi-thumb-down</v-icon>
            </span>
          </div>
        </div>
      </div>
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
