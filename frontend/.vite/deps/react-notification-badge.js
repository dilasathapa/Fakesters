import {
  require_react_dom
} from "./chunk-E5ODL3YF.js";
import {
  require_prop_types
} from "./chunk-DQROLGKX.js";
import {
  require_react
} from "./chunk-65KY755N.js";
import {
  __commonJS
} from "./chunk-V4OQ3NZ2.js";

// node_modules/react-notification-badge/lib/components/Effect.js
var require_Effect = __commonJS({
  "node_modules/react-notification-badge/lib/components/Effect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _default = {
      ROTATE_X: ["rotateX(-180deg)", "rotateX(0deg)"],
      ROTATE_Y: ["rotateY(-180deg)", "rotateY(0deg)"],
      SCALE: ["scale(1.8, 1.8)", "scale(1, 1)"]
    };
    exports["default"] = _default;
  }
});

// node_modules/react-notification-badge/lib/components/AnimationCounter.js
var require_AnimationCounter = __commonJS({
  "node_modules/react-notification-badge/lib/components/AnimationCounter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _reactDom = _interopRequireDefault(require_react_dom());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _Effect = _interopRequireDefault(require_Effect());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var defaultSetTimeout = function defaultSetTimeout2(callback) {
      setTimeout(callback, 1e3 / 60);
    };
    var defaultClearTimeout = function defaultClearTimeout2(timer) {
      clearTimeout(timer);
    };
    var requestAnimationFrame = function() {
      if (typeof window === "undefined") {
        return defaultSetTimeout;
      } else {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || defaultSetTimeout;
      }
    }();
    var cancelAnimationFrame = function() {
      if (typeof window === "undefined") {
        return defaultClearTimeout;
      } else {
        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || defaultClearTimeout;
      }
    }();
    var now = typeof window !== "undefined" && window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
    var getTime = function getTime2() {
      return now && now.call(performance) || Date.now();
    };
    var AnimationCounter = function(_React$Component) {
      _inherits(AnimationCounter2, _React$Component);
      function AnimationCounter2(props) {
        var _this;
        _classCallCheck(this, AnimationCounter2);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(AnimationCounter2).call(this, props));
        _this.state = {};
        _this.node = void 0;
        return _this;
      }
      _createClass(AnimationCounter2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (this.props.count > 0) {
            this.node = _reactDom["default"].findDOMNode(this.refs.badge);
            this.animate();
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (this.props.count > prevProps.count) {
            this.node = _reactDom["default"].findDOMNode(this.refs.badge);
            this.animate();
          }
        }
      }, {
        key: "animate",
        value: function animate() {
          var _this2 = this;
          var style0 = {
            "-moz-transform": this.props.effect[0],
            "-webkit-transform": this.props.effect[0],
            "-o-transform": this.props.effect[0],
            transform: this.props.effect[0]
          };
          this.attachStyle(style0);
          if (this.props.effect[2]) {
            this.attachStyle(this.props.effect[2]);
          }
          var startTime = getTime();
          var timer;
          var waitOrFinish = function waitOrFinish2() {
            var lastTime = getTime();
            var frame = Math.floor((lastTime - startTime) / (1e3 / 60) % _this2.props.frameLength);
            if (frame === _this2.props.frameLength - 1) {
              cancelAnimationFrame(timer);
              var style1 = {
                "-moz-transform": _this2.props.effect[1],
                "-webkit-transform": _this2.props.effect[1],
                "-o-transform": _this2.props.effect[1],
                transform: _this2.props.effect[1]
              };
              _this2.attachStyle(style1);
              if (_this2.props.effect[3]) {
                _this2.attachStyle(_this2.props.effect[3]);
              }
            } else {
              timer = requestAnimationFrame(waitOrFinish2);
            }
          };
          waitOrFinish();
        }
      }, {
        key: "attachStyle",
        value: function attachStyle(style) {
          for (var key in style) {
            if (style.hasOwnProperty(key)) {
              this.node.style[key] = style[key];
            }
          }
        }
      }, {
        key: "render",
        value: function render() {
          var value = this.props.label || this.props.count;
          return _react["default"].createElement("span", {
            ref: "badge",
            style: this.props.style,
            className: this.props.className
          }, value);
        }
      }]);
      return AnimationCounter2;
    }(_react["default"].Component);
    AnimationCounter.propTypes = {
      count: _propTypes["default"].number,
      label: _propTypes["default"].string,
      style: _propTypes["default"].object,
      effect: _propTypes["default"].array,
      frameLength: _propTypes["default"].number,
      className: _propTypes["default"].string
    };
    AnimationCounter.defaultProps = {
      count: 1,
      label: null,
      style: {},
      effect: _Effect["default"].SCALE,
      frameLength: 30
    };
    var _default = AnimationCounter;
    exports["default"] = _default;
  }
});

// node_modules/react-notification-badge/lib/components/NotificationBadge.js
var require_NotificationBadge = __commonJS({
  "node_modules/react-notification-badge/lib/components/NotificationBadge.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _AnimationCounter = _interopRequireDefault(require_AnimationCounter());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var styles = {
      container: {
        position: "relative",
        width: "100%",
        height: "100%"
      },
      badge: {
        WebkitTransition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
        MozTransition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
        msTransition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
        display: "inline-block",
        position: "absolute",
        minWidth: "10px",
        padding: "3px 7px",
        fontSize: "12px",
        fontWeight: "700",
        lineHeight: "1",
        color: "#fff",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "baseline",
        backgroundColor: "rgba(212, 19, 13, 1)",
        borderRadius: "10px",
        top: "-2px",
        right: "-2px"
      }
    };
    var NotificationBadge = function(_React$Component) {
      _inherits(NotificationBadge2, _React$Component);
      function NotificationBadge2(props) {
        var _this;
        _classCallCheck(this, NotificationBadge2);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(NotificationBadge2).call(this, props));
        _this.state = {};
        return _this;
      }
      _createClass(NotificationBadge2, [{
        key: "render",
        value: function render() {
          var badgeStyle = this.merge(styles.badge, this.props.style);
          var containerStyle = this.merge(styles.container, this.props.containerStyle);
          var value = this.props.count > 0 ? _react["default"].createElement(_AnimationCounter["default"], {
            key: "badgekey",
            style: badgeStyle,
            className: this.props.className,
            count: this.props.count,
            label: this.props.label,
            effect: this.props.effect,
            fps: this.props.fps,
            frameLength: this.props.frameLength
          }) : void 0;
          return _react["default"].createElement("div", {
            style: containerStyle
          }, value);
        }
      }, {
        key: "merge",
        value: function merge(obj1, obj2) {
          var obj = {};
          for (var attrname1 in obj1) {
            if (obj1.hasOwnProperty(attrname1)) {
              obj[attrname1] = obj1[attrname1];
            }
          }
          for (var attrname2 in obj2) {
            if (obj2.hasOwnProperty(attrname2)) {
              obj[attrname2] = obj2[attrname2];
            }
          }
          return obj;
        }
      }]);
      return NotificationBadge2;
    }(_react["default"].Component);
    NotificationBadge.propTypes = {
      containerStyle: _propTypes["default"].object,
      count: _propTypes["default"].number,
      label: _propTypes["default"].string,
      style: _propTypes["default"].object,
      className: _propTypes["default"].string,
      effect: _propTypes["default"].array,
      fps: _propTypes["default"].number,
      frameLength: _propTypes["default"].number
    };
    NotificationBadge.defaultProps = {
      count: 0,
      style: {},
      containerStyle: {}
    };
    var _default = NotificationBadge;
    exports["default"] = _default;
  }
});

// node_modules/react-notification-badge/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-notification-badge/lib/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Effect", {
      enumerable: true,
      get: function get() {
        return _Effect["default"];
      }
    });
    exports["default"] = void 0;
    var _NotificationBadge = _interopRequireDefault(require_NotificationBadge());
    var _Effect = _interopRequireDefault(require_Effect());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _default = _NotificationBadge["default"];
    exports["default"] = _default;
  }
});
export default require_lib();
//# sourceMappingURL=react-notification-badge.js.map
