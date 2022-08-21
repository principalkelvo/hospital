import { createStore } from 'vuex'

export default createStore({
  state: {
          //loading
          isLoading: true,

          // authentication 
          isAuthenticated: false,
          token: '',
  
          user: {
              id: 0,
              username: '',
          }
  },
  getters: {
  },
  mutations: {
       // to know if we had logged in
       initializeStore(state) {
        // if yes
        if (localStorage.getItem('token')) {
            state.token = localStorage.getItem('token')
            state.isAuthenticated = true

            state.user.username = localStorage.getItem('username')
            state.user.id = localStorage.getItem('user_id')
        } //if not logged in
        else {
            state.token = ''
            state.isAuthenticated = false
            state.user.id = 0
            state.user.username = ''
        }
    },

    // change of loading status
    setIsLoading(state, status) {
        state.isLoading = status
    },
    // function to set token
    setToken(state, token) {
        state.token = token
        state.isAuthenticated = true
    },
    // function to sign out
    removeToken(state) {
        state.token = ''
        state.isAuthenticated = false
    },

    setUser(state, user) {
        state.user = user
    }
  },
  actions: {
  },
  modules: {
  }
})
