<template>
    <b-menu>
        {{ by_group_list }}
        <span hidden>{{ group_children_list_from_module }}</span>
        <b-menu-list>
            <b-menu-item
                v-for="(first_item, first_index) in final_list" v-bind:key="first_index"
                icon="book" v-bind:active="first_index === isActive">
                <template slot="label" slot-scope="props">
                    {{ first_item.name }}
                    <b-icon v-bind:icon="props.expanded ? 'caret-down' : 'caret-up'"></b-icon>
                </template>
                <b-menu-item
                    v-for="(second_item, second_index) in first_item.child" v-bind:key="second_index"
                    icon="map-marker" v-bind:label="second_item">
                </b-menu-item>
            </b-menu-item>
        </b-menu-list>
    </b-menu>
</template>

<script>
import { mapGetters } from "vuex";
import group_modules from "./group-module.js";

export default {
    name: "RecipesList",
    mixins: [
        group_modules
    ],
    data() {
        return {
            isActive: -1,
        };
    },
    computed: {
        ...mapGetters( "RecipeFlag", [ "sorted_type_getter", ]),
        by_group_list() {
            if( this.sorted_type_getter === "Group" ) {
                return this.group_labels_from_module;
            }
            return [];
        },
        final_list() {
            switch (this.sorted_type_getter) {
            case "Group":
                return this.group_final_list;
            default:
                return [
                    { name: "X", child: ["4,1","1,1","1"] },
                    { name: "Y", child: ["4,1,1","1,1"] }
                ];
            }
            
        }
    }
};
</script>