<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <div id="navbar-item" class="mt-4">
        <span class="icon">
          <i class="bx bx-anchor bx-md menu" @click="handleStyles"></i>
        </span>
      </div>
      <!--search button-->
      <div class="navbar-start">
        <div class="navbar-item">
          <form method="get" action="/search">
            <div class="field">
              <!--search input-->
              <div class="control is-flex">
                <input
                  type="text"
                  class="input is-small is-rounded"
                  placeholder="&#xebf7; Search..."
                  name="query"
                />
              </div>

              <!--search input icon-->
              <!-- <div class="control">
                                <button class="button">
                                    <span class="icon">
                                        <i class="bx bx-search"></i>
                                    </span>
                                </button>
                            </div> -->
            </div>
          </form>
        </div>
      </div>
      <!-- <a
        class="navbar-burger burger has-text-white"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-menu"
        @click="showMobileMenu = !showMobileMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a> -->
    </div>
    <!-- <div
      class="navbar-menu"
      id="navbar-menu"
      v-bind:class="{ 'is-active': showMobileMenu }"
    > -->
    <div class="navbar-end">
      <!--<router-link to="/home" class="navbar-item">HOME</router-link>
                <router-link to="/about" class="navbar-item">ABOUT US</router-link>-->

      <div class="dropdown is-hoverable" @click="drop" id="dropdown">
        <div class="dropdown-trigger navbar-item">
            <span class=" " >
               <i class="bx bx-bell bx-sm" aria-hidden="true">
          <p class="notifications">2</p></i
      >
            </span>
          </div>

          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <ul class="dropdown-content">
              <li href="" class="is-flex dropdown-item"> <a> First Notification</a></li>
              <li href="" class="is-flex dropdown-item"> <a> second Notification</a></li>
              <li href="" class="is-flex dropdown-item"> <a> shipping Notification</a></li>
              <li href="" class="is-flex dropdown-item"> <a> delivery Notification</a></li>
              <li href="" class="is-flex dropdown-item"> <a> promotion</a></li>
            </ul>
          </div>
      </div>
<!-- 
      <router-link to="/about" class="navbar-item"
        ><i class="bx bx-bell bx-sm">
          <p class="notifications">2</p></i
      ></router-link> -->

      <div>
        <div class="profile-details mr-5 ">
          <img src="#" alt="img" />

          <div class="name-job">
            <div class="profile_name">Doctor</div>
            <div class="job">Admin</div>
          </div>

          <div class="profile-content">
            <div class="dropdown is-hoverable is-right" id="dropdown">
              <!-- <div class="dropdown-trigger"> -->
              <span class="icon">
                <i class="bx bxs-chevron-down" aria-hidden="true"></i>
              </span>
              <!-- </div> -->
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <ul class="dropdown-content">
                  <li class="is-flex dropdown-item">
                    <svg class="svg-icon mr-0 text-secondary" id="h-01-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                          </svg>
                  <a href="" class=""> My Profile </a>
                  </li>
                  <li class="is-flex dropdown-item">
                    <svg class="svg-icon mr-0 text-secondary" id="h-02-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                          </svg>
                  <a href="" class=""> Edit Profile</a>
                  </li>
                  <li class="is-flex dropdown-item">
                    <svg class="svg-icon mr-0 text-secondary" id="h-03-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                          </svg>
                  <a href="" class=""> Account Settings </a>
                  </li>
                  <li class="is-flex dropdown-item">
                    <svg class="svg-icon mr-0 text-secondary" id="h-04-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                          </svg>
                  <a href="" class=""> Privacy Settings</a>
                  </li>
                  <li class="is-flex dropdown-item">
                    <svg class="svg-icon mr-0 text-secondary" id="h-05-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                          </svg>
                  <a @click="logout()"> Logout </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--<div class="buttons">
                    <router-link to="#" class="button is-success"><span class="icon"><i class="bx bx-bell"
                                aria-hidden="true"></i></span><span></span>
                    </router-link>
                </div>-->
    </div>
    <!-- </div> -->
  </nav>
</template>

<script>
import axios from 'axios'
export default {
  name: "Navbar",
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    drop(){
      let drop = document.querySelector(".dropdown");
      drop.classList.toggle("is-active");
    },
    //logout
    async logout() {
      await axios
        .post('/api/v1/token/logout/')
        .then(response=>{
          console.log('logged out')
        })
        .catch(error=>{
          console.log(JSON.stringify(error))
        })
        axios.defaults.headers.common['Authorization']=''
        localStorage.removeItem('token')
        this.$store.commit('removeToken')
        this.$router.push('/login')

    },


    handleStyles() {
      console.log("handlestyles");

      let sidebar = document.querySelector(".sidebar");
      let menu = document.querySelector(".menu");
      console.log(menu);
      sidebar.classList.toggle("close");
      menu.classList.toggle("rotate");
      console.log("menu");

      // let arrow = document.querySelectorAll(".arrow");
      // for (var i = 0; i < arrow.length; i++) {
      //   arrow[i].addEventListener("click", (e) => {
      //     let arrowParent = e.target.parentElement.parentElement;
      //     arrowParent.classList.toggle("showMenu");
      //     console.log('arrow')
      //   });
      // }
    },
  },
};
</script>

<style lang="scss" scoped>

@media screen and (max-width: 425px) {
  .navbar-item {
    padding-right: 0;
    padding-left: 0;
  }
  input {
    display: none;
  }
  .navbar .profile-details {
    justify-content: left !important;
    margin-right: 0 !important;
  }
  
  .profile-details .profile_name,
  .profile-details .job,.profile-details .name-job
   {
    display: none;
    width: 0 !important;
  }
}

@media screen and (max-width: 1024px) {
  .navbar-end {
    justify-content: flex-end;
    margin-left: auto;
  }
}
@media screen and (max-width: 1024px) {
  .navbar,
  .navbar-menu,
  .navbar-start,
  .navbar-end {
    align-items: stretch;
    display: flex;
  }
}


.menu {
  transform: rotate(-90deg);
  transition: all .4s ease;

}
.menu.rotate {
  transform: rotate(-270deg);
  color: rgb(255, 0, 0);
}

input::placeholder {
  font-family: "boxicons";
  color: rgba(0, 0, 0, 0.809);
}


//profile dropdown
li>a {
    // color: #324253;
    padding: 0 10px;
    display: block;
    white-space: nowrap;
}
a {
    // color: #3378ff;
    text-decoration: none;
    background-color: transparent;
}

//dropdown
.dropdown-menu .dropdown-item:hover {
    color: #3378ff;
    background: rgba(51,120,255,.1);
}

.dropdown-item:hover {
    border-radius: 5px;
}
.dropdown-menu {
  min-width: 9rem;
}

.navbar .profile-details {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0 0 0;
  transition: all 0.4s ease;

  
}
.dropdown:hover {
    cursor: pointer;
  }

.profile-details .profile_content {
  display: flex;
  align-items: center;
}

.profile-details img {
  height: 40px;
  min-width: 40px;
  // object-fit: cover;
  border-radius: 50%;
  transition: all 0.5s ease;
  margin: 0 0.2em 0 0.4em;
}

.profile-details .profile_name,
.profile-details .job {
  color: #fff;
  font-size: 13px;
}


.navbar-item i.bx.bx-bell {
  position: "relative";
  width: 40px;
}
// .navbar-item i.bx.bx-bell::after {
//   content: "9";
//   position: absolute;
//   background: #c4c4c4;
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   border: 2px solid #ff0000;
//   bottom: 20%;
//   right: 30%;
//   font-size: 12px;
//   font-weight: 600;
//   text-align: center;
//   padding: 1.5px 0;
// }
.navbar-item i.bx.bx-bell p.notifications{
  position: absolute;
  background: #c4c4c4;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #ff0000;
  bottom: 20%;
  right: 30%;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  padding: 1.5px 0;
}
a.navbar-item:focus,
a.navbar-item:focus-within,
a.navbar-item:hover,
a.navbar-item.is-active,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
.navbar-link.is-active {
  background-color: transparent;
  color: #ffffff;
}
</style>
