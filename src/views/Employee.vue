<template>
  <div>
    <div class="section">
      <h2 class="title">Profile</h2>
      <!-- Main card -->
      <div class="columns is-multiline">
        <div class="column is-12">
          <div class="card">
            <div class="is-flex-tablet">
              <div class="card-content column is-6">
                <div class="media br-dashed-2">
                  <div class="media-left">
                    <figure class="image is-128x128">
                      <img v-bind:src="employee.image" alt="employee image" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{{ employee.fname }}</p>
                    <p class="title is-4">## {{ employee.username }}</p>
                    <p class="subtitle is-6">{{ employee.position }}</p>
                    <p class="has-text-weight-bold">
                      Employee ID : #{{ employee.id_card }} 
                    </p>
                    <p class="has-text-weight-normal">
                      Employee status : {{ employee.status }}
                    </p>
                    <br />
                    <router-link
                      to="#"
                      class="button has-text-white has-text-weight-bold is-size-6 message-btn"
                    >
                      <span> Send Message</span>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="card-content column is-6">
                <ul class="">
                  <li class="is-flex">
                    <div class="subtitle">Phone:</div>
                    <div class="text"><a href="">9876543210</a></div>
                  </li>
                  <li class="is-flex">
                    <div class="subtitle">Email:</div>
                    <div class="text">
                      <a href="">{{ employee.email }}</a>
                    </div>
                  </li>
                  <li class="is-flex">
                    <div class="subtitle">Birthday:</div>
                    <div class="text">24th July</div>
                  </li>
                  <li class="is-flex">
                    <div class="subtitle">Address:</div>
                    <div class="text">
                      1861 Bayonne Ave, Manchester Township, NJ, 08759
                    </div>
                  </li>
                  <li class="is-flex">
                    <div class="subtitle">Gender:</div>
                    <div class="text">Male</div>
                  </li>
                </ul>
              </div>
            </div>
            <footer class="card-footer">
              <span
                class="card-footer-item is-clickable"
                @click="active = 'Profile'"
                >Profile</span
              >
              <span
                class="card-footer-item is-clickable"
                @click="active = 'Sales'"
                >Sales</span
              >
              <span
                class="card-footer-item is-clickable"
                @click="active = 'Bank'"
                >Bank & Statutory
                <small class="has-text-danger">(Admin Only)</small></span
              >
            </footer>
          </div>
        </div>
      </div>

      <!-- profile -->
      <div v-if="active == 'Profile'">
        <!-- personal info -->
        <div class="columns is-fullwidth">
          <div class="card m-2 column">
            <div class="card-header">
              <p class="card-header-title">Personal Information</p>
              <i
                class="bx bx-pencil is-clickable p-1 m-3"
                @click="modal = 'personal_info'"
              ></i>
            </div>
            <div class="is-flex-tablet">
              <div class="card-content card-width">
                <ul class="">
                  <li class="is-flex">
                    <div class="subtitle">National No.</div>
                    <div class="text">543210</div>
                  </li>
                  <li class="is-flex">
                    <div class="subtitle">Tel</div>
                    <div class="text">+254712345678</div>
                  </li>
                  <li class="is-flex">
                    <div class="subtitle">Nationality</div>
                    <div class="text is-capitalized">Kenyan</div>
                  </li>
                  <li class="is-flex">
                    <div class="subtitle">Religion</div>
                    <div class="text is-capitalized">Christian</div>
                  </li>
                  <li class="is-flex">
                    <div class="subtitle">Marital Status</div>
                    <div class="text is-capitalized">
                      {{ employee.marital_status }}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card m-2 column is-6">
            <div class="card-header">
              <p class="card-header-title">Emergency Contact</p>
              <i class="bx bx-pencil is-clickable p-1 m-3"></i>
            </div>
            <p class="title is-size-6 mb-0 mt-2 has-text-weight-bold">
              Primary
            </p>
            <div class="is-flex-tablet">
              <div class="card-content card-width pt-1 pb-0">
                <ul class="">
                  <li class="is-flex">
                    <div class="subtitle">Name</div>
                    <div class="text is-capitalized">John Smith</div>
                  </li>
                  <li class="is-flex">
                    <div class="subtitle">Relationship</div>
                    <div class="text is-capitalized">Father</div>
                  </li>
                  <li class="is-flex">
                    <div class="subtitle">Phone:</div>
                    <div class="text">9876543210</div>
                  </li>
                </ul>
              </div>
            </div>
            <hr class="my-2" />
            <p class="title is-size-6 mb-0 has-text-weight-bold">Secondary</p>
            <div class="is-flex-tablet">
              <div class="card-content card-width pt-1">
                <ul class="">
                  <li class="is-flex">
                    <div class="subtitle">Name</div>
                    <div class="text is-capitalized">John Smith</div>
                  </li>
                  <li class="is-flex">
                    <div class="subtitle">Relationship</div>
                    <div class="text is-capitalized">Brother</div>
                  </li>
                  <li class="is-flex">
                    <div class="subtitle">Phone:</div>
                    <div class="text">9876543210</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-fullwidth my-2">
          <div class="card m-2 column">
            <div class="card-header">
              <p class="card-header-title">Bank Information</p>
              <i class="bx bx-pencil is-clickable p-1 m-3"></i>
            </div>
            <div class="is-flex-tablet">
              <div class="card-content card-width">
                <ul class="">
                  <li class="is-flex">
                    <div class="subtitle">Bank Name</div>
                    <div class="text is-capitalized">KCB Bank</div>
                  </li>
                  <li class="is-flex">
                    <div class="subtitle">Account No.</div>
                    <div class="text">34329876543210</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card m-2 column is-6">
            <div class="card-header">
              <p class="card-header-title">Family Information</p>
              <i class="bx bx-pencil is-clickable p-1 m-3"></i>
            </div>
            <div class="is-flex-tablet">
              <div class="card-content card-width">
                <vue-good-table
                  :columns="columns"
                  :rows="rows"
                  :line-numbers="true"
                  max-height="140px"
                ></vue-good-table>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-fullwidth my-2">
          <div class="card mx-2 mt-2 column">
            <div class="card-header">
              <p class="card-header-title">Education Information</p>
              <i class="bx bx-pencil is-clickable p-1 m-3"></i>
            </div>
            <div class="is-flex-tablet">
              <div class="card-content card-width"></div>
            </div>
          </div>

          <div class="card m-2 column is-6">
            <div class="card-header">
              <p class="card-header-title">Experience</p>
              <i class="bx bx-pencil is-clickable p-1 m-3"></i>
            </div>
            <div class="is-flex-tablet">
              <div class="card-content card-width"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sales -->
      <!-- create table for sales of the employee -->
      <div v-if="active == 'Sales'">
        <div class="columns is-fullwidth">
          <div class="card mx-2 mt-2 column is-12">
            <div class="card-header">
              <p class="card-header-title">Sales Information</p>
            </div>
            <div class="is-flex-tablet">
              <div class="card-content card-width">
                <p>No sales made...</p>
                <!-- <vue-good-table></vue-good-table> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--bank-->
      <div v-if="active == 'Bank'">
        <div class="columns is-fullwidth">
          <div class="card mx-2 mt-2 column is-12">
            <div class="card-header">
              <p class="card-header-title">Basic Salary Information</p>
              <i class="bx bx-pencil is-clickable p-1 m-3"></i>
            </div>

            <div class="is-flex-tablet">
              <div class="card-content card-width">
                <ul class="">
                  <li class="is-flex">
                    <div class="subtitle">Bank Name</div>
                    <div class="text is-capitalized">KCB Bank</div>
                  </li>
                  <li class="is-flex">
                    <div class="subtitle">Account No.</div>
                    <div class="text">34329876543210</div>
                  </li>
                  <li class="is-flex">
                    <div class="subtitle">Salary basis</div>
                    <div class="text is-capitalized">Monthly</div>
                  </li>
                  <li class="is-flex">
                    <div class="subtitle">
                      Salary amount
                      <small class="has-text-darker">(per month)</small>
                    </div>
                    <div class="text">Ksh 20,000</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modals -->
      <div v-if="modal == 'personal_info'">
        <div class="modal is-active">
          <div class="modal-background" @click="modal=''"></div>
          <div class="modal-card">
            <div class="modal-close is-large" aria-label="close"  @click="modal=''"></div>
            
            <section class="modal-card-body">
              <form @submit.prevent="submitForm">
                <div class="columns is-multiline has-background-white box">
                  <!-- upload profile image -->
                  <div class="column is-12 is-flex is-justify-content-center">
                    <div class="image is-128x128" >
                      <img class="p-2" v-bind:src="previewImage" />

                      <i
              class="bx bx-pencil box is-clickable"
              @click="$refs.file.click()"
            >
            </i>

            <input
              ref="file"
              type="file"
              accept="image/*"
              style="display:none"
              @change="onFileSelected"
              @input="pickFile"
            />
                    </div>
                  </div>

                  <div class="column m-4">
                    <div class="field is-horizontal">
                      <!-- Name -->
                      <div class="field-body">
                        <div class="field">
                          <label class="label is-uppercase is-size-7"
                            >First name *</label
                          >
                          <p class="control is-expanded has-icons-left">
                            <input
                              class="input is-small"
                              type="text"
                              placeholder="First Name"
                              v-model="employee.fname"
                            />
                            <span class="icon is-small is-left">
                              <i class="bx bx-user"></i>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <label class="label is-uppercase mt-5 is-size-7"
                      >National ID *</label
                    >
                    <div class="field is-4">
                      <div class="field-body">
                        <div class="field">
                          <p class="control is-expanded has-icons-left">
                            <input
                              class="input is-small"
                              type="text"
                              v-model="employee.id_card"
                              placeholder="ID number"
                            />
                            <span class="icon is-small is-left">
                              <i class="bx bx-card"></i>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="field is-horizontal">
                      <!-- Name -->
                      <div class="field-body">
                        <div class="field">
                          <label class="label is-uppercase is-size-7"
                            >Registration Number *</label
                          >
                          <p class="control is-expanded has-icons-left">
                            <input
                              class="input is-small"
                              type="number"
                              placeholder="Registration Number"
                              v-model="employee.reg_no"
                            />
                            <span class="icon is-small is-left">
                              <i class="bx bx-package"></i>
                            </span>
                          </p>
                        </div>

                        <!-- Status -->

                        <div class="field">
                          <label class="label is-uppercase is-size-7"
                            >Status *</label
                          >
                          <div class="control">
                            <div class="select is-fullwidth is-small">
                              <select class="select" v-model="employee.status">
                                <option value="inactive">Inactive</option>
                                <option value="active">Active</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="field is-horizontal mt-5">
                      <!-- Phone -->
                      <div class="field-body">
                        <div class="field">
                          <label class="label is-uppercase is-size-7"
                            >Phone Number *</label
                          >
                          <p class="control is-expanded has-icons-left">
                            <input
                              class="input is-small"
                              type="tel"
                              placeholder="Phone number"
                              v-model="employee.phone"
                            />
                            <span class="icon is-small is-left">
                              <i class="bx bx-phone"></i>
                            </span>
                          </p>
                        </div>

                        <!-- Email -->
                        <div class="field">
                          <label class="label is-uppercase is-size-7"
                            >Email *</label
                          >
                          <p class="control is-expanded has-icons-left">
                            <input
                              class="input is-small"
                              type="email"
                              placeholder="Email"
                              v-model="employee.email"
                            />
                            <span class="icon is-small is-left">
                              <i class="bx bxs-envelope"></i>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="field is-horizontal mt-5">
                      <!-- location -->
                      <div class="field-body">
                        <div class="field">
                          <label class="label is-uppercase is-size-7"
                            >Location *</label
                          >
                          <p class="control is-expanded has-icons-left">
                            <input
                              class="input is-small"
                              type="text"
                              placeholder="Location"
                              v-model="employee.location"
                            />
                            <span class="icon is-small is-left">
                              <i class="bx bx-map"></i>
                            </span>
                          </p>
                        </div>

                        <!-- Quantity -->
                        <div class="field">
                          <label class="label is-uppercase is-size-7"
                            >Branch *</label
                          >
                          <p class="control is-expanded has-icons-left">
                            <input
                              class="input is-small"
                              type="text"
                              placeholder="employee"
                              v-model="employee.branch"
                            />
                            <span class="icon is-small is-left">
                              <i class="bx bxs-store"></i>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="field is-horizontal">
                      <!-- Name -->
                      <div class="field-body">
                        <div class="field">
                          <label class="label is-uppercase is-size-7"
                            >Position *</label
                          >
                          <p class="control is-expanded has-icons-left">
                            <input
                              class="input is-small"
                              type="text"
                              placeholder="Position"
                              v-model="employee.position"
                            />
                            <span class="icon is-small is-left">
                              <i class="bx bx-package"></i>
                            </span>
                          </p>
                        </div>

                        <!-- Marital Status -->

                        <div class="field">
                          <label class="label is-uppercase is-size-7"
                            >Marital Status *</label
                          >
                          <div class="control">
                            <div class="select is-fullwidth is-small">
                              <select
                                class="select"
                                v-model="employee.marital_status"
                              >
                                <option value="married">Married</option>
                                <option value="single">Single</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- upload all documents -->
                    <label class="label is-uppercase mt-5 is-size-7"
                      >upload documentation *</label
                    >
                    <div class="field is-horizontal">
                      <div class="field-body">
                        <div class="field">
                          <p class="control">
                            <input
                              class="input is-small"
                              type="text"
                              v-model="document_tags"
                              placeholder="Documents Tags"
                            />
                          </p>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <div class="column is-12 is-flex is-justify-content-center">
                      <button
                        class="button has-text-white has-text-weight-bold is-size-6 is-pink"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </div>
          <!-- <div class="modal-content has-background-danger py-5 px-5">
          <h3 class="title mb-6">join that</h3>
        </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueGoodTable } from "vue-good-table-next";

import axios from "axios";
import { toast } from "bulma-toast";
export default {
  name: "EditEmployee",
  data() {
    return {
      fname: "",
      lname: "",
      id_card: "",
      reg_no: "",
      emp_status: "active",
      phone: "",
      email: "",
      location: "",
      branch: "", //not added to backend
      position: "",
      marital_status: "single",
      document_tags: "", //not added to backend
      image: "",

      currentImage: undefined,
      previewImage: undefined,
      progress: 0,

      employee: [],

      columns: [
        {
          label: "Name",
          field: "name",
        },
        {
          label: "Relationship",
          field: "relationship",
        },
        {
          label: "Phone",
          field: "phone",
        },
      ],
      rows: [
        {
          id: 1,
          name: "John",
          relationship: "brother",
          phone: "0799922223",
        },
        {
          id: 2,
          name: "Paul",
          relationship: "father",
          phone: "0799922223",
        },
      ],
      active: "Profile",
      modal: "p",
    };
  },

  components: {
    VueGoodTable,
  },

  mounted() {
    this.getEmployee();
    
  },

  methods: {
    onFileSelected(event) {
      this.currentImage = this.$refs.file.files.item(0);
      this.previewImage = URL.createObjectURL(this.currentImage);
      this.image = event.target.files[0];
      console.log(this.image);
    },

    selectImage() {
      this.$refs.file.click();
    },
    pickFile() {
      let input = this.$refs.file;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = reader.result;
          console.log(" image " + this.previewImage);
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },

    async getEmployee() {
      this.$store.commit("setIsLoading", true);
      const employeeID = this.$route.params.id;
      axios
        .get(`api/v1/employees/${employeeID}/`)
        .then((response) => {
          this.employee = response.data;
          console.log(this.employee.user.username);
          this.previewImage = this.employee.image;
          console.log(this.previewImage)
        })
        .catch((error) => {
          console.log(error);
        });
      this.$store.commit("setIsLoading", false);
    },

    async submitForm() {
      this.$store.commit("setIsLoading", true);
      const employeeID= this.$route.params.id

      let formData = new FormData();
      formData.append("image", this.image);
      formData.append("name", this.employee.fname);
      formData.append("id_card", this.employee.reg_no_card);
      formData.append("reg_no", this.employee.reg_no);
      formData.append("email", this.employee.email);
      formData.append("emp_status", this.employee.emp_status);
      formData.append("phone", this.employee.phone);
      formData.append("position", this.employee.position);
      formData.append("location", this.employee.location);
      formData.append("marital_status", this.employee.marital_status);
      console.log(this.formData);

      await axios
        .patch(`/api/v1/employees/${employeeID}/`, formData,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
          toast({
            message:'The employee was successfully updated',
            type: 'is-grey box',
            dismissible:true,
            pauseOnHover:true,
            duration:2000,
            position:'bottom-right',
          })
          this.modal=''
        })
        .catch((error) => {
          console.log(error);
        });
      this.$store.commit("setIsLoading", false);
    },
  },
};

</script>

<style lang="scss" scoped>
// .main_image {
//   width: 100%;
//   max-width: 15em;
//   height: 17em;
//   border: 1px solid #000000;
//   box-sizing: border-box;
//   border-radius: 10px;
// }
/* .variant_image {
  width: 3em;
  height: 3em;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 1em;
} */
/* .variant_image img {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  background: #c4c4c4;
} */

.image i {
  position: absolute;
  top: 1em;
  right: 1em;
  /* border: 1px solid black; */
  border-radius: 4px;
  padding: 0.1em;
}
img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    // background: #c4c4c4;
  }
.variant_image i {
  position: absolute;
  top: 0.1em;
  right: 0.1em;
  /* border: 1px solid black; */
  border-radius: 5px;
  padding: 0.1em;
}
.card {
  word-wrap: break-word;
  .br-dashed-2 {
    border-right: 2px dashed #ccc;
  }
  // img {
  //   height: 100%;
  //   width: 100%;
  //   border-radius: 50%;
  //   object-fit: contain;
  //   background: #c4c4c4;
  // }

  li {
    .subtitle {
      color: #4f4f4f;
      min-width: 25%;
      font-size: 0.95em;
      font-weight: 500;
      margin-bottom: 0.5em;
      word-break: normal;
      float: left;
    }
    .text {
      color: #8e8e8e;
      display: block;
      overflow: hidden;
    }
  }
  .card-width {
    width: 100%;
    .subtitle {
      color: #4f4f4f;
      min-width: 40%;
      font-size: 0.95em;
      font-weight: 500;
      margin-bottom: 0.5em;
      word-break: normal;
      float: left;
    }
    .text {
      color: #8e8e8e;
      display: block;
      overflow: hidden;
    }
  }
  .bx {
    background-color: #eee;
    border: 1px solid #e3e3e3;
    border-radius: 50%;
    color: #bbb;
    float: right;
    font-size: 0.9em;
    text-align: center;
    transition: all 0.5s ease;
    width: 24px;
    height: 24px;
  }
  .bx:hover {
    background-color: #8a33de;
    border-color: #8a33de;
    color: #fff;
  }
  .has-text-weight-bold {
    color: #000000d9;
  }
  .message-btn {
    background: linear-gradient(to left, #9362f7 0%, #8a33de 100%);
  }
}

@media only screen and(max-width: 768px) {
  .card {
    word-wrap: break-word;
    .br-dashed-2 {
      border-right: none;
      border-bottom: 2px dashed #ccc;
    }
  }
}
@media only screen and (max-width: 575.98px) {
}
</style>
