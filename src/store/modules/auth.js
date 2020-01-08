/* eslint-disable */
import firebase from 'firebase';
import db from '../../fb/firebaseInit';
import router from '../../router';

const state = {
    isAuthenticated: false,
    user: {}
}

const actions = {
    registerUser: ({commit}, email, password) => {
        // firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        //     console.log('user info ', user);
        //     commit('registerUser', user);
        //   }).catch((err) => {
        //     console.log(err.message);
        //   });
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
    }
};

const getters = {};

const mutations = {
    registerUser: (state, userInfo) => {
        console.log('userInfo', userInfo);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}