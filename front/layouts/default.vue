
<template>
 <!-- App.vue -->

<v-app class="apps"  >
<Navigation :onSign="onSign" :dialog="dialog" />
  <!-- Sizes your content based upon application components -->
  <v-main>
    
       
    

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <!-- If using vue-router -->

      <!-- <Signin :dialog="dialog"  @click="onDontSign()"/> -->
   
        <Nuxt />

        
    </v-container>
  </v-main>

<Footer/>
</v-app>

</template>

<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Signin from '@/components/Signin';
export default {
  components: {
    Navigation,
    Footer,
    Signin
   
  },
  data () {
    return {
      clipped: false,
      dialog:false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods:{
    onSign(){
      
      this.dialog = !this.dialog
      console.log(this.dialog);
    },
    onDontSign(){
      console.log('hhhh');
      if (this.dialog === true){
        this.dialog = false
      }
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Montserrat&display=swap");
.apps{
  scroll-behavior: smooth;
  font-family: "Comfortaa", cursive;
  font-family: "Montserrat", sans-serif;
}
</style>