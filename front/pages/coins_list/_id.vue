<template>
  <v-row justify="center" align="center" style="margin-top: 5rem">
    <v-col cols="12" class="header" justify="center" align="center">
      <img :src="coin.image" alt="" />

      <h2>{{ coin.name }}</h2>
      <p><span>Цена:</span> $ {{ coin.price.toLocaleString() }}</p>
      <p class="onactive" :class="{ active: onProc(coin.price_exc) }">
        {{ coin.price_exc }} %/24h
      </p>
    </v-col>
    <v-col cols="12" class="header" justify="center" align="center">
      <Info :coin="coin" :onsendComentParent="onsendComentParent" />
    </v-col>
  </v-row>
</template>

<script>
import Info from "@/components/Info";
export default {
  asyncData({ $axios, route, error }) {
    const headers = {
      "Content-Type": "application/json",
    };
    const coin_id = Number(route.params.id);
    return $axios
      .$get(`http://localhost:8000/api/v1/coins/${coin_id}`, {
        headers: headers,
      })
      .then((coin) => {
        return { coin };
      });
  
  },
  components: {
    Info,
  },
  methods: {
    onProc(price) {
      if (price[0] === "-") {
        return true;
      } else {
        return false;
      }
    },
    onsendComentParent(comment){
            console.log(comment);
          }
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>


<style scoped>
.onactive {
  color: #16c784;
}
.active {
  color: #ea3943;
}
</style>