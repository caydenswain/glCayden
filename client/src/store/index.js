import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const authModule = {
    state: {
        token: localStorage.getItem('token') || '',
        user: null,
        status: '', // 'loading', 'success', 'error'
        errorMsg: null,
    },
    mutations: {
        SET_STATUS(state, status) {
            state.status = status;
        },
        SET_TOKEN(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        CLEAR_AUTH(state) {
            state.token = '';
            state.user = null;
            state.status = '';
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];
        },
        SET_ERROR(state, message) {
            state.errorMsg = message;
        }
    },
    actions: {
        async login({ commit }, userData) {
            commit('SET_STATUS', 'loading');
            try {
                const response = await axios.post('/api/auth/login', userData);
                commit('SET_TOKEN', response.data.token);
                commit('SET_USER', response.data.user);
                commit('SET_STATUS', 'success');
            } catch (error) {
                commit('SET_STATUS', 'error');
                commit('CLEAR_AUTH');
                commit('SET_ERROR', error.response.data.message || 'Login failed');
                throw error;
            }
        },
        async logout({ commit }) {
            commit('CLEAR_AUTH');
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        currentUser: state => state.user,
        errorMessage: state => state.errorMsg,
    }
};

export default new Vuex.Store({
    modules: {
        auth: authModule
    }
});
