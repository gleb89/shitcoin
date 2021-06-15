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
      <Info :coin="coin" :comments="comments" :onsendComentParent="onsendComentParent" />
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
  async asyncData({ $axios, route, error }) {
    const headers = {
      "Content-Type": "application/json",
    };
    const coin_id = Number(route.params.id);
    const coin_data =  await $axios.$get(`/api/coins/${coin_id}/`);
    const comments_id_data =  await $axios.$get(`/api/comments/?coin_id=${coin_id}`);
    return {coin:coin_data, comments:comments_id_data}
      // .then((coin_data) => {
      //   return { coin };
      // });
  
  },
  data(){
    return{
      coin:[],
      comments:[]
    }
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