import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: []
  },
  getters: {
    getPosts(state) {
      return state.posts
    }

  },
  mutations: {
    SET_POSTS(state, payload) {
      state.posts = payload;
    }
  },
  actions: {
    async loadPosts({commit}){
      try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (response.ok) {
          let posts = await response.json();
          commit('SET_POSTS', posts);
        } else {
          alert("Ошибка HTTP: " + response.status);
        }
      } catch(error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
