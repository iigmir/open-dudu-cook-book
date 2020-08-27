export default {
    methods: {
        click_event( component = "Today", data ="recipe") {
            this.$emit( "emit", { component, data } );
        }
    }
};
