<template>
  <q-form @submit="submitForm">
    <q-input
      v-if="tab == 'register'"
      outlined
      class="q-mb-md"
      type="text"
      v-model="formData.name"
      label="Name"
    />
    <q-input
      outlined
      class="q-mb-md"
      type="email"
      v-model="formData.email"
      label="Email"
    />
    <q-input
      outlined
      type="password"
      class="q-mb-md"
      v-model="formData.password"
      label="Password"
    />
    <div class="row">
      <q-space></q-space>
      <q-btn color="primary" type="submit" :label="tab"></q-btn>
    </div>
  </q-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["tab"],
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions("index", ["registerUser", "loginUser"]),
    submitForm() {
      if (this.tab == "login") {
        this.loginUser(this.formData);
      } else {
        console.log("999999999999");
        this.registerUser(this.formData);
      }
    }
  }
};
</script>
