<template>
      <v-row justify="center" align="center" style="margin-top:5rem">
    <v-col cols="12" class="header" justify="center" align="center">
        <h2>Bitcoin</h2>
        <p><span>Цена:</span> 12$</p>
    </v-col>
        <v-col cols="12" class="header" justify="center" align="center">
            <Info/>
    </v-col>
  </v-row>
</template>

<script>
import Info from  "@/components/Info";
  export default {
      components:{
          Info
      },
    data () {
      return {
        tab: null,
        items: [
          'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>