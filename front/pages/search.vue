<template>
    <div >
        <search :coins="coins"/>
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
            coins:this.$store.getters['coins/coins']
        }
    },
async fetch({store}){
        if (store.getters['coins/coins'].length === 0){
            await store.dispatch('coins/fetch')
        }
    },
  components:{
      search
  }
}
</script>