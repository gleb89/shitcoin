<template>
  <v-card
    class="mx-auto search"
    max-width="100%"
  >
  

    <v-toolbar
      flat
      color="transparent"
    >
      <v-btn @click="onHome" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-text-field
        v-model="serch_coins"
        append-icon="mdi-magnify"
        label="example: btc or bitcoin"
        single-line
      ></v-text-field>
    </v-toolbar>

 

    <v-list three-line>
      <v-list-item
      style="padding-top: 1rem;"
        v-for="(item, i) in coins_list"
        :key="i"
        
        @click="onPagecase(item.id)"
      >
        <v-img
          :src="item.image"
          class="mr-4"
          max-width="20"
          min-width="20"
        ></v-img>

        <v-list-item-content>
          <span
            class="text-uppercase font-weight-regular caption"
            v-text="item.name"
          > </span>

          <div v-text="item.symbol"></div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    async fetch({store}){
        if (store.getters['coins/coins'].length === 0){
            await store.dispatch('coins/fetch')
        }
    },
    props:['coins'],
    data(){
        return{
            serch_coins:'',
        }
    },
        computed: {
        coins_list(){
        if(this.serch_coins != ''){
          return this.coins.filter(element =>{
            return element.symbol.toLowerCase().includes(this.serch_coins.toLowerCase()) || element.name.toLowerCase().includes(this.serch_coins.toLowerCase())
          })
            
       }
       else{
         return this.coins
       }
            }
      },
    methods:{
      onHome(){
        this.$router.go(-1);
      },
      onPagecase(coin){
        this.$router.push('/coins_list/'+coin) 
      }
    }
  }
</script>


<style scoped>
.search{
max-width: 100%;
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
}
</style>