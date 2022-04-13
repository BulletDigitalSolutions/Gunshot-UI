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

/* template */
var __vue_render__$5 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  _vm._self._c || _h;

  return _vm._m(0);
};

var __vue_staticRenderFns__$5 = [function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('nav', {
    staticClass: "layout-navbar navbar navbar-expand-lg align-items-lg-center bg-white container-p-x",
    attrs: {
      "id": "layout-navbar"
    }
  }, [_c('div', {
    staticClass: "layout-sidenav-toggle navbar-nav d-lg-none align-items-lg-center mr-auto"
  }, [_c('a', {
    staticClass: "nav-item nav-link px-0 mr-lg-4",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "ion ion-md-menu text-large align-middle"
  })])]), _vm._v(" "), _c('button', {
    staticClass: "navbar-toggler",
    attrs: {
      "type": "button",
      "data-toggle": "collapse",
      "data-target": "#layout-navbar-collapse"
    }
  }, [_c('span', {
    staticClass: "navbar-toggler-icon"
  })]), _vm._v(" "), _c('div', {
    staticClass: "navbar-collapse collapse",
    attrs: {
      "id": "layout-navbar-collapse"
    }
  }, [_c('hr', {
    staticClass: "d-lg-none w-100 my-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "navbar-nav mr-auto"
  }), _vm._v(" "), _c('div', {
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
  })])])])]);
}];
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

const __vue_component__$9 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, {}, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

var Navbar = __vue_component__$9;

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
var script$2 = {
  props: {
    logo: {
      type: String,
      default: '/assets/shoot-logo-primary-green.svg'
    },
    routes: {
      type: Array,
      default: () => []
    }
  }
};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$4 = function () {
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
    staticClass: "sidenav-inner py-1"
  })]);
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
}, __vue_inject_styles__$4, __vue_script__$2, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

var Sidenav = __vue_component__$8;

//
var script$1 = {
  components: {
    'navbar': Navbar,
    'sidenav': Sidenav
  },
  props: {
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
    }
  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$3 = function () {
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
  }), _vm._v(" "), _c('div', {
    staticClass: "layout-container"
  }, [_c('navbar'), _vm._v(" "), _c('div', {
    staticClass: "layout-content"
  }, [_c('div', {
    staticClass: "container-fluid d-flex align-items-stretch flex-grow-1 p-0"
  }, [_vm._t("sidebar"), _vm._v(" "), _c('div', {
    staticClass: "flex-shrink-1 flex-grow-1 container-p-x container-p-y"
  }, [_vm._t("default")], 2)], 2), _vm._v(" "), _vm._m(0)])], 1)], 1)])]);
};

var __vue_staticRenderFns__$3 = [function () {
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
}, __vue_inject_styles__$3, __vue_script__$1, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

var __vue_component__$7 = __vue_component__$6;

/* script */

/* template */
var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "flex-shrink-0 flex-grow-0 bg-light bg-light layout-sidenav sidenav sidenav-vertical border",
    staticStyle: {
      "width": "auto"
    }
  }, [_c('ul', {
    staticClass: "sidenav-inner"
  }, [_vm._t("default")], 2)]);
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
}, __vue_inject_styles__$2, {}, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

var __vue_component__$5 = __vue_component__$4;

/* script */

/* template */
var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('li', {
    staticClass: "sidenav-item pt-2 m-3"
  }, [_vm._t("default")], 2);
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
}, __vue_inject_styles__$1, {}, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

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
var script = {
  props: {
    value: {
      type: Object,
      default: {
        sort: {
          sortBy: 'id',
          sortDirection: 'asc'
        },
        pagination: {
          page: 1,
          limit: 25
        },
        options: {
          fields: [{
            key: 'id',
            label: 'ID',
            sortable: true
          }, {
            key: 'name',
            label: 'Name',
            sortable: true
          }]
        }
      }
    },
    results: {
      type: Object,
      default: {
        data: [],
        count: 0
      }
    },
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
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('b-form-select', {
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
  }), _vm._v(" "), _c('b-card', {
    attrs: {
      "body-class": "p-0"
    }
  }, [_c('b-card-header', [_c('p', {
    staticClass: "text-muted"
  }, [_vm._v("Showing " + _vm._s(_vm.results.data.length) + " of " + _vm._s(_vm.results.count) + " results")]), _vm._v(" "), _c('b-pagination', {
    staticClass: "pt-2 pr-4",
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
  })], 1), _vm._v(" "), _c('b-table', {
    staticClass: "p-0",
    attrs: {
      "striped": "",
      "items": _vm.results.data,
      "fields": _vm.table.options.fields
    }
  }, [_vm._t("table")], 2), _vm._v(" "), _c('b-card-footer', [_c('p', {
    staticClass: "text-muted pull-left"
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
  })], 1)], 1)], 1);
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

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GuiAdminLayout: __vue_component__$7,
    GuiSidebar: __vue_component__$5,
    GuiSidebarItem: __vue_component__$3,
    GuiDatatable: __vue_component__$1
});

// Import vue components

const install = function installGunshotUi(Vue) {
  Object.entries(components).forEach(_ref => {
    let [componentName, component] = _ref;
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export { __vue_component__$7 as GuiAdminLayout, __vue_component__$1 as GuiDatatable, __vue_component__$5 as GuiSidebar, __vue_component__$3 as GuiSidebarItem, install as default };
