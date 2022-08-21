<template>
 <div>
    <section class="hero">
      <div class="hero-body">
        <div class="">
          <h2 class="title has-text-weight-bold has-text-black is-size-4">
            Orders
          </h2>
          <div class="columns is-fullwidth has-background-white box">
            <div class="column m-2 box has-background-faded-pink">
              <h2
                class="is-size-6 has-text-weight-bold has-text-black is-size-4 has-text-centered"
              >
                Active Orders
              </h2>
            </div>
            <div class="column m-2 box has-background-faded-pink">
              <h2
                class="is-size-6 has-text-weight-bold has-text-black is-size-4 has-text-centered"
              >
                Shipped orders
              </h2>
            </div>
            <div class="column m-2 box has-background-faded-pink">
              <h2
                class="is-size-6 has-text-weight-bold has-text-black is-size-4 has-text-centered"
              >
                Returned Orders
              </h2>

            </div>
            <div class="column m-2 box has-background-faded-pink">
              <h2
                class="is-size-6 has-text-weight-bold has-text-black is-size-4 has-text-centered"
              >
                Closed orders
              </h2>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
