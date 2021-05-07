<template>
<div>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Rank
          </th>
          <th class="text-left">
            Name
          </th>
        <th class="text-left">
            Marketcap
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
        style="cursor:pointer"
        @click="onCoin(item.name)"
          v-for="item in desserts"
          :key="item.name"
        >
          
          <td style="height: 5rem;">{{ item.calories }}</td>
          <td style="height: 5rem;">{{ item.name }}</td>
          <td style="height: 5rem;">{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    <div class="text-center">
    <v-pagination
      v-model="page"
      :length="10"
      circle
    ></v-pagination>
  </div>
  </div>
</template>

<script>
  export default {
      methods:{
          onCoin(name){
              this.$router.push('/coins_list/'+name)
          }
      },
    data () {
      return {
          page: 1,
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
  }
</script>

<style scoped>
td{
  height: 5rem;
}
</style>