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
            <!-- <v-alert
            v-if="alert_auth"
            class="alert-sign"
               dense
              
              type="warning"
            >Выполните вход!</v-alert>
            <v-form ref="form_com"
            style="margin-bottom: 3rem; text-align: end"
            v-model="valid"
            lazy-validation>
              <v-textarea
                v-model="comment_text"
                label="Оставить комментарий"
                :rules="[v => !!v || 'Не может быть пустым']"
                counter
                maxlength="500"
                full-width
                single-line
                required
              ></v-textarea>
              <v-btn
                :disabled="!ontext"
                class="mr-4"
                @click="submit_comment">
                отправить
              </v-btn>
            </v-form>
            <div v-if="comments.length">
            <div style="margin-bottom:4rem" v-for="(comment, index) in comments" :key="index">
              <Comments :comment="comment" />
            </div>
            </div>
            <div v-if="!comments.length">
              <h4>Комментариев нет</h4>
            </div> -->
         <h4>В разработке</h4>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
const Cookie = process.client ? require('js-cookie') : undefined

import Price from "@/components/Price";
import About from "@/components/About";
import Market from "@/components/Market";
import Comments from "@/components/Comments";

export default {
  async fetch() {
    this.comments = await fetch(
      `https://apicrypto.ru/api/v1/comments?coin_id=${this.coin.id}`
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
    ontext(){
      if(this.comment_text){
        return true
      }
      else{
        return false
      }
      
    },
    ontab() {
      this.iteminfo = this.items[this.tab];
    },
  },
  data() {
    return {
      valid:true,
      comment_text:'',
      exchange: this.coin.market_exchange,
      description: this.coin.description,
      tab: null,
      coinprice: this.coin,
      iteminfo: "Описание",
      comments: [],
      alert_auth: false,
      items: ["Описание", "Рынки", "Коментарии"],
    };
  },
  methods: {
    submit_comment(){
      let name_user = this.$store.state.auth
      if(name_user  === null){
        this.alert_auth = true
        setTimeout(() => {
          this.alert_auth = false
        }, 2000);
        
      }
      else{
        let data = {
                    "user_id": name_user.user_id,
                    "text_comment": this.comment_text,
                    "user_parent": '',
                    "object_id": this.coin.id,
                    "parent": null,
                    "content_type": 8
      };
      const headers = {
        "Content-Type": "application/json"
      };
     
      this.$axios
        .$post("https://apicrypto.ru/api/v1/comments/", data, {
          headers: headers
        })
        .then(
          response => {
            this.comments.unshift(response)
          },
          error => {
            console.log(error);
          }
        )
      }
      }
    },
};
</script>


<style scoped>
.alert-sign{
  max-width: 18rem;
}
@media(min-width:550px){
  .alert-sign{
  position: absolute;
  z-index: 1;
  top: 7rem;
  left: 45%;
}
}
@media(max-width:500px){
  .alert-sign{
  position: absolute;
  top: 7rem;
  z-index: 1;
  left: 20%;
}
}

.card-comment {
  width: 90%;
  margin-bottom: 4rem;
}

@media (min-width: 500px) {
  .card-comment {
    width: 90%;
    margin-bottom: 4rem;
  }
}
@media (min-width: 1000px) {
  .coment-div {
    padding: 2rem 15rem 15rem;
  }
}
</style>