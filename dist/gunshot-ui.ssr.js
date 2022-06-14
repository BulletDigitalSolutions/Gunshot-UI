'use strict';//
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
var script$7 = {
  props: {
    'breadcrumbs': {
      type: Array,
      default: () => []
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}/* script */
const __vue_script__$7 = script$7;
/* template */

var __vue_render__$b = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('nav', {
    staticClass: "layout-navbar navbar navbar-expand-lg align-items-lg-center bg-white container-p-x",
    attrs: {
      "id": "layout-navbar"
    }
  }, [_vm._ssrNode("<div class=\"layout-sidenav-toggle navbar-nav d-lg-none align-items-lg-center mr-auto\"><a href=\"javascript:void(0)\" class=\"nav-item nav-link px-0 mr-lg-4\"><i class=\"ion ion-md-menu text-large align-middle\"></i></a></div> <button type=\"button\" data-toggle=\"collapse\" data-target=\"#layout-navbar-collapse\" class=\"navbar-toggler\"><span class=\"navbar-toggler-icon\"></span></button> <div id=\"layout-navbar-collapse\" class=\"navbar-collapse collapse\"><hr class=\"d-lg-none w-100 my-2\"> <div class=\"navbar-nav mr-auto\"><ol class=\"breadcrumb m-auto\">" + _vm._ssrList(_vm.breadcrumbs, function (breadcrumb, key) {
    return "<li" + _vm._ssrClass(null, ['breadcrumb-item', {
      'active': key + 1 === _vm.breadcrumbs.length
    }]) + "><a" + _vm._ssrAttr("href", breadcrumb.url) + ">" + _vm._ssrEscape(_vm._s(breadcrumb.title)) + "</a></li>";
  }) + "</ol></div> <div class=\"navbar-nav align-items-lg-center ml-auto\"><div class=\"nav-item dropdown\"><a href=\"#\" data-bs-toggle=\"dropdown\" class=\"nav-link dropdown-toggle\"><span class=\"d-inline-flex flex-lg-row-reverse align-items-center align-middle\"><img src alt class=\"d-block ui-w-30 rounded-circle\"> <span class=\"px-1 mr-lg-2 ml-2 ml-lg-0\"></span></span></a> <div class=\"dropdown-menu dropdown-menu-right\"></div></div></div></div>")]);
};

var __vue_staticRenderFns__$b = [];
/* style */

const __vue_inject_styles__$b = undefined;
/* scoped */

const __vue_scope_id__$b = undefined;
/* module identifier */

const __vue_module_identifier__$b = "data-v-56410c2e";
/* functional template */

const __vue_is_functional_template__$b = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$l = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$b,
  staticRenderFns: __vue_staticRenderFns__$b
}, __vue_inject_styles__$b, __vue_script__$7, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, undefined, undefined, undefined);

var Navbar = __vue_component__$l;//
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
var script$6 = {
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
};/* script */
const __vue_script__$6 = script$6;
/* template */

var __vue_render__$a = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "layout-sidenav sidenav sidenav-vertical bg-sidenav-theme",
    attrs: {
      "id": "layout-sidenav"
    }
  }, [_vm._ssrNode("<div class=\"app-brand demo mt-md-3\"><a href class=\"app-brand-text demo sidenav-text font-weight-normal m-auto\"><img" + _vm._ssrAttr("src", _vm.logo) + " alt=\"Logo\" class=\"w-auto\"></a></div> "), _vm._ssrNode("<ul class=\"sidenav-inner py-1 pt-5 w-100\">", "</ul>", [_vm._t("default")], 2)], 2);
};

var __vue_staticRenderFns__$a = [];
/* style */

const __vue_inject_styles__$a = undefined;
/* scoped */

const __vue_scope_id__$a = undefined;
/* module identifier */

const __vue_module_identifier__$a = "data-v-5532405c";
/* functional template */

const __vue_is_functional_template__$a = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$k = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$6, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, undefined, undefined);

var Sidenav = __vue_component__$k;//
var script$5 = {
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
};/* script */
const __vue_script__$5 = script$5;
/* template */

var __vue_render__$9 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', [_vm._ssrNode("<div class=\"layout-wrapper layout-2\">", "</div>", [_vm._ssrNode("<div class=\"layout-inner\">", "</div>", [_c('sidenav', {
    attrs: {
      "logo": _vm.logo
    }
  }, [_vm._t("sidenav")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"layout-container\">", "</div>", [_c('navbar', {
    attrs: {
      "breadcrumbs": _vm.breadcrumbs
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"layout-content\">", "</div>", [_vm._ssrNode("<div class=\"container-fluid d-flex align-items-stretch flex-grow-1 p-0\">", "</div>", [_vm._t("sidebar"), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex-shrink-1 flex-grow-1 container-p-x container-p-y\">", "</div>", [_vm._t("default")], 2)], 2), _vm._ssrNode(" <nav class=\"layout-footer footer bg-footer-theme\"><div class=\"container-fluid d-flex flex-wrap justify-content-between text-center container-p-x pb-3\"><div class=\"pt-3\"><span class=\"footer-text font-weight-bolder\"></span> ©\n                            </div></div></nav>")], 2)], 2)], 2)])]);
};

var __vue_staticRenderFns__$9 = [];
/* style */

const __vue_inject_styles__$9 = undefined;
/* scoped */

const __vue_scope_id__$9 = undefined;
/* module identifier */

const __vue_module_identifier__$9 = "data-v-15a022da";
/* functional template */

const __vue_is_functional_template__$9 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$i = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$5, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, undefined, undefined);

var __vue_component__$j = __vue_component__$i;/* script */

/* template */
var __vue_render__$8 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "flex-shrink-0 flex-grow-0 bg-light bg-light layout-sidenav sidenav sidenav-vertical",
    staticStyle: {
      "width": "auto"
    }
  }, [_vm._ssrNode("<ul class=\"sidenav-inner\">", "</ul>", [_vm._t("default")], 2)]);
};

var __vue_staticRenderFns__$8 = [];
/* style */

const __vue_inject_styles__$8 = undefined;
/* scoped */

const __vue_scope_id__$8 = undefined;
/* module identifier */

const __vue_module_identifier__$8 = "data-v-5022aee7";
/* functional template */

const __vue_is_functional_template__$8 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$g = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, {}, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);

var __vue_component__$h = __vue_component__$g;/* script */

/* template */
var __vue_render__$7 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('li', {
    staticClass: "sidenav-item pt-2 m-3"
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$7 = [];
/* style */

const __vue_inject_styles__$7 = undefined;
/* scoped */

const __vue_scope_id__$7 = undefined;
/* module identifier */

const __vue_module_identifier__$7 = "data-v-8ccf1d68";
/* functional template */

const __vue_is_functional_template__$7 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$e = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, {}, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);

var __vue_component__$f = __vue_component__$e;//
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
var script$4 = {
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
      open: false
    };
  }

};/* script */
const __vue_script__$4 = script$4;
/* template */

var __vue_render__$6 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('li', {
    class: ['sidenav-item', {
      open: 'open'
    }]
  }, [_vm._ssrNode("<a href=\"javascript:void(0)\" class=\"sidenav-link sidenav-toggle\">" + (_vm.icon ? "<i" + _vm._ssrClass(null, ['sidenav-icon', 'ion', _vm.icon]) + "></i>" : "<!---->") + " <div>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</div></a> "), _vm._ssrNode("<ul class=\"sidenav-menu\">", "</ul>", [_vm._t("default")], 2)], 2);
};

var __vue_staticRenderFns__$6 = [];
/* style */

const __vue_inject_styles__$6 = undefined;
/* scoped */

const __vue_scope_id__$6 = undefined;
/* module identifier */

const __vue_module_identifier__$6 = "data-v-538ebd22";
/* functional template */

const __vue_is_functional_template__$6 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$c = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$4, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

var __vue_component__$d = __vue_component__$c;/* script */

/* template */
var __vue_render__$5 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('li', {
    staticClass: "sidenav-divider mb-1"
  }, []);
};

var __vue_staticRenderFns__$5 = [];
/* style */

const __vue_inject_styles__$5 = undefined;
/* scoped */

const __vue_scope_id__$5 = undefined;
/* module identifier */

const __vue_module_identifier__$5 = "data-v-6e8b6ca7";
/* functional template */

const __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$a = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, {}, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

var __vue_component__$b = __vue_component__$a;//
//
//
//
//
//
//
//
var script$3 = {
  props: {
    showDivider: {
      type: Boolean,
      default: true
    }
  }
};/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$4 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('span', {
    staticClass: "w-100"
  }, [_vm._ssrNode((_vm.showDivider ? "<li class=\"sidenav-divider mb-1\"></li>" : "<!---->") + " "), _vm._ssrNode("<li class=\"sidenav-header small font-weight-semibold\">", "</li>", [_vm._t("default")], 2)], 2);
};

var __vue_staticRenderFns__$4 = [];
/* style */

const __vue_inject_styles__$4 = undefined;
/* scoped */

const __vue_scope_id__$4 = undefined;
/* module identifier */

const __vue_module_identifier__$4 = "data-v-7314d99e";
/* functional template */

const __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$3, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

var __vue_component__$9 = __vue_component__$8;/* script */

/* template */
var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "d-flex justify-content-between mb-2 py-2"
  }, [_vm._ssrNode("<h4 class=\"font-weight-bold\">", "</h4>", [_vm._t("default")], 2), _vm._ssrNode(" "), _vm._t("button")], 2);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = undefined;
/* scoped */

const __vue_scope_id__$3 = undefined;
/* module identifier */

const __vue_module_identifier__$3 = "data-v-385c0b8a";
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, {}, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

var __vue_component__$7 = __vue_component__$6;//
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
var script$2 = {
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
};/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
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

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = undefined;
/* scoped */

const __vue_scope_id__$2 = undefined;
/* module identifier */

const __vue_module_identifier__$2 = "data-v-72b99264";
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

var __vue_component__$5 = __vue_component__$4;//
//
//
//
//
//
//
var script$1 = {
  props: {
    routes: {
      type: Object,
      required: true
    }
  }
};/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "pull-right"
  }, [_vm.routes.hasOwnProperty('edit') ? _c('Link', {
    attrs: {
      "href": _vm.routes.edit
    }
  }, [_vm._v("Test")]) : _vm._e(), _vm._ssrNode(" "), _vm.routes.hasOwnProperty('edit') ? _c('b-button', {
    attrs: {
      "variant": "primary",
      "href": _vm.routes.edit
    }
  }, [_vm._v("Edit")]) : _vm._e(), _vm._ssrNode(" "), _vm.routes.hasOwnProperty('show') ? _c('b-button', {
    attrs: {
      "variant": "secondary",
      "href": _vm.routes.show
    }
  }, [_vm._v("View")]) : _vm._e()], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = undefined;
/* scoped */

const __vue_scope_id__$1 = undefined;
/* module identifier */

const __vue_module_identifier__$1 = "data-v-70170e98";
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

var __vue_component__$3 = __vue_component__$2;//
//
//
//
//
// A component to search an entity. Performs an infinite scroll from the API, and allows you to filter options.
var script = {
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
};/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
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
  }, [_vm._ssrNode("<select" + _vm._ssrAttr("id", _vm.selector) + _vm._ssrAttr("name", _vm.name) + " class=\"form-control\"></select>")]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = "data-v-255a90dc";
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var __vue_component__$1 = __vue_component__;// Layouts
var components$1=/*#__PURE__*/Object.freeze({__proto__:null,GuiAdminLayout:__vue_component__$j,GuiSidebar:__vue_component__$h,GuiSidebarItem:__vue_component__$f,GuiSidebarItemDropdown:__vue_component__$d,GuiSidebarDivider:__vue_component__$b,GuiSidebarSectionTitle:__vue_component__$9,GuiPageTitle:__vue_component__$7,GuiDatatable:__vue_component__$5,GuiActionColumn:__vue_component__$3,GuiSelectSearch:__vue_component__$1});// Import vue components

const install = function installGunshotUi(Vue) {
  Object.entries(components$1).forEach(_ref => {
    let [componentName, component] = _ref;
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default':install,GuiAdminLayout:__vue_component__$j,GuiSidebar:__vue_component__$h,GuiSidebarItem:__vue_component__$f,GuiSidebarItemDropdown:__vue_component__$d,GuiSidebarDivider:__vue_component__$b,GuiSidebarSectionTitle:__vue_component__$9,GuiPageTitle:__vue_component__$7,GuiDatatable:__vue_component__$5,GuiActionColumn:__vue_component__$3,GuiSelectSearch:__vue_component__$1});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(_ref => {
  let [componentName, component] = _ref;

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;