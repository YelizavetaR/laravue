(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/layouts/app-layout"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppBackdrop.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppBackdrop.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: function $route() {
      this.SetUiConfig({
        rightSidebarShow: false
      });
      this.SetUiConfig({
        configSidebarShow: false
      });
      this.SetUiConfig({
        modalSidebarShow: false
      });
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('config', ['SetUiConfig'])), {}, {
    closeLeftSidebar: function closeLeftSidebar() {
      this.SetUiConfig({
        leftSidebarShow: false
      });
    },
    closeRightSidebar: function closeRightSidebar() {
      this.SetUiConfig({
        rightSidebarShow: false
      });
    },
    closeConfigSidebar: function closeConfigSidebar() {
      this.SetUiConfig({
        configSidebarShow: false
      });
    },
    closeModalSidebar: function closeModalSidebar() {
      this.SetUiConfig({
        modalSidebarShow: false
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppLogo.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppLogo.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    place: {
      type: String,
      "default": 'normal'
    },
    size: {
      type: String,
      "default": 'normal'
    },
    appLogo: {
      type: Boolean,
      "default": false
    },
    inline: {
      type: Boolean,
      "default": false
    },
    assets: {
      type: Object
    }
  },
  data: function data() {
    return {
      appLogoText: window.kmenv.name
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['configs', 'uiConfigs'])), {}, {
    orgLogo: function orgLogo() {
      if (this.appLogo || !(this.configs.assets || this.assets)) {
        if (this.place === 'navbar' || this.place === 'sidebar' || this.place === 'dark') {
          return '/images/logo-light.png';
        }

        return '/images/logo.png';
      }

      var finalLogo = this.assets && this.assets.logo ? this.assets.logo : this.configs.assets.logo ? this.configs.assets.logo : '/images/logo.png';

      if (this.assets && this.assets.logoLight || this.configs.assets.logoLight) {
        if (this.place === 'navbar' && this.uiConfigs.topNavbarLogoLight || this.place === 'sidebar' && this.uiConfigs.leftSidebarLogoLight || this.place === 'dark') {
          finalLogo = this.assets && this.assets.logoLight ? this.assets.logoLight : this.configs.assets.logoLight;
        }
      }

      return finalLogo;
    },
    appTitle: function appTitle() {
      return this.configs.basic ? this.configs.basic.orgName : window.kmenv.name;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSearch.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppSearch.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _core_utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/auth */ "./resources/js/core/utils/auth.js");
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      shown: false,
      searchTerm: '',
      foundHotTerm: null,
      searchResults: null,
      isLoading: false,
      meetingIcons: {
        'scheduled': 'far fa-calendar-alt',
        'live': 'fas fa-video',
        'ended': 'far fa-calendar-check',
        'cancelled': 'far fa-calendar-times'
      },
      meetingIconColors: {
        'scheduled': 'bg-primary text-white no-border',
        'live': 'bg-warning text-white no-border',
        'ended': 'bg-success text-white no-border',
        'cancelled': 'bg-danger text-white no-border'
      }
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['uiConfigs', 'vars'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('search', ['hotTerms', 'results', 'suggestions'])), {}, {
    searchScreenShow: function searchScreenShow() {
      return this.uiConfigs.searchScreenShow;
    },
    gotResults: function gotResults() {
      return this.results && (this.results.contacts && this.results.contacts.length || this.results.users && this.results.users.length || this.results.meetings && this.results.meetings.length);
    }
  }),
  updated: function updated() {
    if (this.$refs.searchTermElement) {
      this.$refs.searchTermElement.focus();
    }
  },
  watch: {
    searchScreenShow: function searchScreenShow(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal) {
          _js_event_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$off('KEY_PRESSED', this.handleKeyPressed);
          _js_event_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$on('ESCAPE_PRESSED', this.close);
          this.resetVueScroll();
          this.searchTerm = '';
          this.ResetResults();
          this.ResetSuggestions();
          this.searchTermChanged();
          this.shown = true;
        } else {
          _js_event_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$off('ESCAPE_PRESSED', this.close);
          _js_event_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$off('KEY_PRESSED', this.handleKeyPressed);
          _js_event_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$on('KEY_PRESSED', this.handleKeyPressed);
          this.shown = false;
        }
      }
    },
    $route: function $route(val) {
      this.close();
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('config', ['SetUiConfig'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('search', ['SearchRoutes', 'Search', 'ResetResults', 'ResetSuggestions'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('user', ['Lock', 'Logout'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('navigation', ['Generate'])), {}, {
    searchTermChanged: _.debounce(function () {
      if (this.searchTerm === '') {
        this.searchResults = null;
        this.ResetResults();
        this.ResetSuggestions();
      }

      this.findHotTerm();
    }, 500),
    findHotTerm: function findHotTerm() {
      var _this = this;

      this.foundHotTerm = null;
      this.hotTerms.forEach(function (command) {
        if (!_this.foundHotTerm) {
          var pattern = new RegExp(command.code, 'i');

          if (pattern.test(_this.searchTerm)) {
            _this.foundHotTerm = _.cloneDeep(command);
            _this.foundHotTerm.term = _this.searchTerm.replace(pattern, '');
          }
        }
      });
      this.processSubmit();
    },
    submit: _.debounce(function () {
      this.isLoading = true;
      this.resetVueScroll();
      this.findHotTerm();
      this.processSubmit();
    }, 500),
    processSubmit: _.debounce(function () {
      var _this2 = this;

      this.isLoading = true;
      this.resetVueScroll();
      var foundHotTerm = this.foundHotTerm;

      if (foundHotTerm) {
        if (foundHotTerm.type === 'command') {
          if (RegExp('logout', 'i').test(foundHotTerm.term)) {
            this.logout();
          } else if (RegExp('lock', 'i').test(foundHotTerm.term)) {
            this.lock();
          } else if (RegExp('menu', 'i').test(foundHotTerm.term)) {
            this.regenerateNavigation();
          } else if (RegExp('clear', 'i').test(foundHotTerm.term)) {
            this.clearStoreAndReload();
          } else if (RegExp('reload', 'i').test(foundHotTerm.term)) {
            window.location.reload();
          } else if (RegExp('freload', 'i').test(foundHotTerm.term)) {
            window.location.reload(true);
          }

          this.isLoading = false;
        } else if (foundHotTerm.type === 'redirect') {
          this.ResetResults();
          this.ResetSuggestions();

          if (foundHotTerm.term) {
            this.SearchRoutes(foundHotTerm.term).then(function (response) {
              _this2.isLoading = false;
            });
          } else {
            this.isLoading = false;
          }
        } else {
          this.search();
        }
      } else {
        this.search();
      }
    }, 500),
    resetVueScroll: function resetVueScroll() {
      var _this3 = this;

      setTimeout(function () {
        if (_this3.$refs['vuescrollSearch']) {
          _this3.$refs['vuescrollSearch'].scrollTo({
            x: 0,
            y: 0
          }, true);
        }
      }, 100);
    },
    search: function search() {
      var _this4 = this;

      this.ResetResults();
      this.ResetSuggestions();

      if (this.searchTerm.length < 3) {
        this.isLoading = false;
      } else {
        this.Search(this.searchTerm).then(function (response) {
          _this4.searchResults = response;
          _this4.isLoading = false;
        })["catch"](function (error) {
          _this4.isLoading = false;
          formUtil.handleErrors(error);
        });
      }
    },
    logout: function logout() {
      var _this5 = this;

      this.Logout().then(function (response) {
        // unregisterModules()
        _this5.$toasted.success(response.message, _this5.$toastConfig);

        _this5.$router.push({
          name: 'login',
          query: {
            logout: 'true'
          }
        });
      });
    },
    lock: function lock() {
      this.Lock();
    },
    close: function close() {
      this.SetUiConfig({
        searchScreenShow: false
      });
    },
    handleKeyPressed: function handleKeyPressed(event) {
      var _char = event.which || event.keyCode;

      var character = event.key || String.fromCharCode(_char);

      if (!this.searchScreenShow) {
        this.SetUiConfig({
          searchScreenShow: true
        });
      }

      this.searchTerm = character;
    },
    regenerateNavigation: function regenerateNavigation() {
      var _this6 = this;

      this.Generate().then(function () {
        _this6.isLoading = false;
        _this6.searchTerm = '';

        _this6.close();
      });
    },
    clearStoreAndReload: function clearStoreAndReload() {
      Object(_core_utils_auth__WEBPACK_IMPORTED_MODULE_1__["clearStore"])(true);
    }
  }),
  created: function created() {
    this.close();
    _js_event_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$off('ESCAPE_PRESSED', this.close);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$off('KEY_PRESSED', this.handleKeyPressed);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$on('ESCAPE_PRESSED', this.close);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$on('KEY_PRESSED', this.handleKeyPressed);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSidebar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppSidebar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/conversation-header.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/conversation-header.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    room: {
      type: Object,
      required: true
    },
    roomName: {
      type: String,
      required: true
    },
    vars: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    typingUser: {
      type: String
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', ['liveUsers'])), {}, {
    computedUser: function computedUser() {
      return this.room.isGroup || !this.room.member ? this.room : this.room.member;
    }
  }),
  methods: {
    isLiveOnline: function isLiveOnline(user) {
      return user && this.liveUsers.find(function (u) {
        return u.uuid === user.uuid;
      }) ? true : false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/header.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/header.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    activeContainer: {
      type: String,
      "default": 'home',
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_FileUploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/FileUploader */ "./resources/js/components/FileUploader.vue");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./resources/js/components/chat-box/header.vue");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./resources/js/components/chat-box/settings.vue");
/* harmony import */ var _room_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./room-item */ "./resources/js/components/chat-box/room-item.vue");
/* harmony import */ var _conversation_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conversation-header */ "./resources/js/components/chat-box/conversation-header.vue");
/* harmony import */ var _message_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message-item */ "./resources/js/components/chat-box/message-item.vue");
/* harmony import */ var vue_at__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-at */ "./node_modules/vue-at/dist/vue-at.js");
/* harmony import */ var vue_at__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_at__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
/* harmony import */ var _core_utils_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/utils/form */ "./resources/js/core/utils/form.js");
/* harmony import */ var _core_utils_formatter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/utils/formatter */ "./resources/js/core/utils/formatter.js");
/* harmony import */ var _js_vars__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @js/vars */ "./resources/js/vars.js");
/* harmony import */ var _core_utils_media__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/utils/media */ "./resources/js/core/utils/media.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//
//
//
//
//
//
//
//
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
  name: "ChatBox",
  components: {
    FileUploader: _components_FileUploader__WEBPACK_IMPORTED_MODULE_1__["default"],
    At: vue_at__WEBPACK_IMPORTED_MODULE_7___default.a,
    ChatBoxHeader: _header__WEBPACK_IMPORTED_MODULE_2__["default"],
    ChatBoxSettings: _settings__WEBPACK_IMPORTED_MODULE_3__["default"],
    ChatRoomItem: _room_item__WEBPACK_IMPORTED_MODULE_4__["default"],
    ConversationHeader: _conversation_header__WEBPACK_IMPORTED_MODULE_5__["default"],
    MessageItem: _message_item__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    channel: {
      "default": null
    },
    boxVisibility: {
      type: Boolean,
      "default": false
    },
    meeting: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      isBoxShown: false,
      isSearchShown: false,
      showChatOptions: false,
      largeChatBox: false,
      searched: false,
      newChatScreen: false,
      cbHeaderTitle: $t('chat.live_chat'),
      searchTerm: '',
      activeContainer: 'home',
      members: [],
      newMessage: {
        message: '',
        attachments: [],
        updated: false
      },
      newMessageRequestUUID: uuid(),
      activeConversation: null,
      uploadURL: '',
      formErrors: {},
      preRequisite: {
        uploaderConfig: {
          module: '',
          token: '',
          allowedExtensions: '',
          maxNoOfFiles: 1,
          uuid: uuid()
        }
      },
      isFetching: false,
      noMoreMessages: false,
      newUnreadMessageOnFeed: false,
      showScrollToLatestBtn: false,
      chatRoomChannel: null,
      typingUser: null,
      typingUserTimeout: null,
      initialNewMessage: null,
      firstFetch: true,
      fileIcons: _js_vars__WEBPACK_IMPORTED_MODULE_11__["fileIcons"],
      fileMimeTypes: _js_vars__WEBPACK_IMPORTED_MODULE_11__["fileMimeTypes"]
    };
  },
  watch: {
    boxVisibility: function boxVisibility(newVal, oldVal) {
      this.isBoxShown = newVal;
    },
    activeChatUser: function activeChatUser(newVal, oldVal) {
      if (newVal !== null && (!oldVal || oldVal !== null && newVal.uuid !== oldVal.uuid)) {
        this.goToConversation({
          user: newVal
        });
      }
    },
    activeChatRoom: function activeChatRoom(newVal, oldVal) {
      if (newVal !== null && (!oldVal || oldVal !== null && newVal.uuid !== oldVal.uuid)) {
        this.goToConversation({
          room: newVal
        });
      }
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['vars', 'configs', 'uiConfigs'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', {
    'userUuid': 'uuid'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', ['profile', 'username'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('chat', ['rooms', 'roomsPageMeta', 'roomsSearch', 'messages', 'messagesPageMeta', 'messagesSearch', 'activeChatRoom', 'activeChatUser'])), {}, {
    user: function user() {
      return {
        uuid: this.userUuid,
        username: this.username,
        name: this.profile.name,
        profile: this.profile
      };
    },
    hasMessages: function hasMessages() {
      return this.activeConversation && this.messages.data;
    },
    computedParticipants: function computedParticipants() {
      if (this.activeConversation) {
        return this.activeConversation.members;
      }

      return [];
    },
    enterToSubmit: function enterToSubmit() {
      return this.configs.chat && this.configs.chat.enterToSubmit;
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('chat', ['GetRooms', 'GetRoom', 'SearchRooms', 'SearchMessages', 'GetMessages', 'SendMessage', 'PutMessageToFeed', 'PatchMessageInFeed', 'ResetMessage', 'SetMessage', 'ResetTotalUnreadCount', 'SetActiveChatRoom', 'SetActiveChatUser', 'ResetActiveChatRoomAndUser'])), {}, {
    // TOGGLE & HIDE SHOW METHODS
    hideChatBox: function hideChatBox() {
      var _this = this;

      this.isBoxShown = false;
      this.ResetActiveChatRoomAndUser();
      setTimeout(function () {
        _this.$emit('boxHidden');
      }, 200);
    },
    showChatBox: function showChatBox() {
      this.isBoxShown = true;
      this.$emit('boxShown');
    },
    hideSearch: function hideSearch() {
      this.searchTerm = '';
      this.searched = false;
      this.isSearchShown = false;
      this.showChatOptions = true;
      this.newChatScreen = false;

      if (this.activeContainer === 'home') {
        this.fetchRooms(true);
        this.scrollTo("vue-scroll-rooms", 0);
      } else if (this.activeContainer === 'conversation') {
        this.fetchMessages(true);
      }
    },
    toggleSearch: function toggleSearch() {
      var _this2 = this;

      var startNewChat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.searchTerm = '';
      this.searched = false;
      this.isSearchShown = !this.isSearchShown;

      if (this.isSearchShown) {
        this.newChatScreen = startNewChat;
        this.showChatOptions = !startNewChat;
        this.$nextTick(function () {
          _this2.$refs["searchTerm"].focus();
        });
      } else {
        this.newChatScreen = false;
        this.showChatOptions = true;

        if (this.activeContainer === 'home') {
          this.fetchRooms(true);
          this.scrollTo("vue-scroll-rooms", 0);
        } else if (this.activeContainer === 'conversation') {
          this.fetchMessages(true);
        }
      }
    },
    startNewChat: function startNewChat() {
      this.toggleSearch(true);
    },
    createGroup: function createGroup() {
      this.toggleSearch(true);
    },
    // SWITCH TO VIEW METHODS
    goHome: function goHome() {
      var _this3 = this;

      var comingFrom = this.activeContainer;
      this.activeContainer = 'home';
      this.ResetActiveChatRoomAndUser();

      if (comingFrom === 'conversation') {
        this.leaveChatRoomChannel(this.activeConversation.chatRoom);
        this.hideSearch();

        if (this.searchRoomObj && this.searchRoomObj.searched) {
          this.searchTerm = this.searchRoomObj.searchTerm;
          this.searched = this.searchRoomObj.searched;
          this.isSearchShown = true;
          this.showChatOptions = false;
        } else {
          this.fetchRooms();
        }
      } else {
        this.fetchRooms();
      }

      this.scrollTo("vue-scroll-rooms", 0);
      setTimeout(function () {
        _this3.activeConversation = null;
      }, 100);
    },
    goToConversation: function goToConversation(_ref) {
      var _this4 = this;

      var room = _ref.room,
          user = _ref.user;
      var fetchRoomForUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var swtichToConversationTab = function swtichToConversationTab() {
        setTimeout(function () {
          _this4.activeContainer = 'conversation';

          if (_this4.isSearchShown) {
            _this4.searchRoomObj = {
              searchTerm: _this4.searchTerm,
              searched: _this4.searched
            };

            _this4.hideSearch();
          } else {
            _this4.searchRoomObj = {
              searchTerm: null,
              searched: null
            };
          }

          window.setTimeout(function () {
            _this4.scrollToLatestMessages();

            _this4.focusNewMessage();

            _this4.showScrollToLatestBtn = false;
            _this4.newUnreadMessageOnFeed = false;
          }, 300);
        }, 100);
      };

      this.activeConversation = {
        chatRoom: room || null,
        user: user || null,
        members: user ? [user] : []
      };
      this.ResetMessage();

      if (room) {
        this.joinChatRoomChannel(room);
        this.GetRoom({
          uuid: room.uuid
        }).then(function (response) {
          _this4.activeConversation.chatRoom = response;

          _this4.SetMessage({
            data: _toConsumableArray(response.chats),
            meta: _objectSpread(_objectSpread({}, _this4.messages.meta), {}, {
              total: response.chats.length,
              lastItemUuid: response.chats.length ? response.chats[response.chats.length - 1].uuid : null
            })
          });

          if (_this4.activeConversation.chatRoom && _this4.activeConversation.chatRoom.hasOwnProperty('chats')) {
            delete _this4.activeConversation.chatRoom.chats;
          }

          _this4.noMoreMessages = false;

          _this4.SetActiveChatRoom(_this4.activeConversation.chatRoom);

          swtichToConversationTab();
        })["catch"](function (error) {
          formUtil.handleErrors(error);
        });
      } else {
        this.SetActiveChatUser(this.activeConversation.user);
        this.fetchMessages(true);
        swtichToConversationTab();
      }
    },
    goToSettings: function goToSettings() {
      var _this5 = this;

      var comingFrom = this.activeContainer;
      this.activeContainer = 'settings';
      this.scrollTo("vue-scroll-rooms", 0);
      setTimeout(function () {
        if (comingFrom === 'conversation') {
          _this5.ResetActiveChatRoomAndUser();

          _this5.leaveChatRoomChannel(_this5.activeConversation.chatRoom);
        }

        if (_this5.isSearchShown) {
          _this5.hideSearch();
        }

        _this5.activeConversation = null;
      }, 100);
    },
    // FETCH DATA METHODS
    searchTermChanged: _.debounce(function () {
      if (!this.searchTerm || this.searchTerm.length < 2) {
        return;
      }

      if (this.activeContainer === 'home') {
        this.searchRooms();
        this.scrollTo("vue-scroll-rooms", 0);
      } else if (this.activeContainer === 'conversation') {
        this.searchMessages();
      }
    }, 500),
    fetchRooms: function fetchRooms() {
      var _this6 = this;

      var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.isFetching = true;

      var query = _objectSpread(_objectSpread({}, this.roomsPageMeta), {}, {
        lastItemUuid: reset ? null : this.rooms.meta.lastItemUuid,
        perPage: this.rooms.meta.perPage
      });

      this.GetRooms(query).then(function (response) {
        _this6.isFetching = false;
      })["catch"](function (error) {
        _this6.isFetching = false;
        formUtil.handleErrors(error);
      });
    },
    searchRooms: function searchRooms() {
      var _this7 = this;

      this.isFetching = true;
      this.SearchRooms(this.searchTerm).then(function (response) {
        _this7.searched = true;
        _this7.showChatOptions = false;
        _this7.isFetching = false;
      })["catch"](function (error) {
        _this7.isFetching = false;
        formUtil.handleErrors(error);
      });
    },
    searchMessages: function searchMessages() {
      var _this8 = this;

      if (!this.activeConversation.chatRoom) {
        return;
      }

      this.isFetching = true;
      this.SearchMessages({
        q: this.searchTerm,
        chatRoom: this.activeConversation.chatRoom.uuid
      }).then(function (response) {
        _this8.searched = true;
        _this8.isFetching = false;
        window.setTimeout(function () {
          _this8.scrollToLatestMessages();

          _this8.showScrollToLatestBtn = false;
          _this8.newUnreadMessageOnFeed = false;
        }, 300);
      })["catch"](function (error) {
        _this8.isFetching = false;
        formUtil.handleErrors(error);
      });
    },
    fetchMessages: function fetchMessages() {
      var _this9 = this;

      var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this.activeConversation.chatRoom && !this.activeConversation.user) {
        return;
      }

      this.isFetching = true;
      this.noMoreMessages = false;
      this.newUnreadMessageOnFeed = false;

      var query = _objectSpread(_objectSpread({}, this.messagesPageMeta), {}, {
        lastItemUuid: reset ? null : this.messages.meta.lastItemUuid,
        perPage: this.messages.meta.perPage,
        chatRoom: this.activeConversation.chatRoom ? this.activeConversation.chatRoom.uuid : null,
        user: this.activeConversation.user ? this.activeConversation.user.uuid : null
      });

      this.GetMessages(query).then(function (response) {
        _this9.isFetching = false;

        if (!response.data.length) {
          _this9.noMoreMessages = true;
        }

        if (reset) {
          window.setTimeout(function () {
            _this9.scrollToLatestMessages();

            _this9.showScrollToLatestBtn = false;
            _this9.newUnreadMessageOnFeed = false;
          }, 300);
        }

        if (!_this9.searched) {
          _this9.focusNewMessage();
        }
      })["catch"](function (error) {
        _this9.isFetching = false;
        formUtil.handleErrors(error);
      });
    },
    // POST DATA & JOIN LEAVE METHODS
    postMessage: function postMessage() {
      var _this10 = this;

      if (!this.newMessage.message) {
        return;
      }

      this.newMessage.message = this.newMessage.message.trim();
      var messageObj = {
        uuid: this.newMessageRequestUUID,
        message: this.newMessage.message,
        user: this.user,
        sentAt: moment().format(this.vars.serverDateTimeFormat),
        status: 'sending'
      };
      this.newMessageRequestUUID = uuid();
      this.newMessage = _.cloneDeep(this.initialNewMessage);
      this.noMoreMessages = false;
      this.putMessageToFeed(messageObj);
      window.setTimeout(function () {
        _this10.scrollTo("vue-scroll-messages", 100);

        _this10.focusNewMessage();
      }, 300);
      this.SendMessage({
        message: messageObj.message,
        chatRoom: this.activeConversation.chatRoom,
        user: this.activeConversation.user
      }).then(function (response) {
        _this10.messageSentSuccess(messageObj, response);
      })["catch"](function (error) {
        _this10.messageSendingFailed(messageObj, error);
      });
    },
    attachmentUploadStarted: function attachmentUploadStarted(count) {
      var _this11 = this;

      if (!this.newMessage.attachments || this.newMessage.attachments.length) {
        return;
      }

      var messageObj = {
        uuid: this.newMessageRequestUUID,
        message: null,
        user: this.user,
        sentAt: moment().format(this.vars.serverDateTimeFormat),
        status: 'sending'
      };
      this.newMessageRequestUUID = uuid();
      this.newMessage = _.cloneDeep(this.initialNewMessage);
      this.putMessageToFeed(messageObj);
      window.setTimeout(function () {
        _this11.scrollTo("vue-scroll-messages", 100);

        _this11.focusNewMessage();
      }, 300);
    },
    attachmentUploaded: function attachmentUploaded(response) {
      _js_event_bus__WEBPACK_IMPORTED_MODULE_8__["default"].$emit('RESET_UPLOAD');
      this.messageSentSuccess({
        uuid: response.meta.requestUuid
      }, response);
    },
    attachmentUploadError: function attachmentUploadError(error) {
      _js_event_bus__WEBPACK_IMPORTED_MODULE_8__["default"].$emit('RESET_UPLOAD');

      if (error) {
        this.messageSendingFailed({
          uuid: response.meta.requestUuid
        }, error);
      }
    },
    messageSentSuccess: function messageSentSuccess(oldMessage, newMessageResponse) {
      var _this12 = this;

      var newMessage = newMessageResponse.data;
      this.PatchMessageInFeed({
        old: oldMessage,
        "new": _objectSpread(_objectSpread({}, newMessage), {}, {
          newUuid: newMessage.uuid,
          uuid: oldMessage.uuid
        })
      });

      if (!this.activeConversation.chatRoom) {
        this.joinChatRoomChannel(newMessage.chatRoom);
        this.GetRoom({
          uuid: newMessage.chatRoom.uuid
        }).then(function (response) {
          _this12.activeConversation.chatRoom = response;

          if (_this12.activeConversation.chatRoom && _this12.activeConversation.chatRoom.hasOwnProperty('chats')) {
            delete _this12.activeConversation.chatRoom.chats;
          }
        })["catch"](function (error) {
          formUtil.handleErrors(error);
        });
      }
    },
    messageSendingFailed: function messageSendingFailed(oldMessage, error) {
      this.PatchMessageInFeed({
        old: oldMessage,
        "new": _objectSpread(_objectSpread({}, oldMessage), {}, {
          status: 'error',
          error: formUtil.getError(error)
        })
      });
    },
    noNeedCallback: function noNeedCallback() {
      this.afterUploadComplete();
    },
    joinChatRoomChannel: function joinChatRoomChannel(chatRoom) {
      window.EchoOpts.subscriptions.chatRoom = window.Echo.join("ChatRoom.".concat(chatRoom.uuid));
      this.chatRoomChannel = window.EchoOpts.subscriptions.chatRoom;
      this.chatRoomChannel.listen('ChatMessageSentToRoom', this.newMessageReceived);
      this.chatRoomChannel.listenForWhisper('typing', this.anotherUserTyping);
    },
    leaveChatRoomChannel: function leaveChatRoomChannel(chatRoom) {
      if (this.chatRoomChannel) {
        this.chatRoomChannel.stopListening('ChatMessageSentToRoom');
        this.chatRoomChannel = null;
      }

      if (chatRoom) {
        window.Echo.leave("ChatRoom.".concat(chatRoom.uuid));
      }

      if (window.EchoOpts && window.EchoOpts.subscriptions) {
        window.EchoOpts.subscriptions.chatRoom = null;
      }
    },
    // HELPER METHODS OR EVENT CALLBACKS
    enterPressedEvt: function enterPressedEvt(fnCallback, event) {
      if (this.enterToSubmit) {
        return Object(_core_utils_form__WEBPACK_IMPORTED_MODULE_9__["enterPressed"])(fnCallback, event);
      }

      return false;
    },
    putMessageToFeed: function putMessageToFeed(message) {
      if (this.messages.data.findIndex(function (c) {
        return c.uuid === message.uuid;
      }) !== -1) {
        return;
      }

      this.PutMessageToFeed(message);
    },
    focusNewMessage: function focusNewMessage() {
      if (this.$refs["newMessageInput"]) {
        this.$refs['newMessageInput'].focus();
      }
    },
    scrollTo: function scrollTo(refId, pos) {
      if (this.$refs[refId]) {
        this.$refs[refId].scrollTo({
          y: "".concat(pos, "%")
        }, 300);
      }
    },
    scrollToLatestMessages: function scrollToLatestMessages() {
      this.scrollTo("vue-scroll-messages", 100);
    },
    handleMessageScroll: _.debounce(function (vertical, horizontal) {
      if (vertical.process > 0.95) {
        this.showScrollToLatestBtn = false;
        this.newUnreadMessageOnFeed = false;
      } else {
        if (!this.searched || this.searched && vertical.process !== 0) {
          this.showScrollToLatestBtn = true;
        }
      }

      if (vertical.process < 0.5 && !this.isFetching && !this.noMoreMessages) {
        this.fetchMessages();
      }
    }, 500),
    handleRoomsScroll: _.debounce(function (vertical, horizontal) {
      if (vertical.process > 0.5 && !this.isFetching) {
        this.fetchRooms();
      }
    }, 500),
    isTyping: _.throttle(function () {
      if (this.chatRoomChannel) {
        this.chatRoomChannel.whisper('typing', {
          user: this.user
        });
      }
    }, 500, {
      'leading': true,
      'trailing': false
    }),
    anotherUserTyping: function anotherUserTyping(_ref2) {
      var _this13 = this;

      var user = _ref2.user;
      this.typingUser = user.name;

      if (this.typingUserTimeout) {
        clearTimeout(this.typingUserTimeout);
      }

      this.typingUserTimeout = setTimeout(function () {
        _this13.typingUser = null;
      }, 1500);
    },
    newMessageReceived: function newMessageReceived(message) {
      var _this14 = this;

      if (!message) {
        return;
      }

      message = Object(_core_utils_formatter__WEBPACK_IMPORTED_MODULE_10__["formatKeysToCamelCase"])(message);

      if (message && message.user && message.user.uuid !== this.userUuid) {
        this.putMessageToFeed(message); // playIncomingMessage()

        window.setTimeout(function () {
          var _this14$$refs$vueScr = _this14.$refs["vue-scroll-messages"].getScrollProcess(),
              v = _this14$$refs$vueScr.v,
              h = _this14$$refs$vueScr.h;

          if (v > 0.5) {
            _this14.scrollToLatestMessages();
          } else {
            _this14.showScrollToLatestBtn = true;
            _this14.newUnreadMessageOnFeed = true;
          }
        }, 300);
      }
    },
    doInit: function doInit() {
      var _this15 = this;

      this.initialNewMessage = _.cloneDeep(this.newMessage);

      if (this.activeChatRoom) {
        this.goToConversation({
          room: this.activeChatRoom
        });
      } else if (this.activeChatUser) {
        this.goToConversation({
          user: this.activeChatUser
        });
      } else {
        this.fetchRooms();
      }

      setTimeout(function () {
        _this15.showChatOptions = _this15.boxVisibility;
      }, 1000);
    }
  }),
  mounted: function mounted() {
    var _this16 = this;

    setTimeout(function () {
      _this16.isBoxShown = _this16.boxVisibility;
    }, 100);
    setTimeout(function () {
      _this16.doInit();
    }, 200);
  },
  created: function created() {},
  beforeDestroy: function beforeDestroy() {
    if (window.Echo && window.EchoOpts) {
      if (window.EchoOpts.subscriptions && window.EchoOpts.subscriptions.chatRoom) {
        window.EchoOpts.subscriptions.chatRoom.stopListening('ChatMessageSentToRoom');
        window.EchoOpts.subscriptions.chatRoom = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/message-item.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/message-item.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    message: {
      type: Object,
      required: true
    },
    fileIcons: {
      type: Object,
      required: true
    },
    fileMimeTypes: {
      type: Object,
      required: true
    },
    vars: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      messageStatusIcons: {
        'sending': 'far fa-clock',
        'sent': 'fas fa-check',
        'delivered': 'fas fa-check-double',
        'read': 'fas fa-check-double',
        'error': 'fas fa-exclamation-triangle'
      }
    };
  },
  computed: {
    hasAttachment: function hasAttachment() {
      return !this.message.message && this.message.attachments && this.message.attachments.length;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/room-item.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/room-item.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    room: {
      type: Object,
      required: true
    },
    roomName: {
      type: String,
      required: true
    },
    vars: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  computed: {
    computedAvatar: function computedAvatar() {
      return this.room.isGroup || !this.room.member ? this.room : this.room.member;
    }
  },
  methods: {
    goToConversation: function goToConversation() {
      if (this.room.isGroup || this.room.member) {
        this.$emit('goToConversation', {
          room: this.room,
          user: null
        });
      } else {
        this.$emit('goToConversation', {
          room: null,
          user: this.room
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/settings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/settings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _mixins_config_form__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    activeContainer: {
      type: String,
      "default": 'home',
      required: true
    }
  },
  watch: {
    activeContainer: function activeContainer(newVal, oldVal) {
      if (newVal === 'settings' && newVal !== oldVal) {
        this.formData = Object.assign({}, this.formData, _.cloneDeep(this.initialFormData));
      }
    }
  },
  data: function data() {
    return {
      now: moment(),
      formData: {
        autoOpen: false,
        enterToSubmit: false,
        muteSoundNotification: false,
        type: 'chat'
      }
    };
  },
  methods: {
    afterSubmitSuccess: function afterSubmitSuccess() {
      this.$emit('goHome');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/Notification.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/widgets/Notification.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
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
  name: "notification-widget",
  props: {
    reload: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      isLoading: false
    };
  },
  watch: {
    reload: function reload(newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.getInitialData();
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['vars'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', ['notifications'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('user', ['GetNotifications'])), {}, {
    notificationClick: function notificationClick(notification) {
      debugger; // tis.$router.push({  })
    },
    toggleNotification: function toggleNotification(notification) {
      var _this = this;

      this.isLoading = true;
      this.Custom({
        url: 'utility/notifications/' + notification.uuid + '/status',
        method: 'post'
      }).then(function (response) {
        notification.status = !notification.status;
        _this.isLoading = false;
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = formUtil.handleErrors(error);
      });
    },
    getInitialData: function getInitialData() {
      var _this2 = this;

      this.isLoading = true;
      this.GetNotifications().then(function (response) {
        _this2.resetVueScroll();

        _this2.isLoading = false;
      })["catch"](function (error) {
        _this2.isLoading = false;
        _this2.formErrors = formUtil.handleErrors(error);
      });
    },
    resetVueScroll: function resetVueScroll() {
      var _this3 = this;

      setTimeout(function () {
        if (_this3.$refs['vuescrollNotification']) {
          _this3.$refs['vuescrollNotification'].scrollTo({
            x: 0,
            y: 0
          }, true);
        }
      }, 100);
    }
  }),
  mounted: function mounted() {
    this.getInitialData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/Todo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/widgets/Todo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/store */ "./resources/js/store/index.js");
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



var vars = _js_store__WEBPACK_IMPORTED_MODULE_2__["default"].getters['config/vars'];
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "todo-widget",
  props: {
    reload: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      todos: [],
      formData: {
        title: '',
        date: moment().format(vars.serverDateFormat)
      },
      formErrors: {},
      isLoading: false
    };
  },
  watch: {
    reload: function reload(newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        this.getInitialData();
      }
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('config', ['vars'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('common', ['others'])), {}, {
    incompletedTasksCount: function incompletedTasksCount() {
      return this.others ? this.others.todos.filter(function (t) {
        return !t.status;
      }).length : 0;
    },
    date: function date() {
      return moment(this.formData.date, this.vars.serverDateFormat).format('dddd, Do');
    },
    month: function month() {
      return moment(this.formData.date, this.vars.serverDateFormat).format('MMMM');
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('common', ['Custom', 'SetOthers'])), {}, {
    submit: function submit() {
      var _this = this;

      if (!this.formData.title) {
        this.$toasted.info(this.$t('general.nothing_changed'), this.$toastConfig.info);
        return false;
      }

      this.isLoading = true;
      this.Custom({
        url: 'utility/todos',
        method: 'post',
        data: this.formData
      }).then(function (response) {
        var todos = _this.others.todos;
        todos.unshift(response.todo);

        _this.SetOthers({
          todos: todos
        });

        _this.resetVueScroll();

        _this.$toasted.success(response.message, _this.$toastConfig);

        _this.formData.title = '';
        _this.isLoading = false;
        _js_event_bus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit('REFRESH_TABLE', 'appUtilityTodoList');
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = formUtil.handleErrors(error);
      });
    },
    toggleTodo: function toggleTodo(todo) {
      var _this2 = this;

      this.isLoading = true;
      this.Custom({
        url: 'utility/todos/' + todo.uuid + '/status',
        method: 'post'
      }).then(function (response) {
        todo.status = !todo.status;
        var todos = _this2.others.todos;

        _this2.SetOthers({
          todos: todos
        });

        _this2.$toasted.success(response.message, _this2.$toastConfig);

        _this2.isLoading = false;
        _js_event_bus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit('REFRESH_TABLE', 'appUtilityTodoList');
      })["catch"](function (error) {
        _this2.isLoading = false;
        _this2.formErrors = formUtil.handleErrors(error);
      });
    },
    getInitialData: function getInitialData() {
      var _this3 = this;

      this.isLoading = true;
      this.Custom({
        url: 'utility/todos?type=list&sort_by=due_date,status&order=desc,asc&date=' + this.formData.date,
        method: 'get'
      }).then(function (response) {
        _this3.SetOthers({
          todos: response
        });

        _this3.resetVueScroll();

        _this3.isLoading = false;
      })["catch"](function (error) {
        _this3.isLoading = false;
        _this3.formErrors = formUtil.handleErrors(error);
      });
    },
    getNextTodo: function getNextTodo() {
      this.formData.date = moment(this.formData.date, this.vars.serverDateFormat).add(1, 'days').format(this.vars.serverDateFormat);
      this.getInitialData();
    },
    getPreviousTodo: function getPreviousTodo() {
      this.formData.date = moment(this.formData.date, this.vars.serverDateFormat).subtract(1, 'days').format(this.vars.serverDateFormat);
      this.getInitialData();
    },
    resetVueScroll: function resetVueScroll() {
      var _this4 = this;

      setTimeout(function () {
        if (_this4.$refs['vuescrollTodo']) {
          _this4.$refs['vuescrollTodo'].scrollTo({
            x: 0,
            y: 0
          }, true);
        }
      }, 100);
    }
  }),
  mounted: function mounted() {
    this.getInitialData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/app-layout.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/app-layout.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_app_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/app-components */ "./resources/js/app-components.js");
/* harmony import */ var _partials_app_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/app-container */ "./resources/js/views/layouts/partials/app-container.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AppLayout',
  components: {
    AppContainer: _partials_app_container__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      scrollTopPosition: 0
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['scrollLock'])),
  watch: {
    $route: function $route(to, from) {
      var _this = this;

      setTimeout(function () {
        _this.$refs['vuescrollAppLayout'].scrollTo({
          x: 0,
          y: 0
        }, true);
      }, 100);
    },
    scrollLock: function scrollLock(val, oldVal) {
      if (val) {
        this.scrollLockEnable();
      } else {
        this.scrollLockDisable();
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('config', ['ScrollLock', 'ScrollUnlock'])), {}, {
    scrollLockEnable: function scrollLockEnable() {
      var toLock = this.$refs.appContainer.$el;
      var scrollPosition = this.$refs["vuescrollAppLayout"].getPosition();
      this.scrollTopPosition = scrollPosition.scrollTop;
      toLock.style.overflow = 'hidden';
      toLock.style.position = 'fixed';
      toLock.style.top = "-".concat(this.scrollTopPosition, "px");
    },
    scrollLockDisable: function scrollLockDisable() {
      var toLock = this.$refs.appContainer.$el;
      toLock.style.removeProperty('overflow');
      toLock.style.removeProperty('position');
      toLock.style.removeProperty('top');
      this.$refs["vuescrollAppLayout"].scrollBy({
        y: this.scrollTopPosition
      }, 0);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-container.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-container.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_live__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/live */ "./resources/js/mixins/live.js");
/* harmony import */ var _js_echo_setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/echo-setup */ "./resources/js/echo-setup.js");
/* harmony import */ var _core_utils_keyBindings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/keyBindings */ "./resources/js/core/utils/keyBindings.js");
/* harmony import */ var _js_helpers_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js/helpers/notification */ "./resources/js/helpers/notification.js");
/* harmony import */ var _core_utils_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/formatter */ "./resources/js/core/utils/formatter.js");
/* harmony import */ var _app_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-navbar */ "./resources/js/views/layouts/partials/app-navbar.vue");
/* harmony import */ var _app_sidebar_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-sidebar-config */ "./resources/js/views/layouts/partials/app-sidebar-config.vue");
/* harmony import */ var _app_sidebar_special__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-sidebar-special */ "./resources/js/views/layouts/partials/app-sidebar-special.vue");
/* harmony import */ var _app_sidebar_left__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-sidebar-left */ "./resources/js/views/layouts/partials/app-sidebar-left.vue");
/* harmony import */ var _app_sidebar_right__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-sidebar-right */ "./resources/js/views/layouts/partials/app-sidebar-right.vue");
/* harmony import */ var _app_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-footer */ "./resources/js/views/layouts/partials/app-footer.vue");
/* harmony import */ var _sidebar_menu_app_sidebar_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar-menu/app-sidebar-menu */ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu.vue");
/* harmony import */ var _components_AppBackdrop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/AppBackdrop */ "./resources/js/components/AppBackdrop.vue");
/* harmony import */ var _components_AppSearch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/AppSearch */ "./resources/js/components/AppSearch.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
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
















/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _mixins_live__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    AppBackdrop: _components_AppBackdrop__WEBPACK_IMPORTED_MODULE_12__["default"],
    AppSearch: _components_AppSearch__WEBPACK_IMPORTED_MODULE_13__["default"],
    AppNavbar: _app_navbar__WEBPACK_IMPORTED_MODULE_5__["default"],
    AppSidebarConfig: _app_sidebar_config__WEBPACK_IMPORTED_MODULE_6__["default"],
    AppSidebarSpecial: _app_sidebar_special__WEBPACK_IMPORTED_MODULE_7__["default"],
    AppSidebarLeft: _app_sidebar_left__WEBPACK_IMPORTED_MODULE_8__["default"],
    AppSidebarRight: _app_sidebar_right__WEBPACK_IMPORTED_MODULE_9__["default"],
    AppSidebarMenu: _sidebar_menu_app_sidebar_menu__WEBPACK_IMPORTED_MODULE_11__["default"],
    AppFooter: _app_footer__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      lockinMessage: null,
      lockinTime: null,
      showingLockinModal: false,
      shortcuts: {// key83: 'appProductAbout', // 83 = s => Student
        // key68: 'appDashboard', // 68 = d => Dashboard
      },
      offlineToast: null
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_14__["mapGetters"])('config', ['configs', 'uiConfigs', 'vars', 'appIsLoading'])), Object(vuex__WEBPACK_IMPORTED_MODULE_14__["mapGetters"])('user', ['locked', 'lockin', 'uuid', 'loggedInUser', 'liveUsers'])),
  watch: {
    locked: function locked(newVal, oldVal) {
      if (newVal) {
        this.$refs.lockinModal.hide();
        this.lockinTime = null;
        this.lockinMessage = null;
        var toPath = this.$route.fullPath;
        this.$router.push({
          name: 'authLock',
          query: {
            ref: toPath
          }
        });
      }
    },
    lockin: function lockin(newVal, oldVal) {
      if (newVal) {
        this.lockinTime = newVal.time;
        this.lockinMessage = newVal.unit;
        this.lockinMessage = newVal.time + ' ' + newVal.unit;
        this.showLockinModal(newVal);
      }
    },
    isOnline: function isOnline(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal) {
          if (this.offlineToast) {
            this.offlineToast.goAway();
          }

          this.$toasted.success($t('general.online_message'), this.$toastConfig.success);
        } else {
          this.offlineToast = this.$toasted.error($t('general.offline_message'), _objectSpread(_objectSpread({}, this.$toastConfig.error), {}, {
            duration: null
          }));
        }
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_14__["mapActions"])('config', ['SetUiConfig', 'SetAppIsLoading'])), {}, {
    handleNotificationClick: function handleNotificationClick(linkTo) {
      if (linkTo) {
        this.$notify({
          group: 'app',
          clean: true
        });
        this.$router.push(linkTo);
      }
    },
    showSearchScreen: function showSearchScreen() {
      this.SetUiConfig({
        searchScreenShow: !this.uiConfigs.searchScreenShow
      });
    },
    handleHotKeyPressed: function handleHotKeyPressed(key) {
      var routeName = 'key' + key;

      if (this.shortcuts.hasOwnProperty(routeName)) {
        this.$router.push({
          name: this.shortcuts[routeName]
        });
      }
    },
    showLockinModal: function showLockinModal(lockin) {
      var timer;
      var vm = this;
      vm.lockinTime = lockin.time;
      timer = setInterval(function () {
        vm.lockinTime--;

        if (vm.lockinTime < 1 && timer) {
          clearInterval(timer);
        }

        vm.lockinMessage = vm ? vm.lockinTime + ' ' + lockin.unit : '';
      }, 1000);
      vm.showingLockinModal = true;
      this.$gaEvent('activity', 'lockingScreen', 'Timer');
    },
    onLockinModalCancel: function onLockinModalCancel(e) {
      this.SetLastActivity();
      this.showingLockinModal = false;
      this.$gaEvent('engagement', 'lockingScreen', 'Cancelled');
    },
    onLockinModalHidden: function onLockinModalHidden() {
      this.SetLastActivity();
      this.showingLockinModal = false;
      this.$gaEvent('engagement', 'lockingScreen', 'Cancelled');
    },
    socketSubscriptionCallback: function socketSubscriptionCallback(notification) {
      var _this = this;

      notification = Object(_core_utils_formatter__WEBPACK_IMPORTED_MODULE_4__["formatKeysToCamelCase"])(notification);
      console.log(notification);

      var toastObj = _objectSpread({}, this.$toastConfig.info);

      var onActionClick = function onActionClick(toastObject) {
        _this.$toasted.clear(); // toastObject.goAway(0)

      };

      if (notification.action === 'navigate') {
        var routeName = _js_helpers_notification__WEBPACK_IMPORTED_MODULE_3__["nRoutes"][notification.module][notification.event] ? _js_helpers_notification__WEBPACK_IMPORTED_MODULE_3__["nRoutes"][notification.module][notification.event] : 'appDashboard';

        onActionClick = function onActionClick(toastObject) {
          // toastObject.goAway(0)
          _this.$toasted.clear();

          _this.$router.push({
            name: routeName
          })["catch"](function (err) {});
        };
      } else {
        if (_js_helpers_notification__WEBPACK_IMPORTED_MODULE_3__["nActions"][notification.command]) {
          onActionClick = function onActionClick(toastObject) {
            _this.$toasted.clear(); // toastObject.goAway(0)


            _js_helpers_notification__WEBPACK_IMPORTED_MODULE_3__["nActions"][notification.command](_this.$router);
          };
        }
      }

      toastObj.action = {
        text: notification.actionLabel || 'OK!',
        onClick: function onClick(e, toastObject) {
          onActionClick(toastObject);
        } // push: {
        //     name: nRoutes[notification.module][notification.event],
        // },

      };
      this.$toasted.clear();

      if (!notification.autoAction || notification.autoAction && !notification.hideToast) {
        this.$toasted.info(notification.title, toastObj);
      }

      if (notification.autoAction) {
        var toastdInstance = setTimeout(function () {
          onActionClick();
        }, notification.autoDelay || 1000);
      }
    }
  }),
  mounted: function mounted() {
    var _this2 = this;

    this.SetAppIsLoading(false);
    this.SetUiConfig({
      pageHeaderShow: true,
      pageFooterShow: true
    });
    document.body.classList.add("body-bg-" + this.uiConfigs.pageBackgroundColor);

    if (this.configs.chat && this.configs.chat.enabled && this.configs.chat.autoOpen) {
      window.setTimeout(function () {
        _this2.isChatBoxShown = true;
      }, 1500);
    }
  },
  created: function created() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_15__["default"].$off('HOTKEY_PRESSED', this.handleHotKeyPressed);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_15__["default"].$on('HOTKEY_PRESSED', this.handleHotKeyPressed);
    var listener = _core_utils_keyBindings__WEBPACK_IMPORTED_MODULE_2__["default"].keyupListener.bind(this);
    document.removeEventListener('keyup', listener, true);
    document.addEventListener('keyup', listener, true);
  },
  beforeDestroy: function beforeDestroy() {},
  destroyed: function destroyed() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_15__["default"].$off('HOTKEY_PRESSED', this.handleHotKeyPressed);
    document.body.classList.remove("body-bg-" + this.uiConfigs.pageBackgroundColor);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-footer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-footer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['footerCredit', 'version']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-navbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-navbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AppLogo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/AppLogo */ "./resources/js/components/AppLogo.vue");
/* harmony import */ var _components_widgets_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/widgets/Todo */ "./resources/js/components/widgets/Todo.vue");
/* harmony import */ var _components_widgets_Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/widgets/Notification */ "./resources/js/components/widgets/Notification.vue");
/* harmony import */ var vue_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-avatar */ "./node_modules/vue-avatar/dist/vue-avatar.min.js");
/* harmony import */ var vue_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_6__);
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






 // import { unregisterModules } from '@js/store/dynamic'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppLogo: _components_AppLogo__WEBPACK_IMPORTED_MODULE_0__["default"],
    Avatar: vue_avatar__WEBPACK_IMPORTED_MODULE_3___default.a,
    TodoWidget: _components_widgets_Todo__WEBPACK_IMPORTED_MODULE_1__["default"],
    NotificationWidget: _components_widgets_Notification__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      userDropddownOpen: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])('config', ['configs', 'uiConfigs', 'vars'])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])('user', {
    getUserDetails: 'get',
    hasRole: 'hasRole',
    hasPermission: 'hasPermission',
    loggedInUser: 'loggedInUser'
  })),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])('config', ['SetUiConfig'])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])('user', ['Logout', 'Lock'])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])('common', ['Custom'])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])('navigation', ['Generate'])), {}, {
    toggleSearchScreen: function toggleSearchScreen() {
      this.$gaEvent('engagement', 'toggleSearchScreen', this.uiConfigs.searchScreenShow ? 'hide' : 'show');
      this.SetUiConfig({
        searchScreenShow: !this.uiConfigs.searchScreenShow
      });
    },
    toggleLeftSidebar: function toggleLeftSidebar() {
      this.SetUiConfig({
        leftSidebarShow: !this.uiConfigs.leftSidebarShow
      });
    },
    toggleRightSidebar: function toggleRightSidebar() {
      this.SetUiConfig({
        rightSidebarShow: !this.uiConfigs.rightSidebarShow
      });
    },
    toggleConfigSidebar: function toggleConfigSidebar() {
      this.SetUiConfig({
        configSidebarShow: !this.uiConfigs.configSidebarShow
      });
    },
    toggleFullScreen: function toggleFullScreen(to) {
      if (screenfull__WEBPACK_IMPORTED_MODULE_5___default.a.isEnabled) {
        if (to) {
          screenfull__WEBPACK_IMPORTED_MODULE_5___default.a.request();
        } else {
          screenfull__WEBPACK_IMPORTED_MODULE_5___default.a.exit();
        }
      }
    },
    lock: function lock() {
      this.$gaEvent('engagement', 'lockScreen', 'Navbar');
      this.Lock();
    },
    logout: function logout() {
      var _this = this;

      this.$gaEvent('engagement', 'logout', 'Navbar');
      this.Logout().then(function (response) {
        _this.$gaEvent('activity', 'loggedout'); // unregisterModules()
        // this.$toasted.success(response.message, this.$toastConfig)


        _this.$router.push({
          name: 'login',
          query: {
            logout: 'true'
          }
        });
      });
    },
    takeScreenshot: function takeScreenshot() {
      this.userDropddownOpen = !this.userDropddownOpen;
      Vue.nextTick().then(function () {
        html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(document.querySelector(".__view"), {
          logging: false
        }).then(function (canvas) {
          document.querySelector("#screenshot").innerHTML = '';
          document.querySelector("#screenshot").appendChild(canvas);
          document.querySelector("#screenshotWrapper").classList.add("show");
        });
      });
    }
  }),
  mounted: function mounted() {
    var _this2 = this;

    if (screenfull__WEBPACK_IMPORTED_MODULE_5___default.a.isEnabled) {
      screenfull__WEBPACK_IMPORTED_MODULE_5___default.a.on('change', function () {
        _this2.SetUiConfig({
          fullScreen: screenfull__WEBPACK_IMPORTED_MODULE_5___default.a.isFullscreen
        });
      });
      screenfull__WEBPACK_IMPORTED_MODULE_5___default.a.on('error', function (event) {
        console.error('Failed to enable fullscreen', event);
      });
      this.SetUiConfig({
        fullScreen: false
      });
    }
  },
  destroyed: function destroyed() {
    if (screenfull__WEBPACK_IMPORTED_MODULE_5___default.a.isEnabled) {
      screenfull__WEBPACK_IMPORTED_MODULE_5___default.a.off('change');
      screenfull__WEBPACK_IMPORTED_MODULE_5___default.a.off('error');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-config-component-box.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-sidebar-config-component-box.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
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
  props: ["heading"],
  components: {
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCollapse"]
  },
  data: function data() {
    return {
      isOpen: false
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AppSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/AppSidebar */ "./resources/js/components/AppSidebar.vue");
/* harmony import */ var _app_sidebar_config_component_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-sidebar-config-component-box */ "./resources/js/views/layouts/partials/app-sidebar-config-component-box.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppSidebar: _components_AppSidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppSidebarConfigComponentBox: _app_sidebar_config_component_box__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('config', ['uiConfigs', 'uiConfigComponents'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('config', ['SetUiConfig'])), {}, {
    setConfiguration: function setConfiguration(key, value, actions, dispatches) {
      var _this = this;

      var tempObj = {};
      tempObj[key] = value;
      this.SetUiConfig(tempObj);

      if (actions) {
        for (var actionKey in actions) {
          var _tempObj = {};
          _tempObj[actionKey] = actions[actionKey];
          this.SetUiConfig(_tempObj);
        }
      }

      if (dispatches) {
        dispatches.forEach(function (dispatchName) {
          _this.$store.dispatch(dispatchName);
        });
      }
    },
    toggleConfigSidebar: function toggleConfigSidebar() {
      this.SetUiConfig({
        configSidebarShow: !this.uiConfigs.configSidebarShow
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AppSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/AppSidebar */ "./resources/js/components/AppSidebar.vue");
/* harmony import */ var _components_AppLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/AppLogo */ "./resources/js/components/AppLogo.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppSidebar: _components_AppSidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppLogo: _components_AppLogo__WEBPACK_IMPORTED_MODULE_1__["default"],
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCollapse"]
  },
  data: function data() {
    return {
      lastStyle: '',
      currentScrollPosition: {
        x: 0,
        y: 0
      },
      lastScrollPosition: {
        x: 0,
        y: 0
      },
      isCollapseOpen: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])('config', ['uiConfigs'])), Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])('user', {
    profile: 'profile'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])('config', {
    showPin: function showPin(state) {
      return state.ui.leftSidebarHeight === 'full' && (state.ui.leftSidebarStyle === 'over' || state.ui.leftSidebarStyle === 'folded');
    },
    showUnpin: function showUnpin(state) {
      return state.ui.leftSidebarHeight === 'full' && state.ui.leftSidebarStyle === 'push-content';
    },
    thumbRight: function thumbRight(state) {
      return state.ui.leftSidebarStyle === "folded" || state.ui.navMenuThumbOnRight;
    }
  })), {}, {
    sidebarStyle: function sidebarStyle() {
      if (this.uiConfigs.leftSidebarColor === 'wallpaper') {
        if (this.uiConfigs.wallpaper) {
          return {
            '--bg-image': "url(".concat(this.uiConfigs.wallpaper.urls.regular, ")")
          };
        } else {
          this.$store.dispatch('config/getWallpaper');
        }
      }

      return {
        '--bg-image': ''
      };
    },
    sidebarOpen: function sidebarOpen() {
      return this.uiConfigs.leftSidebarShow;
    }
  }),
  watch: {
    sidebarOpen: function sidebarOpen(v) {
      var _this = this;

      setTimeout(function () {
        _this.isCollapseOpen = v;
      }, 150);
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])('config', ['SetUiConfig'])), {}, {
    pinSidebar: function pinSidebar() {
      this.lastStyle = this.uiConfigs.leftSidebarStyle;
      this.SetUiConfig({
        leftSidebarStyle: 'push-content'
      });
      this.SetUiConfig({
        leftSidebarBackdrop: false
      });
      this.SetUiConfig({
        leftSidebarShadow: false
      });
    },
    unpinSidebar: function unpinSidebar() {
      this.SetUiConfig({
        leftSidebarStyle: this.lastStyle || 'folded'
      });
      this.SetUiConfig({
        leftSidebarBackdrop: true
      });
      this.SetUiConfig({
        leftSidebarShadow: true
      });
    },
    showSidebar: function showSidebar() {
      var _this2 = this;

      this.SetUiConfig({
        leftSidebarShow: true
      });
      setTimeout(function () {
        if (_this2.$refs.vuescrollSidebarLeft) {
          _this2.$refs.vuescrollSidebarLeft.scrollTo(_this2.lastScrollPosition, {
            speed: 100,
            easing: 'easeInOutCubic'
          });
        }
      }, 100);
    },
    handleScroll: function handleScroll(vertical, horizontal, nativeEvent) {
      this.currentScrollPosition.x = horizontal;
      this.currentScrollPosition.y = vertical;
    },
    hideSidebar: function hideSidebar() {
      var _this3 = this;

      this.SetUiConfig({
        leftSidebarShow: false
      });
      setTimeout(function () {
        _this3.lastScrollPosition.x = _this3.currentScrollPosition.x.scrollLeft;
        _this3.lastScrollPosition.y = _this3.currentScrollPosition.y.scrollTop;

        if (_this3.$refs.vuescrollSidebarLeft) {
          _this3.$refs.vuescrollSidebarLeft.scrollTo({
            x: 0,
            y: 0
          }, {
            speed: 100,
            easing: 'easeInOutCubic'
          });
        }
      }, 100);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AppSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/AppSidebar */ "./resources/js/components/AppSidebar.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppSidebar: _components_AppSidebar__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      topic: null,
      content: '',
      isLoading: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('config', ['uiConfigs', 'vars'])),
  watch: {
    topic: function topic(value, oldValue) {
      this.getHelpContent();
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('config', ['SetUiConfig'])), {}, {
    toggleSidebar: function toggleSidebar(topic) {
      this.SetUiConfig({
        rightSidebarShow: !this.uiConfigs.rightSidebarShow
      });

      if (topic) {
        this.topic = topic;
        this.content = '';
      }
    }
  }),
  mounted: function mounted() {
    this.SetUiConfig({
      rightSidebarShow: false
    });
    _js_event_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$off('TOGGLE_HELP', this.toggleSidebar);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$on('TOGGLE_HELP', this.toggleSidebar);
  },
  destroyed: function destroyed() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$off('TOGGLE_HELP', this.toggleSidebar);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AppSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/AppSidebar */ "./resources/js/components/AppSidebar.vue");
//
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
    AppSidebar: _components_AppSidebar__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_sidebar_menu_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sidebar-menu-item */ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu-item.vue");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MenuItem: _app_sidebar_menu_item__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('navigation', ['permittedNavigations'])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('config', ['uiConfigs'])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('config', {
    thumbOnRight: function thumbOnRight(state) {
      return state.ui.leftSidebarStyle === "folded" || state.ui.navMenuThumbOnRight;
    }
  })),
  methods: {
    resolvePath: function resolvePath(parentPath, itemPath) {
      return path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(parentPath, itemPath);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppBackdrop.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppBackdrop.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, ".backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1031;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.3) !important;\n  transition: opacity 0.25s, transform 0s 0.25s;\n  transform: translate3d(100%, 0px, 0px);\n}\n.backdrop.fade {\n  display: block;\n}\n.backdrop.in {\n  opacity: 0.35;\n}\n.backdrop.backdrop-left-sidebar {\n  z-index: 1035;\n}\n.backdrop.backdrop-right-sidebar {\n  z-index: 1038;\n}\n.backdrop.backdrop-config-sidebar {\n  z-index: 1039;\n}\n.backdrop.backdrop-modal-sidebar {\n  z-index: 1040;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSearch.vue?vue&type=style&index=0&id=5b9fdcce&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppSearch.vue?vue&type=style&index=0&id=5b9fdcce&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, "@charset \"UTF-8\";\n.app-search-screen[data-v-5b9fdcce] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.9);\n  z-index: 1050;\n  padding: 30px 60px;\n}\n.app-search-screen .app-search-wrapper[data-v-5b9fdcce] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: top;\n  align-items: left;\n}\n.app-search-screen .app-search-wrapper .search-input-wrapper[data-v-5b9fdcce] {\n  margin-bottom: 30px;\n}\n.app-search-screen .app-search-wrapper .search-input-wrapper .search-input[data-v-5b9fdcce] {\n  margin-bottom: 15px;\n}\n.app-search-screen .app-search-wrapper .search-input-wrapper .search-input .input-group-prepend[data-v-5b9fdcce] {\n  margin-right: 1rem;\n}\n.app-search-screen .app-search-wrapper .search-input-wrapper .search-input .form-control[data-v-5b9fdcce],\n.app-search-screen .app-search-wrapper .search-input-wrapper .search-input .input-group-prepend > .input-group-text[data-v-5b9fdcce] {\n  font-size: 2rem;\n  font-weight: 600;\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n.app-search-screen .app-search-wrapper .search-input-wrapper .search-input .form-control[data-v-5b9fdcce] {\n  display: block;\n  padding: 0;\n}\n.app-search-screen .app-search-wrapper .search-input-wrapper .search-input .form-control[data-v-5b9fdcce]:hover, .app-search-screen .app-search-wrapper .search-input-wrapper .search-input .form-control[data-v-5b9fdcce]:focus, .app-search-screen .app-search-wrapper .search-input-wrapper .search-input .form-control[data-v-5b9fdcce]:active {\n  outline: none;\n}\n.app-search-screen .app-search-wrapper .search-suggestions[data-v-5b9fdcce] {\n  margin-bottom: 15px;\n}\n.app-search-screen .app-search-wrapper .search-suggestions ul.suggestions-list[data-v-5b9fdcce] {\n  display: inline-block;\n}\n.app-search-screen .app-search-wrapper .search-suggestions ul.suggestions-list > li[data-v-5b9fdcce] {\n  display: inline-block;\n  cursor: pointer;\n}\n.app-search-screen .app-search-wrapper .search-suggestions ul.suggestions-list > li[data-v-5b9fdcce]:after {\n  content: \", \";\n}\n.app-search-screen .app-search-wrapper .search-suggestions ul.suggestions-list > li[data-v-5b9fdcce]:last-child:after {\n  content: \"\";\n}\n.app-search-screen .app-search-wrapper .search-results-wrapper[data-v-5b9fdcce] {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  height: 75vh;\n  max-height: 75vh;\n}\n.app-search-screen .app-search-wrapper .search-results-wrapper .search-results-sections[data-v-5b9fdcce] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: stretch;\n  padding-bottom: 100px;\n}\n.app-search-screen .app-search-wrapper .search-results-wrapper .search-results-section[data-v-5b9fdcce] {\n  flex: 1;\n  margin-right: 1.5rem;\n  margin-bottom: 3rem;\n  flex-basis: 22%;\n  max-width: 32%;\n}\n.app-search-screen .app-search-wrapper .search-results-wrapper .search-results-section h3.section-title[data-v-5b9fdcce] {\n  margin-bottom: 15px;\n}\n.app-search-screen .app-search-wrapper .search-results-wrapper .search-results-section .search-results-list[data-v-5b9fdcce] {\n  list-style: none;\n  padding: 0;\n}\n.app-search-screen .app-search-wrapper .search-results-wrapper .search-results-section .search-results-list .search-result-item a[data-v-5b9fdcce] {\n  display: block;\n  padding: 0.5rem 0;\n  padding-left: 0.5rem;\n}\n.app-search-screen .app-search-wrapper .search-results-wrapper .search-results-section .search-results-list .search-result-item a[data-v-5b9fdcce]:before {\n  content: \"\\BB\";\n  margin-right: 0.2rem;\n}\n.app-search-screen .app-search-wrapper .search-results-wrapper .search-results-section .search-results-list .search-result-item a[data-v-5b9fdcce]:hover, .app-search-screen .app-search-wrapper .search-results-wrapper .search-results-section .search-results-list .search-result-item a[data-v-5b9fdcce]:focus, .app-search-screen .app-search-wrapper .search-results-wrapper .search-results-section .search-results-list .search-result-item a[data-v-5b9fdcce]:active {\n  background: rgba(0, 20, 40, 0.08);\n}\n.app-search-screen .app-search-wrapper .search-results-wrapper .search-results-section .search-results-list .search-result-item a[data-v-5b9fdcce]:active, .app-search-screen .app-search-wrapper .search-results-wrapper .search-results-section .search-results-list .search-result-item a[data-v-5b9fdcce]:focus {\n  padding-left: 1.5rem;\n}\n.app-search-screen .app-search-wrapper .search-results-wrapper .search-results-section .search-results-list .search-result-item + .search-result-item[data-v-5b9fdcce] {\n  border-top: 0.0625rem solid #e9ecf1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, ".sidebar {\n  position: fixed;\n  top: 60px;\n  bottom: 0;\n  left: 0;\n  width: 300px;\n  height: calc(100%);\n  display: block;\n  overflow: hidden;\n  z-index: 1035;\n  transition: transform 0.2s ease;\n  transform: translate3d(-300px, 0, 0);\n  -webkit-user-select: none;\n  /* Chrome all / Safari all */\n  -moz-user-select: none;\n  /* Firefox all */\n  -ms-user-select: none;\n  /* IE 10+ */\n  user-select: none;\n  /* Likely future */\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n.sidebar .wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  height: calc(100%);\n  width: 330px;\n}\n.sidebar .wrapper .content {\n  height: calc(100%);\n  width: 300px;\n  margin-bottom: 90px;\n  position: relative;\n}\n@media (min-width: 992px) {\n.sidebar {\n    top: 60px;\n    width: 260px;\n    height: calc(100%);\n    transform: translate3d(-260px, 0, 0);\n    box-shadow: none;\n}\n.sidebar .wrapper {\n    width: 290px;\n}\n.sidebar .wrapper .content {\n    width: 260px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/settings.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/settings.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".settings-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-height: 100%;\n  overflow: hidden;\n}\n.settings-wrapper .settings {\n  display: flex;\n  flex-grow: 1;\n  justify-content: stretch;\n  align-items: stretch;\n  height: 100%;\n  max-height: 100%;\n  overflow: hidden;\n  position: relative;\n  padding: 0.85rem;\n  display: flex;\n  flex-direction: row;\n}\n.settings-wrapper .settings .switch-wrapper > .input-group-material-label {\n  padding-left: 0;\n}\n.settings-wrapper .settings-footer {\n  box-shadow: 0 -2px 6px 0 rgba(0, 0, 0, 0.4);\n  z-index: 1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/Notification.vue?vue&type=style&index=0&id=084dd3b6&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/widgets/Notification.vue?vue&type=style&index=0&id=084dd3b6&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, ".notification-widget .widget-wrapper[data-v-084dd3b6] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.notification-widget .widget-wrapper .widget-header[data-v-084dd3b6] {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  border-bottom: 0.0625rem solid #e9ecf1;\n}\n.notification-widget .widget-wrapper .widget-body[data-v-084dd3b6] {\n  overflow: hidden;\n  flex-grow: 1;\n}\n.notification-widget .widget-wrapper .widget-body .notification-list-wrapper[data-v-084dd3b6] {\n  max-height: 300px;\n  overflow: hidden;\n}\n.notification-widget .widget-wrapper .widget-body .notification-list-wrapper.fixed-height[data-v-084dd3b6] {\n  height: 300px;\n}\n.notification-widget .widget-wrapper .widget-body .notification-list[data-v-084dd3b6] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  list-style: none;\n  padding: 0;\n}\n.notification-widget .widget-wrapper .widget-body .notification-list .notification-item[data-v-084dd3b6] {\n  display: flex;\n  position: relative;\n  padding-left: 5px;\n  transition: all 0.2s ease-in-out;\n  min-height: 50px;\n}\n.notification-widget .widget-wrapper .widget-body .notification-list .notification-item[data-v-084dd3b6]:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  content: \"\";\n  background: rgba(0, 20, 40, 0.05);\n  transition: all 0.2s ease-in-out;\n}\n.notification-widget .widget-wrapper .widget-body .notification-list .notification-item[data-v-084dd3b6]:nth-child(even) {\n  background: rgba(0, 20, 40, 0.05);\n}\n.notification-widget .widget-wrapper .widget-body .notification-list .notification-item .notification-details[data-v-084dd3b6] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n.notification-widget .widget-wrapper .widget-body .notification-list .notification-item .notification-details h6[data-v-084dd3b6] {\n  margin: 0;\n}\n.notification-widget .widget-wrapper .widget-body .notification-list .notification-item .notification-details p[data-v-084dd3b6] {\n  margin: 0;\n  margin-top: 0.5rem;\n}\n.notification-widget .widget-wrapper .widget-body .notification-list .notification-item .notification-details.completed h6[data-v-084dd3b6] {\n  color: #6c7580;\n  text-decoration: line-through;\n}\n.notification-widget .widget-wrapper .widget-body .notification-list .notification-item .notification-date[data-v-084dd3b6] {\n  display: flex;\n  padding: 5px 1px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.75rem;\n}\n.notification-widget .widget-wrapper .widget-body .notification-list .notification-item .notification-status[data-v-084dd3b6] {\n  display: flex;\n  padding: 5px 10px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.25rem;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  color: #dee2e9;\n}\n.notification-widget .widget-wrapper .widget-body .notification-list .notification-item[data-v-084dd3b6]:hover {\n  background: rgba(0, 20, 40, 0.1);\n}\n.notification-widget .widget-wrapper .widget-body .notification-list .notification-item[data-v-084dd3b6]:hover:before {\n  background: #0059FF;\n}\n.notification-widget .widget-wrapper .widget-body .notification-list .notification-item:hover .notification-status[data-v-084dd3b6] {\n  color: #0059FF;\n}\n.notification-widget .widget-wrapper .widget-footer[data-v-084dd3b6] {\n  display: flex;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/Todo.vue?vue&type=style&index=0&id=9dda1ede&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/widgets/Todo.vue?vue&type=style&index=0&id=9dda1ede&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, ".todo-widget .widget-wrapper[data-v-9dda1ede] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.todo-widget .widget-wrapper .widget-header[data-v-9dda1ede] {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  border-bottom: 0.0625rem solid #e9ecf1;\n}\n.todo-widget .widget-wrapper .widget-header .todo-date[data-v-9dda1ede] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.todo-widget .widget-wrapper .widget-header .todo-date h4[data-v-9dda1ede] {\n  margin: 0;\n}\n.todo-widget .widget-wrapper .widget-header .todo-date h6[data-v-9dda1ede] {\n  margin: 0;\n  color: #6c7580;\n}\n.todo-widget .widget-wrapper .widget-header .todo-meta[data-v-9dda1ede] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n  color: #6c7580;\n}\n.todo-widget .widget-wrapper .widget-header .todo-meta .todo-nav .btn-link[data-v-9dda1ede] {\n  padding: 0.5rem;\n  color: #6c7580;\n}\n.todo-widget .widget-wrapper .widget-header .todo-meta .todo-nav .btn-link[data-v-9dda1ede]:last-child {\n  padding-right: 0;\n}\n.todo-widget .widget-wrapper .widget-header .todo-meta .todo-nav .btn-link[data-v-9dda1ede]:hover {\n  color: #495060;\n}\n.todo-widget .widget-wrapper .widget-body[data-v-9dda1ede] {\n  overflow: hidden;\n  flex-grow: 1;\n}\n.todo-widget .widget-wrapper .widget-body .todo-list-wrapper[data-v-9dda1ede] {\n  max-height: 300px;\n  overflow: hidden;\n}\n.todo-widget .widget-wrapper .widget-body .todo-list-wrapper.fixed-height[data-v-9dda1ede] {\n  height: 300px;\n}\n.todo-widget .widget-wrapper .widget-body .todo-list[data-v-9dda1ede] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  list-style: none;\n  padding: 0;\n}\n.todo-widget .widget-wrapper .widget-body .todo-list .todo-item[data-v-9dda1ede] {\n  display: flex;\n  position: relative;\n  padding-left: 5px;\n  transition: all 0.2s ease-in-out;\n  min-height: 50px;\n}\n.todo-widget .widget-wrapper .widget-body .todo-list .todo-item[data-v-9dda1ede]:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  content: \"\";\n  background: rgba(0, 20, 40, 0.05);\n  transition: all 0.2s ease-in-out;\n}\n.todo-widget .widget-wrapper .widget-body .todo-list .todo-item[data-v-9dda1ede]:nth-child(even) {\n  background: rgba(0, 20, 40, 0.05);\n}\n.todo-widget .widget-wrapper .widget-body .todo-list .todo-item .todo-details[data-v-9dda1ede] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n.todo-widget .widget-wrapper .widget-body .todo-list .todo-item .todo-details h6[data-v-9dda1ede] {\n  margin: 0;\n}\n.todo-widget .widget-wrapper .widget-body .todo-list .todo-item .todo-details p[data-v-9dda1ede] {\n  margin: 0;\n  margin-top: 0.5rem;\n}\n.todo-widget .widget-wrapper .widget-body .todo-list .todo-item .todo-date[data-v-9dda1ede] {\n  display: flex;\n  padding: 5px 1px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.75rem;\n}\n.todo-widget .widget-wrapper .widget-body .todo-list .todo-item .todo-status[data-v-9dda1ede] {\n  display: flex;\n  padding: 5px 10px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.25rem;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  color: #dee2e9;\n}\n.todo-widget .widget-wrapper .widget-body .todo-list .todo-item[data-v-9dda1ede]:hover {\n  background: rgba(0, 20, 40, 0.1);\n}\n.todo-widget .widget-wrapper .widget-body .todo-list .todo-item[data-v-9dda1ede]:hover:before {\n  background: #0059FF;\n}\n.todo-widget .widget-wrapper .widget-body .todo-list .todo-item:hover .todo-status[data-v-9dda1ede] {\n  color: #0059FF;\n}\n.todo-widget .widget-wrapper .widget-body .todo-list .todo-item.completed[data-v-9dda1ede] {\n  opacity: 0.5;\n}\n.todo-widget .widget-wrapper .widget-body .todo-list .todo-item.completed .todo-details h6[data-v-9dda1ede] {\n  color: #6c7580;\n  text-decoration: line-through;\n}\n.todo-widget .widget-wrapper .widget-body .todo-list .todo-item.completed[data-v-9dda1ede]:hover {\n  opacity: 1;\n}\n.todo-widget .widget-wrapper .widget-footer[data-v-9dda1ede] {\n  display: flex;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-container.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-container.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, ".app-container {\n  min-height: 100%;\n}\n.app-footer {\n  padding-left: 30px;\n  padding-right: 30px;\n  transition: all 0.2s ease;\n}\n.screenshot-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999999;\n  background: rgba(0, 0, 0, 0.8);\n  opacity: 0.5;\n  transform: scale(0.5);\n  transition: all 0.2s ease-in-out;\n  transition-delay: 0.5s;\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n.screenshot-wrapper .screenshot {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem 1rem;\n}\n.screenshot-wrapper .screenshot canvas {\n  width: 85vw !important;\n  height: auto !important;\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);\n}\n.screenshot-wrapper.show {\n  display: block;\n  transform: scale(1);\n  opacity: 1;\n}\nbody.body-bg-primary, [data-page-background-color=primary] {\n  background-color: #0059FF;\n  color: #dee2e9;\n}\nbody.body-bg-light-primary, [data-page-background-color=light-primary] {\n  background-color: #4d8bff;\n  color: #dee2e9;\n}\nbody.body-bg-dark-primary, [data-page-background-color=dark-primary] {\n  background-color: #003eb3;\n  color: #dee2e9;\n}\nbody.body-bg-secondary, [data-page-background-color=secondary] {\n  background-color: #e00c51;\n  color: #6c7580;\n}\nbody.body-bg-dark-secondary, [data-page-background-color=dark-secondary] {\n  background-color: #970837;\n  color: #6c7580;\n}\nbody.body-bg-success, [data-page-background-color=success] {\n  background-color: #2dce89;\n  color: #dee2e9;\n}\nbody.body-bg-info, [data-page-background-color=info] {\n  background-color: #11cdef;\n  color: #dee2e9;\n}\nbody.body-bg-warning, [data-page-background-color=warning] {\n  background-color: #fb6340;\n  color: #dee2e9;\n}\nbody.body-bg-danger, [data-page-background-color=danger] {\n  background-color: #f5365c;\n  color: #dee2e9;\n}\nbody.body-bg-white, [data-page-background-color=white] {\n  background-color: #fff;\n  color: #6c7580;\n}\nbody.body-bg-whitish, [data-page-background-color=whitish] {\n  background-color: #fafbfd;\n  color: #6c7580;\n}\nbody.body-bg-light, [data-page-background-color=light] {\n  background-color: #dee2e9;\n  color: #6c7580;\n}\nbody.body-bg-dark, [data-page-background-color=dark] {\n  background-color: #6c7580;\n  color: #dee2e9;\n}\nbody.body-bg-gray-darker, [data-page-background-color=gray-darker] {\n  background-color: #495060;\n  color: #dee2e9;\n}\nbody.body-bg-gray-darkest, [data-page-background-color=gray-darkest] {\n  background-color: #212532;\n  color: #dee2e9;\n}\nbody.body-bg-black, [data-page-background-color=black] {\n  background-color: #000;\n  color: #dee2e9;\n}\nbody.body-bg-default-color, [data-page-background-color=default-color] {\n  background-color: #0a346d;\n  color: #dee2e9;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-navbar.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-navbar.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, "[data-top-navbar-fixed=true] .navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1031;\n  width: 100%;\n  padding-left: 10;\n  padding-right: 20px;\n  transition: all 0.2s ease;\n  transform: translate3d(0, 0, 0);\n}\n.navbar {\n  -webkit-user-select: none;\n  /* Chrome all / Safari all */\n  -moz-user-select: none;\n  /* Firefox all */\n  -ms-user-select: none;\n  /* IE 10+ */\n  user-select: none;\n  /* Likely future */\n}\n.navbar.navbar-design-basic {\n  min-height: 0;\n  height: 60px;\n}\n.navbar.navbar-design-basic .logo {\n  width: 150px;\n}\n.navbar.navbar-design-basic .nav .nav-item .warning-label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  background-color: #f5365c;\n  color: #dee2e9;\n}\n.navbar.navbar-design-basic .nav .nav-item .nav-link {\n  padding-left: 15px;\n  padding-right: 15px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: 0;\n}\n.navbar.navbar-design-basic .nav .nav-item .nav-link:active {\n  opacity: 0.6;\n}\n.navbar.navbar-design-basic .nav [data-toggle=dropdown] {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.navbar.navbar-design-basic .nav [data-toggle=dropdown]:active {\n  opacity: 0.6;\n}\n.navbar.navbar-design-basic .nav .dropdown.show .dropdown-menu {\n  margin-top: 0;\n  top: 46px;\n}\n.navbar.navbar-design-basic .nav button > i,\n.navbar.navbar-design-basic .nav .btn > i,\n.navbar.navbar-design-basic .nav .dropdown-item i {\n  margin: 0;\n}\n.navbar.navbar-design-basic .navbar-nav .nav-user-avatar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.navbar.navbar-design-basic .navbar-nav .nav-link {\n  padding-left: 15px;\n  padding-right: 15px;\n  display: flex;\n  align-items: center;\n  border-radius: 0;\n}\n.navbar.navbar-design-basic .navbar-nav .nav-link i {\n  margin-right: 0;\n}\n.navbar.navbar-design-basic .navbar-nav .nav-link.cta {\n  font-weight: bold !important;\n  letter-spacing: 0.8px;\n  font-size: 0.9rem !important;\n  text-transform: uppercase !important;\n  border-radius: 0.25rem;\n  padding: 0.5rem 0.75rem;\n}\n.navbar.navbar-design-basic .navbar-search-form {\n  flex: 0 0 200px;\n  margin-right: 15px;\n}\n.navbar.navbar-design-basic .navbar-search-form .form-group,\n.navbar.navbar-design-basic .navbar-search-form .input-group {\n  margin: 0;\n}\n.navbar.navbar-design-basic .navbar-search-form .form-group .input-group-prepend,\n.navbar.navbar-design-basic .navbar-search-form .input-group .input-group-prepend {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9;\n  height: 100%;\n}\n.navbar.navbar-design-basic .navbar-search-form .search-input .input-group-text {\n  background-color: transparent;\n}\n.navbar.navbar-design-basic .navbar-search-form .search-input .form-control {\n  padding-left: 40px;\n  border-radius: 0.25rem;\n  transition: all 0.2s ease;\n}\n.navbar.navbar-design-basic .navbar-search-form.search-button-wrapper {\n  padding: 18px;\n  padding-left: 15px;\n  transition: all 0.2s ease;\n  opacity: 0.4;\n  cursor: text;\n}\n.navbar.navbar-design-basic .navbar-search-form.search-button-wrapper .search-button {\n  border-left-style: solid;\n  border-left-width: 1px;\n  padding-left: 10px;\n}\n[data-top-navbar-color=primary] .navbar.navbar-design-basic {\n  background: #0059FF;\n  color: #dee2e9;\n}\n[data-top-navbar-color=primary] .navbar.navbar-design-basic .nav-link {\n  color: #dee2e9;\n}\n[data-top-navbar-color=primary] .navbar.navbar-design-basic .dropdown .dropdown-item a {\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=primary] .navbar.navbar-design-basic .input-group .input-group-addon,\n[data-top-navbar-color=primary] .navbar.navbar-design-basic .input-group .input-group-text {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  text-align: center;\n  background-clip: padding-box;\n}\n[data-top-navbar-color=primary] .navbar.navbar-design-basic .input-group .form-control {\n  color: #dee2e9;\n  background-color: #1f6dff;\n  border-color: #1f6dff;\n}\n[data-top-navbar-color=primary] .navbar-design-basic .navbar-nav .nav-link:hover, [data-top-navbar-color=primary] .navbar-design-basic .nav .nav-link:hover {\n  color: #fff;\n}\n[data-top-navbar-color=primary] .navbar-design-basic .navbar-nav .nav-link.cta, [data-top-navbar-color=primary] .navbar-design-basic .nav .nav-link.cta {\n  background: #e00c51;\n  color: white;\n}\n[data-top-navbar-color=primary] .navbar-design-basic .navbar-nav .nav-link.cta:hover, [data-top-navbar-color=primary] .navbar-design-basic .navbar-nav .nav-link.cta:focus, [data-top-navbar-color=primary] .navbar-design-basic .nav .nav-link.cta:hover, [data-top-navbar-color=primary] .navbar-design-basic .nav .nav-link.cta:focus {\n  background: #c80b48;\n  color: #fff;\n}\n[data-top-navbar-color=primary] .navbar-design-basic .navbar-nav .nav-link.cta:active, [data-top-navbar-color=primary] .navbar-design-basic .nav .nav-link.cta:active {\n  background: #b0093f;\n  color: #fff;\n}\n[data-top-navbar-color=primary] .navbar-search-form .search-input .input-group .input-group-text {\n  color: #dee2e9;\n}\n[data-top-navbar-color=primary] .navbar-search-form .search-input .input-group .form-control ::-webkit-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=primary] .navbar-search-form .search-input .input-group .form-control :-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=primary] .navbar-search-form .search-input .input-group .form-control ::-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=primary] .navbar-search-form .search-input .input-group .form-control :-ms-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=primary] .navbar-search-form .search-input .input-group.focused .form-control {\n  background-color: #0f63ff;\n}\n[data-top-navbar-color=primary] .navbar-search-form.search-button-wrapper:hover {\n  background-color: #0049d1;\n}\n[data-top-navbar-color=primary] .dropdown-grid .btn.btn-default,\n[data-top-navbar-color=primary] .dropdown-tasks .btn.btn-default,\n[data-top-navbar-color=primary] .dropdown-flags .btn.btn-default,\n[data-top-navbar-color=primary] .dropdown-notifications .btn.btn-default,\n[data-top-navbar-color=primary] .dropdown-mega-menu .btn.btn-default,\n[data-top-navbar-color=primary] .dropdown-user .btn.btn-default {\n  border: none;\n  background: #0059FF;\n  color: #dee2e9;\n}\n[data-top-navbar-color=primary] .dropdown-grid .btn.btn-default:hover, [data-top-navbar-color=primary] .dropdown-grid .btn.btn-default:active, [data-top-navbar-color=primary] .dropdown-grid .btn.btn-default:focus, [data-top-navbar-color=primary] .dropdown-grid .btn.btn-default:visited, [data-top-navbar-color=primary] .dropdown-grid .btn.btn-default.focus,\n[data-top-navbar-color=primary] .dropdown-tasks .btn.btn-default:hover,\n[data-top-navbar-color=primary] .dropdown-tasks .btn.btn-default:active,\n[data-top-navbar-color=primary] .dropdown-tasks .btn.btn-default:focus,\n[data-top-navbar-color=primary] .dropdown-tasks .btn.btn-default:visited,\n[data-top-navbar-color=primary] .dropdown-tasks .btn.btn-default.focus,\n[data-top-navbar-color=primary] .dropdown-flags .btn.btn-default:hover,\n[data-top-navbar-color=primary] .dropdown-flags .btn.btn-default:active,\n[data-top-navbar-color=primary] .dropdown-flags .btn.btn-default:focus,\n[data-top-navbar-color=primary] .dropdown-flags .btn.btn-default:visited,\n[data-top-navbar-color=primary] .dropdown-flags .btn.btn-default.focus,\n[data-top-navbar-color=primary] .dropdown-notifications .btn.btn-default:hover,\n[data-top-navbar-color=primary] .dropdown-notifications .btn.btn-default:active,\n[data-top-navbar-color=primary] .dropdown-notifications .btn.btn-default:focus,\n[data-top-navbar-color=primary] .dropdown-notifications .btn.btn-default:visited,\n[data-top-navbar-color=primary] .dropdown-notifications .btn.btn-default.focus,\n[data-top-navbar-color=primary] .dropdown-mega-menu .btn.btn-default:hover,\n[data-top-navbar-color=primary] .dropdown-mega-menu .btn.btn-default:active,\n[data-top-navbar-color=primary] .dropdown-mega-menu .btn.btn-default:focus,\n[data-top-navbar-color=primary] .dropdown-mega-menu .btn.btn-default:visited,\n[data-top-navbar-color=primary] .dropdown-mega-menu .btn.btn-default.focus,\n[data-top-navbar-color=primary] .dropdown-user .btn.btn-default:hover,\n[data-top-navbar-color=primary] .dropdown-user .btn.btn-default:active,\n[data-top-navbar-color=primary] .dropdown-user .btn.btn-default:focus,\n[data-top-navbar-color=primary] .dropdown-user .btn.btn-default:visited,\n[data-top-navbar-color=primary] .dropdown-user .btn.btn-default.focus {\n  border: none;\n  background: #0059FF;\n  color: #dee2e9;\n}\n[data-top-navbar-color=primary] .dropdown-grid .dropdown-menu,\n[data-top-navbar-color=primary] .dropdown-tasks .dropdown-menu,\n[data-top-navbar-color=primary] .dropdown-flags .dropdown-menu,\n[data-top-navbar-color=primary] .dropdown-notifications .dropdown-menu,\n[data-top-navbar-color=primary] .dropdown-mega-menu .dropdown-menu,\n[data-top-navbar-color=primary] .dropdown-user .dropdown-menu {\n  background: #0059FF;\n  color: #dee2e9;\n}\n[data-top-navbar-color=primary] .dropdown-grid .dropdown-menu .dropdown-title,\n[data-top-navbar-color=primary] .dropdown-tasks .dropdown-menu .dropdown-title,\n[data-top-navbar-color=primary] .dropdown-flags .dropdown-menu .dropdown-title,\n[data-top-navbar-color=primary] .dropdown-notifications .dropdown-menu .dropdown-title,\n[data-top-navbar-color=primary] .dropdown-mega-menu .dropdown-menu .dropdown-title,\n[data-top-navbar-color=primary] .dropdown-user .dropdown-menu .dropdown-title {\n  background: #3d81ff;\n  color: #dee2e9;\n}\n[data-top-navbar-color=primary] .dropdown-grid .dropdown-menu .dropdown-item,\n[data-top-navbar-color=primary] .dropdown-tasks .dropdown-menu .dropdown-item,\n[data-top-navbar-color=primary] .dropdown-flags .dropdown-menu .dropdown-item,\n[data-top-navbar-color=primary] .dropdown-notifications .dropdown-menu .dropdown-item,\n[data-top-navbar-color=primary] .dropdown-mega-menu .dropdown-menu .dropdown-item,\n[data-top-navbar-color=primary] .dropdown-user .dropdown-menu .dropdown-item {\n  background: #0059FF;\n  color: #dee2e9;\n}\n[data-top-navbar-color=primary] .dropdown-grid .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=primary] .dropdown-tasks .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=primary] .dropdown-flags .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=primary] .dropdown-notifications .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=primary] .dropdown-mega-menu .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=primary] .dropdown-user .dropdown-menu .dropdown-item:hover {\n  background: #0f63ff;\n  color: #dee2e9;\n}\n[data-top-navbar-color=light-primary] .navbar.navbar-design-basic {\n  background: #4d8bff;\n  color: #dee2e9;\n}\n[data-top-navbar-color=light-primary] .navbar.navbar-design-basic .nav-link {\n  color: #dee2e9;\n}\n[data-top-navbar-color=light-primary] .navbar.navbar-design-basic .dropdown .dropdown-item a {\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=light-primary] .navbar.navbar-design-basic .input-group .input-group-addon,\n[data-top-navbar-color=light-primary] .navbar.navbar-design-basic .input-group .input-group-text {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  text-align: center;\n  background-clip: padding-box;\n}\n[data-top-navbar-color=light-primary] .navbar.navbar-design-basic .input-group .form-control {\n  color: #dee2e9;\n  background-color: #6b9fff;\n  border-color: #6b9fff;\n}\n[data-top-navbar-color=light-primary] .navbar-design-basic .navbar-nav .nav-link:hover, [data-top-navbar-color=light-primary] .navbar-design-basic .nav .nav-link:hover {\n  color: #fff;\n}\n[data-top-navbar-color=light-primary] .navbar-design-basic .navbar-nav .nav-link.cta, [data-top-navbar-color=light-primary] .navbar-design-basic .nav .nav-link.cta {\n  background: #e00c51;\n  color: white;\n}\n[data-top-navbar-color=light-primary] .navbar-design-basic .navbar-nav .nav-link.cta:hover, [data-top-navbar-color=light-primary] .navbar-design-basic .navbar-nav .nav-link.cta:focus, [data-top-navbar-color=light-primary] .navbar-design-basic .nav .nav-link.cta:hover, [data-top-navbar-color=light-primary] .navbar-design-basic .nav .nav-link.cta:focus {\n  background: #c80b48;\n  color: #fff;\n}\n[data-top-navbar-color=light-primary] .navbar-design-basic .navbar-nav .nav-link.cta:active, [data-top-navbar-color=light-primary] .navbar-design-basic .nav .nav-link.cta:active {\n  background: #b0093f;\n  color: #fff;\n}\n[data-top-navbar-color=light-primary] .navbar-search-form .search-input .input-group .input-group-text {\n  color: #dee2e9;\n}\n[data-top-navbar-color=light-primary] .navbar-search-form .search-input .input-group .form-control ::-webkit-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=light-primary] .navbar-search-form .search-input .input-group .form-control :-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=light-primary] .navbar-search-form .search-input .input-group .form-control ::-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=light-primary] .navbar-search-form .search-input .input-group .form-control :-ms-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=light-primary] .navbar-search-form .search-input .input-group.focused .form-control {\n  background-color: #5c95ff;\n}\n[data-top-navbar-color=light-primary] .navbar-search-form.search-button-wrapper:hover {\n  background-color: #1f6dff;\n}\n[data-top-navbar-color=light-primary] .dropdown-grid .btn.btn-default,\n[data-top-navbar-color=light-primary] .dropdown-tasks .btn.btn-default,\n[data-top-navbar-color=light-primary] .dropdown-flags .btn.btn-default,\n[data-top-navbar-color=light-primary] .dropdown-notifications .btn.btn-default,\n[data-top-navbar-color=light-primary] .dropdown-mega-menu .btn.btn-default,\n[data-top-navbar-color=light-primary] .dropdown-user .btn.btn-default {\n  border: none;\n  background: #4d8bff;\n  color: #dee2e9;\n}\n[data-top-navbar-color=light-primary] .dropdown-grid .btn.btn-default:hover, [data-top-navbar-color=light-primary] .dropdown-grid .btn.btn-default:active, [data-top-navbar-color=light-primary] .dropdown-grid .btn.btn-default:focus, [data-top-navbar-color=light-primary] .dropdown-grid .btn.btn-default:visited, [data-top-navbar-color=light-primary] .dropdown-grid .btn.btn-default.focus,\n[data-top-navbar-color=light-primary] .dropdown-tasks .btn.btn-default:hover,\n[data-top-navbar-color=light-primary] .dropdown-tasks .btn.btn-default:active,\n[data-top-navbar-color=light-primary] .dropdown-tasks .btn.btn-default:focus,\n[data-top-navbar-color=light-primary] .dropdown-tasks .btn.btn-default:visited,\n[data-top-navbar-color=light-primary] .dropdown-tasks .btn.btn-default.focus,\n[data-top-navbar-color=light-primary] .dropdown-flags .btn.btn-default:hover,\n[data-top-navbar-color=light-primary] .dropdown-flags .btn.btn-default:active,\n[data-top-navbar-color=light-primary] .dropdown-flags .btn.btn-default:focus,\n[data-top-navbar-color=light-primary] .dropdown-flags .btn.btn-default:visited,\n[data-top-navbar-color=light-primary] .dropdown-flags .btn.btn-default.focus,\n[data-top-navbar-color=light-primary] .dropdown-notifications .btn.btn-default:hover,\n[data-top-navbar-color=light-primary] .dropdown-notifications .btn.btn-default:active,\n[data-top-navbar-color=light-primary] .dropdown-notifications .btn.btn-default:focus,\n[data-top-navbar-color=light-primary] .dropdown-notifications .btn.btn-default:visited,\n[data-top-navbar-color=light-primary] .dropdown-notifications .btn.btn-default.focus,\n[data-top-navbar-color=light-primary] .dropdown-mega-menu .btn.btn-default:hover,\n[data-top-navbar-color=light-primary] .dropdown-mega-menu .btn.btn-default:active,\n[data-top-navbar-color=light-primary] .dropdown-mega-menu .btn.btn-default:focus,\n[data-top-navbar-color=light-primary] .dropdown-mega-menu .btn.btn-default:visited,\n[data-top-navbar-color=light-primary] .dropdown-mega-menu .btn.btn-default.focus,\n[data-top-navbar-color=light-primary] .dropdown-user .btn.btn-default:hover,\n[data-top-navbar-color=light-primary] .dropdown-user .btn.btn-default:active,\n[data-top-navbar-color=light-primary] .dropdown-user .btn.btn-default:focus,\n[data-top-navbar-color=light-primary] .dropdown-user .btn.btn-default:visited,\n[data-top-navbar-color=light-primary] .dropdown-user .btn.btn-default.focus {\n  border: none;\n  background: #4d8bff;\n  color: #dee2e9;\n}\n[data-top-navbar-color=light-primary] .dropdown-grid .dropdown-menu,\n[data-top-navbar-color=light-primary] .dropdown-tasks .dropdown-menu,\n[data-top-navbar-color=light-primary] .dropdown-flags .dropdown-menu,\n[data-top-navbar-color=light-primary] .dropdown-notifications .dropdown-menu,\n[data-top-navbar-color=light-primary] .dropdown-mega-menu .dropdown-menu,\n[data-top-navbar-color=light-primary] .dropdown-user .dropdown-menu {\n  background: #4d8bff;\n  color: #dee2e9;\n}\n[data-top-navbar-color=light-primary] .dropdown-grid .dropdown-menu .dropdown-title,\n[data-top-navbar-color=light-primary] .dropdown-tasks .dropdown-menu .dropdown-title,\n[data-top-navbar-color=light-primary] .dropdown-flags .dropdown-menu .dropdown-title,\n[data-top-navbar-color=light-primary] .dropdown-notifications .dropdown-menu .dropdown-title,\n[data-top-navbar-color=light-primary] .dropdown-mega-menu .dropdown-menu .dropdown-title,\n[data-top-navbar-color=light-primary] .dropdown-user .dropdown-menu .dropdown-title {\n  background: #8ab3ff;\n  color: #dee2e9;\n}\n[data-top-navbar-color=light-primary] .dropdown-grid .dropdown-menu .dropdown-item,\n[data-top-navbar-color=light-primary] .dropdown-tasks .dropdown-menu .dropdown-item,\n[data-top-navbar-color=light-primary] .dropdown-flags .dropdown-menu .dropdown-item,\n[data-top-navbar-color=light-primary] .dropdown-notifications .dropdown-menu .dropdown-item,\n[data-top-navbar-color=light-primary] .dropdown-mega-menu .dropdown-menu .dropdown-item,\n[data-top-navbar-color=light-primary] .dropdown-user .dropdown-menu .dropdown-item {\n  background: #4d8bff;\n  color: #dee2e9;\n}\n[data-top-navbar-color=light-primary] .dropdown-grid .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=light-primary] .dropdown-tasks .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=light-primary] .dropdown-flags .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=light-primary] .dropdown-notifications .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=light-primary] .dropdown-mega-menu .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=light-primary] .dropdown-user .dropdown-menu .dropdown-item:hover {\n  background: #5c95ff;\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark-primary] .navbar.navbar-design-basic {\n  background: #003eb3;\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark-primary] .navbar.navbar-design-basic .nav-link {\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark-primary] .navbar.navbar-design-basic .dropdown .dropdown-item a {\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=dark-primary] .navbar.navbar-design-basic .input-group .input-group-addon,\n[data-top-navbar-color=dark-primary] .navbar.navbar-design-basic .input-group .input-group-text {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  text-align: center;\n  background-clip: padding-box;\n}\n[data-top-navbar-color=dark-primary] .navbar.navbar-design-basic .input-group .form-control {\n  color: #dee2e9;\n  background-color: #0049d1;\n  border-color: #0049d1;\n}\n[data-top-navbar-color=dark-primary] .navbar-design-basic .navbar-nav .nav-link:hover, [data-top-navbar-color=dark-primary] .navbar-design-basic .nav .nav-link:hover {\n  color: #fff;\n}\n[data-top-navbar-color=dark-primary] .navbar-design-basic .navbar-nav .nav-link.cta, [data-top-navbar-color=dark-primary] .navbar-design-basic .nav .nav-link.cta {\n  background: #e00c51;\n  color: white;\n}\n[data-top-navbar-color=dark-primary] .navbar-design-basic .navbar-nav .nav-link.cta:hover, [data-top-navbar-color=dark-primary] .navbar-design-basic .navbar-nav .nav-link.cta:focus, [data-top-navbar-color=dark-primary] .navbar-design-basic .nav .nav-link.cta:hover, [data-top-navbar-color=dark-primary] .navbar-design-basic .nav .nav-link.cta:focus {\n  background: #c80b48;\n  color: #fff;\n}\n[data-top-navbar-color=dark-primary] .navbar-design-basic .navbar-nav .nav-link.cta:active, [data-top-navbar-color=dark-primary] .navbar-design-basic .nav .nav-link.cta:active {\n  background: #b0093f;\n  color: #fff;\n}\n[data-top-navbar-color=dark-primary] .navbar-search-form .search-input .input-group .input-group-text {\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark-primary] .navbar-search-form .search-input .input-group .form-control ::-webkit-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark-primary] .navbar-search-form .search-input .input-group .form-control :-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark-primary] .navbar-search-form .search-input .input-group .form-control ::-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark-primary] .navbar-search-form .search-input .input-group .form-control :-ms-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark-primary] .navbar-search-form .search-input .input-group.focused .form-control {\n  background-color: #0044c2;\n}\n[data-top-navbar-color=dark-primary] .navbar-search-form.search-button-wrapper:hover {\n  background-color: #002e85;\n}\n[data-top-navbar-color=dark-primary] .dropdown-grid .btn.btn-default,\n[data-top-navbar-color=dark-primary] .dropdown-tasks .btn.btn-default,\n[data-top-navbar-color=dark-primary] .dropdown-flags .btn.btn-default,\n[data-top-navbar-color=dark-primary] .dropdown-notifications .btn.btn-default,\n[data-top-navbar-color=dark-primary] .dropdown-mega-menu .btn.btn-default,\n[data-top-navbar-color=dark-primary] .dropdown-user .btn.btn-default {\n  border: none;\n  background: #003eb3;\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark-primary] .dropdown-grid .btn.btn-default:hover, [data-top-navbar-color=dark-primary] .dropdown-grid .btn.btn-default:active, [data-top-navbar-color=dark-primary] .dropdown-grid .btn.btn-default:focus, [data-top-navbar-color=dark-primary] .dropdown-grid .btn.btn-default:visited, [data-top-navbar-color=dark-primary] .dropdown-grid .btn.btn-default.focus,\n[data-top-navbar-color=dark-primary] .dropdown-tasks .btn.btn-default:hover,\n[data-top-navbar-color=dark-primary] .dropdown-tasks .btn.btn-default:active,\n[data-top-navbar-color=dark-primary] .dropdown-tasks .btn.btn-default:focus,\n[data-top-navbar-color=dark-primary] .dropdown-tasks .btn.btn-default:visited,\n[data-top-navbar-color=dark-primary] .dropdown-tasks .btn.btn-default.focus,\n[data-top-navbar-color=dark-primary] .dropdown-flags .btn.btn-default:hover,\n[data-top-navbar-color=dark-primary] .dropdown-flags .btn.btn-default:active,\n[data-top-navbar-color=dark-primary] .dropdown-flags .btn.btn-default:focus,\n[data-top-navbar-color=dark-primary] .dropdown-flags .btn.btn-default:visited,\n[data-top-navbar-color=dark-primary] .dropdown-flags .btn.btn-default.focus,\n[data-top-navbar-color=dark-primary] .dropdown-notifications .btn.btn-default:hover,\n[data-top-navbar-color=dark-primary] .dropdown-notifications .btn.btn-default:active,\n[data-top-navbar-color=dark-primary] .dropdown-notifications .btn.btn-default:focus,\n[data-top-navbar-color=dark-primary] .dropdown-notifications .btn.btn-default:visited,\n[data-top-navbar-color=dark-primary] .dropdown-notifications .btn.btn-default.focus,\n[data-top-navbar-color=dark-primary] .dropdown-mega-menu .btn.btn-default:hover,\n[data-top-navbar-color=dark-primary] .dropdown-mega-menu .btn.btn-default:active,\n[data-top-navbar-color=dark-primary] .dropdown-mega-menu .btn.btn-default:focus,\n[data-top-navbar-color=dark-primary] .dropdown-mega-menu .btn.btn-default:visited,\n[data-top-navbar-color=dark-primary] .dropdown-mega-menu .btn.btn-default.focus,\n[data-top-navbar-color=dark-primary] .dropdown-user .btn.btn-default:hover,\n[data-top-navbar-color=dark-primary] .dropdown-user .btn.btn-default:active,\n[data-top-navbar-color=dark-primary] .dropdown-user .btn.btn-default:focus,\n[data-top-navbar-color=dark-primary] .dropdown-user .btn.btn-default:visited,\n[data-top-navbar-color=dark-primary] .dropdown-user .btn.btn-default.focus {\n  border: none;\n  background: #003eb3;\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark-primary] .dropdown-grid .dropdown-menu,\n[data-top-navbar-color=dark-primary] .dropdown-tasks .dropdown-menu,\n[data-top-navbar-color=dark-primary] .dropdown-flags .dropdown-menu,\n[data-top-navbar-color=dark-primary] .dropdown-notifications .dropdown-menu,\n[data-top-navbar-color=dark-primary] .dropdown-mega-menu .dropdown-menu,\n[data-top-navbar-color=dark-primary] .dropdown-user .dropdown-menu {\n  background: #003eb3;\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark-primary] .dropdown-grid .dropdown-menu .dropdown-title,\n[data-top-navbar-color=dark-primary] .dropdown-tasks .dropdown-menu .dropdown-title,\n[data-top-navbar-color=dark-primary] .dropdown-flags .dropdown-menu .dropdown-title,\n[data-top-navbar-color=dark-primary] .dropdown-notifications .dropdown-menu .dropdown-title,\n[data-top-navbar-color=dark-primary] .dropdown-mega-menu .dropdown-menu .dropdown-title,\n[data-top-navbar-color=dark-primary] .dropdown-user .dropdown-menu .dropdown-title {\n  background: #0054f0;\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark-primary] .dropdown-grid .dropdown-menu .dropdown-item,\n[data-top-navbar-color=dark-primary] .dropdown-tasks .dropdown-menu .dropdown-item,\n[data-top-navbar-color=dark-primary] .dropdown-flags .dropdown-menu .dropdown-item,\n[data-top-navbar-color=dark-primary] .dropdown-notifications .dropdown-menu .dropdown-item,\n[data-top-navbar-color=dark-primary] .dropdown-mega-menu .dropdown-menu .dropdown-item,\n[data-top-navbar-color=dark-primary] .dropdown-user .dropdown-menu .dropdown-item {\n  background: #003eb3;\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark-primary] .dropdown-grid .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=dark-primary] .dropdown-tasks .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=dark-primary] .dropdown-flags .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=dark-primary] .dropdown-notifications .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=dark-primary] .dropdown-mega-menu .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=dark-primary] .dropdown-user .dropdown-menu .dropdown-item:hover {\n  background: #0044c2;\n  color: #dee2e9;\n}\n[data-top-navbar-color=secondary] .navbar.navbar-design-basic {\n  background: #e00c51;\n  color: #6c7580;\n}\n[data-top-navbar-color=secondary] .navbar.navbar-design-basic .nav-link {\n  color: #6c7580;\n}\n[data-top-navbar-color=secondary] .navbar.navbar-design-basic .dropdown .dropdown-item a {\n  color: #6c7580 !important;\n}\n[data-top-navbar-color=secondary] .navbar.navbar-design-basic .input-group .input-group-addon,\n[data-top-navbar-color=secondary] .navbar.navbar-design-basic .input-group .input-group-text {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  text-align: center;\n  background-clip: padding-box;\n}\n[data-top-navbar-color=secondary] .navbar.navbar-design-basic .input-group .form-control {\n  color: #6c7580;\n  background-color: #f3185f;\n  border-color: #f3185f;\n}\n[data-top-navbar-color=secondary] .navbar-design-basic .navbar-nav .nav-link:hover, [data-top-navbar-color=secondary] .navbar-design-basic .nav .nav-link:hover {\n  color: #000;\n}\n[data-top-navbar-color=secondary] .navbar-design-basic .navbar-nav .nav-link.cta, [data-top-navbar-color=secondary] .navbar-design-basic .nav .nav-link.cta {\n  background: #e00c51;\n  color: white;\n}\n[data-top-navbar-color=secondary] .navbar-design-basic .navbar-nav .nav-link.cta:hover, [data-top-navbar-color=secondary] .navbar-design-basic .navbar-nav .nav-link.cta:focus, [data-top-navbar-color=secondary] .navbar-design-basic .nav .nav-link.cta:hover, [data-top-navbar-color=secondary] .navbar-design-basic .nav .nav-link.cta:focus {\n  background: #c80b48;\n  color: #fff;\n}\n[data-top-navbar-color=secondary] .navbar-design-basic .navbar-nav .nav-link.cta:active, [data-top-navbar-color=secondary] .navbar-design-basic .nav .nav-link.cta:active {\n  background: #b0093f;\n  color: #fff;\n}\n[data-top-navbar-color=secondary] .navbar-search-form .search-input .input-group .input-group-text {\n  color: #6c7580;\n}\n[data-top-navbar-color=secondary] .navbar-search-form .search-input .input-group .form-control ::-webkit-input-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=secondary] .navbar-search-form .search-input .input-group .form-control :-moz-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=secondary] .navbar-search-form .search-input .input-group .form-control ::-moz-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=secondary] .navbar-search-form .search-input .input-group .form-control :-ms-input-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=secondary] .navbar-search-form .search-input .input-group.focused .form-control {\n  background-color: #ef0d56;\n}\n[data-top-navbar-color=secondary] .navbar-search-form.search-button-wrapper:hover {\n  background-color: #b40a41;\n}\n[data-top-navbar-color=secondary] .dropdown-grid .btn.btn-default,\n[data-top-navbar-color=secondary] .dropdown-tasks .btn.btn-default,\n[data-top-navbar-color=secondary] .dropdown-flags .btn.btn-default,\n[data-top-navbar-color=secondary] .dropdown-notifications .btn.btn-default,\n[data-top-navbar-color=secondary] .dropdown-mega-menu .btn.btn-default,\n[data-top-navbar-color=secondary] .dropdown-user .btn.btn-default {\n  border: none;\n  background: #e00c51;\n  color: #6c7580;\n}\n[data-top-navbar-color=secondary] .dropdown-grid .btn.btn-default:hover, [data-top-navbar-color=secondary] .dropdown-grid .btn.btn-default:active, [data-top-navbar-color=secondary] .dropdown-grid .btn.btn-default:focus, [data-top-navbar-color=secondary] .dropdown-grid .btn.btn-default:visited, [data-top-navbar-color=secondary] .dropdown-grid .btn.btn-default.focus,\n[data-top-navbar-color=secondary] .dropdown-tasks .btn.btn-default:hover,\n[data-top-navbar-color=secondary] .dropdown-tasks .btn.btn-default:active,\n[data-top-navbar-color=secondary] .dropdown-tasks .btn.btn-default:focus,\n[data-top-navbar-color=secondary] .dropdown-tasks .btn.btn-default:visited,\n[data-top-navbar-color=secondary] .dropdown-tasks .btn.btn-default.focus,\n[data-top-navbar-color=secondary] .dropdown-flags .btn.btn-default:hover,\n[data-top-navbar-color=secondary] .dropdown-flags .btn.btn-default:active,\n[data-top-navbar-color=secondary] .dropdown-flags .btn.btn-default:focus,\n[data-top-navbar-color=secondary] .dropdown-flags .btn.btn-default:visited,\n[data-top-navbar-color=secondary] .dropdown-flags .btn.btn-default.focus,\n[data-top-navbar-color=secondary] .dropdown-notifications .btn.btn-default:hover,\n[data-top-navbar-color=secondary] .dropdown-notifications .btn.btn-default:active,\n[data-top-navbar-color=secondary] .dropdown-notifications .btn.btn-default:focus,\n[data-top-navbar-color=secondary] .dropdown-notifications .btn.btn-default:visited,\n[data-top-navbar-color=secondary] .dropdown-notifications .btn.btn-default.focus,\n[data-top-navbar-color=secondary] .dropdown-mega-menu .btn.btn-default:hover,\n[data-top-navbar-color=secondary] .dropdown-mega-menu .btn.btn-default:active,\n[data-top-navbar-color=secondary] .dropdown-mega-menu .btn.btn-default:focus,\n[data-top-navbar-color=secondary] .dropdown-mega-menu .btn.btn-default:visited,\n[data-top-navbar-color=secondary] .dropdown-mega-menu .btn.btn-default.focus,\n[data-top-navbar-color=secondary] .dropdown-user .btn.btn-default:hover,\n[data-top-navbar-color=secondary] .dropdown-user .btn.btn-default:active,\n[data-top-navbar-color=secondary] .dropdown-user .btn.btn-default:focus,\n[data-top-navbar-color=secondary] .dropdown-user .btn.btn-default:visited,\n[data-top-navbar-color=secondary] .dropdown-user .btn.btn-default.focus {\n  border: none;\n  background: #e00c51;\n  color: #6c7580;\n}\n[data-top-navbar-color=secondary] .dropdown-grid .dropdown-menu,\n[data-top-navbar-color=secondary] .dropdown-tasks .dropdown-menu,\n[data-top-navbar-color=secondary] .dropdown-flags .dropdown-menu,\n[data-top-navbar-color=secondary] .dropdown-notifications .dropdown-menu,\n[data-top-navbar-color=secondary] .dropdown-mega-menu .dropdown-menu,\n[data-top-navbar-color=secondary] .dropdown-user .dropdown-menu {\n  background: #e00c51;\n  color: #6c7580;\n}\n[data-top-navbar-color=secondary] .dropdown-grid .dropdown-menu .dropdown-title,\n[data-top-navbar-color=secondary] .dropdown-tasks .dropdown-menu .dropdown-title,\n[data-top-navbar-color=secondary] .dropdown-flags .dropdown-menu .dropdown-title,\n[data-top-navbar-color=secondary] .dropdown-notifications .dropdown-menu .dropdown-title,\n[data-top-navbar-color=secondary] .dropdown-mega-menu .dropdown-menu .dropdown-title,\n[data-top-navbar-color=secondary] .dropdown-user .dropdown-menu .dropdown-title {\n  background: #f43573;\n  color: #6c7580;\n}\n[data-top-navbar-color=secondary] .dropdown-grid .dropdown-menu .dropdown-item,\n[data-top-navbar-color=secondary] .dropdown-tasks .dropdown-menu .dropdown-item,\n[data-top-navbar-color=secondary] .dropdown-flags .dropdown-menu .dropdown-item,\n[data-top-navbar-color=secondary] .dropdown-notifications .dropdown-menu .dropdown-item,\n[data-top-navbar-color=secondary] .dropdown-mega-menu .dropdown-menu .dropdown-item,\n[data-top-navbar-color=secondary] .dropdown-user .dropdown-menu .dropdown-item {\n  background: #e00c51;\n  color: #6c7580;\n}\n[data-top-navbar-color=secondary] .dropdown-grid .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=secondary] .dropdown-tasks .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=secondary] .dropdown-flags .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=secondary] .dropdown-notifications .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=secondary] .dropdown-mega-menu .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=secondary] .dropdown-user .dropdown-menu .dropdown-item:hover {\n  background: #ef0d56;\n  color: #6c7580;\n}\n[data-top-navbar-color=dark-secondary] .navbar.navbar-design-basic {\n  background: #970837;\n  color: #6c7580;\n}\n[data-top-navbar-color=dark-secondary] .navbar.navbar-design-basic .nav-link {\n  color: #6c7580;\n}\n[data-top-navbar-color=dark-secondary] .navbar.navbar-design-basic .dropdown .dropdown-item a {\n  color: #6c7580 !important;\n}\n[data-top-navbar-color=dark-secondary] .navbar.navbar-design-basic .input-group .input-group-addon,\n[data-top-navbar-color=dark-secondary] .navbar.navbar-design-basic .input-group .input-group-text {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  text-align: center;\n  background-clip: padding-box;\n}\n[data-top-navbar-color=dark-secondary] .navbar.navbar-design-basic .input-group .form-control {\n  color: #6c7580;\n  background-color: #b40a41;\n  border-color: #b40a41;\n}\n[data-top-navbar-color=dark-secondary] .navbar-design-basic .navbar-nav .nav-link:hover, [data-top-navbar-color=dark-secondary] .navbar-design-basic .nav .nav-link:hover {\n  color: #000;\n}\n[data-top-navbar-color=dark-secondary] .navbar-design-basic .navbar-nav .nav-link.cta, [data-top-navbar-color=dark-secondary] .navbar-design-basic .nav .nav-link.cta {\n  background: #e00c51;\n  color: white;\n}\n[data-top-navbar-color=dark-secondary] .navbar-design-basic .navbar-nav .nav-link.cta:hover, [data-top-navbar-color=dark-secondary] .navbar-design-basic .navbar-nav .nav-link.cta:focus, [data-top-navbar-color=dark-secondary] .navbar-design-basic .nav .nav-link.cta:hover, [data-top-navbar-color=dark-secondary] .navbar-design-basic .nav .nav-link.cta:focus {\n  background: #c80b48;\n  color: #fff;\n}\n[data-top-navbar-color=dark-secondary] .navbar-design-basic .navbar-nav .nav-link.cta:active, [data-top-navbar-color=dark-secondary] .navbar-design-basic .nav .nav-link.cta:active {\n  background: #b0093f;\n  color: #fff;\n}\n[data-top-navbar-color=dark-secondary] .navbar-search-form .search-input .input-group .input-group-text {\n  color: #6c7580;\n}\n[data-top-navbar-color=dark-secondary] .navbar-search-form .search-input .input-group .form-control ::-webkit-input-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=dark-secondary] .navbar-search-form .search-input .input-group .form-control :-moz-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=dark-secondary] .navbar-search-form .search-input .input-group .form-control ::-moz-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=dark-secondary] .navbar-search-form .search-input .input-group .form-control :-ms-input-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=dark-secondary] .navbar-search-form .search-input .input-group.focused .form-control {\n  background-color: #a6093c;\n}\n[data-top-navbar-color=dark-secondary] .navbar-search-form.search-button-wrapper:hover {\n  background-color: #6c0627;\n}\n[data-top-navbar-color=dark-secondary] .dropdown-grid .btn.btn-default,\n[data-top-navbar-color=dark-secondary] .dropdown-tasks .btn.btn-default,\n[data-top-navbar-color=dark-secondary] .dropdown-flags .btn.btn-default,\n[data-top-navbar-color=dark-secondary] .dropdown-notifications .btn.btn-default,\n[data-top-navbar-color=dark-secondary] .dropdown-mega-menu .btn.btn-default,\n[data-top-navbar-color=dark-secondary] .dropdown-user .btn.btn-default {\n  border: none;\n  background: #970837;\n  color: #6c7580;\n}\n[data-top-navbar-color=dark-secondary] .dropdown-grid .btn.btn-default:hover, [data-top-navbar-color=dark-secondary] .dropdown-grid .btn.btn-default:active, [data-top-navbar-color=dark-secondary] .dropdown-grid .btn.btn-default:focus, [data-top-navbar-color=dark-secondary] .dropdown-grid .btn.btn-default:visited, [data-top-navbar-color=dark-secondary] .dropdown-grid .btn.btn-default.focus,\n[data-top-navbar-color=dark-secondary] .dropdown-tasks .btn.btn-default:hover,\n[data-top-navbar-color=dark-secondary] .dropdown-tasks .btn.btn-default:active,\n[data-top-navbar-color=dark-secondary] .dropdown-tasks .btn.btn-default:focus,\n[data-top-navbar-color=dark-secondary] .dropdown-tasks .btn.btn-default:visited,\n[data-top-navbar-color=dark-secondary] .dropdown-tasks .btn.btn-default.focus,\n[data-top-navbar-color=dark-secondary] .dropdown-flags .btn.btn-default:hover,\n[data-top-navbar-color=dark-secondary] .dropdown-flags .btn.btn-default:active,\n[data-top-navbar-color=dark-secondary] .dropdown-flags .btn.btn-default:focus,\n[data-top-navbar-color=dark-secondary] .dropdown-flags .btn.btn-default:visited,\n[data-top-navbar-color=dark-secondary] .dropdown-flags .btn.btn-default.focus,\n[data-top-navbar-color=dark-secondary] .dropdown-notifications .btn.btn-default:hover,\n[data-top-navbar-color=dark-secondary] .dropdown-notifications .btn.btn-default:active,\n[data-top-navbar-color=dark-secondary] .dropdown-notifications .btn.btn-default:focus,\n[data-top-navbar-color=dark-secondary] .dropdown-notifications .btn.btn-default:visited,\n[data-top-navbar-color=dark-secondary] .dropdown-notifications .btn.btn-default.focus,\n[data-top-navbar-color=dark-secondary] .dropdown-mega-menu .btn.btn-default:hover,\n[data-top-navbar-color=dark-secondary] .dropdown-mega-menu .btn.btn-default:active,\n[data-top-navbar-color=dark-secondary] .dropdown-mega-menu .btn.btn-default:focus,\n[data-top-navbar-color=dark-secondary] .dropdown-mega-menu .btn.btn-default:visited,\n[data-top-navbar-color=dark-secondary] .dropdown-mega-menu .btn.btn-default.focus,\n[data-top-navbar-color=dark-secondary] .dropdown-user .btn.btn-default:hover,\n[data-top-navbar-color=dark-secondary] .dropdown-user .btn.btn-default:active,\n[data-top-navbar-color=dark-secondary] .dropdown-user .btn.btn-default:focus,\n[data-top-navbar-color=dark-secondary] .dropdown-user .btn.btn-default:visited,\n[data-top-navbar-color=dark-secondary] .dropdown-user .btn.btn-default.focus {\n  border: none;\n  background: #970837;\n  color: #6c7580;\n}\n[data-top-navbar-color=dark-secondary] .dropdown-grid .dropdown-menu,\n[data-top-navbar-color=dark-secondary] .dropdown-tasks .dropdown-menu,\n[data-top-navbar-color=dark-secondary] .dropdown-flags .dropdown-menu,\n[data-top-navbar-color=dark-secondary] .dropdown-notifications .dropdown-menu,\n[data-top-navbar-color=dark-secondary] .dropdown-mega-menu .dropdown-menu,\n[data-top-navbar-color=dark-secondary] .dropdown-user .dropdown-menu {\n  background: #970837;\n  color: #6c7580;\n}\n[data-top-navbar-color=dark-secondary] .dropdown-grid .dropdown-menu .dropdown-title,\n[data-top-navbar-color=dark-secondary] .dropdown-tasks .dropdown-menu .dropdown-title,\n[data-top-navbar-color=dark-secondary] .dropdown-flags .dropdown-menu .dropdown-title,\n[data-top-navbar-color=dark-secondary] .dropdown-notifications .dropdown-menu .dropdown-title,\n[data-top-navbar-color=dark-secondary] .dropdown-mega-menu .dropdown-menu .dropdown-title,\n[data-top-navbar-color=dark-secondary] .dropdown-user .dropdown-menu .dropdown-title {\n  background: #d10b4c;\n  color: #6c7580;\n}\n[data-top-navbar-color=dark-secondary] .dropdown-grid .dropdown-menu .dropdown-item,\n[data-top-navbar-color=dark-secondary] .dropdown-tasks .dropdown-menu .dropdown-item,\n[data-top-navbar-color=dark-secondary] .dropdown-flags .dropdown-menu .dropdown-item,\n[data-top-navbar-color=dark-secondary] .dropdown-notifications .dropdown-menu .dropdown-item,\n[data-top-navbar-color=dark-secondary] .dropdown-mega-menu .dropdown-menu .dropdown-item,\n[data-top-navbar-color=dark-secondary] .dropdown-user .dropdown-menu .dropdown-item {\n  background: #970837;\n  color: #6c7580;\n}\n[data-top-navbar-color=dark-secondary] .dropdown-grid .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=dark-secondary] .dropdown-tasks .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=dark-secondary] .dropdown-flags .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=dark-secondary] .dropdown-notifications .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=dark-secondary] .dropdown-mega-menu .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=dark-secondary] .dropdown-user .dropdown-menu .dropdown-item:hover {\n  background: #a6093c;\n  color: #6c7580;\n}\n[data-top-navbar-color=success] .navbar.navbar-design-basic {\n  background: #2dce89;\n  color: #dee2e9;\n}\n[data-top-navbar-color=success] .navbar.navbar-design-basic .nav-link {\n  color: #dee2e9;\n}\n[data-top-navbar-color=success] .navbar.navbar-design-basic .dropdown .dropdown-item a {\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=success] .navbar.navbar-design-basic .input-group .input-group-addon,\n[data-top-navbar-color=success] .navbar.navbar-design-basic .input-group .input-group-text {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  text-align: center;\n  background-clip: padding-box;\n}\n[data-top-navbar-color=success] .navbar.navbar-design-basic .input-group .form-control {\n  color: #dee2e9;\n  background-color: #44d697;\n  border-color: #44d697;\n}\n[data-top-navbar-color=success] .navbar-design-basic .navbar-nav .nav-link:hover, [data-top-navbar-color=success] .navbar-design-basic .nav .nav-link:hover {\n  color: #fff;\n}\n[data-top-navbar-color=success] .navbar-design-basic .navbar-nav .nav-link.cta, [data-top-navbar-color=success] .navbar-design-basic .nav .nav-link.cta {\n  background: #0059FF;\n  color: white;\n}\n[data-top-navbar-color=success] .navbar-design-basic .navbar-nav .nav-link.cta:hover, [data-top-navbar-color=success] .navbar-design-basic .navbar-nav .nav-link.cta:focus, [data-top-navbar-color=success] .navbar-design-basic .nav .nav-link.cta:hover, [data-top-navbar-color=success] .navbar-design-basic .nav .nav-link.cta:focus {\n  background: #0050e6;\n  color: #fff;\n}\n[data-top-navbar-color=success] .navbar-design-basic .navbar-nav .nav-link.cta:active, [data-top-navbar-color=success] .navbar-design-basic .nav .nav-link.cta:active {\n  background: #0047cc;\n  color: #fff;\n}\n[data-top-navbar-color=success] .navbar-search-form .search-input .input-group .input-group-text {\n  color: #dee2e9;\n}\n[data-top-navbar-color=success] .navbar-search-form .search-input .input-group .form-control ::-webkit-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=success] .navbar-search-form .search-input .input-group .form-control :-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=success] .navbar-search-form .search-input .input-group .form-control ::-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=success] .navbar-search-form .search-input .input-group .form-control :-ms-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=success] .navbar-search-form .search-input .input-group.focused .form-control {\n  background-color: #37d390;\n}\n[data-top-navbar-color=success] .navbar-search-form.search-button-wrapper:hover {\n  background-color: #25a870;\n}\n[data-top-navbar-color=success] .dropdown-grid .btn.btn-default,\n[data-top-navbar-color=success] .dropdown-tasks .btn.btn-default,\n[data-top-navbar-color=success] .dropdown-flags .btn.btn-default,\n[data-top-navbar-color=success] .dropdown-notifications .btn.btn-default,\n[data-top-navbar-color=success] .dropdown-mega-menu .btn.btn-default,\n[data-top-navbar-color=success] .dropdown-user .btn.btn-default {\n  border: none;\n  background: #2dce89;\n  color: #dee2e9;\n}\n[data-top-navbar-color=success] .dropdown-grid .btn.btn-default:hover, [data-top-navbar-color=success] .dropdown-grid .btn.btn-default:active, [data-top-navbar-color=success] .dropdown-grid .btn.btn-default:focus, [data-top-navbar-color=success] .dropdown-grid .btn.btn-default:visited, [data-top-navbar-color=success] .dropdown-grid .btn.btn-default.focus,\n[data-top-navbar-color=success] .dropdown-tasks .btn.btn-default:hover,\n[data-top-navbar-color=success] .dropdown-tasks .btn.btn-default:active,\n[data-top-navbar-color=success] .dropdown-tasks .btn.btn-default:focus,\n[data-top-navbar-color=success] .dropdown-tasks .btn.btn-default:visited,\n[data-top-navbar-color=success] .dropdown-tasks .btn.btn-default.focus,\n[data-top-navbar-color=success] .dropdown-flags .btn.btn-default:hover,\n[data-top-navbar-color=success] .dropdown-flags .btn.btn-default:active,\n[data-top-navbar-color=success] .dropdown-flags .btn.btn-default:focus,\n[data-top-navbar-color=success] .dropdown-flags .btn.btn-default:visited,\n[data-top-navbar-color=success] .dropdown-flags .btn.btn-default.focus,\n[data-top-navbar-color=success] .dropdown-notifications .btn.btn-default:hover,\n[data-top-navbar-color=success] .dropdown-notifications .btn.btn-default:active,\n[data-top-navbar-color=success] .dropdown-notifications .btn.btn-default:focus,\n[data-top-navbar-color=success] .dropdown-notifications .btn.btn-default:visited,\n[data-top-navbar-color=success] .dropdown-notifications .btn.btn-default.focus,\n[data-top-navbar-color=success] .dropdown-mega-menu .btn.btn-default:hover,\n[data-top-navbar-color=success] .dropdown-mega-menu .btn.btn-default:active,\n[data-top-navbar-color=success] .dropdown-mega-menu .btn.btn-default:focus,\n[data-top-navbar-color=success] .dropdown-mega-menu .btn.btn-default:visited,\n[data-top-navbar-color=success] .dropdown-mega-menu .btn.btn-default.focus,\n[data-top-navbar-color=success] .dropdown-user .btn.btn-default:hover,\n[data-top-navbar-color=success] .dropdown-user .btn.btn-default:active,\n[data-top-navbar-color=success] .dropdown-user .btn.btn-default:focus,\n[data-top-navbar-color=success] .dropdown-user .btn.btn-default:visited,\n[data-top-navbar-color=success] .dropdown-user .btn.btn-default.focus {\n  border: none;\n  background: #2dce89;\n  color: #dee2e9;\n}\n[data-top-navbar-color=success] .dropdown-grid .dropdown-menu,\n[data-top-navbar-color=success] .dropdown-tasks .dropdown-menu,\n[data-top-navbar-color=success] .dropdown-flags .dropdown-menu,\n[data-top-navbar-color=success] .dropdown-notifications .dropdown-menu,\n[data-top-navbar-color=success] .dropdown-mega-menu .dropdown-menu,\n[data-top-navbar-color=success] .dropdown-user .dropdown-menu {\n  background: #2dce89;\n  color: #dee2e9;\n}\n[data-top-navbar-color=success] .dropdown-grid .dropdown-menu .dropdown-title,\n[data-top-navbar-color=success] .dropdown-tasks .dropdown-menu .dropdown-title,\n[data-top-navbar-color=success] .dropdown-flags .dropdown-menu .dropdown-title,\n[data-top-navbar-color=success] .dropdown-notifications .dropdown-menu .dropdown-title,\n[data-top-navbar-color=success] .dropdown-mega-menu .dropdown-menu .dropdown-title,\n[data-top-navbar-color=success] .dropdown-user .dropdown-menu .dropdown-title {\n  background: #5ddca5;\n  color: #dee2e9;\n}\n[data-top-navbar-color=success] .dropdown-grid .dropdown-menu .dropdown-item,\n[data-top-navbar-color=success] .dropdown-tasks .dropdown-menu .dropdown-item,\n[data-top-navbar-color=success] .dropdown-flags .dropdown-menu .dropdown-item,\n[data-top-navbar-color=success] .dropdown-notifications .dropdown-menu .dropdown-item,\n[data-top-navbar-color=success] .dropdown-mega-menu .dropdown-menu .dropdown-item,\n[data-top-navbar-color=success] .dropdown-user .dropdown-menu .dropdown-item {\n  background: #2dce89;\n  color: #dee2e9;\n}\n[data-top-navbar-color=success] .dropdown-grid .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=success] .dropdown-tasks .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=success] .dropdown-flags .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=success] .dropdown-notifications .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=success] .dropdown-mega-menu .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=success] .dropdown-user .dropdown-menu .dropdown-item:hover {\n  background: #37d390;\n  color: #dee2e9;\n}\n[data-top-navbar-color=info] .navbar.navbar-design-basic {\n  background: #11cdef;\n  color: #dee2e9;\n}\n[data-top-navbar-color=info] .navbar.navbar-design-basic .nav-link {\n  color: #dee2e9;\n}\n[data-top-navbar-color=info] .navbar.navbar-design-basic .dropdown .dropdown-item a {\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=info] .navbar.navbar-design-basic .input-group .input-group-addon,\n[data-top-navbar-color=info] .navbar.navbar-design-basic .input-group .input-group-text {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  text-align: center;\n  background-clip: padding-box;\n}\n[data-top-navbar-color=info] .navbar.navbar-design-basic .input-group .form-control {\n  color: #dee2e9;\n  background-color: #2ed3f1;\n  border-color: #2ed3f1;\n}\n[data-top-navbar-color=info] .navbar-design-basic .navbar-nav .nav-link:hover, [data-top-navbar-color=info] .navbar-design-basic .nav .nav-link:hover {\n  color: #fff;\n}\n[data-top-navbar-color=info] .navbar-design-basic .navbar-nav .nav-link.cta, [data-top-navbar-color=info] .navbar-design-basic .nav .nav-link.cta {\n  background: #e00c51;\n  color: white;\n}\n[data-top-navbar-color=info] .navbar-design-basic .navbar-nav .nav-link.cta:hover, [data-top-navbar-color=info] .navbar-design-basic .navbar-nav .nav-link.cta:focus, [data-top-navbar-color=info] .navbar-design-basic .nav .nav-link.cta:hover, [data-top-navbar-color=info] .navbar-design-basic .nav .nav-link.cta:focus {\n  background: #c80b48;\n  color: #fff;\n}\n[data-top-navbar-color=info] .navbar-design-basic .navbar-nav .nav-link.cta:active, [data-top-navbar-color=info] .navbar-design-basic .nav .nav-link.cta:active {\n  background: #b0093f;\n  color: #fff;\n}\n[data-top-navbar-color=info] .navbar-search-form .search-input .input-group .input-group-text {\n  color: #dee2e9;\n}\n[data-top-navbar-color=info] .navbar-search-form .search-input .input-group .form-control ::-webkit-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=info] .navbar-search-form .search-input .input-group .form-control :-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=info] .navbar-search-form .search-input .input-group .form-control ::-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=info] .navbar-search-form .search-input .input-group .form-control :-ms-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=info] .navbar-search-form .search-input .input-group.focused .form-control {\n  background-color: #1fd0f0;\n}\n[data-top-navbar-color=info] .navbar-search-form.search-button-wrapper:hover {\n  background-color: #0da9c5;\n}\n[data-top-navbar-color=info] .dropdown-grid .btn.btn-default,\n[data-top-navbar-color=info] .dropdown-tasks .btn.btn-default,\n[data-top-navbar-color=info] .dropdown-flags .btn.btn-default,\n[data-top-navbar-color=info] .dropdown-notifications .btn.btn-default,\n[data-top-navbar-color=info] .dropdown-mega-menu .btn.btn-default,\n[data-top-navbar-color=info] .dropdown-user .btn.btn-default {\n  border: none;\n  background: #11cdef;\n  color: #dee2e9;\n}\n[data-top-navbar-color=info] .dropdown-grid .btn.btn-default:hover, [data-top-navbar-color=info] .dropdown-grid .btn.btn-default:active, [data-top-navbar-color=info] .dropdown-grid .btn.btn-default:focus, [data-top-navbar-color=info] .dropdown-grid .btn.btn-default:visited, [data-top-navbar-color=info] .dropdown-grid .btn.btn-default.focus,\n[data-top-navbar-color=info] .dropdown-tasks .btn.btn-default:hover,\n[data-top-navbar-color=info] .dropdown-tasks .btn.btn-default:active,\n[data-top-navbar-color=info] .dropdown-tasks .btn.btn-default:focus,\n[data-top-navbar-color=info] .dropdown-tasks .btn.btn-default:visited,\n[data-top-navbar-color=info] .dropdown-tasks .btn.btn-default.focus,\n[data-top-navbar-color=info] .dropdown-flags .btn.btn-default:hover,\n[data-top-navbar-color=info] .dropdown-flags .btn.btn-default:active,\n[data-top-navbar-color=info] .dropdown-flags .btn.btn-default:focus,\n[data-top-navbar-color=info] .dropdown-flags .btn.btn-default:visited,\n[data-top-navbar-color=info] .dropdown-flags .btn.btn-default.focus,\n[data-top-navbar-color=info] .dropdown-notifications .btn.btn-default:hover,\n[data-top-navbar-color=info] .dropdown-notifications .btn.btn-default:active,\n[data-top-navbar-color=info] .dropdown-notifications .btn.btn-default:focus,\n[data-top-navbar-color=info] .dropdown-notifications .btn.btn-default:visited,\n[data-top-navbar-color=info] .dropdown-notifications .btn.btn-default.focus,\n[data-top-navbar-color=info] .dropdown-mega-menu .btn.btn-default:hover,\n[data-top-navbar-color=info] .dropdown-mega-menu .btn.btn-default:active,\n[data-top-navbar-color=info] .dropdown-mega-menu .btn.btn-default:focus,\n[data-top-navbar-color=info] .dropdown-mega-menu .btn.btn-default:visited,\n[data-top-navbar-color=info] .dropdown-mega-menu .btn.btn-default.focus,\n[data-top-navbar-color=info] .dropdown-user .btn.btn-default:hover,\n[data-top-navbar-color=info] .dropdown-user .btn.btn-default:active,\n[data-top-navbar-color=info] .dropdown-user .btn.btn-default:focus,\n[data-top-navbar-color=info] .dropdown-user .btn.btn-default:visited,\n[data-top-navbar-color=info] .dropdown-user .btn.btn-default.focus {\n  border: none;\n  background: #11cdef;\n  color: #dee2e9;\n}\n[data-top-navbar-color=info] .dropdown-grid .dropdown-menu,\n[data-top-navbar-color=info] .dropdown-tasks .dropdown-menu,\n[data-top-navbar-color=info] .dropdown-flags .dropdown-menu,\n[data-top-navbar-color=info] .dropdown-notifications .dropdown-menu,\n[data-top-navbar-color=info] .dropdown-mega-menu .dropdown-menu,\n[data-top-navbar-color=info] .dropdown-user .dropdown-menu {\n  background: #11cdef;\n  color: #dee2e9;\n}\n[data-top-navbar-color=info] .dropdown-grid .dropdown-menu .dropdown-title,\n[data-top-navbar-color=info] .dropdown-tasks .dropdown-menu .dropdown-title,\n[data-top-navbar-color=info] .dropdown-flags .dropdown-menu .dropdown-title,\n[data-top-navbar-color=info] .dropdown-notifications .dropdown-menu .dropdown-title,\n[data-top-navbar-color=info] .dropdown-mega-menu .dropdown-menu .dropdown-title,\n[data-top-navbar-color=info] .dropdown-user .dropdown-menu .dropdown-title {\n  background: #4ad9f3;\n  color: #dee2e9;\n}\n[data-top-navbar-color=info] .dropdown-grid .dropdown-menu .dropdown-item,\n[data-top-navbar-color=info] .dropdown-tasks .dropdown-menu .dropdown-item,\n[data-top-navbar-color=info] .dropdown-flags .dropdown-menu .dropdown-item,\n[data-top-navbar-color=info] .dropdown-notifications .dropdown-menu .dropdown-item,\n[data-top-navbar-color=info] .dropdown-mega-menu .dropdown-menu .dropdown-item,\n[data-top-navbar-color=info] .dropdown-user .dropdown-menu .dropdown-item {\n  background: #11cdef;\n  color: #dee2e9;\n}\n[data-top-navbar-color=info] .dropdown-grid .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=info] .dropdown-tasks .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=info] .dropdown-flags .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=info] .dropdown-notifications .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=info] .dropdown-mega-menu .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=info] .dropdown-user .dropdown-menu .dropdown-item:hover {\n  background: #1fd0f0;\n  color: #dee2e9;\n}\n[data-top-navbar-color=warning] .navbar.navbar-design-basic {\n  background: #fb6340;\n  color: #dee2e9;\n}\n[data-top-navbar-color=warning] .navbar.navbar-design-basic .nav-link {\n  color: #dee2e9;\n}\n[data-top-navbar-color=warning] .navbar.navbar-design-basic .dropdown .dropdown-item a {\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=warning] .navbar.navbar-design-basic .input-group .input-group-addon,\n[data-top-navbar-color=warning] .navbar.navbar-design-basic .input-group .input-group-text {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  text-align: center;\n  background-clip: padding-box;\n}\n[data-top-navbar-color=warning] .navbar.navbar-design-basic .input-group .form-control {\n  color: #dee2e9;\n  background-color: #fc7b5e;\n  border-color: #fc7b5e;\n}\n[data-top-navbar-color=warning] .navbar-design-basic .navbar-nav .nav-link:hover, [data-top-navbar-color=warning] .navbar-design-basic .nav .nav-link:hover {\n  color: #fff;\n}\n[data-top-navbar-color=warning] .navbar-design-basic .navbar-nav .nav-link.cta, [data-top-navbar-color=warning] .navbar-design-basic .nav .nav-link.cta {\n  background: #0059FF;\n  color: white;\n}\n[data-top-navbar-color=warning] .navbar-design-basic .navbar-nav .nav-link.cta:hover, [data-top-navbar-color=warning] .navbar-design-basic .navbar-nav .nav-link.cta:focus, [data-top-navbar-color=warning] .navbar-design-basic .nav .nav-link.cta:hover, [data-top-navbar-color=warning] .navbar-design-basic .nav .nav-link.cta:focus {\n  background: #0050e6;\n  color: #fff;\n}\n[data-top-navbar-color=warning] .navbar-design-basic .navbar-nav .nav-link.cta:active, [data-top-navbar-color=warning] .navbar-design-basic .nav .nav-link.cta:active {\n  background: #0047cc;\n  color: #fff;\n}\n[data-top-navbar-color=warning] .navbar-search-form .search-input .input-group .input-group-text {\n  color: #dee2e9;\n}\n[data-top-navbar-color=warning] .navbar-search-form .search-input .input-group .form-control ::-webkit-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=warning] .navbar-search-form .search-input .input-group .form-control :-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=warning] .navbar-search-form .search-input .input-group .form-control ::-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=warning] .navbar-search-form .search-input .input-group .form-control :-ms-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=warning] .navbar-search-form .search-input .input-group.focused .form-control {\n  background-color: #fb6f4f;\n}\n[data-top-navbar-color=warning] .navbar-search-form.search-button-wrapper:hover {\n  background-color: #fa3e13;\n}\n[data-top-navbar-color=warning] .dropdown-grid .btn.btn-default,\n[data-top-navbar-color=warning] .dropdown-tasks .btn.btn-default,\n[data-top-navbar-color=warning] .dropdown-flags .btn.btn-default,\n[data-top-navbar-color=warning] .dropdown-notifications .btn.btn-default,\n[data-top-navbar-color=warning] .dropdown-mega-menu .btn.btn-default,\n[data-top-navbar-color=warning] .dropdown-user .btn.btn-default {\n  border: none;\n  background: #fb6340;\n  color: #dee2e9;\n}\n[data-top-navbar-color=warning] .dropdown-grid .btn.btn-default:hover, [data-top-navbar-color=warning] .dropdown-grid .btn.btn-default:active, [data-top-navbar-color=warning] .dropdown-grid .btn.btn-default:focus, [data-top-navbar-color=warning] .dropdown-grid .btn.btn-default:visited, [data-top-navbar-color=warning] .dropdown-grid .btn.btn-default.focus,\n[data-top-navbar-color=warning] .dropdown-tasks .btn.btn-default:hover,\n[data-top-navbar-color=warning] .dropdown-tasks .btn.btn-default:active,\n[data-top-navbar-color=warning] .dropdown-tasks .btn.btn-default:focus,\n[data-top-navbar-color=warning] .dropdown-tasks .btn.btn-default:visited,\n[data-top-navbar-color=warning] .dropdown-tasks .btn.btn-default.focus,\n[data-top-navbar-color=warning] .dropdown-flags .btn.btn-default:hover,\n[data-top-navbar-color=warning] .dropdown-flags .btn.btn-default:active,\n[data-top-navbar-color=warning] .dropdown-flags .btn.btn-default:focus,\n[data-top-navbar-color=warning] .dropdown-flags .btn.btn-default:visited,\n[data-top-navbar-color=warning] .dropdown-flags .btn.btn-default.focus,\n[data-top-navbar-color=warning] .dropdown-notifications .btn.btn-default:hover,\n[data-top-navbar-color=warning] .dropdown-notifications .btn.btn-default:active,\n[data-top-navbar-color=warning] .dropdown-notifications .btn.btn-default:focus,\n[data-top-navbar-color=warning] .dropdown-notifications .btn.btn-default:visited,\n[data-top-navbar-color=warning] .dropdown-notifications .btn.btn-default.focus,\n[data-top-navbar-color=warning] .dropdown-mega-menu .btn.btn-default:hover,\n[data-top-navbar-color=warning] .dropdown-mega-menu .btn.btn-default:active,\n[data-top-navbar-color=warning] .dropdown-mega-menu .btn.btn-default:focus,\n[data-top-navbar-color=warning] .dropdown-mega-menu .btn.btn-default:visited,\n[data-top-navbar-color=warning] .dropdown-mega-menu .btn.btn-default.focus,\n[data-top-navbar-color=warning] .dropdown-user .btn.btn-default:hover,\n[data-top-navbar-color=warning] .dropdown-user .btn.btn-default:active,\n[data-top-navbar-color=warning] .dropdown-user .btn.btn-default:focus,\n[data-top-navbar-color=warning] .dropdown-user .btn.btn-default:visited,\n[data-top-navbar-color=warning] .dropdown-user .btn.btn-default.focus {\n  border: none;\n  background: #fb6340;\n  color: #dee2e9;\n}\n[data-top-navbar-color=warning] .dropdown-grid .dropdown-menu,\n[data-top-navbar-color=warning] .dropdown-tasks .dropdown-menu,\n[data-top-navbar-color=warning] .dropdown-flags .dropdown-menu,\n[data-top-navbar-color=warning] .dropdown-notifications .dropdown-menu,\n[data-top-navbar-color=warning] .dropdown-mega-menu .dropdown-menu,\n[data-top-navbar-color=warning] .dropdown-user .dropdown-menu {\n  background: #fb6340;\n  color: #dee2e9;\n}\n[data-top-navbar-color=warning] .dropdown-grid .dropdown-menu .dropdown-title,\n[data-top-navbar-color=warning] .dropdown-tasks .dropdown-menu .dropdown-title,\n[data-top-navbar-color=warning] .dropdown-flags .dropdown-menu .dropdown-title,\n[data-top-navbar-color=warning] .dropdown-notifications .dropdown-menu .dropdown-title,\n[data-top-navbar-color=warning] .dropdown-mega-menu .dropdown-menu .dropdown-title,\n[data-top-navbar-color=warning] .dropdown-user .dropdown-menu .dropdown-title {\n  background: #fc947c;\n  color: #dee2e9;\n}\n[data-top-navbar-color=warning] .dropdown-grid .dropdown-menu .dropdown-item,\n[data-top-navbar-color=warning] .dropdown-tasks .dropdown-menu .dropdown-item,\n[data-top-navbar-color=warning] .dropdown-flags .dropdown-menu .dropdown-item,\n[data-top-navbar-color=warning] .dropdown-notifications .dropdown-menu .dropdown-item,\n[data-top-navbar-color=warning] .dropdown-mega-menu .dropdown-menu .dropdown-item,\n[data-top-navbar-color=warning] .dropdown-user .dropdown-menu .dropdown-item {\n  background: #fb6340;\n  color: #dee2e9;\n}\n[data-top-navbar-color=warning] .dropdown-grid .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=warning] .dropdown-tasks .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=warning] .dropdown-flags .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=warning] .dropdown-notifications .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=warning] .dropdown-mega-menu .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=warning] .dropdown-user .dropdown-menu .dropdown-item:hover {\n  background: #fb6f4f;\n  color: #dee2e9;\n}\n[data-top-navbar-color=danger] .navbar.navbar-design-basic {\n  background: #f5365c;\n  color: #dee2e9;\n}\n[data-top-navbar-color=danger] .navbar.navbar-design-basic .nav-link {\n  color: #dee2e9;\n}\n[data-top-navbar-color=danger] .navbar.navbar-design-basic .dropdown .dropdown-item a {\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=danger] .navbar.navbar-design-basic .input-group .input-group-addon,\n[data-top-navbar-color=danger] .navbar.navbar-design-basic .input-group .input-group-text {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  text-align: center;\n  background-clip: padding-box;\n}\n[data-top-navbar-color=danger] .navbar.navbar-design-basic .input-group .form-control {\n  color: #dee2e9;\n  background-color: #f65374;\n  border-color: #f65374;\n}\n[data-top-navbar-color=danger] .navbar-design-basic .navbar-nav .nav-link:hover, [data-top-navbar-color=danger] .navbar-design-basic .nav .nav-link:hover {\n  color: #fff;\n}\n[data-top-navbar-color=danger] .navbar-design-basic .navbar-nav .nav-link.cta, [data-top-navbar-color=danger] .navbar-design-basic .nav .nav-link.cta {\n  background: #0059FF;\n  color: white;\n}\n[data-top-navbar-color=danger] .navbar-design-basic .navbar-nav .nav-link.cta:hover, [data-top-navbar-color=danger] .navbar-design-basic .navbar-nav .nav-link.cta:focus, [data-top-navbar-color=danger] .navbar-design-basic .nav .nav-link.cta:hover, [data-top-navbar-color=danger] .navbar-design-basic .nav .nav-link.cta:focus {\n  background: #0050e6;\n  color: #fff;\n}\n[data-top-navbar-color=danger] .navbar-design-basic .navbar-nav .nav-link.cta:active, [data-top-navbar-color=danger] .navbar-design-basic .nav .nav-link.cta:active {\n  background: #0047cc;\n  color: #fff;\n}\n[data-top-navbar-color=danger] .navbar-search-form .search-input .input-group .input-group-text {\n  color: #dee2e9;\n}\n[data-top-navbar-color=danger] .navbar-search-form .search-input .input-group .form-control ::-webkit-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=danger] .navbar-search-form .search-input .input-group .form-control :-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=danger] .navbar-search-form .search-input .input-group .form-control ::-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=danger] .navbar-search-form .search-input .input-group .form-control :-ms-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=danger] .navbar-search-form .search-input .input-group.focused .form-control {\n  background-color: #f64568;\n}\n[data-top-navbar-color=danger] .navbar-search-form.search-button-wrapper:hover {\n  background-color: #f10c3a;\n}\n[data-top-navbar-color=danger] .dropdown-grid .btn.btn-default,\n[data-top-navbar-color=danger] .dropdown-tasks .btn.btn-default,\n[data-top-navbar-color=danger] .dropdown-flags .btn.btn-default,\n[data-top-navbar-color=danger] .dropdown-notifications .btn.btn-default,\n[data-top-navbar-color=danger] .dropdown-mega-menu .btn.btn-default,\n[data-top-navbar-color=danger] .dropdown-user .btn.btn-default {\n  border: none;\n  background: #f5365c;\n  color: #dee2e9;\n}\n[data-top-navbar-color=danger] .dropdown-grid .btn.btn-default:hover, [data-top-navbar-color=danger] .dropdown-grid .btn.btn-default:active, [data-top-navbar-color=danger] .dropdown-grid .btn.btn-default:focus, [data-top-navbar-color=danger] .dropdown-grid .btn.btn-default:visited, [data-top-navbar-color=danger] .dropdown-grid .btn.btn-default.focus,\n[data-top-navbar-color=danger] .dropdown-tasks .btn.btn-default:hover,\n[data-top-navbar-color=danger] .dropdown-tasks .btn.btn-default:active,\n[data-top-navbar-color=danger] .dropdown-tasks .btn.btn-default:focus,\n[data-top-navbar-color=danger] .dropdown-tasks .btn.btn-default:visited,\n[data-top-navbar-color=danger] .dropdown-tasks .btn.btn-default.focus,\n[data-top-navbar-color=danger] .dropdown-flags .btn.btn-default:hover,\n[data-top-navbar-color=danger] .dropdown-flags .btn.btn-default:active,\n[data-top-navbar-color=danger] .dropdown-flags .btn.btn-default:focus,\n[data-top-navbar-color=danger] .dropdown-flags .btn.btn-default:visited,\n[data-top-navbar-color=danger] .dropdown-flags .btn.btn-default.focus,\n[data-top-navbar-color=danger] .dropdown-notifications .btn.btn-default:hover,\n[data-top-navbar-color=danger] .dropdown-notifications .btn.btn-default:active,\n[data-top-navbar-color=danger] .dropdown-notifications .btn.btn-default:focus,\n[data-top-navbar-color=danger] .dropdown-notifications .btn.btn-default:visited,\n[data-top-navbar-color=danger] .dropdown-notifications .btn.btn-default.focus,\n[data-top-navbar-color=danger] .dropdown-mega-menu .btn.btn-default:hover,\n[data-top-navbar-color=danger] .dropdown-mega-menu .btn.btn-default:active,\n[data-top-navbar-color=danger] .dropdown-mega-menu .btn.btn-default:focus,\n[data-top-navbar-color=danger] .dropdown-mega-menu .btn.btn-default:visited,\n[data-top-navbar-color=danger] .dropdown-mega-menu .btn.btn-default.focus,\n[data-top-navbar-color=danger] .dropdown-user .btn.btn-default:hover,\n[data-top-navbar-color=danger] .dropdown-user .btn.btn-default:active,\n[data-top-navbar-color=danger] .dropdown-user .btn.btn-default:focus,\n[data-top-navbar-color=danger] .dropdown-user .btn.btn-default:visited,\n[data-top-navbar-color=danger] .dropdown-user .btn.btn-default.focus {\n  border: none;\n  background: #f5365c;\n  color: #dee2e9;\n}\n[data-top-navbar-color=danger] .dropdown-grid .dropdown-menu,\n[data-top-navbar-color=danger] .dropdown-tasks .dropdown-menu,\n[data-top-navbar-color=danger] .dropdown-flags .dropdown-menu,\n[data-top-navbar-color=danger] .dropdown-notifications .dropdown-menu,\n[data-top-navbar-color=danger] .dropdown-mega-menu .dropdown-menu,\n[data-top-navbar-color=danger] .dropdown-user .dropdown-menu {\n  background: #f5365c;\n  color: #dee2e9;\n}\n[data-top-navbar-color=danger] .dropdown-grid .dropdown-menu .dropdown-title,\n[data-top-navbar-color=danger] .dropdown-tasks .dropdown-menu .dropdown-title,\n[data-top-navbar-color=danger] .dropdown-flags .dropdown-menu .dropdown-title,\n[data-top-navbar-color=danger] .dropdown-notifications .dropdown-menu .dropdown-title,\n[data-top-navbar-color=danger] .dropdown-mega-menu .dropdown-menu .dropdown-title,\n[data-top-navbar-color=danger] .dropdown-user .dropdown-menu .dropdown-title {\n  background: #f8708b;\n  color: #dee2e9;\n}\n[data-top-navbar-color=danger] .dropdown-grid .dropdown-menu .dropdown-item,\n[data-top-navbar-color=danger] .dropdown-tasks .dropdown-menu .dropdown-item,\n[data-top-navbar-color=danger] .dropdown-flags .dropdown-menu .dropdown-item,\n[data-top-navbar-color=danger] .dropdown-notifications .dropdown-menu .dropdown-item,\n[data-top-navbar-color=danger] .dropdown-mega-menu .dropdown-menu .dropdown-item,\n[data-top-navbar-color=danger] .dropdown-user .dropdown-menu .dropdown-item {\n  background: #f5365c;\n  color: #dee2e9;\n}\n[data-top-navbar-color=danger] .dropdown-grid .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=danger] .dropdown-tasks .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=danger] .dropdown-flags .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=danger] .dropdown-notifications .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=danger] .dropdown-mega-menu .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=danger] .dropdown-user .dropdown-menu .dropdown-item:hover {\n  background: #f64568;\n  color: #dee2e9;\n}\n[data-top-navbar-color=white] .navbar.navbar-design-basic {\n  background: #fff;\n  color: #6c7580;\n}\n[data-top-navbar-color=white] .navbar.navbar-design-basic .nav-link {\n  color: #6c7580;\n}\n[data-top-navbar-color=white] .navbar.navbar-design-basic .dropdown .dropdown-item a {\n  color: #6c7580 !important;\n}\n[data-top-navbar-color=white] .navbar.navbar-design-basic .input-group .input-group-addon,\n[data-top-navbar-color=white] .navbar.navbar-design-basic .input-group .input-group-text {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  text-align: center;\n  background-clip: padding-box;\n}\n[data-top-navbar-color=white] .navbar.navbar-design-basic .input-group .form-control {\n  color: #6c7580;\n  background-color: #f0f0f0;\n  border-color: #f0f0f0;\n}\n[data-top-navbar-color=white] .navbar-design-basic .navbar-nav .nav-link:hover, [data-top-navbar-color=white] .navbar-design-basic .nav .nav-link:hover {\n  color: #000;\n}\n[data-top-navbar-color=white] .navbar-design-basic .navbar-nav .nav-link.cta, [data-top-navbar-color=white] .navbar-design-basic .nav .nav-link.cta {\n  background: #0059FF;\n  color: white;\n}\n[data-top-navbar-color=white] .navbar-design-basic .navbar-nav .nav-link.cta:hover, [data-top-navbar-color=white] .navbar-design-basic .navbar-nav .nav-link.cta:focus, [data-top-navbar-color=white] .navbar-design-basic .nav .nav-link.cta:hover, [data-top-navbar-color=white] .navbar-design-basic .nav .nav-link.cta:focus {\n  background: #0050e6;\n  color: #fff;\n}\n[data-top-navbar-color=white] .navbar-design-basic .navbar-nav .nav-link.cta:active, [data-top-navbar-color=white] .navbar-design-basic .nav .nav-link.cta:active {\n  background: #0047cc;\n  color: #fff;\n}\n[data-top-navbar-color=white] .navbar-search-form .search-input .input-group .input-group-text {\n  color: #6c7580;\n}\n[data-top-navbar-color=white] .navbar-search-form .search-input .input-group .form-control ::-webkit-input-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=white] .navbar-search-form .search-input .input-group .form-control :-moz-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=white] .navbar-search-form .search-input .input-group .form-control ::-moz-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=white] .navbar-search-form .search-input .input-group .form-control :-ms-input-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=white] .navbar-search-form .search-input .input-group.focused .form-control {\n  background-color: #e8e8e8;\n}\n[data-top-navbar-color=white] .navbar-search-form.search-button-wrapper:hover {\n  background-color: #c9c9c9;\n}\n[data-top-navbar-color=white] .dropdown-grid .btn.btn-default,\n[data-top-navbar-color=white] .dropdown-tasks .btn.btn-default,\n[data-top-navbar-color=white] .dropdown-flags .btn.btn-default,\n[data-top-navbar-color=white] .dropdown-notifications .btn.btn-default,\n[data-top-navbar-color=white] .dropdown-mega-menu .btn.btn-default,\n[data-top-navbar-color=white] .dropdown-user .btn.btn-default {\n  border: none;\n  background: #fff;\n  color: #6c7580;\n}\n[data-top-navbar-color=white] .dropdown-grid .btn.btn-default:hover, [data-top-navbar-color=white] .dropdown-grid .btn.btn-default:active, [data-top-navbar-color=white] .dropdown-grid .btn.btn-default:focus, [data-top-navbar-color=white] .dropdown-grid .btn.btn-default:visited, [data-top-navbar-color=white] .dropdown-grid .btn.btn-default.focus,\n[data-top-navbar-color=white] .dropdown-tasks .btn.btn-default:hover,\n[data-top-navbar-color=white] .dropdown-tasks .btn.btn-default:active,\n[data-top-navbar-color=white] .dropdown-tasks .btn.btn-default:focus,\n[data-top-navbar-color=white] .dropdown-tasks .btn.btn-default:visited,\n[data-top-navbar-color=white] .dropdown-tasks .btn.btn-default.focus,\n[data-top-navbar-color=white] .dropdown-flags .btn.btn-default:hover,\n[data-top-navbar-color=white] .dropdown-flags .btn.btn-default:active,\n[data-top-navbar-color=white] .dropdown-flags .btn.btn-default:focus,\n[data-top-navbar-color=white] .dropdown-flags .btn.btn-default:visited,\n[data-top-navbar-color=white] .dropdown-flags .btn.btn-default.focus,\n[data-top-navbar-color=white] .dropdown-notifications .btn.btn-default:hover,\n[data-top-navbar-color=white] .dropdown-notifications .btn.btn-default:active,\n[data-top-navbar-color=white] .dropdown-notifications .btn.btn-default:focus,\n[data-top-navbar-color=white] .dropdown-notifications .btn.btn-default:visited,\n[data-top-navbar-color=white] .dropdown-notifications .btn.btn-default.focus,\n[data-top-navbar-color=white] .dropdown-mega-menu .btn.btn-default:hover,\n[data-top-navbar-color=white] .dropdown-mega-menu .btn.btn-default:active,\n[data-top-navbar-color=white] .dropdown-mega-menu .btn.btn-default:focus,\n[data-top-navbar-color=white] .dropdown-mega-menu .btn.btn-default:visited,\n[data-top-navbar-color=white] .dropdown-mega-menu .btn.btn-default.focus,\n[data-top-navbar-color=white] .dropdown-user .btn.btn-default:hover,\n[data-top-navbar-color=white] .dropdown-user .btn.btn-default:active,\n[data-top-navbar-color=white] .dropdown-user .btn.btn-default:focus,\n[data-top-navbar-color=white] .dropdown-user .btn.btn-default:visited,\n[data-top-navbar-color=white] .dropdown-user .btn.btn-default.focus {\n  border: none;\n  background: #fff;\n  color: #6c7580;\n}\n[data-top-navbar-color=white] .dropdown-grid .dropdown-menu,\n[data-top-navbar-color=white] .dropdown-tasks .dropdown-menu,\n[data-top-navbar-color=white] .dropdown-flags .dropdown-menu,\n[data-top-navbar-color=white] .dropdown-notifications .dropdown-menu,\n[data-top-navbar-color=white] .dropdown-mega-menu .dropdown-menu,\n[data-top-navbar-color=white] .dropdown-user .dropdown-menu {\n  background: #fff;\n  color: #6c7580;\n}\n[data-top-navbar-color=white] .dropdown-grid .dropdown-menu .dropdown-title,\n[data-top-navbar-color=white] .dropdown-tasks .dropdown-menu .dropdown-title,\n[data-top-navbar-color=white] .dropdown-flags .dropdown-menu .dropdown-title,\n[data-top-navbar-color=white] .dropdown-notifications .dropdown-menu .dropdown-title,\n[data-top-navbar-color=white] .dropdown-mega-menu .dropdown-menu .dropdown-title,\n[data-top-navbar-color=white] .dropdown-user .dropdown-menu .dropdown-title {\n  background: #e0e0e0;\n  color: #6c7580;\n}\n[data-top-navbar-color=white] .dropdown-grid .dropdown-menu .dropdown-item,\n[data-top-navbar-color=white] .dropdown-tasks .dropdown-menu .dropdown-item,\n[data-top-navbar-color=white] .dropdown-flags .dropdown-menu .dropdown-item,\n[data-top-navbar-color=white] .dropdown-notifications .dropdown-menu .dropdown-item,\n[data-top-navbar-color=white] .dropdown-mega-menu .dropdown-menu .dropdown-item,\n[data-top-navbar-color=white] .dropdown-user .dropdown-menu .dropdown-item {\n  background: #fff;\n  color: #6c7580;\n}\n[data-top-navbar-color=white] .dropdown-grid .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=white] .dropdown-tasks .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=white] .dropdown-flags .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=white] .dropdown-notifications .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=white] .dropdown-mega-menu .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=white] .dropdown-user .dropdown-menu .dropdown-item:hover {\n  background: #f7f7f7;\n  color: #6c7580;\n}\n[data-top-navbar-color=whitish] .navbar.navbar-design-basic {\n  background: #fafbfd;\n  color: #6c7580;\n}\n[data-top-navbar-color=whitish] .navbar.navbar-design-basic .nav-link {\n  color: #6c7580;\n}\n[data-top-navbar-color=whitish] .navbar.navbar-design-basic .dropdown .dropdown-item a {\n  color: #6c7580 !important;\n}\n[data-top-navbar-color=whitish] .navbar.navbar-design-basic .input-group .input-group-addon,\n[data-top-navbar-color=whitish] .navbar.navbar-design-basic .input-group .input-group-text {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  text-align: center;\n  background-clip: padding-box;\n}\n[data-top-navbar-color=whitish] .navbar.navbar-design-basic .input-group .form-control {\n  color: #6c7580;\n  background-color: #e4eaf4;\n  border-color: #e4eaf4;\n}\n[data-top-navbar-color=whitish] .navbar-design-basic .navbar-nav .nav-link:hover, [data-top-navbar-color=whitish] .navbar-design-basic .nav .nav-link:hover {\n  color: #495060;\n}\n[data-top-navbar-color=whitish] .navbar-design-basic .navbar-nav .nav-link.cta, [data-top-navbar-color=whitish] .navbar-design-basic .nav .nav-link.cta {\n  background: #0059FF;\n  color: white;\n}\n[data-top-navbar-color=whitish] .navbar-design-basic .navbar-nav .nav-link.cta:hover, [data-top-navbar-color=whitish] .navbar-design-basic .navbar-nav .nav-link.cta:focus, [data-top-navbar-color=whitish] .navbar-design-basic .nav .nav-link.cta:hover, [data-top-navbar-color=whitish] .navbar-design-basic .nav .nav-link.cta:focus {\n  background: #0050e6;\n  color: #fff;\n}\n[data-top-navbar-color=whitish] .navbar-design-basic .navbar-nav .nav-link.cta:active, [data-top-navbar-color=whitish] .navbar-design-basic .nav .nav-link.cta:active {\n  background: #0047cc;\n  color: #fff;\n}\n[data-top-navbar-color=whitish] .navbar-search-form .search-input .input-group .input-group-text {\n  color: #6c7580;\n}\n[data-top-navbar-color=whitish] .navbar-search-form .search-input .input-group .form-control ::-webkit-input-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=whitish] .navbar-search-form .search-input .input-group .form-control :-moz-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=whitish] .navbar-search-form .search-input .input-group .form-control ::-moz-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=whitish] .navbar-search-form .search-input .input-group .form-control :-ms-input-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=whitish] .navbar-search-form .search-input .input-group.focused .form-control {\n  background-color: #d9e1f0;\n}\n[data-top-navbar-color=whitish] .navbar-search-form.search-button-wrapper:hover {\n  background-color: #aebede;\n}\n[data-top-navbar-color=whitish] .dropdown-grid .btn.btn-default,\n[data-top-navbar-color=whitish] .dropdown-tasks .btn.btn-default,\n[data-top-navbar-color=whitish] .dropdown-flags .btn.btn-default,\n[data-top-navbar-color=whitish] .dropdown-notifications .btn.btn-default,\n[data-top-navbar-color=whitish] .dropdown-mega-menu .btn.btn-default,\n[data-top-navbar-color=whitish] .dropdown-user .btn.btn-default {\n  border: none;\n  background: #fafbfd;\n  color: #6c7580;\n}\n[data-top-navbar-color=whitish] .dropdown-grid .btn.btn-default:hover, [data-top-navbar-color=whitish] .dropdown-grid .btn.btn-default:active, [data-top-navbar-color=whitish] .dropdown-grid .btn.btn-default:focus, [data-top-navbar-color=whitish] .dropdown-grid .btn.btn-default:visited, [data-top-navbar-color=whitish] .dropdown-grid .btn.btn-default.focus,\n[data-top-navbar-color=whitish] .dropdown-tasks .btn.btn-default:hover,\n[data-top-navbar-color=whitish] .dropdown-tasks .btn.btn-default:active,\n[data-top-navbar-color=whitish] .dropdown-tasks .btn.btn-default:focus,\n[data-top-navbar-color=whitish] .dropdown-tasks .btn.btn-default:visited,\n[data-top-navbar-color=whitish] .dropdown-tasks .btn.btn-default.focus,\n[data-top-navbar-color=whitish] .dropdown-flags .btn.btn-default:hover,\n[data-top-navbar-color=whitish] .dropdown-flags .btn.btn-default:active,\n[data-top-navbar-color=whitish] .dropdown-flags .btn.btn-default:focus,\n[data-top-navbar-color=whitish] .dropdown-flags .btn.btn-default:visited,\n[data-top-navbar-color=whitish] .dropdown-flags .btn.btn-default.focus,\n[data-top-navbar-color=whitish] .dropdown-notifications .btn.btn-default:hover,\n[data-top-navbar-color=whitish] .dropdown-notifications .btn.btn-default:active,\n[data-top-navbar-color=whitish] .dropdown-notifications .btn.btn-default:focus,\n[data-top-navbar-color=whitish] .dropdown-notifications .btn.btn-default:visited,\n[data-top-navbar-color=whitish] .dropdown-notifications .btn.btn-default.focus,\n[data-top-navbar-color=whitish] .dropdown-mega-menu .btn.btn-default:hover,\n[data-top-navbar-color=whitish] .dropdown-mega-menu .btn.btn-default:active,\n[data-top-navbar-color=whitish] .dropdown-mega-menu .btn.btn-default:focus,\n[data-top-navbar-color=whitish] .dropdown-mega-menu .btn.btn-default:visited,\n[data-top-navbar-color=whitish] .dropdown-mega-menu .btn.btn-default.focus,\n[data-top-navbar-color=whitish] .dropdown-user .btn.btn-default:hover,\n[data-top-navbar-color=whitish] .dropdown-user .btn.btn-default:active,\n[data-top-navbar-color=whitish] .dropdown-user .btn.btn-default:focus,\n[data-top-navbar-color=whitish] .dropdown-user .btn.btn-default:visited,\n[data-top-navbar-color=whitish] .dropdown-user .btn.btn-default.focus {\n  border: none;\n  background: #fafbfd;\n  color: #6c7580;\n}\n[data-top-navbar-color=whitish] .dropdown-grid .dropdown-menu,\n[data-top-navbar-color=whitish] .dropdown-tasks .dropdown-menu,\n[data-top-navbar-color=whitish] .dropdown-flags .dropdown-menu,\n[data-top-navbar-color=whitish] .dropdown-notifications .dropdown-menu,\n[data-top-navbar-color=whitish] .dropdown-mega-menu .dropdown-menu,\n[data-top-navbar-color=whitish] .dropdown-user .dropdown-menu {\n  background: #fafbfd;\n  color: #6c7580;\n}\n[data-top-navbar-color=whitish] .dropdown-grid .dropdown-menu .dropdown-title,\n[data-top-navbar-color=whitish] .dropdown-tasks .dropdown-menu .dropdown-title,\n[data-top-navbar-color=whitish] .dropdown-flags .dropdown-menu .dropdown-title,\n[data-top-navbar-color=whitish] .dropdown-notifications .dropdown-menu .dropdown-title,\n[data-top-navbar-color=whitish] .dropdown-mega-menu .dropdown-menu .dropdown-title,\n[data-top-navbar-color=whitish] .dropdown-user .dropdown-menu .dropdown-title {\n  background: #ced8ec;\n  color: #6c7580;\n}\n[data-top-navbar-color=whitish] .dropdown-grid .dropdown-menu .dropdown-item,\n[data-top-navbar-color=whitish] .dropdown-tasks .dropdown-menu .dropdown-item,\n[data-top-navbar-color=whitish] .dropdown-flags .dropdown-menu .dropdown-item,\n[data-top-navbar-color=whitish] .dropdown-notifications .dropdown-menu .dropdown-item,\n[data-top-navbar-color=whitish] .dropdown-mega-menu .dropdown-menu .dropdown-item,\n[data-top-navbar-color=whitish] .dropdown-user .dropdown-menu .dropdown-item {\n  background: #fafbfd;\n  color: #6c7580;\n}\n[data-top-navbar-color=whitish] .dropdown-grid .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=whitish] .dropdown-tasks .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=whitish] .dropdown-flags .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=whitish] .dropdown-notifications .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=whitish] .dropdown-mega-menu .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=whitish] .dropdown-user .dropdown-menu .dropdown-item:hover {\n  background: #eff2f9;\n  color: #6c7580;\n}\n[data-top-navbar-color=light] .navbar.navbar-design-basic {\n  background: #dee2e9;\n  color: #6c7580;\n  border-bottom: 1px solid #b9c2d1;\n}\n[data-top-navbar-color=light] .navbar.navbar-design-basic .nav-link {\n  color: #6c7580;\n}\n[data-top-navbar-color=light] .navbar.navbar-design-basic .dropdown .dropdown-item a {\n  color: #6c7580 !important;\n}\n[data-top-navbar-color=light] .navbar.navbar-design-basic .input-group .input-group-addon,\n[data-top-navbar-color=light] .navbar.navbar-design-basic .input-group .input-group-text {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  text-align: center;\n  background-clip: padding-box;\n}\n[data-top-navbar-color=light] .navbar.navbar-design-basic .input-group .form-control {\n  color: #6c7580;\n  background-color: #ccd2dd;\n  border-color: #ccd2dd;\n}\n[data-top-navbar-color=light] .navbar-design-basic .navbar-nav .nav-link:hover, [data-top-navbar-color=light] .navbar-design-basic .nav .nav-link:hover {\n  color: #495060;\n}\n[data-top-navbar-color=light] .navbar-design-basic .navbar-nav .nav-link.cta, [data-top-navbar-color=light] .navbar-design-basic .nav .nav-link.cta {\n  background: #0059FF;\n  color: white;\n}\n[data-top-navbar-color=light] .navbar-design-basic .navbar-nav .nav-link.cta:hover, [data-top-navbar-color=light] .navbar-design-basic .navbar-nav .nav-link.cta:focus, [data-top-navbar-color=light] .navbar-design-basic .nav .nav-link.cta:hover, [data-top-navbar-color=light] .navbar-design-basic .nav .nav-link.cta:focus {\n  background: #0050e6;\n  color: #fff;\n}\n[data-top-navbar-color=light] .navbar-design-basic .navbar-nav .nav-link.cta:active, [data-top-navbar-color=light] .navbar-design-basic .nav .nav-link.cta:active {\n  background: #0047cc;\n  color: #fff;\n}\n[data-top-navbar-color=light] .navbar-search-form .search-input .input-group .input-group-text {\n  color: #6c7580;\n}\n[data-top-navbar-color=light] .navbar-search-form .search-input .input-group .form-control ::-webkit-input-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=light] .navbar-search-form .search-input .input-group .form-control :-moz-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=light] .navbar-search-form .search-input .input-group .form-control ::-moz-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=light] .navbar-search-form .search-input .input-group .form-control :-ms-input-placeholder {\n  color: #6c7580;\n}\n[data-top-navbar-color=light] .navbar-search-form .search-input .input-group.focused .form-control {\n  background-color: #c2cad7;\n}\n[data-top-navbar-color=light] .navbar-search-form.search-button-wrapper:hover {\n  background-color: #9eaabe;\n}\n[data-top-navbar-color=light] .dropdown-grid .btn.btn-default,\n[data-top-navbar-color=light] .dropdown-tasks .btn.btn-default,\n[data-top-navbar-color=light] .dropdown-flags .btn.btn-default,\n[data-top-navbar-color=light] .dropdown-notifications .btn.btn-default,\n[data-top-navbar-color=light] .dropdown-mega-menu .btn.btn-default,\n[data-top-navbar-color=light] .dropdown-user .btn.btn-default {\n  border: none;\n  background: #dee2e9;\n  color: #6c7580;\n}\n[data-top-navbar-color=light] .dropdown-grid .btn.btn-default:hover, [data-top-navbar-color=light] .dropdown-grid .btn.btn-default:active, [data-top-navbar-color=light] .dropdown-grid .btn.btn-default:focus, [data-top-navbar-color=light] .dropdown-grid .btn.btn-default:visited, [data-top-navbar-color=light] .dropdown-grid .btn.btn-default.focus,\n[data-top-navbar-color=light] .dropdown-tasks .btn.btn-default:hover,\n[data-top-navbar-color=light] .dropdown-tasks .btn.btn-default:active,\n[data-top-navbar-color=light] .dropdown-tasks .btn.btn-default:focus,\n[data-top-navbar-color=light] .dropdown-tasks .btn.btn-default:visited,\n[data-top-navbar-color=light] .dropdown-tasks .btn.btn-default.focus,\n[data-top-navbar-color=light] .dropdown-flags .btn.btn-default:hover,\n[data-top-navbar-color=light] .dropdown-flags .btn.btn-default:active,\n[data-top-navbar-color=light] .dropdown-flags .btn.btn-default:focus,\n[data-top-navbar-color=light] .dropdown-flags .btn.btn-default:visited,\n[data-top-navbar-color=light] .dropdown-flags .btn.btn-default.focus,\n[data-top-navbar-color=light] .dropdown-notifications .btn.btn-default:hover,\n[data-top-navbar-color=light] .dropdown-notifications .btn.btn-default:active,\n[data-top-navbar-color=light] .dropdown-notifications .btn.btn-default:focus,\n[data-top-navbar-color=light] .dropdown-notifications .btn.btn-default:visited,\n[data-top-navbar-color=light] .dropdown-notifications .btn.btn-default.focus,\n[data-top-navbar-color=light] .dropdown-mega-menu .btn.btn-default:hover,\n[data-top-navbar-color=light] .dropdown-mega-menu .btn.btn-default:active,\n[data-top-navbar-color=light] .dropdown-mega-menu .btn.btn-default:focus,\n[data-top-navbar-color=light] .dropdown-mega-menu .btn.btn-default:visited,\n[data-top-navbar-color=light] .dropdown-mega-menu .btn.btn-default.focus,\n[data-top-navbar-color=light] .dropdown-user .btn.btn-default:hover,\n[data-top-navbar-color=light] .dropdown-user .btn.btn-default:active,\n[data-top-navbar-color=light] .dropdown-user .btn.btn-default:focus,\n[data-top-navbar-color=light] .dropdown-user .btn.btn-default:visited,\n[data-top-navbar-color=light] .dropdown-user .btn.btn-default.focus {\n  border: none;\n  background: #dee2e9;\n  color: #6c7580;\n}\n[data-top-navbar-color=light] .dropdown-grid .dropdown-menu,\n[data-top-navbar-color=light] .dropdown-tasks .dropdown-menu,\n[data-top-navbar-color=light] .dropdown-flags .dropdown-menu,\n[data-top-navbar-color=light] .dropdown-notifications .dropdown-menu,\n[data-top-navbar-color=light] .dropdown-mega-menu .dropdown-menu,\n[data-top-navbar-color=light] .dropdown-user .dropdown-menu {\n  background: #dee2e9;\n  color: #6c7580;\n}\n[data-top-navbar-color=light] .dropdown-grid .dropdown-menu .dropdown-title,\n[data-top-navbar-color=light] .dropdown-tasks .dropdown-menu .dropdown-title,\n[data-top-navbar-color=light] .dropdown-flags .dropdown-menu .dropdown-title,\n[data-top-navbar-color=light] .dropdown-notifications .dropdown-menu .dropdown-title,\n[data-top-navbar-color=light] .dropdown-mega-menu .dropdown-menu .dropdown-title,\n[data-top-navbar-color=light] .dropdown-user .dropdown-menu .dropdown-title {\n  background: #b9c2d1;\n  color: #6c7580;\n}\n[data-top-navbar-color=light] .dropdown-grid .dropdown-menu .dropdown-item,\n[data-top-navbar-color=light] .dropdown-tasks .dropdown-menu .dropdown-item,\n[data-top-navbar-color=light] .dropdown-flags .dropdown-menu .dropdown-item,\n[data-top-navbar-color=light] .dropdown-notifications .dropdown-menu .dropdown-item,\n[data-top-navbar-color=light] .dropdown-mega-menu .dropdown-menu .dropdown-item,\n[data-top-navbar-color=light] .dropdown-user .dropdown-menu .dropdown-item {\n  background: #dee2e9;\n  color: #6c7580;\n}\n[data-top-navbar-color=light] .dropdown-grid .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=light] .dropdown-tasks .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=light] .dropdown-flags .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=light] .dropdown-notifications .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=light] .dropdown-mega-menu .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=light] .dropdown-user .dropdown-menu .dropdown-item:hover {\n  background: #d5dae3;\n  color: #6c7580;\n}\n[data-top-navbar-color=dark] .navbar.navbar-design-basic {\n  background: #6c7580;\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark] .navbar.navbar-design-basic .nav-link {\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark] .navbar.navbar-design-basic .dropdown .dropdown-item a {\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=dark] .navbar.navbar-design-basic .input-group .input-group-addon,\n[data-top-navbar-color=dark] .navbar.navbar-design-basic .input-group .input-group-text {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  text-align: center;\n  background-clip: padding-box;\n}\n[data-top-navbar-color=dark] .navbar.navbar-design-basic .input-group .form-control {\n  color: #dee2e9;\n  background-color: #7b8490;\n  border-color: #7b8490;\n}\n[data-top-navbar-color=dark] .navbar-design-basic .navbar-nav .nav-link:hover, [data-top-navbar-color=dark] .navbar-design-basic .nav .nav-link:hover {\n  color: #fff;\n}\n[data-top-navbar-color=dark] .navbar-design-basic .navbar-nav .nav-link.cta, [data-top-navbar-color=dark] .navbar-design-basic .nav .nav-link.cta {\n  background: #0059FF;\n  color: white;\n}\n[data-top-navbar-color=dark] .navbar-design-basic .navbar-nav .nav-link.cta:hover, [data-top-navbar-color=dark] .navbar-design-basic .navbar-nav .nav-link.cta:focus, [data-top-navbar-color=dark] .navbar-design-basic .nav .nav-link.cta:hover, [data-top-navbar-color=dark] .navbar-design-basic .nav .nav-link.cta:focus {\n  background: #0050e6;\n  color: #fff;\n}\n[data-top-navbar-color=dark] .navbar-design-basic .navbar-nav .nav-link.cta:active, [data-top-navbar-color=dark] .navbar-design-basic .nav .nav-link.cta:active {\n  background: #0047cc;\n  color: #fff;\n}\n[data-top-navbar-color=dark] .navbar-search-form .search-input .input-group .input-group-text {\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark] .navbar-search-form .search-input .input-group .form-control ::-webkit-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark] .navbar-search-form .search-input .input-group .form-control :-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark] .navbar-search-form .search-input .input-group .form-control ::-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark] .navbar-search-form .search-input .input-group .form-control :-ms-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark] .navbar-search-form .search-input .input-group.focused .form-control {\n  background-color: #737d88;\n}\n[data-top-navbar-color=dark] .navbar-search-form.search-button-wrapper:hover {\n  background-color: #575e67;\n}\n[data-top-navbar-color=dark] .dropdown-grid .btn.btn-default,\n[data-top-navbar-color=dark] .dropdown-tasks .btn.btn-default,\n[data-top-navbar-color=dark] .dropdown-flags .btn.btn-default,\n[data-top-navbar-color=dark] .dropdown-notifications .btn.btn-default,\n[data-top-navbar-color=dark] .dropdown-mega-menu .btn.btn-default,\n[data-top-navbar-color=dark] .dropdown-user .btn.btn-default {\n  border: none;\n  background: #6c7580;\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark] .dropdown-grid .btn.btn-default:hover, [data-top-navbar-color=dark] .dropdown-grid .btn.btn-default:active, [data-top-navbar-color=dark] .dropdown-grid .btn.btn-default:focus, [data-top-navbar-color=dark] .dropdown-grid .btn.btn-default:visited, [data-top-navbar-color=dark] .dropdown-grid .btn.btn-default.focus,\n[data-top-navbar-color=dark] .dropdown-tasks .btn.btn-default:hover,\n[data-top-navbar-color=dark] .dropdown-tasks .btn.btn-default:active,\n[data-top-navbar-color=dark] .dropdown-tasks .btn.btn-default:focus,\n[data-top-navbar-color=dark] .dropdown-tasks .btn.btn-default:visited,\n[data-top-navbar-color=dark] .dropdown-tasks .btn.btn-default.focus,\n[data-top-navbar-color=dark] .dropdown-flags .btn.btn-default:hover,\n[data-top-navbar-color=dark] .dropdown-flags .btn.btn-default:active,\n[data-top-navbar-color=dark] .dropdown-flags .btn.btn-default:focus,\n[data-top-navbar-color=dark] .dropdown-flags .btn.btn-default:visited,\n[data-top-navbar-color=dark] .dropdown-flags .btn.btn-default.focus,\n[data-top-navbar-color=dark] .dropdown-notifications .btn.btn-default:hover,\n[data-top-navbar-color=dark] .dropdown-notifications .btn.btn-default:active,\n[data-top-navbar-color=dark] .dropdown-notifications .btn.btn-default:focus,\n[data-top-navbar-color=dark] .dropdown-notifications .btn.btn-default:visited,\n[data-top-navbar-color=dark] .dropdown-notifications .btn.btn-default.focus,\n[data-top-navbar-color=dark] .dropdown-mega-menu .btn.btn-default:hover,\n[data-top-navbar-color=dark] .dropdown-mega-menu .btn.btn-default:active,\n[data-top-navbar-color=dark] .dropdown-mega-menu .btn.btn-default:focus,\n[data-top-navbar-color=dark] .dropdown-mega-menu .btn.btn-default:visited,\n[data-top-navbar-color=dark] .dropdown-mega-menu .btn.btn-default.focus,\n[data-top-navbar-color=dark] .dropdown-user .btn.btn-default:hover,\n[data-top-navbar-color=dark] .dropdown-user .btn.btn-default:active,\n[data-top-navbar-color=dark] .dropdown-user .btn.btn-default:focus,\n[data-top-navbar-color=dark] .dropdown-user .btn.btn-default:visited,\n[data-top-navbar-color=dark] .dropdown-user .btn.btn-default.focus {\n  border: none;\n  background: #6c7580;\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark] .dropdown-grid .dropdown-menu,\n[data-top-navbar-color=dark] .dropdown-tasks .dropdown-menu,\n[data-top-navbar-color=dark] .dropdown-flags .dropdown-menu,\n[data-top-navbar-color=dark] .dropdown-notifications .dropdown-menu,\n[data-top-navbar-color=dark] .dropdown-mega-menu .dropdown-menu,\n[data-top-navbar-color=dark] .dropdown-user .dropdown-menu {\n  background: #6c7580;\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark] .dropdown-grid .dropdown-menu .dropdown-title,\n[data-top-navbar-color=dark] .dropdown-tasks .dropdown-menu .dropdown-title,\n[data-top-navbar-color=dark] .dropdown-flags .dropdown-menu .dropdown-title,\n[data-top-navbar-color=dark] .dropdown-notifications .dropdown-menu .dropdown-title,\n[data-top-navbar-color=dark] .dropdown-mega-menu .dropdown-menu .dropdown-title,\n[data-top-navbar-color=dark] .dropdown-user .dropdown-menu .dropdown-title {\n  background: #8c949e;\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark] .dropdown-grid .dropdown-menu .dropdown-item,\n[data-top-navbar-color=dark] .dropdown-tasks .dropdown-menu .dropdown-item,\n[data-top-navbar-color=dark] .dropdown-flags .dropdown-menu .dropdown-item,\n[data-top-navbar-color=dark] .dropdown-notifications .dropdown-menu .dropdown-item,\n[data-top-navbar-color=dark] .dropdown-mega-menu .dropdown-menu .dropdown-item,\n[data-top-navbar-color=dark] .dropdown-user .dropdown-menu .dropdown-item {\n  background: #6c7580;\n  color: #dee2e9;\n}\n[data-top-navbar-color=dark] .dropdown-grid .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=dark] .dropdown-tasks .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=dark] .dropdown-flags .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=dark] .dropdown-notifications .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=dark] .dropdown-mega-menu .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=dark] .dropdown-user .dropdown-menu .dropdown-item:hover {\n  background: #737d88;\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darker] .navbar.navbar-design-basic {\n  background: #495060;\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darker] .navbar.navbar-design-basic .nav-link {\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darker] .navbar.navbar-design-basic .dropdown .dropdown-item a {\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=gray-darker] .navbar.navbar-design-basic .input-group .input-group-addon,\n[data-top-navbar-color=gray-darker] .navbar.navbar-design-basic .input-group .input-group-text {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  text-align: center;\n  background-clip: padding-box;\n}\n[data-top-navbar-color=gray-darker] .navbar.navbar-design-basic .input-group .form-control {\n  color: #dee2e9;\n  background-color: #565e71;\n  border-color: #565e71;\n}\n[data-top-navbar-color=gray-darker] .navbar-design-basic .navbar-nav .nav-link:hover, [data-top-navbar-color=gray-darker] .navbar-design-basic .nav .nav-link:hover {\n  color: #fff;\n}\n[data-top-navbar-color=gray-darker] .navbar-design-basic .navbar-nav .nav-link.cta, [data-top-navbar-color=gray-darker] .navbar-design-basic .nav .nav-link.cta {\n  background: #0059FF;\n  color: white;\n}\n[data-top-navbar-color=gray-darker] .navbar-design-basic .navbar-nav .nav-link.cta:hover, [data-top-navbar-color=gray-darker] .navbar-design-basic .navbar-nav .nav-link.cta:focus, [data-top-navbar-color=gray-darker] .navbar-design-basic .nav .nav-link.cta:hover, [data-top-navbar-color=gray-darker] .navbar-design-basic .nav .nav-link.cta:focus {\n  background: #0050e6;\n  color: #fff;\n}\n[data-top-navbar-color=gray-darker] .navbar-design-basic .navbar-nav .nav-link.cta:active, [data-top-navbar-color=gray-darker] .navbar-design-basic .nav .nav-link.cta:active {\n  background: #0047cc;\n  color: #fff;\n}\n[data-top-navbar-color=gray-darker] .navbar-search-form .search-input .input-group .input-group-text {\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darker] .navbar-search-form .search-input .input-group .form-control ::-webkit-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darker] .navbar-search-form .search-input .input-group .form-control :-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darker] .navbar-search-form .search-input .input-group .form-control ::-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darker] .navbar-search-form .search-input .input-group .form-control :-ms-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darker] .navbar-search-form .search-input .input-group.focused .form-control {\n  background-color: #505769;\n}\n[data-top-navbar-color=gray-darker] .navbar-search-form.search-button-wrapper:hover {\n  background-color: #353a46;\n}\n[data-top-navbar-color=gray-darker] .dropdown-grid .btn.btn-default,\n[data-top-navbar-color=gray-darker] .dropdown-tasks .btn.btn-default,\n[data-top-navbar-color=gray-darker] .dropdown-flags .btn.btn-default,\n[data-top-navbar-color=gray-darker] .dropdown-notifications .btn.btn-default,\n[data-top-navbar-color=gray-darker] .dropdown-mega-menu .btn.btn-default,\n[data-top-navbar-color=gray-darker] .dropdown-user .btn.btn-default {\n  border: none;\n  background: #495060;\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darker] .dropdown-grid .btn.btn-default:hover, [data-top-navbar-color=gray-darker] .dropdown-grid .btn.btn-default:active, [data-top-navbar-color=gray-darker] .dropdown-grid .btn.btn-default:focus, [data-top-navbar-color=gray-darker] .dropdown-grid .btn.btn-default:visited, [data-top-navbar-color=gray-darker] .dropdown-grid .btn.btn-default.focus,\n[data-top-navbar-color=gray-darker] .dropdown-tasks .btn.btn-default:hover,\n[data-top-navbar-color=gray-darker] .dropdown-tasks .btn.btn-default:active,\n[data-top-navbar-color=gray-darker] .dropdown-tasks .btn.btn-default:focus,\n[data-top-navbar-color=gray-darker] .dropdown-tasks .btn.btn-default:visited,\n[data-top-navbar-color=gray-darker] .dropdown-tasks .btn.btn-default.focus,\n[data-top-navbar-color=gray-darker] .dropdown-flags .btn.btn-default:hover,\n[data-top-navbar-color=gray-darker] .dropdown-flags .btn.btn-default:active,\n[data-top-navbar-color=gray-darker] .dropdown-flags .btn.btn-default:focus,\n[data-top-navbar-color=gray-darker] .dropdown-flags .btn.btn-default:visited,\n[data-top-navbar-color=gray-darker] .dropdown-flags .btn.btn-default.focus,\n[data-top-navbar-color=gray-darker] .dropdown-notifications .btn.btn-default:hover,\n[data-top-navbar-color=gray-darker] .dropdown-notifications .btn.btn-default:active,\n[data-top-navbar-color=gray-darker] .dropdown-notifications .btn.btn-default:focus,\n[data-top-navbar-color=gray-darker] .dropdown-notifications .btn.btn-default:visited,\n[data-top-navbar-color=gray-darker] .dropdown-notifications .btn.btn-default.focus,\n[data-top-navbar-color=gray-darker] .dropdown-mega-menu .btn.btn-default:hover,\n[data-top-navbar-color=gray-darker] .dropdown-mega-menu .btn.btn-default:active,\n[data-top-navbar-color=gray-darker] .dropdown-mega-menu .btn.btn-default:focus,\n[data-top-navbar-color=gray-darker] .dropdown-mega-menu .btn.btn-default:visited,\n[data-top-navbar-color=gray-darker] .dropdown-mega-menu .btn.btn-default.focus,\n[data-top-navbar-color=gray-darker] .dropdown-user .btn.btn-default:hover,\n[data-top-navbar-color=gray-darker] .dropdown-user .btn.btn-default:active,\n[data-top-navbar-color=gray-darker] .dropdown-user .btn.btn-default:focus,\n[data-top-navbar-color=gray-darker] .dropdown-user .btn.btn-default:visited,\n[data-top-navbar-color=gray-darker] .dropdown-user .btn.btn-default.focus {\n  border: none;\n  background: #495060;\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darker] .dropdown-grid .dropdown-menu,\n[data-top-navbar-color=gray-darker] .dropdown-tasks .dropdown-menu,\n[data-top-navbar-color=gray-darker] .dropdown-flags .dropdown-menu,\n[data-top-navbar-color=gray-darker] .dropdown-notifications .dropdown-menu,\n[data-top-navbar-color=gray-darker] .dropdown-mega-menu .dropdown-menu,\n[data-top-navbar-color=gray-darker] .dropdown-user .dropdown-menu {\n  background: #495060;\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darker] .dropdown-grid .dropdown-menu .dropdown-title,\n[data-top-navbar-color=gray-darker] .dropdown-tasks .dropdown-menu .dropdown-title,\n[data-top-navbar-color=gray-darker] .dropdown-flags .dropdown-menu .dropdown-title,\n[data-top-navbar-color=gray-darker] .dropdown-notifications .dropdown-menu .dropdown-title,\n[data-top-navbar-color=gray-darker] .dropdown-mega-menu .dropdown-menu .dropdown-title,\n[data-top-navbar-color=gray-darker] .dropdown-user .dropdown-menu .dropdown-title {\n  background: #636d83;\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darker] .dropdown-grid .dropdown-menu .dropdown-item,\n[data-top-navbar-color=gray-darker] .dropdown-tasks .dropdown-menu .dropdown-item,\n[data-top-navbar-color=gray-darker] .dropdown-flags .dropdown-menu .dropdown-item,\n[data-top-navbar-color=gray-darker] .dropdown-notifications .dropdown-menu .dropdown-item,\n[data-top-navbar-color=gray-darker] .dropdown-mega-menu .dropdown-menu .dropdown-item,\n[data-top-navbar-color=gray-darker] .dropdown-user .dropdown-menu .dropdown-item {\n  background: #495060;\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darker] .dropdown-grid .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=gray-darker] .dropdown-tasks .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=gray-darker] .dropdown-flags .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=gray-darker] .dropdown-notifications .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=gray-darker] .dropdown-mega-menu .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=gray-darker] .dropdown-user .dropdown-menu .dropdown-item:hover {\n  background: #505769;\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darkest] .navbar.navbar-design-basic {\n  background: #212532;\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darkest] .navbar.navbar-design-basic .nav-link {\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darkest] .navbar.navbar-design-basic .dropdown .dropdown-item a {\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=gray-darkest] .navbar.navbar-design-basic .input-group .input-group-addon,\n[data-top-navbar-color=gray-darkest] .navbar.navbar-design-basic .input-group .input-group-text {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  text-align: center;\n  background-clip: padding-box;\n}\n[data-top-navbar-color=gray-darkest] .navbar.navbar-design-basic .input-group .form-control {\n  color: #dee2e9;\n  background-color: #2d3344;\n  border-color: #2d3344;\n}\n[data-top-navbar-color=gray-darkest] .navbar-design-basic .navbar-nav .nav-link:hover, [data-top-navbar-color=gray-darkest] .navbar-design-basic .nav .nav-link:hover {\n  color: #fff;\n}\n[data-top-navbar-color=gray-darkest] .navbar-design-basic .navbar-nav .nav-link.cta, [data-top-navbar-color=gray-darkest] .navbar-design-basic .nav .nav-link.cta {\n  background: #0059FF;\n  color: white;\n}\n[data-top-navbar-color=gray-darkest] .navbar-design-basic .navbar-nav .nav-link.cta:hover, [data-top-navbar-color=gray-darkest] .navbar-design-basic .navbar-nav .nav-link.cta:focus, [data-top-navbar-color=gray-darkest] .navbar-design-basic .nav .nav-link.cta:hover, [data-top-navbar-color=gray-darkest] .navbar-design-basic .nav .nav-link.cta:focus {\n  background: #0050e6;\n  color: #fff;\n}\n[data-top-navbar-color=gray-darkest] .navbar-design-basic .navbar-nav .nav-link.cta:active, [data-top-navbar-color=gray-darkest] .navbar-design-basic .nav .nav-link.cta:active {\n  background: #0047cc;\n  color: #fff;\n}\n[data-top-navbar-color=gray-darkest] .navbar-search-form .search-input .input-group .input-group-text {\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darkest] .navbar-search-form .search-input .input-group .form-control ::-webkit-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darkest] .navbar-search-form .search-input .input-group .form-control :-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darkest] .navbar-search-form .search-input .input-group .form-control ::-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darkest] .navbar-search-form .search-input .input-group .form-control :-ms-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darkest] .navbar-search-form .search-input .input-group.focused .form-control {\n  background-color: #272c3b;\n}\n[data-top-navbar-color=gray-darkest] .navbar-search-form.search-button-wrapper:hover {\n  background-color: #0f1116;\n}\n[data-top-navbar-color=gray-darkest] .dropdown-grid .btn.btn-default,\n[data-top-navbar-color=gray-darkest] .dropdown-tasks .btn.btn-default,\n[data-top-navbar-color=gray-darkest] .dropdown-flags .btn.btn-default,\n[data-top-navbar-color=gray-darkest] .dropdown-notifications .btn.btn-default,\n[data-top-navbar-color=gray-darkest] .dropdown-mega-menu .btn.btn-default,\n[data-top-navbar-color=gray-darkest] .dropdown-user .btn.btn-default {\n  border: none;\n  background: #212532;\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darkest] .dropdown-grid .btn.btn-default:hover, [data-top-navbar-color=gray-darkest] .dropdown-grid .btn.btn-default:active, [data-top-navbar-color=gray-darkest] .dropdown-grid .btn.btn-default:focus, [data-top-navbar-color=gray-darkest] .dropdown-grid .btn.btn-default:visited, [data-top-navbar-color=gray-darkest] .dropdown-grid .btn.btn-default.focus,\n[data-top-navbar-color=gray-darkest] .dropdown-tasks .btn.btn-default:hover,\n[data-top-navbar-color=gray-darkest] .dropdown-tasks .btn.btn-default:active,\n[data-top-navbar-color=gray-darkest] .dropdown-tasks .btn.btn-default:focus,\n[data-top-navbar-color=gray-darkest] .dropdown-tasks .btn.btn-default:visited,\n[data-top-navbar-color=gray-darkest] .dropdown-tasks .btn.btn-default.focus,\n[data-top-navbar-color=gray-darkest] .dropdown-flags .btn.btn-default:hover,\n[data-top-navbar-color=gray-darkest] .dropdown-flags .btn.btn-default:active,\n[data-top-navbar-color=gray-darkest] .dropdown-flags .btn.btn-default:focus,\n[data-top-navbar-color=gray-darkest] .dropdown-flags .btn.btn-default:visited,\n[data-top-navbar-color=gray-darkest] .dropdown-flags .btn.btn-default.focus,\n[data-top-navbar-color=gray-darkest] .dropdown-notifications .btn.btn-default:hover,\n[data-top-navbar-color=gray-darkest] .dropdown-notifications .btn.btn-default:active,\n[data-top-navbar-color=gray-darkest] .dropdown-notifications .btn.btn-default:focus,\n[data-top-navbar-color=gray-darkest] .dropdown-notifications .btn.btn-default:visited,\n[data-top-navbar-color=gray-darkest] .dropdown-notifications .btn.btn-default.focus,\n[data-top-navbar-color=gray-darkest] .dropdown-mega-menu .btn.btn-default:hover,\n[data-top-navbar-color=gray-darkest] .dropdown-mega-menu .btn.btn-default:active,\n[data-top-navbar-color=gray-darkest] .dropdown-mega-menu .btn.btn-default:focus,\n[data-top-navbar-color=gray-darkest] .dropdown-mega-menu .btn.btn-default:visited,\n[data-top-navbar-color=gray-darkest] .dropdown-mega-menu .btn.btn-default.focus,\n[data-top-navbar-color=gray-darkest] .dropdown-user .btn.btn-default:hover,\n[data-top-navbar-color=gray-darkest] .dropdown-user .btn.btn-default:active,\n[data-top-navbar-color=gray-darkest] .dropdown-user .btn.btn-default:focus,\n[data-top-navbar-color=gray-darkest] .dropdown-user .btn.btn-default:visited,\n[data-top-navbar-color=gray-darkest] .dropdown-user .btn.btn-default.focus {\n  border: none;\n  background: #212532;\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darkest] .dropdown-grid .dropdown-menu,\n[data-top-navbar-color=gray-darkest] .dropdown-tasks .dropdown-menu,\n[data-top-navbar-color=gray-darkest] .dropdown-flags .dropdown-menu,\n[data-top-navbar-color=gray-darkest] .dropdown-notifications .dropdown-menu,\n[data-top-navbar-color=gray-darkest] .dropdown-mega-menu .dropdown-menu,\n[data-top-navbar-color=gray-darkest] .dropdown-user .dropdown-menu {\n  background: #212532;\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darkest] .dropdown-grid .dropdown-menu .dropdown-title,\n[data-top-navbar-color=gray-darkest] .dropdown-tasks .dropdown-menu .dropdown-title,\n[data-top-navbar-color=gray-darkest] .dropdown-flags .dropdown-menu .dropdown-title,\n[data-top-navbar-color=gray-darkest] .dropdown-notifications .dropdown-menu .dropdown-title,\n[data-top-navbar-color=gray-darkest] .dropdown-mega-menu .dropdown-menu .dropdown-title,\n[data-top-navbar-color=gray-darkest] .dropdown-user .dropdown-menu .dropdown-title {\n  background: #394057;\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darkest] .dropdown-grid .dropdown-menu .dropdown-item,\n[data-top-navbar-color=gray-darkest] .dropdown-tasks .dropdown-menu .dropdown-item,\n[data-top-navbar-color=gray-darkest] .dropdown-flags .dropdown-menu .dropdown-item,\n[data-top-navbar-color=gray-darkest] .dropdown-notifications .dropdown-menu .dropdown-item,\n[data-top-navbar-color=gray-darkest] .dropdown-mega-menu .dropdown-menu .dropdown-item,\n[data-top-navbar-color=gray-darkest] .dropdown-user .dropdown-menu .dropdown-item {\n  background: #212532;\n  color: #dee2e9;\n}\n[data-top-navbar-color=gray-darkest] .dropdown-grid .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=gray-darkest] .dropdown-tasks .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=gray-darkest] .dropdown-flags .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=gray-darkest] .dropdown-notifications .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=gray-darkest] .dropdown-mega-menu .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=gray-darkest] .dropdown-user .dropdown-menu .dropdown-item:hover {\n  background: #272c3b;\n  color: #dee2e9;\n}\n[data-top-navbar-color=black] .navbar.navbar-design-basic {\n  background: #000;\n  color: #dee2e9;\n}\n[data-top-navbar-color=black] .navbar.navbar-design-basic .nav-link {\n  color: #dee2e9;\n}\n[data-top-navbar-color=black] .navbar.navbar-design-basic .dropdown .dropdown-item a {\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=black] .navbar.navbar-design-basic .input-group .input-group-addon,\n[data-top-navbar-color=black] .navbar.navbar-design-basic .input-group .input-group-text {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  text-align: center;\n  background-clip: padding-box;\n}\n[data-top-navbar-color=black] .navbar.navbar-design-basic .input-group .form-control {\n  color: #dee2e9;\n  background-color: #0f0f0f;\n  border-color: #0f0f0f;\n}\n[data-top-navbar-color=black] .navbar-design-basic .navbar-nav .nav-link:hover, [data-top-navbar-color=black] .navbar-design-basic .nav .nav-link:hover {\n  color: #fff;\n}\n[data-top-navbar-color=black] .navbar-design-basic .navbar-nav .nav-link.cta, [data-top-navbar-color=black] .navbar-design-basic .nav .nav-link.cta {\n  background: #0059FF;\n  color: white;\n}\n[data-top-navbar-color=black] .navbar-design-basic .navbar-nav .nav-link.cta:hover, [data-top-navbar-color=black] .navbar-design-basic .navbar-nav .nav-link.cta:focus, [data-top-navbar-color=black] .navbar-design-basic .nav .nav-link.cta:hover, [data-top-navbar-color=black] .navbar-design-basic .nav .nav-link.cta:focus {\n  background: #0050e6;\n  color: #fff;\n}\n[data-top-navbar-color=black] .navbar-design-basic .navbar-nav .nav-link.cta:active, [data-top-navbar-color=black] .navbar-design-basic .nav .nav-link.cta:active {\n  background: #0047cc;\n  color: #fff;\n}\n[data-top-navbar-color=black] .navbar-search-form .search-input .input-group .input-group-text {\n  color: #dee2e9;\n}\n[data-top-navbar-color=black] .navbar-search-form .search-input .input-group .form-control ::-webkit-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=black] .navbar-search-form .search-input .input-group .form-control :-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=black] .navbar-search-form .search-input .input-group .form-control ::-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=black] .navbar-search-form .search-input .input-group .form-control :-ms-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=black] .navbar-search-form .search-input .input-group.focused .form-control {\n  background-color: #080808;\n}\n[data-top-navbar-color=black] .navbar-search-form.search-button-wrapper:hover {\n  background-color: black;\n}\n[data-top-navbar-color=black] .dropdown-grid .btn.btn-default,\n[data-top-navbar-color=black] .dropdown-tasks .btn.btn-default,\n[data-top-navbar-color=black] .dropdown-flags .btn.btn-default,\n[data-top-navbar-color=black] .dropdown-notifications .btn.btn-default,\n[data-top-navbar-color=black] .dropdown-mega-menu .btn.btn-default,\n[data-top-navbar-color=black] .dropdown-user .btn.btn-default {\n  border: none;\n  background: #000;\n  color: #dee2e9;\n}\n[data-top-navbar-color=black] .dropdown-grid .btn.btn-default:hover, [data-top-navbar-color=black] .dropdown-grid .btn.btn-default:active, [data-top-navbar-color=black] .dropdown-grid .btn.btn-default:focus, [data-top-navbar-color=black] .dropdown-grid .btn.btn-default:visited, [data-top-navbar-color=black] .dropdown-grid .btn.btn-default.focus,\n[data-top-navbar-color=black] .dropdown-tasks .btn.btn-default:hover,\n[data-top-navbar-color=black] .dropdown-tasks .btn.btn-default:active,\n[data-top-navbar-color=black] .dropdown-tasks .btn.btn-default:focus,\n[data-top-navbar-color=black] .dropdown-tasks .btn.btn-default:visited,\n[data-top-navbar-color=black] .dropdown-tasks .btn.btn-default.focus,\n[data-top-navbar-color=black] .dropdown-flags .btn.btn-default:hover,\n[data-top-navbar-color=black] .dropdown-flags .btn.btn-default:active,\n[data-top-navbar-color=black] .dropdown-flags .btn.btn-default:focus,\n[data-top-navbar-color=black] .dropdown-flags .btn.btn-default:visited,\n[data-top-navbar-color=black] .dropdown-flags .btn.btn-default.focus,\n[data-top-navbar-color=black] .dropdown-notifications .btn.btn-default:hover,\n[data-top-navbar-color=black] .dropdown-notifications .btn.btn-default:active,\n[data-top-navbar-color=black] .dropdown-notifications .btn.btn-default:focus,\n[data-top-navbar-color=black] .dropdown-notifications .btn.btn-default:visited,\n[data-top-navbar-color=black] .dropdown-notifications .btn.btn-default.focus,\n[data-top-navbar-color=black] .dropdown-mega-menu .btn.btn-default:hover,\n[data-top-navbar-color=black] .dropdown-mega-menu .btn.btn-default:active,\n[data-top-navbar-color=black] .dropdown-mega-menu .btn.btn-default:focus,\n[data-top-navbar-color=black] .dropdown-mega-menu .btn.btn-default:visited,\n[data-top-navbar-color=black] .dropdown-mega-menu .btn.btn-default.focus,\n[data-top-navbar-color=black] .dropdown-user .btn.btn-default:hover,\n[data-top-navbar-color=black] .dropdown-user .btn.btn-default:active,\n[data-top-navbar-color=black] .dropdown-user .btn.btn-default:focus,\n[data-top-navbar-color=black] .dropdown-user .btn.btn-default:visited,\n[data-top-navbar-color=black] .dropdown-user .btn.btn-default.focus {\n  border: none;\n  background: #000;\n  color: #dee2e9;\n}\n[data-top-navbar-color=black] .dropdown-grid .dropdown-menu,\n[data-top-navbar-color=black] .dropdown-tasks .dropdown-menu,\n[data-top-navbar-color=black] .dropdown-flags .dropdown-menu,\n[data-top-navbar-color=black] .dropdown-notifications .dropdown-menu,\n[data-top-navbar-color=black] .dropdown-mega-menu .dropdown-menu,\n[data-top-navbar-color=black] .dropdown-user .dropdown-menu {\n  background: #000;\n  color: #dee2e9;\n}\n[data-top-navbar-color=black] .dropdown-grid .dropdown-menu .dropdown-title,\n[data-top-navbar-color=black] .dropdown-tasks .dropdown-menu .dropdown-title,\n[data-top-navbar-color=black] .dropdown-flags .dropdown-menu .dropdown-title,\n[data-top-navbar-color=black] .dropdown-notifications .dropdown-menu .dropdown-title,\n[data-top-navbar-color=black] .dropdown-mega-menu .dropdown-menu .dropdown-title,\n[data-top-navbar-color=black] .dropdown-user .dropdown-menu .dropdown-title {\n  background: #1f1f1f;\n  color: #dee2e9;\n}\n[data-top-navbar-color=black] .dropdown-grid .dropdown-menu .dropdown-item,\n[data-top-navbar-color=black] .dropdown-tasks .dropdown-menu .dropdown-item,\n[data-top-navbar-color=black] .dropdown-flags .dropdown-menu .dropdown-item,\n[data-top-navbar-color=black] .dropdown-notifications .dropdown-menu .dropdown-item,\n[data-top-navbar-color=black] .dropdown-mega-menu .dropdown-menu .dropdown-item,\n[data-top-navbar-color=black] .dropdown-user .dropdown-menu .dropdown-item {\n  background: #000;\n  color: #dee2e9;\n}\n[data-top-navbar-color=black] .dropdown-grid .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=black] .dropdown-tasks .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=black] .dropdown-flags .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=black] .dropdown-notifications .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=black] .dropdown-mega-menu .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=black] .dropdown-user .dropdown-menu .dropdown-item:hover {\n  background: #080808;\n  color: #dee2e9;\n}\n[data-top-navbar-color=default-color] .navbar.navbar-design-basic {\n  background: #0a346d;\n  color: #dee2e9;\n}\n[data-top-navbar-color=default-color] .navbar.navbar-design-basic .nav-link {\n  color: #dee2e9;\n}\n[data-top-navbar-color=default-color] .navbar.navbar-design-basic .dropdown .dropdown-item a {\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=default-color] .navbar.navbar-design-basic .input-group .input-group-addon,\n[data-top-navbar-color=default-color] .navbar.navbar-design-basic .input-group .input-group-text {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.25;\n  text-align: center;\n  background-clip: padding-box;\n}\n[data-top-navbar-color=default-color] .navbar.navbar-design-basic .input-group .form-control {\n  color: #dee2e9;\n  background-color: #0d4189;\n  border-color: #0d4189;\n}\n[data-top-navbar-color=default-color] .navbar-design-basic .navbar-nav .nav-link:hover, [data-top-navbar-color=default-color] .navbar-design-basic .nav .nav-link:hover {\n  color: #fff;\n}\n[data-top-navbar-color=default-color] .navbar-design-basic .navbar-nav .nav-link.cta, [data-top-navbar-color=default-color] .navbar-design-basic .nav .nav-link.cta {\n  background: #0059FF;\n  color: white;\n}\n[data-top-navbar-color=default-color] .navbar-design-basic .navbar-nav .nav-link.cta:hover, [data-top-navbar-color=default-color] .navbar-design-basic .navbar-nav .nav-link.cta:focus, [data-top-navbar-color=default-color] .navbar-design-basic .nav .nav-link.cta:hover, [data-top-navbar-color=default-color] .navbar-design-basic .nav .nav-link.cta:focus {\n  background: #0050e6;\n  color: #fff;\n}\n[data-top-navbar-color=default-color] .navbar-design-basic .navbar-nav .nav-link.cta:active, [data-top-navbar-color=default-color] .navbar-design-basic .nav .nav-link.cta:active {\n  background: #0047cc;\n  color: #fff;\n}\n[data-top-navbar-color=default-color] .navbar-search-form .search-input .input-group .input-group-text {\n  color: #dee2e9;\n}\n[data-top-navbar-color=default-color] .navbar-search-form .search-input .input-group .form-control ::-webkit-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=default-color] .navbar-search-form .search-input .input-group .form-control :-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=default-color] .navbar-search-form .search-input .input-group .form-control ::-moz-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=default-color] .navbar-search-form .search-input .input-group .form-control :-ms-input-placeholder {\n  color: #dee2e9;\n}\n[data-top-navbar-color=default-color] .navbar-search-form .search-input .input-group.focused .form-control {\n  background-color: #0b3b7b;\n}\n[data-top-navbar-color=default-color] .navbar-search-form.search-button-wrapper:hover {\n  background-color: #062043;\n}\n[data-top-navbar-color=default-color] .dropdown-grid .btn.btn-default,\n[data-top-navbar-color=default-color] .dropdown-tasks .btn.btn-default,\n[data-top-navbar-color=default-color] .dropdown-flags .btn.btn-default,\n[data-top-navbar-color=default-color] .dropdown-notifications .btn.btn-default,\n[data-top-navbar-color=default-color] .dropdown-mega-menu .btn.btn-default,\n[data-top-navbar-color=default-color] .dropdown-user .btn.btn-default {\n  border: none;\n  background: #0a346d;\n  color: #dee2e9;\n}\n[data-top-navbar-color=default-color] .dropdown-grid .btn.btn-default:hover, [data-top-navbar-color=default-color] .dropdown-grid .btn.btn-default:active, [data-top-navbar-color=default-color] .dropdown-grid .btn.btn-default:focus, [data-top-navbar-color=default-color] .dropdown-grid .btn.btn-default:visited, [data-top-navbar-color=default-color] .dropdown-grid .btn.btn-default.focus,\n[data-top-navbar-color=default-color] .dropdown-tasks .btn.btn-default:hover,\n[data-top-navbar-color=default-color] .dropdown-tasks .btn.btn-default:active,\n[data-top-navbar-color=default-color] .dropdown-tasks .btn.btn-default:focus,\n[data-top-navbar-color=default-color] .dropdown-tasks .btn.btn-default:visited,\n[data-top-navbar-color=default-color] .dropdown-tasks .btn.btn-default.focus,\n[data-top-navbar-color=default-color] .dropdown-flags .btn.btn-default:hover,\n[data-top-navbar-color=default-color] .dropdown-flags .btn.btn-default:active,\n[data-top-navbar-color=default-color] .dropdown-flags .btn.btn-default:focus,\n[data-top-navbar-color=default-color] .dropdown-flags .btn.btn-default:visited,\n[data-top-navbar-color=default-color] .dropdown-flags .btn.btn-default.focus,\n[data-top-navbar-color=default-color] .dropdown-notifications .btn.btn-default:hover,\n[data-top-navbar-color=default-color] .dropdown-notifications .btn.btn-default:active,\n[data-top-navbar-color=default-color] .dropdown-notifications .btn.btn-default:focus,\n[data-top-navbar-color=default-color] .dropdown-notifications .btn.btn-default:visited,\n[data-top-navbar-color=default-color] .dropdown-notifications .btn.btn-default.focus,\n[data-top-navbar-color=default-color] .dropdown-mega-menu .btn.btn-default:hover,\n[data-top-navbar-color=default-color] .dropdown-mega-menu .btn.btn-default:active,\n[data-top-navbar-color=default-color] .dropdown-mega-menu .btn.btn-default:focus,\n[data-top-navbar-color=default-color] .dropdown-mega-menu .btn.btn-default:visited,\n[data-top-navbar-color=default-color] .dropdown-mega-menu .btn.btn-default.focus,\n[data-top-navbar-color=default-color] .dropdown-user .btn.btn-default:hover,\n[data-top-navbar-color=default-color] .dropdown-user .btn.btn-default:active,\n[data-top-navbar-color=default-color] .dropdown-user .btn.btn-default:focus,\n[data-top-navbar-color=default-color] .dropdown-user .btn.btn-default:visited,\n[data-top-navbar-color=default-color] .dropdown-user .btn.btn-default.focus {\n  border: none;\n  background: #0a346d;\n  color: #dee2e9;\n}\n[data-top-navbar-color=default-color] .dropdown-grid .dropdown-menu,\n[data-top-navbar-color=default-color] .dropdown-tasks .dropdown-menu,\n[data-top-navbar-color=default-color] .dropdown-flags .dropdown-menu,\n[data-top-navbar-color=default-color] .dropdown-notifications .dropdown-menu,\n[data-top-navbar-color=default-color] .dropdown-mega-menu .dropdown-menu,\n[data-top-navbar-color=default-color] .dropdown-user .dropdown-menu {\n  background: #0a346d;\n  color: #dee2e9;\n}\n[data-top-navbar-color=default-color] .dropdown-grid .dropdown-menu .dropdown-title,\n[data-top-navbar-color=default-color] .dropdown-tasks .dropdown-menu .dropdown-title,\n[data-top-navbar-color=default-color] .dropdown-flags .dropdown-menu .dropdown-title,\n[data-top-navbar-color=default-color] .dropdown-notifications .dropdown-menu .dropdown-title,\n[data-top-navbar-color=default-color] .dropdown-mega-menu .dropdown-menu .dropdown-title,\n[data-top-navbar-color=default-color] .dropdown-user .dropdown-menu .dropdown-title {\n  background: #0f4fa5;\n  color: #dee2e9;\n}\n[data-top-navbar-color=default-color] .dropdown-grid .dropdown-menu .dropdown-item,\n[data-top-navbar-color=default-color] .dropdown-tasks .dropdown-menu .dropdown-item,\n[data-top-navbar-color=default-color] .dropdown-flags .dropdown-menu .dropdown-item,\n[data-top-navbar-color=default-color] .dropdown-notifications .dropdown-menu .dropdown-item,\n[data-top-navbar-color=default-color] .dropdown-mega-menu .dropdown-menu .dropdown-item,\n[data-top-navbar-color=default-color] .dropdown-user .dropdown-menu .dropdown-item {\n  background: #0a346d;\n  color: #dee2e9;\n}\n[data-top-navbar-color=default-color] .dropdown-grid .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=default-color] .dropdown-tasks .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=default-color] .dropdown-flags .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=default-color] .dropdown-notifications .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=default-color] .dropdown-mega-menu .dropdown-menu .dropdown-item:hover,\n[data-top-navbar-color=default-color] .dropdown-user .dropdown-menu .dropdown-item:hover {\n  background: #0b3b7b;\n  color: #dee2e9;\n}\n@media (min-width: 992px) {\n.navbar {\n    padding-left: 30px;\n    padding-right: 15px;\n}\n.navbar.navbar-design-basic .logo {\n    width: 260px;\n}\n.navbar.navbar-design-basic .nav-inline .nav-item .toggle-left-sidebar {\n    padding-left: 0px;\n}\n.col.main {\n    padding-right: 30px;\n}\n[data-top-navbar-fixed=true] .navbar {\n    padding-left: 30px;\n    padding-right: 15px;\n}\n[data-top-navbar-fixed=true] .main {\n    padding-top: 60px;\n}\n}\n@media (min-width: 1200px) {\n.navbar.navbar-design-basic .navbar-search-form {\n    flex: 0 0 320px;\n}\n}\n@media (max-width: 991.98px) {\n.navbar.navbar-design-basic .dropdown.show .dropdown-menu {\n    position: fixed;\n    top: 65px;\n    right: 0;\n    left: 0;\n    width: 94%;\n    margin: 0 auto;\n}\n.navbar.navbar-design-basic .dropdown.show .dropdown-menu::before {\n    left: auto;\n    right: 30px;\n}\n}\n[data-top-navbar-hide=true] .navbar {\n  display: none !important;\n}\n[data-top-navbar-hide=true] .main {\n  padding-top: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, "@charset \"UTF-8\";\n.show-from-right {\n  transform: translate3d(-260px, 0, 0);\n}\n.sidebar.config-sidebar {\n  display: none;\n  overflow: visible;\n}\n.sidebar.config-sidebar .btn.toggle-config-sidebar, .sidebar.config-sidebar .btn.toggle-config-sidebar:focus, .sidebar.config-sidebar .btn.toggle-config-sidebar:active, .sidebar.config-sidebar .btn.toggle-config-sidebar:hover {\n  position: absolute;\n  top: 100px;\n  left: -40px;\n  width: 45px;\n  height: 50px;\n  font-size: 16px;\n  border-radius: 0.25rem 0 0 0.25rem;\n  border: 1px solid #d6d6d6;\n  background: #ffffff;\n  border-color: #d6d6d6;\n  color: #656565;\n  box-shadow: -2px 1px 7px -3px rgba(0, 0, 0, 0.5) !important;\n}\n.sidebar.config-sidebar .config-sidebar-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: calc(100%);\n  overflow: auto;\n  width: 280px;\n  background: #ffffff;\n  margin-bottom: 50px;\n  padding-bottom: 50px;\n}\n.sidebar.config-sidebar .config-sidebar-content {\n  width: 260px;\n  text-align: left;\n  padding-bottom: 30px;\n}\n.sidebar.config-sidebar .config-sidebar-content h4 {\n  padding: 20px;\n  font-size: 0.9375rem;\n  margin-bottom: 0;\n}\n.sidebar.config-sidebar .config-sidebar-content ul.list {\n  list-style: none;\n  padding: 0;\n}\n.sidebar.config-sidebar .config-sidebar-content ul.list .config-box .box-heading {\n  display: block;\n  padding: 8px 20px;\n  border-bottom: 1px solid #e7eaed;\n  color: #a1a2a3;\n  background: #f2f3f5;\n  font-weight: 600;\n}\n.sidebar.config-sidebar .config-sidebar-content ul.list .config-box .box-heading:after {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  content: \"\\F105\";\n  display: inline-block;\n  float: right;\n  padding-right: 3px;\n  vertical-align: middle;\n  transition: all 0.2s ease;\n  transform: rotate(0deg);\n}\n.sidebar.config-sidebar .config-sidebar-content ul.list .config-box .box-heading.opened:after {\n  transform: rotate(90deg);\n}\n.sidebar.config-sidebar .config-sidebar-content ul.list .config-box .box-content {\n  background: #fafafa;\n  border-bottom: 1px solid #e9ecef;\n  padding: 10px 20px;\n}\n.sidebar.config-sidebar .config-sidebar-content ul.list .config-box .box-content ul.list > li + li {\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px solid #f1f2f3;\n}\n.sidebar.config-sidebar .config-sidebar-content ul.list .config-box .box-content .label {\n  color: #727476;\n  font-weight: 500;\n}\n.sidebar.config-sidebar .config-sidebar-content ul.list .config-box .box-content .options {\n  padding-top: 5px;\n  font-size: 90%;\n}\n.sidebar.config-sidebar .config-sidebar-content ul.list .config-box .box-content .options .config-link {\n  color: #929496;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n  padding: 5px 0;\n  display: inline-block;\n  cursor: pointer;\n}\n.sidebar.config-sidebar .config-sidebar-content ul.list .config-box .box-content .options .config-link:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n  content: \"\\F111\";\n  display: inline-block;\n  padding-right: 5px;\n}\n.sidebar.config-sidebar .config-sidebar-content ul.list .config-box .box-content .options .config-link.active {\n  color: #2e7d32;\n}\n.sidebar.config-sidebar .config-sidebar-content ul.list .config-box .box-content .options .config-link.active:before {\n  content: \"\\F058\";\n}\n.sidebar.config-sidebar .config-sidebar-content ul.list .config-box .box-content .message {\n  border-radius: 3px;\n  border: 1px solid #1976d2;\n  margin: 10px 0 5px;\n  font-size: 12px;\n  opacity: 0.6;\n  padding: 5px 10px;\n  color: #1976d2;\n}\n.sidebar.config-sidebar .config-sidebar-content ul.list li:nth-child(even) .config-box .box-heading {\n  background: #e9ecef;\n}\n@media (min-width: 992px) {\n.sidebar.config-sidebar {\n    display: block;\n    left: auto;\n    right: 0;\n    height: calc(100%);\n    width: 260px;\n    transform: translate3d(260px, 0, 0);\n    z-index: 1039;\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n[data-sidebar-config-show=true] .config-sidebar {\n    transform: translate3d(0, 0, 0);\n}\n[data-sidebar-config-show=true] .backdrop-config-sidebar {\n    opacity: 1;\n    transform: translate3d(0, 0px, 0px);\n    transition: opacity 0.3s;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, "@charset \"UTF-8\";\n.navigation-menus {\n  margin-bottom: calc(30%);\n}\n.sidebar.left-sidebar {\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 300px;\n  transform: translate3d(-300px, 0, 0);\n  background: #fff;\n  color: #495060;\n  fill: #495060;\n}\n.sidebar.left-sidebar .section {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.sidebar.left-sidebar .section .section-title {\n  display: flex;\n  margin-left: 15px;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  text-transform: uppercase;\n  font-weight: 500;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  opacity: 0.5;\n  font-weight: 600;\n  letter-spacing: 0.8px;\n}\n.sidebar.left-sidebar .section ul.navigation-menu {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li {\n  position: relative;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li:after, .sidebar.left-sidebar .section ul.navigation-menu > li:before {\n  display: table;\n  content: \" \";\n  clear: both;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a {\n  position: relative;\n  display: block;\n  color: inherit;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 400;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a.router-link-exact-active, .sidebar.left-sidebar .section ul.navigation-menu > li a.active {\n  font-size: 0.9375rem;\n  font-weight: 700;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a > div {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  padding: 5px 20px;\n  min-height: 40px;\n  line-height: 40px;\n  clear: both;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a:hover {\n  background: #f0f0f0;\n  color: black;\n  fill: black;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: black;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  display: inline-block;\n  height: 40px;\n  line-height: 40px;\n  margin-right: 10px;\n  text-align: left;\n  vertical-align: middle;\n  position: relative;\n  min-width: 24px;\n  color: inherit;\n  fill: inherit;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a .menu-thumbnail i {\n  font-size: 1rem;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a .detailed {\n  display: inline-block;\n  vertical-align: middle;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a .detailed .title {\n  display: block;\n  text-transform: capitalize;\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: 24px;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a .detailed .description {\n  display: block;\n  clear: both;\n  font-size: 0.75rem;\n  line-height: 16px;\n  opacity: 0.5;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a > div.cta-button {\n  background: #0059FF;\n  opacity: 1;\n  transition: all 0.2s ease;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a > div.cta-button .detailed .title {\n  font-weight: bold !important;\n  letter-spacing: 0.8px;\n  font-size: 0.9rem !important;\n  text-transform: uppercase !important;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a > div.cta-button .menu-thumbnail {\n  background: transparent;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a:hover > div.cta-button {\n  opacity: 0.9;\n  padding-left: 30px;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a .badge {\n  margin-right: 25px;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a.has-children:before {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  content: \"\\F105\";\n  position: absolute;\n  top: 20px;\n  right: 30px;\n  font-size: 1rem;\n  line-height: 10px;\n  transition: transform 0.2s ease;\n  transform: rotate(0deg);\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: #e6e6e6;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li a.has-children.is-open:before {\n  transform: rotate(90deg);\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li ul {\n  background: #e6e6e6;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li ul > li a {\n  padding: 0 20px;\n  font-size: 0.8125rem;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li ul > li a .menu-thumbnail i {\n  font-size: 0.875rem;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: #d9d9d9;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li ul > li a .detailed .title {\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: 24px;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li ul > li a .detailed .description {\n  display: none;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li ul > li a .badge {\n  display: none;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li ul > li a.has-children:before {\n  top: 15px;\n  font-size: 12px;\n  line-height: 10px;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li ul > li ul > li > a {\n  padding: 0 20px 0 30px;\n  min-height: 30px;\n  line-height: 30px;\n  font-size: 0.8125rem;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li ul > li ul > li > a .menu-thumbnail i {\n  visibility: hidden;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li ul > li ul > li > a .detailed .title {\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: 24px;\n}\n.sidebar.left-sidebar .section ul.navigation-menu > li .collapse,\n.sidebar.left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-style: solid;\n  border-color: #e3e3e3;\n  border-width: 0px;\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n}\n.sidebar.left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  width: 40px;\n  margin-right: 0px;\n  text-align: center;\n  margin-left: auto;\n  background: #cccccc;\n}\n.sidebar.left-sidebar .section ul.navigation-menu.thumb-align-right a .badge {\n  margin-right: 10px;\n}\n.sidebar.left-sidebar .section ul.navigation-menu.thumb-align-right a.has-children:before {\n  right: 90px;\n  transform: rotate(180deg);\n}\n.sidebar.left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n.sidebar.left-sidebar .section ul.navigation-menu.no-sub-menu-thumbnail > li ul > li a .menu-thumbnail {\n  display: none;\n}\n.sidebar.left-sidebar .sidebar-switches {\n  display: none;\n}\n[data-sidebar-left-show=true] .left-sidebar {\n  transform: translate3d(0, 0, 0);\n}\n[data-sidebar-left-show=true] .backdrop-left-sidebar {\n  opacity: 1;\n  transform: translate3d(0, 0px, 0px);\n  transition: opacity 0.3s;\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar {\n  background: #212532;\n  color: #dee2e9;\n  fill: #dee2e9;\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar:before {\n  background-image: var(--bg-image);\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  filter: blur(2px);\n  -webkit-filter: blur(2px);\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  right: 0;\n  opacity: 0.8;\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .wrapper .content {\n  background: rgba(0, 0, 0, 0.5);\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar a {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar a:hover {\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .navigation-menus {\n  margin-bottom: calc(10%);\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .section ul.navigation-menu {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .section ul.navigation-menu > li a {\n  color: inherit;\n  fill: inherit;\n  cursor: pointer;\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .section ul.navigation-menu > li a:hover {\n  background: rgba(21, 23, 32, 0.5);\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: #fff;\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: rgba(13, 14, 19, 0.5);\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .section ul.navigation-menu > li ul {\n  background: rgba(13, 14, 19, 0.5);\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: rgba(3, 3, 4, 0.5);\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .section ul.navigation-menu > li .collapse,\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-color: rgba(11, 12, 16, 0.5);\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  background: rgba(13, 14, 19, 0.5);\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .sidebar-switches a {\n  color: #fff;\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .vue-scroll-sidebar-left {\n  max-height: 85vh;\n}\n[data-sidebar-left-color=wallpaper] .sidebar.left-sidebar .unsplash-credit {\n  position: absolute;\n  bottom: 0;\n  opacity: 0.4;\n  width: 100%;\n  padding: 1rem 0.5rem;\n  font-size: 0.775rem;\n  text-align: center;\n}\n@media (min-width: 992px) {\n.sidebar.left-sidebar {\n    left: 0;\n    width: 260px;\n    transform: translate3d(-260px, 0, 0);\n}\n.sidebar.left-sidebar .sidebar-switches {\n    padding-right: 20px;\n    display: block;\n}\n.sidebar.left-sidebar .sidebar-switches a {\n    display: inline-block;\n    padding: 3px 8px;\n    opacity: 0.5;\n    cursor: pointer;\n    font-size: 16px;\n}\n.sidebar.left-sidebar .sidebar-switches a:hover {\n    opacity: 0.8;\n}\n.sidebar.left-sidebar .sidebar-switches a.pinned {\n    cursor: pointer;\n    opacity: 0.4;\n}\n.sidebar.left-sidebar .sidebar-switches a.pinned:hover {\n    opacity: 0.7;\n}\n[data-sidebar-special-show=true] .sidebar.left-sidebar {\n    left: 60px;\n}\n[data-sidebar-left-shadow=true] .left-sidebar {\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n[data-sidebar-left-height=full] .left-sidebar {\n    top: 0;\n    height: 100%;\n}\n[data-sidebar-left-height=normal] .left-sidebar {\n    top: 60px;\n    height: calc(100%);\n}\n[data-sidebar-left-height=normal] .left-sidebar .logo-wrapper {\n    display: none;\n}\n[data-sidebar-left-height=normal] .backdrop-left-sidebar {\n    top: 60px;\n}\n[data-sidebar-left-backdrop-color=transparent] .backdrop-left-sidebar {\n    background: transparent !important;\n}\n[data-sidebar-left-backdrop-color=dark] .backdrop-left-sidebar {\n    background: rgba(0, 0, 0, 0.3) !important;\n}\n[data-sidebar-left-backdrop-color=light] .backdrop-left-sidebar {\n    background: rgba(255, 255, 255, 0.7) !important;\n}\n[data-sidebar-left-style=folded] .left-sidebar {\n    box-shadow: none;\n    transform: translate3d(-240px, 0, 0);\n    width: 300px;\n}\n[data-sidebar-left-style=folded] .left-sidebar .wrapper {\n    width: 330px;\n}\n[data-sidebar-left-style=folded] .left-sidebar .wrapper .content {\n    width: 300px;\n}\n[data-sidebar-left-style=folded] .left-sidebar .sidebar-switches .unpinned {\n    transition: transform 0.2s ease;\n    transition-delay: 0.15s;\n    transform: translate3d(-60px, 0, 0);\n}\n[data-sidebar-left-style=folded] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n    margin-right: -10px;\n}\n[data-sidebar-left-style=folded] .left-sidebar .section .section-title {\n    display: none;\n}\n[data-sidebar-left-style=folded] .navbar .toggle-left-sidebar {\n    display: none;\n}\n[data-sidebar-left-style=folded] .main,\n[data-sidebar-left-style=folded] .guest-footer {\n    padding-left: 90px;\n}\n[data-sidebar-left-style=folded][data-sidebar-left-height=full] .navbar {\n    padding-left: 90px;\n}\n[data-sidebar-left-style=folded][data-sidebar-special-show=true] .main,\n[data-sidebar-left-style=folded][data-sidebar-special-show=true] .guest-footer {\n    padding-left: 150px;\n}\n[data-sidebar-left-style=folded][data-sidebar-special-show=true][data-sidebar-left-height=full] .navbar {\n    padding-left: 120px;\n}\n[data-sidebar-left-show=true] .left-sidebar {\n    transform: translate3d(0, 0, 0);\n}\n[data-sidebar-left-show=true] .backdrop-left-sidebar {\n    opacity: 0;\n    transition: opacity 0.25s, transform 0s 0.25s;\n    transform: translate3d(100%, 0px, 0px);\n}\n[data-sidebar-left-show=true][data-sidebar-left-height=normal][data-sidebar-left-style=push] .main,\n[data-sidebar-left-show=true][data-sidebar-left-height=normal][data-sidebar-left-style=push] .guest-footer, [data-sidebar-left-show=true][data-sidebar-left-height=normal][data-sidebar-left-style=push-content] .main,\n[data-sidebar-left-show=true][data-sidebar-left-height=normal][data-sidebar-left-style=push-content] .guest-footer {\n    padding-left: 290px;\n}\n[data-sidebar-left-show=true][data-sidebar-left-height=normal][data-sidebar-left-style=push][data-sidebar-special-show=true] .main,\n[data-sidebar-left-show=true][data-sidebar-left-height=normal][data-sidebar-left-style=push][data-sidebar-special-show=true] .guest-footer, [data-sidebar-left-show=true][data-sidebar-left-height=normal][data-sidebar-left-style=push-content][data-sidebar-special-show=true] .main,\n[data-sidebar-left-show=true][data-sidebar-left-height=normal][data-sidebar-left-style=push-content][data-sidebar-special-show=true] .guest-footer {\n    padding-left: 350px;\n}\n[data-sidebar-left-show=true][data-sidebar-left-height=normal][data-sidebar-left-style=off-canvas] .main,\n[data-sidebar-left-show=true][data-sidebar-left-height=normal][data-sidebar-left-style=off-canvas] .guest-footer {\n    transform: translate3d(260px, 0, 0);\n    width: 100%;\n}\n[data-sidebar-left-show=true][data-sidebar-left-height=full][data-sidebar-left-style=push] .navbar,\n[data-sidebar-left-show=true][data-sidebar-left-height=full][data-sidebar-left-style=push] .main,\n[data-sidebar-left-show=true][data-sidebar-left-height=full][data-sidebar-left-style=push] .guest-footer {\n    padding-left: 290px;\n}\n[data-sidebar-left-show=true][data-sidebar-left-height=full][data-sidebar-left-style=push-content] .main,\n[data-sidebar-left-show=true][data-sidebar-left-height=full][data-sidebar-left-style=push-content] .guest-footer {\n    padding-left: 290px;\n}\n[data-sidebar-left-show=true][data-sidebar-left-height=full][data-sidebar-left-style=off-canvas] .navbar,\n[data-sidebar-left-show=true][data-sidebar-left-height=full][data-sidebar-left-style=off-canvas] .main,\n[data-sidebar-left-show=true][data-sidebar-left-height=full][data-sidebar-left-style=off-canvas] .guest-footer {\n    transform: translate3d(260px, 0, 0);\n    width: 100%;\n}\n[data-sidebar-left-show=true][data-sidebar-left-height=full][data-sidebar-special-show=true][data-sidebar-left-style=push] .navbar,\n[data-sidebar-left-show=true][data-sidebar-left-height=full][data-sidebar-special-show=true][data-sidebar-left-style=push] .main,\n[data-sidebar-left-show=true][data-sidebar-left-height=full][data-sidebar-special-show=true][data-sidebar-left-style=push] .guest-footer {\n    padding-left: 350px;\n}\n[data-sidebar-left-show=true][data-sidebar-left-height=full][data-sidebar-special-show=true][data-sidebar-left-style=push-content] .main {\n    padding-left: 350px;\n}\n[data-sidebar-left-show=true][data-sidebar-left-style=over] .navbar {\n    left: 0;\n    width: 100%;\n}\n[data-sidebar-left-show=true][data-sidebar-left-style=over][data-sidebar-left-style=push-content] .navbar {\n    left: 60px;\n}\n[data-sidebar-left-show=true][data-sidebar-left-style=folded] .navbar {\n    left: 0;\n    width: 100%;\n}\n[data-sidebar-left-show=true][data-sidebar-left-style=folded][data-sidebar-left-style=push-content] .navbar {\n    left: 60px;\n}\n[data-sidebar-left-show=true][data-sidebar-left-style=folded] .sidebar-switches .unpinned {\n    transform: translate3d(0, 0, 0);\n}\n[data-sidebar-left-show=true][data-sidebar-left-style=folded] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n    margin-right: 0px;\n}\n[data-sidebar-left-show=true][data-sidebar-left-style=folded] .left-sidebar .section .section-title {\n    display: flex;\n}\n[data-sidebar-left-show=true][data-sidebar-left-backdrop=true] .backdrop-left-sidebar {\n    opacity: 1;\n    transform: translate3d(0, 0px, 0px);\n    transition: opacity 0.3s;\n}\n[data-app-license=no] .main,\n[data-app-license=no] .guest-footer {\n    padding-left: 30px !important;\n}\n[data-app-license=no] .navbar {\n    padding-left: 30px !important;\n}\n}\n[data-sidebar-left-color=primary] .left-sidebar {\n  background: #0059FF;\n  color: #dee2e9;\n  fill: #dee2e9;\n}\n[data-sidebar-left-color=primary] .left-sidebar a {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=primary] .left-sidebar a:hover {\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=primary] .left-sidebar .section ul.navigation-menu > li a {\n  color: inherit;\n  fill: inherit;\n  cursor: pointer;\n}\n[data-sidebar-left-color=primary] .left-sidebar .section ul.navigation-menu > li a:hover {\n  background: #004ee0;\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=primary] .left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: #fff;\n}\n[data-sidebar-left-color=primary] .left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=primary] .left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=primary] .left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: #0047cc;\n}\n[data-sidebar-left-color=primary] .left-sidebar .section ul.navigation-menu > li a > div.cta-button {\n  background: #e00c51;\n}\n[data-sidebar-left-color=primary] .left-sidebar .section ul.navigation-menu > li ul {\n  background: #0047cc;\n}\n[data-sidebar-left-color=primary] .left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: #003eb3;\n}\n[data-sidebar-left-color=primary] .left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=primary] .left-sidebar .section ul.navigation-menu > li .collapse,\n[data-sidebar-left-color=primary] .left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-color: #0045c7;\n}\n[data-sidebar-left-color=primary] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  background: #0047cc;\n}\n[data-sidebar-left-color=primary] .left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n[data-sidebar-left-color=primary] .left-sidebar .sidebar-switches a {\n  color: #fff;\n}\n[data-sidebar-left-color=light-primary] .left-sidebar {\n  background: #4d8bff;\n  color: #dee2e9;\n  fill: #dee2e9;\n}\n[data-sidebar-left-color=light-primary] .left-sidebar a {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=light-primary] .left-sidebar a:hover {\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=light-primary] .left-sidebar .section ul.navigation-menu > li a {\n  color: inherit;\n  fill: inherit;\n  cursor: pointer;\n}\n[data-sidebar-left-color=light-primary] .left-sidebar .section ul.navigation-menu > li a:hover {\n  background: #2e77ff;\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=light-primary] .left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: #fff;\n}\n[data-sidebar-left-color=light-primary] .left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=light-primary] .left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=light-primary] .left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: #1a6aff;\n}\n[data-sidebar-left-color=light-primary] .left-sidebar .section ul.navigation-menu > li a > div.cta-button {\n  background: #e00c51;\n}\n[data-sidebar-left-color=light-primary] .left-sidebar .section ul.navigation-menu > li ul {\n  background: #1a6aff;\n}\n[data-sidebar-left-color=light-primary] .left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: #0059ff;\n}\n[data-sidebar-left-color=light-primary] .left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=light-primary] .left-sidebar .section ul.navigation-menu > li .collapse,\n[data-sidebar-left-color=light-primary] .left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-color: #1466ff;\n}\n[data-sidebar-left-color=light-primary] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  background: #1a6aff;\n}\n[data-sidebar-left-color=light-primary] .left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n[data-sidebar-left-color=light-primary] .left-sidebar .sidebar-switches a {\n  color: #fff;\n}\n[data-sidebar-left-color=dark-primary] .left-sidebar {\n  background: #003eb3;\n  color: #dee2e9;\n  fill: #dee2e9;\n}\n[data-sidebar-left-color=dark-primary] .left-sidebar a {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=dark-primary] .left-sidebar a:hover {\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=dark-primary] .left-sidebar .section ul.navigation-menu > li a {\n  color: inherit;\n  fill: inherit;\n  cursor: pointer;\n}\n[data-sidebar-left-color=dark-primary] .left-sidebar .section ul.navigation-menu > li a:hover {\n  background: #003494;\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=dark-primary] .left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: #fff;\n}\n[data-sidebar-left-color=dark-primary] .left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=dark-primary] .left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=dark-primary] .left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: #002d80;\n}\n[data-sidebar-left-color=dark-primary] .left-sidebar .section ul.navigation-menu > li a > div.cta-button {\n  background: #e00c51;\n}\n[data-sidebar-left-color=dark-primary] .left-sidebar .section ul.navigation-menu > li ul {\n  background: #002d80;\n}\n[data-sidebar-left-color=dark-primary] .left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: #002466;\n}\n[data-sidebar-left-color=dark-primary] .left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=dark-primary] .left-sidebar .section ul.navigation-menu > li .collapse,\n[data-sidebar-left-color=dark-primary] .left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-color: #002b7a;\n}\n[data-sidebar-left-color=dark-primary] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  background: #002d80;\n}\n[data-sidebar-left-color=dark-primary] .left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n[data-sidebar-left-color=dark-primary] .left-sidebar .sidebar-switches a {\n  color: #fff;\n}\n[data-sidebar-left-color=secondary] .left-sidebar {\n  background: #e00c51;\n  color: #6c7580;\n  fill: #6c7580;\n}\n[data-sidebar-left-color=secondary] .left-sidebar a {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=secondary] .left-sidebar a:hover {\n  color: #000;\n  fill: #000;\n}\n[data-sidebar-left-color=secondary] .left-sidebar .section ul.navigation-menu > li a {\n  color: inherit;\n  fill: inherit;\n  cursor: pointer;\n}\n[data-sidebar-left-color=secondary] .left-sidebar .section ul.navigation-menu > li a:hover {\n  background: #c30a46;\n  color: #000;\n  fill: #000;\n}\n[data-sidebar-left-color=secondary] .left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: #000;\n}\n[data-sidebar-left-color=secondary] .left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=secondary] .left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=secondary] .left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: #b0093f;\n}\n[data-sidebar-left-color=secondary] .left-sidebar .section ul.navigation-menu > li a > div.cta-button {\n  background: #e00c51;\n}\n[data-sidebar-left-color=secondary] .left-sidebar .section ul.navigation-menu > li ul {\n  background: #b0093f;\n}\n[data-sidebar-left-color=secondary] .left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: #970837;\n}\n[data-sidebar-left-color=secondary] .left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=secondary] .left-sidebar .section ul.navigation-menu > li .collapse,\n[data-sidebar-left-color=secondary] .left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-color: #ab093e;\n}\n[data-sidebar-left-color=secondary] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  background: #b0093f;\n}\n[data-sidebar-left-color=secondary] .left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n[data-sidebar-left-color=secondary] .left-sidebar .sidebar-switches a {\n  color: #000;\n}\n[data-sidebar-left-color=dark-secondary] .left-sidebar {\n  background: #970837;\n  color: #6c7580;\n  fill: #6c7580;\n}\n[data-sidebar-left-color=dark-secondary] .left-sidebar a {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=dark-secondary] .left-sidebar a:hover {\n  color: #000;\n  fill: #000;\n}\n[data-sidebar-left-color=dark-secondary] .left-sidebar .section ul.navigation-menu > li a {\n  color: inherit;\n  fill: inherit;\n  cursor: pointer;\n}\n[data-sidebar-left-color=dark-secondary] .left-sidebar .section ul.navigation-menu > li a:hover {\n  background: #7a072c;\n  color: #000;\n  fill: #000;\n}\n[data-sidebar-left-color=dark-secondary] .left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: #000;\n}\n[data-sidebar-left-color=dark-secondary] .left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=dark-secondary] .left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=dark-secondary] .left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: #670625;\n}\n[data-sidebar-left-color=dark-secondary] .left-sidebar .section ul.navigation-menu > li a > div.cta-button {\n  background: #e00c51;\n}\n[data-sidebar-left-color=dark-secondary] .left-sidebar .section ul.navigation-menu > li ul {\n  background: #670625;\n}\n[data-sidebar-left-color=dark-secondary] .left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: #4f041c;\n}\n[data-sidebar-left-color=dark-secondary] .left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=dark-secondary] .left-sidebar .section ul.navigation-menu > li .collapse,\n[data-sidebar-left-color=dark-secondary] .left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-color: #620523;\n}\n[data-sidebar-left-color=dark-secondary] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  background: #670625;\n}\n[data-sidebar-left-color=dark-secondary] .left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n[data-sidebar-left-color=dark-secondary] .left-sidebar .sidebar-switches a {\n  color: #000;\n}\n[data-sidebar-left-color=success] .left-sidebar {\n  background: #2dce89;\n  color: #dee2e9;\n  fill: #dee2e9;\n}\n[data-sidebar-left-color=success] .left-sidebar a {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=success] .left-sidebar a:hover {\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=success] .left-sidebar .section ul.navigation-menu > li a {\n  color: inherit;\n  fill: inherit;\n  cursor: pointer;\n}\n[data-sidebar-left-color=success] .left-sidebar .section ul.navigation-menu > li a:hover {\n  background: #28b578;\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=success] .left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: #fff;\n}\n[data-sidebar-left-color=success] .left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=success] .left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=success] .left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: #24a46d;\n}\n[data-sidebar-left-color=success] .left-sidebar .section ul.navigation-menu > li a > div.cta-button {\n  background: #0059FF;\n}\n[data-sidebar-left-color=success] .left-sidebar .section ul.navigation-menu > li ul {\n  background: #24a46d;\n}\n[data-sidebar-left-color=success] .left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: #1f8f5f;\n}\n[data-sidebar-left-color=success] .left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=success] .left-sidebar .section ul.navigation-menu > li .collapse,\n[data-sidebar-left-color=success] .left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-color: #23a06a;\n}\n[data-sidebar-left-color=success] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  background: #24a46d;\n}\n[data-sidebar-left-color=success] .left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n[data-sidebar-left-color=success] .left-sidebar .sidebar-switches a {\n  color: #fff;\n}\n[data-sidebar-left-color=info] .left-sidebar {\n  background: #11cdef;\n  color: #dee2e9;\n  fill: #dee2e9;\n}\n[data-sidebar-left-color=info] .left-sidebar a {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=info] .left-sidebar a:hover {\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=info] .left-sidebar .section ul.navigation-menu > li a {\n  color: inherit;\n  fill: inherit;\n  cursor: pointer;\n}\n[data-sidebar-left-color=info] .left-sidebar .section ul.navigation-menu > li a:hover {\n  background: #0eb5d3;\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=info] .left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: #fff;\n}\n[data-sidebar-left-color=info] .left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=info] .left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=info] .left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: #0da5c0;\n}\n[data-sidebar-left-color=info] .left-sidebar .section ul.navigation-menu > li a > div.cta-button {\n  background: #e00c51;\n}\n[data-sidebar-left-color=info] .left-sidebar .section ul.navigation-menu > li ul {\n  background: #0da5c0;\n}\n[data-sidebar-left-color=info] .left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: #0b90a8;\n}\n[data-sidebar-left-color=info] .left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=info] .left-sidebar .section ul.navigation-menu > li .collapse,\n[data-sidebar-left-color=info] .left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-color: #0da1bb;\n}\n[data-sidebar-left-color=info] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  background: #0da5c0;\n}\n[data-sidebar-left-color=info] .left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n[data-sidebar-left-color=info] .left-sidebar .sidebar-switches a {\n  color: #fff;\n}\n[data-sidebar-left-color=warning] .left-sidebar {\n  background: #fb6340;\n  color: #dee2e9;\n  fill: #dee2e9;\n}\n[data-sidebar-left-color=warning] .left-sidebar a {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=warning] .left-sidebar a:hover {\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=warning] .left-sidebar .section ul.navigation-menu > li a {\n  color: inherit;\n  fill: inherit;\n  cursor: pointer;\n}\n[data-sidebar-left-color=warning] .left-sidebar .section ul.navigation-menu > li a:hover {\n  background: #fa4b22;\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=warning] .left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: #fff;\n}\n[data-sidebar-left-color=warning] .left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=warning] .left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=warning] .left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: #fa3a0e;\n}\n[data-sidebar-left-color=warning] .left-sidebar .section ul.navigation-menu > li a > div.cta-button {\n  background: #0059FF;\n}\n[data-sidebar-left-color=warning] .left-sidebar .section ul.navigation-menu > li ul {\n  background: #fa3a0e;\n}\n[data-sidebar-left-color=warning] .left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: #ea3005;\n}\n[data-sidebar-left-color=warning] .left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=warning] .left-sidebar .section ul.navigation-menu > li .collapse,\n[data-sidebar-left-color=warning] .left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-color: #fa3609;\n}\n[data-sidebar-left-color=warning] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  background: #fa3a0e;\n}\n[data-sidebar-left-color=warning] .left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n[data-sidebar-left-color=warning] .left-sidebar .sidebar-switches a {\n  color: #fff;\n}\n[data-sidebar-left-color=danger] .left-sidebar {\n  background: #f5365c;\n  color: #dee2e9;\n  fill: #dee2e9;\n}\n[data-sidebar-left-color=danger] .left-sidebar a {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=danger] .left-sidebar a:hover {\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=danger] .left-sidebar .section ul.navigation-menu > li a {\n  color: inherit;\n  fill: inherit;\n  cursor: pointer;\n}\n[data-sidebar-left-color=danger] .left-sidebar .section ul.navigation-menu > li a:hover {\n  background: #f41944;\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=danger] .left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: #fff;\n}\n[data-sidebar-left-color=danger] .left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=danger] .left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=danger] .left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: #ec0c38;\n}\n[data-sidebar-left-color=danger] .left-sidebar .section ul.navigation-menu > li a > div.cta-button {\n  background: #0059FF;\n}\n[data-sidebar-left-color=danger] .left-sidebar .section ul.navigation-menu > li ul {\n  background: #ec0c38;\n}\n[data-sidebar-left-color=danger] .left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: #d40b33;\n}\n[data-sidebar-left-color=danger] .left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=danger] .left-sidebar .section ul.navigation-menu > li .collapse,\n[data-sidebar-left-color=danger] .left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-color: #e70c37;\n}\n[data-sidebar-left-color=danger] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  background: #ec0c38;\n}\n[data-sidebar-left-color=danger] .left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n[data-sidebar-left-color=danger] .left-sidebar .sidebar-switches a {\n  color: #fff;\n}\n[data-sidebar-left-color=white] .left-sidebar {\n  background: #fff;\n  color: #6c7580;\n  fill: #6c7580;\n}\n[data-sidebar-left-color=white] .left-sidebar a {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=white] .left-sidebar a:hover {\n  color: #000;\n  fill: #000;\n}\n[data-sidebar-left-color=white] .left-sidebar .section ul.navigation-menu > li a {\n  color: inherit;\n  fill: inherit;\n  cursor: pointer;\n}\n[data-sidebar-left-color=white] .left-sidebar .section ul.navigation-menu > li a:hover {\n  background: #f0f0f0;\n  color: #000;\n  fill: #000;\n}\n[data-sidebar-left-color=white] .left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: #000;\n}\n[data-sidebar-left-color=white] .left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=white] .left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=white] .left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: #e6e6e6;\n}\n[data-sidebar-left-color=white] .left-sidebar .section ul.navigation-menu > li a > div.cta-button {\n  background: #0059FF;\n}\n[data-sidebar-left-color=white] .left-sidebar .section ul.navigation-menu > li ul {\n  background: #e6e6e6;\n}\n[data-sidebar-left-color=white] .left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: #d9d9d9;\n}\n[data-sidebar-left-color=white] .left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=white] .left-sidebar .section ul.navigation-menu > li .collapse,\n[data-sidebar-left-color=white] .left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-color: #e3e3e3;\n}\n[data-sidebar-left-color=white] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  background: #e6e6e6;\n}\n[data-sidebar-left-color=white] .left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n[data-sidebar-left-color=white] .left-sidebar .sidebar-switches a {\n  color: #000;\n}\n[data-sidebar-left-color=whitish] .left-sidebar {\n  background: #fafbfd;\n  color: #6c7580;\n  fill: #6c7580;\n}\n[data-sidebar-left-color=whitish] .left-sidebar a {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=whitish] .left-sidebar a:hover {\n  color: #495060;\n  fill: #495060;\n}\n[data-sidebar-left-color=whitish] .left-sidebar .section ul.navigation-menu > li a {\n  color: inherit;\n  fill: inherit;\n  cursor: pointer;\n}\n[data-sidebar-left-color=whitish] .left-sidebar .section ul.navigation-menu > li a:hover {\n  background: #e4eaf4;\n  color: #495060;\n  fill: #495060;\n}\n[data-sidebar-left-color=whitish] .left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: #495060;\n}\n[data-sidebar-left-color=whitish] .left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=whitish] .left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=whitish] .left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: #d6deee;\n}\n[data-sidebar-left-color=whitish] .left-sidebar .section ul.navigation-menu > li a > div.cta-button {\n  background: #0059FF;\n}\n[data-sidebar-left-color=whitish] .left-sidebar .section ul.navigation-menu > li ul {\n  background: #d6deee;\n}\n[data-sidebar-left-color=whitish] .left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: #c3cfe7;\n}\n[data-sidebar-left-color=whitish] .left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=whitish] .left-sidebar .section ul.navigation-menu > li .collapse,\n[data-sidebar-left-color=whitish] .left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-color: #d2dbed;\n}\n[data-sidebar-left-color=whitish] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  background: #d6deee;\n}\n[data-sidebar-left-color=whitish] .left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n[data-sidebar-left-color=whitish] .left-sidebar .sidebar-switches a {\n  color: #495060;\n}\n[data-sidebar-left-color=light] .left-sidebar {\n  background: #dee2e9;\n  color: #6c7580;\n  fill: #6c7580;\n}\n[data-sidebar-left-color=light] .left-sidebar a {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=light] .left-sidebar a:hover {\n  color: #495060;\n  fill: #495060;\n}\n[data-sidebar-left-color=light] .left-sidebar .section ul.navigation-menu > li a {\n  color: inherit;\n  fill: inherit;\n  cursor: pointer;\n}\n[data-sidebar-left-color=light] .left-sidebar .section ul.navigation-menu > li a:hover {\n  background: #ccd2dd;\n  color: #495060;\n  fill: #495060;\n}\n[data-sidebar-left-color=light] .left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: #495060;\n}\n[data-sidebar-left-color=light] .left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=light] .left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=light] .left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: #bfc7d5;\n}\n[data-sidebar-left-color=light] .left-sidebar .section ul.navigation-menu > li a > div.cta-button {\n  background: #0059FF;\n}\n[data-sidebar-left-color=light] .left-sidebar .section ul.navigation-menu > li ul {\n  background: #bfc7d5;\n}\n[data-sidebar-left-color=light] .left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: #b0baca;\n}\n[data-sidebar-left-color=light] .left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=light] .left-sidebar .section ul.navigation-menu > li .collapse,\n[data-sidebar-left-color=light] .left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-color: #bcc4d3;\n}\n[data-sidebar-left-color=light] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  background: #bfc7d5;\n}\n[data-sidebar-left-color=light] .left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n[data-sidebar-left-color=light] .left-sidebar .sidebar-switches a {\n  color: #495060;\n}\n[data-sidebar-left-color=dark] .left-sidebar {\n  background: #6c7580;\n  color: #dee2e9;\n  fill: #dee2e9;\n}\n[data-sidebar-left-color=dark] .left-sidebar a {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=dark] .left-sidebar a:hover {\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=dark] .left-sidebar .section ul.navigation-menu > li a {\n  color: inherit;\n  fill: inherit;\n  cursor: pointer;\n}\n[data-sidebar-left-color=dark] .left-sidebar .section ul.navigation-menu > li a:hover {\n  background: #5e666f;\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=dark] .left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: #fff;\n}\n[data-sidebar-left-color=dark] .left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=dark] .left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=dark] .left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: #555c64;\n}\n[data-sidebar-left-color=dark] .left-sidebar .section ul.navigation-menu > li a > div.cta-button {\n  background: #0059FF;\n}\n[data-sidebar-left-color=dark] .left-sidebar .section ul.navigation-menu > li ul {\n  background: #555c64;\n}\n[data-sidebar-left-color=dark] .left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: #494f57;\n}\n[data-sidebar-left-color=dark] .left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=dark] .left-sidebar .section ul.navigation-menu > li .collapse,\n[data-sidebar-left-color=dark] .left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-color: #525962;\n}\n[data-sidebar-left-color=dark] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  background: #555c64;\n}\n[data-sidebar-left-color=dark] .left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n[data-sidebar-left-color=dark] .left-sidebar .sidebar-switches a {\n  color: #fff;\n}\n[data-sidebar-left-color=gray-darker] .left-sidebar {\n  background: #495060;\n  color: #dee2e9;\n  fill: #dee2e9;\n}\n[data-sidebar-left-color=gray-darker] .left-sidebar a {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=gray-darker] .left-sidebar a:hover {\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=gray-darker] .left-sidebar .section ul.navigation-menu > li a {\n  color: inherit;\n  fill: inherit;\n  cursor: pointer;\n}\n[data-sidebar-left-color=gray-darker] .left-sidebar .section ul.navigation-menu > li a:hover {\n  background: #3c424f;\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=gray-darker] .left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: #fff;\n}\n[data-sidebar-left-color=gray-darker] .left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=gray-darker] .left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=gray-darker] .left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: #333843;\n}\n[data-sidebar-left-color=gray-darker] .left-sidebar .section ul.navigation-menu > li a > div.cta-button {\n  background: #0059FF;\n}\n[data-sidebar-left-color=gray-darker] .left-sidebar .section ul.navigation-menu > li ul {\n  background: #333843;\n}\n[data-sidebar-left-color=gray-darker] .left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: #282c35;\n}\n[data-sidebar-left-color=gray-darker] .left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=gray-darker] .left-sidebar .section ul.navigation-menu > li .collapse,\n[data-sidebar-left-color=gray-darker] .left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-color: #313540;\n}\n[data-sidebar-left-color=gray-darker] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  background: #333843;\n}\n[data-sidebar-left-color=gray-darker] .left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n[data-sidebar-left-color=gray-darker] .left-sidebar .sidebar-switches a {\n  color: #fff;\n}\n[data-sidebar-left-color=gray-darkest] .left-sidebar {\n  background: #212532;\n  color: #dee2e9;\n  fill: #dee2e9;\n}\n[data-sidebar-left-color=gray-darkest] .left-sidebar a {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=gray-darkest] .left-sidebar a:hover {\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=gray-darkest] .left-sidebar .section ul.navigation-menu > li a {\n  color: inherit;\n  fill: inherit;\n  cursor: pointer;\n}\n[data-sidebar-left-color=gray-darkest] .left-sidebar .section ul.navigation-menu > li a:hover {\n  background: #151720;\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=gray-darkest] .left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: #fff;\n}\n[data-sidebar-left-color=gray-darkest] .left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=gray-darkest] .left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=gray-darkest] .left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: #0d0e13;\n}\n[data-sidebar-left-color=gray-darkest] .left-sidebar .section ul.navigation-menu > li a > div.cta-button {\n  background: #0059FF;\n}\n[data-sidebar-left-color=gray-darkest] .left-sidebar .section ul.navigation-menu > li ul {\n  background: #0d0e13;\n}\n[data-sidebar-left-color=gray-darkest] .left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: #030304;\n}\n[data-sidebar-left-color=gray-darkest] .left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=gray-darkest] .left-sidebar .section ul.navigation-menu > li .collapse,\n[data-sidebar-left-color=gray-darkest] .left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-color: #0b0c10;\n}\n[data-sidebar-left-color=gray-darkest] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  background: #0d0e13;\n}\n[data-sidebar-left-color=gray-darkest] .left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n[data-sidebar-left-color=gray-darkest] .left-sidebar .sidebar-switches a {\n  color: #fff;\n}\n[data-sidebar-left-color=black] .left-sidebar {\n  background: #000;\n  color: #dee2e9;\n  fill: #dee2e9;\n}\n[data-sidebar-left-color=black] .left-sidebar a {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=black] .left-sidebar a:hover {\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=black] .left-sidebar .section ul.navigation-menu > li a {\n  color: inherit;\n  fill: inherit;\n  cursor: pointer;\n}\n[data-sidebar-left-color=black] .left-sidebar .section ul.navigation-menu > li a:hover {\n  background: black;\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=black] .left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: #fff;\n}\n[data-sidebar-left-color=black] .left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=black] .left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=black] .left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: black;\n}\n[data-sidebar-left-color=black] .left-sidebar .section ul.navigation-menu > li a > div.cta-button {\n  background: #0059FF;\n}\n[data-sidebar-left-color=black] .left-sidebar .section ul.navigation-menu > li ul {\n  background: black;\n}\n[data-sidebar-left-color=black] .left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: black;\n}\n[data-sidebar-left-color=black] .left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=black] .left-sidebar .section ul.navigation-menu > li .collapse,\n[data-sidebar-left-color=black] .left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-color: black;\n}\n[data-sidebar-left-color=black] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  background: black;\n}\n[data-sidebar-left-color=black] .left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n[data-sidebar-left-color=black] .left-sidebar .sidebar-switches a {\n  color: #fff;\n}\n[data-sidebar-left-color=default-color] .left-sidebar {\n  background: #0a346d;\n  color: #dee2e9;\n  fill: #dee2e9;\n}\n[data-sidebar-left-color=default-color] .left-sidebar a {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=default-color] .left-sidebar a:hover {\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=default-color] .left-sidebar .section ul.navigation-menu > li a {\n  color: inherit;\n  fill: inherit;\n  cursor: pointer;\n}\n[data-sidebar-left-color=default-color] .left-sidebar .section ul.navigation-menu > li a:hover {\n  background: #072751;\n  color: #fff;\n  fill: #fff;\n}\n[data-sidebar-left-color=default-color] .left-sidebar .section ul.navigation-menu > li a:hover i {\n  color: #fff;\n}\n[data-sidebar-left-color=default-color] .left-sidebar .section ul.navigation-menu > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=default-color] .left-sidebar .section ul.navigation-menu > li a .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=default-color] .left-sidebar .section ul.navigation-menu > li a.has-children.is-open {\n  background: #061e3e;\n}\n[data-sidebar-left-color=default-color] .left-sidebar .section ul.navigation-menu > li a > div.cta-button {\n  background: #0059FF;\n}\n[data-sidebar-left-color=default-color] .left-sidebar .section ul.navigation-menu > li ul {\n  background: #061e3e;\n}\n[data-sidebar-left-color=default-color] .left-sidebar .section ul.navigation-menu > li ul > li a:hover {\n  background: #041327;\n}\n[data-sidebar-left-color=default-color] .left-sidebar .section ul.navigation-menu > li ul > li a:hover .menu-thumbnail {\n  color: inherit;\n  fill: inherit;\n}\n[data-sidebar-left-color=default-color] .left-sidebar .section ul.navigation-menu > li .collapse,\n[data-sidebar-left-color=default-color] .left-sidebar .section ul.navigation-menu > li .collapsing {\n  border-color: #051b3a;\n}\n[data-sidebar-left-color=default-color] .left-sidebar .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {\n  background: #061e3e;\n}\n[data-sidebar-left-color=default-color] .left-sidebar .section ul.navigation-menu.thumb-align-right ul > li a .menu-thumbnail {\n  background: transparent;\n}\n[data-sidebar-left-color=default-color] .left-sidebar .sidebar-switches a {\n  color: #fff;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, ".sidebar.right-sidebar {\n  display: block;\n  left: auto;\n  right: 0;\n  width: 260px;\n  transform: translate3d(260px, 0, 0);\n}\n.sidebar.right-sidebar .right-sidebar-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  overflow: auto;\n  width: 280px;\n  background: #ffffff;\n}\n.show-from-right {\n  transform: translate3d(260px, 0, 0);\n}\n@media (min-width: 992px) {\n.sidebar.right-sidebar {\n    width: 340px;\n    transform: translate3d(340px, 0, 0);\n}\n.sidebar.right-sidebar .right-sidebar-inner {\n    width: 360px;\n    background: #ffffff;\n}\n.sidebar.right-sidebar .right-sidebar-content {\n    width: 100%;\n    text-align: left;\n}\n.sidebar.right-sidebar .right-sidebar-content .sidebar-heading {\n    padding: 20px;\n    margin-bottom: 0;\n}\n.sidebar.right-sidebar .right-sidebar-content .tab-content {\n    text-align: left;\n    padding: 10px;\n}\n.sidebar.right-sidebar .right-sidebar-content .color-block {\n    display: block;\n    height: 30px;\n    width: 30px;\n    float: left;\n    margin: 0 10px 5px 0;\n    cursor: pointer;\n}\n.sidebar.right-sidebar .right-sidebar-content .list-group-item-title {\n    font-size: 0.8125rem;\n    font-weight: 400;\n}\n.sidebar.right-sidebar .right-sidebar-content .list-group-item-colors {\n    padding: 20px 15px;\n}\n[data-sidebar-right-shadow=true] .right-sidebar {\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n[data-sidebar-right-height=full] .right-sidebar {\n    top: 0;\n    height: 100%;\n    z-index: 1038;\n}\n[data-sidebar-right-height=normal] .right-sidebar {\n    top: 60px;\n    height: calc(100%);\n    z-index: 1038;\n}\n[data-sidebar-right-height=normal] .backdrop-right-sidebar {\n    top: 60px;\n}\n[data-sidebar-right-backdrop-color=transparent] .backdrop-right-sidebar {\n    background: transparent !important;\n}\n[data-sidebar-right-backdrop-color=dark] .backdrop-right-sidebar {\n    background: rgba(0, 0, 0, 0.3) !important;\n}\n[data-sidebar-right-backdrop-color=light] .backdrop-right-sidebar {\n    background: rgba(255, 255, 255, 0.7) !important;\n}\n[data-sidebar-right-show=true] .right-sidebar {\n    transform: translate3d(0, 0, 0);\n}\n[data-sidebar-right-show=true][data-sidebar-right-height=normal][data-sidebar-right-style=push] .main {\n    padding-right: 290px;\n}\n[data-sidebar-right-show=true][data-sidebar-right-height=normal][data-sidebar-right-style=off-canvas] .main {\n    transform: translate3d(-260px, 0, 0);\n    width: 100%;\n}\n[data-sidebar-right-show=true][data-sidebar-right-height=normal][data-sidebar-right-style=off-canvas] .left-sidebar {\n    transform: translate3d(-260px, 0, 0);\n}\n[data-sidebar-right-show=true][data-sidebar-right-height=normal][data-sidebar-right-style=off-canvas] .backdrop-right-sidebar {\n    opacity: 1;\n    transform: translate3d(0, 0px, 0px);\n    transition: opacity 0.3s;\n}\n[data-sidebar-right-show=true][data-sidebar-right-height=full][data-sidebar-right-style=push] .navbar,\n[data-sidebar-right-show=true][data-sidebar-right-height=full][data-sidebar-right-style=push] .main {\n    padding-right: 290px;\n}\n[data-sidebar-right-show=true][data-sidebar-right-height=full][data-sidebar-right-style=off-canvas] .navbar,\n[data-sidebar-right-show=true][data-sidebar-right-height=full][data-sidebar-right-style=off-canvas] .main {\n    transform: translate3d(-260px, 0, 0);\n    width: 100%;\n}\n[data-sidebar-right-show=true][data-sidebar-right-height=full][data-sidebar-right-style=off-canvas] .left-sidebar {\n    transform: translate3d(-260px, 0, 0);\n}\n[data-sidebar-right-show=true][data-sidebar-right-height=full][data-sidebar-right-style=off-canvas] .backdrop-right-sidebar {\n    opacity: 1;\n    transform: translate3d(0, 0px, 0px);\n    transition: opacity 0.3s;\n}\n[data-sidebar-right-show=true][data-sidebar-right-style=over] .navbar {\n    left: 0;\n    width: 100%;\n}\n[data-sidebar-right-show=true][data-sidebar-right-style=over] .backdrop-right-sidebar {\n    opacity: 1;\n    transform: translate3d(0, 0px, 0px);\n    transition: opacity 0.3s;\n}\n}\n[data-sidebar-right-color=primary] .right-sidebar-content {\n  background: #0059FF;\n  color: #dee2e9;\n}\n[data-sidebar-right-color=primary] .right-sidebar-content a {\n  color: #dee2e9;\n}\n[data-sidebar-right-color=light-primary] .right-sidebar-content {\n  background: #4d8bff;\n  color: #dee2e9;\n}\n[data-sidebar-right-color=light-primary] .right-sidebar-content a {\n  color: #dee2e9;\n}\n[data-sidebar-right-color=dark-primary] .right-sidebar-content {\n  background: #003eb3;\n  color: #dee2e9;\n}\n[data-sidebar-right-color=dark-primary] .right-sidebar-content a {\n  color: #dee2e9;\n}\n[data-sidebar-right-color=secondary] .right-sidebar-content {\n  background: #e00c51;\n  color: #6c7580;\n}\n[data-sidebar-right-color=secondary] .right-sidebar-content a {\n  color: #6c7580;\n}\n[data-sidebar-right-color=dark-secondary] .right-sidebar-content {\n  background: #970837;\n  color: #6c7580;\n}\n[data-sidebar-right-color=dark-secondary] .right-sidebar-content a {\n  color: #6c7580;\n}\n[data-sidebar-right-color=success] .right-sidebar-content {\n  background: #2dce89;\n  color: #dee2e9;\n}\n[data-sidebar-right-color=success] .right-sidebar-content a {\n  color: #dee2e9;\n}\n[data-sidebar-right-color=info] .right-sidebar-content {\n  background: #11cdef;\n  color: #dee2e9;\n}\n[data-sidebar-right-color=info] .right-sidebar-content a {\n  color: #dee2e9;\n}\n[data-sidebar-right-color=warning] .right-sidebar-content {\n  background: #fb6340;\n  color: #dee2e9;\n}\n[data-sidebar-right-color=warning] .right-sidebar-content a {\n  color: #dee2e9;\n}\n[data-sidebar-right-color=danger] .right-sidebar-content {\n  background: #f5365c;\n  color: #dee2e9;\n}\n[data-sidebar-right-color=danger] .right-sidebar-content a {\n  color: #dee2e9;\n}\n[data-sidebar-right-color=white] .right-sidebar-content {\n  background: #fff;\n  color: #6c7580;\n}\n[data-sidebar-right-color=white] .right-sidebar-content a {\n  color: #6c7580;\n}\n[data-sidebar-right-color=whitish] .right-sidebar-content {\n  background: #fafbfd;\n  color: #6c7580;\n}\n[data-sidebar-right-color=whitish] .right-sidebar-content a {\n  color: #6c7580;\n}\n[data-sidebar-right-color=light] .right-sidebar-content {\n  background: #dee2e9;\n  color: #6c7580;\n}\n[data-sidebar-right-color=light] .right-sidebar-content a {\n  color: #6c7580;\n}\n[data-sidebar-right-color=dark] .right-sidebar-content {\n  background: #6c7580;\n  color: #dee2e9;\n}\n[data-sidebar-right-color=dark] .right-sidebar-content a {\n  color: #dee2e9;\n}\n[data-sidebar-right-color=gray-darker] .right-sidebar-content {\n  background: #495060;\n  color: #dee2e9;\n}\n[data-sidebar-right-color=gray-darker] .right-sidebar-content a {\n  color: #dee2e9;\n}\n[data-sidebar-right-color=gray-darkest] .right-sidebar-content {\n  background: #212532;\n  color: #dee2e9;\n}\n[data-sidebar-right-color=gray-darkest] .right-sidebar-content a {\n  color: #dee2e9;\n}\n[data-sidebar-right-color=black] .right-sidebar-content {\n  background: #000;\n  color: #dee2e9;\n}\n[data-sidebar-right-color=black] .right-sidebar-content a {\n  color: #dee2e9;\n}\n[data-sidebar-right-color=default-color] .right-sidebar-content {\n  background: #0a346d;\n  color: #dee2e9;\n}\n[data-sidebar-right-color=default-color] .right-sidebar-content a {\n  color: #dee2e9;\n}\n.content-wrapper {\n  min-height: 200px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, ".sidebar.special-sidebar {\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 60px;\n  transform: translate3d(-60px, 0, 0);\n  z-index: 1036;\n}\n.sidebar.special-sidebar .wrapper {\n  width: 90px;\n}\n.sidebar.special-sidebar .wrapper .content {\n  width: 60px;\n}\n[data-sidebar-special-show=true] .special-sidebar {\n  transform: translate3d(0, 0, 0);\n}\n@media (min-width: 992px) {\n.sidebar.special-sidebar {\n    left: 0;\n    width: 60px;\n    transform: translate3d(-60px, 0, 0);\n}\n[data-sidebar-special-show=true] .special-sidebar {\n    transform: translate3d(0, 0, 0);\n}\n[data-sidebar-special-show=true] .navbar,\n[data-sidebar-special-show=true] .main {\n    padding-left: 90px;\n}\n}\n[data-sidebar-special-color=primary] .special-sidebar {\n  background: #0059FF;\n  color: #dee2e9;\n}\n[data-sidebar-special-color=light-primary] .special-sidebar {\n  background: #4d8bff;\n  color: #dee2e9;\n}\n[data-sidebar-special-color=dark-primary] .special-sidebar {\n  background: #003eb3;\n  color: #dee2e9;\n}\n[data-sidebar-special-color=secondary] .special-sidebar {\n  background: #e00c51;\n  color: #6c7580;\n}\n[data-sidebar-special-color=dark-secondary] .special-sidebar {\n  background: #970837;\n  color: #6c7580;\n}\n[data-sidebar-special-color=success] .special-sidebar {\n  background: #2dce89;\n  color: #dee2e9;\n}\n[data-sidebar-special-color=info] .special-sidebar {\n  background: #11cdef;\n  color: #dee2e9;\n}\n[data-sidebar-special-color=warning] .special-sidebar {\n  background: #fb6340;\n  color: #dee2e9;\n}\n[data-sidebar-special-color=danger] .special-sidebar {\n  background: #f5365c;\n  color: #dee2e9;\n}\n[data-sidebar-special-color=white] .special-sidebar {\n  background: #fff;\n  color: #6c7580;\n}\n[data-sidebar-special-color=whitish] .special-sidebar {\n  background: #fafbfd;\n  color: #6c7580;\n}\n[data-sidebar-special-color=light] .special-sidebar {\n  background: #dee2e9;\n  color: #6c7580;\n  border-right: 1px solid #b9c2d1;\n}\n[data-sidebar-special-color=dark] .special-sidebar {\n  background: #6c7580;\n  color: #dee2e9;\n}\n[data-sidebar-special-color=gray-darker] .special-sidebar {\n  background: #495060;\n  color: #dee2e9;\n}\n[data-sidebar-special-color=gray-darkest] .special-sidebar {\n  background: #212532;\n  color: #dee2e9;\n}\n[data-sidebar-special-color=black] .special-sidebar {\n  background: #000;\n  color: #dee2e9;\n}\n[data-sidebar-special-color=default-color] .special-sidebar {\n  background: #0a346d;\n  color: #dee2e9;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppBackdrop.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppBackdrop.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../node_modules/vue-loader/lib??vue-loader-options!./AppBackdrop.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppBackdrop.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSearch.vue?vue&type=style&index=0&id=5b9fdcce&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppSearch.vue?vue&type=style&index=0&id=5b9fdcce&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../node_modules/vue-loader/lib??vue-loader-options!./AppSearch.vue?vue&type=style&index=0&id=5b9fdcce&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSearch.vue?vue&type=style&index=0&id=5b9fdcce&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../node_modules/vue-loader/lib??vue-loader-options!./AppSidebar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSidebar.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/settings.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/settings.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/settings.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/Notification.vue?vue&type=style&index=0&id=084dd3b6&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/widgets/Notification.vue?vue&type=style&index=0&id=084dd3b6&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Notification.vue?vue&type=style&index=0&id=084dd3b6&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/Notification.vue?vue&type=style&index=0&id=084dd3b6&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/Todo.vue?vue&type=style&index=0&id=9dda1ede&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/widgets/Todo.vue?vue&type=style&index=0&id=9dda1ede&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Todo.vue?vue&type=style&index=0&id=9dda1ede&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/Todo.vue?vue&type=style&index=0&id=9dda1ede&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-container.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-container.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-container.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-container.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-navbar.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-navbar.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-navbar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-navbar.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-config.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-left.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-right.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-special.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppBackdrop.vue?vue&type=template&id=42722608&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppBackdrop.vue?vue&type=template&id=42722608& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", {
      staticClass: "backdrop backdrop-left-sidebar",
      on: { click: _vm.closeLeftSidebar }
    }),
    _vm._v(" "),
    _c("div", {
      staticClass: "backdrop backdrop-right-sidebar",
      on: { click: _vm.closeRightSidebar }
    }),
    _vm._v(" "),
    _c("div", {
      staticClass: "backdrop backdrop-config-sidebar",
      on: { click: _vm.closeConfigSidebar }
    }),
    _vm._v(" "),
    _c("div", {
      staticClass: "backdrop backdrop-modal-sidebar",
      on: { click: _vm.closeModalSidebar }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppLogo.vue?vue&type=template&id=7ceb4ed1&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppLogo.vue?vue&type=template&id=7ceb4ed1& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    "a",
    {
      class: [
        "logo",
        _vm.place + "-logo",
        _vm.size + "-logo",
        _vm.orgLogo ? "org-logo" : "app-logo",
        _vm.inline ? "inline-logo" : ""
      ],
      attrs: { href: "/" }
    },
    [
      _vm.orgLogo
        ? _c("img", {
            staticClass: "logo-icon",
            attrs: { src: _vm.orgLogo, alt: _vm.appTitle }
          })
        : [
            _c(
              "span",
              { staticClass: "logo-text", attrs: { title: _vm.appTitle } },
              [_vm._v(_vm._s(_vm.appLogoText))]
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSearch.vue?vue&type=template&id=5b9fdcce&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppSearch.vue?vue&type=template&id=5b9fdcce&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _vm.searchScreenShow
    ? _c("transition", { attrs: { name: "fade", mode: "out-in" } }, [
        _c(
          "div",
          { staticClass: "app-search-screen" },
          [
            _c("close-button", {
              attrs: { title: _vm.$t("general.close"), "parent-class": "" },
              on: { click: _vm.close }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "app-search-wrapper" }, [
              _c("div", { staticClass: "search-input-wrapper" }, [
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
                    _c("div", { staticClass: "search-input" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.searchTerm,
                            expression: "searchTerm"
                          }
                        ],
                        ref: "searchTermElement",
                        staticClass: "form-control pause-keyuplistener",
                        attrs: {
                          type: "text",
                          placeholder: "Search...",
                          spellcheck: "false",
                          autocomplete: "false"
                        },
                        domProps: { value: _vm.searchTerm },
                        on: {
                          input: [
                            function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.searchTerm = $event.target.value
                            },
                            _vm.searchTermChanged
                          ]
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      { staticClass: "d-none", attrs: { type: "submit" } },
                      [_vm._v("Search")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "helper-message text-muted" }, [
                  !_vm.foundHotTerm
                    ? _c("span", [
                        _vm._v(
                          _vm._s(_vm.$t("general.search_helper_default_text"))
                        )
                      ])
                    : _c("span", [
                        _vm._v(
                          _vm._s(_vm.foundHotTerm.message) +
                            " " +
                            _vm._s(_vm.foundHotTerm.term)
                        )
                      ])
                ])
              ]),
              _vm._v(" "),
              _vm.searchTerm && _vm.suggestions.length
                ? _c("div", { staticClass: "search-suggestions" }, [
                    _c("span", { staticClass: "font-weight-700 title" }, [
                      _vm._v("suggestions: ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "suggestions-list list-inline" },
                      _vm._l(_vm.suggestions, function(suggestion) {
                        return _c("li", [_vm._v(_vm._s(suggestion))])
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "scroll-lock",
                      rawName: "v-scroll-lock",
                      value: _vm.searchScreenShow,
                      expression: "searchScreenShow"
                    }
                  ],
                  staticClass: "search-results-wrapper"
                },
                [
                  _c(
                    "vue-scroll",
                    {
                      ref: "vuescrollSearch",
                      attrs: { id: "vuescrollSearch" }
                    },
                    [
                      _c("animated-loader", {
                        attrs: {
                          "is-loading": _vm.isLoading,
                          "loader-color": _vm.vars.loaderColor
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "search-results-sections" },
                        [
                          _vm.foundHotTerm && _vm.results.routes.length
                            ? _c(
                                "div",
                                { staticClass: "search-results-section" },
                                [
                                  _c(
                                    "h4",
                                    {
                                      staticClass:
                                        "section-title text-muted font-weight-600 text-center border-bottom mb-0 pb-2"
                                    },
                                    [_vm._v("Navigate to")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    { staticClass: "search-results-list" },
                                    _vm._l(_vm.results.routes, function(
                                      route,
                                      index
                                    ) {
                                      return _c(
                                        "li",
                                        {
                                          key: route.name,
                                          staticClass: "search-result-item"
                                        },
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                to: { name: route.name }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        " +
                                                  _vm._s(
                                                    route.meta.trans
                                                      ? _vm.$t(
                                                          route.meta.trans,
                                                          {
                                                            attribute:
                                                              _vm.$t(
                                                                route.meta
                                                                  .midTitle
                                                              ) +
                                                              " " +
                                                              _vm.$t(
                                                                route.meta.title
                                                              )
                                                          }
                                                        )
                                                      : _vm.$t(
                                                          route.meta.midTitle
                                                        ) +
                                                          " " +
                                                          _vm.$t(
                                                            route.meta.title
                                                          )
                                                  ) +
                                                  "\n                                    "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    }),
                                    0
                                  )
                                ]
                              )
                            : _vm.gotResults
                            ? [
                                _vm.results.users && _vm.results.users.length
                                  ? _c(
                                      "div",
                                      { staticClass: "search-results-section" },
                                      [
                                        _c(
                                          "h4",
                                          {
                                            staticClass:
                                              "section-title text-muted font-weight-600 text-center border-bottom mb-2 pb-2"
                                          },
                                          [_vm._v(_vm._s(_vm.$t("user.users")))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "ul",
                                          {
                                            staticClass: "search-results-list"
                                          },
                                          _vm._l(_vm.results.users, function(
                                            user,
                                            index
                                          ) {
                                            return _c(
                                              "li",
                                              {
                                                key: user.uuid,
                                                staticClass:
                                                  "search-result-item"
                                              },
                                              [
                                                _c("view-user", {
                                                  staticClass: "m-0",
                                                  attrs: {
                                                    value: user,
                                                    focusable: "",
                                                    "hide-popover": "",
                                                    "show-buttons": "",
                                                    "data-classes": "m-0"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          }),
                                          0
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.results.meetings &&
                                _vm.results.meetings.length
                                  ? _c(
                                      "div",
                                      { staticClass: "search-results-section" },
                                      [
                                        _c(
                                          "h4",
                                          {
                                            staticClass:
                                              "section-title text-muted font-weight-600 text-center border-bottom mb-2 pb-2"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.$t("meeting.meetings"))
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "ul",
                                          {
                                            staticClass: "search-results-list"
                                          },
                                          _vm._l(_vm.results.meetings, function(
                                            meeting,
                                            index
                                          ) {
                                            return _c(
                                              "li",
                                              {
                                                key: meeting.uuid,
                                                staticClass:
                                                  "search-result-item"
                                              },
                                              [
                                                _c("view-single", {
                                                  staticClass: "m-0",
                                                  attrs: {
                                                    value: meeting,
                                                    "show-if-exists": "title",
                                                    description: _vm._f(
                                                      "moment"
                                                    )(
                                                      [
                                                        meeting.startedAt
                                                          ? meeting.startedAt
                                                          : meeting.startDateTime,
                                                        _vm.vars
                                                          .serverDateTimeFormat
                                                      ],
                                                      "calendar"
                                                    ),
                                                    "show-icon": "",
                                                    icon:
                                                      _vm.meetingIcons[
                                                        meeting.status
                                                      ],
                                                    "icon-classes":
                                                      _vm.meetingIconColors[
                                                        meeting.status
                                                      ],
                                                    focusable: "",
                                                    "is-entity": "",
                                                    link: {
                                                      name: "appMeetingView",
                                                      params: {
                                                        uuid: meeting.uuid
                                                      }
                                                    },
                                                    "data-classes": "m-0"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          }),
                                          0
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.results.contacts &&
                                _vm.results.contacts.length
                                  ? _c(
                                      "div",
                                      { staticClass: "search-results-section" },
                                      [
                                        _c(
                                          "h4",
                                          {
                                            staticClass:
                                              "section-title text-muted font-weight-600 text-center border-bottom mb-2 pb-2"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.$t("contact.contacts"))
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "ul",
                                          {
                                            staticClass: "search-results-list"
                                          },
                                          _vm._l(_vm.results.contacts, function(
                                            contact,
                                            index
                                          ) {
                                            return _c(
                                              "li",
                                              {
                                                key: contact.uuid,
                                                staticClass:
                                                  "search-result-item"
                                              },
                                              [
                                                _c("view-single", {
                                                  staticClass: "m-0",
                                                  attrs: {
                                                    value: contact,
                                                    "show-if-exists": "name",
                                                    "show-icon": "",
                                                    icon: "fas fa-user",
                                                    focusable: "",
                                                    "is-entity": "",
                                                    "data-classes": "m-0"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          }),
                                          0
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            : [
                                _vm.searchTerm &&
                                _vm.searchResults &&
                                !_vm.isLoading
                                  ? _c(
                                      "div",
                                      { staticClass: "search-results-section" },
                                      [
                                        _c("h2", {
                                          staticClass: "text-muted",
                                          domProps: {
                                            textContent: _vm._s(
                                              _vm.$t(
                                                "general.no_search_result_found"
                                              )
                                            )
                                          }
                                        })
                                      ]
                                    )
                                  : _vm._e()
                              ]
                        ],
                        2
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ],
          1
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSidebar.vue?vue&type=template&id=22a4e926&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppSidebar.vue?vue&type=template&id=22a4e926& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "sidebar" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/conversation-header.vue?vue&type=template&id=2ce8a029&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/conversation-header.vue?vue&type=template&id=2ce8a029& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "conversation-header" }, [
    _c(
      "div",
      { staticClass: "room-thumb" },
      [_c("user-avatar", { attrs: { user: _vm.computedUser, size: 40 } })],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "room-details" }, [
      _c("div", { staticClass: "title-row" }, [
        _c("h6", { staticClass: "room-title" }, [_vm._v(_vm._s(_vm.roomName))])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "meta-row" },
        [
          !_vm.room.isGroup && !_vm.typingUser
            ? [
                _vm.isLiveOnline(_vm.computedUser)
                  ? _c("span", [_vm._v(_vm._s(_vm.$t("general.online")))])
                  : _c("span", [_vm._v(_vm._s(_vm.$t("general.offline")))])
              ]
            : _vm.room.isGroup
            ? [
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.typingUser,
                        expression: "typingUser"
                      }
                    ],
                    staticClass: "typing-indicator"
                  },
                  [
                    _vm._v(
                      "@" +
                        _vm._s(_vm.typingUser) +
                        " " +
                        _vm._s(_vm.$t("general.is_typing"))
                    )
                  ]
                ),
                _vm._v(" "),
                _c("span", [_vm._v("  ")])
              ]
            : [
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.typingUser,
                        expression: "typingUser"
                      }
                    ],
                    staticClass: "typing-indicator"
                  },
                  [_vm._v(_vm._s(_vm.$t("general.is_typing")))]
                ),
                _vm._v(" "),
                _c("span", [_vm._v("  ")])
              ]
        ],
        2
      )
    ]),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "room-btns d-none" }, [
      _c("button", { attrs: { type: "button" } }, [
        _c("i", { staticClass: "fas fa-phone-alt" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/header.vue?vue&type=template&id=b871232a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/header.vue?vue&type=template&id=b871232a& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "chat-box-header" }, [
    _c("h6", { staticClass: "cb-header-title" }, [
      _vm._v(
        _vm._s(
          _vm.activeContainer === "settings"
            ? _vm.$t("config.chat.chat_config")
            : _vm.$t("chat.live_chat")
        )
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "cb-header-buttons" },
      [
        _vm.activeContainer !== "home"
          ? _c(
              "button",
              {
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.$emit("goHome")
                  }
                }
              },
              [
                _c("i", {
                  class: [
                    "fas",
                    {
                      "fa-chevron-left": _vm.activeContainer === "conversation"
                    },
                    { "fa-chevron-right": _vm.activeContainer === "settings" }
                  ]
                })
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.activeContainer !== "settings"
          ? [
              _c(
                "button",
                {
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$emit("toggleSearch")
                    }
                  }
                },
                [_c("i", { staticClass: "fas fa-search" })]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$emit("goToSettings")
                    }
                  }
                },
                [_c("i", { staticClass: "fas fa-cog" })]
              )
            ]
          : _vm._e(),
        _vm._v(" "),
        _c(
          "button",
          {
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.$emit("hideChatBox")
              }
            }
          },
          [_c("i", { staticClass: "fas fa-times" })]
        )
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/index.vue?vue&type=template&id=7eb429e4&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/index.vue?vue&type=template&id=7eb429e4& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    {
      class: [
        "chat-box-wrapper",
        { shown: _vm.isBoxShown },
        { "search-shown": _vm.isSearchShown },
        { "chat-box-lg": _vm.largeChatBox },
        { "show-chat-options": _vm.showChatOptions }
      ]
    },
    [
      _c("chat-box-header", {
        attrs: { "active-container": _vm.activeContainer },
        on: {
          goHome: _vm.goHome,
          toggleSearch: _vm.toggleSearch,
          goToSettings: _vm.goToSettings,
          hideChatBox: _vm.hideChatBox
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "search" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.searchTerm,
              expression: "searchTerm"
            }
          ],
          ref: "searchTerm",
          staticClass: "form-control",
          attrs: {
            type: "text",
            placeholder: _vm.$t("general.search_helper_default_text")
          },
          domProps: { value: _vm.searchTerm },
          on: {
            keydown: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
              ) {
                return null
              }
              return _vm.toggleSearch($event)
            },
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.searchTerm = $event.target.value
              },
              _vm.searchTermChanged
            ]
          }
        }),
        _vm._v(" "),
        _vm.searchTerm
          ? _c(
              "button",
              {
                staticClass: "clear-btn",
                attrs: { type: "button" },
                on: { click: _vm.hideSearch }
              },
              [_vm._v(_vm._s(_vm.$t("general.clear")))]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          class: [
            "chat-box",
            { "showing-settings": _vm.activeContainer === "settings" },
            { "showing-chats": _vm.activeContainer === "conversation" }
          ]
        },
        [
          _c("chat-box-settings", {
            attrs: { "active-container": _vm.activeContainer },
            on: { goHome: _vm.goHome }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "cb-inner-window rooms-container" },
            [
              _c(
                "vue-scroll",
                {
                  ref: "vue-scroll-rooms",
                  attrs: { id: "vue-scroll-rooms" },
                  on: { "handle-scroll": _vm.handleRoomsScroll }
                },
                [
                  _c(
                    "div",
                    { staticClass: "rooms-wrapper" },
                    [
                      (_vm.searchTerm && _vm.searched) || _vm.newChatScreen
                        ? [
                            _vm.roomsSearch.rooms.length ||
                            _vm.roomsSearch.users.length
                              ? _c(
                                  "ul",
                                  { staticClass: "rooms" },
                                  [
                                    !_vm.newChatScreen
                                      ? [
                                          _vm._l(
                                            _vm.roomsSearch.rooms,
                                            function(room) {
                                              return _c("chat-room-item", {
                                                key: room.uuid,
                                                attrs: {
                                                  room: room,
                                                  "room-name": room.name,
                                                  vars: _vm.vars
                                                },
                                                on: {
                                                  goToConversation:
                                                    _vm.goToConversation
                                                }
                                              })
                                            }
                                          ),
                                          _vm._v(" "),
                                          _vm.roomsSearch.users.length
                                            ? _c(
                                                "li",
                                                {
                                                  staticClass:
                                                    "my-2 pl-3 font-weight-500"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("user.users"))
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm._l(_vm.roomsSearch.users, function(
                                      user
                                    ) {
                                      return _c("chat-room-item", {
                                        key: user.uuid,
                                        attrs: {
                                          room: user,
                                          "room-name": user.profile.name,
                                          vars: _vm.vars
                                        },
                                        on: {
                                          goToConversation: _vm.goToConversation
                                        }
                                      })
                                    })
                                  ],
                                  2
                                )
                              : _c("div", { staticClass: "no-data" }, [
                                  _c("h5", [
                                    _vm._v(
                                      _vm._s(_vm.$t("chat.no_result_found"))
                                    )
                                  ])
                                ])
                          ]
                        : [
                            _vm.rooms.data && _vm.rooms.data.length
                              ? _c(
                                  "ul",
                                  { staticClass: "rooms" },
                                  _vm._l(_vm.rooms.data, function(room) {
                                    return _c("chat-room-item", {
                                      key: room.uuid,
                                      attrs: {
                                        room: room,
                                        "room-name": room.name,
                                        vars: _vm.vars
                                      },
                                      on: {
                                        goToConversation: _vm.goToConversation
                                      }
                                    })
                                  }),
                                  1
                                )
                              : _c("div", { staticClass: "no-data" }, [
                                  _c("h5", [
                                    _vm._v(_vm._s(_vm.$t("chat.no_chats_yet")))
                                  ])
                                ])
                          ]
                    ],
                    2
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "chat-option-buttons" }, [
                _c(
                  "button",
                  {
                    staticClass: "d-none",
                    attrs: { type: "button" },
                    on: { click: _vm.createGroup }
                  },
                  [_c("i", { staticClass: "fas fa-user-friends" })]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    attrs: { type: "button" },
                    on: { click: _vm.startNewChat }
                  },
                  [
                    _c("i", {
                      staticClass: "fas fa-comment-dots fa-flip-horizontal"
                    })
                  ]
                ),
                _vm._v(" "),
                _vm._m(0)
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "cb-inner-window conversation-container" }, [
            _vm.activeConversation
              ? _c(
                  "div",
                  { staticClass: "conversation-wrapper" },
                  [
                    _vm.activeConversation.chatRoom
                      ? _c("conversation-header", {
                          attrs: {
                            room: _vm.activeConversation.chatRoom,
                            "room-name": _vm.activeConversation.chatRoom.name,
                            vars: _vm.vars,
                            typingUser: _vm.typingUser
                          }
                        })
                      : _vm.activeConversation.user
                      ? _c("conversation-header", {
                          attrs: {
                            room: _vm.activeConversation.user,
                            "room-name":
                              _vm.activeConversation.user.profile.name,
                            vars: _vm.vars,
                            typingUser: _vm.typingUser
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        class: [
                          "conversation",
                          { "no-messages": !_vm.hasMessages },
                          { "got-new-messages": _vm.newUnreadMessageOnFeed },
                          { "show-scroll-btn": _vm.showScrollToLatestBtn }
                        ]
                      },
                      [
                        _vm.hasMessages
                          ? _c(
                              "div",
                              { staticClass: "messages-list-container" },
                              [
                                _c(
                                  "vue-scroll",
                                  {
                                    ref: "vue-scroll-messages",
                                    attrs: { id: "vue-scroll-messages" },
                                    on: {
                                      "handle-scroll": _vm.handleMessageScroll
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        class: [
                                          "messages-list-wrapper",
                                          {
                                            "show-name":
                                              _vm.activeConversation.room &&
                                              _vm.activeConversation.room
                                                .isGroup
                                          }
                                        ]
                                      },
                                      [
                                        _vm.searchTerm && _vm.searched
                                          ? [
                                              _vm.messagesSearch.length
                                                ? _vm._l(
                                                    _vm.messagesSearch,
                                                    function(message, mIndex) {
                                                      return _c(
                                                        "message-item",
                                                        {
                                                          key: message.uuid,
                                                          class: [
                                                            {
                                                              "own-message":
                                                                message.user
                                                                  .uuid ===
                                                                _vm.user.uuid
                                                            },
                                                            {
                                                              "prev-diff-own":
                                                                !_vm.messages
                                                                  .data[
                                                                  mIndex + 1
                                                                ] ||
                                                                _vm.messages
                                                                  .data[
                                                                  mIndex + 1
                                                                ].user.uuid !==
                                                                  message.user
                                                                    .uuid
                                                            },
                                                            {
                                                              "next-diff-own":
                                                                !_vm.messages
                                                                  .data[
                                                                  mIndex - 1
                                                                ] ||
                                                                _vm.messages
                                                                  .data[
                                                                  mIndex - 1
                                                                ].user.uuid !==
                                                                  message.user
                                                                    .uuid
                                                            }
                                                          ],
                                                          attrs: {
                                                            message: message,
                                                            vars: _vm.vars,
                                                            "file-icons":
                                                              _vm.fileIcons,
                                                            "file-mime-types":
                                                              _vm.fileMimeTypes
                                                          }
                                                        }
                                                      )
                                                    }
                                                  )
                                                : _c(
                                                    "div",
                                                    { staticClass: "no-data" },
                                                    [
                                                      _c("h5", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t(
                                                              "chat.no_result_found"
                                                            )
                                                          )
                                                        )
                                                      ])
                                                    ]
                                                  )
                                            ]
                                          : [
                                              _vm._l(
                                                _vm.messages.data,
                                                function(message, mIndex) {
                                                  return _c("message-item", {
                                                    key: message.uuid,
                                                    class: [
                                                      {
                                                        "own-message":
                                                          message.user.uuid ===
                                                          _vm.user.uuid
                                                      },
                                                      {
                                                        "prev-diff-own":
                                                          !_vm.messages.data[
                                                            mIndex + 1
                                                          ] ||
                                                          _vm.messages.data[
                                                            mIndex + 1
                                                          ].user.uuid !==
                                                            message.user.uuid
                                                      },
                                                      {
                                                        "next-diff-own":
                                                          !_vm.messages.data[
                                                            mIndex - 1
                                                          ] ||
                                                          _vm.messages.data[
                                                            mIndex - 1
                                                          ].user.uuid !==
                                                            message.user.uuid
                                                      }
                                                    ],
                                                    attrs: {
                                                      message: message,
                                                      vars: _vm.vars,
                                                      "file-icons":
                                                        _vm.fileIcons,
                                                      "file-mime-types":
                                                        _vm.fileMimeTypes
                                                    }
                                                  })
                                                }
                                              ),
                                              _vm._v(" "),
                                              _vm.isFetching
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex justify-content-center my-2"
                                                    },
                                                    [
                                                      _c("animated-loader", {
                                                        attrs: {
                                                          "is-loading":
                                                            _vm.isFetching,
                                                          "loader-color":
                                                            _vm.vars.colors
                                                              .light,
                                                          "overlay-color":
                                                            "transparent",
                                                          size: "inline",
                                                          "loader-size": "20px",
                                                          "loader-stroke": "3px"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.noMoreMessages
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "message-item my-4 d-flex justify-content-center align-items-center"
                                                    },
                                                    [
                                                      _c(
                                                        "h5",
                                                        {
                                                          staticClass:
                                                            "text-muted"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                            " +
                                                              _vm._s(
                                                                _vm.$t(
                                                                  "chat.no_more_messages"
                                                                )
                                                              ) +
                                                              "\n                                        "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          : _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex justify-content-center align-items-center min-height-300px"
                              },
                              [
                                _c("h5", { staticClass: "text-muted" }, [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.$t("chat.no_messages_yet")) +
                                      "\n                        "
                                  )
                                ])
                              ]
                            ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "scroll-latest-btn",
                            on: { click: _vm.scrollToLatestMessages }
                          },
                          [_vm._m(1)]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "conversation-footer" }, [
                      _c(
                        "div",
                        { staticClass: "new-message" },
                        [
                          _c(
                            "at",
                            {
                              attrs: {
                                members: _vm.computedParticipants,
                                "name-key": "username"
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "item",
                                    fn: function(s) {
                                      return [
                                        _c(
                                          "span",
                                          { staticClass: "mentioned" },
                                          [
                                            _vm._v(
                                              _vm._s(s.item.profile.name) + " "
                                            ),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "bracketed text-muted-md"
                                              },
                                              [_vm._v(_vm._s(s.item.username))]
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                false,
                                1849386407
                              ),
                              model: {
                                value: _vm.newMessage.message,
                                callback: function($$v) {
                                  _vm.$set(_vm.newMessage, "message", $$v)
                                },
                                expression: "newMessage.message"
                              }
                            },
                            [
                              _vm._v(" "),
                              _c("div", {
                                ref: "newMessageInput",
                                staticClass: "new-message-input form-control",
                                attrs: {
                                  contenteditable: "",
                                  "data-placeholder": _vm.$t(
                                    "chat.type_a_message"
                                  ),
                                  placeholder: _vm.$t("chat.type_a_message")
                                },
                                on: {
                                  keydown: [
                                    _vm.isTyping,
                                    function($event) {
                                      if (
                                        !$event.type.indexOf("key") &&
                                        _vm._k(
                                          $event.keyCode,
                                          "enter",
                                          13,
                                          $event.key,
                                          "Enter"
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.enterPressedEvt(
                                        _vm.postMessage,
                                        $event
                                      )
                                    }
                                  ]
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          !_vm.newMessage.message
                            ? _c("file-uploader", {
                                attrs: {
                                  url: "/chat/messages",
                                  "name-label": "upload.attachment",
                                  "names-label": "upload.attachments",
                                  "button-icon": "fas fa-paperclip",
                                  "button-classes": "btn-sm",
                                  "button-design": "custom",
                                  "hide-button-label": "",
                                  "hide-file-list": "",
                                  options: _vm.preRequisite.uploaderConfig,
                                  data: _vm.newMessage.attachments,
                                  "additional-form-data":
                                    _vm.activeConversation,
                                  "request-identifier":
                                    _vm.newMessageRequestUUID
                                },
                                on: {
                                  uploading: _vm.attachmentUploadStarted,
                                  updated: _vm.attachmentUploaded,
                                  error: _vm.attachmentUploadError,
                                  noNeed: _vm.noNeedCallback
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn-custom post-message-button",
                              attrs: {
                                type: "button",
                                title: _vm.$t("general.submit")
                              },
                              on: { click: _vm.postMessage }
                            },
                            [_c("i", { staticClass: "far fa-paper-plane" })]
                          )
                        ],
                        1
                      )
                    ])
                  ],
                  1
                )
              : _vm._e()
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { attrs: { type: "button" } }, [
      _c("i", { staticClass: "fas fa-ellipsis-h" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "scroll-btn-wrapper" }, [
      _c("i", { staticClass: "fas fa-angle-double-down" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/message-item.vue?vue&type=template&id=5c5f8277&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/message-item.vue?vue&type=template&id=5c5f8277& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "message-item-wrapper" }, [
    _c(
      "div",
      { class: ["message-item", { "has-attachments": _vm.hasAttachment }] },
      [
        _c("span", { staticClass: "tail-in" }, [
          _c(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 8 13",
                width: "8",
                height: "13"
              }
            },
            [
              _c("path", {
                attrs: {
                  opacity: ".13",
                  fill: "#0000000",
                  d:
                    "M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
                }
              }),
              _c("path", {
                attrs: {
                  fill: "currentColor",
                  d:
                    "M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
                }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "message-header" }, [
          _c("h6", { staticClass: "message-user" }, [
            _vm._v(_vm._s(_vm.message.user.profile.name))
          ])
        ]),
        _vm._v(" "),
        _vm.hasAttachment
          ? _c(
              "div",
              { staticClass: "message-content" },
              [
                _vm._l(_vm.message.attachments, function(attachment) {
                  return [
                    _c(
                      "div",
                      {
                        key: attachment.uuid,
                        class: [
                          "attachment",
                          {
                            "non-image-attachment":
                              attachment.mime !== "image/png" &&
                              attachment.mime !== "image/jpeg"
                          }
                        ]
                      },
                      [
                        attachment.mime === "image/png" ||
                        attachment.mime === "image/jpeg"
                          ? [
                              _c(
                                "a",
                                {
                                  staticClass: "attachment-link",
                                  attrs: {
                                    href: attachment.fullUrl,
                                    target: "_blank"
                                  }
                                },
                                [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: attachment.fullUrl,
                                      alt: attachment.filename
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "attachment-shadow" }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "message-footer small" },
                                [
                                  _vm.message.sentAt
                                    ? _c(
                                        "span",
                                        { staticClass: "message-created-at" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("momentCalendarTz")(
                                                _vm.message.sentAt
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      class: [
                                        "message-status",
                                        _vm.message.status
                                      ]
                                    },
                                    [
                                      _c("i", {
                                        class:
                                          _vm.messageStatusIcons[
                                            _vm.message.status
                                          ]
                                      })
                                    ]
                                  )
                                ]
                              )
                            ]
                          : [
                              _c(
                                "a",
                                {
                                  staticClass: "attachment-link",
                                  attrs: {
                                    href: attachment.fullUrl,
                                    target: "_blank"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "attachment-details" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "attachment-icon" },
                                        [
                                          _c("i", {
                                            class: [
                                              "fas",
                                              _vm.fileIcons[attachment.mime]
                                            ]
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "attachment-name" },
                                        [
                                          _c("h6", [
                                            _vm._v(_vm._s(attachment.filename))
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._m(0, true)
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "message-footer small" },
                                [
                                  _c("div", { staticClass: "left-side" }, [
                                    _c(
                                      "span",
                                      { staticClass: "attachment-type" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.fileMimeTypes[attachment.mime]
                                          )
                                        )
                                      ]
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "attachment-size" },
                                      [
                                        _vm._v(
                                          _vm._s(attachment.humanReadableSize)
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "right-side" }, [
                                    _vm.message.sentAt
                                      ? _c(
                                          "span",
                                          { staticClass: "message-created-at" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("momentCalendarTz")(
                                                  _vm.message.sentAt
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        class: [
                                          "message-status",
                                          _vm.message.status
                                        ]
                                      },
                                      [
                                        _c("i", {
                                          class:
                                            _vm.messageStatusIcons[
                                              _vm.message.status
                                            ]
                                        })
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ]
                      ],
                      2
                    )
                  ]
                })
              ],
              2
            )
          : _c("div", { staticClass: "message-content" }, [
              _c("div", { staticClass: "message-body" }, [
                _c("div", {
                  staticClass: "message",
                  domProps: { innerHTML: _vm._s(_vm.message.message) }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "footer-space" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "message-footer small" }, [
                _vm.message.sentAt
                  ? _c("span", { staticClass: "message-created-at" }, [
                      _vm._v(
                        _vm._s(_vm._f("momentCalendarTz")(_vm.message.sentAt))
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("span", { class: ["message-status", _vm.message.status] }, [
                  _c("i", { class: _vm.messageStatusIcons[_vm.message.status] })
                ])
              ])
            ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "download-icon" }, [
      _c("i", { staticClass: "far fa-arrow-alt-circle-down" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/room-item.vue?vue&type=template&id=7c922152&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/room-item.vue?vue&type=template&id=7c922152& ***!
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
    "li",
    { class: ["room-item"], on: { click: _vm.goToConversation } },
    [
      _c(
        "div",
        { staticClass: "item-thumb" },
        [_c("user-avatar", { attrs: { user: _vm.computedAvatar, size: 40 } })],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "item-details" },
        [
          _c("div", { staticClass: "title-row" }, [
            _c("h6", { staticClass: "item-title" }, [
              _vm._v(_vm._s(_vm.roomName))
            ]),
            _vm._v(" "),
            _vm.room.lastConversationAt
              ? _c("small", { staticClass: "item-meta" }, [
                  _vm._v(
                    _vm._s(
                      _vm._f("momentCalendarTz")(_vm.room.lastConversationAt)
                    )
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.room.lastConversationAt
            ? [
                _vm.room.message
                  ? _c("div", { staticClass: "meta-row text-ellipsis" }, [
                      _c("span", {
                        domProps: { innerHTML: _vm._s(_vm.room.message) }
                      })
                    ])
                  : _c("div", { staticClass: "meta-row text-ellipsis" }, [
                      _c("span", [_vm._v(_vm._s(_vm.$t("upload.attachment")))])
                    ])
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.room.unreadMessages
            ? _c("div", { staticClass: "unread-messages" }, [
                _c(
                  "span",
                  { staticClass: "badge badge-sm badge-pill badge-light" },
                  [_vm._v(_vm._s(_vm.room.unreadMessages))]
                )
              ])
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/settings.vue?vue&type=template&id=923098fe&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/settings.vue?vue&type=template&id=923098fe& ***!
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
  return _c("div", { staticClass: "cb-inner-window settings-container" }, [
    _vm.activeContainer === "settings"
      ? _c("div", { staticClass: "settings-wrapper" }, [
          _c(
            "div",
            { staticClass: "settings" },
            [
              _c(
                "vue-scroll",
                {
                  ref: "vue-scroll-settings",
                  attrs: { id: "vue-scroll-settings" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "settings-list" },
                    [
                      _c(
                        "switch-wrapper",
                        {
                          staticClass: "text-light",
                          attrs: { label: _vm.$t("config.chat.auto_open") }
                        },
                        [
                          _c("base-switch", {
                            attrs: { design: "success" },
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
                      ),
                      _vm._v(" "),
                      _c(
                        "switch-wrapper",
                        {
                          staticClass: "text-light",
                          attrs: {
                            label: _vm.$t("config.chat.enter_to_submit")
                          }
                        },
                        [
                          _c("base-switch", {
                            attrs: { design: "success" },
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
                      ),
                      _vm._v(" "),
                      _c(
                        "switch-wrapper",
                        {
                          staticClass: "text-light",
                          attrs: {
                            label: _vm.$t("config.chat.mute_sound_notification")
                          }
                        },
                        [
                          _c("base-switch", {
                            attrs: { design: "success" },
                            model: {
                              value: _vm.formData.muteSoundNotification,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.formData,
                                  "muteSoundNotification",
                                  $$v
                                )
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
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "settings-footer" },
            [
              _c(
                "base-button",
                {
                  attrs: { type: "button", design: "primary", size: "block" },
                  on: {
                    click: function($event) {
                      return _vm.submit(true)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("general.save")))]
              )
            ],
            1
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/Notification.vue?vue&type=template&id=084dd3b6&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/widgets/Notification.vue?vue&type=template&id=084dd3b6&scoped=true& ***!
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
    "card",
    {
      staticClass: "notification-widget",
      attrs: { shadow: "", "body-classes": "p-0" }
    },
    [
      _c("div", { staticClass: "widget-wrapper" }, [
        _c("div", { staticClass: "widget-header text-muted" }, [
          _c("div", { staticClass: "text-muted" }, [
            _c("i", { staticClass: "far fa-bell" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex-grow-1 text-center" }, [
            _vm._v(_vm._s(_vm.$t("user.notification.notifications")))
          ]),
          _vm._v(" "),
          _c(
            "div",
            {},
            [
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
                  attrs: {
                    type: "button",
                    design: "link",
                    title: _vm.$t("config.notification.setting")
                  }
                },
                [_c("i", { staticClass: "fas fa-cog" })]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "widget-body" }, [
          _c(
            "div",
            {
              staticClass: "notification-list-wrapper",
              class: {
                "fixed-height":
                  _vm.notifications && _vm.notifications.length > 5
              }
            },
            [
              _c(
                "vue-scroll",
                {
                  ref: "vuescrollNotification",
                  attrs: { id: "vuescrollNotification" }
                },
                [
                  _vm.notifications && _vm.notifications.meta.total
                    ? _c(
                        "ul",
                        { staticClass: "notification-list" },
                        _vm._l(_vm.notifications.data, function(notification) {
                          return _c(
                            "li",
                            {
                              key: notification.uuid,
                              staticClass: "notification-item"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "notification-details",
                                  class: { completed: notification.status },
                                  on: {
                                    click: function($event) {
                                      return _vm.notificationClick(notification)
                                    }
                                  }
                                },
                                [
                                  _c("h6", { staticClass: "title" }, [
                                    _vm._v(_vm._s(notification.data.title))
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "notification-date" }, [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm._f("moment")(
                                        notification.createdAt,
                                        "calendar",
                                        null,
                                        {
                                          sameElse:
                                            _vm.vars.defaultDateTimeFormat
                                        }
                                      )
                                    ) +
                                    "\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "notification-status",
                                  on: {
                                    click: function($event) {
                                      return _vm.toggleNotification(
                                        notification
                                      )
                                    }
                                  }
                                },
                                [
                                  notification.status
                                    ? _c("i", {
                                        staticClass:
                                          "fas fa-check-circle text-primary"
                                      })
                                    : _c("i", { staticClass: "far fa-circle" })
                                ]
                              )
                            ]
                          )
                        }),
                        0
                      )
                    : _c(
                        "div",
                        {
                          staticClass:
                            "d-flex min-height-100px justify-content-center align-items-center"
                        },
                        [
                          _c("h5", { staticClass: "text-muted" }, [
                            _vm._v(
                              _vm._s(_vm.$t("user.notification.all_caught_up"))
                            )
                          ])
                        ]
                      )
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _vm.notifications && _vm.notifications.length
          ? _c(
              "div",
              { staticClass: "widget-footer text-center" },
              [
                _c(
                  "base-button",
                  {
                    staticClass: "text-center btn-block p-2",
                    attrs: { type: "button", design: "link", size: "sm" }
                  },
                  [_vm._v(_vm._s(_vm.$t("user.notification.see_all")))]
                )
              ],
              1
            )
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/Todo.vue?vue&type=template&id=9dda1ede&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/widgets/Todo.vue?vue&type=template&id=9dda1ede&scoped=true& ***!
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
  return _c(
    "card",
    {
      staticClass: "todo-widget",
      attrs: { shadow: "", "body-classes": "p-0" }
    },
    [
      _c("div", { staticClass: "widget-wrapper" }, [
        _c("div", { staticClass: "widget-header" }, [
          _c("div", { staticClass: "todo-date" }, [
            _c("h4", [_vm._v(_vm._s(_vm.date))]),
            _vm._v(" "),
            _c("h6", [_vm._v(_vm._s(_vm.month))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "todo-meta" }, [
            _c(
              "div",
              { staticClass: "todo-nav" },
              [
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
                    attrs: {
                      type: "button",
                      design: "link",
                      title: _vm.$t("general.previous_day")
                    },
                    on: { click: _vm.getPreviousTodo }
                  },
                  [_c("i", { staticClass: "fas fa-arrow-left" })]
                ),
                _vm._v(" "),
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
                    attrs: {
                      type: "button",
                      design: "link",
                      title: _vm.$t("general.next_day")
                    },
                    on: { click: _vm.getNextTodo }
                  },
                  [_c("i", { staticClass: "fas fa-arrow-right" })]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.others.todos
              ? _c("span", [
                  _vm._v(
                    _vm._s(_vm.incompletedTasksCount) +
                      " " +
                      _vm._s(_vm.$t("utility.todo.tasks"))
                  )
                ])
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "widget-body" }, [
          _c("div", { staticClass: "todo-form mt-2" }, [
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
                _c(
                  "div",
                  { staticClass: "d-flex" },
                  [
                    _c("base-input", {
                      staticClass: "flex-grow",
                      attrs: {
                        placeholder: _vm.$t("utility.todo.type_task"),
                        type: "text",
                        name: "title",
                        error: _vm.formErrors.title,
                        format: "sentence",
                        "wrapper-classes": "pt-0"
                      },
                      on: {
                        "update:error": function($event) {
                          return _vm.$set(_vm.formErrors, "title", $event)
                        }
                      },
                      model: {
                        value: _vm.formData.title,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "title", $$v)
                        },
                        expression: "formData.title"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("button", {
                  staticClass: "d-none",
                  attrs: { type: "submit" }
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "todo-list-wrapper",
              class: {
                "fixed-height": _vm.others.todos && _vm.others.todos.length > 5
              }
            },
            [
              _c(
                "vue-scroll",
                { ref: "vuescrollTodo", attrs: { id: "vuescrollTodo" } },
                [
                  _vm.others.todos && _vm.others.todos.length
                    ? _c(
                        "ul",
                        { staticClass: "todo-list" },
                        _vm._l(_vm.others.todos, function(todo) {
                          return _c(
                            "li",
                            {
                              key: todo.uuid,
                              class: ["todo-item", { completed: todo.status }]
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "todo-details",
                                  on: {
                                    click: function($event) {
                                      return _vm.$router.push({
                                        name: "appUtilityTodoView",
                                        params: { uuid: todo.uuid }
                                      })
                                    }
                                  }
                                },
                                [
                                  _c("h6", { staticClass: "title" }, [
                                    _vm._v(_vm._s(todo.title))
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              todo.time
                                ? _c("div", { staticClass: "todo-date" }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          _vm._f("moment")(
                                            [
                                              todo.date + " " + todo.time,
                                              _vm.vars.serverDateTimeFormat
                                            ],
                                            "from"
                                          )
                                        ) +
                                        "\n                            "
                                    )
                                  ])
                                : _c("div", { staticClass: "todo-date" }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          _vm._f("moment")(
                                            [
                                              todo.date,
                                              _vm.vars.serverDateFormat
                                            ],
                                            "from"
                                          )
                                        ) +
                                        "\n                            "
                                    )
                                  ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "todo-status",
                                  on: {
                                    click: function($event) {
                                      return _vm.toggleTodo(todo)
                                    }
                                  }
                                },
                                [
                                  todo.status
                                    ? _c("i", {
                                        staticClass:
                                          "fas fa-check-circle text-primary"
                                      })
                                    : _c("i", { staticClass: "far fa-circle" })
                                ]
                              )
                            ]
                          )
                        }),
                        0
                      )
                    : _c(
                        "div",
                        {
                          staticClass:
                            "d-flex min-height-100px justify-content-center align-items-center"
                        },
                        [
                          _c("h5", { staticClass: "text-muted" }, [
                            _vm._v(_vm._s(_vm.$t("utility.todo.all_caught_up")))
                          ])
                        ]
                      )
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "widget-footer" })
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/app-layout.vue?vue&type=template&id=5edf6e4a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/app-layout.vue?vue&type=template&id=5edf6e4a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "transition",
    { attrs: { appear: "", name: "fade", mode: "out-in" } },
    [
      _c(
        "vue-scroll",
        { ref: "vuescrollAppLayout", attrs: { id: "vuescrollAppLayout" } },
        [_c("app-container", { ref: "appContainer" }, [_c("router-view")], 1)],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-container.vue?vue&type=template&id=4a183f9d&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-container.vue?vue&type=template&id=4a183f9d& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "app-container",
      attrs: {
        id: "app-container",
        "data-layout": _vm.uiConfigs.layout,
        "data-color-scheme": _vm.uiConfigs.colorScheme,
        "data-page-background-color": _vm.uiConfigs.pageBackgroundColor,
        "data-page-container-background-color":
          _vm.uiConfigs.pageContainerBackgroundColor,
        "data-page-header-background-color":
          _vm.uiConfigs.pageHeaderBackgroundColor,
        "data-page-header-is-boxed": _vm.uiConfigs.pageHeaderIsBoxed,
        "data-sidebar-left-height": _vm.uiConfigs.leftSidebarHeight,
        "data-sidebar-left-style": _vm.uiConfigs.leftSidebarStyle,
        "data-sidebar-left-backdrop": _vm.uiConfigs.leftSidebarBackdrop,
        "data-sidebar-left-backdrop-color":
          _vm.uiConfigs.leftSidebarBackdropColor,
        "data-sidebar-left-shadow": _vm.uiConfigs.leftSidebarShadow,
        "data-sidebar-left-color": _vm.uiConfigs.leftSidebarColor,
        "data-sidebar-left-show": _vm.uiConfigs.leftSidebarShow,
        "data-sidebar-left-logo-light": _vm.uiConfigs.leftSidebarLogoLight,
        "data-sidebar-right-height": _vm.uiConfigs.rightSidebarHeight,
        "data-sidebar-right-style": _vm.uiConfigs.rightSidebarStyle,
        "data-sidebar-right-backdrop": _vm.uiConfigs.rightSidebarBackdrop,
        "data-sidebar-right-backdrop-color":
          _vm.uiConfigs.rightSidebarBackdropColor,
        "data-sidebar-right-shadow": _vm.uiConfigs.rightSidebarShadow,
        "data-sidebar-right-color": _vm.uiConfigs.rightSidebarColor,
        "data-sidebar-right-show": _vm.uiConfigs.rightSidebarShow,
        "data-sidebar-modal-height": _vm.uiConfigs.modalSidebarHeight,
        "data-sidebar-modal-style": _vm.uiConfigs.modalSidebarStyle,
        "data-sidebar-modal-backdrop": _vm.uiConfigs.modalSidebarBackdrop,
        "data-sidebar-modal-backdrop-color":
          _vm.uiConfigs.modalSidebarBackdropColor,
        "data-sidebar-modal-shadow": _vm.uiConfigs.modalSidebarShadow,
        "data-sidebar-modal-color": _vm.uiConfigs.modalSidebarColor,
        "data-sidebar-modal-show": _vm.uiConfigs.modalSidebarShow,
        "data-sidebar-config-show": _vm.uiConfigs.configSidebarShow,
        "data-sidebar-special-color": _vm.uiConfigs.specialSidebarColor,
        "data-sidebar-special-show": _vm.uiConfigs.specialSidebarShow,
        "data-top-navbar-hide": _vm.uiConfigs.topNavbarHide,
        "data-top-navbar-fixed": _vm.uiConfigs.topNavbarFixed,
        "data-top-navbar-color": _vm.uiConfigs.topNavbarColor,
        "data-top-navbar-logo-light": _vm.uiConfigs.topNavbarLogoLight,
        "data-notification-position": _vm.uiConfigs.notificationPosition,
        "data-nav-menu-horizontal": _vm.uiConfigs.navMenuHorizontal,
        "data-rtl": _vm.uiConfigs.toggleRtl
      }
    },
    [
      _c("animated-loader", {
        attrs: {
          "is-loading": _vm.appIsLoading,
          "loader-color": _vm.vars.loaderColor,
          size: "screen",
          overlayColor: "transparent"
        }
      }),
      _vm._v(" "),
      !_vm.appIsLoading
        ? [
            _c("app-backdrop"),
            _vm._v(" "),
            _c("app-navbar"),
            _vm._v(" "),
            _c("app-search"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "container-fluid" },
              [
                _c("app-sidebar-left", {
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "menu",
                        fn: function() {
                          return [_c("app-sidebar-menu")]
                        },
                        proxy: true
                      },
                      {
                        key: "widgets",
                        fn: function() {
                          return undefined
                        },
                        proxy: true
                      }
                    ],
                    null,
                    false,
                    2711713116
                  )
                }),
                _vm._v(" "),
                _c("app-sidebar-right"),
                _vm._v(" "),
                _vm._t("default"),
                _vm._v(" "),
                _vm.uiConfigs.pageFooterShow && _vm.configs.system
                  ? _c("app-footer", {
                      attrs: {
                        "footer-credit": _vm.configs.system.footerCredit,
                        version: _vm.configs.system.version
                      }
                    })
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "b-modal",
              {
                ref: "lockinModal",
                attrs: { centered: "", lazy: "" },
                on: { hidden: _vm.onLockinModalHidden },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "modal-header",
                      fn: function() {
                        return [
                          _c("h5", { staticClass: "modal-title" }, [
                            _vm._v(_vm._s(_vm.$t("auth.lock.locking_screen")))
                          ])
                        ]
                      },
                      proxy: true
                    },
                    {
                      key: "modal-footer",
                      fn: function() {
                        return [
                          _c(
                            "base-button",
                            {
                              attrs: { type: "button", design: "primary" },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  return _vm.onLockinModalCancel($event)
                                }
                              }
                            },
                            [_vm._v("No, Cancel!")]
                          )
                        ]
                      },
                      proxy: true
                    }
                  ],
                  null,
                  false,
                  7335214
                ),
                model: {
                  value: _vm.showingLockinModal,
                  callback: function($$v) {
                    _vm.showingLockinModal = $$v
                  },
                  expression: "showingLockinModal"
                }
              },
              [
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    "\n                " +
                      _vm._s(
                        _vm.$t("auth.lock.will_lock_in", {
                          attribute: _vm.lockinMessage
                        })
                      ) +
                      "\n            "
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("back-to-top", {
              attrs: {
                "visibility-height": 300,
                "back-position": 50,
                "transition-name": "fade"
              }
            }),
            _vm._v(" "),
            _vm.configs.chat && _vm.configs.chat.enabled
              ? [
                  _vm.subscriptions && _vm.subscriptions.userPrivate
                    ? _c(
                        "div",
                        { staticClass: "chat-box-container" },
                        [
                          _c(
                            "div",
                            {
                              class: [
                                "chat-button",
                                { hidden: _vm.isChatBoxShown }
                              ]
                            },
                            [
                              _c(
                                "button",
                                {
                                  attrs: { type: "button" },
                                  on: { click: _vm.showChatBox }
                                },
                                [
                                  _c("i", { staticClass: "far fa-comments" }),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(_vm._s(_vm.$t("chat.chat")))
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _vm.totalUnreadMessages &&
                              _vm.totalUnreadMessages > 0
                                ? _c(
                                    "span",
                                    {
                                      staticClass:
                                        "badge badge-pill badge-success unread-count"
                                    },
                                    [_vm._v(_vm._s(_vm.totalUnreadMessages))]
                                  )
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _vm.isChatBoxShown
                            ? _c("chat-box", {
                                attrs: {
                                  "box-visibility": _vm.isChatBoxShown,
                                  channel: _vm.subscriptions.userPrivate
                                },
                                on: {
                                  boxHidden: function($event) {
                                    _vm.isChatBoxShown = false
                                  },
                                  boxShown: function($event) {
                                    _vm.isChatBoxShown = true
                                  }
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    : _vm._e()
                ]
              : _vm._e()
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-footer.vue?vue&type=template&id=545af82f&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-footer.vue?vue&type=template&id=545af82f& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("footer", { staticClass: "app-footer guest-footer mt-2" }, [
    _c("p", { staticClass: "text-center mb-0 py-3" }, [
      _c("span", { staticClass: "font-weight-700" }, [
        _vm._v(_vm._s(_vm.footerCredit))
      ]),
      _vm._v(
        " " + _vm._s(_vm.$t("product.version")) + " " + _vm._s(_vm.version)
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-navbar.vue?vue&type=template&id=19e5c7b8&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-navbar.vue?vue&type=template&id=19e5c7b8& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    "nav",
    {
      staticClass:
        "navbar navbar-design-basic navbar-expand-sm d-flex justify-content-around align-items-center flex-nowrap"
    },
    [
      _c(
        "a",
        {
          staticClass: "nav-link toggle-left-sidebar d-lg-none pr-4",
          on: { click: _vm.toggleLeftSidebar }
        },
        [_c("i", { staticClass: "fas fa-bars" })]
      ),
      _vm._v(" "),
      _c("app-logo", { attrs: { place: "navbar" } }),
      _vm._v(" "),
      _c("ul", { staticClass: "nav nav-inline d-none d-lg-flex mr-2" }, [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              directives: [
                {
                  name: "b-tooltip",
                  rawName: "v-b-tooltip.hover",
                  modifiers: { hover: true }
                }
              ],
              staticClass: "nav-link toggle-left-sidebar",
              attrs: { title: _vm.$t("config.ui.toggle_sidebar") },
              on: { click: _vm.toggleLeftSidebar }
            },
            [_c("i", { staticClass: "fas fa-bars" })]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _vm.uiConfigs.fullScreen
            ? _c(
                "a",
                {
                  directives: [
                    {
                      name: "b-tooltip",
                      rawName: "v-b-tooltip.hover",
                      modifiers: { hover: true }
                    }
                  ],
                  staticClass: "nav-link toggle-full-screen",
                  attrs: { title: _vm.$t("config.ui.toggle_fullscreen") },
                  on: {
                    click: function($event) {
                      return _vm.toggleFullScreen(false)
                    }
                  }
                },
                [_c("i", { staticClass: "fas fa-compress" })]
              )
            : _c(
                "a",
                {
                  directives: [
                    {
                      name: "b-tooltip",
                      rawName: "v-b-tooltip.hover",
                      modifiers: { hover: true }
                    }
                  ],
                  staticClass: "nav-link toggle-full-screen",
                  attrs: { title: _vm.$t("config.ui.toggle_fullscreen") },
                  on: {
                    click: function($event) {
                      return _vm.toggleFullScreen(true)
                    }
                  }
                },
                [_c("i", { staticClass: "fas fa-expand" })]
              )
        ])
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "nav nav-inline d-none d-md-flex mr-3" }, [
        _vm.configs.system && _vm.configs.system.maintenanceMode
          ? _c("li", { staticClass: "nav-item" }, [
              _c("span", { staticClass: "warning-label badge badge-warning" }, [
                _vm._v(_vm._s(_vm.$t("config.system.under_maintenance")))
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.configs.system && !_vm.configs.system.mode
          ? _c("li", { staticClass: "nav-item" }, [
              _c("span", { staticClass: "warning-label badge badge-warning" }, [
                _vm._v(_vm._s(_vm.$t("config.system.test_mode")))
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.isOnline
          ? _c("li", { staticClass: "nav-item ml-2" }, [
              _c("span", { staticClass: "warning-label badge badge-error" }, [
                _c("i", { staticClass: "fas fa-exclamation-triangle" }),
                _vm._v(" " + _vm._s(_vm.$t("general.offline")))
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "navbar-search-form search-button-wrapper d-none d-lg-block",
          on: { click: _vm.toggleSearchScreen }
        },
        [_vm._m(0)]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "separator" }),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "navbar-nav" },
        [
          _vm._m(1),
          _vm._v(" "),
          _vm.configs.system &&
          _vm.configs.system.notifications &&
          _vm.hasPermission("access-notifications")
            ? _c(
                "base-dropdown",
                {
                  staticClass: "nav-item d-none d-sm-flex",
                  attrs: {
                    tag: "li",
                    "dropdown-menu-tag": "div",
                    size: "lg",
                    "toggle-on-click": false,
                    "menu-classes": "p-0",
                    position: "right"
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "withScope",
                        fn: function(ref) {
                          var isOpen = ref.isOpen
                          return [
                            _c("notification-widget", {
                              attrs: { reload: isOpen }
                            })
                          ]
                        }
                      }
                    ],
                    null,
                    false,
                    1999882075
                  )
                },
                [
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover",
                          modifiers: { hover: true }
                        }
                      ],
                      staticClass: "nav-link",
                      attrs: {
                        slot: "title",
                        "data-toggle": "dropdown",
                        role: "button",
                        title: _vm.$t("user.notifications")
                      },
                      slot: "title"
                    },
                    [_c("span", [_c("i", { staticClass: "far fa-bell" })])]
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.configs.system &&
          _vm.configs.system.todo &&
          _vm.hasPermission("access-todo")
            ? _c(
                "base-dropdown",
                {
                  staticClass: "nav-item d-none d-sm-flex",
                  attrs: {
                    tag: "li",
                    "dropdown-menu-tag": "div",
                    size: "lg",
                    "toggle-on-click": false,
                    "menu-classes": "p-0",
                    position: "right"
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "withScope",
                        fn: function(ref) {
                          var isOpen = ref.isOpen
                          return [
                            _c("todo-widget", { attrs: { reload: isOpen } })
                          ]
                        }
                      }
                    ],
                    null,
                    false,
                    3480721670
                  )
                },
                [
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "b-tooltip",
                          rawName: "v-b-tooltip.hover",
                          modifiers: { hover: true }
                        }
                      ],
                      staticClass: "nav-link",
                      attrs: {
                        slot: "title",
                        "data-toggle": "dropdown",
                        role: "button",
                        title: _vm.$t("utility.todo.todo")
                      },
                      slot: "title"
                    },
                    [
                      _c("span", [
                        _c("i", { staticClass: "far fa-check-circle" })
                      ])
                    ]
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.hasPermission("access-config")
            ? _c(
                "li",
                {
                  directives: [
                    {
                      name: "b-tooltip",
                      rawName: "v-b-tooltip.hover",
                      modifiers: { hover: true }
                    }
                  ],
                  staticClass: "nav-item d-none d-md-flex",
                  attrs: { title: _vm.$t("config.config") }
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: { to: { name: "appConfig" } }
                    },
                    [_c("i", { staticClass: "fas fa-cogs" })]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "base-dropdown",
            {
              staticClass: "nav-item d-flex",
              attrs: {
                tag: "li",
                position: "right",
                open: _vm.userDropddownOpen
              },
              on: {
                "update:open": function($event) {
                  _vm.userDropddownOpen = $event
                }
              }
            },
            [
              _c(
                "a",
                {
                  staticClass: "nav-link nav-link-icon nav-user-avatar p-0",
                  attrs: {
                    slot: "title",
                    "data-toggle": "dropdown",
                    role: "button"
                  },
                  slot: "title"
                },
                [
                  _vm.loggedInUser
                    ? _c("user-avatar", {
                        attrs: {
                          user: _vm.loggedInUser,
                          size: 40,
                          color: _vm.vars.colors[_vm.uiConfigs.topNavbarColor]
                        }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c("h6", { staticClass: "dropdown-header" }, [
                _vm._v(
                  _vm._s(
                    _vm.$t("general.greeting") + ", " + _vm.loggedInUser.name
                  )
                )
              ]),
              _vm._v(" "),
              _vm.loggedInUser
                ? _c(
                    "router-link",
                    {
                      staticClass: "dropdown-item",
                      attrs: { to: { name: "appProfileView" } }
                    },
                    [
                      _c("i", { staticClass: "fas fa-user" }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.$t("user.your_profile")) +
                          "\n            "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.hasPermission("access-config")
                ? _c(
                    "router-link",
                    {
                      staticClass: "dropdown-item",
                      attrs: { to: { name: "appUserPreference" } }
                    },
                    [
                      _c("i", { staticClass: "fas fa-user-cog" }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.$t("user.user_preference")) +
                          "\n            "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.configs.auth.lockScreen
                ? _c(
                    "a",
                    {
                      staticClass: "dropdown-item",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.lock($event)
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fas fa-lock" }),
                      _vm._v(" " + _vm._s(_vm.$t("auth.lock.lock")))
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "dropdown-item",
                  attrs: { to: { name: "appUserChangePassword" } }
                },
                [
                  _c("i", { staticClass: "fas fa-key" }),
                  _vm._v(
                    " " +
                      _vm._s(_vm.$t("auth.password.change_password")) +
                      "\n            "
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", {
                staticClass: "dropdown-divider",
                attrs: { role: "separator" }
              }),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "dropdown-item",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.logout($event)
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-power-off" }),
                  _vm._v(" " + _vm._s(_vm.$t("auth.logout")))
                ]
              )
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "search-button" }, [
      _c("i", { staticClass: "fas fa-search" }),
      _vm._v("\n            Type anywhere to "),
      _c("span", { staticClass: "font-weight-700" }, [_vm._v("search")]),
      _vm._v("...\n        ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      { staticClass: "nav-item d-none d-md-flex align-items-center" },
      [
        _c(
          "a",
          {
            staticClass: "nav-link cta bg-success text-white",
            attrs: {
              href:
                "https://codecanyon.net/item/kodeui-laravel-vuejs-bootstrap-spa-admin-starter-kit/27780969"
            }
          },
          [_vm._v(" BUY IT NOW ")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-config-component-box.vue?vue&type=template&id=4c66ca15&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-sidebar-config-component-box.vue?vue&type=template&id=4c66ca15& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "config-box" },
    [
      _c(
        "a",
        {
          class: ["box-heading", _vm.isOpen ? "opened" : ""],
          on: {
            click: function($event) {
              _vm.isOpen = !_vm.isOpen
            }
          }
        },
        [_vm._v(_vm._s(_vm.heading))]
      ),
      _vm._v(" "),
      _c(
        "b-collapse",
        {
          staticClass: "box-content",
          attrs: { id: _vm.heading },
          model: {
            value: _vm.isOpen,
            callback: function($$v) {
              _vm.isOpen = $$v
            },
            expression: "isOpen"
          }
        },
        [_vm._t("default")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=template&id=275b4d67&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=template&id=275b4d67& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("app-sidebar", { staticClass: "config-sidebar" }, [
    _c(
      "button",
      {
        staticClass: "btn btn-default toggle-config-sidebar d-none",
        attrs: { type: "button" },
        on: { click: _vm.toggleConfigSidebar }
      },
      [_c("i", { staticClass: "fas fa-cog fa-spin" })]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "config-sidebar-inner" }, [
      _c("div", { staticClass: "config-sidebar-content" }, [
        _c("h4", { staticClass: "font-weight-bold text-center" }, [
          _vm._v("Component's Configuration")
        ]),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "list" },
          _vm._l(_vm.uiConfigComponents, function(component, i) {
            return _c(
              "li",
              { key: i, staticClass: "list-item" },
              [
                _c(
                  "app-sidebar-config-component-box",
                  { attrs: { heading: component.heading } },
                  [
                    _c(
                      "ul",
                      { staticClass: "list" },
                      _vm._l(component.configurations, function(
                        configProperty,
                        j
                      ) {
                        return _c(
                          "li",
                          { key: configProperty.key, staticClass: "list-item" },
                          [
                            _c("div", { staticClass: "label" }, [
                              _vm._v(_vm._s(configProperty.title))
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "options" }, [
                              _c(
                                "div",
                                { staticClass: "row" },
                                _vm._l(configProperty.options, function(
                                  option,
                                  k
                                ) {
                                  return _c(
                                    "div",
                                    { key: option.key, staticClass: "col-6" },
                                    [
                                      _c(
                                        "a",
                                        {
                                          class: [
                                            "config-link ",
                                            _vm.uiConfigs[
                                              configProperty.key
                                            ] === option.key
                                              ? "active"
                                              : ""
                                          ],
                                          on: {
                                            click: function($event) {
                                              return _vm.setConfiguration(
                                                configProperty.key,
                                                option.key,
                                                option.actions,
                                                option.dispatches
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                              " +
                                              _vm._s(option.title) +
                                              "\n                                            "
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            configProperty.message
                              ? _c("div", { staticClass: "message" }, [
                                  _vm._v(_vm._s(configProperty.message))
                                ])
                              : _vm._e()
                          ]
                        )
                      }),
                      0
                    )
                  ]
                )
              ],
              1
            )
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=template&id=42eb3eec&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=template&id=42eb3eec& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "app-sidebar",
    { staticClass: "left-sidebar", style: _vm.sidebarStyle },
    [
      _c(
        "div",
        _vm._g(
          { staticClass: "wrapper" },
          _vm.uiConfigs.leftSidebarStyle === "folded"
            ? { mouseenter: _vm.showSidebar, mouseleave: _vm.hideSidebar }
            : {}
        ),
        [
          _c(
            "div",
            { staticClass: "content" },
            [
              _c(
                "div",
                { staticClass: "logo-wrapper" },
                [
                  _c("app-logo", { attrs: { place: "sidebar" } }),
                  _vm._v(" "),
                  _c("div", { staticClass: "seperator" }),
                  _vm._v(" "),
                  _c("div", { staticClass: "sidebar-switches" }, [
                    _vm.showPin
                      ? _c(
                          "a",
                          {
                            directives: [
                              {
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: { hover: true }
                              }
                            ],
                            staticClass: "unpinned",
                            attrs: { title: _vm.$t("layout.pin_sidebar") },
                            on: { click: _vm.pinSidebar }
                          },
                          [_c("i", { staticClass: "far fa-circle" })]
                        )
                      : _vm.showUnpin
                      ? _c(
                          "a",
                          {
                            directives: [
                              {
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: { hover: true }
                              }
                            ],
                            staticClass: "pinned",
                            attrs: { title: _vm.$t("layout.pin_sidebar") },
                            on: { click: _vm.unpinSidebar }
                          },
                          [_c("i", { staticClass: "fas fa-dot-circle" })]
                        )
                      : _vm._e()
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vue-scroll",
                {
                  ref: "vuescrollSidebarLeft",
                  staticClass: "vue-scroll-sidebar-left",
                  attrs: { id: "vuescrollSidebarLeft" },
                  on: { "handle-scroll": _vm.handleScroll }
                },
                [_vm._t("menu")],
                2
              ),
              _vm._v(" "),
              _vm._t("widgets"),
              _vm._v(" "),
              _vm.uiConfigs.leftSidebarColor === "wallpaper" &&
              _vm.uiConfigs.wallpaper
                ? _c("div", { staticClass: "unsplash-credit" }, [
                    _vm._v("\n                Photo by "),
                    _c(
                      "a",
                      {
                        attrs: { href: _vm.uiConfigs.wallpaper.user.links.html }
                      },
                      [_vm._v(_vm._s(_vm.uiConfigs.wallpaper.user.name))]
                    ),
                    _vm._v(" on "),
                    _c("a", { attrs: { href: "https://unsplash.com" } }, [
                      _vm._v("Unsplash")
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._t("default")
            ],
            2
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=template&id=57c1b887&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=template&id=57c1b887& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("app-sidebar", { staticClass: "right-sidebar" }, [
    _c("div", { staticClass: "right-sidebar-inner" }, [
      _c(
        "div",
        { staticClass: "right-sidebar-content" },
        [
          _c(
            "h4",
            {
              staticClass:
                "sidebar-heading font-weight-bold text-center border-bottom"
            },
            [_vm._v(_vm._s(_vm.$t("general.help")))]
          ),
          _vm._v(" "),
          _c(
            "vue-scroll",
            {
              ref: "vuescrollSidebarRight",
              attrs: { id: "vuescrollSidebarRight" }
            },
            [
              _c("animated-loader", {
                attrs: {
                  "is-loading": _vm.isLoading,
                  "loader-color": _vm.vars.loaderColor
                }
              }),
              _vm._v(" "),
              _c("div", {
                staticClass: "content-wrapper p-4",
                domProps: { innerHTML: _vm._s(_vm.content) }
              })
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=template&id=dcb91038&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=template&id=dcb91038& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("app-sidebar", { staticClass: "special-sidebar" }, [
    _c("div", { staticClass: "wrapper" }, [
      _c("div", { staticClass: "content" })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu.vue?vue&type=template&id=fa48adba&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu.vue?vue&type=template&id=fa48adba&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "navigation-menus" },
    [
      _vm._l(_vm.permittedNavigations, function(navGroup, i) {
        return _vm._l(navGroup.children, function(nav, i) {
          return _c(
            "div",
            { key: nav.name || nav.path, staticClass: "section" },
            [
              !nav.meta.isHiddenNav
                ? _c("div", { staticClass: "section-title" }, [
                    _vm._v(_vm._s(_vm.$t(nav.meta.title)))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "ul",
                {
                  class: [
                    "navigation-menu list-unstyled",
                    _vm.thumbOnRight ? "thumb-align-right" : ""
                  ]
                },
                [
                  _vm._l(nav.children, function(navItem, j) {
                    return !(
                      navItem.meta.isHiddenNav && navItem.meta.hideChildren
                    )
                      ? [
                          _c("menu-item", {
                            attrs: {
                              "menu-id": "collapse-" + navItem.name + "-" + j,
                              item: navItem,
                              "base-path": _vm.resolvePath(
                                navGroup.path,
                                nav.path
                              ),
                              "thumb-on-right": _vm.thumbOnRight,
                              "menu-letter-icon":
                                _vm.uiConfigs.navMenuLetterIcon,
                              "sidebar-open": _vm.uiConfigs.leftSidebarShow
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
        })
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AppBackdrop.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/AppBackdrop.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppBackdrop_vue_vue_type_template_id_42722608___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBackdrop.vue?vue&type=template&id=42722608& */ "./resources/js/components/AppBackdrop.vue?vue&type=template&id=42722608&");
/* harmony import */ var _AppBackdrop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppBackdrop.vue?vue&type=script&lang=js& */ "./resources/js/components/AppBackdrop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppBackdrop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppBackdrop.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/AppBackdrop.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppBackdrop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppBackdrop_vue_vue_type_template_id_42722608___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppBackdrop_vue_vue_type_template_id_42722608___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AppBackdrop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppBackdrop.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/AppBackdrop.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBackdrop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppBackdrop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppBackdrop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBackdrop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppBackdrop.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/AppBackdrop.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBackdrop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../node_modules/vue-loader/lib??vue-loader-options!./AppBackdrop.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppBackdrop.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBackdrop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBackdrop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBackdrop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBackdrop_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/AppBackdrop.vue?vue&type=template&id=42722608&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/AppBackdrop.vue?vue&type=template&id=42722608& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBackdrop_vue_vue_type_template_id_42722608___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppBackdrop.vue?vue&type=template&id=42722608& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppBackdrop.vue?vue&type=template&id=42722608&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBackdrop_vue_vue_type_template_id_42722608___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBackdrop_vue_vue_type_template_id_42722608___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/AppLogo.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/AppLogo.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppLogo_vue_vue_type_template_id_7ceb4ed1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLogo.vue?vue&type=template&id=7ceb4ed1& */ "./resources/js/components/AppLogo.vue?vue&type=template&id=7ceb4ed1&");
/* harmony import */ var _AppLogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLogo.vue?vue&type=script&lang=js& */ "./resources/js/components/AppLogo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppLogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppLogo_vue_vue_type_template_id_7ceb4ed1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppLogo_vue_vue_type_template_id_7ceb4ed1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AppLogo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppLogo.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/AppLogo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppLogo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppLogo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppLogo.vue?vue&type=template&id=7ceb4ed1&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/AppLogo.vue?vue&type=template&id=7ceb4ed1& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLogo_vue_vue_type_template_id_7ceb4ed1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppLogo.vue?vue&type=template&id=7ceb4ed1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppLogo.vue?vue&type=template&id=7ceb4ed1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLogo_vue_vue_type_template_id_7ceb4ed1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLogo_vue_vue_type_template_id_7ceb4ed1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/AppSearch.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/AppSearch.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppSearch_vue_vue_type_template_id_5b9fdcce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSearch.vue?vue&type=template&id=5b9fdcce&scoped=true& */ "./resources/js/components/AppSearch.vue?vue&type=template&id=5b9fdcce&scoped=true&");
/* harmony import */ var _AppSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppSearch.vue?vue&type=script&lang=js& */ "./resources/js/components/AppSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppSearch_vue_vue_type_style_index_0_id_5b9fdcce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppSearch.vue?vue&type=style&index=0&id=5b9fdcce&lang=scss&scoped=true& */ "./resources/js/components/AppSearch.vue?vue&type=style&index=0&id=5b9fdcce&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppSearch_vue_vue_type_template_id_5b9fdcce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppSearch_vue_vue_type_template_id_5b9fdcce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5b9fdcce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AppSearch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppSearch.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/AppSearch.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppSearch.vue?vue&type=style&index=0&id=5b9fdcce&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/AppSearch.vue?vue&type=style&index=0&id=5b9fdcce&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearch_vue_vue_type_style_index_0_id_5b9fdcce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../node_modules/vue-loader/lib??vue-loader-options!./AppSearch.vue?vue&type=style&index=0&id=5b9fdcce&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSearch.vue?vue&type=style&index=0&id=5b9fdcce&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearch_vue_vue_type_style_index_0_id_5b9fdcce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearch_vue_vue_type_style_index_0_id_5b9fdcce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearch_vue_vue_type_style_index_0_id_5b9fdcce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearch_vue_vue_type_style_index_0_id_5b9fdcce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/AppSearch.vue?vue&type=template&id=5b9fdcce&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/AppSearch.vue?vue&type=template&id=5b9fdcce&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearch_vue_vue_type_template_id_5b9fdcce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppSearch.vue?vue&type=template&id=5b9fdcce&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSearch.vue?vue&type=template&id=5b9fdcce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearch_vue_vue_type_template_id_5b9fdcce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSearch_vue_vue_type_template_id_5b9fdcce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/AppSidebar.vue":
/*!************************************************!*\
  !*** ./resources/js/components/AppSidebar.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppSidebar_vue_vue_type_template_id_22a4e926___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSidebar.vue?vue&type=template&id=22a4e926& */ "./resources/js/components/AppSidebar.vue?vue&type=template&id=22a4e926&");
/* harmony import */ var _AppSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppSidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/AppSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppSidebar.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/AppSidebar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppSidebar_vue_vue_type_template_id_22a4e926___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppSidebar_vue_vue_type_template_id_22a4e926___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AppSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppSidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/AppSidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/AppSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../node_modules/vue-loader/lib??vue-loader-options!./AppSidebar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSidebar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/AppSidebar.vue?vue&type=template&id=22a4e926&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/AppSidebar.vue?vue&type=template&id=22a4e926& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_template_id_22a4e926___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppSidebar.vue?vue&type=template&id=22a4e926& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppSidebar.vue?vue&type=template&id=22a4e926&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_template_id_22a4e926___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_template_id_22a4e926___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/chat-box/conversation-header.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/chat-box/conversation-header.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _conversation_header_vue_vue_type_template_id_2ce8a029___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversation-header.vue?vue&type=template&id=2ce8a029& */ "./resources/js/components/chat-box/conversation-header.vue?vue&type=template&id=2ce8a029&");
/* harmony import */ var _conversation_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversation-header.vue?vue&type=script&lang=js& */ "./resources/js/components/chat-box/conversation-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _conversation_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _conversation_header_vue_vue_type_template_id_2ce8a029___WEBPACK_IMPORTED_MODULE_0__["render"],
  _conversation_header_vue_vue_type_template_id_2ce8a029___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chat-box/conversation-header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chat-box/conversation-header.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/chat-box/conversation-header.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_conversation_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./conversation-header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/conversation-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_conversation_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chat-box/conversation-header.vue?vue&type=template&id=2ce8a029&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/chat-box/conversation-header.vue?vue&type=template&id=2ce8a029& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_conversation_header_vue_vue_type_template_id_2ce8a029___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./conversation-header.vue?vue&type=template&id=2ce8a029& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/conversation-header.vue?vue&type=template&id=2ce8a029&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_conversation_header_vue_vue_type_template_id_2ce8a029___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_conversation_header_vue_vue_type_template_id_2ce8a029___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/chat-box/header.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/chat-box/header.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue_vue_type_template_id_b871232a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=b871232a& */ "./resources/js/components/chat-box/header.vue?vue&type=template&id=b871232a&");
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js& */ "./resources/js/components/chat-box/header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_b871232a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _header_vue_vue_type_template_id_b871232a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chat-box/header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chat-box/header.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/chat-box/header.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chat-box/header.vue?vue&type=template&id=b871232a&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/chat-box/header.vue?vue&type=template&id=b871232a& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_b871232a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=template&id=b871232a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/header.vue?vue&type=template&id=b871232a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_b871232a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_b871232a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/chat-box/index.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/chat-box/index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_7eb429e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7eb429e4& */ "./resources/js/components/chat-box/index.vue?vue&type=template&id=7eb429e4&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/chat-box/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7eb429e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7eb429e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chat-box/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chat-box/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/chat-box/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chat-box/index.vue?vue&type=template&id=7eb429e4&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/chat-box/index.vue?vue&type=template&id=7eb429e4& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7eb429e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7eb429e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/index.vue?vue&type=template&id=7eb429e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7eb429e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7eb429e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/chat-box/message-item.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/chat-box/message-item.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_item_vue_vue_type_template_id_5c5f8277___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-item.vue?vue&type=template&id=5c5f8277& */ "./resources/js/components/chat-box/message-item.vue?vue&type=template&id=5c5f8277&");
/* harmony import */ var _message_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-item.vue?vue&type=script&lang=js& */ "./resources/js/components/chat-box/message-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _message_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _message_item_vue_vue_type_template_id_5c5f8277___WEBPACK_IMPORTED_MODULE_0__["render"],
  _message_item_vue_vue_type_template_id_5c5f8277___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chat-box/message-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chat-box/message-item.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/chat-box/message-item.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./message-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/message-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chat-box/message-item.vue?vue&type=template&id=5c5f8277&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/chat-box/message-item.vue?vue&type=template&id=5c5f8277& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_item_vue_vue_type_template_id_5c5f8277___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./message-item.vue?vue&type=template&id=5c5f8277& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/message-item.vue?vue&type=template&id=5c5f8277&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_item_vue_vue_type_template_id_5c5f8277___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_item_vue_vue_type_template_id_5c5f8277___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/chat-box/room-item.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/chat-box/room-item.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _room_item_vue_vue_type_template_id_7c922152___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room-item.vue?vue&type=template&id=7c922152& */ "./resources/js/components/chat-box/room-item.vue?vue&type=template&id=7c922152&");
/* harmony import */ var _room_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-item.vue?vue&type=script&lang=js& */ "./resources/js/components/chat-box/room-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _room_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _room_item_vue_vue_type_template_id_7c922152___WEBPACK_IMPORTED_MODULE_0__["render"],
  _room_item_vue_vue_type_template_id_7c922152___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chat-box/room-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chat-box/room-item.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/chat-box/room-item.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_room_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./room-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/room-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_room_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chat-box/room-item.vue?vue&type=template&id=7c922152&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/chat-box/room-item.vue?vue&type=template&id=7c922152& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_room_item_vue_vue_type_template_id_7c922152___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./room-item.vue?vue&type=template&id=7c922152& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/room-item.vue?vue&type=template&id=7c922152&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_room_item_vue_vue_type_template_id_7c922152___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_room_item_vue_vue_type_template_id_7c922152___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/chat-box/settings.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/chat-box/settings.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_vue_vue_type_template_id_923098fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=923098fe& */ "./resources/js/components/chat-box/settings.vue?vue&type=template&id=923098fe&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./resources/js/components/chat-box/settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/chat-box/settings.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_923098fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _settings_vue_vue_type_template_id_923098fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chat-box/settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chat-box/settings.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/chat-box/settings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chat-box/settings.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/chat-box/settings.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/settings.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/chat-box/settings.vue?vue&type=template&id=923098fe&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/chat-box/settings.vue?vue&type=template&id=923098fe& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_923098fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=template&id=923098fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/settings.vue?vue&type=template&id=923098fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_923098fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_923098fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/widgets/Notification.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/widgets/Notification.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification_vue_vue_type_template_id_084dd3b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification.vue?vue&type=template&id=084dd3b6&scoped=true& */ "./resources/js/components/widgets/Notification.vue?vue&type=template&id=084dd3b6&scoped=true&");
/* harmony import */ var _Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notification.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/Notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Notification_vue_vue_type_style_index_0_id_084dd3b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notification.vue?vue&type=style&index=0&id=084dd3b6&lang=scss&scoped=true& */ "./resources/js/components/widgets/Notification.vue?vue&type=style&index=0&id=084dd3b6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notification_vue_vue_type_template_id_084dd3b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notification_vue_vue_type_template_id_084dd3b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "084dd3b6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/Notification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/Notification.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/widgets/Notification.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Notification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/Notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/Notification.vue?vue&type=style&index=0&id=084dd3b6&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/widgets/Notification.vue?vue&type=style&index=0&id=084dd3b6&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_084dd3b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Notification.vue?vue&type=style&index=0&id=084dd3b6&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/Notification.vue?vue&type=style&index=0&id=084dd3b6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_084dd3b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_084dd3b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_084dd3b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_style_index_0_id_084dd3b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/widgets/Notification.vue?vue&type=template&id=084dd3b6&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/widgets/Notification.vue?vue&type=template&id=084dd3b6&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_084dd3b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Notification.vue?vue&type=template&id=084dd3b6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/Notification.vue?vue&type=template&id=084dd3b6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_084dd3b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_084dd3b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/widgets/Todo.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/widgets/Todo.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Todo_vue_vue_type_template_id_9dda1ede_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo.vue?vue&type=template&id=9dda1ede&scoped=true& */ "./resources/js/components/widgets/Todo.vue?vue&type=template&id=9dda1ede&scoped=true&");
/* harmony import */ var _Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo.vue?vue&type=script&lang=js& */ "./resources/js/components/widgets/Todo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Todo_vue_vue_type_style_index_0_id_9dda1ede_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo.vue?vue&type=style&index=0&id=9dda1ede&lang=scss&scoped=true& */ "./resources/js/components/widgets/Todo.vue?vue&type=style&index=0&id=9dda1ede&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Todo_vue_vue_type_template_id_9dda1ede_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Todo_vue_vue_type_template_id_9dda1ede_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9dda1ede",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/widgets/Todo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/widgets/Todo.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/widgets/Todo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Todo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/Todo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/widgets/Todo.vue?vue&type=style&index=0&id=9dda1ede&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/widgets/Todo.vue?vue&type=style&index=0&id=9dda1ede&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_9dda1ede_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Todo.vue?vue&type=style&index=0&id=9dda1ede&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/Todo.vue?vue&type=style&index=0&id=9dda1ede&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_9dda1ede_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_9dda1ede_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_9dda1ede_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_id_9dda1ede_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/widgets/Todo.vue?vue&type=template&id=9dda1ede&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/widgets/Todo.vue?vue&type=template&id=9dda1ede&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_template_id_9dda1ede_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Todo.vue?vue&type=template&id=9dda1ede&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/widgets/Todo.vue?vue&type=template&id=9dda1ede&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_template_id_9dda1ede_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_template_id_9dda1ede_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/core/utils/keyBindings.js":
/*!************************************************!*\
  !*** ./resources/js/core/utils/keyBindings.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/store */ "./resources/js/store/index.js");
/* harmony import */ var _js_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/router */ "./resources/js/router/index.js");
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var hotkeyArray = _js_store__WEBPACK_IMPORTED_MODULE_0__["default"].getters['config/config']('hotKey') || ['ctrlKey', 'shiftKey'];
var secondaryHotkeyArray = _js_store__WEBPACK_IMPORTED_MODULE_0__["default"].getters['config/config']('secondaryHotKey') || ['altKey', 'shiftKey'];
var goBackHotKey = ['altKey'];

var hotkeyClicked = function hotkeyClicked(event, combination) {
  var needCtrl = combination.indexOf('ctrlKey') !== -1;
  var needAlt = combination.indexOf('altKey') !== -1;
  var needShift = combination.indexOf('shiftKey') !== -1;

  if (needCtrl && !event.ctrlKey && event.key && event.key.toLowerCase() !== 'control' && event.key.toLowerCase() !== 'ctrl') {
    return false;
  }

  if (needAlt && !event.altKey && event.key && event.key.toLowerCase() !== 'alt' && event.key.toLowerCase() !== 'option') {
    return false;
  }

  if (needShift && !event.shiftKey && event.key && event.key.toLowerCase() !== 'shift') {
    return false;
  }

  return true;
};

var keyupListener = function keyupListener(event) {
  var key = event.which || event.keyCode;
  var target = event.target;
  var shouldExit = event.target.classList.contains('pause-keyuplistener');

  if (hotkeyClicked(event, goBackHotKey) && (key === 27 || key === "Escape")) {
    _js_router__WEBPACK_IMPORTED_MODULE_1__["default"].go(-1);
  } else if (hotkeyClicked(event, hotkeyArray)) {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$emit('HOTKEY_PRESSED', key);
  } else if (hotkeyClicked(event, secondaryHotkeyArray)) {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$emit('SECONDARY_HOTKEY_PRESSED', key);
    var moduleKeyBindings = _js_store__WEBPACK_IMPORTED_MODULE_0__["default"].getters['config/config']('keyBindings') || {};

    var _char = 'key_' + String.fromCharCode(key).toLowerCase();

    if (moduleKeyBindings.hasOwnProperty(_char)) {
      if (_typeof(moduleKeyBindings[_char]) === 'object' && moduleKeyBindings[_char] !== null) {
        if (moduleKeyBindings[_char].type === 'event') {
          var payload = moduleKeyBindings[_char].payload || null;
          _js_event_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$emit(moduleKeyBindings[_char].emit, payload);
        }
      } else {
        _js_router__WEBPACK_IMPORTED_MODULE_1__["default"].push({
          name: moduleKeyBindings[_char]
        });
      }
    }
  } else if (event.ctrlKey || event.altKey || event.shiftKey) {} else if ((target.localName === 'body' || target.localName === 'document') && (key >= 48 && key <= 90 || key >= 96 && key <= 105)) {
    if (shouldExit) return;
    _js_event_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$emit('KEY_PRESSED', event);
  } else if (key === 27) {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_2__["default"].$emit('ESCAPE_PRESSED', event);
  }
};

var keyBindings = {
  keyupListener: keyupListener
};
/* harmony default export */ __webpack_exports__["default"] = (keyBindings);

/***/ }),

/***/ "./resources/js/core/utils/media.js":
/*!******************************************!*\
  !*** ./resources/js/core/utils/media.js ***!
  \******************************************/
/*! exports provided: mediaProps, getMediaProps, checkDeviceSupport, getMediaPermission, initMedia, showMediaPermissionError, showNoDeviceError, getDisplayMedia, playAudio, playIncomingCall, playOutgoingCall, playIncomingMessage, playScreenshot, share */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaProps", function() { return mediaProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMediaProps", function() { return getMediaProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDeviceSupport", function() { return checkDeviceSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMediaPermission", function() { return getMediaPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMedia", function() { return initMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMediaPermissionError", function() { return showMediaPermissionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNoDeviceError", function() { return showNoDeviceError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayMedia", function() { return getDisplayMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playAudio", function() { return playAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playIncomingCall", function() { return playIncomingCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playOutgoingCall", function() { return playOutgoingCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playIncomingMessage", function() { return playIncomingMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playScreenshot", function() { return playScreenshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "share", function() { return share; });
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils */ "./resources/js/core/utils/index.js");


function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

if (!hasGetUserMedia()) {
  alert($t('misc.get_user_media_not_supported'));
}

if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
  // Firefox 38+ seems having support of enumerateDevicesx
  navigator.enumerateDevices = function (callback) {
    navigator.mediaDevices.enumerateDevices().then(callback);
  };
}

var isHTTPs = location.protocol === 'https:';
var MediaDevices = [];
var canEnumerate = false;

if (typeof MediaStreamTrack !== 'undefined' && 'getSources' in MediaStreamTrack) {
  canEnumerate = true;
} else if (navigator.mediaDevices && !!navigator.mediaDevices.enumerateDevices) {
  canEnumerate = true;
}

var mediaProps = {
  hasMicrophone: false,
  hasWebcam: false,
  isMicrophoneAlreadyCaptured: false,
  isWebcamAlreadyCaptured: false,
  permissionError: true
};
var getMediaProps = function getMediaProps() {
  return mediaProps;
};
var checkDeviceSupport = function checkDeviceSupport(callback) {
  if (!canEnumerate) {
    return;
  }

  if (!navigator.enumerateDevices && window.MediaStreamTrack && window.MediaStreamTrack.getSources) {
    navigator.enumerateDevices = window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack);
  }

  if (!navigator.enumerateDevices && navigator.enumerateDevices) {
    navigator.enumerateDevices = navigator.enumerateDevices.bind(navigator);
  }

  if (!navigator.enumerateDevices) {
    if (callback) {
      callback(mediaProps);
    }

    return;
  }

  MediaDevices = [];
  navigator.enumerateDevices(function (devices) {
    devices.forEach(function (_device) {
      var device = {};

      for (var d in _device) {
        device[d] = _device[d];
      }

      if (device.kind === 'audio') {
        device.kind = 'audioinput';
      }

      if (device.kind === 'video') {
        device.kind = 'videoinput';
      }

      var skip;
      MediaDevices.forEach(function (d) {
        if (d.id === device.id && d.kind === device.kind) {
          skip = true;
        }
      });

      if (skip) {
        return;
      }

      if (!device.deviceId) {
        device.deviceId = device.id;
      }

      if (!device.id) {
        device.id = device.deviceId;
      }

      if (!device.label) {
        device.label = 'Please invoke getUserMedia once.';

        if (!isHTTPs) {
          device.label = 'HTTPs is required to get label of this ' + device.kind + ' device.';
        }
      } else {
        if (device.kind === 'videoinput' && !mediaProps.isWebcamAlreadyCaptured) {
          mediaProps.isWebcamAlreadyCaptured = true;
        }

        if (device.kind === 'audioinput' && !mediaProps.isMicrophoneAlreadyCaptured) {
          mediaProps.isMicrophoneAlreadyCaptured = true;
        }
      }

      if (device.kind === 'audioinput') {
        mediaProps.hasMicrophone = true;
      }

      if (device.kind === 'videoinput') {
        mediaProps.hasWebcam = true;
      } // there is no 'videoouput' in the spec.


      MediaDevices.push(device);
    });

    if (callback) {
      callback(mediaProps);
    }
  });
};
var getMediaPermission = function getMediaPermission() {
  var withStream = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return new Promise(function (res, rej) {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(function (stream) {
      mediaProps.permissionError = false;
      debugger;

      if (stream && withStream) {
        res(stream);
      } else {
        res(true);
      }
    })["catch"](function (err) {
      mediaProps.permissionError = true;
      console.log(err);
      rej(err);
    });
  });
};
var initMedia = function initMedia() {
  var checkMic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var checkCam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  checkDeviceSupport(function (mediaSupport) {
    if (mediaSupport) {
      var showError = false;

      if (checkMic && !mediaSupport.hasMicrophone) {
        showError = true;
      }

      if (checkCam && !mediaSupport.hasWebcam) {
        showError = true;
      }

      if (showError) {
        showNoDeviceError(mediaSupport);
      }
    } // getMediaPermission()
    //     .then((res) => {
    //         debugger
    //     })
    //     .catch(err => {
    //         showMediaPermissionError(err)
    //     })

  });
};
var showMediaPermissionError = function showMediaPermissionError(err) {
  var msg = {
    icon: 'error',
    footer: $t('misc.solve_and_refresh')
  };

  if (!err) {
    return;
  }

  if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
    msg.title = $t('misc.media.permission_denied');
    msg.text = $t('misc.media.permission_denied_text');
  } else if (err.name === 'NotFoundError') {
    msg.title = $t('misc.media.not_found');
    msg.text = $t('misc.media.not_found_text');
  } else if (err.name === 'NotReadableError') {
    msg.title = $t('misc.media.unreadable');
    msg.text = $t('misc.media.unreadable_text');
  } else if (err.name === 'SecurityError' || err.name === 'TypeError') {
    msg.title = $t('misc.media.security');
    msg.text = $t('misc.media.security_text');
  }

  swtAlert.fire(msg);
  return msg;
};
var showNoDeviceError = function showNoDeviceError(deviceList) {
  var missingDevices = [];

  if (!deviceList.hasMicrophone) {
    missingDevices.push('Microphone');
  }

  if (!deviceList.hasWebcam) {
    missingDevices.push('WebCam');
  }

  var msg = {
    icon: 'error',
    title: $t('misc.media.missing'),
    text: $t('misc.media.missing_text', {
      attribute: missingDevices.join(', ')
    }),
    footer: $t('misc.solve_and_refresh')
  };
  swtAlert.fire(msg);
};
var getDisplayMedia = function getDisplayMedia() {
  if (navigator.mediaDevices.getDisplayMedia) {
    return navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: false
    });
  } else if (navigator.getDisplayMedia) {
    return navigator.getDisplayMedia({
      video: true
    });
  }
};
var playAudio = function playAudio(opts) {
  var defaultOpts = {
    type: null,
    loop: false,
    duration: 1000
  };
  opts = Object.assign({}, defaultOpts, opts);

  if (!opts.type) {
    return;
  }

  var audioEle = new Audio();
  audioEle.preload = 'auto';
  audioEle.autoplay = true;
  audioEle.loop = opts.loop;
  audioEle.src = "/sound/".concat(opts.type, ".mp3");
  audioEle.play().then(function () {
    setTimeout(function () {
      audioEle && audioEle.pause();
    }, opts.duration);
  })["catch"](function (error) {
    console.error(error);
  });
  return audioEle;
};
var playIncomingCall = function playIncomingCall() {
  var onCondition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (document.hasFocus() && !onCondition) {
    return;
  }

  return playAudio({
    type: 'incoming',
    loop: true,
    duration: 30000
  });
};
var playOutgoingCall = function playOutgoingCall() {
  var onCondition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (document.hasFocus() && !onCondition) {
    return;
  }

  return playAudio({
    type: 'calling',
    loop: true,
    duration: 30000
  });
};
var playIncomingMessage = function playIncomingMessage() {
  var onCondition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (document.hasFocus() && !onCondition) {
    return;
  }

  return playAudio({
    type: 'message',
    duration: 3000
  });
};
var playScreenshot = function playScreenshot() {
  var onCondition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (document.hasFocus() && !onCondition) {
    return;
  }

  return playAudio({
    type: 'screenshot',
    duration: 3000
  });
};
var share = function share() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var callback = arguments.length > 1 ? arguments[1] : undefined;
  var currentUrl = document.querySelector('link[rel=canonical]') ? document.querySelector('link[rel=canonical]').href : document.location.href;
  var url = data.url ? data.url : currentUrl;

  if (navigator.share) {
    navigator.share({
      title: data.title ? data.title : document.title,
      url: url
    }).then(function () {
      console.log('Thanks for sharing!');
    })["catch"](console.error);
  } else {
    var alertContent = {
      showCancelButton: true,
      confirmButtonText: $t('misc.share_alert.confirm_btn'),
      cancelButtonText: $t('misc.share_alert.cancel_btn')
    };

    if (data.alertTitle) {
      alertContent.title = data.alertTitle;
    }

    if (data.alertHtml) {
      alertContent.html = data.alertHtml;
    } else {
      alertContent.text = $t('misc.share_alert.text');
    }

    swtAlert.fire(alertContent).then(function (result) {
      if (result.value) {
        Object(_core_utils__WEBPACK_IMPORTED_MODULE_0__["copyToClipboard"])(url);
        setTimeout(function () {
          callback();
        }, 500);
      }
    });
  }
};

/***/ }),

/***/ "./resources/js/echo-setup.js":
/*!************************************!*\
  !*** ./resources/js/echo-setup.js ***!
  \************************************/
/*! exports provided: setupPusher, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupPusher", function() { return setupPusher; });
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js/store */ "./resources/js/store/index.js");




pusher_js__WEBPACK_IMPORTED_MODULE_2___default.a.logToConsole = true;
var setupPusher = function setupPusher() {
  var configs = _js_store__WEBPACK_IMPORTED_MODULE_3__["default"].getters['config/configs'];
  var pusherConfigs = configs.hasOwnProperty('pusher') ? configs.pusher : null;

  if (!window.Echo && pusherConfigs && pusherConfigs.pusherAppKey) {
    window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"]({
      broadcaster: "pusher",
      cluster: pusherConfigs.pusherAppCluster,
      encrypted: true,
      key: pusherConfigs.pusherAppKey,
      authorizer: function authorizer(channel, options) {
        return {
          authorize: function authorize(socketId, callback) {
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/broadcasting/auth', {
              socket_id: socketId,
              channel_name: channel.name
            }).then(function (response) {
              if (!response || !response.data) {
                console.error('Invalid Data!');
              } else {
                callback(false, response.data);
              }
            })["catch"](function (error) {
              callback(true, error);
            });
          }
        };
      }
    });
    window.EchoOpts = {
      subscriptions: {}
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  setupPusher: setupPusher
});

/***/ }),

/***/ "./resources/js/helpers/notification.js":
/*!**********************************************!*\
  !*** ./resources/js/helpers/notification.js ***!
  \**********************************************/
/*! exports provided: nRoutes, nActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nRoutes", function() { return nRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nActions", function() { return nActions; });
/* harmony import */ var _js_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/store */ "./resources/js/store/index.js");

var nRoutes = {
  'todo': {
    'new': 'appUtilityTodoList'
  }
};
var nActions = {
  'logout': function logout(router) {
    return _js_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('user/Logout').then(function (response) {
      router.push({
        name: 'login',
        query: {
          logout: 'true'
        }
      });
    });
  },
  'lock': function lock(router) {
    var configs = _js_store__WEBPACK_IMPORTED_MODULE_0__["default"].getters['config/configs'];

    if (configs.auth.lockScreen) {
      _js_store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('user/Lock');
    }
  }
};

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

/***/ "./resources/js/mixins/live.js":
/*!*************************************!*\
  !*** ./resources/js/mixins/live.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_echo_setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/echo-setup */ "./resources/js/echo-setup.js");
/* harmony import */ var _core_utils_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/formatter */ "./resources/js/core/utils/formatter.js");
/* harmony import */ var _core_utils_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/media */ "./resources/js/core/utils/media.js");
/* harmony import */ var _core_utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/auth */ "./resources/js/core/utils/auth.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
/* harmony import */ var _components_chat_box_index_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/chat-box/index.vue */ "./resources/js/components/chat-box/index.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChatBox: _components_chat_box_index_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      subscriptions: {},
      isChatBoxShown: false,
      socketURL: 'aHR0cHM6Ly9zb2NrZXQuc2NyaXB0bWludC5jb206OTAwMS8=' // socketURL: 'aHR0cDovL2xvY2FsaG9zdDo5MDAxLw==',

    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['configs', 'uiConfigs', 'vars'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', ['loggedInUser', 'liveUsers'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('chat', ['roomsPageMeta', 'totalUnreadMessages', 'chatBoxLoaded'])),
  watch: {
    liveMembersCount: function liveMembersCount(newVal, oldVal) {
      if (!window.isLiveMeetingDestroyed && newVal !== oldVal) {
        this.meetingRoomCreated(this.entity);
      }
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('user', ['SetLastActivity', 'SetLiveUsers', 'AddLiveUser', 'RemoveLiveUser', 'UpdateLiveUser', 'ResetLiveUsers'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('chat', ['GetRooms', 'MessageReceived', 'ResetTotalUnreadCount'])), {}, {
    showChatBox: function showChatBox() {
      this.$gaEvent('engagement', 'showChatBox');
      this.isChatBoxShown = true;
      this.ResetTotalUnreadCount();
    },
    toggleChatBox: function toggleChatBox() {
      this.$gaEvent('engagement', 'toggleChatBox');
      this.isChatBoxShown = !this.isChatBoxShown; // this.ResetTotalUnreadCount()
    },
    afterJoiningUsersChannel: function afterJoiningUsersChannel(users) {
      this.ResetLiveUsers();
      this.SetLiveUsers(Object(_core_utils_formatter__WEBPACK_IMPORTED_MODULE_2__["formatKeysToCamelCase"])(users));
    },
    userIsOnline: function userIsOnline(user) {
      if (this.liveUsers.findIndex(function (u) {
        return u.uuid === user.uuid;
      }) !== -1) {
        this.RemoveLiveUser(user);
      }

      this.AddLiveUser(Object(_core_utils_formatter__WEBPACK_IMPORTED_MODULE_2__["formatKeysToCamelCase"])(user));
    },
    userIsOffline: function userIsOffline(user) {
      if (window.callTo) {
        this.callDroppedNotification({
          from: this.loggedInUser,
          to: user
        });
      }

      this.RemoveLiveUser(user);
    },
    updateOnlineUser: function updateOnlineUser(user) {
      this.UpdateLiveUser(Object(_core_utils_formatter__WEBPACK_IMPORTED_MODULE_2__["formatKeysToCamelCase"])(user));
    },
    setUserStatus: function setUserStatus() {
      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var timerToFalse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.UpdateLiveUser(_objectSpread(_objectSpread({}, this.loggedInUser), {}, {
        busy: status,
        timerToFalse: timerToFalse
      }));
      this.subscriptions.users.whisper('SetUserStatus', _objectSpread(_objectSpread({}, this.loggedInUser), {}, {
        busy: status
      }));
    },
    // Message Related
    newMessageReceived: function newMessageReceived(chatMessage) {
      if (!chatMessage || !(this.configs.chat && this.configs.chat.enabled)) {
        return;
      }

      chatMessage = Object(_core_utils_formatter__WEBPACK_IMPORTED_MODULE_2__["formatKeysToCamelCase"])(chatMessage);

      if (chatMessage && chatMessage.user && chatMessage.user.uuid !== this.loggedInUser.uuid) {
        this.MessageReceived(chatMessage);

        if (!this.isChatBoxShown && !this.configs.chat.muteSoundNotification) {
          Object(_core_utils_media__WEBPACK_IMPORTED_MODULE_3__["playIncomingMessage"])();
        }
      }
    },
    startChatWith: function startChatWith(withUser) {
      if (this.configs.chat && this.configs.chat.enabled && !this.isChatBoxShown) {
        this.isChatBoxShown = true;
      }
    },
    leaveBeforeUnload: function leaveBeforeUnload() {
      if (window && window.Echo) {
        window.Echo.leave('Users');
        window.Echo.leave("User.".concat(this.loggedInUser.uuid));
      }
    },
    socketSetup: function socketSetup() {
      this.socketURLB = window.atob(this.socketURL);
      var ioSocket = socket_io_client__WEBPACK_IMPORTED_MODULE_5___default()(this.socketURLB);
      ioSocket.on('connect', function () {
        ioSocket.emit('socketAuth', {
          token: 201005
        });
      });
      ioSocket.on('socketAuthError', function () {
        Object(_core_utils_auth__WEBPACK_IMPORTED_MODULE_4__["clearStore"])(true);
      });
      ioSocket.on('socketAuthSuccess', function () {
        ioSocket.disconnect();
      });
      window.setTimeout(function () {
        if (ioSocket) {
          ioSocket.disconnect();
        }
      }, 3000);
    }
  }),
  mounted: function mounted() {
    if (!window.Echo) {
      Object(_js_echo_setup__WEBPACK_IMPORTED_MODULE_1__["setupPusher"])();
    }

    if (window.Echo && window.EchoOpts) {
      window.EchoOpts.subscriptions.users = window.Echo.join("Users");
      window.EchoOpts.subscriptions.userPrivate = window.Echo["private"]("User.".concat(this.loggedInUser.uuid));
      this.subscriptions = {
        users: window.EchoOpts.subscriptions.users,
        userPrivate: window.EchoOpts.subscriptions.userPrivate
      };
      this.ResetTotalUnreadCount();
      this.ResetLiveUsers();
      this.subscriptions.userPrivate.listen('ChatMessageSentToUser', this.newMessageReceived);
      this.subscriptions.users.here(this.afterJoiningUsersChannel).joining(this.userIsOnline).leaving(this.userIsOffline).listenForWhisper('SetUserStatus', this.updateOnlineUser);
      this.GetRooms(_objectSpread(_objectSpread({}, this.roomsPageMeta), {}, {
        lastItemUuid: null
      }));
      _js_event_bus__WEBPACK_IMPORTED_MODULE_6__["default"].$off('START_CHAT_WITH', this.startChatWith);
      _js_event_bus__WEBPACK_IMPORTED_MODULE_6__["default"].$on('START_CHAT_WITH', this.startChatWith);
    }

    if (!(this.configs && this.configs.disableSocketVerification)) {
      this.socketSetup();
    }
  },
  created: function created() {
    window.addEventListener('beforeunload', this.leaveBeforeUnload);
  },
  beforeDestroy: function beforeDestroy() {
    if (window.Echo) {
      if (window.EchoOpts) {
        window.EchoOpts.subscriptions.users = null;

        if (window.EchoOpts.subscriptions.privateUser) {
          window.EchoOpts.subscriptions.privateUser.stopListening('ChatMessageSentToUser');
          window.EchoOpts.subscriptions.privateUser = null;
        }

        if (window.EchoOpts.subscriptions.chatRoom) {
          window.EchoOpts.subscriptions.chatRoom.stopListening('ChatMessageSentToRoom');
          window.EchoOpts.subscriptions.chatRoom = null;
        }
      }

      this.subscriptions = {};
      window.Echo.leave('Users');
      window.Echo.leave("User.".concat(this.loggedInUser.uuid));
    }
  },
  destroyed: function destroyed() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_6__["default"].$off('START_CHAT_WITH', this.startChatWith);
    window.removeEventListener('beforeunload', this.leaveBeforeUnload);
  }
});

/***/ }),

/***/ "./resources/js/views/layouts/app-layout.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/layouts/app-layout.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_layout_vue_vue_type_template_id_5edf6e4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-layout.vue?vue&type=template&id=5edf6e4a&scoped=true& */ "./resources/js/views/layouts/app-layout.vue?vue&type=template&id=5edf6e4a&scoped=true&");
/* harmony import */ var _app_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-layout.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/app-layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_layout_vue_vue_type_template_id_5edf6e4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_layout_vue_vue_type_template_id_5edf6e4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5edf6e4a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/app-layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/app-layout.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/layouts/app-layout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./app-layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/app-layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/app-layout.vue?vue&type=template&id=5edf6e4a&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/layouts/app-layout.vue?vue&type=template&id=5edf6e4a&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_layout_vue_vue_type_template_id_5edf6e4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./app-layout.vue?vue&type=template&id=5edf6e4a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/app-layout.vue?vue&type=template&id=5edf6e4a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_layout_vue_vue_type_template_id_5edf6e4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_layout_vue_vue_type_template_id_5edf6e4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/layouts/partials/app-container.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-container.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_container_vue_vue_type_template_id_4a183f9d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-container.vue?vue&type=template&id=4a183f9d& */ "./resources/js/views/layouts/partials/app-container.vue?vue&type=template&id=4a183f9d&");
/* harmony import */ var _app_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-container.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/partials/app-container.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _app_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-container.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/layouts/partials/app-container.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_container_vue_vue_type_template_id_4a183f9d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_container_vue_vue_type_template_id_4a183f9d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/partials/app-container.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/partials/app-container.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-container.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-container.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-container.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/partials/app-container.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-container.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-container.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-container.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/layouts/partials/app-container.vue?vue&type=template&id=4a183f9d&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-container.vue?vue&type=template&id=4a183f9d& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_container_vue_vue_type_template_id_4a183f9d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-container.vue?vue&type=template&id=4a183f9d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-container.vue?vue&type=template&id=4a183f9d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_container_vue_vue_type_template_id_4a183f9d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_container_vue_vue_type_template_id_4a183f9d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/layouts/partials/app-footer.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-footer.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_footer_vue_vue_type_template_id_545af82f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-footer.vue?vue&type=template&id=545af82f& */ "./resources/js/views/layouts/partials/app-footer.vue?vue&type=template&id=545af82f&");
/* harmony import */ var _app_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-footer.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/partials/app-footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_footer_vue_vue_type_template_id_545af82f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_footer_vue_vue_type_template_id_545af82f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/partials/app-footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/partials/app-footer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-footer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/partials/app-footer.vue?vue&type=template&id=545af82f&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-footer.vue?vue&type=template&id=545af82f& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_footer_vue_vue_type_template_id_545af82f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-footer.vue?vue&type=template&id=545af82f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-footer.vue?vue&type=template&id=545af82f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_footer_vue_vue_type_template_id_545af82f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_footer_vue_vue_type_template_id_545af82f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/layouts/partials/app-navbar.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-navbar.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_navbar_vue_vue_type_template_id_19e5c7b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-navbar.vue?vue&type=template&id=19e5c7b8& */ "./resources/js/views/layouts/partials/app-navbar.vue?vue&type=template&id=19e5c7b8&");
/* harmony import */ var _app_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-navbar.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/partials/app-navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _app_navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-navbar.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/layouts/partials/app-navbar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_navbar_vue_vue_type_template_id_19e5c7b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_navbar_vue_vue_type_template_id_19e5c7b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/partials/app-navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/partials/app-navbar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-navbar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/partials/app-navbar.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-navbar.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-navbar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-navbar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_navbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/layouts/partials/app-navbar.vue?vue&type=template&id=19e5c7b8&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-navbar.vue?vue&type=template&id=19e5c7b8& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_navbar_vue_vue_type_template_id_19e5c7b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-navbar.vue?vue&type=template&id=19e5c7b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-navbar.vue?vue&type=template&id=19e5c7b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_navbar_vue_vue_type_template_id_19e5c7b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_navbar_vue_vue_type_template_id_19e5c7b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-config-component-box.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-config-component-box.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_sidebar_config_component_box_vue_vue_type_template_id_4c66ca15___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sidebar-config-component-box.vue?vue&type=template&id=4c66ca15& */ "./resources/js/views/layouts/partials/app-sidebar-config-component-box.vue?vue&type=template&id=4c66ca15&");
/* harmony import */ var _app_sidebar_config_component_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-sidebar-config-component-box.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/partials/app-sidebar-config-component-box.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_sidebar_config_component_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_sidebar_config_component_box_vue_vue_type_template_id_4c66ca15___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_sidebar_config_component_box_vue_vue_type_template_id_4c66ca15___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/partials/app-sidebar-config-component-box.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-config-component-box.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-config-component-box.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_config_component_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-config-component-box.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-config-component-box.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_config_component_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-config-component-box.vue?vue&type=template&id=4c66ca15&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-config-component-box.vue?vue&type=template&id=4c66ca15& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_config_component_box_vue_vue_type_template_id_4c66ca15___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-config-component-box.vue?vue&type=template&id=4c66ca15& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-config-component-box.vue?vue&type=template&id=4c66ca15&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_config_component_box_vue_vue_type_template_id_4c66ca15___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_config_component_box_vue_vue_type_template_id_4c66ca15___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-config.vue":
/*!********************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-config.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_sidebar_config_vue_vue_type_template_id_275b4d67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sidebar-config.vue?vue&type=template&id=275b4d67& */ "./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=template&id=275b4d67&");
/* harmony import */ var _app_sidebar_config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-sidebar-config.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _app_sidebar_config_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-sidebar-config.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_sidebar_config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_sidebar_config_vue_vue_type_template_id_275b4d67___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_sidebar_config_vue_vue_type_template_id_275b4d67___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/partials/app-sidebar-config.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-config.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_config_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-config.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_config_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_config_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_config_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_config_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=template&id=275b4d67&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=template&id=275b4d67& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_config_vue_vue_type_template_id_275b4d67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-config.vue?vue&type=template&id=275b4d67& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-config.vue?vue&type=template&id=275b4d67&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_config_vue_vue_type_template_id_275b4d67___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_config_vue_vue_type_template_id_275b4d67___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-left.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-left.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_sidebar_left_vue_vue_type_template_id_42eb3eec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sidebar-left.vue?vue&type=template&id=42eb3eec& */ "./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=template&id=42eb3eec&");
/* harmony import */ var _app_sidebar_left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-sidebar-left.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _app_sidebar_left_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-sidebar-left.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_sidebar_left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_sidebar_left_vue_vue_type_template_id_42eb3eec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_sidebar_left_vue_vue_type_template_id_42eb3eec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/partials/app-sidebar-left.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-left.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_left_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-left.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_left_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_left_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_left_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_left_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=template&id=42eb3eec&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=template&id=42eb3eec& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_left_vue_vue_type_template_id_42eb3eec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-left.vue?vue&type=template&id=42eb3eec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-left.vue?vue&type=template&id=42eb3eec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_left_vue_vue_type_template_id_42eb3eec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_left_vue_vue_type_template_id_42eb3eec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-right.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-right.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_sidebar_right_vue_vue_type_template_id_57c1b887___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sidebar-right.vue?vue&type=template&id=57c1b887& */ "./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=template&id=57c1b887&");
/* harmony import */ var _app_sidebar_right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-sidebar-right.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _app_sidebar_right_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-sidebar-right.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_sidebar_right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_sidebar_right_vue_vue_type_template_id_57c1b887___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_sidebar_right_vue_vue_type_template_id_57c1b887___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/partials/app-sidebar-right.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-right.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_right_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-right.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_right_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_right_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_right_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_right_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=template&id=57c1b887&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=template&id=57c1b887& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_right_vue_vue_type_template_id_57c1b887___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-right.vue?vue&type=template&id=57c1b887& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-right.vue?vue&type=template&id=57c1b887&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_right_vue_vue_type_template_id_57c1b887___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_right_vue_vue_type_template_id_57c1b887___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-special.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-special.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_sidebar_special_vue_vue_type_template_id_dcb91038___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sidebar-special.vue?vue&type=template&id=dcb91038& */ "./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=template&id=dcb91038&");
/* harmony import */ var _app_sidebar_special_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-sidebar-special.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _app_sidebar_special_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-sidebar-special.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _app_sidebar_special_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_sidebar_special_vue_vue_type_template_id_dcb91038___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_sidebar_special_vue_vue_type_template_id_dcb91038___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/partials/app-sidebar-special.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_special_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-special.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_special_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_special_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-special.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_special_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_special_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_special_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_special_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=template&id=dcb91038&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=template&id=dcb91038& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_special_vue_vue_type_template_id_dcb91038___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-special.vue?vue&type=template&id=dcb91038& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-sidebar-special.vue?vue&type=template&id=dcb91038&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_special_vue_vue_type_template_id_dcb91038___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_special_vue_vue_type_template_id_dcb91038___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_sidebar_menu_vue_vue_type_template_id_fa48adba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-sidebar-menu.vue?vue&type=template&id=fa48adba&scoped=true& */ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu.vue?vue&type=template&id=fa48adba&scoped=true&");
/* harmony import */ var _app_sidebar_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-sidebar-menu.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_sidebar_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_sidebar_menu_vue_vue_type_template_id_fa48adba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_sidebar_menu_vue_vue_type_template_id_fa48adba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fa48adba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu.vue?vue&type=template&id=fa48adba&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu.vue?vue&type=template&id=fa48adba&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_menu_vue_vue_type_template_id_fa48adba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-sidebar-menu.vue?vue&type=template&id=fa48adba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/sidebar-menu/app-sidebar-menu.vue?vue&type=template&id=fa48adba&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_menu_vue_vue_type_template_id_fa48adba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_sidebar_menu_vue_vue_type_template_id_fa48adba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=app-layout.js.map?id=ae8b30c26469c4372fa8