'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script$h = vue.defineComponent({
  name: "lxButton",
  props: {
    styl: {
      type: String,
      validator: function validator(value) {
        return ['primary', 'secondary', 'success', 'danger', 'info', 'warning', 'dark', 'light'].indexOf(value) !== -1;
      },
      default: 'primary'
    },
    typ: {
      type: String,
      validator: function validator(value) {
        return ['', 'flat', 'rounded', 'pill'].indexOf(value) !== -1;
      },
      default: ''
    },
    outline: {
      type: Boolean,
      default: false
    },
    iconed: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: function validator(value) {
        return ['', 'md', 'lg', 'sm'].indexOf(value) !== -1;
      },
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  },
  methods: {
    getCss: function getCss() {
      var css = [];
      css.push("btn-".concat(this.styl));
      css.push(this.typ !== '' ? "btn-".concat(this.typ) : '');
      css.push(this.outline ? "btn-outline" : '');
      css.push(this.iconed ? "btn-icon" : '');
      css.push(this.disabled ? "btn-disabled" : '');
      css.push(this.size !== '' ? "btn-".concat(this.size) : '');
      return css.join(' ');
    }
  }
});var _withId$h = /*#__PURE__*/vue.withScopeId("data-v-97febfbc");

var render$h = /*#__PURE__*/_withId$h(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = vue.resolveComponent("router-link");

  return _ctx.$router && !!_ctx.to ? (vue.openBlock(), vue.createBlock(_component_router_link, {
    key: 0,
    to: _ctx.to,
    class: ["btn", _ctx.getCss()],
    disabled: _ctx.disabled
  }, {
    default: _withId$h(function () {
      return [vue.renderSlot(_ctx.$slots, "default")];
    }),
    _: 3
  }, 8, ["to", "class", "disabled"])) : (vue.openBlock(), vue.createBlock("button", {
    key: 1,
    class: ["btn", _ctx.getCss()],
    disabled: _ctx.disabled
  }, [vue.renderSlot(_ctx.$slots, "default")], 10, ["disabled"]));
});script$h.render = render$h;
script$h.__scopeId = "data-v-97febfbc";var script$g = vue.defineComponent({
  name: "lxCard",
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hasHeaderSlot: function hasHeaderSlot() {
      return !!this.$slots.header;
    },
    hasFooterSlot: function hasFooterSlot() {
      return !!this.$slots.footer;
    }
  }
});var _withId$g = /*#__PURE__*/vue.withScopeId("data-v-630d6383");

vue.pushScopeId("data-v-630d6383");

var _hoisted_1$a = {
  class: "max-w-2xl sm:px-6 lg:px-8"
};

vue.popScopeId();

var render$g = /*#__PURE__*/_withId$g(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$a, [vue.createVNode("div", {
    class: ["overflow-hidden shadow-md", _ctx.dark ? 'text-gray-100' : '']
  }, [_ctx.hasHeaderSlot() ? (vue.openBlock(), vue.createBlock("div", {
    key: 0,
    class: ["px-6 py-4 border-b font-bold uppercase", _ctx.dark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200']
  }, [vue.renderSlot(_ctx.$slots, "header")], 2)) : vue.createCommentVNode("", true), vue.createVNode("div", {
    class: ["p-6 bg-white border-b", _ctx.dark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200']
  }, [vue.renderSlot(_ctx.$slots, "default")], 2), _ctx.hasFooterSlot() ? (vue.openBlock(), vue.createBlock("div", {
    key: 1,
    class: ["p-6 text-right", _ctx.dark ? 'bg-gray-800 border-gray-200' : 'bg-white border-gray-200']
  }, [vue.renderSlot(_ctx.$slots, "footer")], 2)) : vue.createCommentVNode("", true)], 2)]);
});script$g.render = render$g;
script$g.__scopeId = "data-v-630d6383";var script$f = vue.defineComponent({
  name: "lxSidebar",
  props: {
    header: {
      type: String
    },
    open: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      isSidebarOpen: this.open
    };
  },
  methods: {
    hasBrandSlot: function hasBrandSlot() {
      return this.$slots.brand;
    }
  },
  emits: ['toggle'],
  watch: {
    isSidebarOpen: function isSidebarOpen(val) {
      this.$emit('toggle', val);
    },
    open: function open(val) {
      this.isSidebarOpen = val;
    }
  }
});var _withId$f = /*#__PURE__*/vue.withScopeId("data-v-25b8fe32");

vue.pushScopeId("data-v-25b8fe32");

var _hoisted_1$9 = {
  class: "p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap"
};

var _hoisted_2$5 = /*#__PURE__*/vue.createVNode("svg", {
  class: "w-6 h-6 text-gray-600",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/vue.createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M6 18L18 6M6 6l12 12"
})], -1);

var _hoisted_3$5 = {
  class: "flex flex-col h-full"
};
var _hoisted_4$5 = {
  "aria-label": "Main",
  class: "flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto"
};

vue.popScopeId();

var render$f = /*#__PURE__*/_withId$f(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("aside", {
    onKeydown: _cache[2] || (_cache[2] = vue.withKeys(function ($event) {
      return _ctx.window.innerWidth <= 1024 ? _ctx.isSidebarOpen = false : '';
    }, ["escape"])),
    tabindex: "-1",
    class: ["fixed inset-y-0 z-10 flex-shrink-0 w-64 bg-white border-r lg:static dark:border-indigo-800 dark:bg-darker focus:outline-none lx-sidebar", {
      '-translate-x-full lg:translate-x-0 lg:w-20 lx-sidebar-closed': !_ctx.isSidebarOpen
    }]
  }, [_ctx.hasBrandSlot() ? (vue.openBlock(), vue.createBlock("div", {
    key: 0,
    class: ["flex items-center justify-between flex-shrink-0 p-2", {
      'lg:justify-center': !_ctx.isSidebarOpen
    }]
  }, [vue.createVNode("span", _hoisted_1$9, [vue.renderSlot(_ctx.$slots, "brand")]), vue.createVNode("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.isSidebarOpen = !_ctx.isSidebarOpen;
    }),
    class: "p-2 rounded-md lg:hidden"
  }, [_hoisted_2$5])], 2)) : vue.createCommentVNode("", true), vue.createVNode("div", _hoisted_3$5, [vue.createVNode("nav", _hoisted_4$5, [vue.renderSlot(_ctx.$slots, "default")]), vue.renderSlot(_ctx.$slots, "footer")])], 34);
});script$f.render = render$f;
script$f.__scopeId = "data-v-25b8fe32";var navigationMixin = {
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
    hasSvgSlot: function hasSvgSlot() {
      return !!this.$slots.svg;
    }
  }
};var script$e = vue.defineComponent({
  name: "lxSidebarItem",
  mixins: [navigationMixin],
  props: {
    href: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  },
  methods: {
    firstLetter: function firstLetter() {
      var _this$$slots$default$;

      var text = (_this$$slots$default$ = this.$slots.default()[0].el) === null || _this$$slots$default$ === void 0 ? void 0 : _this$$slots$default$.textContent;
      return text ? text.charAt(0) : '';
    }
  }
});var _withId$e = /*#__PURE__*/vue.withScopeId("data-v-b667240a");

vue.pushScopeId("data-v-b667240a");

var _hoisted_1$8 = {
  key: 0,
  class: "flex items-center justify-center text-lg text-gray-400"
};
var _hoisted_2$4 = {
  key: 1,
  class: "sidebar-item-caption"
};
var _hoisted_3$4 = {
  key: 2,
  class: "flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto"
};
var _hoisted_4$4 = {
  key: 0,
  class: "flex items-center justify-center text-lg text-gray-400"
};
var _hoisted_5$3 = {
  key: 1,
  class: "sidebar-item-caption"
};
var _hoisted_6$2 = {
  key: 2,
  class: "flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto"
};

vue.popScopeId();

var render$e = /*#__PURE__*/_withId$e(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = vue.resolveComponent("router-link");

  return _ctx.$router && !!_ctx.to ? (vue.openBlock(), vue.createBlock(_component_router_link, {
    key: 0,
    to: _ctx.to,
    class: "flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-indigo-100 dark:hover:bg-indigo-600 sidebar-item"
  }, {
    default: _withId$e(function () {
      return [_ctx.hasSvgSlot() ? (vue.openBlock(), vue.createBlock("span", _hoisted_1$8, [vue.renderSlot(_ctx.$slots, "svg")])) : vue.createCommentVNode("", true), !_ctx.hasSvgSlot() ? (vue.openBlock(), vue.createBlock("span", _hoisted_2$4, vue.toDisplayString(_ctx.firstLetter()), 1)) : vue.createCommentVNode("", true), vue.createVNode("span", {
        class: ["text-sm ml-2 sidebar-item-text", {
          'ml-7': _ctx.hasSvgSlot
        }]
      }, [vue.renderSlot(_ctx.$slots, "default")], 2), _ctx.count !== 0 ? (vue.openBlock(), vue.createBlock("span", _hoisted_3$4, vue.toDisplayString(_ctx.count), 1)) : vue.createCommentVNode("", true)];
    }),
    _: 3
  }, 8, ["to"])) : (vue.openBlock(), vue.createBlock("a", {
    key: 1,
    href: _ctx.href,
    class: ["flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-indigo-100 dark:hover:bg-indigo-600 sidebar-item", {
      'text-gray-600 bg-gray-100 active': _ctx.active
    }]
  }, [_ctx.hasSvgSlot() ? (vue.openBlock(), vue.createBlock("span", _hoisted_4$4, [vue.renderSlot(_ctx.$slots, "svg")])) : vue.createCommentVNode("", true), !_ctx.hasSvgSlot() ? (vue.openBlock(), vue.createBlock("span", _hoisted_5$3, vue.toDisplayString(_ctx.firstLetter()), 1)) : vue.createCommentVNode("", true), vue.createVNode("span", {
    class: ["text-sm ml-2 sidebar-item-text", {
      'ml-7': _ctx.hasSvgSlot
    }]
  }, [vue.renderSlot(_ctx.$slots, "default")], 2), _ctx.count !== 0 ? (vue.openBlock(), vue.createBlock("span", _hoisted_6$2, vue.toDisplayString(_ctx.count), 1)) : vue.createCommentVNode("", true)], 10, ["href"]));
});script$e.render = render$e;
script$e.__scopeId = "data-v-b667240a";var script$d = vue.defineComponent({
  name: "lxSidebarDdItem",
  props: {
    expanded: {
      type: Boolean,
      default: false
    }
  },
  mixins: [navigationMixin]
});var _withId$d = /*#__PURE__*/vue.withScopeId("data-v-3b907ceb");

vue.pushScopeId("data-v-3b907ceb");

var _hoisted_1$7 = {
  key: 0,
  class: "flex items-center justify-center text-lg text-gray-400"
};
var _hoisted_2$3 = {
  key: 1,
  class: "flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto"
};
var _hoisted_3$3 = {
  class: "ml-auto"
};

var _hoisted_4$3 = /*#__PURE__*/vue.createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M19 9l-7 7-7-7"
}, null, -1);

var _hoisted_5$2 = {
  class: "mt-2 space-y-2 sidebar-submenu"
};

vue.popScopeId();

var render$d = /*#__PURE__*/_withId$d(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock(vue.Fragment, null, [vue.createVNode("a", {
    href: "#",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $event.preventDefault();
    }),
    class: ["flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-indigo-100 dark:hover:bg-indigo-600", {
      'text-gray-600 bg-gray-100': _ctx.active
    }]
  }, [_ctx.hasSvgSlot() ? (vue.openBlock(), vue.createBlock("span", _hoisted_1$7, [vue.renderSlot(_ctx.$slots, "svg")])) : vue.createCommentVNode("", true), vue.createVNode("span", {
    class: ["text-sm", _ctx.hasSvgSlot() ? 'ml-2' : 'ml-7']
  }, [vue.renderSlot(_ctx.$slots, "default")], 2), _ctx.count !== 0 ? (vue.openBlock(), vue.createBlock("span", _hoisted_2$3, vue.toDisplayString(_ctx.count), 1)) : vue.createCommentVNode("", true), vue.createVNode("span", _hoisted_3$3, [(vue.openBlock(), vue.createBlock("svg", {
    class: ["w-4 h-4 transition-transform transform", {
      'rotate-180': _ctx.expanded
    }],
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_4$3], 2))])], 2), vue.createVNode("div", _hoisted_5$2, [vue.renderSlot(_ctx.$slots, "submenu")])], 64);
});script$d.render = render$d;
script$d.__scopeId = "data-v-3b907ceb";var script$c = vue.defineComponent({
  name: "lxNavbar",
  props: {
    sidebarOpen: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      isSidebarOpen: this.sidebarOpen
    };
  },
  methods: {
    hasBrandSlot: function hasBrandSlot() {
      return this.$slots.brand;
    }
  },
  emits: ['toggleSidebar'],
  watch: {
    isSidebarOpen: function isSidebarOpen(val, old) {
      // console.log(val)
      this.$emit('toggleSidebar', val);
    }
  }
});var _withId$c = /*#__PURE__*/vue.withScopeId("data-v-6f78b069");

vue.pushScopeId("data-v-6f78b069");

var _hoisted_1$6 = {
  class: "flex-shrink-0 border-b bg-white"
};
var _hoisted_2$2 = {
  class: "flex items-center justify-between p-2"
};
var _hoisted_3$2 = {
  class: "flex items-center space-x-3"
};

var _hoisted_4$2 = /*#__PURE__*/vue.createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M13 5l7 7-7 7M5 5l7 7-7 7"
}, null, -1);

var _hoisted_5$1 = {
  key: 0,
  class: "p-2 text-xl font-semibold tracking-wider uppercase"
};
var _hoisted_6$1 = {
  class: "relative flex items-center space-x-3"
};

vue.popScopeId();

var render$c = /*#__PURE__*/_withId$c(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("header", _hoisted_1$6, [vue.createVNode("div", _hoisted_2$2, [vue.createVNode("div", _hoisted_3$2, [vue.createVNode("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.isSidebarOpen = !_ctx.isSidebarOpen;
    }),
    class: "p-2 rounded-md focus:outline-none focus:ring"
  }, [(vue.openBlock(), vue.createBlock("svg", {
    class: ["w-4 h-4 text-gray-600", {
      'transform transition-transform -rotate-180': _ctx.isSidebarOpen
    }],
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_4$2], 2))]), _ctx.hasBrandSlot() ? (vue.openBlock(), vue.createBlock("span", _hoisted_5$1, [vue.renderSlot(_ctx.$slots, "brand")])) : vue.createCommentVNode("", true), vue.renderSlot(_ctx.$slots, "left")]), vue.createVNode("div", _hoisted_6$1, [vue.renderSlot(_ctx.$slots, "default")])])]);
});script$c.render = render$c;
script$c.__scopeId = "data-v-6f78b069";var script$b = vue.defineComponent({
  name: "lxNavbarItem",
  props: {
    href: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  }
});var _withId$b = /*#__PURE__*/vue.withScopeId("data-v-67300ba6");

var render$b = /*#__PURE__*/_withId$b(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = vue.resolveComponent("router-link");

  return _ctx.$router && !!_ctx.to ? (vue.openBlock(), vue.createBlock(_component_router_link, {
    key: 0,
    to: _ctx.to,
    class: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-gray-200"
  }, {
    default: _withId$b(function () {
      return [vue.renderSlot(_ctx.$slots, "default")];
    }),
    _: 3
  }, 8, ["to"])) : (vue.openBlock(), vue.createBlock("a", {
    key: 1,
    href: _ctx.href,
    class: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-gray-200"
  }, [vue.renderSlot(_ctx.$slots, "default")], 8, ["href"]));
});script$b.render = render$b;
script$b.__scopeId = "data-v-67300ba6";var script$a = vue.defineComponent({
  name: "lxNavbarButton"
});var _withId$a = /*#__PURE__*/vue.withScopeId("data-v-029dd111");

vue.pushScopeId("data-v-029dd111");

var _hoisted_1$5 = {
  class: "p-2 bg-gray-100 rounded-full focus:outline-none focus:ring hover:bg-gray-200"
};

vue.popScopeId();

var render$a = /*#__PURE__*/_withId$a(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("button", _hoisted_1$5, [vue.renderSlot(_ctx.$slots, "default")]);
});script$a.render = render$a;
script$a.__scopeId = "data-v-029dd111";var script$9 = vue.defineComponent({
  name: "lxDdMenu",
  props: {
    right: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  }
});var _withId$9 = /*#__PURE__*/vue.withScopeId("data-v-255e7f2e");

var render$9 = /*#__PURE__*/_withId$9(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", {
    class: ["absolute top-full py-2 w-48 bg-white rounded-md shadow-xl z-20 lx-dropdown-menu", _ctx.right ? 'right-0' : 'left-0'],
    role: "dropdown-menu"
  }, [vue.renderSlot(_ctx.$slots, "default")], 2);
});script$9.render = render$9;
script$9.__scopeId = "data-v-255e7f2e";var script$8 = vue.defineComponent({
  name: "lxDdMenuItem",
  props: {
    to: {
      type: String
    },
    href: {
      type: String,
      default: ''
    }
  }
});var _withId$8 = /*#__PURE__*/vue.withScopeId("data-v-46ac94f7");

var render$8 = /*#__PURE__*/_withId$8(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = vue.resolveComponent("router-link");

  return !!_ctx.$router && _ctx.to ? (vue.openBlock(), vue.createBlock(_component_router_link, {
    key: 0,
    class: "block px-4 py-2 text-sm text-left capitalize text-gray-700 hover:bg-blue-500 hover:text-white",
    to: _ctx.to
  }, {
    default: _withId$8(function () {
      return [vue.renderSlot(_ctx.$slots, "default")];
    }),
    _: 3
  }, 8, ["to"])) : (vue.openBlock(), vue.createBlock("a", {
    key: 1,
    href: _ctx.href,
    class: "block px-4 py-2 text-sm text-left capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
  }, [vue.renderSlot(_ctx.$slots, "default")], 8, ["href"]));
});script$8.render = render$8;
script$8.__scopeId = "data-v-46ac94f7";var script$7 = {
  name: "lxTable",
  props: {
    checkboxes: {
      type: Boolean,
      default: true
    },
    header: {
      type: Array,
      default: []
    },
    data: {
      type: Array,
      default: []
    }
  },
  data: function data() {
    return {
      checkAll: false
    };
  },
  watch: {
    checkAll: function checkAll(val) {
      this.data.map(function (itm) {
        return itm.checked = val;
      });
    }
  },
  methods: {}
};var _withId$7 = /*#__PURE__*/vue.withScopeId("data-v-7c3f326c");

vue.pushScopeId("data-v-7c3f326c");

var _hoisted_1$4 = {
  class: "border-collapse shadow-sm bg-white border-t-3 border-blue-400 lx-table-zebra w-full"
};
var _hoisted_2$1 = {
  key: 0,
  class: "px-3 py-3 text-sm text-left w-3"
};

var _hoisted_3$1 = /*#__PURE__*/vue.createVNode("tfoot", null, null, -1);

var _hoisted_4$1 = {
  class: "hover:bg-gray-100"
};
var _hoisted_5 = {
  key: 0,
  class: "px-3 py-3 text-sm"
};
var _hoisted_6 = {
  key: 0,
  class: "px-3 py-3 text-sm"
};
var _hoisted_7 = {
  key: 1,
  class: "px-3 py-3 text-sm"
};

vue.popScopeId();

var render$7 = /*#__PURE__*/_withId$7(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("table", _hoisted_1$4, [vue.createVNode("thead", null, [vue.createVNode("tr", null, [$props.checkboxes ? (vue.openBlock(), vue.createBlock("th", _hoisted_2$1, [vue.withDirectives(vue.createVNode("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.checkAll = $event;
    })
  }, null, 512), [[vue.vModelCheckbox, $data.checkAll]])])) : vue.createCommentVNode("", true), (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.header, function (h) {
    return vue.openBlock(), vue.createBlock("th", {
      class: ["px-3 py-3 text-sm text-left", h.css]
    }, vue.toDisplayString(h.title), 3);
  }), 256))])]), _hoisted_3$1, vue.createVNode("tbody", null, [$props.data.length > 0 ? (vue.openBlock(true), vue.createBlock(vue.Fragment, {
    key: 0
  }, vue.renderList($props.data, function (itm) {
    return vue.openBlock(), vue.createBlock("tr", _hoisted_4$1, [$props.checkboxes ? (vue.openBlock(), vue.createBlock("td", _hoisted_5, [vue.withDirectives(vue.createVNode("input", {
      type: "checkbox",
      "data-id": itm.id,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return itm.checked = $event;
      }
    }, null, 8, ["data-id", "onUpdate:modelValue"]), [[vue.vModelCheckbox, itm.checked]])])) : vue.createCommentVNode("", true), (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.header, function (h) {
      return vue.openBlock(), vue.createBlock(vue.Fragment, null, [typeof _ctx.$slots[h.key] !== 'undefined' ? (vue.openBlock(), vue.createBlock("td", _hoisted_6, [vue.renderSlot(_ctx.$slots, h.key, {
        field: h,
        item: itm
      })])) : (vue.openBlock(), vue.createBlock("td", _hoisted_7, vue.toDisplayString(itm[h.key]), 1))], 64);
    }), 256))]);
  }), 256)) : vue.createCommentVNode("", true)])]);
});script$7.render = render$7;
script$7.__scopeId = "data-v-7c3f326c";var script$6 = vue.defineComponent({
  name: "lxPagination",
  components: {
    LxButton: script$h
  },
  props: {
    total: {
      type: Number,
      default: 1
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    },
    prevButtonText: {
      type: String,
      default: 'Previous'
    },
    nextButtonText: {
      type: String,
      default: 'Next'
    }
  },
  data: function data() {
    return {
      currentPageSync: this.currentPage
    };
  },
  methods: {
    onPageClick: function onPageClick(num) {
      this.currentPageSync = num;
      this.$emit('pagechange', this.currentPageSync);
    },
    onChangePage: function onChangePage(dif) {
      this.currentPageSync += dif;
      this.currentPageSync = this.currentPageSync < 1 ? 1 : this.currentPageSync;
      this.currentPageSync = this.currentPageSync > this.pageCount ? this.pageCount : this.currentPageSync;
      this.$emit('pagechange', this.currentPageSync);
    },
    canPrev: function canPrev() {
      return this.currentPageSync > 1;
    },
    canNext: function canNext() {
      return this.currentPageSync < this.pageCount;
    }
  },
  computed: {
    pageCount: function pageCount() {
      var res = Math.ceil(this.total / this.itemsPerPage);
      return res === 0 ? 1 : res;
    }
  },
  watch: {
    currentPage: function currentPage(newVal) {
      this.currentPageSync = newVal;
    }
  }
});var _withId$6 = /*#__PURE__*/vue.withScopeId("data-v-2613a76e");

vue.pushScopeId("data-v-2613a76e");

var _hoisted_1$3 = {
  class: "btn-group"
};

vue.popScopeId();

var render$6 = /*#__PURE__*/_withId$6(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_lx_button = vue.resolveComponent("lx-button");

  return vue.openBlock(), vue.createBlock("div", _hoisted_1$3, [vue.createVNode(_component_lx_button, {
    disabled: !_ctx.canPrev(),
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.onChangePage(-1);
    })
  }, {
    default: _withId$6(function () {
      return [vue.createTextVNode(vue.toDisplayString(_ctx.prevButtonText), 1)];
    }),
    _: 1
  }, 8, ["disabled"]), (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.pageCount, function (i) {
    return vue.openBlock(), vue.createBlock(_component_lx_button, {
      disabled: i === _ctx.currentPageSync,
      onClick: function onClick($event) {
        return _ctx.onPageClick(i);
      }
    }, {
      default: _withId$6(function () {
        return [vue.createTextVNode(vue.toDisplayString(i), 1)];
      }),
      _: 2
    }, 1032, ["disabled", "onClick"]);
  }), 256)), vue.createVNode(_component_lx_button, {
    disabled: !_ctx.canNext(),
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.onChangePage(1);
    })
  }, {
    default: _withId$6(function () {
      return [vue.createTextVNode(vue.toDisplayString(_ctx.nextButtonText), 1)];
    }),
    _: 1
  }, 8, ["disabled"])]);
});script$6.render = render$6;
script$6.__scopeId = "data-v-2613a76e";var inputMixin = {
  data: function data() {
    return {
      uid: this.genUid()
    };
  },
  props: {
    value: {},
    label: {
      type: String,
      default: ''
    },
    emptyLabel: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    labelSize: {
      type: String,
      validator: function validator(value) {
        return ['', 'sm', 'lg', 'xl'].indexOf(value) !== -1;
      },
      default: ''
    },
    size: {
      type: String,
      validator: function validator(value) {
        return ['', 'sm', 'lg'].indexOf(value) !== -1;
      },
      default: ''
    }
  },
  methods: {
    getCss: function getCss() {
      var css = [];
      css.push(this.readonly ? 'readonly' : '');
      css.push(this.size ? "input-group-".concat(this.size) : '');
      return css.join(' ');
    },
    genUid: function genUid() {
      return '_' + Math.random().toString(36).substr(2, 9);
    }
  },
  computed: {
    hasAppend: function hasAppend() {
      return this.$slots['append'];
    },
    hasPrepend: function hasPrepend() {
      return this.$slots['prepend'];
    },
    labelClass: function labelClass() {
      var val = [];
      val.push(this.labelSize);

      if (this.label) {
        val.push('has-text');
      }

      return val.join(' ');
    }
  }
};var script$5 = vue.defineComponent({
  name: "lxInput",
  props: {
    modelValue: String,
    type: {
      type: String,
      default: 'text',
      validator: function validator(value) {
        return ['text', 'number', 'email', 'phone', 'password'].indexOf(value) !== -1;
      }
    }
  },
  data: function data() {
    return {};
  },
  emits: ['update:modelValue'],
  computed: {},
  methods: {},
  mixins: [inputMixin]
});var _withId$5 = /*#__PURE__*/vue.withScopeId("data-v-09f8f902");

vue.pushScopeId("data-v-09f8f902");

var _hoisted_1$2 = {
  class: "flex flex-col"
};

vue.popScopeId();

var render$5 = /*#__PURE__*/_withId$5(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$2, [_ctx.emptyLabel || _ctx.label ? (vue.openBlock(), vue.createBlock("label", {
    key: 0,
    for: _ctx.uid,
    class: "text-md"
  }, vue.toDisplayString(_ctx.label), 9, ["for"])) : vue.createCommentVNode("", true), vue.createVNode("input", {
    type: _ctx.type,
    id: _ctx.uid,
    placeholder: _ctx.placeholder,
    readonly: _ctx.readonly,
    onInput: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('update:modelValue', $event.target.value);
    }),
    value: _ctx.modelValue,
    class: "shadow-sm border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
  }, null, 40, ["type", "id", "placeholder", "readonly", "value"])]);
});script$5.render = render$5;
script$5.__scopeId = "data-v-09f8f902";var script$4 = vue.defineComponent({
  name: "lxSelectInput",
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: []
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  },
  computed: {},
  emits: ['update:modelValue'],
  mixins: [inputMixin],
  methods: {}
});var _withId$4 = /*#__PURE__*/vue.withScopeId("data-v-5b81ba0e");

var render$4 = /*#__PURE__*/_withId$4(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", null, [_ctx.emptyLabel || _ctx.label ? (vue.openBlock(), vue.createBlock("label", {
    key: 0,
    for: _ctx.uid,
    class: _ctx.labelClass
  }, vue.toDisplayString(_ctx.label), 11, ["for"])) : vue.createCommentVNode("", true), vue.createVNode("select", {
    id: _ctx.uid,
    class: [_ctx.hasAppend ? 'appended' : '', "shadow-sm border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"],
    multiple: _ctx.multiple,
    disabled: _ctx.readonly,
    placeholder: _ctx.placeholder,
    value: _ctx.modelValue,
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('update:modelValue', $event.target.value);
    })
  }, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.options, function (opt) {
    return vue.openBlock(), vue.createBlock("option", {
      value: opt.value,
      selected: opt === _ctx.modelValue
    }, vue.toDisplayString(opt.title), 9, ["value", "selected"]);
  }), 256))], 42, ["id", "multiple", "disabled", "placeholder", "value"])]);
});script$4.render = render$4;
script$4.__scopeId = "data-v-5b81ba0e";var script$3 = vue.defineComponent({
  name: "lxFileInput",
  props: {
    modelValue: String
  },
  emits: ['update:modelValue'],
  data: function data() {
    return {};
  },
  computed: {},
  mixins: [inputMixin]
});var _withId$3 = /*#__PURE__*/vue.withScopeId("data-v-25ae8fa4");

var render$3 = /*#__PURE__*/_withId$3(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", {
    class: ["rounded border border-dashed  relative", {
      'border-gray-300': _ctx.readonly,
      'border-gray-500': !_ctx.readonly
    }]
  }, [vue.createVNode("input", {
    type: "file",
    multiple: "",
    class: "cursor-pointer relative block opacity-0 w-full h-full p-20 z-50",
    readonly: _ctx.readonly,
    disabled: _ctx.readonly,
    onInput: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('update:modelValue', $event.target.value);
    }),
    value: _ctx.modelValue
  }, null, 40, ["readonly", "disabled", "value"]), vue.createVNode("div", {
    class: ["text-center p-10 absolute top-0 right-0 left-0 m-auto", {
      'text-gray-400': _ctx.readonly
    }]
  }, vue.toDisplayString(_ctx.modelValue ? _ctx.modelValue : _ctx.label), 3)], 2);
});script$3.render = render$3;
script$3.__scopeId = "data-v-25ae8fa4";var script$2 = vue.defineComponent({
  name: "lxTextareaInput",
  props: {
    modelValue: String
  },
  emits: ['update:modelValue'],
  data: function data() {
    return {};
  },
  computed: {},
  mixins: [inputMixin]
});var _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-130edb71");

vue.pushScopeId("data-v-130edb71");

var _hoisted_1$1 = {
  class: "input-container"
};

vue.popScopeId();

var render$2 = /*#__PURE__*/_withId$2(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", {
    class: ["input-group", _ctx.getCss()]
  }, [_ctx.emptyLabel || _ctx.label ? (vue.openBlock(), vue.createBlock("label", {
    key: 0,
    for: _ctx.uid,
    class: _ctx.labelClass
  }, vue.toDisplayString(_ctx.label), 11, ["for"])) : vue.createCommentVNode("", true), vue.createVNode("div", _hoisted_1$1, [vue.createVNode("textarea", {
    class: "shadow-sm border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline",
    onInput: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('update:modelValue', $event.target.value);
    }),
    readonly: _ctx.readonly
  }, vue.toDisplayString(_ctx.modelValue), 41, ["readonly"])])], 2);
});script$2.render = render$2;
script$2.__scopeId = "data-v-130edb71";var script$1 = vue.defineComponent({
  name: "lxBadge",
  props: {
    styl: {
      type: String,
      validator: function validator(value) {
        return ['primary', 'secondary', 'success', 'danger', 'info', 'warning', 'dark', 'light'].indexOf(value) !== -1;
      },
      default: 'primary'
    }
  },
  methods: {
    getCss: function getCss() {
      var css = [];
      css.push("badge-".concat(this.styl));
      return css.join(' ');
    }
  }
});var _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-448a4572");

var render$1 = /*#__PURE__*/_withId$1(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", {
    class: ["badge", _ctx.getCss()]
  }, [vue.renderSlot(_ctx.$slots, "default")], 2);
});script$1.render = render$1;
script$1.__scopeId = "data-v-448a4572";var script = vue.defineComponent({
  name: "lxPageTitle",
  props: {
    title: String
  }
});var _withId = /*#__PURE__*/vue.withScopeId("data-v-30200085");

vue.pushScopeId("data-v-30200085");

var _hoisted_1 = {
  class: "lg:flex lg:items-center lg:justify-between mb-5"
};
var _hoisted_2 = {
  class: "flex-1 min-w-0"
};
var _hoisted_3 = {
  class: "text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
};

var _hoisted_4 = /*#__PURE__*/vue.createVNode("div", {
  class: "mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6"
}, null, -1);

vue.popScopeId();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createVNode("div", _hoisted_2, [vue.createVNode("h2", _hoisted_3, vue.toDisplayString(_ctx.title), 1), !!_ctx.$slots.subheader ? vue.renderSlot(_ctx.$slots, "subheader", {
    key: 0
  }, function () {
    return [_hoisted_4];
  }) : vue.createCommentVNode("", true)]), vue.renderSlot(_ctx.$slots, "default")]);
});script.render = render;
script.__scopeId = "data-v-30200085";/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,lxButton: script$h,lxCard: script$g,lxSidebar: script$f,lxSidebarItem: script$e,lxSidebarDdItem: script$d,lxNavbar: script$c,lxNavbarItem: script$b,lxNavbarButton: script$a,lxDdMenu: script$9,lxDdMenuItem: script$8,lxTable: script$7,lxPagination: script$6,lxInput: script$5,lxSelectInput: script$4,lxFileInput: script$3,lxTextareaInput: script$2,lxBadge: script$1,lxPageTitle: script});var install = function installLexxUiVue3(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,lxButton: script$h,lxCard: script$g,lxSidebar: script$f,lxSidebarItem: script$e,lxSidebarDdItem: script$d,lxNavbar: script$c,lxNavbarItem: script$b,lxNavbarButton: script$a,lxDdMenu: script$9,lxDdMenuItem: script$8,lxTable: script$7,lxPagination: script$6,lxInput: script$5,lxSelectInput: script$4,lxFileInput: script$3,lxTextareaInput: script$2,lxBadge: script$1,lxPageTitle: script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;