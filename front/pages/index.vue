<template>
  <div>
  <v-row justify="center" align="center">
    <v-col class="header d-flex align-content-center flex-wrap" justify="center" align="center">
      <div class="" style="width: 100%;text-align: center;" >
        <img class="img-call" src="call.png" alt="">
        <h1>Shitcoincap</h1>
      </div>
    </v-col>
  </v-row>
    <section>
      <TableCoin/>
  </section>
  </div>

</template>

<script>
import TableCoin from "@/components/TableCoin";
export default {
  components:{
    TableCoin
  }
}
</script>

<style scoped>
.header{
  min-height: 100vh;
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
