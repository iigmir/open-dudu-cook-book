<template>
    <div class="today">
        <div class="rec" v-on:click="click_event('Today','recipe')">今日食譜</div>
        <div class="fod" v-on:click="click_event('Today','food')">今日菜籃</div>
    </div>
</template>

<script>
import emits from "./child-emits.js";
export default {
    name: "Today",
    mixins: [ emits ]
};
</script>
