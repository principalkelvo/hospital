<template>
  <div class="mt-5">
    <h2 class="title has-text-weight-bold has-text-black is-size-4">
      {{ title }}
    </h2>
    <div class="column is-12">
      <input type="text" class="input is-small is-rounded column is-4 mb-2" placeholder="&#xebf7; Search..."
        v-model="searchTerm" />
      <vue-good-table :columns="columns" :rows="rows" :line-numbers="true" max-height="500px" :search-options="{
        enabled: true,
        externalQuery: searchTerm,
      }" :pagination-options="{
  enabled: true,
  mode: 'pages',
  perPage: 5,
}" styleClass="vgt-table condensed" compactMode class="has-text-centered">
        <!-- format images -->
        <template #table-row="props">
          <span v-if="props.column.field == 'get_image'">
            <div class="product-tb">
              <img :src="props.row.get_image" class="image mr-2" />
            </div>
          </span>

          <span v-else>
            {{ props.formattedRow[props.column.field] }}
          </span>

          <span v-if="props.column.field == 'btn'">
            <span class="icon mr-2 is-clickable">
              <router-link :to="{ name: 'Employee', params: { id: props.row.reg_no } }"><svg
                  xmlns="http://www.w3.org/2000/svg" class="has-text-dark" width="16" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                  </path>
                </svg></router-link>
            </span>

            <span class="icon is-clickable">
              <router-link :to="{ name: 'EditEmployee', params: { id: props.row.reg_no } }"><i
                  class="bx bx-pencil has-text-dark"></i></router-link>
              <!-- {{props.row.reg_no}} -->
              <!-- <i class="bx bx-pencil "></i> -->
            </span>

            <!-- <span class="icon">
              <i class="bx bx-trash is-clickable" style="color: red"></i>
            </span> -->
          </span>
        </template>

        <!-- add action buttons -->
        <template #table-actions>

          <div class="buttons">
            <router-link to="#" class="button has-text-white has-text-weight-bold is-size-7 is-pink mx-2">
              <i class="bx bx-chevron-down mr-2"></i>
              <span>Export</span>
            </router-link>
            <router-link to="#" class="button has-text-white has-text-weight-bold is-size-7 is-pink mx-2">
              <i class="bx bx-chevron-down mr-2"></i>
              <span> Add Employee </span>
            </router-link>
          </div>
        </template>
      </vue-good-table>
    </div>
  </div>
</template>

<script>
import { VueGoodTable } from "vue-good-table-next";
import axios from "axios";

export default {
  name: "allTable",
  props: ['title'],
  data() {
    return {
      searchTerm: "",
      columns: [
        { label: "ID", field: "reg_no", tdClass: "is-size-7" },
        { label: "Employee", field: "get_image", tdClass: "is-size-7" },
        { label: "Number", field: "reg_no", tdClass: "is-size-7" },
        { label: "Name", field: "fname", tdClass: "is-size-7" },
        {
          label: "E-mail",
          field: "email",
          width: "20px",
          tdClass: "is-size-7",
        },
        { label: "Position", field: "position", tdClass: "is-size-7" },
        { label: "Location", field: "location", tdClass: "is-size-7" },
        { label: "status", field: "status", tdClass: "is-size-7" },
        { label: "Action", field: "btn", html: true },
      ],
      rows: [],
    };
  },
  components: {
    VueGoodTable,
  },
  mounted() {
    this.getEmployees();
  },
  methods: {
    async getEmployees() {
      this.$store.commit("setIsLoading", true);
      await axios
        .get("/api/v1/employees/")
        .then((response) => {
          this.rows = response.data;
          // console.log(this.rows.reg_no);
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
input::placeholder {
  font-family: "boxicons";
  color: rgba(0, 0, 0, 0.809);
}

.product-tb {
  display: flex;
  justify-content: center;

  img {
    height: 42px;
    min-width: 54.55px;
    width: 54.55px;
    object-fit: cover;
    border-radius: 10px;
    padding: 0.05em;
    background: #c4c4c4;
  }
}
</style>