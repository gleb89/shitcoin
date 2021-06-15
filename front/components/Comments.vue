<template>
  <div>
    <v-card class="mx-auto" color="#26c6da" dark max-width="400">
      <v-card-text class="text-h5 font-weight-bold">
        <p v-if="comment.parent" style="text-align: left;" >ответ: user id{{comment.user_parent}} </p>
              <div style="width: 100%;margin-bottom: 2rem;display: flex;">
               <v-avatar
                  size="36px"
                >
                  <img
                    alt="Avatar"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  >
                </v-avatar>   
                <span style="color: white;margin-left: 1rem;">user id : {{ comment.user_id.slice(0, 4) }}</span>   

 
           

        </div>
        "Turns out semicolon-less style is easier and safer in TS because most
        gotcha edge cases are type invalid as well."
        {{ comment.text_comment }}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-content>
          </v-list-item-content>

          <v-row align="center" justify="end">
            <v-icon class="mr-1"> mdi-calendar-blank </v-icon>
            {{ comment.updated.slice(0, 10) }}
          </v-row>
        </v-list-item>
      </v-card-actions>
       <v-card-actions>
         <div style="width: 100%;display: flex;justify-content: space-between;">
      <v-btn
        color="white lighten-2"
        text
        @click="onanswer"
      >
      <fa icon="comment-medical"></fa> 
        ответить 
      </v-btn>
                <v-btn
          color="white lighten-2"
          text
          @click="get_comments = !get_comments"
          >
          <span
          v-if="!get_comments"
          ><fa icon="comments"></fa> ({{comment.children.length}})
          </span>
          <span
          v-if="get_comments"
          >свернуть
          </span>
          </v-btn>
      </div>
    </v-card-actions>
  
    </v-card>
    <div v-if="comment.children && comment.children.length" style="margin-top:1rem;">
    <div v-if="get_comments">
      <div style="margin-top:4rem" v-for="(comment_children, index) of comment.children" :key="index">
        <Comments :comment="comment_children" />
      </div>
    </div>
    </div>
  </div>
</template>


<script>
import Comments from "@/components/Comments";
export default {
  name: "Comments",
  props: ["comment", "onsendComentParent"],
  data: () => ({
    isActive: false,
    rrr: false,
    get_comments:false
  }),
  components: {
    Comments,
  },
  methods:{
    onanswer(){
      console.log('iii');
    }
  }
};
</script>

<style scoped>
.card-comment {
  width: 70%;
  min-width: 70%;
}
@media (min-width: 500px) {
  .card-comment {
    width: 80%;
  }
}

</style>