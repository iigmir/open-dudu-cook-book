import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters( "RecipeFlag", [ "sorted_tag_getter", "sorted_type_getter" ]),
        ...mapGetters( "Recipes", [
            "default_list_getter",
        ]),
        other_label() {
            return "其它";
        },
        type_is_not_group() {
            return this.sorted_type_getter !== "Group";
        },
        group_labels_from_module() {
            if( this.type_is_not_group ) {
                return [];
            }
            const array = this.default_list_getter
                .map( it => it[this.sorted_tag_getter] )
                .filter( x => x.length > 0 );
            const unique_set = new Set(array);
            const result = [...unique_set];
            if( !result.some(txt=>txt===this.other_label) ) {
                result.push(this.other_label);
            }
            return result;
        },
        group_children_list_from_module() {
            const result = {};
            if( this.type_is_not_group ) {
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
        },
        group_final_list() {
            return this.type_is_not_group ? [] : this.group_labels_from_module.map(
                name => ({ name, child: this.group_children_list_from_module[name] })
            );
        }
    }
};
