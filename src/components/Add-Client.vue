<template>
    <div>
        <div class="row">
    <div class="col col-md-6">
        <router-link to="/" class="btn btn-link">
            <i class="fa fa-arrow-circle-o-left"></i> Back To Dashboard 
        </router-link>
    </div>
    <div class="col col-md-6">
    </div>
</div>

<div class="card">
    <div class="card-header">
        Add Client
    </div>
    <div class="card-body">
        <form @submit="onClientSubmit">
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input id="firstName" type="text" class="form-control" name="firstName" v-model="firstName">
            </div>

            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input id="lastName" type="text" class="form-control" name="lastName" v-model="lastName">
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input id="email" type="text" class="form-control" name="email" v-model="email">
            </div>

            <div class="form-group">
                <label for="phone">Phone</label>
                <input id="phone" type="text" class="form-control" name="phone" v-model="phone">
            </div>

            <div class="form-group">
                <label for="balance">Balance</label>
                <input id="balance" type="text" class="form-control" name="balance" v-model="balance">
            </div>

            <input type="submit" class="btn btn-primary btn-block" value="Add Client" />
        </form>
    </div>
</div>

    </div>
</template>

<script>
/* eslint-disable */
import {mapActions} from 'vuex';
export default {
    name:'Add-Client',
    components: {
        // ValidationProvider
    },
    data(){
        return {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            balance: null
        }
    },
    methods:{
        ...mapActions(['addClient']),
        onClientSubmit(e){
            const newClient = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                phone: this.phone,
                balance: this.balance
            }
            this.addClient(newClient);
            // prevent default
            e.preventDefault();
        }
    }
}

</script>