<template>
    <div class="today">
        <div class="rec" v-on:click="click_event('Today','recipe')">
            <h1 class="title is-4">今日食譜</h1>
        </div>
        <div class="fod" v-on:click="click_event('Today','food')">
            <h1 class="title is-4">今日菜籃</h1>
        </div>
    </div>
</template>

<script>
import emits from "./child-emits.js";
export default {
    name: "Today",
    mixins: [ emits ]
};
</script>
