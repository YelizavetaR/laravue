(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/app/utility/todo/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilterWrapper.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilterWrapper.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    boxed: {
      type: Boolean,
      "default": false
    },
    isLoading: {
      type: Boolean,
      "default": false
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('common', ['filters'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['vars'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('common', ['ResetFilters'])), {}, {
    submit: function submit() {
      var filterQuery = _objectSpread(_objectSpread(_objectSpread({}, this.$route.query), this.filters), {}, {
        filtered: true,
        filtered_at: moment().unix()
      });

      this.$router.push({
        path: this.$route.path,
        query: filterQuery
      })["catch"](function (err) {});
    },
    reset: function reset() {
      this.ResetFilters();

      if (this.$route.query && this.$route.query.filtered) {
        this.$router.push({
          path: this.$route.path
        });
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/utility/todo/filter.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/utility/todo/filter.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_filter_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/filter-form */ "./resources/js/mixins/filter-form.js");
//
//
//
//
//
//
//
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
  "extends": _mixins_filter_form__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/utility/todo/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/utility/todo/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/table */ "./resources/js/mixins/table.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ "./resources/js/views/app/utility/todo/filter.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FilterForm: _filter__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  "extends": _mixins_table__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      fields: [{
        key: 'title',
        label: $t('utility.todo.props.title'),
        sort: 'title',
        transformer: 'limitWords',
        tdClass: 'td-ellipsis max-width-250px'
      }, {
        key: 'date',
        label: $t('utility.todo.due_on'),
        sort: 'date',
        transformer: 'date'
      }, {
        key: 'status',
        label: $t('utility.todo.props.status'),
        sort: 'status',
        transformer: 'badgeStatusCompleted'
      }, {
        key: 'completedAt',
        label: $t('utility.todo.completed_at'),
        sort: 'completed_at',
        transformer: 'date'
      }, {
        key: 'actions',
        label: '',
        cantHide: true,
        tdClass: 'actions-dropdown-wrapper'
      }],
      filtersOptions: {
        keyword: '',
        status: '',
        startDate: '',
        endDate: ''
      },
      permissionsRequired: 'access-todo',
      routesRequired: {
        add: 'appUtilityTodoAdd'
      },
      initUrl: 'utility/todos',
      dataType: 'todo'
    };
  },
  methods: {
    toggleTodo: function toggleTodo(todo) {
      var _this = this;

      this.isLoading = true;
      this.Custom({
        url: 'utility/todos/' + todo.uuid + '/status',
        method: 'post'
      }).then(function (response) {
        _this.isLoading = false;

        _this.$nextTick(function () {
          _this.refreshTable();
        });
      })["catch"](function (error) {
        _this.isLoading = false;
        formUtil.handleErrors(error);
      });
    }
  },
  mounted: function mounted() {
    this.updatePageMeta();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilterWrapper.vue?vue&type=template&id=3b6aa020&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilterWrapper.vue?vue&type=template&id=3b6aa020& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      staticClass: "mb-element",
      attrs: {
        boxed: _vm.boxed,
        "with-loader": "",
        "is-loading": _vm.isLoading,
        "loader-color": _vm.vars.loaderColor
      }
    },
    [
      _c("close-button", {
        attrs: { title: _vm.$t("general.close") },
        on: {
          click: function($event) {
            return _vm.$emit("close")
          }
        }
      }),
      _vm._v(" "),
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
          _vm._t("default"),
          _vm._v(" "),
          _c("div", { staticClass: "form-footer mt-3" }, [
            _c(
              "div",
              { staticClass: "left-side" },
              [
                _c(
                  "base-button",
                  {
                    attrs: {
                      type: "button",
                      design: "light",
                      disabled: _vm.isLoading
                    },
                    on: {
                      click: function($event) {
                        return _vm.$emit("close")
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.$t("general.close")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "right-side" },
              [
                _c(
                  "base-button",
                  {
                    attrs: {
                      type: "button",
                      design: "light",
                      disabled: _vm.isLoading
                    },
                    on: { click: _vm.reset }
                  },
                  [_vm._v(_vm._s(_vm.$t("general.clear")))]
                ),
                _vm._v(" "),
                _c(
                  "base-button",
                  {
                    attrs: {
                      type: "submit",
                      design: "primary",
                      disabled: _vm.isLoading
                    }
                  },
                  [_vm._v(_vm._s(_vm.$t("general.filter")))]
                )
              ],
              1
            )
          ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/utility/todo/filter.vue?vue&type=template&id=c8ac3abe&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/utility/todo/filter.vue?vue&type=template&id=c8ac3abe& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "filter-wrapper",
    {
      attrs: { boxed: _vm.boxed, "is-loading": _vm.isLoading },
      on: {
        close: function($event) {
          return _vm.$emit("close")
        }
      }
    },
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-12 col-md-4 mb-4" },
          [
            _c("base-input", {
              attrs: {
                "auto-focus": "",
                label: _vm.$t("general.search_keyword"),
                type: "text",
                disabled: _vm.isLoading
              },
              model: {
                value: _vm.filters.keyword,
                callback: function($$v) {
                  _vm.$set(_vm.filters, "keyword", $$v)
                },
                expression: "filters.keyword"
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
                options: _vm.preRequisite.statuses,
                label: _vm.$t("utility.todo.props.status"),
                disabled: _vm.isLoading,
                simple: true
              },
              model: {
                value: _vm.filters.status,
                callback: function($$v) {
                  _vm.$set(_vm.filters, "status", $$v)
                },
                expression: "filters.status"
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
            _c("date-between", {
              attrs: {
                label: _vm.$t("global.between", {
                  attribute: _vm.$t("utility.todo.todo")
                }),
                start: _vm.filters.startDate,
                end: _vm.filters.endDate,
                disabled: _vm.isLoading
              },
              on: {
                "update:start": function($event) {
                  return _vm.$set(_vm.filters, "startDate", $event)
                },
                "update:end": function($event) {
                  return _vm.$set(_vm.filters, "endDate", $event)
                }
              }
            })
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/utility/todo/index.vue?vue&type=template&id=81ed288e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/utility/todo/index.vue?vue&type=template&id=81ed288e& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "entity-list-container" },
    [
      _c(
        "collapse-transition",
        { attrs: { group: true, duration: 300, tag: "div" } },
        [
          _vm.showFilters
            ? _c("filter-form", {
                key: "filters",
                attrs: {
                  boxed: true,
                  "pre-requisite": _vm.preRequisite,
                  "is-loading": _vm.isLoading
                },
                on: { close: _vm.toggleFilter }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "base-container",
            {
              key: "list",
              staticClass: "p-0",
              attrs: {
                boxed: "",
                "with-loader": "",
                "is-loading": _vm.isLoading,
                "loader-color": _vm.vars.loaderColor
              }
            },
            [
              _vm.isInitialized
                ? _c(
                    "table-wrapper",
                    {
                      attrs: {
                        meta: _vm.entities.meta,
                        filtered: _vm.isFiltered,
                        "add-button-route": "appUtilityTodoAdd",
                        "add-button-permissions": ["access-todo"],
                        "entity-title": "utility.todo.todo",
                        "entities-title": "utility.todo.todos",
                        "entity-description": "utility.todo.module_description"
                      }
                    },
                    [
                      _c("b-table", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.entities.meta.total,
                            expression: "entities.meta.total"
                          }
                        ],
                        ref: "btable",
                        attrs: {
                          items: _vm.itemsProvider,
                          fields: _vm.fields,
                          busy: _vm.isLoading,
                          hover: "",
                          striped: "",
                          stacked: "sm",
                          "per-page": _vm.entities.meta.perPage,
                          "current-page": _vm.entities.meta.currentPage,
                          filters: null
                        },
                        on: {
                          "update:busy": function($event) {
                            _vm.isLoading = $event
                          },
                          "row-dblclicked": function($event) {
                            return _vm.rowClickHandler(
                              { route: "appUtilityTodoView" },
                              $event
                            )
                          }
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "cell(date)",
                              fn: function(row) {
                                return [
                                  row.item.time
                                    ? _c("view-date", {
                                        staticClass: "mb-0",
                                        attrs: {
                                          value:
                                            row.item.date + " " + row.item.time,
                                          "with-tz": "",
                                          tag: "span"
                                        }
                                      })
                                    : _c("view-date", {
                                        staticClass: "mb-0",
                                        attrs: {
                                          value: row.item.date,
                                          tag: "span"
                                        }
                                      })
                                ]
                              }
                            },
                            {
                              key: "cell(completedAt)",
                              fn: function(row) {
                                return [
                                  _c("view-date", {
                                    staticClass: "mb-0",
                                    attrs: {
                                      value: row.item.completedAt,
                                      "with-tz": "",
                                      tag: "span"
                                    }
                                  })
                                ]
                              }
                            },
                            {
                              key: "cell(status)",
                              fn: function(row) {
                                return [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "pointer",
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation()
                                          return _vm.toggleTodo(row.item)
                                        }
                                      }
                                    },
                                    [
                                      row.item.status
                                        ? _c(
                                            "badge",
                                            {
                                              attrs: {
                                                rounded: "",
                                                type: "primary"
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "far fa-check-circle"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "utility.todo.completed"
                                                    )
                                                  )
                                              )
                                            ]
                                          )
                                        : _c(
                                            "badge",
                                            {
                                              attrs: {
                                                rounded: "",
                                                type: "dark"
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "far fa-circle"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "utility.todo.incomplete"
                                                    )
                                                  )
                                              )
                                            ]
                                          )
                                    ],
                                    1
                                  )
                                ]
                              }
                            },
                            {
                              key: "cell(actions)",
                              fn: function(row) {
                                return [
                                  _c(
                                    "base-button",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover.d500",
                                          modifiers: { hover: true, d500: true }
                                        }
                                      ],
                                      class: row.item.status
                                        ? "text-success"
                                        : "text-dark",
                                      attrs: {
                                        type: "button",
                                        size: "sm",
                                        design: "",
                                        title: _vm.$t("global.toggle", {
                                          attribute: _vm.$t("utility.todo.todo")
                                        })
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation()
                                          return _vm.toggleTodo(row.item)
                                        }
                                      }
                                    },
                                    [
                                      row.item.status
                                        ? _c("i", {
                                            staticClass: "fas fa-check-circle"
                                          })
                                        : _c("i", {
                                            staticClass: "fas fa-times-circle"
                                          })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "table-row-actions",
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "dropdown-item",
                                          attrs: {
                                            to: {
                                              name: "appUtilityTodoView",
                                              params: { uuid: row.item.uuid }
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "fas fa-arrow-circle-right"
                                          }),
                                          _vm._v(
                                            " " +
                                              _vm._s(
                                                _vm.$t("global.view", {
                                                  attribute: _vm.$t(
                                                    "utility.todo.todo"
                                                  )
                                                })
                                              )
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.hasPermission("edit-user")
                                        ? _c(
                                            "router-link",
                                            {
                                              staticClass: "dropdown-item",
                                              attrs: {
                                                to: {
                                                  name: "appUtilityTodoEdit",
                                                  params: {
                                                    uuid: row.item.uuid
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-edit"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.$t("global.edit", {
                                                      attribute: _vm.$t(
                                                        "utility.todo.todo"
                                                      )
                                                    })
                                                  )
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.hasPermission("delete-user")
                                        ? _c(
                                            "a",
                                            {
                                              staticClass: "dropdown-item",
                                              on: {
                                                click: function($event) {
                                                  $event.stopPropagation()
                                                  return _vm.deleteEntity(
                                                    row.item
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-trash"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.$t("global.delete", {
                                                      attribute: _vm.$t(
                                                        "utility.todo.todo"
                                                      )
                                                    })
                                                  )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          false,
                          498260250
                        )
                      })
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/FilterWrapper.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/FilterWrapper.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterWrapper_vue_vue_type_template_id_3b6aa020___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterWrapper.vue?vue&type=template&id=3b6aa020& */ "./resources/js/components/FilterWrapper.vue?vue&type=template&id=3b6aa020&");
/* harmony import */ var _FilterWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterWrapper.vue?vue&type=script&lang=js& */ "./resources/js/components/FilterWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilterWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterWrapper_vue_vue_type_template_id_3b6aa020___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilterWrapper_vue_vue_type_template_id_3b6aa020___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilterWrapper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilterWrapper.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/FilterWrapper.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FilterWrapper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilterWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilterWrapper.vue?vue&type=template&id=3b6aa020&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/FilterWrapper.vue?vue&type=template&id=3b6aa020& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterWrapper_vue_vue_type_template_id_3b6aa020___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FilterWrapper.vue?vue&type=template&id=3b6aa020& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilterWrapper.vue?vue&type=template&id=3b6aa020&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterWrapper_vue_vue_type_template_id_3b6aa020___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterWrapper_vue_vue_type_template_id_3b6aa020___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/filter-form.js":
/*!********************************************!*\
  !*** ./resources/js/mixins/filter-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_FilterWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/FilterWrapper */ "./resources/js/components/FilterWrapper.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FilterWrapper: _components_FilterWrapper__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    preRequisite: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    boxed: {
      type: Boolean,
      "default": false
    },
    isLoading: {
      type: Boolean,
      "default": false
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('common', ['filters']))
});

/***/ }),

/***/ "./resources/js/views/app/utility/todo/filter.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/app/utility/todo/filter.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_vue_vue_type_template_id_c8ac3abe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.vue?vue&type=template&id=c8ac3abe& */ "./resources/js/views/app/utility/todo/filter.vue?vue&type=template&id=c8ac3abe&");
/* harmony import */ var _filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.vue?vue&type=script&lang=js& */ "./resources/js/views/app/utility/todo/filter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _filter_vue_vue_type_template_id_c8ac3abe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _filter_vue_vue_type_template_id_c8ac3abe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/utility/todo/filter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/utility/todo/filter.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/app/utility/todo/filter.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./filter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/utility/todo/filter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/utility/todo/filter.vue?vue&type=template&id=c8ac3abe&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/app/utility/todo/filter.vue?vue&type=template&id=c8ac3abe& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_template_id_c8ac3abe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./filter.vue?vue&type=template&id=c8ac3abe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/utility/todo/filter.vue?vue&type=template&id=c8ac3abe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_template_id_c8ac3abe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_template_id_c8ac3abe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/app/utility/todo/index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/app/utility/todo/index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_81ed288e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=81ed288e& */ "./resources/js/views/app/utility/todo/index.vue?vue&type=template&id=81ed288e&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/app/utility/todo/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_81ed288e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_81ed288e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/utility/todo/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/utility/todo/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/app/utility/todo/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/utility/todo/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/utility/todo/index.vue?vue&type=template&id=81ed288e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/app/utility/todo/index.vue?vue&type=template&id=81ed288e& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_81ed288e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=81ed288e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/utility/todo/index.vue?vue&type=template&id=81ed288e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_81ed288e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_81ed288e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=index.js.map?id=ecc7a412d2f297430f5e