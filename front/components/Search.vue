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
        v-model="search_case"
        append-icon="mdi-magnify"
        label="пример: s8/xr/8"
        single-line
      ></v-text-field>
    </v-toolbar>

 

    <v-list three-line>
      <v-list-item
        v-for="(item, i) in cases_list"
        :key="i"
        
        @click="onPagecase(item.id)"
      >
        <v-img
          src="https://static.onlinetrade.ru/img/items/m/chekhol_apple_iphone_12_pro_max_leather_case_with_magsafe_dlya_iphone_12_pro_max_zolotisto_korichnevyy_1535950_1.jpg"
          class="mr-4"
          max-width="64"
          min-width="64"
        ></v-img>

        <v-list-item-content>
          <span
            class="text-uppercase font-weight-regular caption"
            v-text="item.title"
          ></span>

          <div v-text="item.category[0].name"></div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    async fetch({store}){
        if (store.getters['cases/cases'].length === 0){
            await store.dispatch('cases/fetch')
        }
    },
    props:['cases'],
    data(){
        return{
            search_case:'',
        }
    },
        computed: {
        cases_list(){
        if(this.search_case != ''){
          return this.cases.filter(element =>{
            return element.title.toLowerCase().includes(this.search_case.toLowerCase())
          })
            
       }
       else{
         return this.cases
       }
            }
      },
    methods:{
      onHome(){
        this.$router.go(-1);
      },
      onPagecase(case_id){
        this.$router.push('/case/'+case_id)
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