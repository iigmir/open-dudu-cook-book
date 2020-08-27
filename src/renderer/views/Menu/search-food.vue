<template>
    <div>SF</div>
</template>

<script>
import emits from "./child-emits.js";

export default {
    name: "SearchFood",
    mixins: [ emits ]
};
</script>
