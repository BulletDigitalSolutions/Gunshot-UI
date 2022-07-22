//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$8 = {
  props: {
    'breadcrumbs': {
      type: Array,
      default: () => []
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__$8 = script$8;
/* template */

var __vue_render__$c = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('nav', {
    staticClass: "layout-navbar navbar navbar-expand-lg align-items-lg-center bg-white container-p-x",
    attrs: {
      "id": "layout-navbar"
    }
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "navbar-collapse collapse",
    attrs: {
      "id": "layout-navbar-collapse"
    }
  }, [_c('hr', {
    staticClass: "d-lg-none w-100 my-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "navbar-nav mr-auto"
  }, [_c('ol', {
    staticClass: "breadcrumb m-auto"
  }, _vm._l(_vm.breadcrumbs, function (breadcrumb, key) {
    return _c('li', {
      key: key,
      class: ['breadcrumb-item', {
        'active': key + 1 === _vm.breadcrumbs.length
      }]
    }, [_c('a', {
      attrs: {
        "href": breadcrumb.url
      }
    }, [_vm._v(_vm._s(breadcrumb.title))])]);
  }), 0)]), _vm._v(" "), _vm._m(2)])]);
};

var __vue_staticRenderFns__$c = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "layout-sidenav-toggle navbar-nav d-lg-none align-items-lg-center mr-auto"
  }, [_c('a', {
    staticClass: "nav-item nav-link px-0 mr-lg-4",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "ion ion-md-menu text-large align-middle"
  })])]);
}, function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    staticClass: "navbar-toggler",
    attrs: {
      "type": "button",
      "data-toggle": "collapse",
      "data-target": "#layout-navbar-collapse"
    }
  }, [_c('span', {
    staticClass: "navbar-toggler-icon"
  })]);
}, function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "navbar-nav align-items-lg-center ml-auto"
  }, [_c('div', {
    staticClass: "nav-item dropdown"
  }, [_c('a', {
    staticClass: "nav-link dropdown-toggle",
    attrs: {
      "href": "#",
      "data-bs-toggle": "dropdown"
    }
  }, [_c('span', {
    staticClass: "d-inline-flex flex-lg-row-reverse align-items-center align-middle"
  }, [_c('img', {
    staticClass: "d-block ui-w-30 rounded-circle",
    attrs: {
      "src": "",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "px-1 mr-lg-2 ml-2 ml-lg-0"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "dropdown-menu dropdown-menu-right"
  })])]);
}];
/* style */

const __vue_inject_styles__$c = undefined;
/* scoped */

const __vue_scope_id__$c = undefined;
/* module identifier */

const __vue_module_identifier__$c = undefined;
/* functional template */

const __vue_is_functional_template__$c = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$n = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$c,
  staticRenderFns: __vue_staticRenderFns__$c
}, __vue_inject_styles__$c, __vue_script__$8, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, false, undefined, undefined, undefined);

var Navbar = __vue_component__$n;

//
//
//
//
//
//
//
//
//
//
//
//
//
var script$7 = {
  props: {
    logo: {
      type: String,
      default: ''
    },
    routes: {
      type: Array,
      default: () => []
    }
  }
};

/* script */
const __vue_script__$7 = script$7;
/* template */

var __vue_render__$b = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "layout-sidenav sidenav sidenav-vertical bg-sidenav-theme",
    attrs: {
      "id": "layout-sidenav"
    }
  }, [_c('div', {
    staticClass: "app-brand demo mt-md-3"
  }, [_c('a', {
    staticClass: "app-brand-text demo sidenav-text font-weight-normal m-auto",
    attrs: {
      "href": ""
    }
  }, [_c('img', {
    staticClass: "w-auto",
    attrs: {
      "src": _vm.logo,
      "alt": "Logo"
    }
  })])]), _vm._v(" "), _c('ul', {
    staticClass: "sidenav-inner py-1 pt-5 w-100"
  }, [_vm._t("default")], 2)]);
};

var __vue_staticRenderFns__$b = [];
/* style */

const __vue_inject_styles__$b = undefined;
/* scoped */

const __vue_scope_id__$b = undefined;
/* module identifier */

const __vue_module_identifier__$b = undefined;
/* functional template */

const __vue_is_functional_template__$b = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$m = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$b,
  staticRenderFns: __vue_staticRenderFns__$b
}, __vue_inject_styles__$b, __vue_script__$7, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, undefined, undefined, undefined);

var Sidenav = __vue_component__$m;

//
var script$6 = {
  components: {
    'navbar': Navbar,
    'sidenav': Sidenav
  },
  props: {
    // String with a path to the Logo used in the top left
    'logo': {
      type: String,
      default: ''
    },
    'routes': {
      type: Array,
      default: () => []
    },
    'user': {
      type: Object,
      default: () => {}
    },
    'breadcrumbs': {
      type: Array,
      default: () => []
    }
  }
};

/* script */
const __vue_script__$6 = script$6;
/* template */

var __vue_render__$a = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', [_c('div', {
    staticClass: "layout-wrapper layout-2"
  }, [_c('div', {
    staticClass: "layout-inner"
  }, [_c('sidenav', {
    attrs: {
      "logo": _vm.logo
    }
  }, [_vm._t("sidenav")], 2), _vm._v(" "), _c('div', {
    staticClass: "layout-container"
  }, [_c('navbar', {
    attrs: {
      "breadcrumbs": _vm.breadcrumbs
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "layout-content"
  }, [_c('div', {
    staticClass: "container-fluid d-flex align-items-stretch flex-grow-1 p-0"
  }, [_vm._t("sidebar"), _vm._v(" "), _c('div', {
    staticClass: "flex-shrink-1 flex-grow-1 container-p-x container-p-y"
  }, [_vm._t("default")], 2)], 2), _vm._v(" "), _vm._m(0)])], 1)], 1)])]);
};

var __vue_staticRenderFns__$a = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('nav', {
    staticClass: "layout-footer footer bg-footer-theme"
  }, [_c('div', {
    staticClass: "container-fluid d-flex flex-wrap justify-content-between text-center container-p-x pb-3"
  }, [_c('div', {
    staticClass: "pt-3"
  }, [_c('span', {
    staticClass: "footer-text font-weight-bolder"
  }), _vm._v(" ©\n                            ")])])]);
}];
/* style */

const __vue_inject_styles__$a = undefined;
/* scoped */

const __vue_scope_id__$a = undefined;
/* module identifier */

const __vue_module_identifier__$a = undefined;
/* functional template */

const __vue_is_functional_template__$a = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$k = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$6, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, undefined, undefined);

var __vue_component__$l = __vue_component__$k;

/* script */

/* template */
var __vue_render__$9 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "flex-shrink-0 flex-grow-0 bg-light bg-light layout-sidenav sidenav sidenav-vertical",
    staticStyle: {
      "width": "auto"
    }
  }, [_c('ul', {
    staticClass: "sidenav-inner"
  }, [_vm._t("default")], 2)]);
};

var __vue_staticRenderFns__$9 = [];
/* style */

const __vue_inject_styles__$9 = undefined;
/* scoped */

const __vue_scope_id__$9 = undefined;
/* module identifier */

const __vue_module_identifier__$9 = undefined;
/* functional template */

const __vue_is_functional_template__$9 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$i = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, {}, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, undefined, undefined);

var __vue_component__$j = __vue_component__$i;

/* script */

/* template */
var __vue_render__$8 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('li', {
    staticClass: "sidenav-item pt-2 m-3"
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$8 = [];
/* style */

const __vue_inject_styles__$8 = undefined;
/* scoped */

const __vue_scope_id__$8 = undefined;
/* module identifier */

const __vue_module_identifier__$8 = undefined;
/* functional template */

const __vue_is_functional_template__$8 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$g = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, {}, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);

var __vue_component__$h = __vue_component__$g;

//
//
//
//
//
//
//
//
//
//
//
//
var script$5 = {
  props: {
    'title': {
      type: String,
      default: ''
    },
    'icon': {
      type: String,
      default: null
    }
  },

  data() {
    return {
      isOpen: false
    };
  },

  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
      this.$emit('toggle-sidebar');
    }

  }
};

/* script */
const __vue_script__$5 = script$5;
/* template */

var __vue_render__$7 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('li', {
    class: ['sidenav-item', 'w-100', {
      'open': _vm.isOpen
    }]
  }, [_c('a', {
    staticClass: "sidenav-link sidenav-toggle",
    attrs: {
      "href": "javascript:void(0)"
    },
    on: {
      "click": _vm.toggleSidebar
    }
  }, [_vm.icon ? _c('i', {
    class: ['sidenav-icon', 'ion', _vm.icon]
  }) : _vm._e(), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('ul', {
    staticClass: "sidenav-menu"
  }, [_vm._t("default")], 2)]);
};

var __vue_staticRenderFns__$7 = [];
/* style */

const __vue_inject_styles__$7 = undefined;
/* scoped */

const __vue_scope_id__$7 = undefined;
/* module identifier */

const __vue_module_identifier__$7 = undefined;
/* functional template */

const __vue_is_functional_template__$7 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$e = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$5, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);

var __vue_component__$f = __vue_component__$e;

/* script */

/* template */
var __vue_render__$6 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('li', {
    staticClass: "sidenav-divider mb-1"
  });
};

var __vue_staticRenderFns__$6 = [];
/* style */

const __vue_inject_styles__$6 = undefined;
/* scoped */

const __vue_scope_id__$6 = undefined;
/* module identifier */

const __vue_module_identifier__$6 = undefined;
/* functional template */

const __vue_is_functional_template__$6 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$c = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, {}, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

var __vue_component__$d = __vue_component__$c;

//
//
//
//
//
//
//
//
var script$4 = {
  props: {
    showDivider: {
      type: Boolean,
      default: true
    }
  }
};

/* script */
const __vue_script__$4 = script$4;
/* template */

var __vue_render__$5 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('span', {
    staticClass: "w-100"
  }, [_vm.showDivider ? _c('li', {
    staticClass: "sidenav-divider mb-1"
  }) : _vm._e(), _vm._v(" "), _c('li', {
    staticClass: "sidenav-header small font-weight-semibold"
  }, [_vm._t("default")], 2)]);
};

var __vue_staticRenderFns__$5 = [];
/* style */

const __vue_inject_styles__$5 = undefined;
/* scoped */

const __vue_scope_id__$5 = undefined;
/* module identifier */

const __vue_module_identifier__$5 = undefined;
/* functional template */

const __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$a = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$4, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

var __vue_component__$b = __vue_component__$a;

/* script */

/* template */
var __vue_render__$4 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "d-flex justify-content-between mb-2 py-2"
  }, [_c('h4', {
    staticClass: "font-weight-bold"
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._t("button")], 2);
};

var __vue_staticRenderFns__$4 = [];
/* style */

const __vue_inject_styles__$4 = undefined;
/* scoped */

const __vue_scope_id__$4 = undefined;
/* module identifier */

const __vue_module_identifier__$4 = undefined;
/* functional template */

const __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, {}, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

var __vue_component__$9 = __vue_component__$8;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$3 = {
  props: {
    // An Object which contains the table options
    value: {
      type: Object,
      default: {
        // Loading State
        isLoading: false,
        // Sort State
        sort: {
          field: 'id',
          direction: 'asc'
        },
        // Pagination State
        pagination: {
          page: 1,
          limit: 25
        },
        // Table Options
        options: {
          fields: [{
            key: 'id',
            label: 'ID',
            sortable: true,
            class: 'col-2'
          }, {
            key: 'name',
            label: 'Name',
            sortable: true,
            class: 'col-8'
          }]
        }
      }
    },
    // An Array of Objects which contains the table data
    results: {
      type: Object,
      default: {
        data: [],
        count: 0
      }
    },
    // An array of numbers which will be used to populate the limit dropdown
    perPageOptions: {
      type: Array,
      default: () => [10, 25, 50, 100]
    }
  },

  data() {
    return {
      table: this.value
    };
  },

  methods: {
    sort(e) {
      this.table.sort.field = e.sortBy;

      if (e.sortDesc) {
        this.table.sort.direction = 'desc';
      } else {
        this.table.sort.direction = 'asc';
      }

      this.table.pagination.page = 1;
    }

  },
  watch: {
    value(newValue) {
      this.table = newValue;
    },

    table(newValue) {
      this.$emit('input', newValue);
    }

  }
};

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('b-card', {
    attrs: {
      "body-class": "p-0"
    }
  }, [_c('b-card-header', [_c('div', {
    staticClass: "d-flex"
  }, [_c('b-form-select', {
    staticClass: "w-25 pull-right",
    attrs: {
      "options": _vm.perPageOptions
    },
    model: {
      value: _vm.table.pagination.limit,
      callback: function ($$v) {
        _vm.$set(_vm.table.pagination, "limit", $$v);
      },
      expression: "table.pagination.limit"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-content-between"
  }, [_c('p', {
    staticClass: "text-muted"
  }, [_vm._v("Showing " + _vm._s(_vm.results.data.length) + " of " + _vm._s(_vm.results.count) + " results")]), _vm._v(" "), _c('b-pagination', {
    staticClass: "pull-right pt-2 pr-4",
    attrs: {
      "total-rows": _vm.results.count,
      "per-page": _vm.table.pagination.limit
    },
    model: {
      value: _vm.table.pagination.page,
      callback: function ($$v) {
        _vm.$set(_vm.table.pagination, "page", $$v);
      },
      expression: "table.pagination.page"
    }
  })], 1)]), _vm._v(" "), _c('b-table', {
    staticClass: "mb-0",
    attrs: {
      "striped": "",
      "items": _vm.results.data,
      "fields": _vm.table.options.fields,
      "no-local-sorting": "",
      "busy": _vm.table.isLoading
    },
    on: {
      "sort-changed": _vm.sort
    },
    scopedSlots: _vm._u([{
      key: "table-colgroup",
      fn: function (scope) {
        return _vm._l(scope.fields, function (field) {
          return _c('col', {
            key: field.key,
            class: field.class
          });
        });
      }
    }, _vm._l(_vm.$scopedSlots, function (_, name) {
      return {
        key: name,
        fn: function (slotData) {
          return [_vm._t(name, null, null, slotData)];
        }
      };
    })], null, true)
  }), _vm._v(" "), _c('b-card-footer', {
    staticClass: "pt-0"
  }, [_c('div', {
    staticClass: "d-flex justify-content-between mb-2 py-2"
  }, [_c('p', {
    staticClass: "text-muted"
  }, [_vm._v("Showing " + _vm._s(_vm.results.data.length) + " of " + _vm._s(_vm.results.count) + " results")]), _vm._v(" "), _c('b-pagination', {
    staticClass: "pull-right pt-2 pr-4",
    attrs: {
      "total-rows": _vm.results.count,
      "per-page": _vm.table.pagination.limit
    },
    model: {
      value: _vm.table.pagination.page,
      callback: function ($$v) {
        _vm.$set(_vm.table.pagination, "page", $$v);
      },
      expression: "table.pagination.page"
    }
  })], 1)])], 1);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = undefined;
/* scoped */

const __vue_scope_id__$3 = undefined;
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

var __vue_component__$7 = __vue_component__$6;

//
//
//
//
//
//
//
var script$2 = {
  props: {
    routes: {
      type: Object,
      required: true
    }
  }
};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "pull-right"
  }, [_vm.routes.hasOwnProperty('edit') ? _c('Link', {
    attrs: {
      "href": _vm.routes.edit
    }
  }, [_vm._v("Test")]) : _vm._e(), _vm._v(" "), _vm.routes.hasOwnProperty('edit') ? _c('b-button', {
    attrs: {
      "variant": "primary",
      "href": _vm.routes.edit
    }
  }, [_vm._v("Edit")]) : _vm._e(), _vm._v(" "), _vm.routes.hasOwnProperty('show') ? _c('b-button', {
    attrs: {
      "variant": "secondary",
      "href": _vm.routes.show
    }
  }, [_vm._v("View")]) : _vm._e()], 1);
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = undefined;
/* scoped */

const __vue_scope_id__$2 = undefined;
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

var __vue_component__$5 = __vue_component__$4;

//
//
//
//
//
// A component to search an entity. Performs an infinite scroll from the API, and allows you to filter options.
var script$1 = {
  props: ['format', 'options', 'value', 'name', 'endpoint', 'multiple', 'id'],

  data() {
    return {
      show: true,
      optionsFormatted: [],
      selector: this.id ? this.id + '-select2' : this.name.replace('[', '').replace(']', '') + '-select2',
      ignore: false
    };
  },

  mounted: function () {
    this.init();
  },
  methods: {
    init: function () {
      let self = this;
      self.optionsFormatted = [];

      if (this.endpoint) {
        this.getOptions(this.endpoint).then(function (result) {
          self.optionsFormatted = self.formatOptions(result, false);
          self.initSelect(self.value);
        });
      }

      if (this.options) {
        this.optionsFormatted = this.format ? this.formatOptions(this.options, true) : this.options;
        this.initSelect(this.value);
      }
    },
    formatOptions: function (options, decode) {
      var preOptions = decode ? JSON.parse(options) : options;
      var optionsFormatted = [];
      $.each(preOptions, function (key, value) {
        optionsFormatted.push({
          id: key,
          text: value
        });
      });
      optionsFormatted.sort(function (a, b) {
        if (a.id === "") {
          return -1;
        } else if (b.id === "") {
          return 1;
        } else {
          return a.id < b.id ? -1 : 1;
        }
      });
      return optionsFormatted;
    },
    getOptions: function (endpoint) {
      return axios.get(endpoint).then(result => {
        return result.data;
      }).catch(error => {
        console.error(error);
        throw error;
      });
    },
    initSelect: function (value) {
      let self = this;

      if (this.multiple && (typeof value === 'string' || value instanceof String)) {
        value = JSON.parse(value);
      }

      $('#' + this.selector).html('').select2({
        width: '100%',
        data: this.optionsFormatted,
        multiple: !!this.multiple
      }).val(value).trigger('change').on('change', function () {
        if (self.multiple) {
          self.ignore = true;
          self.$emit('input', $(this).val());
          self.$emit('change', $(this).val());
        } else {
          self.ignore = false;
          self.$emit('input', this.value);
          self.$emit('change', this.value);
        }
      });
      this.show = true;
    }
  },
  watch: {
    endpoint: function (value) {
      this.init();
    },
    value: function (value) {
      if (!this.ignore) {
        $('#' + this.selector).select2({
          width: '100%'
        }).val(value).trigger('change.select2');
      }
    },
    options: function (options) {
      let self = this;
      let value = this.value;

      if (this.multiple && (typeof this.value === 'string' || this.value instanceof String)) {
        value = JSON.parse(this.value);
      }

      this.optionsFormatted = this.format ? this.formatOptions(options, true) : options;
      this.ignore = false;
      $('#' + this.selector).html('').select2({
        width: '100%',
        data: this.optionsFormatted,
        multiple: !!this.multiple
      }).val(value).trigger('change').on('change', function () {
        self.$emit('input', this.value);
        self.$emit('change', this.value);
      });
    }
  },
  destroyed: function () {
    $('#' + this.selector).select2('destroy');
    this.show = false;
  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.show,
      expression: "show"
    }]
  }, [_c('select', {
    staticClass: "form-control",
    attrs: {
      "id": _vm.selector,
      "name": _vm.name
    }
  })]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = undefined;
/* scoped */

const __vue_scope_id__$1 = undefined;
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

var __vue_component__$3 = __vue_component__$2;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const KEY_CODE = {
  backspace: 8,
  left: 37,
  up: 38,
  right: 39,
  down: 40
};
var script = {
  props: {
    type: {
      type: String,
      default: "text"
    },
    fields: {
      type: Number,
      default: 5
    },
    autoFocus: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    fieldClass: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  },

  data() {
    const {
      fields,
      values
    } = this;
    let vals;
    let autoFocusIndex = 0;

    if (values && values.length) {
      vals = [];

      for (let i = 0; i < fields; i++) {
        vals.push(values[i] || "");
      }

      autoFocusIndex = values.length >= fields ? 0 : values.length;
    } else {
      vals = Array(fields).fill("");
    }

    this.iRefs = [];

    for (let i = 0; i < fields; i++) {
      this.iRefs.push("input_".concat(i));
    }

    this.id = +new Date();
    return {
      values: vals,
      autoFocusIndex
    };
  },

  methods: {
    onFocus(e) {
      e.target.select(e);
    },

    onValueChange(e) {
      const index = parseInt(e.target.dataset.id);
      const {
        type,
        fields
      } = this;

      if (type === "number") {
        e.target.value = e.target.value.replace(/[^\d]/gi, "");
      } // this.handleKeys[index] = false;


      if (e.target.value === "" || type === "number" && !e.target.validity.valid) {
        return;
      }

      let next;
      const value = e.target.value;
      let {
        values
      } = this;
      values = Object.assign([], values);

      if (value.length > 1) {
        let nextIndex = value.length + index - 1;

        if (nextIndex >= fields) {
          nextIndex = fields - 1;
        }

        next = this.iRefs[nextIndex];
        const split = value.split("");
        split.forEach((item, i) => {
          const cursor = index + i;

          if (cursor < fields) {
            values[cursor] = item;
          }
        });
        this.values = values;
      } else {
        next = this.iRefs[index + 1];
        values[index] = value;
        this.values = values;
      }

      if (next) {
        const element = this.$refs[next][0];
        element.focus();
        element.select();
      }

      this.triggerChange(values);
    },

    onKeyDown(e) {
      const index = parseInt(e.target.dataset.id);
      const prevIndex = index - 1;
      const nextIndex = index + 1;
      const prev = this.iRefs[prevIndex];
      const next = this.iRefs[nextIndex];

      switch (e.keyCode) {
        case KEY_CODE.backspace:
          {
            e.preventDefault();
            const vals = [...this.values];

            if (this.values[index]) {
              vals[index] = "";
              this.values = vals;
              this.triggerChange(vals);
            } else if (prev) {
              vals[prevIndex] = "";
              this.$refs[prev][0].focus();
              this.values = vals;
              this.triggerChange(vals);
            }

            break;
          }

        case KEY_CODE.left:
          e.preventDefault();

          if (prev) {
            this.$refs[prev][0].focus();
          }

          break;

        case KEY_CODE.right:
          e.preventDefault();

          if (next) {
            this.$refs[next][0].focus();
          }

          break;

        case KEY_CODE.up:
        case KEY_CODE.down:
          e.preventDefault();
          break;
      }
    },

    triggerChange() {
      let values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.values;
      const {
        fields
      } = this;
      const val = values.join("");
      this.$emit("input", val);

      if (val.length >= fields) {
        this.$emit("complete", val);
      }
    }

  },
  watch: {
    value(val) {
      const {
        values
      } = this;
      const split = val.split("");
      split.forEach((item, i) => {
        if (i < values.length) {
          values[i] = item;
        }
      });
      this.values = values;
    }

  }
};

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', _vm._l(_vm.values, function (v, index) {
    return _c('input', {
      key: _vm.id + "-" + index,
      ref: _vm.iRefs[index],
      refInFor: true,
      class: _vm.fieldClass,
      attrs: {
        "type": _vm.type === 'number' ? 'tel' : _vm.type,
        "pattern": _vm.type === 'number' ? '[0-9]' : null,
        "autoFocus": _vm.autoFocus && index === _vm.autoFocusIndex,
        "data-id": index,
        "disabled": _vm.disabled,
        "required": _vm.required,
        "maxlength": "1"
      },
      domProps: {
        "value": v
      },
      on: {
        "input": _vm.onValueChange,
        "focus": _vm.onFocus,
        "keydown": _vm.onKeyDown
      }
    });
  }), 0);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var __vue_component__$1 = __vue_component__;

// Layouts

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GuiAdminLayout: __vue_component__$l,
    GuiSidebar: __vue_component__$j,
    GuiSidebarItem: __vue_component__$h,
    GuiSidebarItemDropdown: __vue_component__$f,
    GuiSidebarDivider: __vue_component__$d,
    GuiSidebarSectionTitle: __vue_component__$b,
    GuiPageTitle: __vue_component__$9,
    GuiDatatable: __vue_component__$7,
    GuiActionColumn: __vue_component__$5,
    GuiSelectSearch: __vue_component__$3,
    GuiCodeInput: __vue_component__$1
});

// Import vue components

const install = function installGunshotUi(Vue) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export { __vue_component__$5 as GuiActionColumn, __vue_component__$l as GuiAdminLayout, __vue_component__$1 as GuiCodeInput, __vue_component__$7 as GuiDatatable, __vue_component__$9 as GuiPageTitle, __vue_component__$3 as GuiSelectSearch, __vue_component__$j as GuiSidebar, __vue_component__$d as GuiSidebarDivider, __vue_component__$h as GuiSidebarItem, __vue_component__$f as GuiSidebarItemDropdown, __vue_component__$b as GuiSidebarSectionTitle, install as default };
