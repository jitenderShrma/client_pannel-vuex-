<template>
    <div class="row">
        <div class="col-md-6 mx-auto">
            <div class="card">
                <div class="card-body">
                    <h1 class="text-center pb-4 pt-3">
                        <i class="fa fa-lock"></i> Client Pannel Register
                    </h1>
                    <form @submit="onRegisterSubmit">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input class="form-control" type="text" id="email" name="email" v-model="email">
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="text" id="password" name="password" class="form-control" v-model="password">
                        </div>
                        <input type="submit" class="btn btn-primary btn-block" value="Register" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import { mapActions } from 'vuex';
  export default {
      name: 'Register',
      data(){
        return {
          email: '',
          password: '',
        }
      },
      methods: {
        ...mapActions(['registerUser']),
        onRegisterSubmit(e){
          if(this.email == '' || this.password == ''){
            alert('please fill email and password.');
          } else {
            // hit register action
            this.registerUser(this.email, this.password);
          }
          e.preventDefault();
        }
      }
  }
</script>