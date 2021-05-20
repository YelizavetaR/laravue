(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/app/config/index~js/app/site/page/config/index~js/app/ui-config/index~js/layouts/app-layout"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item-content.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item-content.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MenuItemContent',
  props: {
    item: {
      type: Object,
      required: true
    },
    thumbOnRight: {
      type: Boolean,
      "default": false
    },
    menuLetterIcon: {
      type: Boolean,
      "default": false
    }
  },
  methods: {
    iconLetter: function iconLetter() {
      var title = this.item.meta.trans ? this.$t(this.item.meta.trans, {
        'attribute': this.$t(this.item.meta.title)
      }) : this.$t(this.item.meta.title);
      return title.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase();
      }).join('');
    },
    itemClasses: function itemClasses() {
      return this.item.meta["class"] ? this.item.meta["class"] : '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_sidebar_menu_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sidebar-menu-item */ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item.vue");
/* harmony import */ var _app_sidebar_menu_item_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-sidebar-menu-item-content */ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item-content.vue");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
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
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MenuItem',
  props: {
    menuId: {
      type: String,
      required: true
    },
    item: {
      type: Object,
      required: true
    },
    parent: {
      type: Object
    },
    basePath: {
      type: String,
      "default": ''
    },
    thumbOnRight: {
      type: Boolean,
      "default": false
    },
    showChildren: {
      type: Boolean,
      "default": false
    },
    menuLetterIcon: {
      type: Boolean,
      "default": false
    },
    sidebarOpen: {
      type: Boolean,
      "default": false
    }
  },
  components: {
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCollapse"],
    MenuItem: _app_sidebar_menu_item__WEBPACK_IMPORTED_MODULE_0__["default"],
    MenuItemContent: _app_sidebar_menu_item_content__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      isCollapseOpen: false,
      wasCollapseOpen: false
    };
  },
  watch: {
    sidebarOpen: function sidebarOpen(v) {
      if (v) {
        this.isCollapseOpen = this.wasCollapseOpen;
      } else {
        this.wasCollapseOpen = this.isCollapseOpen;
        this.isCollapseOpen = false;
      }
    }
  },
  methods: {
    resolvePath: function resolvePath(item) {
      return item.meta && item.meta.link ? item.redirect : path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(this.basePath, item.path);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item-content.vue?vue&type=template&id=3644d459&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item-content.vue?vue&type=template&id=3644d459&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: ["menu-item-content", _vm.itemClasses()] }, [
    !_vm.thumbOnRight
      ? _c("span", { staticClass: "menu-thumbnail" }, [
          _vm.menuLetterIcon && !_vm.item.meta.icon
            ? _c("span", { staticClass: "letter-icon" }, [
                _vm._v(_vm._s(_vm.iconLetter()))
              ])
            : _vm.item.meta.icon
            ? _c("i", { class: _vm.item.meta.icon })
            : _c("i", { staticClass: "fas fa-caret-right text-muted-sm" })
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("span", { staticClass: "detailed" }, [
      _c("span", { staticClass: "title" }, [
        _vm._v(_vm._s(_vm.$t(_vm.item.meta.title)))
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "description" }, [
        _vm._v(_vm._s(_vm.$t(_vm.item.meta.description)))
      ])
    ]),
    _vm._v(" "),
    _vm.item.meta.badge
      ? _c(
          "span",
          {
            class: ["ml-auto", _vm.item.meta.badge.class],
            attrs: { "data-badge": _vm.item.meta.badge.class }
          },
          [_vm._v(_vm._s(_vm.$t(_vm.item.meta.badge.title)))]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.thumbOnRight
      ? _c("span", { staticClass: "menu-thumbnail" }, [
          _vm.menuLetterIcon && !_vm.item.meta.icon
            ? _c("span", { staticClass: "letter-icon" }, [
                _vm._v(_vm._s(_vm.iconLetter()))
              ])
            : _vm.item.meta.icon
            ? _c("i", { class: _vm.item.meta.icon })
            : _c("i", { staticClass: "fas fa-caret-right text-muted-sm" })
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item.vue?vue&type=template&id=b98750a6&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item.vue?vue&type=template&id=b98750a6&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    [
      _vm.item.meta.prefixTitle
        ? [
            _c("div", { staticClass: "section-title" }, [
              _vm._v(_vm._s(_vm.$t(_vm.item.meta.prefixTitle)))
            ])
          ]
        : _vm._e(),
      _vm._v(" "),
      !_vm.item.children ||
      _vm.item.children.length === 0 ||
      _vm.item.meta.hideChildren
        ? [
            _vm.item.meta && _vm.item.meta.link
              ? _c(
                  "a",
                  { attrs: { target: "_blank", href: _vm.item.redirect } },
                  [
                    _c("menu-item-content", {
                      attrs: {
                        item: _vm.item,
                        "thumb-on-right": _vm.thumbOnRight,
                        "menu-letter-icon": _vm.menuLetterIcon
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "router-link",
              { attrs: { to: _vm.resolvePath(_vm.item) } },
              [
                _c("menu-item-content", {
                  attrs: {
                    item: _vm.item,
                    "thumb-on-right": _vm.thumbOnRight,
                    "menu-letter-icon": _vm.menuLetterIcon
                  }
                })
              ],
              1
            )
          ]
        : _vm.item.meta.hideChildren && !_vm.showChildren
        ? [
            _c(
              "router-link",
              { attrs: { to: _vm.resolvePath(_vm.item) } },
              [
                _c("menu-item-content", {
                  attrs: {
                    item: _vm.item,
                    "thumb-on-right": _vm.thumbOnRight,
                    "menu-letter-icon": _vm.menuLetterIcon
                  }
                })
              ],
              1
            )
          ]
        : _vm.item.meta.isHiddenNav && _vm.item.children.length
        ? [
            _vm._l(_vm.item.children, function(navItem, k) {
              return !(navItem.meta.isHiddenNav && navItem.meta.hideChildren)
                ? [
                    _c("menu-item", {
                      attrs: {
                        "menu-id": _vm.menuId + "-" + navItem.name + "-" + k,
                        item: navItem,
                        "base-path": _vm.resolvePath(_vm.item),
                        "thumb-on-right": _vm.thumbOnRight,
                        "menu-letter-icon": _vm.menuLetterIcon,
                        "sidebar-open": _vm.sidebarOpen
                      }
                    })
                  ]
                : _vm._e()
            })
          ]
        : [
            _c(
              "a",
              {
                class: ["has-children", _vm.isCollapseOpen ? "is-open" : ""],
                on: {
                  click: function($event) {
                    _vm.isCollapseOpen = !_vm.isCollapseOpen
                  }
                }
              },
              [
                _c("menu-item-content", {
                  attrs: {
                    item: _vm.item,
                    "thumb-on-right": _vm.thumbOnRight,
                    "menu-letter-icon": _vm.menuLetterIcon
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-collapse",
              {
                attrs: {
                  id: _vm.menuId,
                  accordion: _vm.parent
                    ? "sub-menu-accordion-" + _vm.parent.title.length
                    : "menu-accordion"
                },
                model: {
                  value: _vm.isCollapseOpen,
                  callback: function($$v) {
                    _vm.isCollapseOpen = $$v
                  },
                  expression: "isCollapseOpen"
                }
              },
              [
                _c(
                  "ul",
                  { staticClass: "list-unstyled" },
                  [
                    _vm._l(_vm.item.children, function(navItem, k) {
                      return !(
                        navItem.meta.isHiddenNav && navItem.meta.hideChildren
                      )
                        ? [
                            _c("menu-item", {
                              key: navItem.name || navItem.path,
                              attrs: {
                                "menu-id":
                                  _vm.menuId + "-" + navItem.name + "-" + k,
                                item: navItem,
                                "base-path": _vm.resolvePath(_vm.item),
                                "thumb-on-right": _vm.thumbOnRight,
                                "menu-letter-icon": _vm.menuLetterIcon,
                                "show-children": _vm.showChildren,
                                "sidebar-open": _vm.sidebarOpen,
                                parent: _vm.item.meta
                              }
                            })
                          ]
                        : _vm._e()
                    })
                  ],
                  2
                )
              ]
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item-content.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item-content.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_sidebar_menu_item_content_vue_vue_type_template_id_3644d459_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sidebar-menu-item-content.vue?vue&type=template&id=3644d459&scoped=true& */ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item-content.vue?vue&type=template&id=3644d459&scoped=true&");
/* harmony import */ var _app_sidebar_menu_item_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-sidebar-menu-item-content.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item-content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_sidebar_menu_item_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_sidebar_menu_item_content_vue_vue_type_template_id_3644d459_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_sidebar_menu_item_content_vue_vue_type_template_id_3644d459_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3644d459",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item-content.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item-content.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item-content.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_menu_item_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-menu-item-content.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item-content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_menu_item_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item-content.vue?vue&type=template&id=3644d459&scoped=true&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item-content.vue?vue&type=template&id=3644d459&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_menu_item_content_vue_vue_type_template_id_3644d459_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-menu-item-content.vue?vue&type=template&id=3644d459&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item-content.vue?vue&type=template&id=3644d459&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_menu_item_content_vue_vue_type_template_id_3644d459_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_menu_item_content_vue_vue_type_template_id_3644d459_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_sidebar_menu_item_vue_vue_type_template_id_b98750a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sidebar-menu-item.vue?vue&type=template&id=b98750a6&scoped=true& */ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item.vue?vue&type=template&id=b98750a6&scoped=true&");
/* harmony import */ var _app_sidebar_menu_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-sidebar-menu-item.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_sidebar_menu_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_sidebar_menu_item_vue_vue_type_template_id_b98750a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_sidebar_menu_item_vue_vue_type_template_id_b98750a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b98750a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_menu_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-menu-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_menu_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item.vue?vue&type=template&id=b98750a6&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item.vue?vue&type=template&id=b98750a6&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_menu_item_vue_vue_type_template_id_b98750a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-menu-item.vue?vue&type=template&id=b98750a6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item.vue?vue&type=template&id=b98750a6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_menu_item_vue_vue_type_template_id_b98750a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_menu_item_vue_vue_type_template_id_b98750a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=app-layout.js.map?id=07c301195c5630961c9f