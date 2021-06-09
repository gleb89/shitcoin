<template>
  <v-row justify="center" align="center" style="margin-top: 5rem">
    <v-col cols="12" class="header" justify="center" align="center">
      <img :src="coin.image" alt="" />

      <h2>{{ coin.name }}({{coin.symbol}})</h2>

      <p><span class="zag">Price:  </span> <br> ${{ Math.round((coin.price)*100000000)/100000000  }}(<span class="onactive" :class="{ active: onProc(coin.price_exc) }">
        {{ coin.price_exc }} %/24h)
      </span></p>


      <p><span class="zag">Market cap:  </span> <br>  ${{ onCap(coin.market_cap)  }}</p> 
      <p><span class="zag">Volume(24h):  </span> <br> ${{onCap(Number(coin.volume))}}</p> 

    </v-col>
    <v-col cols="12" class="header" justify="center" align="center">
      <Info :coin="coin" :onsendComentParent="onsendComentParent" />
    </v-col>
  </v-row>
</template>

<script>
import Info from "@/components/Info";
export default {
        head:{
    title:'Coin page'
  },
    meta:[
    { hid: 'description', name: 'description', content:'список криптовалют shitcoinmarketcap' },
    { hid: 'homepage', name: 'keywords', content:'список криптовалют' }
  ],
  asyncData({ $axios, route, error }) {
    const headers = {
      "Content-Type": "application/json",
    };
    const coin_id = Number(route.params.id);
    return $axios
      .$get(`https://apicrypto.ru/api/v1/coins/${coin_id}`, {
      })
      .then((coin) => {
        return { coin };
      });
  
  },
  components: {
    Info,
  },
  methods: {
        onCap(cap) {
      let newcap = cap;
      
      return newcap.toLocaleString()
    },
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
.zag{
  font-weight: bold;
}

</style>