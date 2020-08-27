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
                <a class="card-header-icon">
                    <b-icon v-bind:icon="props.open ? 'caret-down' : 'caret-up'"></b-icon>
                </a>
            </div>
            <div class="card-content">
                <div class="content">
                    {{ collapse.text }}
                </div>
            </div>
        </b-collapse>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isOpen: 0,
            collapses: [
                {
                    title: "分組顯示",
                    text: "Text 1"
                },
                {
                    title: "今日餐桌",
                    text: "Text 2"
                },
                {
                    title: "查詢菜名",
                    text: "Text 3"
                },
                {
                    title: "查詢食材",
                    text: "Text 3"
                },
                {
                    title: "主題菜譜",
                    text: "Text 3"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
nav {
    max-height: 100%;
}
</style>
