<template>
<section class="hero is-small">
      <div class="hero-body">
        <div class="columns is-multiline">
        <div class="column is-12">
  <div class="">
      <h2
            class="title has-text-weight-bold has-text-white is-size-4"
          >
           Company Settings
          </h2>
            <div class="columns is-multiline has-background-white box">
              <div class="column is-4 m-4">
                <div class="image main_image">
                  <img src="#" alt="" class="p-2" />
                  <i class="bx bx-pencil box"></i>
                </div>
              </div>

              <div class="column m-4">
                <div class="field is-horizontal">
                  <!-- Name -->
                  <div class="field-body">
                    <div class="field">
                      <label class="label is-uppercase is-size-7">company name *</label>
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input is-small"
                          type="text"
                          placeholder="Company Name"
                          v-model="name"
                        />
                        <span class="icon is-small is-left">
                          <i class="bx bx-package"></i>
                        </span>
                      </p>
                    </div>
                    <div class="field">
                      <label class="label is-uppercase is-size-7">contact person *</label>
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input is-small"
                          type="text"
                          placeholder="Contact Person Name"
                          v-model="PersonName"
                        />
                        <span class="icon is-small is-left">
                          <i class="bx bx-package"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <label class="label is-uppercase mt-5 is-size-7">Address *</label>
                <div class="field is-4">
                  <div class="field-body">
                    <div class="field">
                      <p class="control">
                        <input
                          class="input is-small"
                          type="text"
                          v-model="address"
                          placeholder="Address"
                        />
                      </p>
                    </div>
                  </div>
                </div>

                
                <div class="field is-horizontal">
                  <div class="field-body">
                    <div class="field">
                        <label class="label is-uppercase mt-5 is-size-7"
                  >Country *</label
                >
                      <p class="control">
                        <input
                          class="input is-small"
                          type="text"
                          v-model="text"
                          placeholder="Country"
                        />
                      </p>
                    </div>
                    <div class="field">
                        <label class="label is-uppercase mt-5 is-size-7"
                  >City *</label
                >
                      <p class="control">
                        <input
                          class="input is-small"
                          type="text"
                          v-model="text"
                          placeholder="City"
                        />
                      </p>
                    </div>
                    <div class="field">
                        <label class="label is-uppercase mt-5 is-size-7"
                  >State</label
                >
                      <p class="control">
                        <input
                          class="input is-small"
                          type="text"
                          v-model="text"
                          placeholder="State"
                        />
                      </p>
                    </div>
                    <div class="field">
                        <label class="label is-uppercase mt-5 is-size-7"
                  >Postal Code</label
                >
                      <p class="control">
                        <input
                          class="input is-small"
                          type="text"
                          v-model="text"
                          placeholder="00100"
                        />
                      </p>
                    </div>
                  </div>
                </div>

               
                <div class="field is-horizontal mt-5">
                  <!-- Price -->
                  <div class="field-body">
                    <div class="field">
                      <label class="label is-uppercase is-size-7"
                        >Email *</label
                      >
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input is-small"
                          type="email"
                          placeholder="Email"
                          v-model="Email"
                        />
                        <span class="icon is-small is-left">
                          <i class="bx bx-money"></i>
                        </span>
                      </p>
                    </div>

                    <!-- Quantity -->
                    <div class="field">
                      <label class="label is-uppercase is-size-7"
                        >Phone Number *</label
                      >
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input is-small"
                          type="tel"
                          placeholder="+254712345678"
                          v-model="phone"
                        />
                        <span class="icon is-small is-left">
                          <i class="bx bx-phone"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <label class="label is-uppercase mt-5 is-size-7"
                  >Website Url *</label
                >
                <div class="field is-horizontal">
                  <div class="field-body">
                    <div class="field">
                      <p class="control">
                        <input
                          class="input is-small"
                          type="text"
                          v-model="url"
                          placeholder="Url..."
                        />
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  class="button has-text-white has-text-weight-bold is-size-6 is-dark"
                >
                  Save
                  <!-- <i class="bx bx-chevron-down"></i> -->
                </button>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
          </section>
</template>

<script>
export default {
    name:'Profile'

}
</script>

<style scoped>
.main_image {
  width: 15em;
  height: 17em;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
}
.variant_image {
  width: 3em;
  height: 3em;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 1em;
}
/* .variant_image img {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  background: #c4c4c4;
} */
 img {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  background: #c4c4c4;
}
.main_image i {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  /* border: 1px solid black; */
  border-radius: 4px;
  padding: 0.1em;
}
.variant_image i {
  position: absolute;
  top: 0.1em;
  right: 0.1em;
  /* border: 1px solid black; */
  border-radius: 5px;
  padding: 0.1em;
}

.button{
    border-radius: 20px;
    width:10em;
}

</style>