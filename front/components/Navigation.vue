<template >
  <v-bottom-navigation 
    :value="value"
    color="blue"
    absolute
    style="position: fixed; top: 0;"
  >
    <v-btn @click="onHome" class="box">
      <span>Главная</span>
      <fa icon="home"></fa>
    </v-btn>
    <v-btn @click="onSearch" class="box">
      <span>Поиск</span>
      <fa icon="search"></fa>
    </v-btn>
     <div style="padding-top:.99rem">
         <Lang/>
     </div>
    


  </v-bottom-navigation>
</template>

<script>
import Lang from "@/components/Lang";
export default {
   
  data: () => ({
      value:1
     
    
     }),
    computed: {

  },
  components:{
      Lang
  },
  methods: {
    onList() {
      this.$router.push("/coins_list");
    },
    onHome() {
      this.$router.push("/");
    },

    onSearch(){
      this.$router.push("/search");
    }
  },
};
</script>

<style scoped>
@media (max-width: 500px) {
  span {
    font-size: 9px;
  }
}
@media (max-width: 500px) {
  .icons {
    font-size: 12px;
  }
}
/* @media (max-width: 500px) {
  .box-basket{
    display: none;
  }
} */
</style>