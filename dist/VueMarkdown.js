import Vue from "vue";
import MarkdownIt from "markdown-it";
var VueMarkdown = Vue.extend({
    name: "VueMarkdown",
    props: {
        tag: {
            type: String,
            required: false,
            default: "div"
        },
        source: {
            type: String,
            required: true
        },
        options: {
            type: Object,
            required: false
        }
    },
    data: function () {
        return {
            md: null
        };
    },
    computed: {
        content: function () {
            var _a;
            var src = this.source;
            return (_a = this.md) === null || _a === void 0 ? void 0 : _a.render(src);
        }
    },
    created: function () {
        this.md = new MarkdownIt(this.options);
    },
    render: function (h) {
        return h(this.tag, { domProps: { innerHTML: this.content } });
    }
});
export default VueMarkdown;
//# sourceMappingURL=VueMarkdown.js.map