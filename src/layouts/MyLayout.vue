<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar class="bg-secondary text-white q-my-md shadow-2">
      <q-btn
        v-if="$route.fullPath.includes('/chat')"
        color="primary"
        flat
        dense
        v-go-back.single
        icon="arrow_back"
        label="Back"
      />

      <q-toolbar-title class="absolute-center">
        {{ title }}
      </q-toolbar-title>
      <q-btn
        to="/auth"
        color="absolute-right q-pr-sm"
        flat
        dense
        no-caps
        icon="account_circle"
        label="Login"
      />
      <q-btn
        to="/auth"
        color="absolute-right q-pr-sm"
        flat
        dense
        no-caps
        icon="account_circle"
        label="Logout"
      />
    </q-toolbar>
        <!-- v-if="!userDetails?.userId" -->


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("index", ["userDetails"]),
    title() {
      let currentPath = this.$route.fullPath;
      if (currentPath == "/") return "Smack Chat";
      else if (currentPath == "/chat") return "Chat";
      else if (currentPath == "/auth") return "Login";
      return "";
    }
  },
  data() {
    return {};
  },
  created() {
    console.log(this.userDetails)
    console.log(this.userDetails['__ob__'])

  }
};
</script>
