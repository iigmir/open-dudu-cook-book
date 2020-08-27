<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "open-dudu2",
    computed: {
        debug_info() {
            return {
                electron: process.versions.electron,
                node: process.versions.node,
                platform: require("os").platform(),
                vue: require("vue/package.json").version
            };
        }
    }
};
</script>

<style>
  /* CSS */
</style>
