<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 basil--text">
        Info
      </h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
{{ontab}}
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card
          color="basil"
          flat
        >
       
          <v-card-text v-if="iteminfo === 'График'">
              <Price :coinprice="coinprice"/>
          </v-card-text>
        <v-card-text v-if="iteminfo === 'Описание'">
              <About :description="description"/>
          </v-card-text>
        <v-card-text v-if="iteminfo === 'Рынки'">
              <Market :exchange="exchange"/>
          </v-card-text>
        <v-card-text v-if="iteminfo === 'Коментарии'">
              <Comments/>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import Price from  "@/components/Price";
import About from  "@/components/About";
import Market from  "@/components/Market";
import Comments from  "@/components/Comments";
  export default {
    props:['coin'],
      components:{
          Price,
          About,
          Market,
          Comments
      },
      computed:{
        ontab(){
          
          this.iteminfo = this.items[this.tab]
          
        }
        
      },
    data () {
      return {
        exchange:this.coin.market_exchange,
        description:this.coin.description,
        tab:null,
        coinprice:this.coin,
        iteminfo:'График',
        items: [
          'График', 'Описание', 'Рынки', 'Коментарии',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },


    
  }
</script>