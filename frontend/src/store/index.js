import { createStore } from "vuex";
import axios from "axios";
// import sweet from "sweetalert";

// const naturalURL = "https://thandonaturals-1.onrender.com/products";

export default createStore({
  state: {
    Admin: null,
    products: null,
  },
  getters: {},
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const { data } = await axios.get('https://thandonaturals-1.onrender.com/products');
        console.log(data); 
       
          commit("setProducts", data); 
        
      } catch (e) {
        console.error(e);
      }
    },
  },
  modules: {},
});