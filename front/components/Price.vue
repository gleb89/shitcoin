<template>
  <v-card
    class="mt-4 mx-auto"
    max-width="400"
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="12"
      max-width="calc(100% - 32px)"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">
        График за все время{{onPriceList}}
      </div>
      <v-divider class="my-2"></v-divider>
      <v-icon
        class="mr-2"
        small
      >
        mdi-clock
      </v-icon>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    props:['coinprice'],
    computed:{
            onPriceList(){
        for (let key of Object.keys(this.coinprice.board_price)){
          this.labels.push(key)
        }
          for (let val of Object.values(this.coinprice.board_price)){
          this.value.push(val)
        }
        this.value.reverse()
        
      }
    },
    methods:{

    },
    data: () => ({
      pricelist:[],
      labels: [],
      value: [],
    }),
  }
</script>

