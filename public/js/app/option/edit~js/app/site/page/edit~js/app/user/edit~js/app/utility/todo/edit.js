(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{LF47:function(t,e,i){"use strict";var n=i("BcCH"),o=i("L2JU");function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e.a={data:function(){return{isLoading:!0,isFetching:!0,uuid:null,subUuid:null,entity:null,duplicate:!1,duplicateRoute:null,fallBackRoute:"appDashboard",initUrl:"",initSubUrl:null}},computed:{},watch:{},methods:a(a({},Object(o.b)("common",["Init","InitSub","Get"])),{},{getInitialData:function(){var t=this;this.isLoading=!0,this.Get(this.uuid).then((function(e){t.entity=e,t.isLoading=!1,t.isFetching=!1})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e),t.$router.push({name:t.fallBackRoute})}))}}),mounted:function(){this.$route.params.uuid&&(this.uuid=this.$route.params.uuid),this.$route.params.subUuid&&(this.subUuid=this.$route.params.subUuid),this.duplicateRoute&&this.$route.name===this.duplicateRoute&&(this.duplicate=!0),this.Init({url:this.initUrl}),this.initSubUrl&&this.InitSub({url:(this.subUuid?this.subUuid+"/":"")+this.initSubUrl}),this.getInitialData()},beforeRouteEnter:function(t,e,i){t.params.uuid?i():i({name:this.fallBackRoute})},beforeRouteLeave:function(t,e,i){n.a.$emit("ROUTE_LEAVING",i)}}},"TBq+":function(t,e,i){"use strict";i.d(e,"i",(function(){return c})),i.d(e,"a",(function(){return f})),i.d(e,"g",(function(){return p})),i.d(e,"h",(function(){return m})),i.d(e,"j",(function(){return D})),i.d(e,"c",(function(){return E})),i.d(e,"k",(function(){return T})),i.d(e,"e",(function(){return j})),i.d(e,"f",(function(){return w})),i.d(e,"d",(function(){return F})),i.d(e,"b",(function(){return P}));i("nFxi");function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var s=function(t){var e=t.label,i=t.icon,n=t.tooltip,o=t.design,r=void 0===o?{color:"white",size:"md"}:o;return{label:e,icon:i,tooltip:n,design:r&&r.color||"white",size:r&&r.size||"md"}},c=function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{};return a(a({},s({label:t,icon:e,tooltip:n,design:o})),{},{action:function(t){t.push({name:i,params:r,query:u})}})},l=function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return a(a({},s({label:t,icon:e,tooltip:n,design:o})),{},{action:i})},d=function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return l(t,e,(function(t,e){e.$emit(i.event,i.options)}),n,o)},f=function(t,e){return function(t,e,i,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{},s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:{};return a(a({},c(t,e,i,o,r,u,s)),{},{permissions:[n]})}($t("general.add_new"),"fas fa-plus",t,e)},p=function(){return d($t("general.filter"),"fas fa-filter",{event:"TOGGLE_FILTER"})},h={storeName:"common",design:"white"},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return a(a(a({},h),t),{},{options:[{label:$t("general.default"),dispatch:{sortBy:"created_at"}}].concat(n(e))})},g=function(t){return{label:t.label,icon:t.icon}},b=function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return a(a({},g({label:t,icon:e})),{},{to:{name:i,params:n,query:o}})},v=function(t,e,i,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return a(a({},b(t,e,i,o,r)),{},{permissions:[n]})},O=function(t,e,i){return a(a({},g({label:t,icon:e})),{},{action:i})},y=function(t,e,i){return O(t,e,(function(t,e){e.$emit(i.event,i.options)}))},D=function(t,e){return v($t("general.import"),"fas fa-file-import",t,e)},E=function(t,e){return v($t("general.config"),"fas fa-cog",t,e)},T=function(){return y($t("general.print"),"fas fa-print",{event:"EXPORT",options:{type:"print"}})},j=function(){return y($t("general.export_pdf"),"fas fa-file-pdf",{event:"EXPORT",options:{type:"pdf"}})},w=function(){return y($t("general.export_xls"),"fas fa-file-excel",{event:"EXPORT",options:{type:"xls"}})},F=function(){return y($t("general.export_csv"),"fas fa-file-csv",{event:"EXPORT",options:{type:"csv"}})},R={key_p:{type:"event",emit:"EXPORT",payload:{type:"print"}}},A={key_e:{type:"event",emit:"EXPORT",payload:{type:"pdf"}}},P=a(a(a({},{key_f:{type:"event",emit:"TOGGLE_FILTER"}}),R),A)},"g+26":function(t,e,i){"use strict";var n=i("o0o1"),o=i.n(n),r=i("TBq+"),a=i("OjY7"),u=i("V0LQ"),s=i("wd/R"),c=i.n(s),l={DAY_OF_MONTH:{code:"%DAY_OF_MONTH%",example:"Ex. 1-31",outputFormat:"moment",output:"DD"},DAY_OF_YEAR:{code:"%DAY_OF_YEAR%",example:"Ex. 1-365",outputFormat:"moment",output:"DDDD"},YEAR:{code:"%YEAR%",example:"Ex. 2020",outputFormat:"moment",output:"YYYY"},YEAR_SHORT:{code:"%YEAR_SHORT%",example:"Ex. 20",outputFormat:"moment",output:"YY"},MONTH:{code:"%MONTH%",example:"Ex. JANUARY",outputFormat:"moment",output:"MMMM"},MONTH_SHORT:{code:"%MONTH_SHORT%",example:"Ex. JAN",outputFormat:"moment",output:"MMM"},MONTH_NUMBER:{code:"%MONTH_NUMBER%",example:"Ex. 1 - 12",outputFormat:"moment",output:"MM"},DAY:{code:"%DAY%",example:"Ex. MONDAY",outputFormat:"moment",output:"dddd"},DAY_SHORT:{code:"%DAY_SHORT%",example:"Ex. MON",outputFormat:"moment",output:"ddd"},DAY_NUMBER:{code:"%DAY_NUMBER%",example:"Ex. 1 - 7",outputFormat:"moment",output:"E"},DATE:{code:"%DATE%",example:"Ex. 31-08-1987",outputFormat:"moment",output:"YYYY"},TIME:{code:"%DATE%",example:"Ex. 23:59",outputFormat:"moment",output:"mm"}},d=/%(.*?)%/g;function f(t){t.match(d);return l.objForEach((function(e,i){var n=new RegExp(e.code,"g");if("moment"===e.outputFormat){var o=c()().format(e.output);t=t.replace(n,o)}})),t}var p=i("L2JU"),h=i("BcCH"),m=i("/MoV");function g(t,e,i,n,o,r,a){try{var u=t[r](a),s=u.value}catch(t){return void i(t)}u.done?e(s):Promise.resolve(s).then(n,o)}function b(t){return function(){var e=this,i=arguments;return new Promise((function(n,o){var r=t.apply(e,i);function a(t){g(r,n,o,a,u,"next",t)}function u(t){g(r,n,o,a,u,"throw",t)}a(void 0)}))}}function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function O(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(Object(i),!0).forEach((function(e){y(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function y(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e.a={components:{FileUploader:a.a},props:{editData:{type:Object},isFetching:{type:Boolean,default:!1},duplicate:{type:Boolean,default:!1}},data:function(){return{uuid:null,subUuid:null,formData:{},formErrors:{},formLabels:{},customFilters:{},initianLength:0,initialFormData:null,emptyFormData:null,preRequisite:{},keepAdding:!1,keepAddingOption:"clear_all",keepAddingSelectedFields:null,keepAddingFields:[],isLoading:!0,getInitialDataCalled:!1,doInitBeforeGetInitialData:!1,initUrl:"",initSubUrl:null,dateTimeFields:null,dataType:null,uploaderConfig:{module:"",token:"",allowedExtensions:"",maxNoOfFiles:5,uuid:uuid()},headerButtons:null}},computed:O(O(O({},Object(p.c)("config",["configs","vars"])),Object(p.c)("user",["hasPermission"])),{},{showKeepAdding:function(){return!this.editData||this.duplicate},codePrefix:function(){return this.formData.codePrefix},lastCodeObj:function(){var t=this;return this.preRequisite.codes.find((function(e){return e.codePrefix===t.formData.codePrefix}))}}),watch:{editData:function(t){var e=this;if(t){var i=t;this.dateTimeFields&&Array.isArray(this.dateTimeFields)&&this.dateTimeFields.forEach((function(t){i[t]&&(i[t]=m.e(i[t],e.vars.serverDateTimeFormat))})),this.timeFields&&Array.isArray(this.timeFields)&&this.timeFields.forEach((function(t){Array.isArray(t)?i[t[0]]&&(i[t[0]]=m.g([i[t[0]],i[t[1]]],e.vars.serverTimeFormat,null)):i[t]&&(i[t]=m.g(i[t],e.vars.serverTimeFormat,null))})),this.formData=Object.assign({},this.formData,_.cloneDeep(i)),this.uuid=this.formData.uuid,this.uploaderConfig.token=this.formData.token,"function"==typeof this.addNewRow&&"function"==typeof this.addNewRowIfNone&&this.addNewRowIfNone(),this.initialFormData=_.cloneDeep(this.formData),"function"==typeof this.afterEditData&&this.afterEditData(),this.duplicate&&this.computeCodeNumber(this.formData.codePrefix)}},codePrefix:function(){this.computeCodeNumber()}},methods:O(O(O({},Object(p.b)("common",["Init","InitSub","Get","Store","Update","GetPreRequisite","Destroy","Custom"])),Object(p.b)("config",["SetUiConfig","SetConfig"])),{},{computeCodeNumber:function(){if(this.preRequisite.codes&&this.showKeepAdding){this.lastCodeObj;var t=this.configs[this.dataType].codeDigit;this.lastCodeObj?this.formData.codeNumber=this.numberPadding(this.lastCodeObj.codeNumber+1,t):this.formData.codeNumber=this.numberPadding(1,t)}},numberPadding:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0;return Object(u.d)(t,e||this.configs[this.dataType].codeDigit)},doNothing:function(){},submit:function(){var t=this;if(formUtil.isUnchanged(this.initialFormData,this.formData))return this.$toasted.info(this.$t("general.nothing_changed"),this.$toastConfig.info),!1;this.doInit(),this.doInitSub(),this.isLoading=!0,this.duplicate&&(this.formData.uuid=null),(this.formData.uuid?this.Update:this.Store)(this.formData).then((function(e){t.$toasted.success(e.message,t.$toastConfig),"function"==typeof t.afterSubmit?t.afterSubmit(e):t.keepAdding?(t.uploaderConfig.uuid=uuid(),t.formData=formUtil.clearFormConditionally(t.formData,t.initialFormData,t.keepAddingOption,t.keepAddingSelectedFields),t.getInitialDataCalled&&t.getInitialData()):(t.initialFormData=_.cloneDeep(t.formData),t.$router.back()),t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)}))},reset:function(){var t=this;formUtil.confirmAction().then((function(e){e.value&&(t.formData=Object.assign({},t.formData,_.cloneDeep(t.initialFormData)))}))},unsavedCheck:function(t){formUtil.unsavedCheckAlert(this.initialFormData,this.formData,t)},fillPreRequisite:function(t){var e=this;this.preRequisite.objForEach((function(i,n){e.preRequisite[n]=t[n]||i}))},setUploaderConfig:function(t){var e=this;this.uploaderConfig.objForEach((function(i,n){e.uploaderConfig[n]=t[n]||i}))},getInitialData:function(t){var e=this;return b(o.a.mark((function i(){var n;return o.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return e.isLoading=!0,e.getInitialDataCalled=!0,i.prev=2,e.doInitBeforeGetInitialData&&e.doInit(),i.next=6,e.GetPreRequisite(e.customFilters);case 6:return n=i.sent,e.doInitBeforeGetInitialData&&e.doInitSub(),e.fillPreRequisite(n),n.uploadConfig&&e.setUploaderConfig(n.uploadConfig),"function"==typeof e.addNewRow&&"function"==typeof e.addNewRowIfNone&&e.$nextTick((function(){e.addNewRowIfNone()})),e.configs[e.dataType]&&e.$nextTick((function(){e.formData.codePrefix=f(e.configs[e.dataType].codePrefix)})),e.afterGetInitialData&&"function"==typeof e.afterGetInitialData&&e.afterGetInitialData(n),t&&e.$nextTick((function(){t(n)})),e.isLoading=!1,i.abrupt("return",n);case 18:throw i.prev=18,i.t0=i.catch(2),e.isLoading=!1,formUtil.handleErrors(i.t0),i.t0;case 23:case"end":return i.stop()}}),i,null,[[2,18]])})))()},getEntityData:function(){var t=this;this.isLoading=!0,this.Get(this.formData.uuid).then((function(e){t.formData.objForEach((function(i,n){t.formData[n]=e[n]||null})),t.initialFormData=_.cloneDeep(t.formData),t.isLoading=!1})).catch((function(e){t.isLoading=!1,formUtil.handleErrors(e)}))},addTag:function(t){var e={name:t,slug:formUtil.generateSlug(t)};this.preRequisite.tags.push(e),this.formData.tags.push(e)},newModalClose:function(t){var e=this;if(this.doInit(),this.doInitSub(),t){var i=function(){var i=function(i){t.push?e.formData[t.dataTypeArr].push(i):e.formData[t.dataType]=i};e.isLoading=!0,t.dataType&&(t.dontMatch?i(t):t.dataTypeArr&&t.propertyToMatch&&i(e.preRequisite[t.dataTypeArr].find((function(e){return e[t.propertyToMatch]===t[t.propertyToMatch]}))||null)),e.isLoading=!1};this.getInitialDataCalled?this.getInitialData(i):i()}},getHeaderOptions:function(){var t=[];this.headerButtons&&(t=t.concat(this.headerButtons));var e=[];return e.push(r.k()),e.push(r.e()),{hideLinks:this.hideHeaderLinks||!1,buttons:t,links:e,title:this.pageTitle||"",subTitle:this.pageTitle&&this.subTitle||""}},getKeyBindingOptions:function(){return O({},r.b)},applyPageHeader:function(){var t=Object.assign({},this.getHeaderOptions(),this.header||{}),e=Object.assign({},this.getKeyBindingOptions(),this.keyBindings||{});this.SetUiConfig({pageHeader:t}),this.SetConfig({keyBindings:e})},export:function(t){var e=this;return b(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.isLoading=!0,e.$printComponent("printable",{title:"Printing ".concat(e.dataTitle||"")}),e.isLoading=!1;case 3:case"end":return t.stop()}}),t)})))()},doInitSub:function(){this.initSubUrl&&this.InitSub({url:(this.subUuid?this.subUuid+"/":"")+this.initSubUrl})},doInit:function(){this.Init({url:this.initUrl})}}),mounted:function(){h.a.$off("ROUTE_LEAVING",this.unsavedCheck),h.a.$on("ROUTE_LEAVING",this.unsavedCheck),this.$route.params.subUuid&&(this.subUuid=this.$route.params.subUuid),this.doInit(),this.doInitSub(),this.uploaderConfig.token=this.formData.token,this.initialFormData=_.cloneDeep(this.formData)},created:function(){var t=this;this.formLabels&&this.formLabels.objForEach((function(e,i){t.keepAddingFields.push({uuid:i,value:e})}))},beforeDestroy:function(){delete this.formData,delete this.formErrors,delete this.formLabels,delete this.preRequisite,delete this.keepAddingFields},destroyed:function(){h.a.$off("ROUTE_LEAVING",this.unsavedCheck)}}}}]);
//# sourceMappingURL=edit.js.map?id=7e7eacad2fad81570682