<template >
<div>
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
    <v-btn @click="onSign" class="box">
      <span>Вход</span>
      <fa icon="user"></fa>
    </v-btn>
     <div style="padding-top:.99rem">
         <Lang/>
     </div>
  </v-bottom-navigation>
  <v-dialog
  width="500"
      v-model="dialog"
    >
      <v-card style="padding:1rem" >
        
        <Signin/>
                <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            style="font-size:0.8rem"
            text
            @click="dialog = false"
          >
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Lang from "@/components/Lang";
import Signin from '@/components/Signin';
export default {
  
  data: () => ({
      value:1,
      dialog:false
     
    
     }),
    computed: {

  },
  components:{
      Lang,
      Signin
  },
  methods: {
        onSign(){
      
      this.dialog = !this.dialog
      console.log(this.dialog);
    },
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