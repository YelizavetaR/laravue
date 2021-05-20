(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/app/config/locale/add~js/app/config/role/add~js/app/option/add~js/app/option/edit~js/app/site/pag~e8723d1e"],{

/***/ "./resources/js/core/utils/templater.js":
/*!**********************************************!*\
  !*** ./resources/js/core/utils/templater.js ***!
  \**********************************************/
/*! exports provided: templateStrings, build */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateStrings", function() { return templateStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "build", function() { return build; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

var templateStrings = {
  'DAY_OF_MONTH': {
    code: '%DAY_OF_MONTH%',
    example: 'Ex. 1-31',
    outputFormat: 'moment',
    output: 'DD'
  },
  'DAY_OF_YEAR': {
    code: '%DAY_OF_YEAR%',
    example: 'Ex. 1-365',
    outputFormat: 'moment',
    output: 'DDDD'
  },
  'YEAR': {
    code: '%YEAR%',
    example: 'Ex. 2020',
    outputFormat: 'moment',
    output: 'YYYY'
  },
  'YEAR_SHORT': {
    code: '%YEAR_SHORT%',
    example: 'Ex. 20',
    outputFormat: 'moment',
    output: 'YY'
  },
  'MONTH': {
    code: '%MONTH%',
    example: 'Ex. JANUARY',
    outputFormat: 'moment',
    output: 'MMMM'
  },
  'MONTH_SHORT': {
    code: '%MONTH_SHORT%',
    example: 'Ex. JAN',
    outputFormat: 'moment',
    output: 'MMM'
  },
  'MONTH_NUMBER': {
    code: '%MONTH_NUMBER%',
    example: 'Ex. 1 - 12',
    outputFormat: 'moment',
    output: 'MM'
  },
  'DAY': {
    code: '%DAY%',
    example: 'Ex. MONDAY',
    outputFormat: 'moment',
    output: 'dddd'
  },
  'DAY_SHORT': {
    code: '%DAY_SHORT%',
    example: 'Ex. MON',
    outputFormat: 'moment',
    output: 'ddd'
  },
  'DAY_NUMBER': {
    code: '%DAY_NUMBER%',
    example: 'Ex. 1 - 7',
    outputFormat: 'moment',
    output: 'E'
  },
  'DATE': {
    code: '%DATE%',
    example: 'Ex. 31-08-1987',
    outputFormat: 'moment',
    output: 'YYYY'
  },
  'TIME': {
    code: '%DATE%',
    example: 'Ex. 23:59',
    outputFormat: 'moment',
    output: 'mm'
  }
};
var allTagRegex = /%(.*?)%/g;
function build(content) {
  var placeholders = content.match(allTagRegex);
  templateStrings.objForEach(function (placeholder, key) {
    var regex = new RegExp(placeholder.code, 'g');

    if (placeholder.outputFormat === 'moment') {
      var toReplaceWith = moment__WEBPACK_IMPORTED_MODULE_0___default()().format(placeholder.output);
      content = content.replace(regex, toReplaceWith);
    }
  });
  return content;
}

/***/ }),

/***/ "./resources/js/mixins/form.js":
/*!*************************************!*\
  !*** ./resources/js/mixins/form.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./resources/js/mixins/header.js");
/* harmony import */ var _components_FileUploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/FileUploader */ "./resources/js/components/FileUploader.vue");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils */ "./resources/js/core/utils/index.js");
/* harmony import */ var _core_utils_templater__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/templater */ "./resources/js/core/utils/templater.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
/* harmony import */ var _core_filters_momentz__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/filters/momentz */ "./resources/js/core/filters/momentz.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FileUploader: _components_FileUploader__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    editData: {
      type: Object
    },
    isFetching: {
      type: Boolean,
      "default": false
    },
    duplicate: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      uuid: null,
      subUuid: null,
      formData: {},
      formErrors: {},
      formLabels: {},
      customFilters: {},
      initianLength: 0,
      initialFormData: null,
      emptyFormData: null,
      preRequisite: {},
      keepAdding: false,
      keepAddingOption: 'clear_all',
      keepAddingSelectedFields: null,
      keepAddingFields: [],
      isLoading: true,
      getInitialDataCalled: false,
      doInitBeforeGetInitialData: false,
      initUrl: '',
      initSubUrl: null,
      dateTimeFields: null,
      dataType: null,
      uploaderConfig: {
        module: '',
        token: '',
        allowedExtensions: '',
        maxNoOfFiles: 5,
        uuid: uuid()
      },
      headerButtons: null
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])('config', ['configs', 'vars'])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])('user', ['hasPermission'])), {}, {
    showKeepAdding: function showKeepAdding() {
      return !this.editData || this.duplicate;
    },
    codePrefix: function codePrefix() {
      return this.formData.codePrefix;
    },
    lastCodeObj: function lastCodeObj() {
      var _this = this;

      return this.preRequisite.codes.find(function (v) {
        return v.codePrefix === _this.formData.codePrefix;
      });
    }
  }),
  watch: {
    editData: function editData(value) {
      var _this2 = this;

      if (value) {
        var editDataValue = value;

        if (this.dateTimeFields && Array.isArray(this.dateTimeFields)) {
          this.dateTimeFields.forEach(function (key) {
            if (editDataValue[key]) {
              editDataValue[key] = _core_filters_momentz__WEBPACK_IMPORTED_MODULE_7__["momentDateTimeTz"](editDataValue[key], _this2.vars.serverDateTimeFormat);
            }
          });
        }

        if (this.timeFields && Array.isArray(this.timeFields)) {
          this.timeFields.forEach(function (key) {
            if (Array.isArray(key)) {
              if (editDataValue[key[0]]) {
                editDataValue[key[0]] = _core_filters_momentz__WEBPACK_IMPORTED_MODULE_7__["momentTimeTz"]([editDataValue[key[0]], editDataValue[key[1]]], _this2.vars.serverTimeFormat, null);
              }
            } else {
              if (editDataValue[key]) {
                editDataValue[key] = _core_filters_momentz__WEBPACK_IMPORTED_MODULE_7__["momentTimeTz"](editDataValue[key], _this2.vars.serverTimeFormat, null);
              }
            }
          });
        }

        this.formData = Object.assign({}, this.formData, _.cloneDeep(editDataValue));
        this.uuid = this.formData.uuid;
        this.uploaderConfig.token = this.formData.token;

        if (typeof this.addNewRow === "function" && typeof this.addNewRowIfNone === "function") {
          this.addNewRowIfNone();
        }

        this.initialFormData = _.cloneDeep(this.formData);

        if (typeof this.afterEditData === "function") {
          this.afterEditData();
        }

        if (this.duplicate) {
          this.computeCodeNumber(this.formData.codePrefix);
        }
      }
    },
    codePrefix: function codePrefix() {
      this.computeCodeNumber();
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])('common', ['Init', 'InitSub', 'Get', 'Store', 'Update', 'GetPreRequisite', 'Destroy', 'Custom'])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])('config', ['SetUiConfig', 'SetConfig'])), {}, {
    computeCodeNumber: function computeCodeNumber() {
      if (this.preRequisite.codes && this.showKeepAdding) {
        var codeObj = this.lastCodeObj;
        var codeDigit = this.configs[this.dataType].codeDigit;

        if (this.lastCodeObj) {
          this.formData.codeNumber = this.numberPadding(this.lastCodeObj.codeNumber + 1, codeDigit);
        } else {
          this.formData.codeNumber = this.numberPadding(1, codeDigit);
        }
      }
    },
    numberPadding: function numberPadding() {
      var exNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var codeDigit = arguments.length > 1 ? arguments[1] : undefined;
      return Object(_core_utils__WEBPACK_IMPORTED_MODULE_3__["numberPadding"])(exNumber, codeDigit || this.configs[this.dataType].codeDigit);
    },
    doNothing: function doNothing() {},
    submit: function submit() {
      var _this3 = this;

      if (formUtil.isUnchanged(this.initialFormData, this.formData)) {
        this.$toasted.info(this.$t('general.nothing_changed'), this.$toastConfig.info);
        return false;
      }

      this.doInit();
      this.doInitSub();
      this.isLoading = true;

      if (this.duplicate) {
        this.formData.uuid = null;
      }

      var saveData = this.formData.uuid ? this.Update : this.Store;
      saveData(this.formData).then(function (response) {
        _this3.$toasted.success(response.message, _this3.$toastConfig);

        if (typeof _this3.afterSubmit === "function") {
          _this3.afterSubmit(response);
        } else {
          if (_this3.keepAdding) {
            _this3.uploaderConfig.uuid = uuid();
            _this3.formData = formUtil.clearFormConditionally(_this3.formData, _this3.initialFormData, _this3.keepAddingOption, _this3.keepAddingSelectedFields);

            if (_this3.getInitialDataCalled) {
              _this3.getInitialData();
            }
          } else {
            _this3.initialFormData = _.cloneDeep(_this3.formData);

            _this3.$router.back();
          }
        }

        _this3.isLoading = false;
      })["catch"](function (error) {
        _this3.isLoading = false;
        _this3.formErrors = formUtil.handleErrors(error);
      });
    },
    reset: function reset() {
      var _this4 = this;

      formUtil.confirmAction().then(function (result) {
        if (result.value) {
          _this4.formData = Object.assign({}, _this4.formData, _.cloneDeep(_this4.initialFormData));
        }
      });
    },
    unsavedCheck: function unsavedCheck(next) {
      formUtil.unsavedCheckAlert(this.initialFormData, this.formData, next);
    },
    fillPreRequisite: function fillPreRequisite(response) {
      var _this5 = this;

      this.preRequisite.objForEach(function (value, key) {
        _this5.preRequisite[key] = response[key] || value;
      });
    },
    setUploaderConfig: function setUploaderConfig(uploadConfig) {
      var _this6 = this;

      this.uploaderConfig.objForEach(function (value, key) {
        _this6.uploaderConfig[key] = uploadConfig[key] || value;
      });
    },
    getInitialData: function getInitialData(callbackFn) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this7.isLoading = true;
                _this7.getInitialDataCalled = true;
                _context.prev = 2;

                if (_this7.doInitBeforeGetInitialData) {
                  _this7.doInit();
                }

                _context.next = 6;
                return _this7.GetPreRequisite(_this7.customFilters);

              case 6:
                response = _context.sent;

                if (_this7.doInitBeforeGetInitialData) {
                  _this7.doInitSub();
                }

                _this7.fillPreRequisite(response);

                if (response['uploadConfig']) {
                  _this7.setUploaderConfig(response['uploadConfig']);
                }

                if (typeof _this7.addNewRow === "function" && typeof _this7.addNewRowIfNone === "function") {
                  _this7.$nextTick(function () {
                    _this7.addNewRowIfNone();
                  });
                }

                if (_this7.configs[_this7.dataType]) {
                  _this7.$nextTick(function () {
                    _this7.formData.codePrefix = _core_utils_templater__WEBPACK_IMPORTED_MODULE_4__["build"](_this7.configs[_this7.dataType].codePrefix);
                  });
                }

                if (_this7.afterGetInitialData && typeof _this7.afterGetInitialData === "function") {
                  _this7.afterGetInitialData(response);
                }

                if (callbackFn) {
                  _this7.$nextTick(function () {
                    callbackFn(response);
                  });
                }

                _this7.isLoading = false;
                return _context.abrupt("return", response);

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](2);
                _this7.isLoading = false;
                formUtil.handleErrors(_context.t0);
                throw _context.t0;

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 18]]);
      }))();
    },
    getEntityData: function getEntityData() {
      var _this8 = this;

      this.isLoading = true;
      this.Get(this.formData.uuid).then(function (res) {
        _this8.formData.objForEach(function (value, key) {
          _this8.formData[key] = res[key] || null;
        });

        _this8.initialFormData = _.cloneDeep(_this8.formData);
        _this8.isLoading = false;
      })["catch"](function (error) {
        _this8.isLoading = false;
        formUtil.handleErrors(error);
      });
    },
    addTag: function addTag(newTag) {
      var tag = {
        name: newTag,
        slug: formUtil.generateSlug(newTag)
      };
      this.preRequisite.tags.push(tag);
      this.formData.tags.push(tag);
    },
    newModalClose: function newModalClose(storedData) {
      var _this9 = this;

      this.doInit();
      this.doInitSub();

      if (storedData) {
        var processStoredData = function processStoredData() {
          var putFormData = function putFormData(val) {
            if (storedData.push) {
              _this9.formData[storedData.dataTypeArr].push(val);
            } else {
              _this9.formData[storedData.dataType] = val;
            }
          };

          _this9.isLoading = true;

          if (storedData.dataType) {
            if (storedData.dontMatch) {
              putFormData(storedData);
            } else if (storedData.dataTypeArr && storedData.propertyToMatch) {
              putFormData(_this9.preRequisite[storedData.dataTypeArr].find(function (v) {
                return v[storedData.propertyToMatch] === storedData[storedData.propertyToMatch];
              }) || null);
            }
          }

          _this9.isLoading = false;
        };

        if (this.getInitialDataCalled) {
          this.getInitialData(processStoredData);
        } else {
          processStoredData();
        }
      }
    },
    getHeaderOptions: function getHeaderOptions() {
      var buttons = [];

      if (this.headerButtons) {
        buttons = buttons.concat(this.headerButtons);
      }

      var links = [];
      links.push(_header__WEBPACK_IMPORTED_MODULE_1__["printOption"]());
      links.push(_header__WEBPACK_IMPORTED_MODULE_1__["exportPdfOption"]());
      return {
        hideLinks: this.hideHeaderLinks || false,
        buttons: buttons,
        links: links,
        title: this.pageTitle || '',
        subTitle: this.pageTitle ? this.subTitle || '' : ''
      };
    },
    getKeyBindingOptions: function getKeyBindingOptions() {
      var opts = _objectSpread({}, _header__WEBPACK_IMPORTED_MODULE_1__["commonKeyBindings"]);

      return opts;
    },
    applyPageHeader: function applyPageHeader() {
      var pageHeaderOptions = Object.assign({}, this.getHeaderOptions(), this.header || {});
      var keyBindings = Object.assign({}, this.getKeyBindingOptions(), this.keyBindings || {});
      this.SetUiConfig({
        pageHeader: pageHeaderOptions
      });
      this.SetConfig({
        keyBindings: keyBindings
      });
    },
    "export": function _export(options) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this10.isLoading = true;

                _this10.$printComponent('printable', {
                  title: "Printing ".concat(_this10.dataTitle || '')
                });

                _this10.isLoading = false;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    doInitSub: function doInitSub() {
      if (this.initSubUrl) {
        this.InitSub({
          url: (this.subUuid ? this.subUuid + '/' : '') + this.initSubUrl
        });
      }
    },
    doInit: function doInit() {
      this.Init({
        url: this.initUrl
      });
    }
  }),
  mounted: function mounted() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_6__["default"].$off('ROUTE_LEAVING', this.unsavedCheck);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_6__["default"].$on('ROUTE_LEAVING', this.unsavedCheck);

    if (this.$route.params.subUuid) {
      this.subUuid = this.$route.params.subUuid;
    }

    this.doInit();
    this.doInitSub();
    this.uploaderConfig.token = this.formData.token;
    this.initialFormData = _.cloneDeep(this.formData);
  },
  created: function created() {
    var _this11 = this;

    if (this.formLabels) {
      this.formLabels.objForEach(function (value, key) {
        _this11.keepAddingFields.push({
          uuid: key,
          value: value
        });
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    delete this.formData;
    delete this.formErrors;
    delete this.formLabels;
    delete this.preRequisite;
    delete this.keepAddingFields;
  },
  destroyed: function destroyed() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_6__["default"].$off('ROUTE_LEAVING', this.unsavedCheck);
  }
});

/***/ })

}]);
//# sourceMappingURL=pag~e8723d1e.js.map?id=788dae91a7115432052c