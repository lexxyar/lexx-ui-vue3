const inputMixin = {
    data() {
        return ({
            uid: this.genUid(),
        })
    },
    props: {
        value: {},
        label: {type: String, default: ''},
        emptyLabel: {type: Boolean, default: false},
        readonly: {type: Boolean, default: false},
        placeholder: {type: String, default: ''},
        labelSize: {
            type: String,
            validator: function (value) {
                return ['', 'sm', 'lg', 'xl'].indexOf(value) !== -1
            },
            default: ''
        },
        size: {
            type: String,
            validator: function (value) {
                return ['', 'sm', 'lg'].indexOf(value) !== -1
            },
            default: ''
        },
    },
    methods: {
        getCss() {
            const css = []
            css.push(this.readonly ? 'readonly' : '')
            css.push(this.size ? `input-group-${this.size}` : '')
            return css.join(' ')
        },
        genUid() {
            return '_' + Math.random().toString(36).substr(2, 9);
        }
    },
    computed: {
        hasAppend() {
            return this.$slots['append']
        },
        hasPrepend() {
            return this.$slots['prepend']
        },
        labelClass() {
            let val = [];
            val.push(this.labelSize)

            if (this.label) {
                val.push('has-text')
            }
            return val.join(' ')
        },
    }
}

export default inputMixin