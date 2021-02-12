<template>
  <q-page class="flex column">
    <q-banner class="bg-grey-4 text-center">
      User is offline.
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message of messages"
        :key="message.text"
        :name="message.from"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form @submit="sendMessage" class="full-width">
          <q-input
            bg-color="white"
            v-model.trim="newMessage"
            outlined
            rounded
            dense
            bottom-slots
            label="Message"
            counter
          >
            <template v-slot:after>
              <q-btn
                round
                dense
                flat
                type="submit"
                @click="sendMessage"
                color="white"
                icon="send"
              />
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      newMessage: "",
      messages: [
        {
          text: "Hey Dinesh",
          from: "me"
        },
        {
          text: "Hey Sai",
          from: "Sai"
        },
        {
          text: "How r u",
          from: "me"
        }
      ]
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage != "") {
        this.messages.push({
          text: this.newMessage,
          from: "me"
        });
        this.newMessage = "";
      }
    }
  }
};
</script>
<style>
/* .q-page {
  background: linear-gradient(to right, #3f2b96, #a8c0ff);
} */
</style>
