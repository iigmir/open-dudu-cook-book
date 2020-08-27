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
            const { default_list_getter, group_labels_from_module, other_label } = this;
            const tag = this.sorted_tag_getter;
            const named_labels = group_labels_from_module.filter( it => it !== this.other_label );
            const no_group_children = default_list_getter.filter( the =>
                named_labels.some( label => the[tag] === label ) === false
            );
            group_labels_from_module.forEach( name => {
                result[ name ] = default_list_getter.filter( it => it[tag] === name );
            });
            if( no_group_children.length > 0 ) {
                result[other_label] = result[other_label].concat(no_group_children);
            }
            return result;
        }
    }
};
