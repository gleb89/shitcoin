<template>
    <div >
        <search :cases="cases"/>

    </div>
</template>

<script>
import search from "~/components/Search.vue";
export default {
    head:{
    title:'Поиск чехлов'
  },

    layout: 'search',
    data(){
        return{
            cases:this.$store.getters['cases/cases']
        }
    },
async fetch({store}){
        if (store.getters['cases/cases'].length === 0){
            await store.dispatch('cases/fetch')
        }
    },
  components:{
      search
  }
}
</script>