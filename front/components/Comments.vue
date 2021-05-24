<template>
  <div >
    <div class="box-card" v-for="(comment, index) in comments" :key="index">
                <v-card class="card-comment" elevation="6" outlined style="margin-bottom:4rem">
                  <v-card-title>юсер {{ comment.user }}</v-card-title>
                  
                  <v-card-text>
                  ответ user {{comment.user_parent}}:  {{ comment.text_comment }}
                  </v-card-text>
                      <v-card-actions class="d-flex justify-end">
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="onsendComentParent(comment.text_comment)"
      >
        Ответить
      </v-btn>
    </v-card-actions >
                  <br />
                </v-card>
        
          <Comments
          v-if="comment.children && comment.children.length"
            :comments="comment.children"
            :onsendComentParent="onsendComentParent"
          />
        
      
    </div>
  </div>
</template>


<script>
import Comments from "@/components/Comments";
export default {
  name: "Comments",
  props: ["comments", "onsendComentParent"],
  data: () => ({
    rrr: false,
  }),
  components: {
    Comments,
  },
};
</script>

<style scoped>
.card-comment{
  width: 70%;
  min-width: 70%;
}
@media (min-width:500px){
  .card-comment{
  width: 80%;
}
}
.box-card{
  /* display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column; */
 
}



</style>