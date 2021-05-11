<template>
<div>

  <v-sparkline
  v-if="vidtchatrs"
    :value="value"
    :gradient="gradient"
    :smooth="radius || false"
    :padding="padding"
    :line-width="width"
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
  ></v-sparkline>
  {{onPriceList}}
  {{ontruevidt()}}
  </div>
</template>

<script>
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

  export default {
    props:['coin'],
    data: () => ({
      width: 4,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
      vidtchatrs:false
    }),
        computed:{
            onPriceList(){
          for (let val of Object.values(this.coin.board_price[0])){
          this.value.push(val)
        }
      }
    },
    methods:{
      ontruevidt(){
      setTimeout(() => this.vidtchatrs = true, 1000);
    },
    }
    
  }
  
</script>