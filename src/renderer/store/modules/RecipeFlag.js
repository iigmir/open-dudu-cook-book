const state = {
    sorted_type: "",
    sorted_tag: "",
    sorted_id: ""
};

const mutations = {
    set_sorted_type(state, value = "") {
        state.sorted_type = value;
    },
    set_sorted_tag(state, value = "") {
        state.sorted_tag = value;
    },
    set_sorted_id(state, value = "") {
        state.sorted_id = value;
    },
};

const actions = {
    SET_sorted_type({ commit }, value = "") {
        commit( "set_sorted_type", value );
    },
    SET_sorted_tag({ commit }, value = "") {
        commit( "set_sorted_tag", value );
    },
    SET_sorted_id({ commit }, value = "") {
        commit( "set_sorted_id", value );
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
