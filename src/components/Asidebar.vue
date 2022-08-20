<template>
  <div class="sidebar">
    <div class="logo-details">
      <!-- icon -->
      <i class="bx bx-grid-alt"></i>
      <span class="logo_name">Company</span>
    </div>

    <!-- WATCHLIST -->
    <div class="watch">
      <div class="watch-title">WATCHLIST</div>
      <div class="Watch-details" style="margin-top: 5px">
        <div class="watch-content">
          <div class="branch_name">Branch E</div>
          <div class="branch_id">123213</div>
        </div>
        <p class="watch-profit">+3.45%</p>
      </div>
      <div class="Watch-details">
        <div class="watch-content">
          <div class="branch_name">Branch C</div>
          <div class="branch_id">127454</div>
        </div>
        <p class="watch-loss">-3.45%</p>
      </div>
    </div>

    <ul class="nav-links">
      <div class="nav-title">MAIN MENU</div>
      <li>
        <router-link class="link_icon" to="/">
          <!-- icon -->
          <i class="bx bx-tachometer has-text-black"></i>
          <span class="link_name">Dashboard</span>
        </router-link>
        <ul class="sub-menu blank">
          <li><router-link class="link_name" to="/">Dashboard</router-link></li>
        </ul>
      </li>

      <li>
        <div class="iocn-link">
          <router-link to="#">
            <!-- icon -->
            <i class="has-text-black"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                ></path></svg
            ></i>
            <span class="link_name">Products</span>
          </router-link>
          <!-- dropdown icon  -->
          <i class="bx bxs-chevron-down arrow"></i>
        </div>

        <ul class="sub-menu">
          <li><router-link class="link_name" to="#">Products </router-link></li>
          <li>
            <router-link to="/inventory" class="pl-2"
              >Inventory Management</router-link
            >
          </li>
          <li>
            <router-link to="/products" class="pl-2"
              >Product Management</router-link
            >
          </li>
        </ul>
      </li>

      <!-- <ul class="sub-menu">
          <li><router-link class="link_name" to="#">Customers</router-link></li>
          <li><router-link class="pl-2" to="#">Customers</router-link></li>
          <li><router-link class="pl-2" to="#">Customer Charts</router-link></li>
          <li><router-link class="pl-2" to="#">Customers Reviews</router-link></li>
        </ul> -->
      <li>
        <router-link class="link_icon" to="/customers">
          <!-- icon -->
          <i class="has-text-black"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path></svg
          ></i>
          <span class="link_name">Customers</span>
        </router-link>
        <ul class="sub-menu blank">
          <li>
            <router-link class="link_name" to="/customers"
              >Customers</router-link
            >
          </li>
        </ul>
      </li>
      

      <li>
        <div class="iocn-link">
          <router-link to="#">
            <!-- icon -->
            <i class="bx bxs-business has-text-black"></i>
            <span class="link_name">Branches</span>
          </router-link>
          <!-- dropdown icon  -->
          <i class="bx bxs-chevron-down arrow"></i>
        </div>
        <ul class="sub-menu">
          <li><router-link class="link_name" to="#">Branches </router-link></li>
          <li>
            <router-link href="/branches" class="pl-2" to="/branches"
              >All Branches</router-link
            >
          </li>
          <li><router-link class="pl-2" to="#">Warehouse</router-link></li>
        </ul>
      </li>

      <li>
        <div class="iocn-link">
          <router-link to="#">
            <!-- icon -->
            <i class="bx bx-user has-text-black"></i>
            <span class="link_name">Employees</span>
          </router-link>
          <!-- dropdown icon  -->
          <i class="bx bxs-chevron-down arrow"></i>
        </div>
        <ul class="sub-menu">
          <li>
            <router-link class="link_name" to="#">Employees </router-link>
          </li>
          <li><router-link class="pl-2" to="/employees">Staffs</router-link></li>
          <li><router-link class="pl-2" to="Leave">Leave</router-link></li>
          <li><router-link class="pl-2" to="/ex_employees">Ex employees</router-link></li>
        </ul>
      </li>

      <li>
        <div class="iocn-link">
          <router-link to="#">
            <!-- icon -->
            <i class="has-text-black"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path></svg
            ></i>
            <span class="link_name">Orders</span>
          </router-link>
          <!-- dropdown icon  -->
          <i class="bx bxs-chevron-down arrow"></i>
        </div>
        <ul class="sub-menu">
          <li>
            <router-link class="link_name" to="#">Orders </router-link>
          </li>
          <li><router-link class="pl-2" to="/orders">Orders</router-link></li>
          <li><router-link class="pl-2" to="/transactions">Transactions</router-link></li>
        </ul>
      </li>

      <li>
        <div class="iocn-link">
          <router-link to="/reports">
            <!-- icon -->
            <i class="bx bx-spreadsheet has-text-black"></i>
            <span class="link_name">Reports</span>
          </router-link>
          <!-- dropdown icon  -->
          <i class="bx bxs-chevron-down arrow"></i>
        </div>
        <ul class="sub-menu">
          <li><router-link class="link_name" to="/reports">Reports</router-link></li>
          <li><router-link class="pl-2" to="/accounts_reports">Accounts</router-link></li>
          <li><router-link class="pl-2" to="/staffs_reports">Staffs reports</router-link></li>
          <li>
            <router-link class="pl-2" to="/customer_reports">Customers reports</router-link>
          </li>
          <li><router-link class="pl-2" to="/branches_reports">Branch reports</router-link></li>
          <li><router-link class="pl-2" to="/hr_reports">HR reports</router-link></li>
        </ul>
      </li>

      <li>
        <router-link to="/settings">
          <!-- icon -->
          <i class="bx bx-cog has-text-black"></i>
          <span class="link_name">Settings</span>
        </router-link>
        <ul class="sub-menu blank">
          <li><router-link class="link_name" to="/settings">Settings </router-link></li>
        </ul>
      </li>

      <li>
        <div class="profile-details-help profile-details">
          <!-- logout icon  -->
          <i class="bx bx-phone has-text-black"></i>
          <div class="name-job">
            <div class="profile_name">Help & support</div>
          </div>
          <div class="profile-content"></div>
        </div>
      </li>
      <li>
        <div class="profile-details">
          <!-- logout icon  -->
          <i class="bx bx-moon"></i>
          <div class="name-job">
            <div class="profile_name">Dark Mode</div>
          </div>
          <div class="profile-content">
            <img
              id="slideout"
              v-bind:src="darkmode1"
              alt="img"
              @click="darkmode"
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Asidebar",
  data() {
    return {
      darkmode1: require("../assets/LandSwitchLightlight.svg"),
    };
  },
  methods: {
    //darkmode
    darkmode() {
      console.log("dark");
      if (this.darkmode1 === require("../assets/LandSwitchLightlight.svg")) {
        this.darkmode1 = require("../assets/LandSwitchDark.svg");
      } else {
        this.darkmode1 = require("../assets/LandSwitchLightlight.svg");
      }
      var slider = document.getElementById("slideout");
      slider.className += " slideout";
      setTimeout(function () {
        slider.classList.remove("slideout");
      }, 100);
      this.$store.commit('darkModeToggle')
    },

    // handleStyles() {
    //     console.log('handlestyles');

    //     // let sidebar = document.querySelector(".sidebar");
    //     // let menu = document.querySelector(".menu");
    //     // console.log(menu);
    //     // sidebar.classList.toggle("close");
    //     // console.log('menu');

    //     let arrow = document.querySelectorAll(".arrow");(e) => {
    //         let arrowParent = e.target.parentElement.parentElement;
    //         arrowParent.classList.toggle("showMenu");
    //         console.log('arrow')
    //     }

    // }
  },
};
</script>
<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 260px;
  background: linear-gradient(177.08deg, #892bda -7.99%, #9362f7 118.63%);
  z-index: 20;
  transition: all 0.5s ease;
}
.sidebar.close {
  width: 78px;
}
.sidebar .watch {
  margin-top: 30px;
}
.sidebar.close .watch {
  display: none;
  transition: all 0.5s ease;
}
.sidebar .watch .watch-title {
  margin: 0 30px;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #c4c4c4;
}
.sidebar .Watch-details {
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #c4c4c480;
  padding: 10px 10px;
  transition: all 0.5s ease;
  margin: 10px 30px;
  border-radius: 10px;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.05em;
  color: #000000;
}
.sidebar .Watch-details .branch_id {
  color: #24242490;
}
.sidebar .watch .watch-profit {
  color: #24ff00;
}
.sidebar .watch .watch-loss {
  color: #ff0000;
}

.sidebar .logo-details {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
}

.sidebar .logo-details i {
  font-size: 30px;
  color: #fff;
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
}

.sidebar .logo-details .logo_name {
  font-size: 25px;
  color: #fff;
  font-weight: 600;
  transition: 0.5s ease;
  transition-delay: 0.1s;
}

.sidebar.close .logo-details .logo_name {
  transition-delay: 0s;
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links {
  height: 75%;
  padding: 10px 0 12em 0;
  overflow: auto;
  margin-top: 0;
}
.sidebar.close .nav-links {
  overflow: visible;
}

.sidebar .nav-links::-webkit-scrollbar {
  display: none;
}

.sidebar .nav-links .nav-title {
  margin: 0 30px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #c4c4c4;
}
.sidebar.close .nav-links .nav-title {
  display: none;
}

.sidebar .nav-links li {
  position: relative;
  list-style: none;
  transition: all 0.4s ease;
}
.sidebar .nav-links li:hover {
  border-radius: 20px;
  background: rgba(196, 196, 196, 0.18);
  border: 1px solid rgba(196, 196, 196, 0.3);
  /*margin: 0 5px;*/
}

/* add more changes */
/* .sidebar ul.nav-links li:hover::before{
  position: absolute;
  top:-30px;
  right: 0;
  content: "";
  height:30px;
  width: 30px;
  background-color:rgba(221, 81, 237);
} 
 .sidebar .nav-links li:hover .link_name::before{
  position: absolute;
  top:-60px;
  right: 0;
  content: "";
  height:60px;
  width: 60px;
  background-color:#892bda;
  border-radius:50%
}
.sidebar .nav-links li:hover::after{
  position: absolute;
  bottom:-30px;
  right: 0;
  content: "";
  height:30px;
  width: 30px;
  background-color:rgba(221, 81, 237);
}
.sidebar .nav-links li:hover .link_name::after{
  position: absolute;
  bottom:-60px;
  right: 0;
  content: "";
  height:60px;
  width: 60px;
  background-color:#892bda;
  border-radius:50%;
  z-index: 1;
} */
.sidebar .nav-links li:hover .link_name {
  color: #000000;
}

.sidebar.close .nav-links li:hover .link_name {
  color: #c4c4c4;
}

.sidebar.close .nav-links li:hover {
  background: linear-gradient(177.08deg, #9362f7 -7.99%, #892bda 118.63%);
  border-radius: 2px;
  border: 0;
}
.sidebar .nav-links li .iocn-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar.close .nav-links li .iocn-link {
  display: block;
}

.sidebar .nav-links li i {
  height: 40px;
  min-width: 78px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.5s ease;
}

.sidebar.close .nav-links li i {
  line-height: 50px;
  height: 50px;
}

.sidebar .nav-links li.showMenu i.arrow {
  transform: rotate(-180deg);
  color: black;
}
.sidebar.close .nav-links i.arrow {
  display: none;
}
.sidebar .nav-links li a {
  display: flex;
  align-items: center;
  text-decoration: none;
  /* padding:0 5px; */
}

.sidebar .nav-links li a .link_name {
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */
  letter-spacing: 0.05em;
  color: #c4c4c4;
  transition: all 0.4s ease;
}

.sidebar.close .nav-links li a .link_name {
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links li .sub-menu {
  padding: 6px 6px 14px 80px;
  margin-top: -10px;
  display: none;
}
.sidebar.close .nav-links li .sub-menu {
  background: linear-gradient(177.08deg, #9362f7 -7.99%, #892bda 118.63%);
}

.sidebar .nav-links li.showMenu .sub-menu {
  display: block;
}

.sidebar .nav-links li .sub-menu a {
  color: #fff;
  font-size: 15px;
  padding: 5px;
  white-space: nowrap;
  opacity: 0.6;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.sidebar .nav-links li .sub-menu a:hover {
  opacity: 1;
}

.sidebar.close .nav-links li .sub-menu {
  position: absolute;
  left: 100%;
  top: -10px;
  margin-top: 0;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  opacity: 0;
  display: block;
  pointer-events: none;
  transition: 0s;
}

.sidebar.close .nav-links li:hover .sub-menu {
  top: 0;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.5s ease;
}

.sidebar .nav-links li .sub-menu .link_name {
  display: none;
}
.sidebar.close .nav-links li .sub-menu .link_name {
  display: none;
}

.sidebar.close .nav-links li .sub-menu .link_name {
  font-size: 18px;
  opacity: 1;
  display: block;
}

.sidebar .nav-links li .sub-menu.blank {
  opacity: 1;
  pointer-events: auto;
  padding: 3px 20px 6px 16px;
  opacity: 0;
  pointer-events: none;
}

.sidebar .nav-links li:hover .sub-menu.blank {
  top: 50%;
  transform: translateY(-50%);
}

.sidebar .profile-details {
  position: fixed;
  bottom: 0;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: left;
  background: #9362f7;
  padding: 0 0 6px 2px;
  transition: all 0.5s ease;
}
.sidebar .profile-details-help {
  position: fixed;
  bottom: 2.5em;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: left;
  background: #9362f7;
  padding: 0 0 6px 2px;
  transition: all 0.5s ease;
}
.sidebar.close .profile-details {
  width: 78px;
  background: none;
}

.sidebar .profile-details .profile_content {
  display: flex;
  align-items: center;
}
.sidebar .profile-details img {
  height: 1.2em;
  /* object-fit: cover; */
  margin: 5px 20px 0 35px;
  transition: all 0.6s ease;
  cursor: pointer;
}
.sidebar.close .profile-details img {
  margin: 0 15px 0 14px;
}

.sidebar.close .profile-details img {
  cursor: pointer;
}

.sidebar .profile-details .profile_name,
.sidebar .profile-details .job {
  color: #c4c4c4;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
}

.sidebar.close .profile-details i,
.sidebar.close .profile-details .profile_name,
.sidebar.close .profile-details .job {
  display: none;
}

.sidebar .profile-details .job {
  font-size: 11px;
}

/* slide fade out */
.slideout {
  /* animation: 1s ease-in 0s 1 slideInFromLeft; */
  animation: fade 1s ease-in-out;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
