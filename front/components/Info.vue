<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 basil--text">
        Info
      </h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
        @click="onItem(item)"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card
          color="basil"
          flat
        >
          <v-card-text v-if="iteminfo === 'График'">
              <Price/>
          </v-card-text>
        <v-card-text v-if="iteminfo === 'Описание'">
              <About/>
          </v-card-text>
        <v-card-text v-if="iteminfo === 'Рынки'">
              <Market/>
          </v-card-text>
        <v-card-text v-if="iteminfo === 'Коментарии'">
              <Comments/>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import Price from  "@/components/Price";
import About from  "@/components/About";
import Market from  "@/components/Market";
import Comments from  "@/components/Comments";
  export default {
      components:{
          Price,
          About,
          Market,
          Comments
      },
    data () {
      return {
        tab:null,
        iteminfo:'График',
        items: [
          'График', 'Описание', 'Рынки', 'Коментарии',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
    methods:{
        onItem(item){
            this.iteminfo = item
        }

    }
  }
</script>