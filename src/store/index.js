import Vue from 'vue';
import Vuex from 'vuex';
import Clients from './modules/client';
import Auth from './modules/auth';

// Load Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Auth,
        Clients
    }
});