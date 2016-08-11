import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    nums: 0
}

const mutations = {
    ADDINCAR: (state, mount) => {
        state.nums += mount
    }
}

export default new Vuex.Store({
    state,
    mutations
})
