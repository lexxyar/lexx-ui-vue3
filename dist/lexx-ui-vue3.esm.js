import { defineComponent, resolveComponent, openBlock, createBlock, renderSlot, withScopeId, pushScopeId, popScopeId, createVNode, createCommentVNode, withKeys, toDisplayString, Fragment, withDirectives, vModelCheckbox, renderList, createTextVNode } from 'vue';

var script$h = defineComponent({
  name: "lxButton",
  props: {
    styl: {
      type: String,
      validator: value => {
        return ['primary', 'secondary', 'success', 'danger', 'info', 'warning', 'dark', 'light'].indexOf(value) !== -1;
      },
      default: 'primary'
    },
    typ: {
      type: String,
      validator: value => {
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
      validator: value => {
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
    getCss() {
      const css = [];
      css.push(`btn-${this.styl}`);
      css.push(this.typ !== '' ? `btn-${this.typ}` : '');
      css.push(this.outline ? `btn-outline` : '');
      css.push(this.iconed ? `btn-icon` : '');
      css.push(this.disabled ? `btn-disabled` : '');
      css.push(this.size !== '' ? `btn-${this.size}` : '');
      return css.join(' ');
    }

  }
});

const _withId$h = /*#__PURE__*/withScopeId("data-v-97febfbc");

const render$h = /*#__PURE__*/_withId$h((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_router_link = resolveComponent("router-link");

  return _ctx.$router && !!_ctx.to ? (openBlock(), createBlock(_component_router_link, {
    key: 0,
    to: _ctx.to,
    class: ["btn", _ctx.getCss()],
    disabled: _ctx.disabled
  }, {
    default: _withId$h(() => [renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["to", "class", "disabled"])) : (openBlock(), createBlock("button", {
    key: 1,
    class: ["btn", _ctx.getCss()],
    disabled: _ctx.disabled
  }, [renderSlot(_ctx.$slots, "default")], 10, ["disabled"]));
});

script$h.render = render$h;
script$h.__scopeId = "data-v-97febfbc";

var script$g = defineComponent({
  name: "lxCard",
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hasHeaderSlot() {
      return !!this.$slots.header;
    },

    hasFooterSlot() {
      return !!this.$slots.footer;
    }

  }
});

const _withId$g = /*#__PURE__*/withScopeId("data-v-630d6383");

pushScopeId("data-v-630d6383");

const _hoisted_1$a = {
  class: "max-w-2xl sm:px-6 lg:px-8"
};

popScopeId();

const render$g = /*#__PURE__*/_withId$g((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$a, [createVNode("div", {
    class: ["overflow-hidden shadow-md", _ctx.dark ? 'text-gray-100' : '']
  }, [_ctx.hasHeaderSlot() ? (openBlock(), createBlock("div", {
    key: 0,
    class: ["px-6 py-4 border-b font-bold uppercase", _ctx.dark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200']
  }, [renderSlot(_ctx.$slots, "header")], 2)) : createCommentVNode("", true), createVNode("div", {
    class: ["p-6 bg-white border-b", _ctx.dark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200']
  }, [renderSlot(_ctx.$slots, "default")], 2), _ctx.hasFooterSlot() ? (openBlock(), createBlock("div", {
    key: 1,
    class: ["p-6 text-right", _ctx.dark ? 'bg-gray-800 border-gray-200' : 'bg-white border-gray-200']
  }, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("", true)], 2)]);
});

script$g.render = render$g;
script$g.__scopeId = "data-v-630d6383";

var script$f = defineComponent({
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

  data() {
    return {
      isSidebarOpen: this.open
    };
  },

  methods: {
    hasBrandSlot() {
      return this.$slots.brand;
    }

  },
  emits: ['toggle'],
  watch: {
    isSidebarOpen(val) {
      this.$emit('toggle', val);
    },

    open(val) {
      this.isSidebarOpen = val;
    }

  }
});

const _withId$f = /*#__PURE__*/withScopeId("data-v-25b8fe32");

pushScopeId("data-v-25b8fe32");

const _hoisted_1$9 = {
  class: "p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap"
};

const _hoisted_2$5 = /*#__PURE__*/createVNode("svg", {
  class: "w-6 h-6 text-gray-600",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M6 18L18 6M6 6l12 12"
})], -1);

const _hoisted_3$5 = {
  class: "flex flex-col h-full"
};
const _hoisted_4$5 = {
  "aria-label": "Main",
  class: "flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto"
};

popScopeId();

const render$f = /*#__PURE__*/_withId$f((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("aside", {
    onKeydown: _cache[2] || (_cache[2] = withKeys($event => _ctx.window.innerWidth <= 1024 ? _ctx.isSidebarOpen = false : '', ["escape"])),
    tabindex: "-1",
    class: ["fixed inset-y-0 z-10 flex-shrink-0 w-64 bg-white border-r lg:static dark:border-indigo-800 dark:bg-darker focus:outline-none lx-sidebar", {
      '-translate-x-full lg:translate-x-0 lg:w-20 lx-sidebar-closed': !_ctx.isSidebarOpen
    }]
  }, [_ctx.hasBrandSlot() ? (openBlock(), createBlock("div", {
    key: 0,
    class: ["flex items-center justify-between flex-shrink-0 p-2", {
      'lg:justify-center': !_ctx.isSidebarOpen
    }]
  }, [createVNode("span", _hoisted_1$9, [renderSlot(_ctx.$slots, "brand")]), createVNode("button", {
    onClick: _cache[1] || (_cache[1] = $event => _ctx.isSidebarOpen = !_ctx.isSidebarOpen),
    class: "p-2 rounded-md lg:hidden"
  }, [_hoisted_2$5])], 2)) : createCommentVNode("", true), createVNode("div", _hoisted_3$5, [createVNode("nav", _hoisted_4$5, [renderSlot(_ctx.$slots, "default")]), renderSlot(_ctx.$slots, "footer")])], 34);
});

script$f.render = render$f;
script$f.__scopeId = "data-v-25b8fe32";

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
      return !!this.$slots.svg;
    }

  }
};

var script$e = defineComponent({
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
    firstLetter() {
      const text = this.$slots.default()[0].el?.textContent;
      return text ? text.charAt(0) : '';
    }

  }
});

const _withId$e = /*#__PURE__*/withScopeId("data-v-b667240a");

pushScopeId("data-v-b667240a");

const _hoisted_1$8 = {
  key: 0,
  class: "flex items-center justify-center text-lg text-gray-400"
};
const _hoisted_2$4 = {
  key: 1,
  class: "sidebar-item-caption"
};
const _hoisted_3$4 = {
  key: 2,
  class: "flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto"
};
const _hoisted_4$4 = {
  key: 0,
  class: "flex items-center justify-center text-lg text-gray-400"
};
const _hoisted_5$3 = {
  key: 1,
  class: "sidebar-item-caption"
};
const _hoisted_6$2 = {
  key: 2,
  class: "flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto"
};

popScopeId();

const render$e = /*#__PURE__*/_withId$e((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_router_link = resolveComponent("router-link");

  return _ctx.$router && !!_ctx.to ? (openBlock(), createBlock(_component_router_link, {
    key: 0,
    to: _ctx.to,
    class: "flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-indigo-100 dark:hover:bg-indigo-600 sidebar-item"
  }, {
    default: _withId$e(() => [_ctx.hasSvgSlot() ? (openBlock(), createBlock("span", _hoisted_1$8, [renderSlot(_ctx.$slots, "svg")])) : createCommentVNode("", true), !_ctx.hasSvgSlot() ? (openBlock(), createBlock("span", _hoisted_2$4, toDisplayString(_ctx.firstLetter()), 1)) : createCommentVNode("", true), createVNode("span", {
      class: ["text-sm ml-2 sidebar-item-text", {
        'ml-7': _ctx.hasSvgSlot
      }]
    }, [renderSlot(_ctx.$slots, "default")], 2), _ctx.count !== 0 ? (openBlock(), createBlock("span", _hoisted_3$4, toDisplayString(_ctx.count), 1)) : createCommentVNode("", true)]),
    _: 3
  }, 8, ["to"])) : (openBlock(), createBlock("a", {
    key: 1,
    href: _ctx.href,
    class: ["flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-indigo-100 dark:hover:bg-indigo-600 sidebar-item", {
      'text-gray-600 bg-gray-100 active': _ctx.active
    }]
  }, [_ctx.hasSvgSlot() ? (openBlock(), createBlock("span", _hoisted_4$4, [renderSlot(_ctx.$slots, "svg")])) : createCommentVNode("", true), !_ctx.hasSvgSlot() ? (openBlock(), createBlock("span", _hoisted_5$3, toDisplayString(_ctx.firstLetter()), 1)) : createCommentVNode("", true), createVNode("span", {
    class: ["text-sm ml-2 sidebar-item-text", {
      'ml-7': _ctx.hasSvgSlot
    }]
  }, [renderSlot(_ctx.$slots, "default")], 2), _ctx.count !== 0 ? (openBlock(), createBlock("span", _hoisted_6$2, toDisplayString(_ctx.count), 1)) : createCommentVNode("", true)], 10, ["href"]));
});

script$e.render = render$e;
script$e.__scopeId = "data-v-b667240a";

var script$d = defineComponent({
  name: "lxSidebarDdItem",
  props: {
    expanded: {
      type: Boolean,
      default: false
    }
  },
  mixins: [navigationMixin]
});

const _withId$d = /*#__PURE__*/withScopeId("data-v-3b907ceb");

pushScopeId("data-v-3b907ceb");

const _hoisted_1$7 = {
  key: 0,
  class: "flex items-center justify-center text-lg text-gray-400"
};
const _hoisted_2$3 = {
  key: 1,
  class: "flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto"
};
const _hoisted_3$3 = {
  class: "ml-auto"
};

const _hoisted_4$3 = /*#__PURE__*/createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M19 9l-7 7-7-7"
}, null, -1);

const _hoisted_5$2 = {
  class: "mt-2 space-y-2 sidebar-submenu"
};

popScopeId();

const render$d = /*#__PURE__*/_withId$d((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock(Fragment, null, [createVNode("a", {
    href: "#",
    onClick: _cache[1] || (_cache[1] = $event => $event.preventDefault()),
    class: ["flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-indigo-100 dark:hover:bg-indigo-600", {
      'text-gray-600 bg-gray-100': _ctx.active
    }]
  }, [_ctx.hasSvgSlot() ? (openBlock(), createBlock("span", _hoisted_1$7, [renderSlot(_ctx.$slots, "svg")])) : createCommentVNode("", true), createVNode("span", {
    class: ["text-sm", _ctx.hasSvgSlot() ? 'ml-2' : 'ml-7']
  }, [renderSlot(_ctx.$slots, "default")], 2), _ctx.count !== 0 ? (openBlock(), createBlock("span", _hoisted_2$3, toDisplayString(_ctx.count), 1)) : createCommentVNode("", true), createVNode("span", _hoisted_3$3, [(openBlock(), createBlock("svg", {
    class: ["w-4 h-4 transition-transform transform", {
      'rotate-180': _ctx.expanded
    }],
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_4$3], 2))])], 2), createVNode("div", _hoisted_5$2, [renderSlot(_ctx.$slots, "submenu")])], 64);
});

script$d.render = render$d;
script$d.__scopeId = "data-v-3b907ceb";

var script$c = defineComponent({
  name: "lxNavbar",
  props: {
    sidebarOpen: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      isSidebarOpen: this.sidebarOpen
    };
  },

  methods: {
    hasBrandSlot() {
      return this.$slots.brand;
    }

  },
  emits: ['toggleSidebar'],
  watch: {
    isSidebarOpen(val, old) {
      // console.log(val)
      this.$emit('toggleSidebar', val);
    }

  }
});

const _withId$c = /*#__PURE__*/withScopeId("data-v-6f78b069");

pushScopeId("data-v-6f78b069");

const _hoisted_1$6 = {
  class: "flex-shrink-0 border-b bg-white"
};
const _hoisted_2$2 = {
  class: "flex items-center justify-between p-2"
};
const _hoisted_3$2 = {
  class: "flex items-center space-x-3"
};

const _hoisted_4$2 = /*#__PURE__*/createVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M13 5l7 7-7 7M5 5l7 7-7 7"
}, null, -1);

const _hoisted_5$1 = {
  key: 0,
  class: "p-2 text-xl font-semibold tracking-wider uppercase"
};
const _hoisted_6$1 = {
  class: "relative flex items-center space-x-3"
};

popScopeId();

const render$c = /*#__PURE__*/_withId$c((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("header", _hoisted_1$6, [createVNode("div", _hoisted_2$2, [createVNode("div", _hoisted_3$2, [createVNode("button", {
    onClick: _cache[1] || (_cache[1] = $event => _ctx.isSidebarOpen = !_ctx.isSidebarOpen),
    class: "p-2 rounded-md focus:outline-none focus:ring"
  }, [(openBlock(), createBlock("svg", {
    class: ["w-4 h-4 text-gray-600", {
      'transform transition-transform -rotate-180': _ctx.isSidebarOpen
    }],
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [_hoisted_4$2], 2))]), _ctx.hasBrandSlot() ? (openBlock(), createBlock("span", _hoisted_5$1, [renderSlot(_ctx.$slots, "brand")])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "left")]), createVNode("div", _hoisted_6$1, [renderSlot(_ctx.$slots, "default")])])]);
});

script$c.render = render$c;
script$c.__scopeId = "data-v-6f78b069";

var script$b = defineComponent({
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
});

const _withId$b = /*#__PURE__*/withScopeId("data-v-67300ba6");

const render$b = /*#__PURE__*/_withId$b((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_router_link = resolveComponent("router-link");

  return _ctx.$router && !!_ctx.to ? (openBlock(), createBlock(_component_router_link, {
    key: 0,
    to: _ctx.to,
    class: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-gray-200"
  }, {
    default: _withId$b(() => [renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["to"])) : (openBlock(), createBlock("a", {
    key: 1,
    href: _ctx.href,
    class: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-gray-200"
  }, [renderSlot(_ctx.$slots, "default")], 8, ["href"]));
});

script$b.render = render$b;
script$b.__scopeId = "data-v-67300ba6";

var script$a = defineComponent({
  name: "lxNavbarButton"
});

const _withId$a = /*#__PURE__*/withScopeId("data-v-029dd111");

pushScopeId("data-v-029dd111");

const _hoisted_1$5 = {
  class: "p-2 bg-gray-100 rounded-full focus:outline-none focus:ring hover:bg-gray-200"
};

popScopeId();

const render$a = /*#__PURE__*/_withId$a((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("button", _hoisted_1$5, [renderSlot(_ctx.$slots, "default")]);
});

script$a.render = render$a;
script$a.__scopeId = "data-v-029dd111";

var script$9 = defineComponent({
  name: "lxDdMenu",
  props: {
    right: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {};
  }

});

const _withId$9 = /*#__PURE__*/withScopeId("data-v-255e7f2e");

const render$9 = /*#__PURE__*/_withId$9((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", {
    class: ["absolute top-full py-2 w-48 bg-white rounded-md shadow-xl z-20 lx-dropdown-menu", _ctx.right ? 'right-0' : 'left-0'],
    role: "dropdown-menu"
  }, [renderSlot(_ctx.$slots, "default")], 2);
});

script$9.render = render$9;
script$9.__scopeId = "data-v-255e7f2e";

var script$8 = defineComponent({
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
});

const _withId$8 = /*#__PURE__*/withScopeId("data-v-46ac94f7");

const render$8 = /*#__PURE__*/_withId$8((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_router_link = resolveComponent("router-link");

  return !!_ctx.$router && _ctx.to ? (openBlock(), createBlock(_component_router_link, {
    key: 0,
    class: "block px-4 py-2 text-sm text-left capitalize text-gray-700 hover:bg-blue-500 hover:text-white",
    to: _ctx.to
  }, {
    default: _withId$8(() => [renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 8, ["to"])) : (openBlock(), createBlock("a", {
    key: 1,
    href: _ctx.href,
    class: "block px-4 py-2 text-sm text-left capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
  }, [renderSlot(_ctx.$slots, "default")], 8, ["href"]));
});

script$8.render = render$8;
script$8.__scopeId = "data-v-46ac94f7";

var script$7 = {
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

  data() {
    return {
      checkAll: false
    };
  },

  watch: {
    checkAll(val) {
      this.data.map(itm => itm.checked = val);
    }

  },
  methods: {}
};

const _withId$7 = /*#__PURE__*/withScopeId("data-v-7c3f326c");

pushScopeId("data-v-7c3f326c");

const _hoisted_1$4 = {
  class: "border-collapse shadow-sm bg-white border-t-3 border-blue-400 lx-table-zebra w-full"
};
const _hoisted_2$1 = {
  key: 0,
  class: "px-3 py-3 text-sm text-left w-3"
};

const _hoisted_3$1 = /*#__PURE__*/createVNode("tfoot", null, null, -1);

const _hoisted_4$1 = {
  class: "hover:bg-gray-100"
};
const _hoisted_5 = {
  key: 0,
  class: "px-3 py-3 text-sm"
};
const _hoisted_6 = {
  key: 0,
  class: "px-3 py-3 text-sm"
};
const _hoisted_7 = {
  key: 1,
  class: "px-3 py-3 text-sm"
};

popScopeId();

const render$7 = /*#__PURE__*/_withId$7((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("table", _hoisted_1$4, [createVNode("thead", null, [createVNode("tr", null, [$props.checkboxes ? (openBlock(), createBlock("th", _hoisted_2$1, [withDirectives(createVNode("input", {
    type: "checkbox",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.checkAll = $event)
  }, null, 512), [[vModelCheckbox, $data.checkAll]])])) : createCommentVNode("", true), (openBlock(true), createBlock(Fragment, null, renderList($props.header, h => {
    return openBlock(), createBlock("th", {
      class: ["px-3 py-3 text-sm text-left", h.css]
    }, toDisplayString(h.title), 3);
  }), 256))])]), _hoisted_3$1, createVNode("tbody", null, [$props.data.length > 0 ? (openBlock(true), createBlock(Fragment, {
    key: 0
  }, renderList($props.data, itm => {
    return openBlock(), createBlock("tr", _hoisted_4$1, [$props.checkboxes ? (openBlock(), createBlock("td", _hoisted_5, [withDirectives(createVNode("input", {
      type: "checkbox",
      "data-id": itm.id,
      "onUpdate:modelValue": $event => itm.checked = $event
    }, null, 8, ["data-id", "onUpdate:modelValue"]), [[vModelCheckbox, itm.checked]])])) : createCommentVNode("", true), (openBlock(true), createBlock(Fragment, null, renderList($props.header, h => {
      return openBlock(), createBlock(Fragment, null, [typeof _ctx.$slots[h.key] !== 'undefined' ? (openBlock(), createBlock("td", _hoisted_6, [renderSlot(_ctx.$slots, h.key, {
        field: h,
        item: itm
      })])) : (openBlock(), createBlock("td", _hoisted_7, toDisplayString(itm[h.key]), 1))], 64);
    }), 256))]);
  }), 256)) : createCommentVNode("", true)])]);
});

script$7.render = render$7;
script$7.__scopeId = "data-v-7c3f326c";

var script$6 = defineComponent({
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

  data() {
    return {
      currentPageSync: this.currentPage
    };
  },

  methods: {
    onPageClick(num) {
      this.currentPageSync = num;
      this.$emit('pagechange', this.currentPageSync);
    },

    onChangePage(dif) {
      this.currentPageSync += dif;
      this.currentPageSync = this.currentPageSync < 1 ? 1 : this.currentPageSync;
      this.currentPageSync = this.currentPageSync > this.pageCount ? this.pageCount : this.currentPageSync;
      this.$emit('pagechange', this.currentPageSync);
    },

    canPrev() {
      return this.currentPageSync > 1;
    },

    canNext() {
      return this.currentPageSync < this.pageCount;
    }

  },
  computed: {
    pageCount() {
      const res = Math.ceil(this.total / this.itemsPerPage);
      return res === 0 ? 1 : res;
    }

  },
  watch: {
    currentPage(newVal) {
      this.currentPageSync = newVal;
    }

  }
});

const _withId$6 = /*#__PURE__*/withScopeId("data-v-2613a76e");

pushScopeId("data-v-2613a76e");

const _hoisted_1$3 = {
  class: "btn-group"
};

popScopeId();

const render$6 = /*#__PURE__*/_withId$6((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_lx_button = resolveComponent("lx-button");

  return openBlock(), createBlock("div", _hoisted_1$3, [createVNode(_component_lx_button, {
    disabled: !_ctx.canPrev(),
    onClick: _cache[1] || (_cache[1] = $event => _ctx.onChangePage(-1))
  }, {
    default: _withId$6(() => [createTextVNode(toDisplayString(_ctx.prevButtonText), 1)]),
    _: 1
  }, 8, ["disabled"]), (openBlock(true), createBlock(Fragment, null, renderList(_ctx.pageCount, i => {
    return openBlock(), createBlock(_component_lx_button, {
      disabled: i === _ctx.currentPageSync,
      onClick: $event => _ctx.onPageClick(i)
    }, {
      default: _withId$6(() => [createTextVNode(toDisplayString(i), 1)]),
      _: 2
    }, 1032, ["disabled", "onClick"]);
  }), 256)), createVNode(_component_lx_button, {
    disabled: !_ctx.canNext(),
    onClick: _cache[2] || (_cache[2] = $event => _ctx.onChangePage(1))
  }, {
    default: _withId$6(() => [createTextVNode(toDisplayString(_ctx.nextButtonText), 1)]),
    _: 1
  }, 8, ["disabled"])]);
});

script$6.render = render$6;
script$6.__scopeId = "data-v-2613a76e";

const inputMixin = {
  data() {
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
      validator: function (value) {
        return ['', 'sm', 'lg', 'xl'].indexOf(value) !== -1;
      },
      default: ''
    },
    size: {
      type: String,
      validator: function (value) {
        return ['', 'sm', 'lg'].indexOf(value) !== -1;
      },
      default: ''
    }
  },
  methods: {
    getCss() {
      const css = [];
      css.push(this.readonly ? 'readonly' : '');
      css.push(this.size ? `input-group-${this.size}` : '');
      return css.join(' ');
    },

    genUid() {
      return '_' + Math.random().toString(36).substr(2, 9);
    }

  },
  computed: {
    hasAppend() {
      return this.$slots['append'];
    },

    hasPrepend() {
      return this.$slots['prepend'];
    },

    labelClass() {
      let val = [];
      val.push(this.labelSize);

      if (this.label) {
        val.push('has-text');
      }

      return val.join(' ');
    }

  }
};

var script$5 = defineComponent({
  name: "lxInput",
  props: {
    modelValue: String,
    type: {
      type: String,
      default: 'text',
      validator: value => {
        return ['text', 'number', 'email', 'phone', 'password'].indexOf(value) !== -1;
      }
    }
  },

  data() {
    return {};
  },

  emits: ['update:modelValue'],
  computed: {},
  methods: {},
  mixins: [inputMixin]
});

const _withId$5 = /*#__PURE__*/withScopeId("data-v-09f8f902");

pushScopeId("data-v-09f8f902");

const _hoisted_1$2 = {
  class: "flex flex-col"
};

popScopeId();

const render$5 = /*#__PURE__*/_withId$5((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$2, [_ctx.emptyLabel || _ctx.label ? (openBlock(), createBlock("label", {
    key: 0,
    for: _ctx.uid,
    class: "text-md"
  }, toDisplayString(_ctx.label), 9, ["for"])) : createCommentVNode("", true), createVNode("input", {
    type: _ctx.type,
    id: _ctx.uid,
    placeholder: _ctx.placeholder,
    readonly: _ctx.readonly,
    onInput: _cache[1] || (_cache[1] = $event => _ctx.$emit('update:modelValue', $event.target.value)),
    value: _ctx.modelValue,
    class: "shadow-sm border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
  }, null, 40, ["type", "id", "placeholder", "readonly", "value"])]);
});

script$5.render = render$5;
script$5.__scopeId = "data-v-09f8f902";

var script$4 = defineComponent({
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

  data() {
    return {};
  },

  computed: {},
  emits: ['update:modelValue'],
  mixins: [inputMixin],
  methods: {}
});

const _withId$4 = /*#__PURE__*/withScopeId("data-v-5b81ba0e");

const render$4 = /*#__PURE__*/_withId$4((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", null, [_ctx.emptyLabel || _ctx.label ? (openBlock(), createBlock("label", {
    key: 0,
    for: _ctx.uid,
    class: _ctx.labelClass
  }, toDisplayString(_ctx.label), 11, ["for"])) : createCommentVNode("", true), createVNode("select", {
    id: _ctx.uid,
    class: [_ctx.hasAppend ? 'appended' : '', "shadow-sm border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"],
    multiple: _ctx.multiple,
    disabled: _ctx.readonly,
    placeholder: _ctx.placeholder,
    value: _ctx.modelValue,
    onChange: _cache[1] || (_cache[1] = $event => _ctx.$emit('update:modelValue', $event.target.value))
  }, [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, opt => {
    return openBlock(), createBlock("option", {
      value: opt.value,
      selected: opt === _ctx.modelValue
    }, toDisplayString(opt.title), 9, ["value", "selected"]);
  }), 256))], 42, ["id", "multiple", "disabled", "placeholder", "value"])]);
});

script$4.render = render$4;
script$4.__scopeId = "data-v-5b81ba0e";

var script$3 = defineComponent({
  name: "lxFileInput",
  props: {
    modelValue: String
  },
  emits: ['update:modelValue'],

  data() {
    return {};
  },

  computed: {},
  mixins: [inputMixin]
});

const _withId$3 = /*#__PURE__*/withScopeId("data-v-25ae8fa4");

const render$3 = /*#__PURE__*/_withId$3((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", {
    class: ["rounded border border-dashed  relative", {
      'border-gray-300': _ctx.readonly,
      'border-gray-500': !_ctx.readonly
    }]
  }, [createVNode("input", {
    type: "file",
    multiple: "",
    class: "cursor-pointer relative block opacity-0 w-full h-full p-20 z-50",
    readonly: _ctx.readonly,
    disabled: _ctx.readonly,
    onInput: _cache[1] || (_cache[1] = $event => _ctx.$emit('update:modelValue', $event.target.value)),
    value: _ctx.modelValue
  }, null, 40, ["readonly", "disabled", "value"]), createVNode("div", {
    class: ["text-center p-10 absolute top-0 right-0 left-0 m-auto", {
      'text-gray-400': _ctx.readonly
    }]
  }, toDisplayString(_ctx.modelValue ? _ctx.modelValue : _ctx.label), 3)], 2);
});

script$3.render = render$3;
script$3.__scopeId = "data-v-25ae8fa4";

var script$2 = defineComponent({
  name: "lxTextareaInput",
  props: {
    modelValue: String
  },
  emits: ['update:modelValue'],

  data() {
    return {};
  },

  computed: {},
  mixins: [inputMixin]
});

const _withId$2 = /*#__PURE__*/withScopeId("data-v-130edb71");

pushScopeId("data-v-130edb71");

const _hoisted_1$1 = {
  class: "input-container"
};

popScopeId();

const render$2 = /*#__PURE__*/_withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", {
    class: ["input-group", _ctx.getCss()]
  }, [_ctx.emptyLabel || _ctx.label ? (openBlock(), createBlock("label", {
    key: 0,
    for: _ctx.uid,
    class: _ctx.labelClass
  }, toDisplayString(_ctx.label), 11, ["for"])) : createCommentVNode("", true), createVNode("div", _hoisted_1$1, [createVNode("textarea", {
    class: "shadow-sm border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline",
    onInput: _cache[1] || (_cache[1] = $event => _ctx.$emit('update:modelValue', $event.target.value)),
    readonly: _ctx.readonly
  }, toDisplayString(_ctx.modelValue), 41, ["readonly"])])], 2);
});

script$2.render = render$2;
script$2.__scopeId = "data-v-130edb71";

var script$1 = defineComponent({
  name: "lxBadge",
  props: {
    styl: {
      type: String,
      validator: value => {
        return ['primary', 'secondary', 'success', 'danger', 'info', 'warning', 'dark', 'light'].indexOf(value) !== -1;
      },
      default: 'primary'
    }
  },
  methods: {
    getCss() {
      const css = [];
      css.push(`badge-${this.styl}`);
      return css.join(' ');
    }

  }
});

const _withId$1 = /*#__PURE__*/withScopeId("data-v-448a4572");

const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("span", {
    class: ["badge", _ctx.getCss()]
  }, [renderSlot(_ctx.$slots, "default")], 2);
});

script$1.render = render$1;
script$1.__scopeId = "data-v-448a4572";

var script = defineComponent({
  name: "lxPageTitle",
  props: {
    title: String
  }
});

const _withId = /*#__PURE__*/withScopeId("data-v-30200085");

pushScopeId("data-v-30200085");

const _hoisted_1 = {
  class: "lg:flex lg:items-center lg:justify-between mb-5"
};
const _hoisted_2 = {
  class: "flex-1 min-w-0"
};
const _hoisted_3 = {
  class: "text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
};

const _hoisted_4 = /*#__PURE__*/createVNode("div", {
  class: "mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6"
}, null, -1);

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1, [createVNode("div", _hoisted_2, [createVNode("h2", _hoisted_3, toDisplayString(_ctx.title), 1), !!_ctx.$slots.subheader ? renderSlot(_ctx.$slots, "subheader", {
    key: 0
  }, () => [_hoisted_4]) : createCommentVNode("", true)]), renderSlot(_ctx.$slots, "default")]);
});

script.render = render;
script.__scopeId = "data-v-30200085";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  lxButton: script$h,
  lxCard: script$g,
  lxSidebar: script$f,
  lxSidebarItem: script$e,
  lxSidebarDdItem: script$d,
  lxNavbar: script$c,
  lxNavbarItem: script$b,
  lxNavbarButton: script$a,
  lxDdMenu: script$9,
  lxDdMenuItem: script$8,
  lxTable: script$7,
  lxPagination: script$6,
  lxInput: script$5,
  lxSelectInput: script$4,
  lxFileInput: script$3,
  lxTextareaInput: script$2,
  lxBadge: script$1,
  lxPageTitle: script
});

// import '@/lib-components/styles/tailwind.css'

const install = function installLexxUiVue3(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script$1 as lxBadge, script$h as lxButton, script$g as lxCard, script$9 as lxDdMenu, script$8 as lxDdMenuItem, script$3 as lxFileInput, script$5 as lxInput, script$c as lxNavbar, script$a as lxNavbarButton, script$b as lxNavbarItem, script as lxPageTitle, script$6 as lxPagination, script$4 as lxSelectInput, script$f as lxSidebar, script$d as lxSidebarDdItem, script$e as lxSidebarItem, script$7 as lxTable, script$2 as lxTextareaInput };
