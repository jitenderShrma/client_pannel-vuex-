<template>
  <div>
    <div class="row">
      <div class="col col-md-6">
        <router-link to="/" class="btn btn-link">
          <i class="fa fa-arrow-circle-o-left"></i> Back To Dashboard
        </router-link>
      </div>
      <div class="col col-md-6"></div>
    </div>
    <div class="card">
      <div class="card-header">Edit Client</div>
      <div class="card-body">
        <form @submit="onClientSubmit">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              class="form-control"
              name="firstName"
              v-model="client.firstName"
            />
          </div>

          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              class="form-control"
              name="lastName"
              v-model="client.lastName"
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="text" class="form-control" name="email" v-model="client.email" />
          </div>

          <div class="form-group">
            <label for="phone">Phone</label>
            <input id="phone" type="text" class="form-control" name="phone" v-model="client.phone" />
          </div>

          <div class="form-group">
            <label for="balance">Balance</label>
            <input
              id="balance"
              type="text"
              class="form-control"
              name="balance"
              v-model="client.balance"
            />
          </div>

          <input type="submit" class="btn btn-primary btn-block" value="Add Client" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Add-Client",
  components: {
    // ValidationProvider
  },
  data() {
    return {
    };
  },
  computed: mapGetters(["client"]),
  mounted() {
    // alert('mounted');
  },
  created() {
    // hit action to fetch client by client id
    const clientId = this.$route.params.id;
    this.getClientById(clientId);
  },
  watch: {
    client() {
      console.log("client spy by watch spyware", this.client);
    }
  },
  methods: {
    ...mapActions(["getClientById", "updateClient"]),
    onClientSubmit(e) {
      this.updateClient(this.client);
      // prevent default
      e.preventDefault();
    }
  }
};
</script>