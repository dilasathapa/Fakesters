import {
  require_react
} from "./chunk-65KY755N.js";
import {
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/react-scrollable-feed/dist/index.modern.mjs
var e = __toESM(require_react(), 1);
var t = class _t extends e.Component {
  constructor(t2) {
    super(t2), this.wrapperRef = void 0, this.bottomRef = void 0, this.bottomRef = e.createRef(), this.wrapperRef = e.createRef(), this.handleScroll = this.handleScroll.bind(this), this.props.debug && console.log("Component cstr");
  }
  getSnapshotBeforeUpdate() {
    if (this.props.debug && console.log("Component ", this.getSnapshotBeforeUpdate.name), this.wrapperRef.current && this.bottomRef.current) {
      const { viewableDetectionEpsilon: e2 } = this.props;
      return _t.isViewable(this.wrapperRef.current, this.bottomRef.current, e2);
    }
    return false;
  }
  componentDidUpdate(e2, t2, o) {
    this.props.debug && console.log("Component ", this.componentDidUpdate.name);
    const { forceScroll: r, changeDetectionFilter: n } = this.props;
    n(e2, this.props) && (r || o) && this.bottomRef.current && this.wrapperRef.current && this.scrollParentToChild(this.wrapperRef.current, this.bottomRef.current);
  }
  componentDidMount() {
    this.props.debug && console.log("Component ", this.componentDidMount.name), this.bottomRef.current && this.wrapperRef.current && this.scrollParentToChild(this.wrapperRef.current, this.bottomRef.current);
  }
  scrollParentToChild(e2, o) {
    const { viewableDetectionEpsilon: r } = this.props;
    if (!_t.isViewable(e2, o, r)) {
      const t2 = e2.getBoundingClientRect(), r2 = o.getBoundingClientRect().top + e2.scrollTop - t2.top, { animateScroll: n, onScrollComplete: i } = this.props;
      n && (n(e2, r2), i());
    }
  }
  static isViewable(e2, t2, o) {
    o = o || 0;
    const r = e2.getBoundingClientRect(), n = t2.getBoundingClientRect();
    return n.top >= r.top && r.top + e2.clientHeight - n.top + o >= 0;
  }
  handleScroll() {
    const { viewableDetectionEpsilon: e2, onScroll: o } = this.props;
    o && this.bottomRef.current && this.wrapperRef.current && o(_t.isViewable(this.wrapperRef.current, this.bottomRef.current, e2));
  }
  scrollToBottom() {
    this.bottomRef.current && this.wrapperRef.current && this.scrollParentToChild(this.wrapperRef.current, this.bottomRef.current);
  }
  render() {
    this.props.debug && console.log("Component ", this.render.name);
    const { children: t2, className: o } = this.props;
    return e.createElement("div", { className: o, style: { maxHeight: "inherit", height: "inherit", overflowY: "auto" }, ref: this.wrapperRef, onScroll: this.handleScroll }, t2, e.createElement("div", { ref: this.bottomRef }));
  }
};
t.defaultProps = { forceScroll: false, animateScroll: (e2, t2) => {
  e2.scrollBy ? e2.scrollBy({ top: t2 }) : e2.scrollTop = t2;
}, onScrollComplete: () => {
}, changeDetectionFilter: () => true, viewableDetectionEpsilon: 2, onScroll: () => {
} };
export {
  t as default
};
//# sourceMappingURL=react-scrollable-feed.js.map
