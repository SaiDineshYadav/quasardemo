<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("store", ["handleAuthStateChange"])
  },
  mounted() {
    console.log("1111111111111");
    this.handleAuthStateChange();
  }
};
</script>
