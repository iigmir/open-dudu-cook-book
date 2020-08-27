<template>
    <nav>
        <b-collapse class="card" animation="slide"
            v-for="(collapse, index) of collapses"
            v-bind:key="index"
            v-bind:open="isOpen == index"
            v-on:open="isOpen = index">
            <div class="card-header" slot="trigger" slot-scope="props" role="button">
                <p class="card-header-title">
                    {{ collapse.title }}
                </p>
                <a href="javascript:;" class="card-header-icon">
                    <b-icon v-bind:icon="props.open ? 'caret-down' : 'caret-up'"></b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                    <component v-bind:is="collapse.component" v-on:emit="emit_from_card"></component>
                </div>
            </div>
        </b-collapse>
    </nav>
</template>

<script>
import Group from "./group.vue";
import Feature from "./feature.vue";
import SearchMeal from "./search-meal.vue";
import SearchFood from "./search-food.vue";
import MealToday from "./today.vue";

export default {
    components: {
        Group,
        MealToday,
        SearchMeal,
        SearchFood,
        Feature,
    },
    data() {
        return {
            isOpen: 0,
            collapses: [
                {
                    title: "分組顯示",
                    component: "Group"
                },
                {
                    title: "今日餐桌",
                    component: "MealToday"
                },
                {
                    title: "查詢菜名",
                    component: "SearchMeal"
                },
                {
                    title: "查詢食材",
                    component: "SearchFood"
                },
                {
                    title: "主題菜譜",
                    component: "Feature"
                }
            ]
        };
    },
    methods: {
        emit_from_card(input = {}) {
            console.log(input);
        }
    },
};
</script>

<style lang="scss" scoped>
nav {
    max-height: 100%;
}
</style>
