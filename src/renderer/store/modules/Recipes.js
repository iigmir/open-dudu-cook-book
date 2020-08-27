import default_list from "../../assets/COOKBOOK.xml";
import default_theme from "../../assets/themelist.xml";
import default_src from "../../assets/CookSourceList.xml";

const state = {
    default_src,
    default_list,
    default_theme,
};

const getters = {
    default_list_getter(state) {
        return state.default_list.book.record;
    },
    default_src_getter(state) {
        return state.default_src.allsource.record;
    },
    default_theme_getter(state) {
        return state.default_theme.alltheme.theme;
    }
};

const mutations = {};

const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
