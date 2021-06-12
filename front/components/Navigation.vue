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
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        В режиме разработки
                <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Lang from "@/components/Lang";
export default {
  // props:['onSign'],
  data: () => ({
      value:1,
      dialog:false
     
    
     }),
    computed: {

  },
  components:{
      Lang
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