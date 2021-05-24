<template>
    <div>
 {{comment}}
             <div class="nonn" :class="{ active : active_el == i.id }">
                 hhhhh
             </div>
            
        </div>
        
        
   
</template>

<script>
export default {
    
props:['comment'],
  data(){
      return{
          comments:[],
          active_el: 0,
      }
  },
    computed:{
    },
    methods:{
    onComment(comment_id,user_id){
        this.active_el = comment_id
        console.log(user_id,comment_id);
    }
}
}
</script>

<style scoped>
.nonn{
    display: none;
}
.active{
    display: block;
}
</style>