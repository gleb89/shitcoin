<template>
  <div>
  <v-row justify="center" align="center">
    <v-col class="header d-flex align-content-center flex-wrap" justify="center" align="center">
      <div class="" style="width: 100%;text-align: center;" >
        <img class="img-call" src="call.png" alt="">
        <h1>Shitcoincap</h1>
              <v-sparkline
              v-if="gg"
        :labels="[1,2,3,4,5]"
        :value="[1,2,3,4,5]"
        color="black"
        line-width="2"
        padding="16"
      ></v-sparkline>
      </div>
    </v-col>
  </v-row>
    <section>
      <TableCoin :listcoins="listcoins"/>
      <div class="text-center"> 
        {{paginationcoin}}
      <!-- <v-pagination v-model="page" :length="Math.ceil(listcoins.count/10)" circle></v-pagination> -->
       <v-pagination v-model="page" :length="page" circle></v-pagination>
    </div>
  </section>

  </div>

</template>

<script>
import TableCoin from "@/components/TableCoin";
export default {
      head:{
    title:'Главная'
  },
    meta:[
    { hid: 'description', name: 'description', content:'список криптовалют shitcoinmarketcap' },
    { hid: 'homepage', name: 'keywords', content:'список криптовалют' }
  ],
    data(){
      return{
        page: 1,
        gg:false
      }
    },
    methods:{
      
    onData(page){
        const headers = {
          "Content-Type": "application/json"
        };
        this.$axios
          .$get(`https://apicrypto.ru/api/v1/coins?page=${page}`, {
            headers: headers
          })
          .then(response => {
            this.listcoins = response
          })
      
      }
    },
      asyncData({ $axios,route, error }) {
    const headers = {
        "Content-Type": "application/json"
      };
      const user_id = Number(route.params.id)
       return $axios
        .$get(`https://apicrypto.ru/api/v1/coins`, {
          headers: headers
        })
        .then(
          listcoins => {
            return {listcoins}
          })
      },

  computed:{
    paginationcoin(){
        this.onData(this.page) 
    }
  },
  components:{
    TableCoin
  }
}
</script>

<style scoped>
.header{
  min-height: 70vh;
}
h1{
  text-shadow: 1px 1px 1px white;
  position: relative;
  top: -11rem;
}
.img-call{
  width: 100%;
}
@media (min-width:500px) {
.img-call{
  width: 30%;
}
}
@media (max-width:500px) {
  h1{
    top: -4rem;
  }
}
@media (min-width:500px) {
  h1{
    
    font-size: 5rem;
  }
}
.other{
      background: rgba(167, 202, 213, 0.33);
}
@media (min-width:500px) {
  .other{
    font-size: 2rem;
  }
}
.v-btn__content{
  font-size: 0.5rem;
}
</style>
