/* eslint-disable */
import db from '../../fb/firebaseInit';
import router from '../../router'

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
                commit('allClients', clients)
            });
        });
    },
    getClientById({commit}, id){
        db.collection('clients').doc(id).get().then(doc => {
            commit('client', {id: doc.id, ...doc.data()});
        })
    },
    deleteClient({commit}, clientId){
        db.collection('clients').doc(clientId).get().then(doc => {
            doc.ref.delete();
            router.push({path:'/'});
        });
    },
    updateClient({commit}, client){
        db.collection('clients').doc(client.id).update(client)
          .then(() => {
              commit('client', client);
              router.push({path:`${client.id}`})
          })
          .catch(error => console.log(error));
    },
    addClient({commit}, client){
        db.collection('clients').add(client).then(() => {
            // redirec to dashboard
            router.push({path:'/'})
            // show success message
        }).catch(error => {
            // show error message
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


