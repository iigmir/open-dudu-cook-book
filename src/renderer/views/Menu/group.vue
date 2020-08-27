<template>
    <div class="group">
        <a href="javascript:;" class="card-header-icon" v-on:click="click_event('Group','style')">
            <b-icon icon="book-open"></b-icon>
            菜系
        </a>
        <a href="javascript:;" class="card-header-icon" v-on:click="click_event('Group','taste')">
            <b-icon icon="pepper-hot"></b-icon>
            按口味
        </a>
        <a href="javascript:;" class="card-header-icon" v-on:click="click_event('Group','stype')">
            <b-icon icon="leaf"></b-icon>
            按食材類別
        </a>
        <a href="javascript:;" class="card-header-icon" v-on:click="click_event('Group','ctype')">
            <b-icon icon="mug-hot"></b-icon>
            按烹飪類別
        </a>
        <a href="javascript:;" class="card-header-icon" v-on:click="click_event('Group','season')">
            <b-icon icon="tree"></b-icon>
            按適宜季節
        </a>
    </div>
</template>

<script>
import emits from "./child-emits.js";

export default {
    name: "Group",
    mixins: [ emits ]
};
</script>

<style lang="scss" scoped>
.group {
    text-align: left;
}
.card-header-icon {
    justify-content: initial;
}
</style>