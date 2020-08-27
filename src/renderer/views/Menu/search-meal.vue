<template>
    <div>
        <b-field>
            <b-input
                placeholder="查詢菜名..."
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
    name: "SearchMeal",
    mixins: [ emits ]
};
</script>
