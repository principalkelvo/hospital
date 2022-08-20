<template>
  <section id="cover" class="hero">
    <div id="cover-caption" class="hero-body">
      <div class="container">
        <div class="columns ">
          <div class="column is-5 is-offset-4 has-background-faded-purple box p-4 has-text-white my-4">
            <h1 class="title has-text-white">Sign Up</h1>
            <p class="has-text-centered is-size-6 ">
                  Choose your social account to create account
                </p>
                <div class="columns is-multiline my-1 is-flex is-justify-content-center">
                  <div class="column is-2 mx-4 my-1">
                    <i class="bx bxl-facebook bx-md"></i>
                  </div>
                  <div class="column is-2 mx-4 my-1">
                    <i class="bx bxl-instagram bx-md"></i>
                  </div>
                  <div class="column is-2 mx-4 my-1">
                    <i class="bx bxl-google bx-md"></i>
                  </div>
                   <div class="column is-2 mx-4 my-1">
                    <i class="bx bxl-github bx-md"></i>
                  </div>
                </div>
                <p class="has-text-centered is-size-6 my-3 text">
                  Or Register with email
                </p>
            <form
              @submit.prevent="submitForm"
              class="is-justify-content-center"
            >
              <div class="field">
                <label class="is-size-7">Username</label>
                <div class="control">
                  <input
                    type="name"
                    name="name"
                    class="input is-small"
                    placeholder="Username"
                    v-model="username"
                  />
                </div>
              </div>
              <div class="field">
                <label class="is-size-7">Email</label>
                <div class="control">
                  <input
                    type="email"
                    name="email"
                    class="input is-small"
                    placeholder="Email"
                    v-model="Email"
                  />
                </div>
              </div>
              <div class="field ">
                <label class="is-size-7">Password</label>
                <div class="control">
                  <input
                    type="password"
                    name="password1"
                    class="input is-small"
                    placeholder="Password"
                    v-model="password1"
                  />
                </div>
              </div>
              <div class="field">
                <label class="is-size-7">Confirm password</label>
                <div class="control">
                  <input
                    type="password"
                    name="password2"
                    class="input is-small"
                    placeholder="Confirm Password"
                    v-model="password2"
                  />
                </div>
              </div>
              <div class=" has-text-warning mb-2 has-text-left" v-if="errors.length">
                <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
              </div>
              <div class="field ">
                <div class="control ">
                  <button class="button has-background-pink has-text-white is-fullwidth is-small">Create Account</button>
                </div>
              </div>

              <hr />
              <p class="is-size-7">
              do you have an account? <router-link to="/login" class=" has-text-warning">Log-in </router-link>
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
  name: "SignUp",
  data(){
    return{
      username:'',
      email:'',
      password1 :'',
      password2:'',
      errors:[]
      }
  },
  mounted(){
    document.title='Register | POS'
  },
  methods:{
    async submitForm(){

      this.$store.commit('setIsLoading',true)
      this.errors=[]
      if(this.username===''){
        this.errors.push('The username is missing')
      }
      if(this.password1===''||this.password1.length<4){
        this.errors.push('The password is too short')
      }
      if(this.password1!==this.password2){
        this.errors.push('The passwords are not matching')
      }
      if(!this.errors.length){
        const formData={
          email: this.email,
          username:this.username,
          password:this.password1
        }
        axios
          .post('/api/v1/users/',formData)
          .then(response=>{
            toast({
              message:'Account was created, Please login',
              type:'is-success',
              dismissible:true,
              pauseOnHover:true,
              duration:2000,
              position:'bottom-right'
            })
            this.$router.push('/login')
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

          this.$store.commit('setIsLoading',false)
      }
    }
  }
};
</script>

<style scoped>
#cover {
  /* background: #222 url('https://unsplash.it/1920/1080/?random') center center no-repeat; */
  /* background-size: cover; */
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  position: relative;
}

#cover-caption {
  width: 100%;
  position: relative;
  z-index: 1;
}



/* only used for background overlay not needed for centering */
/* form:before {
  content: "";
  height: 100%;
  left:0;
  position: absolute;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: -1;
  border-radius: 10px;
} */
.field{
    text-align: left;
}
</style>
