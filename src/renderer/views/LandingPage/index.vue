<template>
    <main class="container is-fluid">
        <Navigator />
        <div class="full columns">
            <div class="column scroll">
                <Menu />
            </div>
            <div class="column scroll">
                <RecipesList />
            </div>
            <div class="column scroll">
                Third column
            </div>
        </div>
    </main>
</template>

<script>
import Menu from "../Menu/index.vue";
import RecipesList from "../RecipesList/index.vue";
import Navigator from "../../components/Navigator.vue";

export default {
    name: "landing-page",
    components: {
        Menu,
        RecipesList,
        Navigator
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
    height: 100vh;
}

body > * {
    height: 98%;
}

main {
    height: 100%;
}
</style>

<style scoped>

main {
    display: flex;
    flex-direction: column;
}

main > .full.columns {
    flex: 1;
}

.full.columns .scroll.column {
    overflow-y: scroll;
}

/* .full.columns .column {
    padding-bottom: 0;
} */
</style>
