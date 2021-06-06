<template>
  <div>
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" style="width: 3rem; font-weight: bold">#</th>
            <th class="text-left">Logo</th>
            <th class="text-left">Name</th>
            <th class="text-left">Price</th>
            <th class="text-left">Market cap</th>
            <th class="text-left">Volume(24h)</th>
            <th class="text-left">24h%</th>
            <th class="text-left">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          <tr
            style="cursor: pointer"
            @click="onCoin(coin.id)"
            v-for="coin in listcoins.results"
            :key="coin.name"
          >
            <td style="height: 5rem; width: 3rem; font-weight: bold">
              {{ listcoins.results.indexOf(coin)+1 }}
            </td>
            <td style="height: 5rem; width: 3rem; font-weight: bold">
              <img style="width: 1rem" :src="coin.image" alt="" />
            </td>
            <td style="height: 5rem; width: 6rem; font-weight: bold">
              {{ coin.name }}
            </td>
            <td style="height: 5rem; width: 3rem; font-weight: bold">
              ${{ onCap(coin.price) }}
            </td>
            <td style="height: 5rem; width: 3rem; font-weight: bold">
              ${{ onCap(coin.market_cap) }}
            </td>
            <td style="height: 5rem; width: 3rem; font-weight: bold">
              $ {{ onCap(coin.volume) }}
            </td>
            <td
              class="onactive"
              :class="{ active: onProc(coin.price_exc) }"
              style="height: 5rem; width: 3rem"
            >
              {{ coin.price_exc }}%
            </td>
            <td style="height: 5rem; width: 3rem">
          <Chatrs :coin="coin"/>

            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    
  </div>
</template>

<script>
import Chatrs from "@/components/Chatrs";
export default {
  props: ["listcoins"],
  components:{
    Chatrs
  },
  computed: {
  },
  methods: {
    onProc(price) {
      if (price[0] === "-") {
        return true;
      } else {
        return false;
      }
    },

    onCoin(name) {
      this.$router.push("/coins_list/" + name);
    },
    onCap(cap) {
      let newcap = cap;
      return newcap.toLocaleString()
    },

  },
  data() {
    return {
      page: 1,
      vidtchatrs:false
          
    };
  },
};
</script>

<style scoped>
td {
  height: 5rem;
}
.onactive {
  color: #16c784;
}
.active {
  color: #ea3943;
}
</style>




