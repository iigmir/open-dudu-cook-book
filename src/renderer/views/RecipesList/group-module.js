import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters( "RecipeFlag", [ "sorted_tag_getter" ]),
        ...mapGetters( "Recipes", [
            "default_list_getter",
        ]),
        other_label() {
            return "其他";
        },
        type_is_group() {
            return this.sorted_type_getter === "Group";
        },
        group_labels_from_module() {
            if( !this.type_is_group ) {
                return [];
            }
            const array = this.default_list_getter
                .map( it => it[this.sorted_tag_getter] )
                .filter( x => x.length > 0 );
            const unique_set = new Set(array);
            return [...unique_set, this.other_label];
        },
        group_children_list_from_module() {
            const result = {};
            if( !this.type_is_group ) {
                return result;
            }
            // const group_labels_from_module;
            const other_group_children = this.default_list_getter.filter( it =>
                it[this.sorted_tag_getter] === ""
            );
            this.group_list_from_module.forEach( name => {
                result[ name ] = this.default_list_getter.filter(
                    it => it[this.sorted_tag_getter] === name
                );
            });
            if( other_group_children.length > 0 ) {
                result[this.other_label] = result[this.other_label].concat(other_group_children);
            }
            return result;
        }
    }
};
