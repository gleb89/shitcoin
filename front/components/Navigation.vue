<template >
  <div>
    <v-bottom-navigation
      :value="value"
      color="blue"
      absolute
      style="position: fixed; top: 0"
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
        <span v-if="!AuthName">Вход</span>
        <span v-if="AuthName">User</span>
        <fa icon="user"></fa>
      </v-btn>
      <div style="padding-top: 0.99rem">
        <Lang />
      </div>
    </v-bottom-navigation>
    <v-dialog width="500" v-model="dialog">
      <v-card v-if="AuthName" style="padding: 1rem">
        <p>User: {{AuthName}}</p> 
        <v-card-actions>
          <v-spacer></v-spacer>
        <br>
        <v-btn @click="onSignOut" class="box">
        <span>Выйти</span> 
        <br>
        <fa icon="sign-out-alt"></fa>
      </v-btn>
        
        </v-card-actions>
        </v-card>
      <v-card v-if="!AuthName" style="padding: 1rem">
        <Signin />
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            style="
              font-size: 0.8rem;
              box-shadow: 3px 3px 3px #00000073;
              margin-top: 1rem;
            "
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
import { mapState } from "vuex";
const Cookie = process.client ? require('js-cookie') : undefined
import Lang from "@/components/Lang";
import Signin from "@/components/Signin";
export default {
  data: () => ({
    value: 1,
    dialog: false,
  }),
  computed: {
    AuthName(){
      let name_user = this.$store.state.auth
      if(name_user  === null){
        return 0
      }
      else{
        
        return name_user.user_name
      }
    },
  },
  components: {
    Lang,
    Signin,
  },
  methods: {
    onSign() {
      this.dialog = !this.dialog;
      console.log(this.dialog);
    },
    onSignOut(){
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
    },
    onList() {
      this.$router.push("/coins_list");
    },
    onHome() {
      this.$router.push("/");
    },

    onSearch() {
      this.$router.push("/search");
    },
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