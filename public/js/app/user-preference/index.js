(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/app/user-preference/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user-preference/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/user-preference/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_config_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/config-form */ "./resources/js/mixins/config-form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  "extends": _mixins_config_form__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      now: moment(),
      formData: {
        dateFormat: '',
        timeFormat: '',
        timezone: '',
        perPage: 10,
        locale: '',
        autoOpen: false,
        enterToSubmit: false,
        muteSoundNotification: false,
        types: ['system', 'chat']
      },
      preRequisite: {
        dateFormats: [],
        timeFormats: [],
        timezones: [],
        locales: [],
        paginations: []
      }
    };
  },
  mounted: function mounted() {
    this.getInitialData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user-preference/index.vue?vue&type=template&id=517baa03&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/user-preference/index.vue?vue&type=template&id=517baa03&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    "base-container",
    {
      attrs: {
        boxed: "",
        "with-loader": "",
        "is-loading": _vm.isLoading,
        "loader-color": _vm.vars.loaderColor
      }
    },
    [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit(true)
            }
          }
        },
        [
          _c("h4", { staticClass: "pb-2 mb-4 border-bottom" }, [
            _vm._v(_vm._s(_vm.$t("config.system.system")))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12 col-md-4 mb-4" },
              [
                _c("base-select", {
                  attrs: {
                    options: _vm.preRequisite.dateFormats,
                    label: _vm.$t("config.system.date_format"),
                    "allow-empty": false,
                    simple: "",
                    disabled: _vm.isLoading,
                    required: ""
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "selectedOption",
                      fn: function(ref) {
                        var option = ref.option
                        return [
                          _vm._v(
                            _vm._s(_vm._f("moment")(_vm.now, option.uuid)) + " "
                          ),
                          _c("small", { staticClass: "bracketed text-muted" }, [
                            _vm._v(_vm._s(option.name))
                          ])
                        ]
                      }
                    },
                    {
                      key: "listOption",
                      fn: function(ref) {
                        var option = ref.option
                        return [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm._f("moment")(_vm.now, option.uuid)) +
                              " "
                          ),
                          _c("small", { staticClass: "bracketed text-muted" }, [
                            _vm._v(_vm._s(option.name))
                          ])
                        ]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.formData.dateFormat,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "dateFormat", $$v)
                    },
                    expression: "formData.dateFormat"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-md-4 mb-4" },
              [
                _c("base-select", {
                  attrs: {
                    options: _vm.preRequisite.timeFormats,
                    label: _vm.$t("config.system.time_format"),
                    "allow-empty": false,
                    simple: "",
                    disabled: _vm.isLoading,
                    required: ""
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "selectedOption",
                      fn: function(ref) {
                        var option = ref.option
                        return [
                          _vm._v(
                            _vm._s(_vm._f("moment")(_vm.now, option.uuid)) + " "
                          ),
                          _c("small", { staticClass: "bracketed text-muted" }, [
                            _vm._v(_vm._s(option.name))
                          ])
                        ]
                      }
                    },
                    {
                      key: "listOption",
                      fn: function(ref) {
                        var option = ref.option
                        return [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm._f("moment")(_vm.now, option.uuid)) +
                              " "
                          ),
                          _c("small", { staticClass: "bracketed text-muted" }, [
                            _vm._v(_vm._s(option.name))
                          ])
                        ]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.formData.timeFormat,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "timeFormat", $$v)
                    },
                    expression: "formData.timeFormat"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-md-4 mb-4" },
              [
                _c("base-select", {
                  attrs: {
                    options: _vm.preRequisite.timezones,
                    label: _vm.$t("config.system.timezone"),
                    "allow-empty": false,
                    simple: "",
                    disabled: _vm.isLoading,
                    required: ""
                  },
                  model: {
                    value: _vm.formData.timezone,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "timezone", $$v)
                    },
                    expression: "formData.timezone"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-md-4 mb-4" },
              [
                _c("base-select", {
                  attrs: {
                    options: _vm.preRequisite.locales,
                    label: _vm.$t("config.system.locale"),
                    "allow-empty": false,
                    simple: "",
                    disabled: _vm.isLoading,
                    required: ""
                  },
                  model: {
                    value: _vm.formData.locale,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "locale", $$v)
                    },
                    expression: "formData.locale"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("h4", { staticClass: "pb-2 mb-4 mt-4 border-bottom" }, [
            _vm._v(_vm._s(_vm.$t("config.chat.chat")))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12 col-md-4 mb-4" },
              [
                _c(
                  "switch-wrapper",
                  { attrs: { label: _vm.$t("config.chat.auto_open") } },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.autoOpen,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "autoOpen", $$v)
                        },
                        expression: "formData.autoOpen"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-md-4 mb-4" },
              [
                _c(
                  "switch-wrapper",
                  { attrs: { label: _vm.$t("config.chat.enter_to_submit") } },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.enterToSubmit,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "enterToSubmit", $$v)
                        },
                        expression: "formData.enterToSubmit"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-md-4 mb-4" },
              [
                _c(
                  "switch-wrapper",
                  {
                    attrs: {
                      label: _vm.$t("config.chat.mute_sound_notification")
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.muteSoundNotification,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "muteSoundNotification", $$v)
                        },
                        expression: "formData.muteSoundNotification"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-right mt-5" },
            [
              _c(
                "base-button",
                {
                  attrs: { type: "button", design: "light" },
                  on: { click: _vm.reset }
                },
                [_vm._v(_vm._s(_vm.$t("general.reset")))]
              ),
              _vm._v(" "),
              _c(
                "base-button",
                { attrs: { type: "submit", design: "primary" } },
                [_vm._v(_vm._s(_vm.$t("general.save")))]
              )
            ],
            1
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/mixins/config-form.js":
/*!********************************************!*\
  !*** ./resources/js/mixins/config-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/config */ "./resources/js/api/config.js");
/* harmony import */ var _js_core_utils_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js/core/utils/formatter */ "./resources/js/core/utils/formatter.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      formData: {},
      formErrors: {},
      initialFormData: null,
      initianLength: 0,
      emptyFormData: null,
      entity: null,
      preRequisite: {},
      isLoading: true,
      dataType: null,
      configType: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('config', ['configs', 'vars'])),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('config', ['GetConfig'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('navigation', ['Generate'])), {}, {
    findActualValue: function findActualValue(value, options) {
      var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'uuid';
      return options.find(function (option) {
        return option[key] === value;
      }) || null;
    },
    submit: function submit() {
      var _this = this;

      var preference = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (formUtil.isUnchanged(this.initialFormData, this.formData)) {
        this.$toasted.info(this.$t('general.nothing_changed'), this.$toastConfig.info);
        return false;
      }

      this.isLoading = true;
      this.formData.type = this.formData.type.snakeCase();
      var storeFn = preference === true ? _api_config__WEBPACK_IMPORTED_MODULE_2__["updateUserPref"] : this.configType === 'module' ? _api_config__WEBPACK_IMPORTED_MODULE_2__["updateModule"] : _api_config__WEBPACK_IMPORTED_MODULE_2__["update"];

      if (typeof this.beforeSubmit === "function") {
        this.beforeSubmit();
      }

      storeFn(this.formData).then(function (response) {
        _this.GetConfig().then(function () {
          _this.$toasted.success(response.message, _this.$toastConfig);

          _this.initialFormData = _.cloneDeep(_this.formData);
          _this.isLoading = false;
        })["catch"](function (error) {
          _this.isLoading = false;
          _this.formErrors = formUtil.handleErrors(error);
        });

        if (typeof _this.afterSubmit === "function") {
          _this.afterSubmit();
        }

        if (typeof _this.afterSubmitSuccess === "function") {
          _this.afterSubmitSuccess();
        }
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = formUtil.handleErrors(error);

        if (typeof _this.afterSubmit === "function") {
          _this.afterSubmit();
        }

        if (typeof _this.afterSubmitError === "function") {
          _this.afterSubmitError();
        }
      });
    },
    reset: function reset() {
      var _this2 = this;

      formUtil.confirmAction().then(function (result) {
        if (result.value) {
          _this2.formData = Object.assign({}, _this2.formData, _.cloneDeep(_this2.initialFormData));
        }
      });
    },
    unsavedCheck: function unsavedCheck(next) {
      formUtil.unsavedCheckAlert(this.initialFormData, this.formData, next);
    },
    fillPreRequisite: function fillPreRequisite(response) {
      var _this3 = this;

      this.preRequisite.objForEach(function (value, key) {
        _this3.preRequisite[key] = response[key] || value;
      });
      this.isLoading = false;
    },
    fillFormData: function fillFormData() {
      var _this4 = this;

      this.isLoading = true;

      if (this.formData.type && this.configs[this.formData.type]) {
        this.formData = formUtil.assignValues(this.formData, this.configs[this.formData.type]);
      }

      if (this.formData.types && Array.isArray(this.formData.types)) {
        this.formData.types.forEach(function (value) {
          _this4.formData = formUtil.assignValues(_this4.formData, _this4.configs[value]);
        });
      }

      if (typeof this.addNewRow === "function" && typeof this.addNewRowIfNone === "function") {
        this.addNewRowIfNone();
      }

      this.isLoading = false;
    },
    getInitialData: function getInitialData(callbackFn) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this5.isLoading = true;
                _context.prev = 1;
                _context.next = 4;
                return _api_config__WEBPACK_IMPORTED_MODULE_2__["getPreRequisite"](Object.keys(_this5.preRequisite).join(','));

              case 4:
                response = _context.sent;

                _this5.fillPreRequisite(response);

                if (callbackFn) {
                  _this5.$nextTick(function () {
                    callbackFn();
                  });
                }

                return _context.abrupt("return", response);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                _this5.isLoading = false;
                _this5.formErrors = formUtil.handleErrors(_context.t0);
                throw _context.t0;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 10]]);
      }))();
    }
  }),
  mounted: function mounted() {
    this.fillFormData();
    this.initialFormData = _.cloneDeep(this.formData);
  },
  beforeDestroy: function beforeDestroy() {
    delete this.formData;
    delete this.formErrors;
    delete this.preRequisite;
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    this.unsavedCheck(next);
  }
});

/***/ }),

/***/ "./resources/js/views/app/user-preference/index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/app/user-preference/index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_517baa03_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=517baa03&scoped=true& */ "./resources/js/views/app/user-preference/index.vue?vue&type=template&id=517baa03&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/app/user-preference/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_517baa03_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_517baa03_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "517baa03",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/user-preference/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/user-preference/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/app/user-preference/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user-preference/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/user-preference/index.vue?vue&type=template&id=517baa03&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/app/user-preference/index.vue?vue&type=template&id=517baa03&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_517baa03_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=517baa03&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user-preference/index.vue?vue&type=template&id=517baa03&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_517baa03_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_517baa03_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=index.js.map?id=ae6564935c78097483b5