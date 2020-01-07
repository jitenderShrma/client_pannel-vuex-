import Vue from 'vue';
import Vuex from 'vuex';
import Clients from './modules/client';

// Load Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Clients
    }
});