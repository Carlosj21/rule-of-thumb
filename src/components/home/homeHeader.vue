<template>
  <div>
    <homeHeadlights :candidate="headLights"></homeHeadlights>
  </div>
</template>

<script>
import homeHeadlights from '@/components/home/homeHeadlights.vue';
import { mapState } from 'vuex';
import { homeTypes } from '@/store/modules/home/homeTypes';

export default {
  name: 'homeHeader',
  components: {
    homeHeadlights,
  },
  computed: {
    ...mapState(homeTypes.PATH, [
      'headLights',
    ]),
  },
};
</script>
