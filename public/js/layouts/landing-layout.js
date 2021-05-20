(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/layouts/landing-layout"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/landing-layout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/landing-layout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/app-components */ "./resources/js/app-components.js");
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/landing-layout.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/landing-layout.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".landing-layout {\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/landing-layout.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/landing-layout.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./landing-layout.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/landing-layout.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/landing-layout.vue?vue&type=template&id=3e12d4a5&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/landing-layout.vue?vue&type=template&id=3e12d4a5& ***!
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
    { staticClass: "landing-layout" },
    [_c("transition-page", [_c("router-view")], 1)],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/core/filters/momentz.js":
/*!**********************************************!*\
  !*** ./resources/js/core/filters/momentz.js ***!
  \**********************************************/
/*! exports provided: momentDate, momentTime, momentDateTime, momentCalendar, momentTimeTz, momentDateTimeTz, momentCalendarTz, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentDate", function() { return momentDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentTime", function() { return momentTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentDateTime", function() { return momentDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentCalendar", function() { return momentCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentTimeTz", function() { return momentTimeTz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentDateTimeTz", function() { return momentDateTimeTz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentCalendarTz", function() { return momentCalendarTz; });
/* harmony import */ var _js_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/store */ "./resources/js/store/index.js");

var configs = _js_store__WEBPACK_IMPORTED_MODULE_0__["default"].getters['config/configs'];
var vars = _js_store__WEBPACK_IMPORTED_MODULE_0__["default"].getters['config/vars'];

var getActiveConfigs = function getActiveConfigs() {
  return {
    timezone: configs.system.timezone,
    defaultDateFormat: vars.defaultDateFormat,
    defaultDateTimeFormat: vars.defaultDateTimeFormat,
    serverDateFormat: vars.serverDateFormat,
    serverDateTimeFormat: vars.serverDateTimeFormat,
    calendarLocale: {
      // lastDay: '[Yesterday]',
      sameDay: vars.defaultTimeFormat,
      lastWeek: vars.defaultDateFormat,
      sameElse: vars.defaultDateFormat
    }
  };
};

var momentDate = function momentDate(value, formatOption) {
  var activeConfigs = getActiveConfigs();
  var momentObj = moment(value, activeConfigs.serverDateFormat);

  if (!value) {
    return 'INVALID DATE STRING';
  }

  if (Array.isArray(value)) {
    momentObj = moment(value[0], value[1]);
  }

  return momentObj.format(formatOption || activeConfigs.defaultDateFormat);
};
var momentTime = function momentTime(value, formatOption) {
  var activeConfigs = getActiveConfigs();
  var momentObj = moment(value, activeConfigs.serverTimeFormat);

  if (!value) {
    return 'INVALID TIME STRING';
  }

  if (Array.isArray(value)) {
    momentObj = moment(value[0], value[1]);
  }

  return momentObj.format(formatOption || activeConfigs.defaultTimeFormat);
};
var momentDateTime = function momentDateTime(value, formatOption) {
  var activeConfigs = getActiveConfigs();
  var momentObj = moment(value, activeConfigs.serverDateTimeFormat);

  if (!value) {
    return 'INVALID DATE TIME STRING';
  }

  if (Array.isArray(value)) {
    momentObj = moment(value[0], value[1]);
  }

  return momentObj.format(formatOption || activeConfigs.defaultDateTimeFormat);
};
var momentCalendar = function momentCalendar(value, calendarOption) {
  var activeConfigs = getActiveConfigs();
  var momentObj = moment(value, activeConfigs.serverDateTimeFormat);

  if (!value) {
    return 'INVALID DATE TIME STRING';
  }

  if (Array.isArray(value)) {
    momentObj = moment(value[0], value[1]);
  }

  return momentObj.calendar(calendarOption ? calendarOption : activeConfigs.calendarLocale);
};
var momentTimeTz = function momentTimeTz(value, formatOption, timezoneOption) {
  var activeConfigs = getActiveConfigs();
  var momentObj = moment.utc("".concat(moment().format(activeConfigs.serverDateFormat), " ").concat(value), activeConfigs.serverTimeFormat);

  if (!value) {
    return 'INVALID TIME STRING';
  }

  if (Array.isArray(value)) {
    momentObj = moment.utc(value[0], value[1]);
  }

  return momentObj.tz(timezoneOption || activeConfigs.timezone).format(formatOption || activeConfigs.defaultTimeFormat);
};
var momentDateTimeTz = function momentDateTimeTz(value, formatOption, timezoneOption) {
  var activeConfigs = getActiveConfigs();
  var momentObj = moment.utc(value, activeConfigs.serverDateTimeFormat);

  if (!value) {
    return 'INVALID DATE TIME STRING';
  }

  if (Array.isArray(value)) {
    momentObj = moment.utc(value[0], value[1]);
  }

  return momentObj.tz(timezoneOption || activeConfigs.timezone).format(formatOption || activeConfigs.defaultDateTimeFormat);
};
var momentCalendarTz = function momentCalendarTz(value) {
  var calendarOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var timezoneOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var activeConfigs = getActiveConfigs();
  var momentObj = moment.utc(value, activeConfigs.serverDateTimeFormat);

  if (!value) {
    return 'INVALID DATE TIME STRING';
  }

  if (Array.isArray(value)) {
    momentObj = moment.utc(value[0], value[1]);
  }

  var result = momentObj.tz(timezoneOption || activeConfigs.timezone);
  result = result.calendar(calendarOption ? calendarOption : activeConfigs.calendarLocale);
  return result;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  momentDate: momentDate,
  momentTime: momentTime,
  momentDateTime: momentDateTime,
  momentCalendar: momentCalendar,
  momentTimeTz: momentTimeTz,
  momentDateTimeTz: momentDateTimeTz,
  momentCalendarTz: momentCalendarTz
});

/***/ }),

/***/ "./resources/js/event-bus.js":
/*!***********************************!*\
  !*** ./resources/js/event-bus.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var EventBus = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["default"] = (EventBus);

/***/ }),

/***/ "./resources/js/views/layouts/landing-layout.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/layouts/landing-layout.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _landing_layout_vue_vue_type_template_id_3e12d4a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-layout.vue?vue&type=template&id=3e12d4a5& */ "./resources/js/views/layouts/landing-layout.vue?vue&type=template&id=3e12d4a5&");
/* harmony import */ var _landing_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-layout.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/landing-layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _landing_layout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-layout.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/layouts/landing-layout.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _landing_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _landing_layout_vue_vue_type_template_id_3e12d4a5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _landing_layout_vue_vue_type_template_id_3e12d4a5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/landing-layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/landing-layout.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/layouts/landing-layout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./landing-layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/landing-layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/landing-layout.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/layouts/landing-layout.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_layout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./landing-layout.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/landing-layout.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_layout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_layout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_layout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_layout_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/layouts/landing-layout.vue?vue&type=template&id=3e12d4a5&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/layouts/landing-layout.vue?vue&type=template&id=3e12d4a5& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_layout_vue_vue_type_template_id_3e12d4a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./landing-layout.vue?vue&type=template&id=3e12d4a5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/landing-layout.vue?vue&type=template&id=3e12d4a5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_layout_vue_vue_type_template_id_3e12d4a5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_layout_vue_vue_type_template_id_3e12d4a5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=landing-layout.js.map?id=a476406a5a4751792c07