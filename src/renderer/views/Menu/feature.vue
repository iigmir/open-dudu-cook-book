<template>
    <div class="feature">
        <div class="theme list">
            <h1 class="title is-4">主題列表</h1>
            <ul>
                <li>A</li>
                <li>A</li>
                <li>A</li>
            </ul>
        </div>
        <div class="sub-dish list">
            <h1 class="subtitle is-5">家常小菜</h1>
        </div>
    </div>
</template>

<script>
import emits from "./child-emits.js";

export default {
    name: "Feature",
    mixins: [ emits ]
};
</script>

<style lang="scss" scoped>
.feature ul {
    margin-bottom: 1.5rem;
}
</style>
