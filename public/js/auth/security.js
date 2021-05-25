(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/auth/security"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/security.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/security.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_auth_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/auth-form */ "./resources/js/mixins/auth-form.js");
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
  "extends": _mixins_auth_form__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      formData: {
        twoFactorCode: ''
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.isLoading = true;
      var routeQuery = this.$route.query;
      this.CheckTwoFactorCode({
        twoFactorCode: this.formData.twoFactorCode
      }).then(function (response) {
        var routeTo = response.reload ? {
          name: 'appDashboard',
          query: {
            reload: 1
          }
        } : {
          name: 'appDashboard'
        };

        if (routeQuery && routeQuery.ref && _this.$router.resolve(routeQuery.ref)) {
          routeTo = _this.$router.resolve(routeQuery.ref).route;
        }

        _this.ResetTwoFactorSet().then(function () {
          _this.$router.push(routeTo);
        })["catch"](function (error) {
          _this.isLoading = false;
          _this.formErrors = formUtil.handleErrors(error);
        });
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = formUtil.handleErrors(error);
      });
    },
    logout: function logout() {
      var _this2 = this;

      this.isLoading = true;
      this.Logout().then(function () {
        _this2.$router.push({
          name: 'login'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/security.vue?vue&type=template&id=d35acc50&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/security.vue?vue&type=template&id=d35acc50&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "guest-page" },
    [
      _c(
        "box",
        [
          _c("animated-loader", {
            attrs: {
              "is-loading": _vm.isLoading,
              "loader-color": _vm.vars.loaderColor
            }
          }),
          _vm._v(" "),
          _c("guest-header", [
            _c("h5", [_vm._v(_vm._s(_vm.$t("auth.security.page_title")))])
          ]),
          _vm._v(" "),
          _c("section", { attrs: { role: "main" } }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submit($event)
                  }
                }
              },
              [
                _c("base-input", {
                  staticClass: "mb-3",
                  attrs: {
                    "auto-focus": "",
                    label: _vm.$t("auth.security.props.two_factor_code"),
                    type: "text",
                    name: "twoFactorCode",
                    "addon-left-icon": "fas fa-key",
                    error: _vm.formErrors.twoFactorCode
                  },
                  on: {
                    "update:error": function($event) {
                      return _vm.$set(_vm.formErrors, "twoFactorCode", $event)
                    }
                  },
                  model: {
                    value: _vm.formData.twoFactorCode,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "twoFactorCode", $$v)
                    },
                    expression: "formData.twoFactorCode"
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-center" },
                  [
                    _c(
                      "base-button",
                      {
                        staticClass: "my-4 text-lg",
                        attrs: { type: "submit", design: "primary", block: "" }
                      },
                      [_vm._v(_vm._s(_vm.$t("general.proceed")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group m-b-0" }, [
                  _c("div", { staticClass: "col-sm-12 text-center" }, [
                    _c("h6", { staticClass: "text-uppercase" }, [
                      _vm._v(_vm._s(_vm.$t("general.or")))
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      [
                        _c(
                          "base-button",
                          {
                            attrs: { type: "button", design: "link" },
                            on: { click: _vm.logout }
                          },
                          [
                            _c("i", { staticClass: "fas fa-power-off" }),
                            _c("span", { staticClass: "font-weight-bold" }, [
                              _vm._v(_vm._s(_vm.$t("auth.logout")))
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ])
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.configs.system
        ? _c("guest-footer", {
            attrs: {
              "footer-credit": _vm.configs.system.footerCredit,
              version: _vm.configs.system.version
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/mixins/auth-form.js":
/*!******************************************!*\
  !*** ./resources/js/mixins/auth-form.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_views_auth_partials_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/views/auth/partials/box */ "./resources/js/views/auth/partials/box/index.vue");
/* harmony import */ var _views_layouts_partials_guest_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @views/layouts/partials/guest-header */ "./resources/js/views/layouts/partials/guest-header.vue");
/* harmony import */ var _views_layouts_partials_guest_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @views/layouts/partials/guest-footer */ "./resources/js/views/layouts/partials/guest-footer.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Box: _js_views_auth_partials_box__WEBPACK_IMPORTED_MODULE_1__["default"],
    GuestHeader: _views_layouts_partials_guest_header__WEBPACK_IMPORTED_MODULE_2__["default"],
    GuestFooter: _views_layouts_partials_guest_footer__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      formData: {},
      formErrors: {},
      initialFormData: null,
      initianLength: 0,
      emptyFormData: null,
      preRequisite: {},
      isLoading: true,
      icons: {
        'facebook': 'fab fa-facebook-f',
        'twitter': 'fab fa-twitter',
        'github': 'fab fa-github',
        'google': 'fab fa-google'
      },
      btns: {
        'facebook': 'btn-facebook',
        'twitter': 'btn-twitter',
        'github': 'btn-github',
        'google': 'btn-google-plus'
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['configs', 'vars'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', ['twoFactorSet', 'hasRole'])),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('config', ['GetConfig'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('user', ['Register', 'SetCSRF', 'Logout', 'Login', 'LoginUsingOtp', 'ResetTwoFactorSet', 'RequestReset', 'ValidateResetPassword', 'ResetPassword', 'CheckTwoFactorCode'])), {}, {
    withQuery: function withQuery(toRoute) {
      var routeQuery = this.$route.query;

      if (routeQuery && routeQuery.ref) {
        toRoute['query'] = {
          ref: routeQuery.ref
        };
      }

      return toRoute;
    }
  }),
  mounted: function mounted() {
    this.initialFormData = _.cloneDeep(this.formData);
    this.isLoading = false;
  },
  beforeDestroy: function beforeDestroy() {
    delete this.formData;
    delete this.formErrors;
    delete this.preRequisite;
  }
});

/***/ }),

/***/ "./resources/js/views/auth/security.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/auth/security.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _security_vue_vue_type_template_id_d35acc50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security.vue?vue&type=template&id=d35acc50&scoped=true& */ "./resources/js/views/auth/security.vue?vue&type=template&id=d35acc50&scoped=true&");
/* harmony import */ var _security_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/security.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _security_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _security_vue_vue_type_template_id_d35acc50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _security_vue_vue_type_template_id_d35acc50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d35acc50",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/security.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/security.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/auth/security.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_security_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./security.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/security.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_security_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/security.vue?vue&type=template&id=d35acc50&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/auth/security.vue?vue&type=template&id=d35acc50&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_security_vue_vue_type_template_id_d35acc50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./security.vue?vue&type=template&id=d35acc50&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/security.vue?vue&type=template&id=d35acc50&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_security_vue_vue_type_template_id_d35acc50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_security_vue_vue_type_template_id_d35acc50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=security.js.map?id=76186ce551fbf1eb8722