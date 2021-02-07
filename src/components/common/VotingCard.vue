<template>
  <div class="votingCard">
    <div class="candidateItem" :style="itemBackground">
      <div class="candidateName">
        {{ candidate.name }}
      </div>
      <div class="candidateInfo">
        <span> <b>{{ timeInfo }}</b> in {{ candidate.sector }} </span>
      </div>
      <div class=""></div>
      <div class="candidateThumbInfo">
        <div class="thumbUpValue'" :style="thumbUpWidth">
          {{ thumbValue.up }}%
        </div>
        <div class="thumbDownValue" :style="thumbDownWidth">
          {{ thumbValue.down }}%
        </div>
      </div>
    </div>
  </div>
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
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum eros quam, vel ultrices orci vulputate sed. Vestibulum dictum magna quis odio hendrerit, vitae maximus massa imperdiet. Etiam cursus dignissim varius. Etiam eleifend odio sollicitudin odio condimentum lacinia. Phasellus et erat tellus. Phasellus viverra, metus eget sodales ornare, nulla nisi convallis tortor, eget malesuada turpis nulla eget magna. Nullam nec lorem sed lacus semper mollis at et ex.',
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
      const up = Math.round((this.candidate.thumbsUp / total) * 100);
      const down = Math.round((this.candidate.thumbsDown / total) * 100);
      return {
        up,
        down,
      };
    },
    itemBackground() {
      return `background-image: url('${this.candidate.image}');`;
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
