<template>
    <section>
        <router-link to="/">Slut</router-link>
        <b-button @click="clickMe">Click Me</b-button>
    </section>
</template>

<script>
export default {
    methods: {
        clickMe() {
            this.$buefy.notification.open("Clicked!!");
        }
    }
};
</script>
