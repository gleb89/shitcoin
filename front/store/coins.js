export const state = () => {
    return {
      coins:[],
  
  
  
    }
  }
  
  export const mutations = {
    setcoins (state,coins) {
    state.coins = coins
  
    },
  
  
  }
  
  export const actions = {
    async fetch({commit,state}){
        const headers = {
            "Content-Type": "application/json"
          };
        const coins = await this.$axios
        .$get(`/api/coinslist/`,{
          headers: headers
        })
        commit('setcoins',coins)
  
    }
  }
  
  export const getters = {
    coins: s => s.coins,
  
  
  }