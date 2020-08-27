<template>
    <main>
        <div class="full columns">
            <div class="column">
                <Menu />
            </div>
            <div class="column">
                <RecipesList />
            </div>
            <div class="column">
                Third column
            </div>
        </div>
    </main>
</template>

<script>
import Menu from "../Menu/index.vue";
import RecipesList from "../RecipesList/index.vue";

export default {
    name: "landing-page",
    components: {
        Menu,
        RecipesList
    },
    methods: {
        open (link) {
            this.$electron.shell.openExternal(link);
        }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Source Sans Pro', sans-serif;
}

.full.columns {
    width: 100%;
}
</style>
