(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/install/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/install/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_install__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api/install */ "./resources/js/api/install.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js/core/utils */ "./resources/js/core/utils/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["TabContent"]
  },
  data: function data() {
    return {
      name: '',
      serverChecks: [],
      folderChecks: [],
      formData: {
        dbHost: 'localhost',
        dbPort: 3306,
        dbDatabase: '',
        dbUsername: '',
        dbPassword: '',
        importDemoUsers: true,
        importDemoTodos: true
      },
      formErrors: {},
      isProcessing: false,
      isLoading: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('config', ['vars'])),
  mounted: function mounted() {
    this.getPreRequisite();
  },
  methods: {
    getPreRequisite: function getPreRequisite() {
      var _this = this;

      this.isLoading = true;
      _api_install__WEBPACK_IMPORTED_MODULE_1__["getPreRequisite"](this.formData).then(function (response) {
        _this.isLoading = false;
        _this.name = response.app.name;
        _this.serverChecks = response.preRequisite.server;
        _this.folderChecks = response.preRequisite.folder;
        var savedFormData = Object(_js_core_utils__WEBPACK_IMPORTED_MODULE_3__["getFromStorage"])('KMInstallWizFormData', true);
        formUtil.assignValues(_this.formData, savedFormData);
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = formUtil.handleErrors(error);
      });
    },
    preRequisiteFulfill: function preRequisiteFulfill() {
      var serverErrors = this.serverChecks.filter(function (serverCheck) {
        return serverCheck.type === 'error';
      });
      var folderErrors = this.folderChecks.filter(function (folderCheck) {
        return folderCheck.type === 'error';
      });

      if (serverErrors.length) {
        this.$toasted.error(this.$t('product.install.fix_server_error'), this.$toastConfig);
        return false;
      } else if (folderErrors.length) {
        this.$toasted.error(this.$t('product.install.fix_folder_error'), this.$toastConfig);
        return false;
      }

      return true;
    },
    validateDatabase: function validateDatabase() {
      return this.validate('database');
    },
    validate: function validate(option) {
      var _this2 = this;

      this.isLoading = true;
      Object(_js_core_utils__WEBPACK_IMPORTED_MODULE_3__["saveToStorage"])('KMInstallWizFormData', this.formData);
      return _api_install__WEBPACK_IMPORTED_MODULE_1__["validate"](option, this.formData).then(function () {
        _this2.isLoading = false;
        return true;
      })["catch"](function (error) {
        _this2.isLoading = false;
        _this2.formErrors = formUtil.handleErrors(error);
        return false;
      });
    },
    finishInstallation: function finishInstallation() {
      var _this3 = this;

      this.isProcessing = true;
      this.$toasted.success(this.$t('product.install.installation_processing'), this.$toastConfig);
      _api_install__WEBPACK_IMPORTED_MODULE_1__["install"](this.formData).then(function (response) {
        Object(_js_core_utils__WEBPACK_IMPORTED_MODULE_3__["removeFromStorage"])('KMInstallWizFormData');

        _this3.$store.dispatch('config/SetLoaded', false);

        _this3.$toasted.success(response.message, _this3.$toastConfig);

        _this3.$router.push({
          name: 'login'
        });
      })["catch"](function (error) {
        _this3.isProcessing = false;
        _this3.formErrors = formUtil.handleErrors(error);
      });
    },
    onTabChange: function onTabChange(prevIndex, nextIndex) {
      var that = this;
      this.$nextTick(function () {
        if (that) {
          if (nextIndex === 1 && that.$refs["dbDatabase"]) {
            that.$refs["dbDatabase"].$refs["base-input-dbDatabase"].focus();
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/index.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/install/index.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader!vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/css-loader/index.js!./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css"), "");

// module
exports.push([module.i, "@media (min-width: 992px) {\n.container {\n    width: 80vw;\n    max-width: 80vw;\n    margin: 1rem;\n}\n}\n.install-box .vue-form-wizard .wizard-icon-circle.square_shape {\n  border-radius: 1rem;\n}\n.install-box .vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape {\n  border-radius: 0.5rem;\n}\n.install-box .vue-form-wizard .wizard-header {\n  padding: 1.5rem 1.5rem 1rem;\n}\n.install-box .vue-form-wizard .wizard-tab-content {\n  padding: 1.5rem 1.5rem 1.5rem;\n}\n.install-box .vue-form-wizard .wizard-tab-content .alert {\n  padding: 0.5rem 0.875rem;\n}\n.install-box .vue-form-wizard .wizard-tab-content .server-requirements .alert {\n  padding: 0.5rem 0.875rem;\n  margin-bottom: 0.5rem;\n  font-size: 0.75rem;\n}\n.install-box .vue-form-wizard .wizard-card-footer {\n  padding: 1.5rem 1.5rem 0rem;\n}\n.install-box .vue-form-wizard .wizard-card-footer .wizard-btn {\n  font-size: 22px;\n  font-weight: 700;\n  padding: 0.5rem 1rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/index.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/install/index.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/index.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/index.vue?vue&type=template&id=4b6051ef&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/install/index.vue?vue&type=template&id=4b6051ef& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "general-page install-page" }, [
    _c(
      "div",
      { staticClass: "container" },
      [
        _c("animated-loader", {
          attrs: {
            "is-loading": _vm.isLoading,
            "loader-color": _vm.vars.loaderColor
          }
        }),
        _vm._v(" "),
        _c(
          "card",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.isProcessing,
                expression: "!isProcessing"
              }
            ],
            staticClass: "border-0 install-box",
            attrs: {
              type: "white",
              shadow: "",
              "header-classes": "bg-white",
              "body-classes": "p-0"
            }
          },
          [
            _c(
              "form-wizard",
              {
                ref: "installWizard",
                attrs: {
                  color: _vm.vars.colors.primary,
                  shape: "square",
                  errorColor: _vm.vars.colors.danger,
                  title: _vm.name,
                  subtitle: _vm.$t("product.install.sub_title"),
                  nextButtonText: _vm.$t("product.install.next_button_content"),
                  backButtonText: _vm.$t("product.install.back_button_content"),
                  finishButtonText: _vm.$t(
                    "product.install.finish_button_content"
                  )
                },
                on: {
                  "on-complete": _vm.finishInstallation,
                  "on-change": _vm.onTabChange
                }
              },
              [
                _c(
                  "tab-content",
                  {
                    attrs: {
                      title: _vm.$t("product.install.pre_requisite"),
                      "before-change": _vm.preRequisiteFulfill,
                      icon: "fas fa-tasks"
                    }
                  },
                  [
                    _c("h5", { staticClass: "card-title text-center" }, [
                      _vm._v(
                        _vm._s(_vm.$t("product.install.server_requirements"))
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row server-requirements" },
                      _vm._l(_vm.serverChecks, function(serverCheck) {
                        return _vm.serverChecks.length
                          ? _c("div", { staticClass: "col-3" }, [
                              _c(
                                "p",
                                {
                                  class: [
                                    "alert",
                                    "alert-" +
                                      (serverCheck.type === "error"
                                        ? "danger"
                                        : "info")
                                  ]
                                },
                                [
                                  _c("i", {
                                    class: [
                                      "fa",
                                      "fa-" +
                                        (serverCheck.type === "error"
                                          ? "times"
                                          : "check")
                                    ]
                                  }),
                                  _vm._v(" " + _vm._s(serverCheck.message))
                                ]
                              )
                            ])
                          : _vm._e()
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("h5", { staticClass: "card-title text-center mt-3" }, [
                      _vm._v(
                        _vm._s(_vm.$t("product.install.folder_permissions"))
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row server-requirements" },
                      _vm._l(_vm.folderChecks, function(folderCheck) {
                        return _vm.folderChecks.length
                          ? _c("div", { staticClass: "col-3" }, [
                              _c(
                                "p",
                                {
                                  class: [
                                    "alert",
                                    "alert-" +
                                      (folderCheck.type === "error"
                                        ? "danger"
                                        : "info")
                                  ]
                                },
                                [
                                  _c("i", {
                                    class: [
                                      "fa",
                                      "fa-" +
                                        (folderCheck.type === "error"
                                          ? "times"
                                          : "check")
                                    ]
                                  }),
                                  _vm._v(" " + _vm._s(folderCheck.message))
                                ]
                              )
                            ])
                          : _vm._e()
                      }),
                      0
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "tab-content",
                  {
                    attrs: {
                      title: _vm.$t("product.install.database_setup"),
                      "before-change": _vm.validateDatabase,
                      icon: "fas fa-database"
                    }
                  },
                  [
                    _c(
                      "form",
                      {
                        staticClass: "form-horizontal",
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.$refs.installWizard.nextTab()
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-4" },
                            [
                              _c("base-input", {
                                staticClass: "mb-3",
                                attrs: {
                                  label: _vm.$t(
                                    "product.install.props.db_port"
                                  ),
                                  type: "text",
                                  name: "dbPort",
                                  error: _vm.formErrors.dbPort
                                },
                                on: {
                                  "update:error": function($event) {
                                    return _vm.$set(
                                      _vm.formErrors,
                                      "dbPort",
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.formData.dbPort,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "dbPort", $$v)
                                  },
                                  expression: "formData.dbPort"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-8" },
                            [
                              _c("base-input", {
                                staticClass: "mb-3",
                                attrs: {
                                  label: _vm.$t(
                                    "product.install.props.db_host"
                                  ),
                                  type: "text",
                                  name: "dbHost",
                                  error: _vm.formErrors.dbHost
                                },
                                on: {
                                  "update:error": function($event) {
                                    return _vm.$set(
                                      _vm.formErrors,
                                      "dbHost",
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.formData.dbHost,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "dbHost", $$v)
                                  },
                                  expression: "formData.dbHost"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-4" },
                            [
                              _c("base-input", {
                                ref: "dbDatabase",
                                staticClass: "mb-3",
                                attrs: {
                                  label: _vm.$t(
                                    "product.install.props.db_database"
                                  ),
                                  type: "text",
                                  name: "dbDatabase",
                                  error: _vm.formErrors.dbDatabase
                                },
                                on: {
                                  "update:error": function($event) {
                                    return _vm.$set(
                                      _vm.formErrors,
                                      "dbDatabase",
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.formData.dbDatabase,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "dbDatabase", $$v)
                                  },
                                  expression: "formData.dbDatabase"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-4" },
                            [
                              _c("base-input", {
                                staticClass: "mb-3",
                                attrs: {
                                  label: _vm.$t(
                                    "product.install.props.db_username"
                                  ),
                                  type: "text",
                                  name: "dbUsername",
                                  error: _vm.formErrors.dbUsername
                                },
                                on: {
                                  "update:error": function($event) {
                                    return _vm.$set(
                                      _vm.formErrors,
                                      "dbUsername",
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.formData.dbUsername,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "dbUsername", $$v)
                                  },
                                  expression: "formData.dbUsername"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-4" },
                            [
                              _c("base-input", {
                                staticClass: "mb-3",
                                attrs: {
                                  label: _vm.$t(
                                    "product.install.props.db_password"
                                  ),
                                  type: "password",
                                  name: "dbPassword",
                                  error: _vm.formErrors.dbPassword
                                },
                                on: {
                                  "update:error": function($event) {
                                    return _vm.$set(
                                      _vm.formErrors,
                                      "dbPassword",
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.formData.dbPassword,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "dbPassword", $$v)
                                  },
                                  expression: "formData.dbPassword"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-6" },
                            [
                              _c(
                                "base-checkbox",
                                {
                                  staticClass: "my-4",
                                  model: {
                                    value: _vm.formData.importDemoUsers,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.formData,
                                        "importDemoUsers",
                                        $$v
                                      )
                                    },
                                    expression: "formData.importDemoUsers"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        _vm.$t(
                                          "product.install.import_demo_users"
                                        )
                                      ) +
                                      "\n                                "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-6" },
                            [
                              _c(
                                "base-checkbox",
                                {
                                  staticClass: "my-4",
                                  model: {
                                    value: _vm.formData.importDemoTodos,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.formData,
                                        "importDemoTodos",
                                        $$v
                                      )
                                    },
                                    expression: "formData.importDemoTodos"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        _vm.$t(
                                          "product.install.import_demo_todos"
                                        )
                                      ) +
                                      "\n                                "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn d-none",
                            attrs: { type: "submit" }
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.$t("product.install.next_button_content")
                              )
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "card",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isProcessing,
                expression: "isProcessing"
              }
            ],
            staticClass: "border-0 install-box text-center",
            attrs: {
              type: "white",
              shadow: "",
              "header-classes": "bg-white pb-5",
              "body-classes": "px-lg-5 py-lg-5"
            }
          },
          [
            _c("h2", { staticClass: "mb-4" }, [
              _vm._v("Installation in Progress")
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("h5", [
              _vm._v(
                "This process may take several minutes depending upon your server configuration"
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "alert alert-info mt-4" }, [
              _vm._v(
                "Do not reload or close this page. You will be redirected to login page automatically once the installation is completed."
              )
            ]),
            _vm._v(" "),
            _c("animated-loader", {
              attrs: {
                "is-loading": _vm.isProcessing,
                "loader-color": _vm.vars.loaderColor,
                size: "inline"
              }
            })
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/install.js":
/*!*************************************!*\
  !*** ./resources/js/api/install.js ***!
  \*************************************/
/*! exports provided: getPreRequisite, validate, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreRequisite", function() { return getPreRequisite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var _js_core_utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/core/utils/request */ "./resources/js/core/utils/request.js");

var apiUrl = '/install';
function getPreRequisite() {
  return Object(_js_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: apiUrl + '/pre-requisite',
    method: 'get'
  });
}
function validate(option, data) {
  return Object(_js_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: apiUrl + '/validate?option=' + option,
    method: 'post',
    data: data
  });
}
function install(data) {
  return Object(_js_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: apiUrl,
    method: 'post',
    data: data
  });
}

/***/ }),

/***/ "./resources/js/views/install/index.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/install/index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4b6051ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4b6051ef& */ "./resources/js/views/install/index.vue?vue&type=template&id=4b6051ef&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/install/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/install/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4b6051ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4b6051ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/install/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/install/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/install/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/install/index.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/install/index.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/install/index.vue?vue&type=template&id=4b6051ef&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/install/index.vue?vue&type=template&id=4b6051ef& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b6051ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4b6051ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/index.vue?vue&type=template&id=4b6051ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b6051ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b6051ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=index.js.map?id=f1c29bbdecb789f3d0a0