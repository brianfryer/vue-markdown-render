import Vue, { PropType, VNode } from "vue";
import MarkdownIt, {Options as MarkdownItOptions} from "markdown-it";
export { Options } from "markdown-it";

const VueMarkdown = Vue.extend({
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
      type: Object as PropType<MarkdownItOptions>,
      required: false
    }
  },
  data() {
    return {
      md: null as MarkdownIt | null
    };
  },
  computed: {
    content(): string | undefined {
      const src = this.source;
      return this.md?.render(src);
    }
  },
  created() {
    this.md = new MarkdownIt(this.options);
  },
  render(h): VNode {
    return h(this.tag, { domProps: { innerHTML: this.content } });
  }
});

export default VueMarkdown;
