<template>
  <div>
  <v-row justify="center" align="center">
    <v-col class="header d-flex align-content-center flex-wrap" justify="center" align="center">
      <div class="" style="width: 100%;text-align: center;" >
        <img class="img-call" src="call.png" alt="">
        <h1>Shitcoincap</h1>
        <span v-if="!location">{{ongeolocation}}</span>
              <v-sparkline
              v-if="gg"
        :labels="[1,2,3,4,5]"
        :value="[1,2,3,4,5]"
        color="black"
        line-width="2"
        padding="16"
      ></v-sparkline>
           
      <v-btn
      @click="oMne" 
      class="mx-2"
      fab
      dark
      large
      color="cyan"
    >
      <v-icon dark>
        mdi-pencil
      </v-icon>
     
    </v-btn>
         <p @click="oMne"  class="pro-site">о сайте</p>        
               
          
      </div>
 
    </v-col>
  </v-row>
    <section>
      <TableCoin :listcoins="listcoins"/>
      <div class="text-center"> 
        {{paginationcoin}}
       <v-pagination v-model="page" :length="page" circle></v-pagination>
    </div>
  </section>

  </div>

</template>

<script>
import TableCoin from "@/components/TableCoin";
export default {
      head:{
    title:'Список scam crypto'
  },
    meta:[
    { hid: 'description', name: 'description', content:'список криптовалют shitcoinmarketcap' },
    { hid: 'homepage', name: 'keywords', content:'Список scam crypto' }
  ],
  computed:{
    paginationcoin(){
        this.onData(this.page) 
    },
    ongeolocation(){
      if(!this.location){
        this.locatorButtonPressed()
      }
    },
  },
    data(){
      return{
        page: 1,
        gg:false,
        location:false
      }
    },
    methods:{
locatorButtonPressed () { 
  setTimeout(() => {
      navigator.geolocation.getCurrentPosition ( 
     position => { 
       let lat = position.coords.latitude
       let long = position.coords.longitude 
       console.log(lat, long);
       this.getStreetAddressFrom(lat, long)
     }, 
     error => { 
       console.log (error.message) ; 
     },)
  }, 1000);
 
     
},
  async getStreetAddressFrom(lat, long) {

    await this.$axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyD0OSOPbGOj-Z1jXwDFLIDdaZsRuLXgyBM`
    )
    .then((resp) =>{
       console.log(resp.data.plus_code.compound_code);
       this.location = true
    }),
      (error) => {
            console.log(error);
      }
  },
      oMne(){
        this.$router.push('/omne')
      },
    onData(page){
        const headers = {
          "Content-Type": "application/json"
        };
        this.$axios
          .$get(`/api/coins/?page=${page}`, {
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
        .$get(`/api/coins/`, {
          headers: headers
        })
        .then(
          listcoins => {
            return {listcoins}
          })
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
.pro-site{
  font-size: 0.7rem;
text-shadow: 1px 1px 1px #f2eaea82;
position: relative;
top: -1.3rem;
color: white;
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
