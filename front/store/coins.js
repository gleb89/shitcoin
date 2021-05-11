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
        .$get(`http://localhost:8000/api/v1/coinslist/`,{
          headers: headers
        })
        commit('setcoins',coins)
  
    }
  }
  
  export const getters = {
    coins: s => s.coins,
  
  
  }