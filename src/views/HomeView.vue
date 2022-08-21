<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="">
          <h2 class="title has-text-weight-bold has-text-black is-size-4">
            Summary
          </h2>
          <div class="columns is-fullwidth has-background-white box">
            <div class="column m-2 box has-background-faded-pink">
              <h2 class="is-size-6 has-text-weight-bold has-text-black is-size-4 has-text-centered">
                TOTAL PATIENTS
              </h2>
            </div>
            <div class="column m-2 box has-background-faded-pink">
              <h2 class="is-size-6 has-text-weight-bold has-text-black is-size-4 has-text-centered">
                ACTIVE PATIENTS
              </h2>
            </div>
            <div class="column m-2 box has-background-faded-pink">
              <h2 class="is-size-6 has-text-weight-bold has-text-black is-size-4 has-text-centered">
                TOTAL NURSES
              </h2>

            </div>
            <div class="column m-2 box has-background-faded-pink">
              <h2 class="is-size-6 has-text-weight-bold has-text-black is-size-4 has-text-centered">
                TOTAL DOCTORS
              </h2>

            </div>
          </div>
        </div>
      </div>
      <div class="hero-body">
        <div class="columns is-fullwidth has-background-white box">
          <allTable title="Patients" />
        </div>
      </div>
      <div class="hero-body">
        <div class="columns is-fullwidth has-background-white box">
          <allTable title="Nurses" />
        </div>
      </div>
      <div class="hero-body">
        <div class="columns is-fullwidth has-background-white box">
          <allTable title="Doctors" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import {ref} from 'vue'
// @ is an alias to /src
import allTable from '@/components/allTable.vue'

export default {
  name: 'HomeView',
  components: {
    allTable,
  },
}
</script>
