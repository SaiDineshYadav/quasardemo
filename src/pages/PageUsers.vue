<template>
  <q-page class="flex">
    <div class="q-pa-md" style="max-width: 350px">
      <q-toolbar class="bg-primary text-white shadow-2">
        <q-toolbar-title >Contacts</q-toolbar-title>
      </q-toolbar>

      <q-list bordered separator>
        <q-item
          v-for="user in users"
          :key="user.id"
          to="/chat"
          class="q-my-sm"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              {{ user.name.charAt(0).toUpperCase() }}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-weight-bolder">{{ user.name }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-badge
              align="top"
              :color="user.online ? 'light-green' : 'grey-4'"
            >
              {{ user.online ? "Online" : "Offline" }}
            </q-badge>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Ruddy Jedrzej",
          online: true
        },
        {
          id: 2,
          name: "Mallorie Alessandrini",
          online: false
        },
        {
          id: 3,
          name: "Elisabetta Wicklen",
          online: true
        },
        {
          id: 4,
          name: "Seka Fawdrey",
          online: false
        }
      ]
    };
  },
  methods: {}
};
</script>
<style>
/* .q-page {
  background: linear-gradient(to right, #3f2b96, #a8c0ff);
} */
</style>
