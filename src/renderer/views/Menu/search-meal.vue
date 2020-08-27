<template>
    <div>SM</div>
</template>

<script>
import emits from "./child-emits.js";

export default {
    name: "SearchMeal",
    mixins: [ emits ]
};
</script>
