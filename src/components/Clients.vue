<template>
    <div>
<div class="row">
    <div class="col col-md-6">
        <h2><i class="fa fa-users"></i> Clients</h2>
    </div>
    <div class="col col-md-6">
        <h5 class="text-right text-secondary">Total Own: XXXXXX</h5>
    </div>
</div>
<table v-if="allClients.length>0" class="table table-striped">
    <thead class="thead-inverse">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Balance</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr v-bind:key="client.id" v-for="client in allClients">
            <td>{{client.firstName}} {{client.lastName}}</td>
            <td>{{client.email}}</td>
            <td>{{client.balance}} "₹"</td>
            <td>
                <router-link :to="{name:'client', params:{id:client.id}}" class="btn btn-secondary">
                    <i class="fa fa-arrow-circle-o-right"></i> Details
                </router-link>
            </td>
        </tr>
    </tbody>
</table>


<div v-else>
    <hr>
    <h5>There are no clients in your system.</h5>
</div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'Clients',
    computed: mapGetters(['allClients']),
    methods: {
        ...mapActions(['getClients'])
    },
    created(){
        this.getClients();
    }
}
</script>