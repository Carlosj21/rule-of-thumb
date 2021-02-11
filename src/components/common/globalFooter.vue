<template>
  <v-footer
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title>
        <v-card-actions>
          <v-btn
            text
            color="accent-4"
          >
            Terms and Conditions
          </v-btn>
          <v-btn
            text
            color="accent-4"
          >
            privacy Policy
          </v-btn>
          <v-btn
            text
            color="accent-4"
          >
            Contact Us
          </v-btn>
        </v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'globalFooter',
  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
      ],
    };
  },
};
</script>
