export const state = () => {
    return {
      cases:[],
  
  
  
    }
  }
  
  export const mutations = {
    setCases (state,cases) {
    state.cases = cases
  
    },
  
  
  }
  
  export const actions = {
    async fetch({commit,state}){
        const headers = {
            "Content-Type": "application/json"
          };
        const cases = await this.$axios
        .$get(`https://apifglkd.ru/cases/`,{
          headers: headers
        })
        commit('setCases',cases)
  
    }
  }
  
  export const getters = {
    cases: s => s.cases,
  
  
  }