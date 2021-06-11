<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 basil--text">Info</h1>
    </v-card-title>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    {{ ontab }}
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card color="basil" flat>
          <!-- <v-card-text v-if="iteminfo === 'График'">
            <Price :coinprice="coinprice" />
          </v-card-text> -->
          <v-card-text v-if="iteminfo === 'Описание'">
            <About :description="description" />
          </v-card-text>
          <v-card-text v-if="iteminfo === 'Рынки'">
            <Market :exchange="exchange" />
          </v-card-text>
          <v-card-text class="coment-div" v-if="iteminfo === 'Коментарии'">
            <!-- <h3>Скоро появятся:)</h3> -->
            <div v-for="i in 4" :key="i" style="margin-bottom:3rem">
            <Comments/>
            </div>
            <!-- <div v-for="(comment, index) in comments" :key="index">
              <div style="margin-bottom: 1rem" class="d-flex justify-start">
                <v-card class="card-comment" elevation="6" outlined style="margin-bottom:1rem">
                  <v-card-title>юсер {{ comment.user }}</v-card-title>
                  
                  <v-card-text>
                  Коментарий:{{ comment.text_comment }}
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
    
              </div>
              
              <Comments
                
                :onsendComentParent="onsendComentParent"
                v-if="comment.children && comment.children.length"
                :comments="comment.children"
              />
              
            </div> -->
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import Price from "@/components/Price";
import About from "@/components/About";
import Market from "@/components/Market";
import Comments from "@/components/Comments";
export default {
  async fetch() {
    this.comments = await fetch(
      `httpa://apicrypto.ru/api/v1/comments?coin_id=${this.coin.id}`
    ).then((res) => res.json());
  },
  props: ["coin", "onsendComentParent"],
  components: {
    Price,
    About,
    Market,
    Comments,
  },
  computed: {
    ontab() {
      this.iteminfo = this.items[this.tab];
    },
  },
  data() {
    return {
      exchange: this.coin.market_exchange,
      description: this.coin.description,
      tab: null,
      coinprice: this.coin,
      iteminfo: "Описание",
      comments: [],
      items: [ "Описание", "Рынки","Коментарии"],
      methods: {},
    };
  },
};
</script>


<style scoped>
.card-comment{
  width: 90%;
  margin-bottom: 4rem;
}

@media (min-width:500px){
  .card-comment{
  width: 90%;
  margin-bottom: 4rem;
}
}
@media (min-width:1000px){
.coment-div{
  padding: 2rem 15rem 15rem;
}
}
</style>