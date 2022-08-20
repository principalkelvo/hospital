<template>
  <section id="cover" class="hero is-fullheight">
    <div id="cover-caption" class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-5 is-offset-4 has-background-faded-purple box has-text-white p-4 my-6">
            <h1 class="title has-text-white">Login</h1>
            <p class="has-text-centered is-size-6 ">
                  Log in to your account to continue
                </p>
                <div class="columns is-multiline my-1 is-flex">
                  <div class="column box mx-4 my-1">
                    <i class="bx bxl-facebook bx-md"></i>
                  </div>
                  <div class="column box mx-4 my-1">
                    <i class="bx bxl-instagram bx-md"></i>
                  </div>
                  <div class="column box mx-4 my-1">
                    <i class="bx bxl-google bx-md"></i>
                  </div>
                   <div class="column box mx-4 my-1">
                    <i class="bx bxl-github bx-md"></i>
                  </div>
                </div>
                <p class="has-text-centered is-size-6 my-3 text">
                  Or Log in with email
                </p>
            <form
              @submit.prevent="submitForm"
              class="is-justify-content-center"
            >
              <div class="field">
                <label class="is-size-6">Username</label>
                <div class="control">
                  <input
                    type="name"
                    name="username"
                    class="input is-small"
                    placeholder="Email"
                    v-model="username"
                  />
                </div>
              </div>
              <div class="field">
                <label class="is-size-6">Password</label>
                <div class="control">
                  <input
                    type="password"
                    name="password"
                    class="input is-small"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>
              </div>
              <div class="has-text-warning mb-2 has-text-left" v-if="errors.length">
                <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
              </div>
              <div class="field">
                <div class="control">
                  <button class="button is-pink has-text-white is-fullwidth is-small">
                    Submit
                  </button>
                </div>
              </div>

              <hr />
              <p class="is-size-7">
                Don't have an account yet?<router-link
                  to="/signup"
                  class="has-text-warning"
                >
                  Register
                </router-link><br>
                Or
                <router-link to="/forgot_password" class="has-text-warning">
                  Forgot Password
                </router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import {toast} from 'bulma-toast'

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errors: [],
    };
  },
    mounted(){
      document.title='Welcome | POS'
    },
    methods:{
      async submitForm(){
        this.$store.commit('setIsLoading',true)
            this.errors=[]
      if(this.username===''){
        this.errors.push('The username is missing')
      }
      if(this.password===''||this.password.length<4){
        this.errors.push('The password is too short')
      }
        axios.defaults.headers.common['Authorization']='' //reset the authorization
        localStorage.removeItem('token') //just to make sure that we are not auntheticated
        const formData={
          username: this.username,
          password: this.password
        }
        await axios
          .post('/api/v1/token/login/',formData)
          .then(response=>{
            const token=response.data.auth_token

            this.$store.commit('setToken', token)
            axios.defaults.headers.common['Authorization']='Token '+ token
            localStorage.setItem('token', token)

            
          })
           .catch(error=>{
              if(error.response){
                for(const property in error.response.data){
                  this.errors.push(`${property}:${error.response.data[property]}`)
                }
              }
              else if(error.message){
                this.errors.push('Something went wrong. Please try again')
              }
            })

            await axios
              .get('/api/v1/users/me')
              .then(response =>{
                this.$store.commit('setUser',{'id':response.data.id, 'username':response.data.username})

                //save it to localStorage
                localStorage.setItem('username', response.data.username)
                localStorage.setItem('userId', response.data.id)
                console.log(response.data)
                //back to previous page or to home
                const toPath = this.$route.query.to || '/'
                this.$router.push(toPath)
              })
              .catch(error =>{
                console.log(error)
              })

            this.$store.commit('setIsLoading',false)
      }
    }
};
</script>
<style scoped>
#cover {
  /* background: #222 url('https://unsplash.it/1920/1080/?random') center center no-repeat; */
  background-size: cover;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  position: relative;
}
/* @media screen and (max-width: 1024px){
  #cover{
    height: 100%;
  }
} */

#cover-caption {
  width: 100%;
  position: relative;
  z-index: 1;
}

/* only used for background overlay not needed for centering */
/* form:before {
  content: "";
  height: 100%;
  left: 18%;
  position: absolute;
  top: 0;
  width: 65%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: -1;
  border-radius: 10px;
} */

.text{
  white-space: auto;
}
/* stroke before and after */
 /* .text::before {
    content: "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0";
    text-decoration: line-through;
    color: #f178ff;

    margin: auto 0.3em;
  }
  .text::after {
    content: "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0";
    text-decoration: line-through;
    color: #f178ff;
    margin: auto 0.3em;
  } */
.field {
  text-align: left;
}
</style>
