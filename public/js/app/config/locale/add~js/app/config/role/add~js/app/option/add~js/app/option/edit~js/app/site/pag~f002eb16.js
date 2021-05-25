(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/app/config/locale/add~js/app/config/role/add~js/app/option/add~js/app/option/edit~js/app/site/pag~f002eb16"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileUploader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileUploader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_uploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api/uploader */ "./resources/js/api/uploader.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
/* harmony import */ var _js_vars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @js/vars */ "./resources/js/vars.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





 // file.status   v-if="fileObj.status === 'uploading'"
// 0 = uploaded false
// 1 = uploaded
// 2 = uploading
// 3 = existing
// 4 = removed
//
//
// handle error in ui
// remove File
// handle existing uploaded files
// check uuid

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "file-uploader",
  components: {},
  props: {
    data: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    additionalFormData: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    requestIdentifier: {
      type: String,
      "default": Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])()
    },
    url: {
      type: String,
      "default": '/uploads'
    },
    heading: {
      type: String,
      "default": null
    },
    actionLabel: {
      type: String,
      "default": 'global.choose'
    },
    nameLabel: {
      type: String,
      "default": 'upload.file'
    },
    namesLabel: {
      type: String,
      "default": 'upload.files'
    },
    buttonWrapperClasses: {
      type: String,
      "default": 'justify-content-start'
    },
    headingClasses: {
      type: String,
      "default": 'mb-0'
    },
    buttonClasses: {
      type: String,
      "default": ''
    },
    buttonIcon: {
      type: String,
      "default": 'fas fa-upload'
    },
    buttonDesign: {
      type: String,
      "default": 'primary'
    },
    options: {
      type: Object,
      required: true
    },
    autoUpload: {
      type: Boolean,
      "default": true
    },
    multiple: {
      type: Boolean,
      "default": true
    },
    hideButtonLabel: {
      type: Boolean,
      "default": false
    },
    hideFileList: {
      type: Boolean,
      "default": false
    },
    hideResetButton: {
      type: Boolean,
      "default": false
    },
    hideAfterUpload: {
      type: Boolean,
      "default": false
    },
    showSelectedFilesCount: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      isLoading: false,
      fileRemoved: false,
      actionLabelUpdated: '',
      files: [],
      uploadedFiles: [],
      existingFiles: [],
      icons: _js_vars__WEBPACK_IMPORTED_MODULE_5__["fileIcons"],
      mimeTypes: _js_vars__WEBPACK_IMPORTED_MODULE_5__["fileMimeTypes"]
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('config', ['configs', 'vars'])), {}, {
    computedActionLabel: function computedActionLabel() {
      return this.existingFile ? 'global.change' : this.actionLabel;
    }
  }),
  watch: {
    data: function data(v) {
      this.existingFiles = v.map(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          status: null
        });
      });
    },
    'options.uuid': {
      deep: true,
      handler: function handler(val, oldVal) {
        if (val && val !== oldVal) {
          this.reset();
        }
      }
    }
  },
  methods: {
    getFileIcon: function getFileIcon(type) {
      return this.icons[type] || 'fa-file-alt';
    },
    getFileNameIcon: function getFileNameIcon(type) {
      return this.icons[type] || 'fa-file-alt';
    },
    generateFilesList: function generateFilesList(e) {
      this.isLoading = true;
      var allowedExtensions = null;
      var selectedFiles = this.$refs.filesInput.files;

      if (this.options.allowedExtensions) {
        allowedExtensions = new RegExp('(\.' + this.options.allowedExtensions.join('|\.') + ')$');
      }

      if (this.options.maxNoOfFiles && selectedFiles.length + this.existingFiles.length > this.options.maxNoOfFiles) {
        this.$toasted.error(this.$t('upload.max_file_limit_crossed', {
          number: this.options.maxNoOfFiles
        }), this.$toastConfig.error);
        return;
      }

      for (var i = 0; i < selectedFiles.length; i++) {
        if (allowedExtensions && !allowedExtensions.test(selectedFiles[i].name)) {
          this.isLoading = false;
          this.$toasted.error(this.$t('global.file_not_supported', {
            attribute: selectedFiles[i].name.split('.').pop()
          }), this.$toastConfig.error);
        } else if (selectedFiles[i].size > this.configs.system.postMaxSize) {
          this.isLoading = false;
          this.$toasted.error(this.$t('global.file_too_large', {
            attribute: selectedFiles[i].name
          }), this.$toastConfig.error);
        } else {
          this.files.push({
            uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
            file: selectedFiles[i],
            status: 'waiting',
            progress: 0
          });
        }
      }

      this.isLoading = false;
      this.$emit('selected', this.files.length);

      if (this.autoUpload) {
        this.startUploading();
      }
    },
    startUploading: function startUploading() {
      var _this = this;

      var filesToUpload = this.files.filter(function (fileObj) {
        return fileObj.status === 'waiting';
      });

      if (filesToUpload.length) {
        var onUploadProgressArr = [];
        var CancelToken = axios__WEBPACK_IMPORTED_MODULE_0___default.a.CancelToken;
        this.$emit('uploading', this.files.length);

        var _loop = function _loop(i) {
          var uploadObj = _this.files[i];

          onUploadProgressArr[i] = function (progressEvent) {
            uploadObj.progress = Math.round(progressEvent.loaded * 100 / progressEvent.total);
          };

          if (uploadObj.status === 'waiting') {
            var formData = new FormData();
            formData.append('file', uploadObj.file);
            formData.append('mime', uploadObj.file.type);
            formData.append('token', _this.options.token);
            formData.append('module', _this.options.module);
            formData.append('request_uuid', _this.requestIdentifier);
            formData.append('first_attachment', i === 0);
            formData.append('last_attachment', i === _this.files.length - 1);

            _this.additionalFormData.objForEach(function (value, key) {
              if (value) {
                if (_.isObject(value)) {
                  formData.append(key.snakeCase(), JSON.stringify(value));
                } else {
                  formData.append(key.snakeCase(), value);
                }
              }
            });

            uploadObj.status = 'uploading';
            var cancelToken = new CancelToken(function (c) {
              uploadObj.cancel = c;
            });
            _api_uploader__WEBPACK_IMPORTED_MODULE_1__["uploadFile"]({
              url: _this.url,
              data: formData
            }, onUploadProgressArr[i], cancelToken).then(function (response) {
              if (response.upload) {
                _this.uploadedFiles.push(response.upload);
              } else if (response.attachments) {
                _this.uploadedFiles.push(response.attachments);
              }

              uploadObj.uuid = response.upload ? response.upload.uuid : response.uuid;
              uploadObj.status = 'justUploaded';
              delete uploadObj.cancel;
              setTimeout(function () {
                uploadObj.status = 'uploaded';

                if (_this.hideAfterUpload) {
                  delete _this.files.splice(_this.files.findIndex(function (f) {
                    return f.uuid === uploadObj.uuid;
                  }), 1);
                }
              }, 2000);

              _this.$emit('updated', response);

              _this.checkUploadStatus(response);
            })["catch"](function (thrown) {
              _this.$emit('error', thrown);

              if (thrown.response && thrown.response.data) {
                var data = thrown.response.data || {};
                var errors = data.errors ? formUtil.assignErrors(data.errors) : {};
                uploadObj.error = errors.message;

                _this.$toasted.error(errors.message, _this.$toastConfig.error);

                uploadObj.status = 'error';
                setTimeout(function () {
                  delete _this.files.splice(_this.files.findIndex(function (f) {
                    return f.uuid === uploadObj.uuid;
                  }), 1);
                }, 3000);

                _this.$emit('updated', thrown);

                _this.checkUploadStatus();
              } else {
                uploadObj.status = 'cancelled';
                setTimeout(function () {
                  delete _this.files.splice(_this.files.findIndex(function (f) {
                    return f.uuid === uploadObj.uuid;
                  }), 1);
                }, 3000);
              }
            });
          }
        };

        for (var i = 0; i < this.files.length; i++) {
          _loop(i);
        }
      }
    },
    removeFile: function removeFile(fileObj, index) {
      var _this2 = this;

      var existing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      formUtil.confirmAction().then(function (result) {
        if (result.value) {
          _this2.isLoading = true;
          _api_uploader__WEBPACK_IMPORTED_MODULE_1__["removeFile"]({
            url: _this2.url + '/' + fileObj.uuid,
            data: {
              token: _this2.options.token,
              module: _this2.options.module
            }
          }).then(function (response) {
            fileObj.status = 'removed';
            setTimeout(function () {
              if (existing) {
                delete _this2.existingFiles.splice(_this2.existingFiles.findIndex(function (f) {
                  return f.uuid === fileObj.uuid;
                }), 1);
              } else {
                delete _this2.files.splice(_this2.files.findIndex(function (f) {
                  return f.uuid === fileObj.uuid;
                }), 1);
              }
            }, 3000);
            _this2.isLoading = false;

            _this2.$toasted.success(response.message, _this2.$toastConfig.success);

            _this2.$emit('selected', _this2.files.length);

            _this2.$emit('updated', response);

            _this2.checkUploadStatus();
          })["catch"](function (thrown) {
            var data = thrown.response.data || {};
            var errors = data.errors ? formUtil.assignErrors(data.errors) : {};

            _this2.$toasted.error(errors.message, _this2.$toastConfig.error);

            fileObj.error = errors.message;
            fileObj.status = 'removeError';
          });
        }
      });
    },
    checkUploadStatus: function checkUploadStatus(response) {
      var status = true;

      for (var i = 0; i < this.files.length; i++) {
        if (this.files[i].status !== 'justUploaded' && this.files[i].status !== 'uploaded') {
          status = false;
        }
      }

      if (status) {
        this.$emit('uploaded', this.uploadedFiles);
      } else {
        this.$emit('error');
      }
    },
    reset: function reset() {
      this.isLoading = false;
      this.fileRemoved = false;
      this.actionLabelUpdated = '';
      this.files = [];
      this.uploadedFiles = [];
      var input = this.$refs.filesInput;
      input.type = 'text';
      input.type = 'file';
      this.$emit('selected', this.files.length);
    },
    startUpload: function startUpload() {
      if (this.files.length) {
        this.startUploading();
      } else {
        this.$emit('noNeed');
      }
    }
  },
  mounted: function mounted() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$off('START_UPLOAD', this.startUpload);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$on('START_UPLOAD', this.startUpload);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$off('RESET_UPLOAD', this.reset);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$on('RESET_UPLOAD', this.reset);
    this.existingFiles = this.data.map(function (f) {
      return _objectSpread(_objectSpread({}, f), {}, {
        status: null
      });
    });
  },
  filters: {
    decimal: function decimal(value) {
      var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      return Number(value).toFixed(num);
    }
  },
  destroyed: function destroyed() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$off('START_UPLOAD', this.startUpload);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$off('RESET_UPLOAD', this.reset);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileUploader.vue?vue&type=style&index=0&id=4ce61af5&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileUploader.vue?vue&type=style&index=0&id=4ce61af5&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, ".file-uploader .files-list-wrapper[data-v-4ce61af5] {\n  margin-top: 1rem;\n}\n.file-uploader .files-list-wrapper .files-list[data-v-4ce61af5] {\n  list-style: none;\n  padding: 0;\n}\n.file-uploader .files-list-wrapper .files-list > .file-details-row[data-v-4ce61af5] {\n  display: flex;\n  transition: all 0.2s ease-in-out;\n  background-color: #f8f9fd;\n  overflow: hidden;\n}\n.file-uploader .files-list-wrapper .files-list > .file-details-row[data-v-4ce61af5]:nth-child(even) {\n  background-color: #e9ecf1;\n}\n.file-uploader .files-list-wrapper .files-list > .file-details-row[data-v-4ce61af5]:first-child {\n  border-radius: 0.25rem 0.25rem 0 0;\n}\n.file-uploader .files-list-wrapper .files-list > .file-details-row[data-v-4ce61af5]:last-child {\n  border-radius: 0 0 0.25rem 0.25rem;\n}\n.file-uploader .files-list-wrapper .files-list > .file-details-row > *[data-v-4ce61af5] {\n  padding: 0.4rem 0.6rem;\n}\n.file-uploader .files-list-wrapper .files-list > .file-details-row .file-icon span[data-v-4ce61af5] {\n  font-size: 2rem;\n  color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 3rem;\n  height: 3rem;\n}\n.file-uploader .files-list-wrapper .files-list > .file-details-row .file-details[data-v-4ce61af5] {\n  flex-grow: 1;\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.05);\n}\n.file-uploader .files-list-wrapper .files-list > .file-details-row .file-details h6[data-v-4ce61af5] {\n  font-weight: 600;\n  margin-bottom: 0.2rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.file-uploader .files-list-wrapper .files-list > .file-details-row .file-details p[data-v-4ce61af5] {\n  font-size: 0.75rem;\n  color: rgba(0, 0, 0, 0.4);\n  margin: 0;\n}\n.file-uploader .files-list-wrapper .files-list > .file-details-row .status-wrapper[data-v-4ce61af5], .file-uploader .files-list-wrapper .files-list > .file-details-row .status-wrapper > *[data-v-4ce61af5] {\n  display: flex;\n}\n.file-uploader .files-list-wrapper .files-list > .file-details-row .status-wrapper .status-text[data-v-4ce61af5],\n.file-uploader .files-list-wrapper .files-list > .file-details-row .status-wrapper .status-icon[data-v-4ce61af5],\n.file-uploader .files-list-wrapper .files-list > .file-details-row .status-wrapper .status-action[data-v-4ce61af5] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: rgba(0, 0, 0, 0.3);\n  margin: 0 1rem;\n}\n.file-uploader .files-list-wrapper .files-list > .file-details-row .status-wrapper .status-icon[data-v-4ce61af5] {\n  font-size: 2rem;\n}\n.file-uploader .files-list-wrapper .files-list > .file-details-row .status-wrapper .status-action[data-v-4ce61af5] {\n  color: #0059FF;\n  cursor: pointer;\n}\n.file-uploader .files-list-wrapper .files-list > .file-details-row .status-wrapper.actions-wrapper[data-v-4ce61af5] {\n  padding: 0;\n}\n.file-uploader .files-list-wrapper .files-list > .file-details-row .status-wrapper.actions-wrapper .actions-buttons .remove-btn[data-v-4ce61af5] {\n  background-color: transparent;\n  border: none;\n  border-left: 0.0625rem solid rgba(0, 0, 0, 0.05);\n  padding: 0 1rem;\n  color: #f5365c;\n  cursor: pointer;\n  transform: scale(1);\n}\n.file-uploader .files-list-wrapper .files-list > .file-details-row .status-wrapper.actions-wrapper .actions-buttons .remove-btn[data-v-4ce61af5]:hover {\n  transform: scale(1.2);\n}\n.file-uploader .files-list-wrapper .files-list > .file-details-row[data-v-4ce61af5]:hover {\n  background-color: #dee2e9;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileUploader.vue?vue&type=style&index=0&id=4ce61af5&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileUploader.vue?vue&type=style&index=0&id=4ce61af5&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../node_modules/vue-loader/lib??vue-loader-options!./FileUploader.vue?vue&type=style&index=0&id=4ce61af5&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileUploader.vue?vue&type=style&index=0&id=4ce61af5&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileUploader.vue?vue&type=template&id=4ce61af5&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileUploader.vue?vue&type=template&id=4ce61af5&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "sm-uploader file-uploader" }, [
    _c("div", { staticClass: "file-uploader-form" }, [
      _c("div", { class: ["file-selector d-flex", _vm.buttonWrapperClasses] }, [
        _vm.heading
          ? _c("h5", { class: ["title-desc", _vm.headingClasses] }, [
              _vm._v(
                "\n                " + _vm._s(_vm.heading) + "\n            "
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "label",
          { class: ["btn", "btn-" + _vm.buttonDesign, _vm.buttonClasses] },
          [
            _c("input", {
              ref: "filesInput",
              staticClass: "selector-input",
              attrs: {
                name: "filesInput",
                type: "file",
                id: "filesInput",
                multiple: _vm.multiple
              },
              on: { change: _vm.generateFilesList }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "button-icon" }, [
              _c("i", { class: _vm.buttonIcon })
            ]),
            _vm._v(" "),
            !_vm.hideButtonLabel
              ? _c("span", { staticClass: "button-label" }, [
                  _vm._v(
                    _vm._s(
                      _vm.$t(_vm.computedActionLabel, {
                        attribute: _vm.$t(_vm.namesLabel)
                      })
                    )
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.showSelectedFilesCount && _vm.files.length
              ? _c("span", { staticClass: "button-label bracketed" }, [
                  _vm._v(_vm._s(_vm.files.length))
                ])
              : _vm._e()
          ]
        ),
        _vm._v(" "),
        _vm.hideFileList && !_vm.hideResetButton && _vm.files.length
          ? _c(
              "button",
              {
                class: ["btn", "btn-" + _vm.buttonDesign, _vm.buttonClasses],
                attrs: { type: "button" },
                on: { click: _vm.reset }
              },
              [_vm._m(0)]
            )
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _vm.existingFiles.length || _vm.files.length
      ? _c(
          "div",
          { class: ["files-list-wrapper", { "d-none": _vm.hideFileList }] },
          [
            _c(
              "ul",
              { staticClass: "files-list" },
              [
                _vm._l(_vm.existingFiles, function(fileObj, index) {
                  return _c("li", { staticClass: "file-details-row" }, [
                    _c("div", { staticClass: "file-icon" }, [
                      _c("span", [
                        _c("i", {
                          class: ["far", _vm.getFileIcon(fileObj.mime)]
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "file-details" }, [
                      _c("h6", [_vm._v(_vm._s(fileObj.filename))]),
                      _vm._v(" "),
                      fileObj.error
                        ? _c("p", { staticClass: "text-danger" }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(fileObj.error) +
                                "\n                    "
                            )
                          ])
                        : _c("p", [
                            _c("span", [
                              _c("span", { staticClass: "font-weight-700" }, [
                                _vm._v(_vm._s(_vm.$t("upload.type")))
                              ]),
                              _vm._v(
                                ": " +
                                  _vm._s(
                                    _vm.mimeTypes[fileObj.mime] ||
                                      fileObj.mime ||
                                      "Unknown"
                                  )
                              )
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "ml-1" }, [
                              _c("span", { staticClass: "font-weight-700" }, [
                                _vm._v(_vm._s(_vm.$t("upload.size")))
                              ]),
                              _vm._v(
                                ": " +
                                  _vm._s(
                                    _vm._f("decimal")(fileObj.size / 1024, 0)
                                  ) +
                                  " KB"
                              )
                            ])
                          ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        class: [
                          "status-wrapper",
                          {
                            "actions-wrapper":
                              !fileObj.status ||
                              fileObj.status === "removeError"
                          }
                        ]
                      },
                      [
                        _c(
                          "transition",
                          {
                            staticClass: "transition-wrapper",
                            attrs: {
                              appear: "",
                              tag: "div",
                              name: "actions",
                              mode: "out-in"
                            }
                          },
                          [
                            fileObj.status === "removed"
                              ? _c(
                                  "div",
                                  { staticClass: "status-removed-wrapper" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "status-text text-danger"
                                      },
                                      [_vm._v("Removed!")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "status-icon text-danger"
                                      },
                                      [_c("i", { staticClass: "fas fa-trash" })]
                                    )
                                  ]
                                )
                              : !fileObj.status ||
                                fileObj.status === "removeError"
                              ? _c("div", { staticClass: "actions-buttons" }, [
                                  fileObj.status === "removeError"
                                    ? _c(
                                        "label",
                                        {
                                          staticClass: "status-text text-danger"
                                        },
                                        [_vm._v("Error!")]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  fileObj.status === "removeError"
                                    ? _c(
                                        "span",
                                        {
                                          staticClass: "status-icon text-danger"
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "fas fa-exclamation-triangle"
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover.left",
                                          modifiers: { hover: true, left: true }
                                        }
                                      ],
                                      staticClass: "remove-btn",
                                      attrs: {
                                        type: "button",
                                        title: _vm.$t("global.remove", {
                                          attribute: _vm.$t(_vm.nameLabel)
                                        })
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.removeFile(
                                            fileObj,
                                            index,
                                            true
                                          )
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fas fa-trash" })]
                                  )
                                ])
                              : _vm._e()
                          ]
                        )
                      ],
                      1
                    )
                  ])
                }),
                _vm._v(" "),
                _vm._l(_vm.files, function(fileObj, index) {
                  return _c("li", { staticClass: "file-details-row" }, [
                    _c("div", { staticClass: "file-icon" }, [
                      _c("span", [
                        _c("i", {
                          class: ["far", _vm.getFileIcon(fileObj.file.type)]
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "file-details" }, [
                      _c("h6", [_vm._v(_vm._s(fileObj.file.name))]),
                      _vm._v(" "),
                      fileObj.error
                        ? _c("p", { staticClass: "text-danger" }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(fileObj.error) +
                                "\n                    "
                            )
                          ])
                        : _c("p", [
                            _c("span", [
                              _c("span", { staticClass: "font-weight-700" }, [
                                _vm._v(_vm._s(_vm.$t("upload.type")))
                              ]),
                              _vm._v(
                                ": " +
                                  _vm._s(
                                    _vm.mimeTypes[fileObj.file.type] ||
                                      "Unknown"
                                  )
                              )
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "ml-1" }, [
                              _c("span", { staticClass: "font-weight-700" }, [
                                _vm._v(_vm._s(_vm.$t("upload.size")))
                              ]),
                              _vm._v(
                                ": " +
                                  _vm._s(
                                    _vm._f("decimal")(
                                      fileObj.file.size / 1024,
                                      0
                                    )
                                  ) +
                                  " KB"
                              )
                            ])
                          ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        class: [
                          "status-wrapper",
                          {
                            "actions-wrapper":
                              fileObj.status === "uploaded" ||
                              fileObj.status === "removeError"
                          }
                        ]
                      },
                      [
                        _c(
                          "transition",
                          {
                            staticClass: "transition-wrapper",
                            attrs: {
                              appear: "",
                              tag: "div",
                              name: "actions",
                              mode: "out-in"
                            }
                          },
                          [
                            fileObj.status === "uploading"
                              ? _c(
                                  "div",
                                  { staticClass: "status-uploading-wrapper" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "status-action",
                                        on: { click: fileObj.cancel }
                                      },
                                      [_vm._v(_vm._s(_vm.$t("general.cancel")))]
                                    ),
                                    _vm._v(" "),
                                    _c("progress-ring", {
                                      attrs: {
                                        value: fileObj.progress,
                                        "stroke-color": _vm.vars.loaderColor
                                      }
                                    })
                                  ],
                                  1
                                )
                              : fileObj.status === "justUploaded"
                              ? _c(
                                  "div",
                                  { staticClass: "status-uploaded-wrapper" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "status-text text-success"
                                      },
                                      [_vm._v("Uploaded!")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "status-icon text-success"
                                      },
                                      [_c("i", { staticClass: "fas fa-check" })]
                                    )
                                  ]
                                )
                              : fileObj.status === "cancelled"
                              ? _c(
                                  "div",
                                  { staticClass: "status-cancelled-wrapper" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "status-text text-danger"
                                      },
                                      [_vm._v("Cancelled!")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "status-icon text-danger"
                                      },
                                      [_c("i", { staticClass: "fas fa-times" })]
                                    )
                                  ]
                                )
                              : fileObj.status === "removed"
                              ? _c(
                                  "div",
                                  { staticClass: "status-removed-wrapper" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "status-text text-danger"
                                      },
                                      [_vm._v("Removed!")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "status-icon text-danger"
                                      },
                                      [_c("i", { staticClass: "fas fa-trash" })]
                                    )
                                  ]
                                )
                              : fileObj.status === "error"
                              ? _c(
                                  "div",
                                  { staticClass: "status-error-wrapper" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "status-text text-danger"
                                      },
                                      [_vm._v("Error!")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "status-icon text-danger"
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fas fa-exclamation-triangle"
                                        })
                                      ]
                                    )
                                  ]
                                )
                              : fileObj.status === "uploaded" ||
                                fileObj.status === "removeError"
                              ? _c("div", { staticClass: "actions-buttons" }, [
                                  fileObj.status === "removeError"
                                    ? _c(
                                        "label",
                                        {
                                          staticClass: "status-text text-danger"
                                        },
                                        [_vm._v("Error!")]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  fileObj.status === "removeError"
                                    ? _c(
                                        "span",
                                        {
                                          staticClass: "status-icon text-danger"
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "fas fa-exclamation-triangle"
                                          })
                                        ]
                                      )
                                    : fileObj.status === "uploaded"
                                    ? _c(
                                        "label",
                                        {
                                          staticClass:
                                            "status-text text-success"
                                        },
                                        [_vm._v("Uploaded!")]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover.left",
                                          modifiers: { hover: true, left: true }
                                        }
                                      ],
                                      staticClass: "remove-btn",
                                      attrs: {
                                        type: "button",
                                        title: _vm.$t("global.remove", {
                                          attribute: _vm.$t(_vm.nameLabel)
                                        })
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.removeFile(fileObj, index)
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fas fa-trash" })]
                                  )
                                ])
                              : _vm._e()
                          ]
                        )
                      ],
                      1
                    )
                  ])
                })
              ],
              2
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "button-icon" }, [
      _c("i", { staticClass: "fas fa-times" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/uploader.js":
/*!**************************************!*\
  !*** ./resources/js/api/uploader.js ***!
  \**************************************/
/*! exports provided: uploadImage, removeImage, uploadFile, removeFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadImage", function() { return uploadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeImage", function() { return removeImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFile", function() { return removeFile; });
/* harmony import */ var _core_utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/request */ "./resources/js/core/utils/request.js");

function uploadImage(options, onUploadProgress) {
  return Object(_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: options.url,
    method: 'post',
    data: options.data,
    upload: true,
    config: {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    },
    headers: {
      'Content-Type': 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2)
    },
    onUploadProgress: onUploadProgress
  });
}
function removeImage(options) {
  return Object(_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: options.url,
    method: 'delete',
    data: options.data
  });
}
function uploadFile(options, onUploadProgress, cancelToken) {
  return Object(_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: options.url,
    method: 'post',
    data: options.data,
    upload: true,
    config: {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    },
    headers: {
      'Content-Type': 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2)
    },
    onUploadProgress: onUploadProgress,
    cancelToken: cancelToken
  });
}
function removeFile(options) {
  return Object(_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: options.url,
    method: 'delete',
    data: options.data
  });
}

/***/ }),

/***/ "./resources/js/components/FileUploader.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/FileUploader.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileUploader_vue_vue_type_template_id_4ce61af5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileUploader.vue?vue&type=template&id=4ce61af5&scoped=true& */ "./resources/js/components/FileUploader.vue?vue&type=template&id=4ce61af5&scoped=true&");
/* harmony import */ var _FileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileUploader.vue?vue&type=script&lang=js& */ "./resources/js/components/FileUploader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FileUploader_vue_vue_type_style_index_0_id_4ce61af5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileUploader.vue?vue&type=style&index=0&id=4ce61af5&lang=scss&scoped=true& */ "./resources/js/components/FileUploader.vue?vue&type=style&index=0&id=4ce61af5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileUploader_vue_vue_type_template_id_4ce61af5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileUploader_vue_vue_type_template_id_4ce61af5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4ce61af5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileUploader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileUploader.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/FileUploader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FileUploader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileUploader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileUploader.vue?vue&type=style&index=0&id=4ce61af5&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/FileUploader.vue?vue&type=style&index=0&id=4ce61af5&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_style_index_0_id_4ce61af5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../node_modules/vue-loader/lib??vue-loader-options!./FileUploader.vue?vue&type=style&index=0&id=4ce61af5&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileUploader.vue?vue&type=style&index=0&id=4ce61af5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_style_index_0_id_4ce61af5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_style_index_0_id_4ce61af5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_style_index_0_id_4ce61af5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_style_index_0_id_4ce61af5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FileUploader.vue?vue&type=template&id=4ce61af5&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/FileUploader.vue?vue&type=template&id=4ce61af5&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_template_id_4ce61af5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FileUploader.vue?vue&type=template&id=4ce61af5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileUploader.vue?vue&type=template&id=4ce61af5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_template_id_4ce61af5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_template_id_4ce61af5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ })

}]);
//# sourceMappingURL=pag~f002eb16.js.map?id=ceda8dfa67ba5e2d6ba1