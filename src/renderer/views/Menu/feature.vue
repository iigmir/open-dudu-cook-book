<template>
    <div>Feature</div>
</template>

<script>
import emits from "./child-emits.js";

export default {
    name: "Feature",
    mixins: [ emits ]
};
</script>
