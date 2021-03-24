'use strict';var vue=require('vue'),vue3ClickAway=require('vue3-click-away');function _slicedToArray(arr, i) {
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
}var script$i = vue.defineComponent({
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
});var _withId$i = /*#__PURE__*/vue.withScopeId("data-v-97febfbc");

var render$i = /*#__PURE__*/_withId$i(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = vue.resolveComponent("router-link");

  return _ctx.$router && !!_ctx.to ? (vue.openBlock(), vue.createBlock(_component_router_link, {
    key: 0,
    to: _ctx.to,
    class: ["btn", _ctx.getCss()],
    disabled: _ctx.disabled
  }, {
    default: _withId$i(function () {
      return [vue.renderSlot(_ctx.$slots, "default")];
    }),
    _: 3
  }, 8, ["to", "class", "disabled"])) : (vue.openBlock(), vue.createBlock("button", {
    key: 1,
    class: ["btn", _ctx.getCss()],
    disabled: _ctx.disabled
  }, [vue.renderSlot(_ctx.$slots, "default")], 10, ["disabled"]));
});script$i.render = render$i;
script$i.__scopeId = "data-v-97febfbc";var script$h = vue.defineComponent({
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
});var _withId$h = /*#__PURE__*/vue.withScopeId("data-v-630d6383");

vue.pushScopeId("data-v-630d6383");

var _hoisted_1$d = {
  class: "max-w-2xl sm:px-6 lg:px-8"
};

vue.popScopeId();

var render$h = /*#__PURE__*/_withId$h(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$d, [vue.createVNode("div", {
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
});script$h.render = render$h;
script$h.__scopeId = "data-v-630d6383";var script$g = vue.defineComponent({
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
    },
    onToggleSidebar: function onToggleSidebar() {
      // isSidebarOpen = !isSidebarOpen
      // console.log('toggle')
      this.$emit('toggle', !this.isSidebarOpen);
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
});var _withId$g = /*#__PURE__*/vue.withScopeId("data-v-b1764d02");

vue.pushScopeId("data-v-b1764d02");

var _hoisted_1$c = {
  class: "p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap"
};

var _hoisted_2$9 = /*#__PURE__*/vue.createVNode("svg", {
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

var _hoisted_3$8 = {
  class: "flex flex-col h-full"
};
var _hoisted_4$8 = {
  "aria-label": "Main",
  class: "flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto"
};

vue.popScopeId();

var render$g = /*#__PURE__*/_withId$g(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("aside", {
    onKeydown: _cache[2] || (_cache[2] = vue.withKeys(function ($event) {
      return _ctx.window.innerWidth <= 1024 ? _ctx.isSidebarOpen = false : '';
    }, ["escape"])),
    tabindex: "-1",
    class: ["fixed inset-y-0 z-10 flex-shrink-0 w-64 bg-white border-r lg:static dark:border-indigo-800 dark:bg-darker focus:outline-none lx-sidebar", {
      '-translate-x-full lg:translate-x-0 lg:w-20 md:w-5 lg:translate-x-5 sm:hidden lx-sidebar-closed': !_ctx.isSidebarOpen
    }]
  }, [_ctx.hasBrandSlot() ? (vue.openBlock(), vue.createBlock("div", {
    key: 0,
    class: ["flex items-center justify-between flex-shrink-0 p-2", {
      'lg:justify-center': !_ctx.isSidebarOpen
    }]
  }, [vue.createVNode("span", _hoisted_1$c, [vue.renderSlot(_ctx.$slots, "brand")]), vue.createVNode("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.onToggleSidebar && _ctx.onToggleSidebar.apply(_ctx, arguments);
    }),
    class: "p-2 rounded-md lg:hidden"
  }, [_hoisted_2$9])], 2)) : vue.createCommentVNode("", true), vue.createVNode("div", _hoisted_3$8, [vue.createVNode("nav", _hoisted_4$8, [vue.renderSlot(_ctx.$slots, "default")]), vue.renderSlot(_ctx.$slots, "footer")])], 34);
});script$g.render = render$g;
script$g.__scopeId = "data-v-b1764d02";var navigationMixin = {
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
};var script$f = vue.defineComponent({
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
});var _withId$f = /*#__PURE__*/vue.withScopeId("data-v-b667240a");

vue.pushScopeId("data-v-b667240a");

var _hoisted_1$b = {
  key: 0,
  class: "flex items-center justify-center text-lg text-gray-400"
};
var _hoisted_2$8 = {
  key: 1,
  class: "sidebar-item-caption"
};
var _hoisted_3$7 = {
  key: 2,
  class: "flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto"
};
var _hoisted_4$7 = {
  key: 0,
  class: "flex items-center justify-center text-lg text-gray-400"
};
var _hoisted_5$4 = {
  key: 1,
  class: "sidebar-item-caption"
};
var _hoisted_6$3 = {
  key: 2,
  class: "flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto"
};

vue.popScopeId();

var render$f = /*#__PURE__*/_withId$f(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = vue.resolveComponent("router-link");

  return _ctx.$router && !!_ctx.to ? (vue.openBlock(), vue.createBlock(_component_router_link, {
    key: 0,
    to: _ctx.to,
    class: "flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-indigo-100 dark:hover:bg-indigo-600 sidebar-item"
  }, {
    default: _withId$f(function () {
      return [_ctx.hasSvgSlot() ? (vue.openBlock(), vue.createBlock("span", _hoisted_1$b, [vue.renderSlot(_ctx.$slots, "svg")])) : vue.createCommentVNode("", true), !_ctx.hasSvgSlot() ? (vue.openBlock(), vue.createBlock("span", _hoisted_2$8, vue.toDisplayString(_ctx.firstLetter()), 1)) : vue.createCommentVNode("", true), vue.createVNode("span", {
        class: ["text-sm ml-2 sidebar-item-text", {
          'ml-7': _ctx.hasSvgSlot
        }]
      }, [vue.renderSlot(_ctx.$slots, "default")], 2), _ctx.count !== 0 ? (vue.openBlock(), vue.createBlock("span", _hoisted_3$7, vue.toDisplayString(_ctx.count), 1)) : vue.createCommentVNode("", true)];
    }),
    _: 3
  }, 8, ["to"])) : (vue.openBlock(), vue.createBlock("a", {
    key: 1,
    href: _ctx.href,
    class: ["flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-indigo-100 dark:hover:bg-indigo-600 sidebar-item", {
      'text-gray-600 bg-gray-100 active': _ctx.active
    }]
  }, [_ctx.hasSvgSlot() ? (vue.openBlock(), vue.createBlock("span", _hoisted_4$7, [vue.renderSlot(_ctx.$slots, "svg")])) : vue.createCommentVNode("", true), !_ctx.hasSvgSlot() ? (vue.openBlock(), vue.createBlock("span", _hoisted_5$4, vue.toDisplayString(_ctx.firstLetter()), 1)) : vue.createCommentVNode("", true), vue.createVNode("span", {
    class: ["text-sm ml-2 sidebar-item-text", {
      'ml-7': _ctx.hasSvgSlot
    }]
  }, [vue.renderSlot(_ctx.$slots, "default")], 2), _ctx.count !== 0 ? (vue.openBlock(), vue.createBlock("span", _hoisted_6$3, vue.toDisplayString(_ctx.count), 1)) : vue.createCommentVNode("", true)], 10, ["href"]));
});script$f.render = render$f;
script$f.__scopeId = "data-v-b667240a";var script$e = vue.defineComponent({
  name: "lxSidebarDdItem",
  props: {
    expanded: {
      type: Boolean,
      default: false
    }
  },
  mixins: [navigationMixin]
});var _withId$e = /*#__PURE__*/vue.withScopeId("data-v-3b907ceb");

vue.pushScopeId("data-v-3b907ceb");

var _hoisted_1$a = {
  key: 0,
  class: "flex items-center justify-center text-lg text-gray-400"
};
var _hoisted_2$7 = {
  key: 1,
  class: "flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto"
};
var _hoisted_3$6 = {
  class: "ml-auto"
};

var _hoisted_4$6 = /*#__PURE__*/vue.createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M19 9l-7 7-7-7"
}, null, -1);

var _hoisted_5$3 = {
  class: "mt-2 space-y-2 sidebar-submenu"
};

vue.popScopeId();

var render$e = /*#__PURE__*/_withId$e(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock(vue.Fragment, null, [vue.createVNode("a", {
    href: "#",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $event.preventDefault();
    }),
    class: ["flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-indigo-100 dark:hover:bg-indigo-600", {
      'text-gray-600 bg-gray-100': _ctx.active
    }]
  }, [_ctx.hasSvgSlot() ? (vue.openBlock(), vue.createBlock("span", _hoisted_1$a, [vue.renderSlot(_ctx.$slots, "svg")])) : vue.createCommentVNode("", true), vue.createVNode("span", {
    class: ["text-sm", _ctx.hasSvgSlot() ? 'ml-2' : 'ml-7']
  }, [vue.renderSlot(_ctx.$slots, "default")], 2), _ctx.count !== 0 ? (vue.openBlock(), vue.createBlock("span", _hoisted_2$7, vue.toDisplayString(_ctx.count), 1)) : vue.createCommentVNode("", true), vue.createVNode("span", _hoisted_3$6, [(vue.openBlock(), vue.createBlock("svg", {
    class: ["w-4 h-4 transition-transform transform", {
      'rotate-180': _ctx.expanded
    }],
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_4$6], 2))])], 2), vue.createVNode("div", _hoisted_5$3, [vue.renderSlot(_ctx.$slots, "submenu")])], 64);
});script$e.render = render$e;
script$e.__scopeId = "data-v-3b907ceb";var script$d = vue.defineComponent({
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
    },
    onToggleSidebar: function onToggleSidebar() {
      // isSidebarOpen = !isSidebarOpen
      this.$emit('toggleSidebar', !this.isSidebarOpen);
    }
  },
  emits: ['toggleSidebar'],
  watch: {
    isSidebarOpen: function isSidebarOpen(val) {
      this.$emit('toggleSidebar', val);
    }
  }
});var _withId$d = /*#__PURE__*/vue.withScopeId("data-v-01779e05");

vue.pushScopeId("data-v-01779e05");

var _hoisted_1$9 = {
  class: "flex-shrink-0 border-b bg-white"
};
var _hoisted_2$6 = {
  class: "flex items-center justify-between p-2"
};
var _hoisted_3$5 = {
  class: "flex items-center space-x-3"
};

var _hoisted_4$5 = /*#__PURE__*/vue.createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M13 5l7 7-7 7M5 5l7 7-7 7"
}, null, -1);

var _hoisted_5$2 = {
  key: 0,
  class: "p-2 text-xl font-semibold tracking-wider uppercase"
};
var _hoisted_6$2 = {
  class: "relative flex items-center space-x-3"
};

vue.popScopeId();

var render$d = /*#__PURE__*/_withId$d(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("header", _hoisted_1$9, [vue.createVNode("div", _hoisted_2$6, [vue.createVNode("div", _hoisted_3$5, [vue.createVNode("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.onToggleSidebar && _ctx.onToggleSidebar.apply(_ctx, arguments);
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
  }, [_hoisted_4$5], 2))]), _ctx.hasBrandSlot() ? (vue.openBlock(), vue.createBlock("span", _hoisted_5$2, [vue.renderSlot(_ctx.$slots, "brand")])) : vue.createCommentVNode("", true), vue.renderSlot(_ctx.$slots, "left")]), vue.createVNode("div", _hoisted_6$2, [vue.renderSlot(_ctx.$slots, "default")])])]);
});script$d.render = render$d;
script$d.__scopeId = "data-v-01779e05";var script$c = vue.defineComponent({
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
});var _withId$c = /*#__PURE__*/vue.withScopeId("data-v-67300ba6");

var render$c = /*#__PURE__*/_withId$c(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = vue.resolveComponent("router-link");

  return _ctx.$router && !!_ctx.to ? (vue.openBlock(), vue.createBlock(_component_router_link, {
    key: 0,
    to: _ctx.to,
    class: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-gray-200"
  }, {
    default: _withId$c(function () {
      return [vue.renderSlot(_ctx.$slots, "default")];
    }),
    _: 3
  }, 8, ["to"])) : (vue.openBlock(), vue.createBlock("a", {
    key: 1,
    href: _ctx.href,
    class: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-gray-200"
  }, [vue.renderSlot(_ctx.$slots, "default")], 8, ["href"]));
});script$c.render = render$c;
script$c.__scopeId = "data-v-67300ba6";var script$b = vue.defineComponent({
  name: "lxNavbarButton"
});var _withId$b = /*#__PURE__*/vue.withScopeId("data-v-029dd111");

vue.pushScopeId("data-v-029dd111");

var _hoisted_1$8 = {
  class: "p-2 bg-gray-100 rounded-full focus:outline-none focus:ring hover:bg-gray-200"
};

vue.popScopeId();

var render$b = /*#__PURE__*/_withId$b(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("button", _hoisted_1$8, [vue.renderSlot(_ctx.$slots, "default")]);
});script$b.render = render$b;
script$b.__scopeId = "data-v-029dd111";var script$a = vue.defineComponent({
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
});var _withId$a = /*#__PURE__*/vue.withScopeId("data-v-255e7f2e");

var render$a = /*#__PURE__*/_withId$a(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", {
    class: ["absolute top-full py-2 w-48 bg-white rounded-md shadow-xl z-20 lx-dropdown-menu", _ctx.right ? 'right-0' : 'left-0'],
    role: "dropdown-menu"
  }, [vue.renderSlot(_ctx.$slots, "default")], 2);
});script$a.render = render$a;
script$a.__scopeId = "data-v-255e7f2e";var script$9 = vue.defineComponent({
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
});var _withId$9 = /*#__PURE__*/vue.withScopeId("data-v-46ac94f7");

var render$9 = /*#__PURE__*/_withId$9(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = vue.resolveComponent("router-link");

  return !!_ctx.$router && _ctx.to ? (vue.openBlock(), vue.createBlock(_component_router_link, {
    key: 0,
    class: "block px-4 py-2 text-sm text-left capitalize text-gray-700 hover:bg-blue-500 hover:text-white",
    to: _ctx.to
  }, {
    default: _withId$9(function () {
      return [vue.renderSlot(_ctx.$slots, "default")];
    }),
    _: 3
  }, 8, ["to"])) : (vue.openBlock(), vue.createBlock("a", {
    key: 1,
    href: _ctx.href,
    class: "block px-4 py-2 text-sm text-left capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
  }, [vue.renderSlot(_ctx.$slots, "default")], 8, ["href"]));
});script$9.render = render$9;
script$9.__scopeId = "data-v-46ac94f7";var script$8 = {
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
};var _withId$8 = /*#__PURE__*/vue.withScopeId("data-v-7c3f326c");

vue.pushScopeId("data-v-7c3f326c");

var _hoisted_1$7 = {
  class: "border-collapse shadow-sm bg-white border-t-3 border-blue-400 lx-table-zebra w-full"
};
var _hoisted_2$5 = {
  key: 0,
  class: "px-3 py-3 text-sm text-left w-3"
};

var _hoisted_3$4 = /*#__PURE__*/vue.createVNode("tfoot", null, null, -1);

var _hoisted_4$4 = {
  class: "hover:bg-gray-100"
};
var _hoisted_5$1 = {
  key: 0,
  class: "px-3 py-3 text-sm"
};
var _hoisted_6$1 = {
  key: 0,
  class: "px-3 py-3 text-sm"
};
var _hoisted_7 = {
  key: 1,
  class: "px-3 py-3 text-sm"
};

vue.popScopeId();

var render$8 = /*#__PURE__*/_withId$8(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("table", _hoisted_1$7, [vue.createVNode("thead", null, [vue.createVNode("tr", null, [$props.checkboxes ? (vue.openBlock(), vue.createBlock("th", _hoisted_2$5, [vue.withDirectives(vue.createVNode("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.checkAll = $event;
    })
  }, null, 512), [[vue.vModelCheckbox, $data.checkAll]])])) : vue.createCommentVNode("", true), (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.header, function (h) {
    return vue.openBlock(), vue.createBlock("th", {
      class: ["px-3 py-3 text-sm text-left", h.css]
    }, vue.toDisplayString(h.title), 3);
  }), 256))])]), _hoisted_3$4, vue.createVNode("tbody", null, [$props.data.length > 0 ? (vue.openBlock(true), vue.createBlock(vue.Fragment, {
    key: 0
  }, vue.renderList($props.data, function (itm) {
    return vue.openBlock(), vue.createBlock("tr", _hoisted_4$4, [$props.checkboxes ? (vue.openBlock(), vue.createBlock("td", _hoisted_5$1, [vue.withDirectives(vue.createVNode("input", {
      type: "checkbox",
      "data-id": itm.id,
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return itm.checked = $event;
      }
    }, null, 8, ["data-id", "onUpdate:modelValue"]), [[vue.vModelCheckbox, itm.checked]])])) : vue.createCommentVNode("", true), (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($props.header, function (h) {
      return vue.openBlock(), vue.createBlock(vue.Fragment, null, [typeof _ctx.$slots[h.key] !== 'undefined' ? (vue.openBlock(), vue.createBlock("td", _hoisted_6$1, [vue.renderSlot(_ctx.$slots, h.key, {
        field: h,
        item: itm
      })])) : (vue.openBlock(), vue.createBlock("td", _hoisted_7, vue.toDisplayString(itm[h.key]), 1))], 64);
    }), 256))]);
  }), 256)) : vue.createCommentVNode("", true)])]);
});script$8.render = render$8;
script$8.__scopeId = "data-v-7c3f326c";var script$7 = vue.defineComponent({
  name: "lxPagination",
  components: {
    LxButton: script$i
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
});var _withId$7 = /*#__PURE__*/vue.withScopeId("data-v-2613a76e");

vue.pushScopeId("data-v-2613a76e");

var _hoisted_1$6 = {
  class: "btn-group"
};

vue.popScopeId();

var render$7 = /*#__PURE__*/_withId$7(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_lx_button = vue.resolveComponent("lx-button");

  return vue.openBlock(), vue.createBlock("div", _hoisted_1$6, [vue.createVNode(_component_lx_button, {
    disabled: !_ctx.canPrev(),
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.onChangePage(-1);
    })
  }, {
    default: _withId$7(function () {
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
      default: _withId$7(function () {
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
    default: _withId$7(function () {
      return [vue.createTextVNode(vue.toDisplayString(_ctx.nextButtonText), 1)];
    }),
    _: 1
  }, 8, ["disabled"])]);
});script$7.render = render$7;
script$7.__scopeId = "data-v-2613a76e";var inputMixin = {
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
};var script$6 = vue.defineComponent({
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
  computed: {
    colcount: function colcount() {
      if (this.hasAppend && this.hasPrepend) {
        return 3;
      }

      if (this.hasAppend || this.hasPrepend) {
        return 2;
      }

      return 1;
    }
  },
  methods: {},
  mixins: [inputMixin]
});var _withId$6 = /*#__PURE__*/vue.withScopeId("data-v-a0d9e3c4");

vue.pushScopeId("data-v-a0d9e3c4");

var _hoisted_1$5 = {
  class: "flex flex-col"
};
var _hoisted_2$4 = {
  class: "input-container flex"
};
var _hoisted_3$3 = {
  key: 0,
  class: "shadow-sm border rounded rounded-r-none border-r-0 flex-none py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline input-extention prepend"
};
var _hoisted_4$3 = {
  key: 1,
  class: "shadow-sm border rounded rounded-l-none border-l-0 flex-none py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline input-extention append"
};

vue.popScopeId();

var render$6 = /*#__PURE__*/_withId$6(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1$5, [_ctx.emptyLabel || _ctx.label ? (vue.openBlock(), vue.createBlock("label", {
    key: 0,
    for: _ctx.uid,
    class: "text-md"
  }, vue.toDisplayString(_ctx.label), 9, ["for"])) : vue.createCommentVNode("", true), vue.createVNode("div", _hoisted_2$4, [_ctx.hasPrepend ? (vue.openBlock(), vue.createBlock("div", _hoisted_3$3, [vue.renderSlot(_ctx.$slots, "prepend")])) : vue.createCommentVNode("", true), vue.createVNode("input", {
    type: _ctx.type,
    id: _ctx.uid,
    placeholder: _ctx.placeholder,
    readonly: _ctx.readonly,
    onInput: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('update:modelValue', $event.target.value);
    }),
    value: _ctx.modelValue,
    class: ["shadow-sm border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline", {
      'rounded-l-none': _ctx.hasPrepend,
      'rounded-r-none': _ctx.hasAppend
    }]
  }, null, 42, ["type", "id", "placeholder", "readonly", "value"]), _ctx.hasAppend ? (vue.openBlock(), vue.createBlock("div", _hoisted_4$3, [vue.renderSlot(_ctx.$slots, "append")])) : vue.createCommentVNode("", true)])]);
});script$6.render = render$6;
script$6.__scopeId = "data-v-a0d9e3c4";var script$5 = vue.defineComponent({
  name: "lxSelectInputCheckmark"
});var _withId$5 = /*#__PURE__*/vue.withScopeId("data-v-31471600");

vue.pushScopeId("data-v-31471600");

var _hoisted_1$4 = {
  class: "absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600"
};

var _hoisted_2$3 = /*#__PURE__*/vue.createVNode("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [/*#__PURE__*/vue.createVNode("path", {
  "fill-rule": "evenodd",
  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
  "clip-rule": "evenodd"
})], -1);

vue.popScopeId();

var render$5 = /*#__PURE__*/_withId$5(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1$4, [_hoisted_2$3]);
});script$5.render = render$5;
script$5.__scopeId = "data-v-31471600";var script$4 = vue.defineComponent({
  name: "lxSelectInput",
  emits: ['update:modelValue'],
  mixins: [inputMixin, vue3ClickAway.mixin],
  components: {
    lxSelectInputCheckmark: script$5
  },
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
    },
    optionTitleField: {
      type: String,
      default: 'title'
    },
    optionValueField: {
      type: String,
      default: 'id'
    }
  },
  data: function data() {
    return {
      open: false
    };
  },
  created: function created() {},
  computed: {
    selectedOption: function selectedOption() {
      var _this = this;

      return this.options.find(function (i) {
        return +i[_this.optionValueField] === +_this.modelValue;
      });
    }
  },
  methods: {
    onClickAway: function onClickAway() {
      this.open = false;
    },
    onOptionSelect: function onOptionSelect() {},
    onEscape: function onEscape() {},
    onArrowUp: function onArrowUp() {},
    onArrowDown: function onArrowDown() {},
    onChoose: function onChoose(e) {
      // console.log(e)
      this.$emit('update:modelValue', "".concat(e));
      this.open = false;
    },
    getValue: function getValue(opt) {
      if (!opt) {
        return '';
      }

      return opt[this.optionTitleField];
    }
  }
});var _withId$4 = /*#__PURE__*/vue.withScopeId("data-v-cc9be9fa");

vue.pushScopeId("data-v-cc9be9fa");

var _hoisted_1$3 = {
  class: "mt-1 relative"
};
var _hoisted_2$2 = {
  class: "flex items-center"
};

var _hoisted_3$2 = /*#__PURE__*/vue.createVNode("span", {
  class: "ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
}, [/*#__PURE__*/vue.createVNode("svg", {
  class: "h-5 w-5 text-gray-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [/*#__PURE__*/vue.createVNode("path", {
  "fill-rule": "evenodd",
  d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
})])], -1);

var _hoisted_4$2 = {
  class: "flex items-center"
};

vue.popScopeId();

var render$4 = /*#__PURE__*/_withId$4(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_lx_select_input_checkmark = vue.resolveComponent("lx-select-input-checkmark");

  var _directive_click_away = vue.resolveDirective("click-away");

  return vue.withDirectives((vue.openBlock(), vue.createBlock("div", null, [_ctx.emptyLabel || _ctx.label ? (vue.openBlock(), vue.createBlock("label", {
    key: 0,
    for: _ctx.uid,
    class: ["block text-sm font-medium text-gray-700", _ctx.labelClass]
  }, vue.toDisplayString(_ctx.label), 11, ["for"])) : vue.createCommentVNode("", true), vue.createVNode("div", _hoisted_1$3, [vue.createVNode("button", {
    type: "button",
    class: "relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.open = !_ctx.open;
    })
  }, [vue.createVNode("div", _hoisted_2$2, [typeof _ctx.$slots['item'] !== 'undefined' ? vue.renderSlot(_ctx.$slots, "item", {
    key: 0,
    item: _ctx.selectedOption
  }) : (vue.openBlock(), vue.createBlock(vue.Fragment, {
    key: 1
  }, [vue.createTextVNode(vue.toDisplayString(_ctx.getValue(_ctx.selectedOption)), 1)], 64))]), _hoisted_3$2]), vue.withDirectives(vue.createVNode("ul", {
    class: "z-40 absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",
    onKeydown: [_cache[2] || (_cache[2] = vue.withKeys(vue.withModifiers(function ($event) {
      return _ctx.onOptionSelect();
    }, ["stop", "prevent"]), ["enter"])), _cache[3] || (_cache[3] = vue.withKeys(vue.withModifiers(function ($event) {
      return _ctx.onOptionSelect();
    }, ["stop", "prevent"]), ["space"])), _cache[4] || (_cache[4] = vue.withKeys(function ($event) {
      return _ctx.onEscape();
    }, ["escape"])), _cache[5] || (_cache[5] = vue.withKeys(vue.withModifiers(function ($event) {
      return _ctx.onArrowUp();
    }, ["prevent"]), ["arrow-up"])), _cache[6] || (_cache[6] = vue.withKeys(vue.withModifiers(function ($event) {
      return _ctx.onArrowDown();
    }, ["prevent"]), ["arrow-down"]))],
    tabindex: "-1",
    role: "listbox"
  }, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(_ctx.options, function (opt) {
    return vue.openBlock(), vue.createBlock("li", {
      class: "text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white",
      role: "option",
      onClick: function onClick($event) {
        return _ctx.onChoose(opt[_ctx.optionValueField]);
      }
    }, [vue.createVNode("div", _hoisted_4$2, [typeof _ctx.$slots['item'] !== 'undefined' ? vue.renderSlot(_ctx.$slots, "item", {
      key: 0,
      item: opt
    }) : (vue.openBlock(), vue.createBlock(vue.Fragment, {
      key: 1
    }, [vue.createTextVNode(vue.toDisplayString(_ctx.getValue(opt)), 1)], 64))]), +opt[_ctx.optionValueField] === +_ctx.modelValue ? (vue.openBlock(), vue.createBlock(_component_lx_select_input_checkmark, {
      key: 0,
      class: ""
    })) : vue.createCommentVNode("", true)], 8, ["onClick"]);
  }), 256))], 544), [[vue.vShow, _ctx.open]])])], 512)), [[_directive_click_away, _ctx.onClickAway]]);
});script$4.render = render$4;
script$4.__scopeId = "data-v-cc9be9fa";var script$3 = vue.defineComponent({
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
});var _withId$3 = /*#__PURE__*/vue.withScopeId("data-v-c0a96598");

vue.pushScopeId("data-v-c0a96598");

var _hoisted_1$2 = {
  class: "space-y-1 text-center"
};

var _hoisted_2$1 = /*#__PURE__*/vue.createVNode("svg", {
  class: "mx-auto h-12 w-12 text-gray-400",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 48 48",
  "aria-hidden": "true"
}, [/*#__PURE__*/vue.createVNode("path", {
  d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
})], -1);

var _hoisted_3$1 = {
  class: "flex text-sm text-gray-600"
};

var _hoisted_4$1 = /*#__PURE__*/vue.createVNode("span", null, "Upload a file", -1);

var _hoisted_5 = /*#__PURE__*/vue.createVNode("p", {
  class: "pl-1"
}, "or drag and drop", -1);

var _hoisted_6 = /*#__PURE__*/vue.createVNode("p", {
  class: "text-xs text-gray-500"
}, " PNG, JPG, GIF up to 10MB ", -1);

vue.popScopeId();

var render$3 = /*#__PURE__*/_withId$3(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", {
    class: ["mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md", {
      'text-gray-400': _ctx.readonly
    }]
  }, [vue.createVNode("div", _hoisted_1$2, [_hoisted_2$1, vue.createVNode("div", _hoisted_3$1, [vue.createVNode("label", {
    for: _ctx.uid,
    class: "relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
  }, [_hoisted_4$1, vue.createVNode("input", {
    id: "uid",
    name: "file-upload",
    type: "file",
    class: "sr-only",
    readonly: _ctx.readonly,
    disabled: _ctx.readonly,
    onInput: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('update:modelValue', $event.target.value);
    }),
    value: _ctx.modelValue
  }, null, 40, ["readonly", "disabled", "value"])], 8, ["for"]), _hoisted_5]), _hoisted_6])], 2);
});script$3.render = render$3;
script$3.__scopeId = "data-v-c0a96598";var script$2 = vue.defineComponent({
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
});var _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-07eb7130");

vue.pushScopeId("data-v-07eb7130");

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
    class: "shadow-sm focus:outline-none focus:shadow-outline py-2 px-3 mt-1 block w-full sm:text-sm border rounded-md text-gray-700",
    onInput: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('update:modelValue', $event.target.value);
    }),
    readonly: _ctx.readonly
  }, vue.toDisplayString(_ctx.modelValue), 41, ["readonly"])])], 2);
});script$2.render = render$2;
script$2.__scopeId = "data-v-07eb7130";var script$1 = vue.defineComponent({
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
script.__scopeId = "data-v-30200085";/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,lxButton: script$i,lxCard: script$h,lxSidebar: script$g,lxSidebarItem: script$f,lxSidebarDdItem: script$e,lxNavbar: script$d,lxNavbarItem: script$c,lxNavbarButton: script$b,lxDdMenu: script$a,lxDdMenuItem: script$9,lxTable: script$8,lxPagination: script$7,lxInput: script$6,lxSelectInput: script$4,lxFileInput: script$3,lxTextareaInput: script$2,lxBadge: script$1,lxPageTitle: script});var install = function installLexxUiVue3(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,lxButton: script$i,lxCard: script$h,lxSidebar: script$g,lxSidebarItem: script$f,lxSidebarDdItem: script$e,lxNavbar: script$d,lxNavbarItem: script$c,lxNavbarButton: script$b,lxDdMenu: script$a,lxDdMenuItem: script$9,lxTable: script$8,lxPagination: script$7,lxInput: script$6,lxSelectInput: script$4,lxFileInput: script$3,lxTextareaInput: script$2,lxBadge: script$1,lxPageTitle: script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;//# sourceMappingURL=lexx-ui-vue3.ssr.js.map
