<template>
    <div>
        <div class="row">
    <div class="col-md-6">
        <router-link to="/" class="btn btn-link">
            <i class="fa fa-arrow-circle-o-left"></i> Back To Dashboard
        </router-link>
    </div>
    <div class="col-md-6">
        <div class="btn-group pull-right">
            <router-link :to="{name: 'client-edit', params:{clientId:client.id}}" class="btn btn-dark">Edit</router-link>
            <button class="btn btn-danger" @click="onDeleteClick()">Delete</button> 
        </div>
    </div>
</div>

<hr>

<div class="card" v-if="client">
    <div class="card-header">{{client.firstName}} {{client.lastName}}</div>
    <div class="card-body">
        <div class="row">
            <div class="col-md-6 col-sm-6">
                <h4>Client Id {{client.id}}</h4>
            </div>
            <div class="col-md-6 col-sm-6">
                <h3 class="pull-right">
                    Balance
                    <span>{{client.balance}} "₹"</span>
                    <a v-bind:style="{cursor:'pointer'}" @click="showBalanceInput = !showBalanceInput">
                        <i class="fa fa-pencil ml-1"></i>
                    </a>
                </h3>
            </div>
        </div>
       <div class="card card-body">
            <div class="row">
            <div class="col-md-10 col-sm-6">
                <div class="clearfix">
                    <form @submit="onBalanceUpdate" v-if="showBalanceInput">
                        <div class="input-group ml-4">
                            <input type="text" name="balance" v-model="balance">
                            <span class="input-group-btn">
                        <button type="submit" class="btn btn-primary ">Update</button>
                      </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       </div>
        <hr>
        <ul class="list-group">
            <li class="list-group-item">
                Contact Email: {{client.email}}
            </li>
            <li class="list-group-item">
                Contact Phone: {{client.phone}}
            </li>
        </ul>
    </div>
</div>  
    </div>
</template>

<script>
/* eslint-disable */
import {mapActions, mapGetters} from 'vuex';
export default {
    computed:{
        ...mapGetters(['client']),
        
    },

    methods:{
        ...mapActions(['getClientById', 'deleteClient', 'updateClient']),
        onDeleteClick(){
            this.deleteClient(this.client.id);
            // show delete message
        },
        onBalanceUpdate(e){
            if(this.balance == 0){
                alert('balance must be grater than 1');
            } else {
                // call an action
                this.updateClient({...this.client, balance:this.balance});
                //  show alert message
                // make back to false form field
                this.showBalanceInput = false;
            }
            e.preventDefault();
        }
    },
    watch: {
        client(){
            this.balance = this.client.balance;
        }
    },
    data(){
        return {
            showBalanceInput: false,
            balance:0
        }
    },
    async mounted(){
        await this.getClientById(this.$route.params.id);
    }
}
</script>