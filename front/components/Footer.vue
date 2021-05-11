<template>
  <v-card height="400px">
    <v-footer
      :padless="true"
      absolute
    >
      <v-card
        flat
        tile
        width="100%"
        class="blue lighten-1 text-center"
      >
        <v-card-text>
          <p>
            <a style="color:white;" href="tg://resolve?domain=hleb89">telegram</a>
          </p>   
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text"> 
        <fa icon='copyright'></fa> 
          {{ new Date().getFullYear() }} — <strong>shitcoincap</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>

<style scoped>
.v-card{
  position: static;
 
}
</style>