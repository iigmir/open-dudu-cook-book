<template>
    <div class="feature">
        <div class="theme list">
            <h1 class="title is-4">主題列表</h1>
            <ul>
                <li v-for="(theme, theme_id) in themes" v-bind:key="theme_id">
                    <a v-on:click="idx = theme_id" href="javascript:;">{{ theme.$.name }}</a>
                </li>
            </ul>
        </div>
        <div v-if="idx >= 0" class="sub-dish list">
            <h1 class="subtitle is-5">{{ current_theme.$.name }}</h1>
            <ul>
                <li v-for="(cti_item, cti_id) in current_theme_items" v-bind:key="cti_id">
                    <a v-on:click="click_event('Feature', cti_item)" href="javascript:;">{{ cti_item }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import emits from "./child-emits.js";
import { mapState } from "vuex";

export default {
    name: "Feature",
    mixins: [ emits ],
    data: () => ({
        idx: -1,
    }),
    computed: {
        ...mapState({
            default_theme: state => state.Recipes.default_theme
        }),
        themes() {
            return this.default_theme.alltheme.theme;
        },
        current_theme() {
            return this.idx < 0 ? {} : this.themes[this.idx];
        },
        current_theme_items() {
            return this.current_theme.item ?
                this.current_theme.item.split("|").filter(t=>t.length>0) :
                [];
        }
    }
};
</script>

<style lang="scss" scoped>
.feature ul {
    margin-bottom: 1.5rem;
}
</style>
