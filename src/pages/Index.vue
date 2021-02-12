<template>
  <q-page class="flex column">
    <div class="col">
      <q-input v-model="search" placeholder="Search" dark borderless>
        <template v-slot:before>
          <q-icon name="event" />
        </template>

        <template v-slot:before>
          <q-icon name="my_location" />
        </template>
        <template v-slot:append>
          <q-btn @click="getLocation()" round dense flat icon="search" />
        </template>
      </q-input>
    </div>
    <template v-if="weatherData">
      <div class="col text-white text-center">
        <div class="text-h4 text-weight-light">
          Dinesh
        </div>
        <div class="text-h6 text-weight-light">
          Test
        </div>
        <div class="text-h1 text-weight-thin q-my-lg">
          <span>8</span>
          <span>&deg;</span>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="col text-white text-center">
        <div class="text-h4 text-weight-light">
          Weather
        </div>
        <q-btn @click="getLocation()" round color="black" icon="my_location" />
      </div>
    </template>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      search: "",
      weatherData: false,
      lat: "",
      long: "",
      apiUrl: "https://api.openweathermap.org/data/2.5/weather",
      apiKey: "439d4b804bc8187953eb36d2a8c26a0Z"
    };
  },
  methods: {
    getLocation() {
      navigator.geolocation.getCurrentPosition(pos => {
        console.log(pos);
        this.lat = pos.coords.latitude;
        this.long = pos.coords.longitude;
        this.getWeatherByCords();
      });
    },
    getWeatherByCords() {
      this.$axios(
        `${this.apiUrl}?lat=${this.lat}&lon=${this.long}&appid=${this.apiKey}&units=metric`
      ).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style>
.q-page {
  background: linear-gradient(to right, #3f2b96, #a8c0ff);
}
</style>
