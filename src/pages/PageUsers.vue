<template>
  <q-page class="flex">
    <h5>Users Page</h5>
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
/* .q-page {
  background: linear-gradient(to right, #3f2b96, #a8c0ff);
} */
</style>
