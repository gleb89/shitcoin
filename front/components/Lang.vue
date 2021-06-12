<template>
    <v-menu
      bottom
      origin="center center"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          
          dark
          v-bind="attrs"
          v-on="on"
        >
        <span>Язык</span>
          <fa icon="angle-down"></fa>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Русский' },
        { title: 'English' },
        { title: 'Español' },
   
      ],
    }),
  }
</script>

<style scoped>
@media (max-width: 500px) {
  span {
    font-size: 9px;
  }
}
</style>