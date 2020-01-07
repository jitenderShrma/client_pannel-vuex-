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
            <!-- <router-link :to="/client/edit/{{clientId}}" class="btn btn-dark">Edit</router-link>-->
            <button class="btn btn-danger" @click="onDeleteClick(client.id)">Delete</button> 
        </div>
    </div>
</div>
<hr>
<div class="card" v-if="client">
    <div class="card-header">{{client.firstName}} {{client.lastName}}</div>
    <div class="card-body justify-content">
        <div class="row">
            <div class="col-md-8 col-sm-6">
                <h4>Client Id {{client.id}}</h4>
            </div>
            <div class="col-md-8 col-sm-6">
                <h3 class="pull-right">
                    Balance
                    <span>{{client.balance}} "₹"</span>
                    <!-- <a [ngStyle]="{cursor:'pointer'}" (click)="showBalanceUpdate =!showBalanceUpdate">
                        <i class="fa fa-pencil ml-1"></i>
                    </a> -->
                </h3>
                <div class="clearfix">
                    <form>
                        <div class="input-group">
                            <input type="text" name="balance">
                            <span class="input-group-btn">
                        <button type="submit" class="btn btn-primary ">Update</button>
                      </span>
                        </div>
                    </form>
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
    computed: mapGetters(['client']),
    methods:{
        ...mapActions(['getClientById', 'deleteClient']),
        onDeleteClick(id){
            this.deleteClient(id);
            this.$router.push('/');
        }
    },
    mounted(){
        this.getClientById(this.$route.params.id);
    }
}
</script>