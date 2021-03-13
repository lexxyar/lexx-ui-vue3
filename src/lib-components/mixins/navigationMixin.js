const navigationMixin = {
    props: {
        active: {
            type: Boolean,
            default: false
        },
        count: {
            type: Number,
            default: 0
        },
        sidebarOpened: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        hasSvgSlot() {
            return !!this.$slots.svg
        },
    }
}

export default navigationMixin