<template>
    <div>
        <b-field>
            <b-input
                placeholder="查詢食材..."
                type="search"
                icon-pack="fas"
                icon="search">
            </b-input>
        </b-field>
    </div>
</template>

<script>
import emits from "./child-emits.js";

export default {
    name: "SearchFood",
    mixins: [ emits ]
};
</script>
