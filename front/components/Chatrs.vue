<template>
<div>
<div class="d-box">
  <p v-if="!vidtchatrs">{{ontruevidt()}}</p>
  <v-sparkline
    v-if="vidtchatrs"
    :value="Object.values(this.coin.board_price).reverse()"
    :gradient="gradient"
    :smooth="radius || false"
    :padding="padding"
    line-width=4
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
  ></v-sparkline> 
  </div>
<div class="mob-box">
  <p v-if="!vidtchatrs">{{ontruevidt()}}</p>
  <v-sparkline
    v-if="vidtchatrs"
    :value="Object.values(this.coin.board_price).reverse()"
    :gradient="gradient"
    :smooth="radius || false"
    :padding="padding"
    line-width=12
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
  ></v-sparkline> 
  </div>
  </div>
</template>

<script>
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'blue'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

  export default {
    props:['coin'],
    data: () => ({
      count:0,
      width: 10,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
      vidtchatrs:false
    }),
        computed:{
    },
    methods:{
      ontruevidt(){
        setTimeout(() => this.vidtchatrs = true, 1000);
    },

    }
    
  }
  
</script>

<style scoped>
@media (max-width:500px) {
  .d-box{
  display: none;
}
}
@media (max-width:500px) {
  .mob-box{
  display: block;
}
}
@media (min-width:510px) {
  .mob-box{
  display: none;
}
}

</style>