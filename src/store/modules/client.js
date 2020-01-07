/* eslint-disable */
import db from '../../fb/firebaseInit';

setTimeout(() => {
    
}, 2000);

// State
const state = {
    clients: [],
    client: {}
};

// actions
const actions = {
    getClients: ({commit, state}) => {
        db.collection('clients').onSnapshot(snap => {
            let clients = [];
           snap.forEach(doc => {
                clients.push({
                    id: doc.id,
                    ...doc.data()
                });
                // db.collection("clients")
                // .onSnapshot(snap => {
                //     snap.forEach(doc => {
                //         console.log(doc.data());
                //     });
                // })
                // .then();
                commit('allClients', clients)
            });
        });
    },
    getClientById({commit}, clientId){
        db.collection('clients').where('id', '==', clientId).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                commit('client',{id: doc.id, ...doc.data()});
            });
        });
    },
    deleteClient({commit}, clientId){
        db.collection('clients').where('id', '==', clientId).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                doc.ref.delete();
                commit('deleteClient');
            });
        });
    }
};

// getters
const getters = {
    allClients: state => state.clients,
    client: state => state.client
};


// mutations
const mutations = {
    allClients: (state, clients) => (state.clients = clients),
    client: (state, client) => (state.client = client),
    deleteClient: (state) => (state.client = {})
};

export default {
    state,
    getters,
    actions,
    mutations
}