<<<<<<< HEAD
!function(e){function t(n){if(o[n])return o[n].exports;var s=o[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./client/src/bundles/bundle.js")}({"./client/src/boot/index.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=o("./client/src/boot/registerComponents.js"),r=n(s),a=o("./client/src/boot/registerReducers.js"),i=n(a);window.document.addEventListener("DOMContentLoaded",function(){(0,r.default)(),(0,i.default)()})},"./client/src/boot/registerComponents.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(2),r=n(s),a=o("./client/src/components/HistoryViewer/HistoryViewer.js"),i=n(a),l=o("./client/src/components/HistoryViewer/SnapshotViewerContainer.js"),u=n(l),d=o("./client/src/components/HistoryViewer/HistoryViewerHeading.js"),c=n(d),p=o("./client/src/components/HistoryViewer/HistoryViewerToolbar.js"),h=n(p),m=o("./client/src/components/HistoryViewer/HistoryViewerVersion.js"),f=n(m),_=o("./client/src/components/HistoryViewer/HistoryViewerVersionDetail.js"),g=n(_),v=o("./client/src/components/HistoryViewer/HistoryViewerVersionList.js"),y=n(v),j=o("./client/src/components/HistoryViewer/HistoryViewerVersionState.js"),b=n(j),C=o("./client/src/components/HistoryViewer/HistoryViewerSnapshotState.js"),w=n(C),S=o("./client/src/components/HistoryViewer/HistoryViewerSnapshot.js"),x=n(S),E=o("./client/src/components/HistoryViewer/HistoryViewerCompareWarning.js"),P=n(E),O=o("./client/src/components/HistoryViewer/RollbackMutation.js"),M=n(O);t.default=function(){r.default.component.register("SnapshotViewer",i.default),r.default.component.register("SnapshotViewerContainer",u.default),r.default.component.register("SnapshotHistoryViewer",i.default),r.default.component.register("SnapshotRollbackMutation",M.default),r.default.component.registerMany({SnapshotHistoryViewerHeading:c.default,SnapshotHistoryViewerToolbar:h.default,SnapshotHistoryViewerVersion:f.default,SnapshotHistoryViewerVersionDetail:g.default,SnapshotHistoryViewerVersionList:y.default,SnapshotHistoryViewerVersionState:b.default,SnapshotHistoryViewerSnapshotState:w.default,SnapshotHistoryViewerSnapshot:x.default,SnapshotHistoryViewerCompareWarning:P.default},{force:!0})}},"./client/src/boot/registerReducers.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(2),r=n(s),a=o(5),i=o("./client/src/state/historyviewer/HistoryViewerReducer.js"),l=n(i),u=function(){r.default.reducer.register("versionedAdmin",(0,a.combineReducers)({historyViewer:l.default}),{force:!0})};t.default=u},"./client/src/bundles/bundle.js":function(e,t,o){"use strict";o("./node_modules/expose-loader/index.js?SnapshotsViewer!./client/src/components/HistoryViewer/HistoryViewer.js-exposed"),o("./node_modules/expose-loader/index.js?versionType!./client/src/types/versionType.js-exposed"),o("./client/src/legacy/ArchiveAdmin/ArchiveAdmin.js"),o("./client/src/legacy/HistoryViewer/HistoryViewerEntwine.js"),o("./client/src/boot/index.js")},"./client/src/components/HistoryViewer/HistoryViewer.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=e.versionedAdmin.historyViewer,o=t.currentPage,n=t.currentVersion,s=t.previewMode;return{page:o,currentVersion:n,compare:t.compare,previewMode:s,previewState:e.viewMode.activeState}}function l(e){return{onSelect:function(t){e((0,S.showVersion)(t)),e((0,S.clearMessages)())},onSetPage:function(t){e((0,S.setCurrentPage)(t))},onResize:function(t){e(A.enableOrDisableSplitMode(t))}}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=t.VERSION_MODE_DATE=t.VERSION_MODE_VERSION=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},d=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=o(0),p=n(c),h=o(5),m=o(4),f=o("./node_modules/griddle-react/modules/griddle.jsx.js"),_=n(f),g=o("./client/src/containers/HistoryViewer/HistoryViewerConfig.js"),v=n(g),y=o(3),j=n(y),b=o(2),C=o(9),w=n(C),S=o("./client/src/state/historyviewer/HistoryViewerActions.js"),x=o("./client/src/types/versionType.js"),E=o("./client/src/types/compareType.js"),P=o(6),O=n(P),M=o("./node_modules/react-resize-aware/dist/index.js"),R=n(M),V=o(11),A=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(V),T=o(1),N=n(T);t.VERSION_MODE_VERSION="VERSION",t.VERSION_MODE_DATE="DATE";var k=function(e){function t(e){s(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleSetPage=o.handleSetPage.bind(o),o.handleNextPage=o.handleNextPage.bind(o),o.handlePrevPage=o.handlePrevPage.bind(o),o}return a(t,e),d(t,[{key:"componentDidUpdate",value:function(e){var t=e.page,o=this.props,n=o.page,s=o.actions.versions;t!==n&&"function"==typeof s.goToPage&&s.goToPage(n)}},{key:"componentWillUnmount",value:function(){var e=this.props.onSelect;"function"==typeof e&&e(!1)}},{key:"getVersions",value:function(){var e=this.props.versions;return(e&&e.SnapshotHistory&&e.SnapshotHistory.edges?e.SnapshotHistory.edges:[]).map(function(t){var o=t.node;return u({},o,o.OriginVersion,{AbsoluteLink:o.IsFullVersion&&o.OriginVersion?o.OriginVersion.AbsoluteLink:e.AbsoluteLink,Version:o.IsFullVersion&&o.OriginVersion?o.OriginVersion.Version:o.BaseVersion})})}},{key:"getContainerClasses",value:function(){var e=this.props,t=e.compare,o=e.isInGridField;return(0,O.default)("history-viewer","fill-height",{"history-viewer__compare-mode":t,"history-viewer--no-margins":o&&!this.isListView()})}},{key:"getLatestVersion",value:function(){var e=this.props.currentVersion;if(e&&!0===e.LatestDraftVersion)return e;var t=this.getVersions().filter(function(e){return!0===e.LatestDraftVersion});return t.length?t[0]:null}},{key:"isListView",value:function(){var e=this.props,t=e.compare;return!e.currentVersion||!!t&&!(!t.versionFrom||t.versionTo)}},{key:"handleSetPage",value:function(e){var t=this.props.onSetPage;"function"==typeof t&&t(e+1)}},{key:"handleNextPage",value:function(){var e=this.props.page;this.handleSetPage(e)}},{key:"handlePrevPage",value:function(){var e=this.props.page,t=e-1;if(t<1)return void this.handleSetPage(t);this.handleSetPage(t-1)}},{key:"compareModeAvailable",value:function(){return this.getVersions().length>1}},{key:"renderVersionDetail",value:function(){var e=this,t=this.props,o=t.currentVersion,n=t.isPreviewable,s=t.recordId,r=t.recordClass,a=t.typeName,i=t.schemaUrl,l=t.VersionDetailComponent,u=t.compare,d=t.compare,c=d.versionFrom,h=void 0!==c&&c,m=d.versionTo,f=void 0!==m&&m,_=t.previewState,g={":id":s,":class":r,":date":"",":version":""};g[":date"]=o.LastEdited;var v={":id":s,":class":r,":from":h.Version||0,":to":f.Version||0},y=u?/:id|:class|:from|:to/g:/:id|:class|:version|:date/g,j=u?v:g,b=u?h:o,C=this.getLatestVersion(),w={isLatestVersion:!u&&C&&C.Version===b.Version,isPreviewable:n,recordId:s,typeName:a,schemaUrl:i.replace(y,function(e){return j[e]}),version:b,compare:u,compareModeAvailable:this.compareModeAvailable(),previewState:_};return p.default.createElement(R.default,{className:this.getContainerClasses(),onResize:function(t){var o=t.width;return e.props.onResize(o)}},p.default.createElement(l,w))}},{key:"renderPagination",value:function(){var e=this.props,t=e.limit,o=e.page,n=e.versions;if(!n)return null;var s=n.SnapshotHistory?n.SnapshotHistory.pageInfo.totalCount:0;if(s<=t)return null;var r={setPage:this.handleSetPage,maxPage:Math.ceil(s/t),next:this.handleNextPage,nextText:j.default._t("HistoryViewer.NEXT","Next"),previous:this.handlePrevPage,previousText:j.default._t("HistoryViewer.PREVIOUS","Previous"),currentPage:o-1,useGriddleStyles:!1};return p.default.createElement("div",{className:"griddle-footer"},p.default.createElement(_.default.GridPagination,r))}},{key:"renderComparisonSelectionList",value:function(){var e=this.props,t=e.compare.versionFrom,o=e.ListComponent;if(!t)return null;var n=(0,O.default)("history-viewer__table","history-viewer__table--comparison-selected");return p.default.createElement(o,{versions:[t],extraClass:n})}},{key:"renderVersionList",value:function(){var e=this.props,t=e.isInGridField,o=e.ListComponent,n=e.CompareWarningComponent,s=e.compare,r=e.compare.versionFrom;return p.default.createElement("div",{className:this.getContainerClasses()},p.default.createElement(n,null),p.default.createElement("div",{className:t?"":"panel panel--padded panel--scrollable"},this.renderComparisonSelectionList(),p.default.createElement(o,{versions:this.getVersions(),showHeader:!s||s&&!r,compareModeAvailable:this.compareModeAvailable()}),p.default.createElement("div",{className:"history-viewer__pagination"},this.renderPagination())))}},{key:"renderCompareMode",value:function(){var e=this.props.compare;return e&&e.versionFrom&&e.versionTo?this.renderVersionDetail():this.renderVersionList()}},{key:"render",value:function(){var e=this.props,t=e.loading,o=e.compare,n=e.previewMode;return t?p.default.createElement(w.default,null):this.compareModeAvailable()&&o?this.renderCompareMode():n?this.renderVersionDetail():this.renderVersionList()}}]),t}(c.Component);k.propTypes={contextKey:N.default.string,limit:N.default.number,ListComponent:N.default.oneOfType([N.default.node,N.default.func]).isRequired,offset:N.default.number,recordId:N.default.number.isRequired,recordClass:N.default.string.isRequired,typeName:N.default.string.isRequired,currentVersion:N.default.oneOfType([N.default.bool,x.versionType]),compare:E.compareType,isInGridField:N.default.bool,isPreviewable:N.default.bool,VersionDetailComponent:N.default.oneOfType([N.default.node,N.default.func]).isRequired,CompareWarningComponent:N.default.oneOfType([N.default.node,N.default.func]).isRequired,versions:N.default.shape({Versions:N.default.shape({pageInfo:N.default.shape({totalCount:N.default.number}),edges:N.default.arrayOf(N.default.shape({node:x.versionType}))})}),page:N.default.number,schemaUrl:N.default.string,previewState:N.default.oneOf(["edit","preview","split"]),actions:N.default.object,onSelect:N.default.func,onSetPage:N.default.func,onResize:N.default.func},k.defaultProps={compare:{},contextKey:"",currentVersion:!1,isInGridField:!1,isPreviewable:!1,typeName:"",schemaUrl:"",versions:{Versions:{pageInfo:{totalCount:0},edges:[]}}},t.Component=k,t.default=(0,h.compose)((0,m.connect)(i,l),v.default,(0,b.inject)(["SnapshotHistoryViewerVersionList","SnapshotHistoryViewerVersionDetail","SnapshotHistoryViewerCompareWarning"],function(e,t,o){return{ListComponent:e,VersionDetailComponent:t,CompareWarningComponent:o}},function(e){return"VersionedAdmin.HistoryViewer."+e.contextKey}))(k)},"./client/src/components/HistoryViewer/HistoryViewerCompareWarning.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{isCompare:!!e.versionedAdmin.historyViewer.compare}}function l(e){return{onDismissCompare:function(){e((0,g.setCompareMode)(!1))}}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),d=o(0),c=n(d),p=o(1),h=n(p),m=o(4),f=o(3),_=n(f),g=o("./client/src/state/historyviewer/HistoryViewerActions.js"),v=function(e){function t(e){s(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleDismissCompare=o.handleDismissCompare.bind(o),o}return a(t,e),u(t,[{key:"handleDismissCompare",value:function(){this.props.onDismissCompare()}},{key:"render",value:function(){return this.props.isCompare?c.default.createElement("div",{className:"history-viewer__compare-notice alert alert-info"},c.default.createElement("span",{className:"notice-message"},c.default.createElement("strong",null,_.default._t("HistoryViewer.COMPARE_MODE","Compare mode"),": "),_.default._t("HistoryViewer.SELECT_PROMPT","Select two versions")),c.default.createElement("button",{className:"btn dismiss-button font-icon-cancel",onClick:this.handleDismissCompare},_.default._t("HistoryViewer.EXIT","Exit"))):null}}]),t}(d.Component);v.propTypes={isCompare:h.default.bool.isRequired},t.default=(0,m.connect)(i,l)(v)},"./client/src/components/HistoryViewer/HistoryViewerHeading.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{compareModeSelected:!!e.versionedAdmin.historyViewer.compare}}function l(e){return{onCompareModeSelect:function(){e((0,f.setCompareMode)(!0))},onCompareModeUnselect:function(){e((0,f.setCompareMode)(!1))}}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),d=o(3),c=n(d),p=o(0),h=n(p),m=o(10),f=o("./client/src/state/historyviewer/HistoryViewerActions.js"),_=o(5),g=o(4),v=o(1),y=n(v),j=function(e){function t(e){s(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.toggle=o.toggle.bind(o),o.handleCompareModeChange=o.handleCompareModeChange.bind(o),o.state={dropdownOpen:!1},o}return a(t,e),u(t,[{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"handleCompareModeChange",value:function(){var e=this.props,t=e.compareModeSelected,o=e.onCompareModeUnselect,n=e.onCompareModeSelect;t?o():n()}},{key:"renderDropdown",value:function(){var e=this.props,t=e.compareModeAvailable,o=e.compareModeSelected,n=this.state.dropdownOpen;return t?h.default.createElement(m.Dropdown,{isOpen:n,toggle:this.toggle,className:"history-viewer__actions-dropdown"},h.default.createElement(m.DropdownToggle,{className:"font-icon-sliders"}),h.default.createElement(m.DropdownMenu,{right:!0},h.default.createElement("div",{className:"form-check"},h.default.createElement("input",{id:"history-viewer-compare-two",type:"checkbox",className:"no-change-track history-viewer-heading__compare-mode-checkbox",checked:o,onChange:this.handleCompareModeChange}),h.default.createElement("label",{className:"form-check-label",htmlFor:"history-viewer-compare-two"},c.default._t("HistoryViewerHeading.COMPARE_VERSIONS","Compare two versions"))))):null}},{key:"render",value:function(){return h.default.createElement("li",{className:"history-viewer__heading",role:"row"},h.default.createElement("span",{className:"history-viewer__version-state",role:"columnheader"},c.default._t("HistoryViewer.Date","Date")),h.default.createElement("span",{className:"history-viewer__message",role:"columnheader"},c.default._t("HistoryViewer.Activity","Activity")),h.default.createElement("span",{className:"history-viewer__author",role:"columnheader"},c.default._t("HistoryViewer.Author","Author")),h.default.createElement("span",{className:"history-viewer__actions",role:"columnheader"},this.renderDropdown()))}}]),t}(p.Component);j.propTypes={compareModeAvailable:y.default.bool,compareModeSelected:y.default.bool,onCompareModeSelect:y.default.func,onCompareModeUnselect:y.default.func},j.defaultProps={compareModeAvailable:!0},t.Component=j,t.default=(0,_.compose)((0,g.connect)(i,l))(j)},"./client/src/components/HistoryViewer/HistoryViewerSnapshot.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{onSelect:function(t){var o=t.IsFullVersion?v.showVersion:v.showDate;e(o(t)),e((0,v.clearMessages)())}}}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(0),d=n(u),c=o(1),p=n(c),h=o(2),m=o(3),f=n(m),_=o(5),g=o(4),v=o("./client/src/state/historyviewer/HistoryViewerActions.js"),y=o(6),j=n(y),b=o("./client/src/types/versionType.js"),C=o("./client/src/helpers/getDateFromVersion.js"),w=n(C),S=function(e){function t(e){s(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleClick=o.handleClick.bind(o),o.handleKeyUp=o.handleKeyUp.bind(o),o.handleClose=o.handleClose.bind(o),o}return a(t,e),l(t,[{key:"getClassNames",value:function(){var e=this.props,t=e.extraClass,o=e.initial,n=e.isComparing,s=e.isActive,r={"history-viewer__row":!0,"history-viewer__snapshot":!0,"history-viewer__row--current":s,"history-viewer__snapshot--initial":o,"history-viewer__snapshot--muted":n};return(0,j.default)(r,t)}},{key:"handleClick",value:function(){var e=this.props,t=e.onSelect,o=e.version;return!e.isActive&&(t(o),!1)}},{key:"handleClose",value:function(e){return e.stopPropagation(),this.props.onSelect(!1),!1}},{key:"handleKeyUp",value:function(e){13===e.keyCode&&this.handleClick()}},{key:"render",value:function(){var e=this.props,t=e.version,o=e.StateComponent,n=e.FormActionComponent,s=e.isComparing,r=e.isActive,a=t.Author,i=a.FirstName,l=a.Surname,u=(i||"")+" "+(l||""),c=f.default._t("HistoryViewerSnapshot.GO_TO_SNAPSHOT","Go to snapshot at {date}");return d.default.createElement("li",{className:this.getClassNames(),role:"row"},d.default.createElement("span",{className:"history-viewer__version-link",role:"button",title:f.default.inject(c,{date:t.LastEdited}),onClick:this.handleClick,onKeyUp:this.handleKeyUp,tabIndex:s?-1:0},d.default.createElement("span",{className:"history-viewer__message",role:"cell"},d.default.createElement("span",null,t.ActivityAgo)," ",d.default.createElement("small",{className:"text-muted"},(0,w.default)(t))),d.default.createElement(o,{version:t}),d.default.createElement("span",{className:"history-viewer__author",role:"cell"},u),d.default.createElement("span",{className:"history-viewer__actions",role:"cell"},r&&d.default.createElement(n,{onClick:this.handleClose,icon:"cancel",attributes:{title:f.default._t("HistoryViewerVersion.CLOSE","Close")},title:null,buttonStyle:"outline-light",extraClass:"history-viewer__close-button"}))))}}]),t}(u.Component);S.propTypes={isActive:p.default.bool,version:b.versionType,initial:p.default.bool,isComparing:p.default.bool},t.default=(0,_.compose)((0,g.connect)(null,i),(0,h.inject)(["FormAction","SnapshotHistoryViewerSnapshotState"],function(e,t){return{FormActionComponent:e,StateComponent:t}}))(S)},"./client/src/components/HistoryViewer/HistoryViewerSnapshotState.js":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=o("./client/src/components/HistoryViewer/HistoryViewerVersionState.js"),l=o(2),u=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),a(t,[{key:"translateType",value:function(e){var t=window,o=t.i18n;switch(e){case"MODIFIED":return o._t("HistoryViewerSnapshot.MODIFIED","Edited");case"DELETED":return o._t("HistoryViewerSnapshot.DELETED","Archived");case"CREATED":return o._t("HistoryViewerSnapshot.CREATED","Created");case"ADDED":return o._t("HistoryViewerSnapshot.ADDED","Added");case"REMOVED":return o._t("HistoryViewerSnapshot.REMOVED","Removed");case"UNPUBLISHED":return o._t("HistoryViewerSnapshot.UNPUBLISHED","Unpublished");case"PUBLISHED":return o._t("HistoryViewerSnapshot.PUBLISHED","Published");default:return""}}},{key:"getPublishedState",value:function(){var e=this.props.version,t=e.ActivityDescription,o=e.ActivityType,n=this.translateType(o),s=t.split("\n");return s.length>1?s.map(function(e,t){return React.createElement("div",{key:t},e)}):n+" "+t}},{key:"getBadges",value:function(){return null}}]),t}(i.Component);t.Component=u,t.default=(0,l.inject)(["Badge"],function(e){return{BadgeComponent:e}})(u)},"./client/src/components/HistoryViewer/HistoryViewerToolbar.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{onAfterRevert:function(t){e((0,v.addMessage)(_.default.sprintf(_.default._t("HistoryViewerToolbar.REVERTED_MESSAGE","Successfully reverted to version %s"),t))),e((0,v.showList)())}}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(0),d=n(u),c=o(1),p=n(c),h=o(5),m=o(4),f=o(3),_=n(f),g=o(2),v=o("./client/src/state/historyviewer/HistoryViewerActions.js"),y=o(10),j=function(e){function t(e){s(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleRevert=o.handleRevert.bind(o),o.handleToggleRevertTooltip=o.handleToggleRevertTooltip.bind(o),o.state={isReverting:!1,revertTooltipOpen:!1,tooltipTimer:null},o}return a(t,e),l(t,[{key:"handleRevert",value:function(e){var t=this.props,o=t.onAfterRevert,n=t.recordId,s=t.versionId;this.setState({isReverting:!0});var r="function"==typeof o?o:function(){};return e({variables:{id:n,toVersion:s}}).then(function(){return r(s)})}},{key:"handleToggleRevertTooltip",value:function(){this.setState(function(e){return{revertTooltipOpen:!e.revertTooltipOpen}})}},{key:"render",value:function(){var e=this,t=this.props,o=t.FormActionComponent,n=t.ViewModeComponent,s=t.RollbackMutation,r=t.isLatestVersion,a=t.isPreviewable,i=t.canRollback,l=t.rollbackMessage,u=t.typeName,c=this.state,p=c.isReverting,h=c.revertTooltipOpen,m=p?_.default._t("HistoryViewerToolbar.REVERT_IN_PROGRESS","Revert in progress..."):_.default._t("HistoryViewerToolbar.REVERT_UNAVAILABLE","Unavailable for the current version");return d.default.createElement(s,{typeName:u},function(t){return d.default.createElement("div",{className:"toolbar toolbar--south"},d.default.createElement("div",{className:"btn-toolbar"},d.default.createElement(o,{id:"HistoryRevertButton",onClick:function(){return e.handleRevert(t)},icon:"back-in-time",name:"revert",attributes:{title:m},data:{buttonStyle:"warning"},disabled:r||p||!i,loading:p,title:_.default._t("HistoryViewerToolbar.REVERT_TO_VERSION","Revert to this version")}),!i&&d.default.createElement(y.Tooltip,{trigger:"click hover focus",placement:"top",isOpen:h,toggle:e.handleToggleRevertTooltip,target:"HistoryRevertButton"},l),a&&d.default.createElement(n,{id:"history-viewer-edit-mode",area:"edit"})))})}}]),t}(u.Component);j.propTypes={actions:p.default.shape({revertToVersion:p.default.func.isRequired}),FormActionComponent:p.default.oneOfType([p.default.node,p.default.func]).isRequired,ViewModeComponent:p.default.oneOfType([p.default.node,p.default.func]).isRequired,isLatestVersion:p.default.bool,isPreviewable:p.default.bool,onAfterRevert:p.default.func,recordId:p.default.number.isRequired,typeName:p.default.string.isRequired,versionId:p.default.number.isRequired,canRollback:p.default.bool,rollbackMessage:p.default.string},j.defaultProps={isLatestVersion:!1,isPreviewable:!1,canRollback:!0},t.Component=j,t.default=(0,h.compose)((0,m.connect)(null,i),(0,g.inject)(["FormAction","ViewModeToggle","SnapshotRollbackMutation"],function(e,t,o){return{FormActionComponent:e,ViewModeComponent:t,RollbackMutation:o}},function(){return"VersionedAdmin.HistoryViewer.Toolbar"}))(j)},"./client/src/components/HistoryViewer/HistoryViewerVersion.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{onSelect:function(t,o){var n=o.versionFrom;o?e(n?(0,C.setCompareTo)(t):(0,C.setCompareFrom)(t)):(e((0,C.showVersion)(t)),e((0,C.clearMessages)()))},onCompareMode:function(t){e((0,C.setCompareFrom)(t)),e((0,C.setCompareMode)(!0))}}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(0),d=n(u),c=o(1),p=n(c),h=o(5),m=o(4),f=o(2),_=o("./client/src/types/versionType.js"),g=o("./client/src/types/compareType.js"),v=o(3),y=n(v),j=o(6),b=n(j),C=o("./client/src/state/historyviewer/HistoryViewerActions.js"),w=o("./client/src/helpers/getDateFromVersion.js"),S=n(w),x=function(e){function t(e){s(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleClick=o.handleClick.bind(o),o.handleClose=o.handleClose.bind(o),o.handleCompare=o.handleCompare.bind(o),o.handleKeyUp=o.handleKeyUp.bind(o),o}return a(t,e),l(t,[{key:"getAuthor",value:function(){var e=this.props.version,t={};return e.Published&&e.Publisher?t=e.Publisher:e.Author&&(t=e.Author),(t.FirstName||"")+" "+(t.Surname||"")}},{key:"getClassNames",value:function(){var e=this.props,t=e.extraClass,o=e.isActive,n=e.compare,s=e.compare,r=s.compareFrom,a=s.compareTo,i={"history-viewer__row":!0,"history-viewer__row--current":o,"history-viewer__row--comparison-selected":n&&!(r&&a)};return(0,b.default)(i,t)}},{key:"handleKeyUp",value:function(e){13===e.keyCode&&this.handleClick()}},{key:"handleClick",value:function(){var e=this.props,t=e.onSelect,o=e.version,n=e.isActive,s=e.compare;return!n&&(t(o,s),!1)}},{key:"handleCompare",value:function(){var e=this.props;(0,e.onCompareMode)(e.version)}},{key:"handleClose",value:function(){var e=this.props,t=e.onSelect,o=e.version,n=e.compare,s=e.compare.versionFrom;s&&s.Version===o.Version&&delete n.versionFrom,t(0,n)}},{key:"renderCompareButton",value:function(){var e=this.props,t=e.compareModeAvailable,o=e.compare,n=e.FormActionComponent,s=y.default._t("HistoryViewerVersion.COMPARE","Compare");return!t||o?null:d.default.createElement(n,{onClick:this.handleCompare,title:s,buttonStyle:"outline-light",extraClass:"history-viewer__compare-button"},s)}},{key:"renderClearButton",value:function(){var e=this.props,t=e.FormActionComponent;return e.isActive?d.default.createElement(t,{onClick:this.handleClose,icon:"cancel",attributes:{title:y.default._t("HistoryViewerVersion.CLOSE","Close")},title:null,buttonStyle:"outline-light",extraClass:"history-viewer__close-button"}):null}},{key:"renderSelectedMessage",value:function(){return this.props.isActive?d.default.createElement("span",{className:"history-viewer__selected-message"},y.default._t("HistoryViewerVersion.SELECTED","Already selected")):null}},{key:"renderActions",value:function(){var e=this.props,t=e.isActive,o=e.compare;return t||o?d.default.createElement("span",{className:"history-viewer__actions",role:"cell"},this.renderCompareButton(),this.renderSelectedMessage(),this.renderClearButton()):d.default.createElement("span",{className:"history-viewer__actions",role:"cell"})}},{key:"render",value:function(){var e=this.props,t=e.version,o=e.isActive,n=e.StateComponent,s=y.default._t("HistoryViewerVersion.GO_TO_VERSION","Go to version {version}");return d.default.createElement("li",{className:this.getClassNames(),role:"row"},d.default.createElement("span",{className:"history-viewer__version-link",role:"button",title:y.default.inject(s,{version:t.Version}),onClick:this.handleClick,onKeyUp:this.handleKeyUp,tabIndex:0},d.default.createElement("span",{className:"history-viewer__message",role:"cell"},d.default.createElement("span",null,t.ActivityAgo)," ",d.default.createElement("small",{className:"text-muted"},(0,S.default)(t))),d.default.createElement(n,{version:t,isActive:o}),d.default.createElement("span",{className:"history-viewer__author",role:"cell"},this.getAuthor()),this.renderActions()))}}]),t}(u.Component);x.propTypes={extraClass:p.default.oneOfType([p.default.string,p.default.array,p.default.object]),version:_.versionType,isActive:p.default.bool,onSelect:p.default.func,onCompareMode:p.default.func,compare:g.compareType,compareModeAvailable:p.default.bool,StateComponent:p.default.oneOfType([p.default.node,p.default.func]).isRequired,FormActionComponent:p.default.oneOfType([p.default.node,p.default.func]).isRequired},x.defaultProps={isActive:!1,version:_.defaultVersion,compare:!1,compareModeAvailable:!0},t.Component=x,t.default=(0,h.compose)((0,m.connect)(null,i),(0,f.inject)(["SnapshotHistoryViewerVersionState","FormAction"],function(e,t){return{StateComponent:e,FormActionComponent:t}},function(e){var t=e.version,o="VersionedAdmin.HistoryViewer.HistoryViewerVersion";return t&&(o+="."+t.Version),o}))(x)},"./client/src/components/HistoryViewer/HistoryViewerVersionDetail.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(0),u=n(l),d=o(6),c=n(d),p=o(14),h=n(p),m=o(2),f=o("./client/src/types/versionType.js"),_=o(1),g=n(_),v=o(3),y=n(v),j=function(e){function t(){return s(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentWillMount",value:function(){this.toggleToolbarClass(!0)}},{key:"componentWillReceiveProps",value:function(e){e.previewState!==this.props.previewState&&this.toggleToolbarClass("split"===e.previewState)}},{key:"componentWillUnmount",value:function(){this.toggleToolbarClass(!1)}},{key:"getListVersions",value:function(){var e=this.props,t=e.compare,o=e.version;return this.isCompareMode()?[t.versionTo,t.versionFrom]:[o]}},{key:"isPreviewable",value:function(){return this.props.isPreviewable&&!this.isCompareMode()}},{key:"isCompareMode",value:function(){var e=this.props.compare;return e&&e.versionFrom&&e.versionTo}},{key:"toggleToolbarClass",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=document.querySelector(".CMSPageHistoryViewerController div:not(.cms-content-tools) .cms-content-header"),o="history-viewer__toolbar--condensed";t&&this.isPreviewable()&&(e?t.classList.add(o):t.classList.remove(o))}},{key:"renderPreview",value:function(){var e=this.props,t=e.version,o=e.PreviewComponent,n=e.previewState;return this.isPreviewable()&&"edit"!==n?u.default.createElement("div",{className:"history-viewer-preview flexbox-area-grow"},u.default.createElement("div",{className:"history-viewer-preview__underlay"},u.default.createElement("div",{className:"history-viewer-preview__spinner"}),y.default._t("HistoryViewerVersionDetail.LOADING_PREVIEW","Generating preview...")),u.default.createElement(o,{className:"history-viewer-preview__frame flexbox-area-grow",itemLinks:{preview:{Stage:{href:t.AbsoluteLink+"&archiveDate="+t.LastEdited,type:"text/html"}}},itemId:t.Version})):null}},{key:"renderToolbar",value:function(){var e=this.props,t=e.ToolbarComponent,o=e.isLatestVersion,n=e.recordId,s=e.version,r=e.typeName;if(this.isCompareMode())return null;var a=y.default._t("HistoryViewerVersionDetail.CANNOT_ROLLBACK_SNAPSHOTS","You can only revert to base versions");return u.default.createElement(t,{identifier:"HistoryViewer.VersionDetail.Toolbar",isLatestVersion:o,recordId:n,typeName:r,versionId:s.Version,isPreviewable:this.isPreviewable(),canRollback:s.IsFullVersion,rollbackMessage:a})}},{key:"renderDetails",value:function(){var e=this.props,t=e.compareModeAvailable,o=e.ListComponent,n=e.schemaUrl,s=e.CompareWarningComponent,r=e.previewState,a=e.version;if(this.isPreviewable()&&"preview"===r)return null;var i=["flexbox-area-grow","panel","panel--scrollable","panel--padded","panel--padded-side"],l={"history-viewer__table":!0,"history-viewer__table--current":!0,"history-viewer__table--compare":this.isCompareMode()},d={"history-viewer__version-detail":!0,"history-viewer__version-detail--compare":this.isCompareMode()};return u.default.createElement("div",{className:"flexbox-area-grow fill-height"},u.default.createElement("div",{className:(0,c.default)(i)},u.default.createElement(o,{extraClass:(0,c.default)(l),versions:this.getListVersions(),compareModeAvailable:t}),u.default.createElement("div",{className:(0,c.default)(d)},u.default.createElement(h.default,{identifier:"HistoryViewer.VersionDetail."+a.ID,schemaUrl:n,refetchSchemaOnMount:!1}))),this.renderToolbar(),u.default.createElement(s,{fixed:!0}))}},{key:"render",value:function(){return u.default.createElement("div",{className:"flexbox-area-grow fill-width"},this.renderDetails(),this.renderPreview())}}]),t}(l.PureComponent);j.propTypes={isLatestVersion:g.default.bool,isPreviewable:g.default.bool,ListComponent:g.default.oneOfType([g.default.node,g.default.func]).isRequired,PreviewComponent:g.default.oneOfType([g.default.node,g.default.func]),recordId:g.default.number.isRequired,typeName:g.default.string.isRequired,schemaUrl:g.default.string.isRequired,ToolbarComponent:g.default.oneOfType([g.default.node,g.default.func]).isRequired,version:f.versionType,compare:g.default.oneOfType([g.default.shape({versionFrom:f.versionType,versionTo:f.versionType}),g.default.bool]),previewState:g.default.oneOf(["edit","preview","split"])},j.defaultProps={isLatestVersion:!1,isPreviewable:!1,compare:!1},t.Component=j,t.default=(0,m.inject)(["SnapshotHistoryViewerVersionList","SnapshotHistoryViewerToolbar","Preview","SnapshotHistoryViewerCompareWarning"],function(e,t,o,n){return{ListComponent:e,ToolbarComponent:t,PreviewComponent:o,CompareWarningComponent:n}},function(e,t){return t+".HistoryViewerVersionDetail."+e.version.Version})(j)},"./client/src/components/HistoryViewer/HistoryViewerVersionList.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=e.versionedAdmin.historyViewer;return{messages:t.messages,compare:t.compare,currentVersion:t.currentVersion}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(0),d=n(u),c=o(1),p=n(c),h=o(6),m=n(h),f=o(3),_=n(f),g=o(4),v=o(5),y=o(2),j=o("./client/src/types/messageType.js"),b=o("./client/src/types/versionType.js"),C=o("./client/src/types/compareType.js"),w=function(e){function t(){return s(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"getClassNames",value:function(){var e=this.props,t=e.extraClass,o=e.showHeader;return(0,m.default)(t,{table:!0,"history-viewer__table--headerless":!o})}},{key:"isVersionActive",value:function(e){var t=this.props,o=t.currentVersion,n=t.compare,s=t.compare,r=s.versionFrom,a=s.versionTo,i=o&&o.ID===e.ID,l=r&&r.ID===e.ID,u=a&&a.ID===e.ID;return!n&&i||l||u}},{key:"renderMessages",value:function(){var e=this.props,t=e.FormAlertComponent,o=e.messages;return o.length?d.default.createElement("div",{className:"history-viewer__messages"},o.map(function(e){return d.default.createElement(t,{key:e.id,type:e.type,value:e.message,closeLabel:_.default._t("HistoryViewerVersionList.CLOSE","Close")})})):null}},{key:"renderHeader",value:function(){var e=this.props,t=e.showHeader,o=e.HeadingComponent,n=e.compareModeAvailable;if(!t)return null;var s={compareModeAvailable:n};return d.default.createElement(o,s)}},{key:"render",value:function(){var e=this,t=this.props,o=t.VersionComponent,n=t.SnapshotComponent,s=t.versions,r=t.compareModeAvailable,a=t.compare;return d.default.createElement("div",{className:"history-viewer__list"},d.default.createElement("ul",{className:this.getClassNames(),role:"table"},this.renderHeader(),s.map(function(t,s){return t.IsFullVersion?d.default.createElement(o,{key:t.ID+"--"+t.LastEdited,isActive:e.isVersionActive(t),version:t,compare:a,compareModeAvailable:r}):d.default.createElement(n,{isComparing:!!a,key:t.ID+"--"+t.LastEdited,isActive:e.isVersionActive(t),version:t,initial:s<1})})))}}]),t}(u.PureComponent);w.propTypes={extraClass:p.default.oneOfType([p.default.string,p.default.array,p.default.object]),showHeader:p.default.bool,FormAlertComponent:p.default.oneOfType([p.default.node,p.default.func]).isRequired,HeadingComponent:p.default.oneOfType([p.default.node,p.default.func]).isRequired,messages:p.default.arrayOf(j.messageType),VersionComponent:p.default.oneOfType([p.default.node,p.default.func]).isRequired,versions:p.default.arrayOf(b.versionType),compare:C.compareType,compareModeAvailable:p.default.bool},w.defaultProps={compareModeAvailable:!0,extraClass:"history-viewer__table",messages:[],showHeader:!0,versions:[]},t.Component=w,t.default=(0,v.compose)((0,g.connect)(i),(0,y.inject)(["FormAlert","SnapshotHistoryViewerHeading","SnapshotHistoryViewerVersion","SnapshotHistoryViewerSnapshot"],function(e,t,o,n){return{FormAlertComponent:e,HeadingComponent:t,VersionComponent:o,SnapshotComponent:n}},function(){return"VersionedAdmin.HistoryViewer.HistoryViewerVersionList"}))(w)},"./client/src/components/HistoryViewer/HistoryViewerVersionState.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(0),u=n(l),d=o(6),c=n(d),p=o(3),h=n(p),m=o("./client/src/types/versionType.js"),f=o(2),_=o(1),g=n(_),v=function(e){function t(){return s(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"getClassNames",value:function(){var e=this.props.extraClass;return(0,c.default)("history-viewer__version-state",e)}},{key:"getPublishedState",value:function(){return this.props.version.Published?h.default._t("HistoryViewer.Published","Published"):h.default._t("HistoryViewer.Saved","Saved")}},{key:"getBadges",value:function(){var e=this.props,t=e.version,o=e.isActive,n=e.BadgeComponent;return t.IsLiveSnapshot?u.default.createElement(n,{status:"success",message:h.default._t("HistoryViewer.BadgeLive","Live"),className:"",inverted:o}):""}},{key:"render",value:function(){return u.default.createElement("span",{className:this.getClassNames(),role:"cell"},this.getPublishedState()," "," ",this.getBadges())}}]),t}(l.Component);v.propTypes={version:m.versionType,extraClass:g.default.string,isActive:g.default.bool,BadgeComponent:g.default.oneOfType([g.default.node,g.default.func]).isRequired},v.defaultProps={version:m.defaultVersion,extraClass:"",isActive:!1},t.Component=v,t.default=(0,f.inject)(["Badge"],function(e){return{BadgeComponent:e}},function(e){return"HistoryViewer.HistoryViewerVersionState."+e.version.Version})(v)},"./client/src/components/HistoryViewer/RollbackMutation.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(0),r=n(s),a=o(7),i=o("./client/src/graphql/createRollbackMutation.js"),l=n(i),u=function(e){var t=e.typeName,o=e.children,n=(0,s.useMemo)(function(){return(0,l.default)(t)},[t]);return r.default.createElement(a.Mutation,{mutation:n,refetchQueries:["ReadSnapshots"+t]},o)};t.default=u},"./client/src/components/HistoryViewer/SnapshotViewerContainer.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=o(0),a=n(r),i=o(1),l=n(i),u=o(7),d=o(2),c=o("./client/src/graphql/createSnapshotsQuery.js"),p=n(c),h=function(e){var t=e.typeName,o=e.recordId,n=e.limit,i=e.page,l=e.recordClass,d=e.isPreviewable,c=e.actions,h=void 0===c?{versions:{}}:c,m=e.SnapshotViewerComponent,f=(0,r.useMemo)(function(){return(0,p.default)(t,d)},[t,d]),_={limit:n,offset:((i||1)-1)*n,page_id:o};return a.default.createElement(u.Query,{query:f,variables:_,fetchPolicy:"network-only"},function(e){var r=e.loading,u=e.error,d=e.data,c=e.refetch,p=null;d&&(p=d["readOne"+t]);var f=p||[],_=u&&u.graphQLErrors&&u.graphQLErrors.map(function(e){return e.message}),g={loading:r,versions:f,graphQLErrors:_,actions:s({},h,{versions:s({},f,{goToPage:function(e){c({offset:((e||1)-1)*n,limit:n,page_id:o})}})}),recordId:o,recordClass:l,typeName:t,limit:n,page:i};return a.default.createElement(m,g)})};h.propTypes={typeName:l.default.string.isRequired,recordId:l.default.number.isRequired,limit:l.default.number,page:l.default.number,actions:l.default.object},t.default=(0,d.inject)(["SnapshotViewer"],function(e){return{SnapshotViewerComponent:e}},function(e){return"VersionedAdmin.HistoryViewer."+e.contextKey})(h)},"./client/src/containers/HistoryViewer/HistoryViewerConfig.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(0),d=n(u),c=o(13),p=n(c),h=o(2),m=function(e){var t=function(t){function o(){return s(this,o),r(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return a(o,t),l(o,[{key:"getConfig",value:function(){return p.default.getSection("SilverStripe\\VersionedAdmin\\Controllers\\HistoryViewerController")}},{key:"getSchemaUrlDetails",value:function(){return this.props.compare?{formName:"compareForm",queryParts:["RecordVersionFrom=:from","RecordVersionTo=:to"]}:{formName:"versionForm",queryParts:["RecordVersion=:version","RecordDate=:date"]}}},{key:"getSchemaUrl",value:function(){var e=this.getConfig(),t=this.getSchemaUrlDetails(),o=t.formName,n=t.queryParts;return e.form[o].schemaUrl+"/:id?"+n.concat("RecordClass=:class&RecordID=:id").join("&")}},{key:"render",value:function(){var t=i({},this.props,{config:this.getConfig(),HistoryViewer:e,schemaUrl:this.getSchemaUrl()});return d.default.createElement(e,t)}}]),o}(d.default.Component);return(0,h.inject)(["SnapshotHistoryViewer"])(t)};t.default=m},"./client/src/graphql/createRollbackMutation.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation rollback","($id:ID!, $toVersion:Int!) {\n    rollback","(\n      ID: $id\n      ToVersion: $toVersion\n    ) {\n      ID\n      ClassName\n    }\n  }\n  "],["\n  mutation rollback","($id:ID!, $toVersion:Int!) {\n    rollback","(\n      ID: $id\n      ToVersion: $toVersion\n    ) {\n      ID\n      ClassName\n    }\n  }\n  "]),s=(o(7),o(8)),r=function(e){return e&&e.__esModule?e:{default:e}}(s),a=function(e){return(0,r.default)(n,e,e)};t.default=a},"./client/src/graphql/createSnapshotsQuery.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    query ReadSnapshots"," ($page_id: ID!, $limit: Int!, $offset: Int!) {\n        readOne","(\n          ID: $page_id\n        ) {\n          ID\n          ","\n          SnapshotHistory (limit: $limit, offset: $offset) {\n            pageInfo {\n              totalCount\n            }\n            edges {\n              node {\n                ID\n                LastEdited\n                ActivityDescription\n                ActivityType\n                ActivityAgo\n                IsFullVersion\n                IsLiveSnapshot\n                BaseVersion\n                Message\n                Author {\n                  FirstName\n                  Surname\n                }\n                OriginVersion {\n                  Version\n                  ","\n                  Author {\n                    FirstName\n                    Surname\n                  }\n\n                  Published\n                  Publisher {\n                    FirstName\n                    Surname\n                  }\n                  LatestDraftVersion\n                }\n              }\n            }\n          }\n        }\n      }\n\n    "],["\n    query ReadSnapshots"," ($page_id: ID!, $limit: Int!, $offset: Int!) {\n        readOne","(\n          ID: $page_id\n        ) {\n          ID\n          ","\n          SnapshotHistory (limit: $limit, offset: $offset) {\n            pageInfo {\n              totalCount\n            }\n            edges {\n              node {\n                ID\n                LastEdited\n                ActivityDescription\n                ActivityType\n                ActivityAgo\n                IsFullVersion\n                IsLiveSnapshot\n                BaseVersion\n                Message\n                Author {\n                  FirstName\n                  Surname\n                }\n                OriginVersion {\n                  Version\n                  ","\n                  Author {\n                    FirstName\n                    Surname\n                  }\n\n                  Published\n                  Publisher {\n                    FirstName\n                    Surname\n                  }\n                  LatestDraftVersion\n                }\n              }\n            }\n          }\n        }\n      }\n\n    "]),s=o(8),r=function(e){return e&&e.__esModule?e:{default:e}}(s),a=function(e,t){return(0,r.default)(n,e,e,t?"AbsoluteLink":"",t?"AbsoluteLink":"")};t.default=a},"./client/src/helpers/getDateFromVersion.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(3),r=n(s),a=o(16),i=n(a),l=function(e){return i.default.locale(r.default.detectLocale()),(0,i.default)(e.LastEdited).format("L LT")};t.default=l},"./client/src/legacy/ArchiveAdmin/ArchiveAdmin.js":function(e,t,o){"use strict";var n=o(12);(function(e){return e&&e.__esModule?e:{default:e}})(n).default.entwine("ss",function(e){e(".ArchiveAdmin__action--restore").entwine({onmatch:function(){e(this).attr("readonly",!1),e(this).attr("disabled",!1)}}),e(".ArchiveAdmin .other-model-selector select").entwine({onchange:function(t){t.preventDefault();var o=e(this).val(),n=e(this).data("others-archive-url");if(o){o=o.replace(/\\/g,"-");var s=n+o;e(".cms-container").loadPanel(s,"",{pjax:"CurrentForm"})}}})})},"./client/src/legacy/HistoryViewer/HistoryViewerEntwine.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=o(12),a=n(r),i=o(0),l=n(i),u=o(15),d=n(u),c=o(2);a.default.entwine("ss",function(e){e(".js-injector-boot .snapshot-history-viewer__container").entwine({onmatch:function(){var e=this.closest(".cms-content").attr("id"),t=e?{context:e}:{},o=(0,c.loadComponent)("SnapshotViewerContainer",t),n=this.data("schema"),r=s({},n.data,{isInGridField:n.data.isInGridField||!this.hasClass("history-viewer--standalone")});d.default.render(l.default.createElement(o,r),this[0])},onunmatch:function(){d.default.unmountComponentAtNode(this[0])}}),e(".history-viewer__version-detail .nav-link").entwine({onclick:function(e){e.preventDefault(),this._super(e)}}),e(".tab.tab--history-viewer[aria-hidden=false]").entwine({onmatch:function(){e(".toolbar--south.cms-content-actions").hide()},onunmatch:function(){e(".toolbar--south.cms-content-actions").show()}}),e(".tab.tab--history-viewer .history-viewer__version-detail").entwine({onmatch:function(){this.parent().css("padding-bottom","3rem").next(".toolbar--south").css({position:"absolute",bottom:0,left:0,right:0})}})})},"./client/src/state/historyviewer/HistoryViewerActionTypes.js":function(e,t,o){"use strict";function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=["SHOW_VERSION","SHOW_DATE","SHOW_LIST","SET_CURRENT_PAGE","ADD_MESSAGE","CLEAR_MESSAGES","SET_COMPARE_MODE","SET_COMPARE_FROM","SET_COMPARE_TO"].reduce(function(e,t){return Object.assign(e,n({},t,"HISTORY_VIEWER."+t))},{})},"./client/src/state/historyviewer/HistoryViewerActions.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e){return{type:m.default.SHOW_VERSION,payload:{version:e}}}function r(e){return{type:m.default.SHOW_DATE,payload:{version:e}}}function a(){return{type:m.default.SHOW_LIST}}function i(e){return{type:m.default.SET_CURRENT_PAGE,payload:{page:e}}}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";return{type:m.default.ADD_MESSAGE,payload:{id:(0,_.default)(),message:e,type:t}}}function u(){return{type:m.default.CLEAR_MESSAGES}}function d(e){return{type:m.default.SET_COMPARE_MODE,payload:{enabled:e}}}function c(e){return{type:m.default.SET_COMPARE_FROM,payload:{version:e}}}function p(e){return{type:m.default.SET_COMPARE_TO,payload:{version:e}}}Object.defineProperty(t,"__esModule",{value:!0}),t.showVersion=s,t.showDate=r,t.showList=a,t.setCurrentPage=i,t.addMessage=l,t.clearMessages=u,t.setCompareMode=d,t.setCompareFrom=c,t.setCompareTo=p;var h=o("./client/src/state/historyviewer/HistoryViewerActionTypes.js"),m=n(h),f=o("./node_modules/uuid/v1.js"),_=n(f)},"./client/src/state/historyviewer/HistoryViewerReducer.js":function(e,t,o){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.type,s=t.payload;switch(o){case i.default.SET_CURRENT_PAGE:return r({},e,{currentPage:s.page});case i.default.SHOW_VERSION:var a=s.version;return r({},e,{previewMode:a&&u.VERSION_MODE_VERSION,currentVersion:a});case i.default.SHOW_DATE:var l=s.version;return r({},e,{previewMode:l&&u.VERSION_MODE_DATE,currentVersion:l});case i.default.SHOW_LIST:return r({},e,{currentVersion:!1,currentDate:!1,previewMode:!1,currentPage:0});case i.default.ADD_MESSAGE:return r({},e,{messages:[s].concat(n(e.messages))});case i.default.CLEAR_MESSAGES:return r({},e,{messages:[]});case i.default.SET_COMPARE_MODE:var c=r({versionFrom:!1,versionTo:!1},e.compare);return r({},e,{compare:!!s.enabled&&c,previewMode:!!s.enabled&&e.previewMode});case i.default.SET_COMPARE_FROM:var p=e.compare,h=p.versionFrom,m=p.versionTo;return h=s.version||!1,h||(h=m,m=!1),r({},e,{currentVersion:h,compare:{versionFrom:h,versionTo:m}});case i.default.SET_COMPARE_TO:var f=e.compare,_=f.versionFrom,g=f.versionTo;return g=s.version||!1,g&&_&&g.Version<_.Version&&(_=g,g=e.compare.versionFrom),r({},e,{currentVersion:_,compare:{versionFrom:_,versionTo:g}});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e};t.default=s;var a=o("./client/src/state/historyviewer/HistoryViewerActionTypes.js"),i=function(e){return e&&e.__esModule?e:{default:e}}(a),l=o("./client/src/types/compareType.js"),u=o("./client/src/components/HistoryViewer/HistoryViewer.js"),d={currentPage:1,previewMode:!1,currentVersion:!1,compare:l.defaultCompare,loading:!1,messages:[]}},"./client/src/types/compareType.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultCompare=t.compareType=void 0;var n=o(1),s=function(e){return e&&e.__esModule?e:{default:e}}(n),r=o("./client/src/types/versionType.js"),a=s.default.oneOfType([s.default.bool,s.default.shape({versionFrom:r.versionType,versionTo:r.versionType})]);t.compareType=a,t.defaultCompare=!1},"./client/src/types/messageType.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.messageType=void 0;var n=o(1),s=function(e){return e&&e.__esModule?e:{default:e}}(n),r=s.default.shape({id:s.default.string,message:s.default.string,type:s.default.oneOf(["error","info","success","warning"])});t.messageType=r},"./client/src/types/versionType.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultVersion=t.versionType=void 0;var n=o(1),s=function(e){return e&&e.__esModule?e:{default:e}}(n),r=s.default.shape({FirstName:s.default.string,Surname:s.default.string}),a=s.default.shape({Version:s.default.number,AbsoluteLink:s.default.string,LastEdited:s.default.string,Published:s.default.boolean,LiveVersion:s.default.boolean,LatestDraftVersion:s.default.boolean,Message:s.default.string,Publisher:r,Author:r}),i={Version:0,AbsoluteLink:"",LastEdited:"",Published:!1,LiveVersion:!1,LatestDraftVersion:!1,Message:"",Publisher:{FirstName:"",Surname:""},Author:{FirstName:"",Surname:""}};t.versionType=a,t.defaultVersion=i},'./node_modules/babel-loader/lib/index.js?{"presets":[["env",{"modules":false}],"react"],"plugins":["transform-object-rest-spread"],"comments":false,"cacheDirectory":false}!./client/src/components/HistoryViewer/HistoryViewer.js':function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=e.versionedAdmin.historyViewer,o=t.currentPage,n=t.currentVersion,s=t.previewMode;return{page:o,currentVersion:n,compare:t.compare,previewMode:s,previewState:e.viewMode.activeState}}function l(e){return{onSelect:function(t){e((0,S.showVersion)(t)),e((0,S.clearMessages)())},onSetPage:function(t){e((0,S.setCurrentPage)(t))},onResize:function(t){e(A.enableOrDisableSplitMode(t))}}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=t.VERSION_MODE_DATE=t.VERSION_MODE_VERSION=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},d=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=o(0),p=n(c),h=o(5),m=o(4),f=o("./node_modules/griddle-react/modules/griddle.jsx.js"),_=n(f),g=o("./client/src/containers/HistoryViewer/HistoryViewerConfig.js"),v=n(g),y=o(3),j=n(y),b=o(2),C=o(9),w=n(C),S=o("./client/src/state/historyviewer/HistoryViewerActions.js"),x=o("./client/src/types/versionType.js"),E=o("./client/src/types/compareType.js"),P=o(6),O=n(P),M=o("./node_modules/react-resize-aware/dist/index.js"),R=n(M),V=o(11),A=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(V),T=o(1),N=n(T);t.VERSION_MODE_VERSION="VERSION",t.VERSION_MODE_DATE="DATE";var k=function(e){function t(e){s(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleSetPage=o.handleSetPage.bind(o),o.handleNextPage=o.handleNextPage.bind(o),o.handlePrevPage=o.handlePrevPage.bind(o),o}return a(t,e),d(t,[{key:"componentDidUpdate",value:function(e){var t=e.page,o=this.props,n=o.page,s=o.actions.versions;t!==n&&"function"==typeof s.goToPage&&s.goToPage(n)}},{key:"componentWillUnmount",value:function(){var e=this.props.onSelect;"function"==typeof e&&e(!1)}},{key:"getVersions",value:function(){var e=this.props.versions;return(e&&e.SnapshotHistory&&e.SnapshotHistory.edges?e.SnapshotHistory.edges:[]).map(function(t){var o=t.node;return u({},o,o.OriginVersion,{AbsoluteLink:o.IsFullVersion&&o.OriginVersion?o.OriginVersion.AbsoluteLink:e.AbsoluteLink,Version:o.IsFullVersion&&o.OriginVersion?o.OriginVersion.Version:o.BaseVersion})})}},{key:"getContainerClasses",value:function(){var e=this.props,t=e.compare,o=e.isInGridField;return(0,O.default)("history-viewer","fill-height",{"history-viewer__compare-mode":t,"history-viewer--no-margins":o&&!this.isListView()})}},{key:"getLatestVersion",value:function(){var e=this.props.currentVersion;if(e&&!0===e.LatestDraftVersion)return e;var t=this.getVersions().filter(function(e){return!0===e.LatestDraftVersion});return t.length?t[0]:null}},{key:"isListView",value:function(){var e=this.props,t=e.compare;return!e.currentVersion||!!t&&!(!t.versionFrom||t.versionTo)}},{key:"handleSetPage",value:function(e){var t=this.props.onSetPage;"function"==typeof t&&t(e+1)}},{key:"handleNextPage",value:function(){var e=this.props.page;this.handleSetPage(e)}},{key:"handlePrevPage",value:function(){var e=this.props.page,t=e-1;if(t<1)return void this.handleSetPage(t);this.handleSetPage(t-1)}},{key:"compareModeAvailable",value:function(){return this.getVersions().length>1}},{key:"renderVersionDetail",value:function(){var e=this,t=this.props,o=t.currentVersion,n=t.isPreviewable,s=t.recordId,r=t.recordClass,a=t.typeName,i=t.schemaUrl,l=t.VersionDetailComponent,u=t.compare,d=t.compare,c=d.versionFrom,h=void 0!==c&&c,m=d.versionTo,f=void 0!==m&&m,_=t.previewState,g={":id":s,":class":r,":date":"",":version":""};g[":date"]=o.LastEdited;var v={":id":s,":class":r,":from":h.Version||0,":to":f.Version||0},y=u?/:id|:class|:from|:to/g:/:id|:class|:version|:date/g,j=u?v:g,b=u?h:o,C=this.getLatestVersion(),w={isLatestVersion:!u&&C&&C.Version===b.Version,isPreviewable:n,recordId:s,typeName:a,schemaUrl:i.replace(y,function(e){return j[e]}),version:b,compare:u,compareModeAvailable:this.compareModeAvailable(),previewState:_};return p.default.createElement(R.default,{className:this.getContainerClasses(),onResize:function(t){var o=t.width;return e.props.onResize(o)}},p.default.createElement(l,w))}},{key:"renderPagination",value:function(){var e=this.props,t=e.limit,o=e.page,n=e.versions;if(!n)return null;var s=n.SnapshotHistory?n.SnapshotHistory.pageInfo.totalCount:0;if(s<=t)return null;var r={setPage:this.handleSetPage,maxPage:Math.ceil(s/t),next:this.handleNextPage,nextText:j.default._t("HistoryViewer.NEXT","Next"),previous:this.handlePrevPage,previousText:j.default._t("HistoryViewer.PREVIOUS","Previous"),currentPage:o-1,useGriddleStyles:!1};return p.default.createElement("div",{className:"griddle-footer"},p.default.createElement(_.default.GridPagination,r))}},{key:"renderComparisonSelectionList",value:function(){var e=this.props,t=e.compare.versionFrom,o=e.ListComponent;if(!t)return null;var n=(0,O.default)("history-viewer__table","history-viewer__table--comparison-selected");return p.default.createElement(o,{versions:[t],extraClass:n})}},{key:"renderVersionList",value:function(){var e=this.props,t=e.isInGridField,o=e.ListComponent,n=e.CompareWarningComponent,s=e.compare,r=e.compare.versionFrom;return p.default.createElement("div",{className:this.getContainerClasses()},p.default.createElement(n,null),p.default.createElement("div",{className:t?"":"panel panel--padded panel--scrollable"},this.renderComparisonSelectionList(),p.default.createElement(o,{versions:this.getVersions(),showHeader:!s||s&&!r,compareModeAvailable:this.compareModeAvailable()}),p.default.createElement("div",{className:"history-viewer__pagination"},this.renderPagination())))}},{key:"renderCompareMode",value:function(){var e=this.props.compare;return e&&e.versionFrom&&e.versionTo?this.renderVersionDetail():this.renderVersionList()}},{key:"render",value:function(){var e=this.props,t=e.loading,o=e.compare,n=e.previewMode;return t?p.default.createElement(w.default,null):this.compareModeAvailable()&&o?this.renderCompareMode():n?this.renderVersionDetail():this.renderVersionList()}}]),t}(c.Component);k.propTypes={contextKey:N.default.string,limit:N.default.number,ListComponent:N.default.oneOfType([N.default.node,N.default.func]).isRequired,offset:N.default.number,recordId:N.default.number.isRequired,recordClass:N.default.string.isRequired,typeName:N.default.string.isRequired,currentVersion:N.default.oneOfType([N.default.bool,x.versionType]),compare:E.compareType,isInGridField:N.default.bool,isPreviewable:N.default.bool,VersionDetailComponent:N.default.oneOfType([N.default.node,N.default.func]).isRequired,CompareWarningComponent:N.default.oneOfType([N.default.node,N.default.func]).isRequired,versions:N.default.shape({Versions:N.default.shape({pageInfo:N.default.shape({totalCount:N.default.number}),edges:N.default.arrayOf(N.default.shape({node:x.versionType}))})}),page:N.default.number,schemaUrl:N.default.string,previewState:N.default.oneOf(["edit","preview","split"]),actions:N.default.object,onSelect:N.default.func,onSetPage:N.default.func,onResize:N.default.func},k.defaultProps={compare:{},contextKey:"",currentVersion:!1,isInGridField:!1,isPreviewable:!1,typeName:"",schemaUrl:"",versions:{Versions:{pageInfo:{totalCount:0},edges:[]}}},t.Component=k,t.default=(0,h.compose)((0,m.connect)(i,l),v.default,(0,b.inject)(["SnapshotHistoryViewerVersionList","SnapshotHistoryViewerVersionDetail","SnapshotHistoryViewerCompareWarning"],function(e,t,o){return{ListComponent:e,VersionDetailComponent:t,CompareWarningComponent:o}},function(e){return"VersionedAdmin.HistoryViewer."+e.contextKey}))(k)},'./node_modules/babel-loader/lib/index.js?{"presets":[["env",{"modules":false}],"react"],"plugins":["transform-object-rest-spread"],"comments":false,"cacheDirectory":false}!./client/src/types/versionType.js':function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultVersion=t.versionType=void 0;var n=o(1),s=function(e){return e&&e.__esModule?e:{default:e}}(n),r=s.default.shape({FirstName:s.default.string,Surname:s.default.string}),a=s.default.shape({Version:s.default.number,AbsoluteLink:s.default.string,LastEdited:s.default.string,Published:s.default.boolean,LiveVersion:s.default.boolean,LatestDraftVersion:s.default.boolean,Message:s.default.string,Publisher:r,Author:r}),i={Version:0,AbsoluteLink:"",LastEdited:"",Published:!1,LiveVersion:!1,LatestDraftVersion:!1,Message:"",Publisher:{FirstName:"",Surname:""},Author:{FirstName:"",Surname:""}};t.versionType=a,t.defaultVersion=i},"./node_modules/create-react-class/factory.js":function(e,t,o){"use strict";function n(e){return e}function s(e,t,o){function s(e,t){var o=v.hasOwnProperty(t)?v[t]:null;w.hasOwnProperty(t)&&i("OVERRIDE_BASE"===o,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&i("DEFINE_MANY"===o||"DEFINE_MANY_MERGED"===o,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function u(e,o){if(o){i("function"!=typeof o,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!t(o),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var n=e.prototype,r=n.__reactAutoBindPairs;o.hasOwnProperty(l)&&j.mixins(e,o.mixins);for(var a in o)if(o.hasOwnProperty(a)&&a!==l){var u=o[a],d=n.hasOwnProperty(a);if(s(d,a),j.hasOwnProperty(a))j[a](e,u);else{var c=v.hasOwnProperty(a),m="function"==typeof u,f=m&&!c&&!d&&!1!==o.autobind;if(f)r.push(a,u),n[a]=u;else if(d){var _=v[a];i(c&&("DEFINE_MANY_MERGED"===_||"DEFINE_MANY"===_),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",_,a),"DEFINE_MANY_MERGED"===_?n[a]=p(n[a],u):"DEFINE_MANY"===_&&(n[a]=h(n[a],u))}else n[a]=u}}}}function d(e,t){if(t)for(var o in t){var n=t[o];if(t.hasOwnProperty(o)){var s=o in j;i(!s,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',o);var r=o in e;if(r){var a=y.hasOwnProperty(o)?y[o]:null;return i("DEFINE_MANY_MERGED"===a,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",o),void(e[o]=p(e[o],n))}e[o]=n}}}function c(e,t){i(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var o in t)t.hasOwnProperty(o)&&(i(void 0===e[o],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",o),e[o]=t[o]);return e}function p(e,t){return function(){var o=e.apply(this,arguments),n=t.apply(this,arguments);if(null==o)return n;if(null==n)return o;var s={};return c(s,o),c(s,n),s}}function h(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){return t.bind(e)}function f(e){for(var t=e.__reactAutoBindPairs,o=0;o<t.length;o+=2){var n=t[o],s=t[o+1];e[n]=m(e,s)}}function _(e){var t=n(function(e,n,s){this.__reactAutoBindPairs.length&&f(this),this.props=e,this.context=n,this.refs=a,this.updater=s||o,this.state=null;var r=this.getInitialState?this.getInitialState():null;i("object"==typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=r});t.prototype=new S,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],g.forEach(u.bind(null,t)),u(t,b),u(t,e),u(t,C),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),i(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var s in v)t.prototype[s]||(t.prototype[s]=null);return t}var g=[],v={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},y={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},j={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var o=0;o<t.length;o++)u(e,t[o])},childContextTypes:function(e,t){e.childContextTypes=r({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=r({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=p(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=r({},e.propTypes,t)},statics:function(e,t){d(e,t)},autobind:function(){}},b={componentDidMount:function(){this.__isMounted=!0}},C={componentWillUnmount:function(){this.__isMounted=!1}},w={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},S=function(){};return r(S.prototype,e.prototype,w),_}var r=o("./node_modules/object-assign/index.js"),a=o("./node_modules/fbjs/lib/emptyObject.js"),i=o("./node_modules/fbjs/lib/invariant.js"),l="mixins";e.exports=s},"./node_modules/create-react-class/index.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/factory.js");if(void 0===n)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var r=(new n.Component).updater;e.exports=s(n.Component,n.isValidElement,r)},"./node_modules/expose-loader/index.js?SnapshotsViewer!./client/src/components/HistoryViewer/HistoryViewer.js-exposed":function(e,t,o){(function(t){e.exports=t.SnapshotsViewer=o('./node_modules/babel-loader/lib/index.js?{"presets":[["env",{"modules":false}],"react"],"plugins":["transform-object-rest-spread"],"comments":false,"cacheDirectory":false}!./client/src/components/HistoryViewer/HistoryViewer.js')}).call(t,o("./node_modules/webpack/buildin/global.js"))},"./node_modules/expose-loader/index.js?versionType!./client/src/types/versionType.js-exposed":function(e,t,o){(function(t){e.exports=t.versionType=o('./node_modules/babel-loader/lib/index.js?{"presets":[["env",{"modules":false}],"react"],"plugins":["transform-object-rest-spread"],"comments":false,"cacheDirectory":false}!./client/src/types/versionType.js')}).call(t,o("./node_modules/webpack/buildin/global.js"))},"./node_modules/fbjs/lib/emptyObject.js":function(e,t,o){"use strict";var n={};e.exports=n},"./node_modules/fbjs/lib/invariant.js":function(e,t,o){"use strict";function n(e,t,o,n,r,a,i,l){if(s(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[o,n,r,a,i,l],c=0;u=new Error(t.replace(/%s/g,function(){return d[c++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}var s=function(e){};e.exports=n},"./node_modules/griddle-react/modules/columnProperties.js":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=o("./node_modules/lodash/map.js"),a=o("./node_modules/lodash/filter.js"),i=o("./node_modules/lodash/find.js"),l=o("./node_modules/lodash/sortBy.js"),u=o("./node_modules/lodash/difference.js"),d=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],o=arguments.length<=1||void 0===arguments[1]?[]:arguments[1],s=arguments.length<=2||void 0===arguments[2]?"children":arguments[2],r=arguments.length<=3||void 0===arguments[3]?[]:arguments[3],a=arguments.length<=4||void 0===arguments[4]?[]:arguments[4];n(this,e),this.allColumns=t,this.filteredColumns=o,this.childrenColumnName=s,this.columnMetadata=r,this.metadataColumns=a}return s(e,[{key:"getMetadataColumns",value:function(){var e=r(a(this.columnMetadata,{visible:!1}),function(e){return e.columnName});return e.indexOf(this.childrenColumnName)<0&&e.push(this.childrenColumnName),e.concat(this.metadataColumns)}},{key:"getVisibleColumnCount",value:function(){return this.getColumns().length}},{key:"getColumnMetadataByName",value:function(e){return i(this.columnMetadata,{columnName:e})}},{key:"hasColumnMetadata",value:function(){return null!==this.columnMetadata&&this.columnMetadata.length>0}},{key:"getMetadataColumnProperty",value:function(e,t,o){var n=this.getColumnMetadataByName(e);return void 0===n||null===n?o:n.hasOwnProperty(t)?n[t]:o}},{key:"orderColumns",value:function(e){var t=this;return l(e,function(e){var o=i(t.columnMetadata,{columnName:e});return void 0===o||null===o||isNaN(o.order)?100:o.order})}},{key:"getColumns",value:function(){var e=0===this.filteredColumns.length?this.allColumns:this.filteredColumns;return e=u(e,this.metadataColumns),e=this.orderColumns(e)}}]),e}();e.exports=d},"./node_modules/griddle-react/modules/customFilterContainer.jsx.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/index.js"),r=s({getDefaultProps:function(){return{placeholderText:""}},render:function(){var e=this;return"function"!=typeof e.props.customFilterComponent?(console.log("Couldn't find valid template."),n.createElement("div",null)):n.createElement(e.props.customFilterComponent,{changeFilter:this.props.changeFilter,results:this.props.results,currentResults:this.props.currentResults,placeholderText:this.props.placeholderText})}});e.exports=r},"./node_modules/griddle-react/modules/customPaginationContainer.jsx.js":function(e,t,o){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},s=o(0),r=o("./node_modules/create-react-class/index.js"),a=r({getDefaultProps:function(){return{maxPage:0,nextText:"",previousText:"",currentPage:0,customPagerComponent:{},customPagerComponentOptions:{}}},render:function(){var e=this;return"function"!=typeof e.props.customPagerComponent?(console.log("Couldn't find valid template."),s.createElement("div",null)):s.createElement(e.props.customPagerComponent,n({},this.props.customPagerComponentOptions,{maxPage:this.props.maxPage,nextText:this.props.nextText,previousText:this.props.previousText,currentPage:this.props.currentPage,setPage:this.props.setPage,previous:this.props.previous,next:this.props.next}))}});e.exports=a},"./node_modules/griddle-react/modules/customRowComponentContainer.jsx.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/index.js"),r=s({getDefaultProps:function(){return{data:[],metadataColumns:[],className:"",customComponent:{},globalData:{}}},render:function(){var e=this;if("function"!=typeof e.props.customComponent)return console.log("Couldn't find valid template."),n.createElement("div",{className:this.props.className});var t=this.props.data.map(function(t,o){return n.createElement(e.props.customComponent,{data:t,metadataColumns:e.props.metadataColumns,key:o,globalData:e.props.globalData})});return this.props.showPager&&this.props.pagingContent,n.createElement("div",{className:this.props.className,style:this.props.style},t)}});e.exports=r},"./node_modules/griddle-react/modules/deep.js":function(e,t,o){"use strict";function n(e){for(var t,o=/\[("|')(.+)\1\]|([^.\[\]]+)/g,n=[];null!==(t=o.exec(e));)n.push(t[2]||t[3]);return n}function s(e,t){if("string"==typeof t){if(void 0!==e[t])return e[t];t=n(t)}for(var o=-1,s=t.length;++o<s&&null!=e;)e=e[t[o]];return o===s?e:void 0}function r(e,t){var o,n={},r=e;o=function(e,t){return e in t},r=Object(r);for(var a=0,i=t.length;a<i;a++){var l=t[a];o(l,r)&&(n[l]=s(r,l))}return n}function a(e,t){var o=[];return u(e,function(e,n){var s=t?t+"."+n:n;!d(e)||c(e)||p(e)||e instanceof Date?o.push(s):o=o.concat(a(e,s))}),o}function i(e,t){c(e)?u(e,function(e){i(e,t)}):h(e)?m(e,function(e){i(e,t)}):t(e)}function l(e){var t=[];return i(e,function(e){t.push(e)}),t}var u=o("./node_modules/lodash/forEach.js"),d=o("./node_modules/lodash/isObject.js"),c=o("./node_modules/lodash/isArray.js"),p=o("./node_modules/lodash/isFunction.js"),h=o("./node_modules/lodash/isPlainObject.js"),m=o("./node_modules/lodash/forOwn.js");e.exports={pick:r,getAt:s,keys:a,getObjectValues:l}},"./node_modules/griddle-react/modules/gridFilter.jsx.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/index.js"),r=s({getDefaultProps:function(){return{placeholderText:""}},handleChange:function(e){this.props.changeFilter(e.target.value)},render:function(){return n.createElement("div",{className:"filter-container"},n.createElement("input",{type:"text",name:"filter",placeholder:this.props.placeholderText,className:"form-control",onChange:this.handleChange}))}});e.exports=r},"./node_modules/griddle-react/modules/gridNoData.jsx.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/index.js"),r=s({getDefaultProps:function(){return{noDataMessage:"No Data"}},render:function(){return n.createElement("div",null,this.props.noDataMessage)}});e.exports=r},"./node_modules/griddle-react/modules/gridPagination.jsx.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/index.js"),r=o("./node_modules/lodash/assign.js"),a=s({getDefaultProps:function(){return{maxPage:0,nextText:"",previousText:"",currentPage:0,useGriddleStyles:!0,nextClassName:"griddle-next",previousClassName:"griddle-previous",nextIconComponent:null,previousIconComponent:null}},pageChange:function(e){this.props.setPage(parseInt(e.target.value,10)-1)},render:function(){var e="",t="";this.props.currentPage>0&&(e=n.createElement("button",{type:"button",onClick:this.props.previous,style:this.props.useGriddleStyles?{color:"#222",border:"none",background:"none",margin:"0 0 0 10px"}:null},this.props.previousIconComponent,this.props.previousText)),this.props.currentPage!==this.props.maxPage-1&&(t=n.createElement("button",{type:"button",onClick:this.props.next,style:this.props.useGriddleStyles?{color:"#222",border:"none",background:"none",margin:"0 10px 0 0"}:null},this.props.nextText,this.props.nextIconComponent));var o=null,s=null,a=null;if(!0===this.props.useGriddleStyles){var i={float:"left",minHeight:"1px",marginTop:"5px"};a=r({textAlign:"right",width:"34%"},i),s=r({textAlign:"center",width:"33%"},i),o=r({width:"33%"},i)}for(var l=[],u=1;u<=this.props.maxPage;u++)l.push(n.createElement("option",{value:u,key:u},u));return n.createElement("div",{style:this.props.useGriddleStyles?{minHeight:"35px"}:null},n.createElement("div",{className:this.props.previousClassName,style:o},e),n.createElement("div",{className:"griddle-page",style:s},n.createElement("select",{value:this.props.currentPage+1,onChange:this.pageChange},l)," / ",this.props.maxPage),n.createElement("div",{className:this.props.nextClassName,style:a},t))}});e.exports=a},"./node_modules/griddle-react/modules/gridRow.jsx.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/index.js"),r=(o("./node_modules/griddle-react/modules/columnProperties.js"),o("./node_modules/griddle-react/modules/deep.js")),a=o("./node_modules/lodash/isFunction.js"),i=o("./node_modules/lodash/zipObject.js"),l=o("./node_modules/lodash/assign.js"),u=o("./node_modules/lodash/defaults.js"),d=o("./node_modules/lodash/toPairs.js"),c=o("./node_modules/lodash/without.js"),p=s({getDefaultProps:function(){return{isChildRow:!1,showChildren:!1,data:{},columnSettings:null,rowSettings:null,hasChildren:!1,useGriddleStyles:!0,useGriddleIcons:!0,isSubGriddle:!1,paddingHeight:null,rowHeight:null,parentRowCollapsedClassName:"parent-row",parentRowExpandedClassName:"parent-row expanded",parentRowCollapsedComponent:"▶",parentRowExpandedComponent:"▼",onRowClick:null,multipleSelectionSettings:null,onRowMouseEnter:null,onRowMouseLeave:null,onRowWillMount:null,onRowWillUnmount:null}},componentWillMount:function(){null!==this.props.onRowWillMount&&a(this.props.onRowWillMount)&&this.props.onRowWillMount(this)},componentWillUnmount:function(){null!==this.props.onRowWillUnmount&&a(this.props.onRowWillUnmount)&&this.props.onRowWillUnmount(this)},handleClick:function(e){null!==this.props.onRowClick&&a(this.props.onRowClick)?this.props.onRowClick(this,e):this.props.hasChildren&&this.props.toggleChildren()},handleMouseEnter:function(e){null!==this.props.onRowMouseEnter&&a(this.props.onRowMouseEnter)&&this.props.onRowMouseEnter(this,e)},handleMouseLeave:function(e){null!==this.props.onRowMouseLeave&&a(this.props.onRowMouseLeave)&&this.props.onRowMouseLeave(this,e)},handleSelectionChange:function(e){},handleSelectClick:function(e){this.props.multipleSelectionSettings.isMultipleSelection&&("checkbox"===e.target.type?this.props.multipleSelectionSettings.toggleSelectRow(this.props.data,this.refs.selected.checked):this.props.multipleSelectionSettings.toggleSelectRow(this.props.data,!this.refs.selected.checked))},verifyProps:function(){null===this.props.columnSettings&&console.error("gridRow: The columnSettings prop is null and it shouldn't be")},formatData:function(e){return"boolean"==typeof e?String(e):e},render:function(){var e=this;this.verifyProps();var t=this,o=null;this.props.useGriddleStyles&&(o={margin:"0px",padding:t.props.paddingHeight+"px 5px "+t.props.paddingHeight+"px 5px",height:t.props.rowHeight?this.props.rowHeight-2*t.props.paddingHeight+"px":null,backgroundColor:"#FFF",borderTopColor:"#DDD",color:"#222"});var s=this.props.columnSettings.getColumns(),p=i(s,[]),h=l({},this.props.data);u(h,p);var m,f,_=d(r.pick(h,c(s,"children"))),g=_.map(function(t,s){var r=null,a=e.props.columnSettings.getColumnMetadataByName(t[0]),i=0===s&&e.props.hasChildren&&!1===e.props.showChildren&&e.props.useGriddleIcons?n.createElement("span",{style:e.props.useGriddleStyles?{fontSize:"10px",marginRight:"5px"}:null},e.props.parentRowCollapsedComponent):0===s&&e.props.hasChildren&&e.props.showChildren&&e.props.useGriddleIcons?n.createElement("span",{style:e.props.useGriddleStyles?{fontSize:"10px"}:null},e.props.parentRowExpandedComponent):"";if(0===s&&e.props.isChildRow&&e.props.useGriddleStyles&&(o=l(o,{paddingLeft:10})),e.props.columnSettings.hasColumnMetadata()&&void 0!==a&&null!==a)if(void 0!==a.customComponent&&null!==a.customComponent){var u=n.createElement(a.customComponent,{data:t[1],rowData:h,metadata:a});r=n.createElement("td",{onClick:e.handleClick,onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave,className:a.cssClassName,key:s,style:o},u)}else r=n.createElement("td",{onClick:e.handleClick,onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave,className:a.cssClassName,key:s,style:o},i,e.formatData(t[1]));return r||n.createElement("td",{onClick:e.handleClick,onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave,key:s,style:o},i,t[1])});null!==this.props.onRowClick&&a(this.props.onRowClick)?(m=null,f=this.handleSelectClick):this.props.multipleSelectionSettings&&this.props.multipleSelectionSettings.isMultipleSelection?(m=this.handleSelectClick,f=null):(m=null,f=null),g&&this.props.multipleSelectionSettings&&this.props.multipleSelectionSettings.isMultipleSelection&&(this.props.multipleSelectionSettings.getSelectedRowIds(),g.unshift(n.createElement("td",{key:"selection",style:o,className:"griddle-select griddle-select-cell",onClick:f},n.createElement("input",{type:"checkbox",checked:this.props.multipleSelectionSettings.getIsRowChecked(h),onChange:this.handleSelectionChange,ref:"selected"}))));var v=t.props.rowSettings&&t.props.rowSettings.getBodyRowMetadataClass(t.props.data)||"standard-row";return t.props.isChildRow?v="child-row":t.props.hasChildren&&(v=t.props.showChildren?this.props.parentRowExpandedClassName:this.props.parentRowCollapsedClassName),n.createElement("tr",{onClick:m,className:v},g)}});e.exports=p},"./node_modules/griddle-react/modules/gridRowContainer.jsx.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/index.js"),r=(o("./node_modules/griddle-react/modules/columnProperties.js"),o("./node_modules/lodash/pick.js")),a=s({getDefaultProps:function(){return{useGriddleStyles:!0,useGriddleIcons:!0,isSubGriddle:!1,columnSettings:null,rowSettings:null,paddingHeight:null,rowHeight:null,parentRowCollapsedClassName:"parent-row",parentRowExpandedClassName:"parent-row expanded",parentRowCollapsedComponent:"▶",parentRowExpandedComponent:"▼",onRowClick:null,onRowMouseEnter:null,onRowMouseLeave:null,onRowWillMount:null,onRowWillUnmount:null,multipleSelectionSettings:null}},getInitialState:function(){return{data:{},showChildren:!1}},componentWillReceiveProps:function(){this.setShowChildren(!1)},toggleChildren:function(){this.setShowChildren(!1===this.state.showChildren)},setShowChildren:function(e){this.setState({showChildren:e})},verifyProps:function(){null===this.props.columnSettings&&console.error("gridRowContainer: The columnSettings prop is null and it shouldn't be")},render:function(){this.verifyProps();var e=this;if(void 0===this.props.data)return n.createElement("tbody",null);var t=[],o=this.props.columnSettings.getColumns();t.push(n.createElement(this.props.rowSettings.rowComponent,{useGriddleStyles:this.props.useGriddleStyles,isSubGriddle:this.props.isSubGriddle,data:this.props.rowSettings.isCustom?r(this.props.data,o):this.props.data,rowData:this.props.rowSettings.isCustom?this.props.data:null,columnSettings:this.props.columnSettings,rowSettings:this.props.rowSettings,hasChildren:e.props.hasChildren,toggleChildren:e.toggleChildren,showChildren:e.state.showChildren,key:e.props.uniqueId+"_base_row",useGriddleIcons:e.props.useGriddleIcons,parentRowExpandedClassName:this.props.parentRowExpandedClassName,parentRowCollapsedClassName:this.props.parentRowCollapsedClassName,parentRowExpandedComponent:this.props.parentRowExpandedComponent,parentRowCollapsedComponent:this.props.parentRowCollapsedComponent,paddingHeight:e.props.paddingHeight,rowHeight:e.props.rowHeight,onRowClick:e.props.onRowClick,onRowMouseEnter:e.props.onRowMouseEnter,onRowMouseLeave:e.props.onRowMouseLeave,multipleSelectionSettings:this.props.multipleSelectionSettings,onRowWillMount:e.props.onRowWillMount,onRowWillUnmount:e.props.onRowWillUnmount}));var s=null;return e.state.showChildren&&(s=e.props.hasChildren&&this.props.data.children.map(function(t,o){var s=e.props.rowSettings.getRowKey(t,o);if(void 0!==t.children){var r=e.constructor.Griddle;return n.createElement("tr",{key:s,style:{paddingLeft:5}},n.createElement("td",{colSpan:e.props.columnSettings.getVisibleColumnCount(),className:"griddle-parent",style:e.props.useGriddleStyles?{border:"none",padding:"0 0 0 5px"}:null},n.createElement(r,{rowMetadata:{key:"id"},isSubGriddle:!0,results:[t],columns:e.props.columnSettings.getColumns(),tableClassName:e.props.tableClassName,parentRowExpandedClassName:e.props.parentRowExpandedClassName,parentRowCollapsedClassName:e.props.parentRowCollapsedClassName,showTableHeading:!1,showPager:!1,columnMetadata:e.props.columnSettings.columnMetadata,parentRowExpandedComponent:e.props.parentRowExpandedComponent,parentRowCollapsedComponent:e.props.parentRowCollapsedComponent,paddingHeight:e.props.paddingHeight,rowHeight:e.props.rowHeight})))}return n.createElement(e.props.rowSettings.rowComponent,{useGriddleStyles:e.props.useGriddleStyles,isSubGriddle:e.props.isSubGriddle,data:t,columnSettings:e.props.columnSettings,isChildRow:!0,columnMetadata:e.props.columnSettings.columnMetadata,key:s})})),!1===e.props.hasChildren?t[0]:n.createElement("tbody",null,e.state.showChildren?t.concat(s):t)}});e.exports=a},"./node_modules/griddle-react/modules/gridSettings.jsx.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/index.js"),r=o("./node_modules/lodash/includes.js"),a=o("./node_modules/lodash/without.js"),i=o("./node_modules/lodash/find.js"),l=s({getDefaultProps:function(){return{columns:[],columnMetadata:[],selectedColumns:[],settingsText:"",maxRowsText:"",resultsPerPage:0,enableToggleCustom:!1,useCustomComponent:!1,useGriddleStyles:!0,toggleCustomComponent:function(){}}},setPageSize:function(e){var t=parseInt(e.target.value,10);this.props.setPageSize(t)},handleChange:function(e){var t=e.target.dataset?e.target.dataset.name:e.target.getAttribute("data-name");!0===e.target.checked&&!1===r(this.props.selectedColumns,t)?(this.props.selectedColumns.push(t),this.props.setColumns(this.props.selectedColumns)):this.props.setColumns(a(this.props.selectedColumns,t))},render:function(){var e=this,t=[];!1===e.props.useCustomComponent&&(t=this.props.columns.map(function(t,o){var s=r(e.props.selectedColumns,t),a=i(e.props.columnMetadata,{columnName:t}),l=t;return void 0!==a&&void 0!==a.displayName&&null!=a.displayName&&(l=a.displayName),void 0!==a&&null!=a&&a.locked?n.createElement("div",{className:"column checkbox"},n.createElement("label",null,n.createElement("input",{type:"checkbox",disabled:!0,name:"check",checked:s,"data-name":t}),l)):void 0!==a&&null!=a&&void 0!==a.visible&&!1===a.visible?null:n.createElement("div",{className:"griddle-column-selection checkbox",key:t,style:e.props.useGriddleStyles?{float:"left",width:"20%"}:null},n.createElement("label",null,n.createElement("input",{type:"checkbox",name:"check",onChange:e.handleChange,checked:s,"data-name":t}),l))}));var o=e.props.enableToggleCustom?n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:"maxRows"},n.createElement("input",{type:"checkbox",checked:this.props.useCustomComponent,onChange:this.props.toggleCustomComponent})," ",this.props.enableCustomFormatText)):"",s=this.props.showSetPageSize?n.createElement("div",null,n.createElement("label",{htmlFor:"maxRows"},this.props.maxRowsText,":",n.createElement("select",{onChange:this.setPageSize,value:this.props.resultsPerPage},n.createElement("option",{value:"5"},"5"),n.createElement("option",{value:"10"},"10"),n.createElement("option",{value:"25"},"25"),n.createElement("option",{value:"50"},"50"),n.createElement("option",{value:"100"},"100")))):"";return n.createElement("div",{className:"griddle-settings",style:this.props.useGriddleStyles?{backgroundColor:"#FFF",border:"1px solid #DDD",color:"#222",padding:"10px",marginBottom:"10px"}:null},n.createElement("h6",null,this.props.settingsText),n.createElement("div",{className:"griddle-columns",style:this.props.useGriddleStyles?{clear:"both",display:"table",width:"100%",borderBottom:"1px solid #EDEDED",marginBottom:"10px"}:null},t),s,o)}});e.exports=l},"./node_modules/griddle-react/modules/gridTable.jsx.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/index.js"),r=o("./node_modules/griddle-react/modules/gridTitle.jsx.js"),a=o("./node_modules/griddle-react/modules/gridRowContainer.jsx.js"),i=(o("./node_modules/griddle-react/modules/columnProperties.js"),o("./node_modules/griddle-react/modules/rowProperties.js"),s({getDefaultProps:function(){return{data:[],columnSettings:null,rowSettings:null,sortSettings:null,multipleSelectionSettings:null,className:"",enableInfiniteScroll:!1,nextPage:null,hasMorePages:!1,useFixedHeader:!1,useFixedLayout:!0,paddingHeight:null,rowHeight:null,filterByColumn:null,infiniteScrollLoadTreshold:null,bodyHeight:null,useGriddleStyles:!0,useGriddleIcons:!0,isSubGriddle:!1,parentRowCollapsedClassName:"parent-row",parentRowExpandedClassName:"parent-row expanded",parentRowCollapsedComponent:"▶",parentRowExpandedComponent:"▼",externalLoadingComponent:null,externalIsLoading:!1,onRowClick:null,onRowMouseEnter:null,onRowMouseLeave:null,onRowWillMount:null,onRowWillUnmount:null}},getInitialState:function(){return{scrollTop:0,scrollHeight:this.props.bodyHeight,clientHeight:this.props.bodyHeight}},componentDidMount:function(){this.gridScroll()},componentDidUpdate:function(e,t){this.gridScroll()},gridScroll:function(){if(this.props.enableInfiniteScroll&&!this.props.externalIsLoading){var e=this.refs.scrollable,t=e.scrollTop,o=e.scrollHeight,n=e.clientHeight;if(null!==this.props.rowHeight&&this.state.scrollTop!==t&&Math.abs(this.state.scrollTop-t)>=this.getAdjustedRowHeight()){var s={scrollTop:t,scrollHeight:o,clientHeight:n};this.setState(s)}.6*(o-(t+n)-this.props.infiniteScrollLoadTreshold)<=this.props.infiniteScrollLoadTreshold&&this.props.nextPage()}},verifyProps:function(){null===this.props.columnSettings&&console.error("gridTable: The columnSettings prop is null and it shouldn't be"),null===this.props.rowSettings&&console.error("gridTable: The rowSettings prop is null and it shouldn't be")},getAdjustedRowHeight:function(){return this.props.rowHeight+2*this.props.paddingHeight},getNodeContent:function(){this.verifyProps();var e=this,t=!1;if(!this.props.externalIsLoading||this.props.enableInfiniteScroll){var o=e.props.data,s=null,r=null;if(this.props.enableInfiniteScroll&&null!==this.props.rowHeight&&void 0!==this.refs.scrollable){var i=e.getAdjustedRowHeight(),l=Math.ceil(e.state.clientHeight/i),u=Math.max(0,Math.floor(e.state.scrollTop/i)-.25*l),d=Math.min(u+1.25*l,this.props.data.length-1);o=o.slice(u,d+1);var c={height:u*i+"px"};s=n.createElement("tr",{key:"above-"+c.height,style:c});var p={height:(this.props.data.length-d)*i+"px"};r=n.createElement("tr",{key:"below-"+p.height,style:p})}var h=o.map(function(o,s){var r=void 0!==o.children&&o.children.length>0,i=e.props.rowSettings.getRowKey(o,s);return r&&(t=r),n.createElement(a,{useGriddleStyles:e.props.useGriddleStyles,isSubGriddle:e.props.isSubGriddle,parentRowExpandedClassName:e.props.parentRowExpandedClassName,parentRowCollapsedClassName:e.props.parentRowCollapsedClassName,parentRowExpandedComponent:e.props.parentRowExpandedComponent,parentRowCollapsedComponent:e.props.parentRowCollapsedComponent,data:o,key:i+"-container",uniqueId:i,columnSettings:e.props.columnSettings,rowSettings:e.props.rowSettings,paddingHeight:e.props.paddingHeight,multipleSelectionSettings:e.props.multipleSelectionSettings,rowHeight:e.props.rowHeight,hasChildren:r,tableClassName:e.props.className,onRowClick:e.props.onRowClick,onRowMouseEnter:e.props.onRowMouseEnter,onRowMouseLeave:e.props.onRowMouseLeave,onRowWillMount:e.props.onRowWillMount,onRowWillUnmount:e.props.onRowWillUnmount})});if(this.props.showNoData){var m=this.props.columnSettings.getVisibleColumnCount();h.push(n.createElement("tr",{key:"no-data-section"},n.createElement("td",{colSpan:m},this.props.noDataSection)))}return s&&h.unshift(s),r&&h.push(r),{nodes:h,anyHasChildren:t}}return null},render:function(){var e=[],t=!1,o=this.getNodeContent();o&&(e=o.nodes,t=o.anyHasChildren);var s=null,a=null,i={width:"100%"};if(this.props.useFixedLayout&&(i.tableLayout="fixed"),this.props.enableInfiniteScroll&&(s={position:"relative",overflowY:"scroll",height:this.props.bodyHeight+"px",width:"100%"}),this.props.externalIsLoading){var l=null,u=null;this.props.useGriddleStyles&&(l={textAlign:"center",paddingBottom:"40px"}),u=this.props.columnSettings.getVisibleColumnCount();var d=this.props.externalLoadingComponent?n.createElement(this.props.externalLoadingComponent,null):n.createElement("div",null,"Loading...");a=n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",{style:l,colSpan:u},d)))}var c=this.props.showTableHeading?n.createElement(r,{useGriddleStyles:this.props.useGriddleStyles,useGriddleIcons:this.props.useGriddleIcons,sortSettings:this.props.sortSettings,multipleSelectionSettings:this.props.multipleSelectionSettings,columnSettings:this.props.columnSettings,filterByColumn:this.props.filterByColumn,rowSettings:this.props.rowSettings}):void 0;t||(e=n.createElement("tbody",null,e));var p=n.createElement("tbody",null);if(this.props.showPager){var h=this.props.useGriddleStyles?{padding:"0px",backgroundColor:"#EDEDED",border:"0px",color:"#222",height:this.props.showNoData?"20px":null}:null;p=n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",{colSpan:this.props.multipleSelectionSettings.isMultipleSelection?this.props.columnSettings.getVisibleColumnCount()+1:this.props.columnSettings.getVisibleColumnCount(),style:h,className:"footer-container"},this.props.showNoData?null:this.props.pagingContent)))}return this.props.useFixedHeader?(this.props.useGriddleStyles&&(i.tableLayout="fixed"),n.createElement("div",null,n.createElement("table",{className:this.props.className,style:this.props.useGriddleStyles&&i||null},c),n.createElement("div",{ref:"scrollable",onScroll:this.gridScroll,style:s},n.createElement("table",{className:this.props.className,style:this.props.useGriddleStyles&&i||null},e,a,p)))):n.createElement("div",{ref:"scrollable",onScroll:this.gridScroll,style:s},n.createElement("table",{className:this.props.className,style:this.props.useGriddleStyles&&i||null},c,e,a,p))}}));e.exports=i},"./node_modules/griddle-react/modules/gridTitle.jsx.js":function(e,t,o){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},s=o(0),r=o("./node_modules/create-react-class/index.js"),a=(o("./node_modules/griddle-react/modules/columnProperties.js"),o("./node_modules/lodash/assign.js")),i=r({render:function(){return s.createElement("span",null,this.props.displayName)}}),l=r({getDefaultProps:function(){return{columnSettings:null,filterByColumn:function(){},rowSettings:null,sortSettings:null,multipleSelectionSettings:null,headerStyle:null,useGriddleStyles:!0,useGriddleIcons:!0,headerStyles:{}}},componentWillMount:function(){this.verifyProps()},sort:function(e){var t=this;return function(o){t.props.sortSettings.changeSort(e)}},toggleSelectAll:function(e){this.props.multipleSelectionSettings.toggleSelectAll()},handleSelectionChange:function(e){},verifyProps:function(){null===this.props.columnSettings&&console.error("gridTitle: The columnSettings prop is null and it shouldn't be"),null===this.props.sortSettings&&console.error("gridTitle: The sortSettings prop is null and it shouldn't be")},render:function(){this.verifyProps();var e=this,t={},o=this.props.columnSettings.getColumns().map(function(o,r){var l={},u="",d=e.props.columnSettings.getMetadataColumnProperty(o,"sortable",!0),c=d?e.props.sortSettings.sortDefaultComponent:null;e.props.sortSettings.sortColumn==o&&"asc"===e.props.sortSettings.sortDirection?(u=e.props.sortSettings.sortAscendingClassName,c=e.props.useGriddleIcons&&e.props.sortSettings.sortAscendingComponent):e.props.sortSettings.sortColumn==o&&"desc"===e.props.sortSettings.sortDirection&&(u+=e.props.sortSettings.sortDescendingClassName,c=e.props.useGriddleIcons&&e.props.sortSettings.sortDescendingComponent);var p=e.props.columnSettings.getColumnMetadataByName(o),h=e.props.columnSettings.getMetadataColumnProperty(o,"displayName",o),m=e.props.columnSettings.getMetadataColumnProperty(o,"customHeaderComponent",i),f=e.props.columnSettings.getMetadataColumnProperty(o,"customHeaderComponentProps",{});u=null==p?u:(u&&u+" "||u)+e.props.columnSettings.getMetadataColumnProperty(o,"cssClassName",""),e.props.useGriddleStyles&&(l={backgroundColor:"#EDEDEF",border:"0px",borderBottom:"1px solid #DDD",color:"#222",padding:"5px",cursor:d?"pointer":"default"}),t=p&&p.titleStyles?a({},l,p.titleStyles):a({},l);var _=h?"th":"td";return s.createElement(_,{onClick:d?e.sort(o):null,"data-title":o,className:u,key:o,style:t},s.createElement(m,n({columnName:o,displayName:h,filterByColumn:e.props.filterByColumn},f)),c)});o&&this.props.multipleSelectionSettings.isMultipleSelection&&o.unshift(s.createElement("th",{key:"selection",onClick:this.toggleSelectAll,style:t,className:"griddle-select griddle-select-title"},s.createElement("input",{type:"checkbox",checked:this.props.multipleSelectionSettings.getIsSelectAllChecked(),onChange:this.handleSelectionChange})));var r=e.props.rowSettings&&e.props.rowSettings.getHeaderRowMetadataClass()||null;return s.createElement("thead",null,s.createElement("tr",{className:r,style:this.props.headerStyles},o))}});e.exports=l},"./node_modules/griddle-react/modules/griddle.jsx.js":function(e,t,o){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},s=o(0),r=o(1),a=o("./node_modules/create-react-class/index.js"),i=o("./node_modules/griddle-react/modules/gridTable.jsx.js"),l=o("./node_modules/griddle-react/modules/gridFilter.jsx.js"),u=o("./node_modules/griddle-react/modules/gridPagination.jsx.js"),d=o("./node_modules/griddle-react/modules/gridSettings.jsx.js"),c=o("./node_modules/griddle-react/modules/gridNoData.jsx.js"),p=o("./node_modules/griddle-react/modules/gridRow.jsx.js"),h=o("./node_modules/griddle-react/modules/gridRowContainer.jsx.js"),m=o("./node_modules/griddle-react/modules/customRowComponentContainer.jsx.js"),f=o("./node_modules/griddle-react/modules/customPaginationContainer.jsx.js"),_=o("./node_modules/griddle-react/modules/customFilterContainer.jsx.js"),g=o("./node_modules/griddle-react/modules/columnProperties.js"),v=o("./node_modules/griddle-react/modules/rowProperties.js"),y=o("./node_modules/griddle-react/modules/deep.js"),j=o("./node_modules/lodash/drop.js"),b=o("./node_modules/lodash/dropRight.js"),C=o("./node_modules/lodash/find.js"),w=o("./node_modules/lodash/take.js"),S=o("./node_modules/lodash/forEach.js"),x=o("./node_modules/lodash/initial.js"),E=o("./node_modules/lodash/intersection.js"),P=o("./node_modules/lodash/isArray.js"),O=o("./node_modules/lodash/isEmpty.js"),M=o("./node_modules/lodash/isNull.js"),R=o("./node_modules/lodash/isUndefined.js"),V=o("./node_modules/lodash/omit.js"),A=o("./node_modules/lodash/map.js"),T=o("./node_modules/lodash/assign.js"),N=o("./node_modules/lodash/filter.js"),k=o("./node_modules/lodash/orderBy.js"),I=(o("./node_modules/lodash/property.js"),o("./node_modules/lodash/get.js")),D=o("./node_modules/lodash/some.js"),H=a({statics:{GridTable:i,GridFilter:l,GridPagination:u,GridSettings:d,GridRow:p},columnSettings:null,rowSettings:null,getDefaultProps:function(){return{columns:[],gridMetadata:null,columnMetadata:[],rowMetadata:null,results:[],initialSort:"",gridClassName:"",tableClassName:"",customRowComponentClassName:"",settingsText:"Settings",filterPlaceholderText:"Filter Results",nextText:"Next",previousText:"Previous",maxRowsText:"Rows per page",enableCustomFormatText:"Enable Custom Formatting",childrenColumnName:"children",metadataColumns:[],showFilter:!1,showSettings:!1,useCustomRowComponent:!1,useCustomGridComponent:!1,useCustomPagerComponent:!1,useCustomFilterer:!1,useCustomFilterComponent:!1,useGriddleStyles:!0,useGriddleIcons:!0,customRowComponent:null,customGridComponent:null,customPagerComponent:{},customFilterComponent:null,customFilterer:null,globalData:null,enableToggleCustom:!1,noDataMessage:"There is no data to display.",noDataClassName:"griddle-nodata",customNoDataComponent:null,customNoDataComponentProps:null,allowEmptyGrid:!1,showTableHeading:!0,showPager:!0,useFixedHeader:!1,useExternal:!1,externalSetPage:null,externalChangeSort:null,externalSetFilter:null,externalSetPageSize:null,externalMaxPage:null,externalCurrentPage:null,externalSortColumn:null,externalSortAscending:!0,externalLoadingComponent:null,externalIsLoading:!1,enableInfiniteScroll:!1,bodyHeight:null,paddingHeight:5,rowHeight:25,infiniteScrollLoadTreshold:50,useFixedLayout:!0,isSubGriddle:!1,enableSort:!0,onRowClick:null,onRowMouseEnter:null,onRowMouseLeave:null,onRowWillMount:null,onRowWillUnmount:null,sortAscendingClassName:"sort-ascending",sortDescendingClassName:"sort-descending",parentRowCollapsedClassName:"parent-row",parentRowExpandedClassName:"parent-row expanded",settingsToggleClassName:"settings",nextClassName:"griddle-next",previousClassName:"griddle-previous",headerStyles:{},sortAscendingComponent:" ▲",sortDescendingComponent:" ▼",sortDefaultComponent:null,parentRowCollapsedComponent:"▶",parentRowExpandedComponent:"▼",settingsIconComponent:"",nextIconComponent:"",previousIconComponent:"",isMultipleSelection:!1,selectedRowIds:[],uniqueIdentifier:"id",onSelectionChange:null,columnFilterFunc:null}},propTypes:{isMultipleSelection:r.bool,selectedRowIds:r.oneOfType([r.arrayOf(r.number),r.arrayOf(r.string)]),uniqueIdentifier:r.string,onSelectionChange:r.func,columnFilterFunc:r.func},defaultFilter:function(e,t){var o=this;return N(e,function(e){for(var n=y.keys(e),s=0;s<n.length;s++)if(o.columnSettings.getMetadataColumnProperty(n[s],"filterable",!0)&&(y.getAt(e,n[s])||"").toString().toLowerCase().indexOf(t.toLowerCase())>=0)return!0;return!1})},defaultColumnFilter:function(e,t,o){var n=A(P(o)?o:[o],function(e){return(e||"").toLowerCase()});return D(y.getObjectValues(t),function(e){return e=e.toString().toLowerCase(),D(n,function(t){return e.indexOf(t)>=0})})},filterByColumnFilters:function(e){var t=this.props.columnFilterFunc||this.defaultColumnFilter,o=Object.keys(e).reduce(function(o,n){return N(o,function(o){var s=y.getAt(o,n||""),r=e[n];return t(n||"",s,r)})},this.props.results),n={columnFilters:e};e?(n.filteredResults=o,n.maxPage=this.getMaxPage(n.filteredResults)):this.state.filter?n.filteredResults=this.props.useCustomFilterer?this.props.customFilterer(this.props.results,filter):this.defaultFilter(this.props.results,filter):n.filteredResults=null,this.setState(n)},filterByColumn:function(e,t){var o=this.state.columnFilters;if(o.hasOwnProperty(t)&&!e)o=V(o,t);else{var n={};n[t]=e,o=T({},o,n)}this.filterByColumnFilters(o)},setFilter:function(e){var t=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(this.props.useExternal)return void this.props.externalSetFilter(e);var o=this,n={page:0,filter:e};n.filteredResults=this.props.useCustomFilterer?this.props.customFilterer(t||this.props.results,e):this.defaultFilter(t||this.props.results,e),n.maxPage=o.getMaxPage(n.filteredResults),(R(e)||M(e)||O(e))&&(n.filter=e,n.filteredResults=null),o.setState(n),this._resetSelectedRows()},setPageSize:function(e){if(this.props.useExternal)return this.setState({resultsPerPage:e}),void this.props.externalSetPageSize(e);this.state.resultsPerPage=e,this.setMaxPage()},toggleColumnChooser:function(){this.setState({showColumnChooser:!this.state.showColumnChooser})},isNullOrUndefined:function(e){return void 0===e||null===e},shouldUseCustomRowComponent:function(){return this.isNullOrUndefined(this.state.useCustomRowComponent)?this.props.useCustomRowComponent:this.state.useCustomRowComponent},shouldUseCustomGridComponent:function(){return this.isNullOrUndefined(this.state.useCustomGridComponent)?this.props.useCustomGridComponent:this.state.useCustomGridComponent},toggleCustomComponent:function(){"grid"===this.state.customComponentType?this.setState({useCustomGridComponent:!this.shouldUseCustomGridComponent()}):"row"===this.state.customComponentType&&this.setState({useCustomRowComponent:!this.shouldUseCustomRowComponent()})},getMaxPage:function(e,t){return this.props.useExternal?this.props.externalMaxPage:(t||(t=(e||this.getCurrentResults()).length),Math.ceil(t/this.state.resultsPerPage))},setMaxPage:function(e){var t=this.getMaxPage(e);this.state.maxPage!==t&&this.setState({page:0,maxPage:t,filteredColumns:this.columnSettings.filteredColumns})},setPage:function(e){if(this.props.useExternal)return void this.props.externalSetPage(e);if(e*this.state.resultsPerPage<=this.state.resultsPerPage*this.state.maxPage){var t=this,o={page:e};t.setState(o)}this.props.enableInfiniteScroll&&this.setState({isSelectAllChecked:!1})},setColumns:function(e){this.columnSettings.filteredColumns=P(e)?e:[e],this.setState({filteredColumns:this.columnSettings.filteredColumns})},nextPage:function(){var e=this.getCurrentPage();e<this.getCurrentMaxPage()-1&&this.setPage(e+1)},previousPage:function(){var e=this.getCurrentPage();e>0&&this.setPage(e-1)},changeSort:function(e){if(!1!==this.props.enableSort){if(this.props.useExternal){var t=this.props.externalSortColumn!==e||!this.props.externalSortAscending;return this.setState({sortColumn:e,sortDirection:t?"asc":"desc"}),void this.props.externalChangeSort(e,t)}var o=C(this.props.columnMetadata,{columnName:e})||{},n=o.sortDirectionCycle?o.sortDirectionCycle:[null,"asc","desc"],s=null,r=n.indexOf(this.state.sortDirection&&e===this.state.sortColumn?this.state.sortDirection:null);r=(r+1)%n.length,s=n[r]?n[r]:null;var a={page:0,sortColumn:e,sortDirection:s};this.setState(a)}},componentWillReceiveProps:function(e){if(e.results!==this.props.results&&this.setFilter(this.state.filter,e.results),this.setMaxPage(e.results),e.resultsPerPage!==this.props.resultsPerPage&&this.setPageSize(e.resultsPerPage),this.columnSettings.columnMetadata=e.columnMetadata,e.results.length>0){var t=y.keys(e.results[0]);this.columnSettings.allColumns.length==t.length&&this.columnSettings.allColumns.every(function(e,o){return e===t[o]})||(this.columnSettings.allColumns=t)}else this.columnSettings.allColumns.length>0&&(this.columnSettings.allColumns=[]);if(e.selectedRowIds){var o=this.getDataForRender(this.getCurrentResults(e.results),this.columnSettings.getColumns(),!0);this.setState({isSelectAllChecked:this._getAreAllRowsChecked(e.selectedRowIds,A(o,this.props.uniqueIdentifier)),selectedRowIds:e.selectedRowIds})}},getInitialState:function(){return{maxPage:0,page:0,filteredResults:null,filteredColumns:[],filter:"",columnFilters:{},resultsPerPage:this.props.resultsPerPage||5,showColumnChooser:!1,isSelectAllChecked:!1,selectedRowIds:this.props.selectedRowIds}},componentWillMount:function(){this.verifyExternal(),this.verifyCustom(),this.columnSettings=new g(this.props.results.length>0?y.keys(this.props.results[0]):[],this.props.columns,this.props.childrenColumnName,this.props.columnMetadata,this.props.metadataColumns),this.rowSettings=new v(this.props.rowMetadata,this.props.useCustomTableRowComponent&&this.props.customTableRowComponent?this.props.customTableRowComponent:p,this.props.useCustomTableRowComponent),this.props.initialSort&&(this.props.useExternal?this.setState({sortColumn:this.props.externalSortColumn,sortDirection:this.props.externalSortAscending?"asc":"desc"}):this.changeSort(this.props.initialSort)),this.setMaxPage(),this.shouldUseCustomGridComponent()?this.setState({customComponentType:"grid"}):this.shouldUseCustomRowComponent()?this.setState({customComponentType:"row"}):this.setState({filteredColumns:this.columnSettings.filteredColumns})},componentDidMount:function(){if(this.props.componentDidMount&&"function"==typeof this.props.componentDidMount)return this.props.componentDidMount()},componentDidUpdate:function(){if(this.props.componentDidUpdate&&"function"==typeof this.props.componentDidUpdate)return this.props.componentDidUpdate(this.state)},verifyExternal:function(){!0===this.props.useExternal&&(null===this.props.externalSetPage&&console.error("useExternal is set to true but there is no externalSetPage function specified."),null===this.props.externalChangeSort&&console.error("useExternal is set to true but there is no externalChangeSort function specified."),null===this.props.externalSetFilter&&console.error("useExternal is set to true but there is no externalSetFilter function specified."),null===this.props.externalSetPageSize&&console.error("useExternal is set to true but there is no externalSetPageSize function specified."),null===this.props.externalMaxPage&&console.error("useExternal is set to true but externalMaxPage is not set."),null===this.props.externalCurrentPage&&console.error("useExternal is set to true but externalCurrentPage is not set. Griddle will not page correctly without that property when using external data."))},verifyCustom:function(){!0===this.props.useCustomGridComponent&&null===this.props.customGridComponent&&console.error("useCustomGridComponent is set to true but no custom component was specified."),!0===this.props.useCustomRowComponent&&null===this.props.customRowComponent&&console.error("useCustomRowComponent is set to true but no custom component was specified."),!0===this.props.useCustomGridComponent&&!0===this.props.useCustomRowComponent&&console.error("Cannot currently use both customGridComponent and customRowComponent."),!0===this.props.useCustomFilterer&&null===this.props.customFilterer&&console.error("useCustomFilterer is set to true but no custom filter function was specified."),!0===this.props.useCustomFilterComponent&&null===this.props.customFilterComponent&&console.error("useCustomFilterComponent is set to true but no customFilterComponent was specified.")},getDataForRender:function(e,t,o){var n=this,s=this;if(!this.props.useExternal){if(""!==this.state.sortColumn){var r,a=this.state.sortColumn,i=N(this.props.columnMetadata,{columnName:a}),l={columns:[],orders:[]};if(i.length>0&&(r=i[0].hasOwnProperty("customCompareFn")&&i[0].customCompareFn,i[0].multiSort&&(l=i[0].multiSort)),this.state.sortDirection)if("function"==typeof r)2===r.length?(e=e.sort(function(e,t){return r(I(e,a),I(t,a))}),"desc"===this.state.sortDirection&&e.reverse()):1===r.length&&(e=k(e,function(e){return r(I(e,a))},[this.state.sortDirection]));else{var u=[function(e){return(I(e,a)||"").toString().toLowerCase()}],d=[this.state.sortDirection];l.columns.forEach(function(e,t){u.push(function(t){return(I(t,e)||"").toString().toLowerCase()}),"asc"===l.orders[t]||"desc"===l.orders[t]?d.push(l.orders[t]):d.push(n.state.sortDirection)}),e=k(e,u,d)}}var c=this.getCurrentPage();if(!this.props.useExternal&&o&&this.state.resultsPerPage*(c+1)<=this.state.resultsPerPage*this.state.maxPage&&c>=0)if(this.isInfiniteScrollEnabled())e=w(e,(c+1)*this.state.resultsPerPage);else{var p=j(e,c*this.state.resultsPerPage);e=(b||x)(p,p.length-this.state.resultsPerPage)}}for(var h=[],m=0;m<e.length;m++){var f=e[m];void 0!==f[s.props.childrenColumnName]&&f[s.props.childrenColumnName].length>0&&(f.children=s.getDataForRender(f[s.props.childrenColumnName],t,!1),"children"!==s.props.childrenColumnName&&delete f[s.props.childrenColumnName]),h.push(f)}return h},getCurrentResults:function(e){return this.state.filteredResults||e||this.props.results},getCurrentPage:function(){return this.props.externalCurrentPage||this.state.page},getCurrentSort:function(){return this.props.useExternal?this.props.externalSortColumn:this.state.sortColumn},getCurrentSortAscending:function(){return this.props.useExternal?this.props.externalSortAscending:"asc"===this.state.sortDirection},getCurrentMaxPage:function(){return this.props.useExternal?this.props.externalMaxPage:this.state.maxPage},getSortObject:function(){return{enableSort:this.props.enableSort,changeSort:this.changeSort,sortColumn:this.getCurrentSort(),sortAscending:this.getCurrentSortAscending(),sortDirection:this.state.sortDirection,sortAscendingClassName:this.props.sortAscendingClassName,sortDescendingClassName:this.props.sortDescendingClassName,sortAscendingComponent:this.props.sortAscendingComponent,sortDescendingComponent:this.props.sortDescendingComponent,sortDefaultComponent:this.props.sortDefaultComponent}},_toggleSelectAll:function(){var e=this.getDataForRender(this.getCurrentResults(),this.columnSettings.getColumns(),!0),t=!this.state.isSelectAllChecked,o=JSON.parse(JSON.stringify(this.state.selectedRowIds)),n=this;S(e,function(e){n._updateSelectedRowIds(e[n.props.uniqueIdentifier],o,t)},this),this.setState({isSelectAllChecked:t,selectedRowIds:o}),this.props.onSelectionChange&&this.props.onSelectionChange(o,t)},_toggleSelectRow:function(e,t){var o=this.getDataForRender(this.getCurrentResults(),this.columnSettings.getColumns(),!0),n=JSON.parse(JSON.stringify(this.state.selectedRowIds));this._updateSelectedRowIds(e[this.props.uniqueIdentifier],n,t);var s=this._getAreAllRowsChecked(n,A(o,this.props.uniqueIdentifier));this.setState({isSelectAllChecked:s,selectedRowIds:n}),this.props.onSelectionChange&&this.props.onSelectionChange(n,s)},_updateSelectedRowIds:function(e,t,o){o?void 0===C(t,function(t){return e===t})&&t.push(e):t.splice(t.indexOf(e),1)},_getIsSelectAllChecked:function(){return this.state.isSelectAllChecked},_getAreAllRowsChecked:function(e,t){return t.length===E(t,e).length},_getIsRowChecked:function(e){return this.state.selectedRowIds.indexOf(e[this.props.uniqueIdentifier])>-1},getSelectedRowIds:function(){return this.state.selectedRowIds},_resetSelectedRows:function(){this.setState({isSelectAllChecked:!1,selectedRowIds:[]})},getMultipleSelectionObject:function(){return{isMultipleSelection:!C(this.props.results,function(e){return"children"in e})&&this.props.isMultipleSelection,toggleSelectAll:this._toggleSelectAll,getIsSelectAllChecked:this._getIsSelectAllChecked,toggleSelectRow:this._toggleSelectRow,getSelectedRowIds:this.getSelectedRowIds,getIsRowChecked:this._getIsRowChecked}},isInfiniteScrollEnabled:function(){return!this.props.useCustomPagerComponent&&this.props.enableInfiniteScroll},getClearFixStyles:function(){return{clear:"both",display:"table",width:"100%"}},getSettingsStyles:function(){return{float:"left",width:"50%",textAlign:"right"}},getFilterStyles:function(){return{float:"left",width:"50%",textAlign:"left",color:"#222",minHeight:"1px"}},getFilter:function(){return this.props.showFilter&&!1===this.shouldUseCustomGridComponent()?this.props.useCustomFilterComponent?s.createElement(_,{changeFilter:this.setFilter,placeholderText:this.props.filterPlaceholderText,customFilterComponent:this.props.customFilterComponent,results:this.props.results,currentResults:this.getCurrentResults()}):s.createElement(l,{changeFilter:this.setFilter,placeholderText:this.props.filterPlaceholderText}):""},getSettings:function(){return this.props.showSettings?s.createElement("button",{type:"button",className:this.props.settingsToggleClassName,onClick:this.toggleColumnChooser,style:this.props.useGriddleStyles?{background:"none",border:"none",padding:0,margin:0,fontSize:14}:null},this.props.settingsText,this.props.settingsIconComponent):""},getTopSection:function(e,t){if(!1===this.props.showFilter&&!1===this.props.showSettings)return"";var o=null,n=null,r=null;return this.props.useGriddleStyles&&(o=this.getFilterStyles(),n=this.getSettingsStyles(),r=this.getClearFixStyles()),s.createElement("div",{className:"top-section",style:r},s.createElement("div",{className:"griddle-filter",style:o},e),s.createElement("div",{className:"griddle-settings-toggle",style:n},t))},getPagingSection:function(e,t){if(!1!==(this.props.showPager&&!this.isInfiniteScrollEnabled()&&!this.shouldUseCustomGridComponent()))return s.createElement("div",{className:"griddle-footer"},this.props.useCustomPagerComponent?s.createElement(f,{customPagerComponentOptions:this.props.customPagerComponentOptions,next:this.nextPage,previous:this.previousPage,currentPage:e,maxPage:t,setPage:this.setPage,nextText:this.props.nextText,previousText:this.props.previousText,customPagerComponent:this.props.customPagerComponent}):s.createElement(u,{useGriddleStyles:this.props.useGriddleStyles,next:this.nextPage,previous:this.previousPage,nextClassName:this.props.nextClassName,nextIconComponent:this.props.nextIconComponent,previousClassName:this.props.previousClassName,previousIconComponent:this.props.previousIconComponent,currentPage:e,maxPage:t,setPage:this.setPage,nextText:this.props.nextText,previousText:this.props.previousText}))},getColumnSelectorSection:function(e,t){return this.state.showColumnChooser?s.createElement(d,{columns:e,selectedColumns:t,setColumns:this.setColumns,settingsText:this.props.settingsText,settingsIconComponent:this.props.settingsIconComponent,maxRowsText:this.props.maxRowsText,setPageSize:this.setPageSize,showSetPageSize:!this.shouldUseCustomGridComponent(),resultsPerPage:this.state.resultsPerPage,enableToggleCustom:this.props.enableToggleCustom,toggleCustomComponent:this.toggleCustomComponent,useCustomComponent:this.shouldUseCustomRowComponent()||this.shouldUseCustomGridComponent(),useGriddleStyles:this.props.useGriddleStyles,enableCustomFormatText:this.props.enableCustomFormatText,columnMetadata:this.props.columnMetadata}):""},getCustomGridSection:function(){return s.createElement(this.props.customGridComponent,n({data:this.props.results,className:this.props.customGridComponentClassName},this.props.gridMetadata))},getCustomRowSection:function(e,t,o,n,r){return s.createElement("div",null,s.createElement(m,{data:e,columns:t,metadataColumns:o,globalData:r,className:this.props.customRowComponentClassName,customComponent:this.props.customRowComponent,style:this.props.useGriddleStyles?this.getClearFixStyles():null}),this.props.showPager&&n)},getStandardGridSection:function(e,t,o,n,r){var a=this.getSortObject(),l=this.getMultipleSelectionObject(),u=this.shouldShowNoDataSection(e),d=this.getNoDataSection();return s.createElement("div",{className:"griddle-body"},s.createElement(i,{useGriddleStyles:this.props.useGriddleStyles,noDataSection:d,showNoData:u,columnSettings:this.columnSettings,rowSettings:this.rowSettings,sortSettings:a,multipleSelectionSettings:l,filterByColumn:this.filterByColumn,isSubGriddle:this.props.isSubGriddle,useGriddleIcons:this.props.useGriddleIcons,useFixedLayout:this.props.useFixedLayout,showPager:this.props.showPager,pagingContent:n,data:e,className:this.props.tableClassName,enableInfiniteScroll:this.isInfiniteScrollEnabled(),nextPage:this.nextPage,showTableHeading:this.props.showTableHeading,useFixedHeader:this.props.useFixedHeader,parentRowCollapsedClassName:this.props.parentRowCollapsedClassName,parentRowExpandedClassName:this.props.parentRowExpandedClassName,parentRowCollapsedComponent:this.props.parentRowCollapsedComponent,parentRowExpandedComponent:this.props.parentRowExpandedComponent,bodyHeight:this.props.bodyHeight,paddingHeight:this.props.paddingHeight,rowHeight:this.props.rowHeight,infiniteScrollLoadTreshold:this.props.infiniteScrollLoadTreshold,externalLoadingComponent:this.props.externalLoadingComponent,externalIsLoading:this.props.externalIsLoading,hasMorePages:r,onRowClick:this.props.onRowClick,onRowMouseEnter:this.props.onRowMouseEnter,onRowMouseLeave:this.props.onRowMouseLeave,onRowWillMount:this.props.onRowWillMount,onRowWillUnmount:this.props.onRowWillUnmount}))},getContentSection:function(e,t,o,n,s,r){return this.shouldUseCustomGridComponent()&&null!==this.props.customGridComponent?this.getCustomGridSection():this.shouldUseCustomRowComponent()?this.getCustomRowSection(e,t,o,n,r):this.getStandardGridSection(e,t,o,n,s)},getNoDataSection:function(){return null!=this.props.customNoDataComponent?s.createElement("div",{className:this.props.noDataClassName},s.createElement(this.props.customNoDataComponent,this.props.customNoDataComponentProps)):s.createElement(c,{noDataMessage:this.props.noDataMessage})},shouldShowNoDataSection:function(e){return!this.props.allowEmptyGrid&&(!1===this.props.useExternal&&(void 0===e||0===e.length)||!0===this.props.useExternal&&!1===this.props.externalIsLoading&&0===e.length)},render:function(){var e=this.getCurrentResults(),t=(this.props.tableClassName,this.getFilter()),o=this.getSettings(),n=this.getTopSection(t,o),r=[],a=this.columnSettings.getColumns(),i=this.getDataForRender(e,a,!0),l=this.columnSettings.getMetadataColumns();this.props.columnMetadata?S(this.props.columnMetadata,function(e){"boolean"==typeof e.visible&&!1===e.visible||r.push(e.columnName)}):r=y.keys(V(e[0],l)),r=this.columnSettings.orderColumns(r);var u=this.getCurrentPage(),d=this.getCurrentMaxPage(),c=u+1<d,p=this.getPagingSection(u,d),h=this.getContentSection(i,a,l,p,c,this.props.globalData),m=this.getColumnSelectorSection(r,a),f=this.props.gridClassName.length>0?"griddle "+this.props.gridClassName:"griddle";return f+=this.shouldUseCustomRowComponent()?" griddle-custom":"",s.createElement("div",{className:f},n,m,s.createElement("div",{className:"griddle-container",style:this.props.useGriddleStyles&&!this.props.isSubGriddle?{border:"1px solid #DDD"}:null},h))}});h.Griddle=e.exports=H},"./node_modules/griddle-react/modules/rowProperties.js":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=o("./node_modules/lodash/uniqueId.js"),a=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],o=arguments.length<=1||void 0===arguments[1]?null:arguments[1],s=!(arguments.length<=2||void 0===arguments[2])&&arguments[2];n(this,e),this.rowMetadata=t,this.rowComponent=o,this.isCustom=s}return s(e,[{key:"getRowKey",value:function(e,t){return this.hasRowMetadataKey()?e[this.rowMetadata.key]:r("grid_row")}},{key:"hasRowMetadataKey",value:function(){return this.hasRowMetadata()&&null!==this.rowMetadata.key&&void 0!==this.rowMetadata.key}},{key:"getBodyRowMetadataClass",value:function(e){return this.hasRowMetadata()&&null!==this.rowMetadata.bodyCssClassName&&void 0!==this.rowMetadata.bodyCssClassName?"function"==typeof this.rowMetadata.bodyCssClassName?this.rowMetadata.bodyCssClassName(e):this.rowMetadata.bodyCssClassName:null}},{key:"getHeaderRowMetadataClass",value:function(){return this.hasRowMetadata()&&null!==this.rowMetadata.headerCssClassName&&void 0!==this.rowMetadata.headerCssClassName?this.rowMetadata.headerCssClassName:null}},{key:"hasRowMetadata",value:function(){return null!==this.rowMetadata}}]),e}();e.exports=a},"./node_modules/lodash/_DataView.js":function(e,t,o){var n=o("./node_modules/lodash/_getNative.js"),s=o("./node_modules/lodash/_root.js"),r=n(s,"DataView");e.exports=r},"./node_modules/lodash/_Hash.js":function(e,t,o){function n(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}var s=o("./node_modules/lodash/_hashClear.js"),r=o("./node_modules/lodash/_hashDelete.js"),a=o("./node_modules/lodash/_hashGet.js"),i=o("./node_modules/lodash/_hashHas.js"),l=o("./node_modules/lodash/_hashSet.js");n.prototype.clear=s,n.prototype.delete=r,n.prototype.get=a,n.prototype.has=i,n.prototype.set=l,e.exports=n},"./node_modules/lodash/_ListCache.js":function(e,t,o){function n(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}var s=o("./node_modules/lodash/_listCacheClear.js"),r=o("./node_modules/lodash/_listCacheDelete.js"),a=o("./node_modules/lodash/_listCacheGet.js"),i=o("./node_modules/lodash/_listCacheHas.js"),l=o("./node_modules/lodash/_listCacheSet.js");n.prototype.clear=s,n.prototype.delete=r,n.prototype.get=a,n.prototype.has=i,n.prototype.set=l,e.exports=n},"./node_modules/lodash/_Map.js":function(e,t,o){var n=o("./node_modules/lodash/_getNative.js"),s=o("./node_modules/lodash/_root.js"),r=n(s,"Map");e.exports=r},"./node_modules/lodash/_MapCache.js":function(e,t,o){function n(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}var s=o("./node_modules/lodash/_mapCacheClear.js"),r=o("./node_modules/lodash/_mapCacheDelete.js"),a=o("./node_modules/lodash/_mapCacheGet.js"),i=o("./node_modules/lodash/_mapCacheHas.js"),l=o("./node_modules/lodash/_mapCacheSet.js");n.prototype.clear=s,n.prototype.delete=r,n.prototype.get=a,n.prototype.has=i,n.prototype.set=l,e.exports=n},"./node_modules/lodash/_Promise.js":function(e,t,o){var n=o("./node_modules/lodash/_getNative.js"),s=o("./node_modules/lodash/_root.js"),r=n(s,"Promise");e.exports=r},"./node_modules/lodash/_Set.js":function(e,t,o){var n=o("./node_modules/lodash/_getNative.js"),s=o("./node_modules/lodash/_root.js"),r=n(s,"Set");e.exports=r},"./node_modules/lodash/_SetCache.js":function(e,t,o){function n(e){var t=-1,o=null==e?0:e.length;for(this.__data__=new s;++t<o;)this.add(e[t])}var s=o("./node_modules/lodash/_MapCache.js"),r=o("./node_modules/lodash/_setCacheAdd.js"),a=o("./node_modules/lodash/_setCacheHas.js");n.prototype.add=n.prototype.push=r,n.prototype.has=a,e.exports=n},"./node_modules/lodash/_Stack.js":function(e,t,o){function n(e){var t=this.__data__=new s(e);this.size=t.size}var s=o("./node_modules/lodash/_ListCache.js"),r=o("./node_modules/lodash/_stackClear.js"),a=o("./node_modules/lodash/_stackDelete.js"),i=o("./node_modules/lodash/_stackGet.js"),l=o("./node_modules/lodash/_stackHas.js"),u=o("./node_modules/lodash/_stackSet.js");n.prototype.clear=r,n.prototype.delete=a,n.prototype.get=i,n.prototype.has=l,n.prototype.set=u,e.exports=n},"./node_modules/lodash/_Symbol.js":function(e,t,o){var n=o("./node_modules/lodash/_root.js"),s=n.Symbol;e.exports=s},"./node_modules/lodash/_Uint8Array.js":function(e,t,o){var n=o("./node_modules/lodash/_root.js"),s=n.Uint8Array;e.exports=s},"./node_modules/lodash/_WeakMap.js":function(e,t,o){var n=o("./node_modules/lodash/_getNative.js"),s=o("./node_modules/lodash/_root.js"),r=n(s,"WeakMap");e.exports=r},"./node_modules/lodash/_apply.js":function(e,t){function o(e,t,o){switch(o.length){case 0:return e.call(t);case 1:return e.call(t,o[0]);case 2:return e.call(t,o[0],o[1]);case 3:return e.call(t,o[0],o[1],o[2])}return e.apply(t,o)}e.exports=o},"./node_modules/lodash/_arrayEach.js":function(e,t){function o(e,t){for(var o=-1,n=null==e?0:e.length;++o<n&&!1!==t(e[o],o,e););return e}e.exports=o},"./node_modules/lodash/_arrayFilter.js":function(e,t){function o(e,t){for(var o=-1,n=null==e?0:e.length,s=0,r=[];++o<n;){var a=e[o];t(a,o,e)&&(r[s++]=a)}return r}e.exports=o},"./node_modules/lodash/_arrayIncludes.js":function(e,t,o){function n(e,t){return!!(null==e?0:e.length)&&s(e,t,0)>-1}var s=o("./node_modules/lodash/_baseIndexOf.js");e.exports=n},"./node_modules/lodash/_arrayIncludesWith.js":function(e,t){function o(e,t,o){for(var n=-1,s=null==e?0:e.length;++n<s;)if(o(t,e[n]))return!0;return!1}e.exports=o},"./node_modules/lodash/_arrayLikeKeys.js":function(e,t,o){function n(e,t){var o=a(e),n=!o&&r(e),d=!o&&!n&&i(e),p=!o&&!n&&!d&&u(e),h=o||n||d||p,m=h?s(e.length,String):[],f=m.length;for(var _ in e)!t&&!c.call(e,_)||h&&("length"==_||d&&("offset"==_||"parent"==_)||p&&("buffer"==_||"byteLength"==_||"byteOffset"==_)||l(_,f))||m.push(_);return m}var s=o("./node_modules/lodash/_baseTimes.js"),r=o("./node_modules/lodash/isArguments.js"),a=o("./node_modules/lodash/isArray.js"),i=o("./node_modules/lodash/isBuffer.js"),l=o("./node_modules/lodash/_isIndex.js"),u=o("./node_modules/lodash/isTypedArray.js"),d=Object.prototype,c=d.hasOwnProperty;e.exports=n},"./node_modules/lodash/_arrayMap.js":function(e,t){function o(e,t){for(var o=-1,n=null==e?0:e.length,s=Array(n);++o<n;)s[o]=t(e[o],o,e);return s}e.exports=o},"./node_modules/lodash/_arrayPush.js":function(e,t){function o(e,t){for(var o=-1,n=t.length,s=e.length;++o<n;)e[s+o]=t[o];return e}e.exports=o},"./node_modules/lodash/_arraySome.js":function(e,t){function o(e,t){for(var o=-1,n=null==e?0:e.length;++o<n;)if(t(e[o],o,e))return!0;return!1}e.exports=o},"./node_modules/lodash/_assignValue.js":function(e,t,o){function n(e,t,o){var n=e[t];i.call(e,t)&&r(n,o)&&(void 0!==o||t in e)||s(e,t,o)}var s=o("./node_modules/lodash/_baseAssignValue.js"),r=o("./node_modules/lodash/eq.js"),a=Object.prototype,i=a.hasOwnProperty;e.exports=n},"./node_modules/lodash/_assocIndexOf.js":function(e,t,o){function n(e,t){for(var o=e.length;o--;)if(s(e[o][0],t))return o;return-1}var s=o("./node_modules/lodash/eq.js");e.exports=n},"./node_modules/lodash/_baseAssign.js":function(e,t,o){function n(e,t){return e&&s(t,r(t),e)}var s=o("./node_modules/lodash/_copyObject.js"),r=o("./node_modules/lodash/keys.js");e.exports=n},"./node_modules/lodash/_baseAssignIn.js":function(e,t,o){function n(e,t){return e&&s(t,r(t),e)}var s=o("./node_modules/lodash/_copyObject.js"),r=o("./node_modules/lodash/keysIn.js");e.exports=n},"./node_modules/lodash/_baseAssignValue.js":function(e,t,o){function n(e,t,o){"__proto__"==t&&s?s(e,t,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[t]=o}var s=o("./node_modules/lodash/_defineProperty.js");e.exports=n},"./node_modules/lodash/_baseClone.js":function(e,t,o){function n(e,t,o,T,N,k){var I,D=t&x,H=t&E,F=t&P;if(o&&(I=N?o(e,T,N,k):o(e)),void 0!==I)return I;if(!C(e))return e;var L=y(e);if(L){if(I=_(e),!D)return d(e,I)}else{var G=f(e),U=G==M||G==R;if(j(e))return u(e,D);if(G==V||G==O||U&&!N){if(I=H||U?{}:v(e),!D)return H?p(e,l(I,e)):c(e,i(I,e))}else{if(!A[G])return N?e:{};I=g(e,G,D)}}k||(k=new s);var B=k.get(e);if(B)return B;k.set(e,I),w(e)?e.forEach(function(s){I.add(n(s,t,o,s,e,k))}):b(e)&&e.forEach(function(s,r){I.set(r,n(s,t,o,r,e,k))});var W=F?H?m:h:H?keysIn:S,z=L?void 0:W(e);return r(z||e,function(s,r){z&&(r=s,s=e[r]),a(I,r,n(s,t,o,r,e,k))}),I}var s=o("./node_modules/lodash/_Stack.js"),r=o("./node_modules/lodash/_arrayEach.js"),a=o("./node_modules/lodash/_assignValue.js"),i=o("./node_modules/lodash/_baseAssign.js"),l=o("./node_modules/lodash/_baseAssignIn.js"),u=o("./node_modules/lodash/_cloneBuffer.js"),d=o("./node_modules/lodash/_copyArray.js"),c=o("./node_modules/lodash/_copySymbols.js"),p=o("./node_modules/lodash/_copySymbolsIn.js"),h=o("./node_modules/lodash/_getAllKeys.js"),m=o("./node_modules/lodash/_getAllKeysIn.js"),f=o("./node_modules/lodash/_getTag.js"),_=o("./node_modules/lodash/_initCloneArray.js"),g=o("./node_modules/lodash/_initCloneByTag.js"),v=o("./node_modules/lodash/_initCloneObject.js"),y=o("./node_modules/lodash/isArray.js"),j=o("./node_modules/lodash/isBuffer.js"),b=o("./node_modules/lodash/isMap.js"),C=o("./node_modules/lodash/isObject.js"),w=o("./node_modules/lodash/isSet.js"),S=o("./node_modules/lodash/keys.js"),x=1,E=2,P=4,O="[object Arguments]",M="[object Function]",R="[object GeneratorFunction]",V="[object Object]",A={};A[O]=A["[object Array]"]=A["[object ArrayBuffer]"]=A["[object DataView]"]=A["[object Boolean]"]=A["[object Date]"]=A["[object Float32Array]"]=A["[object Float64Array]"]=A["[object Int8Array]"]=A["[object Int16Array]"]=A["[object Int32Array]"]=A["[object Map]"]=A["[object Number]"]=A[V]=A["[object RegExp]"]=A["[object Set]"]=A["[object String]"]=A["[object Symbol]"]=A["[object Uint8Array]"]=A["[object Uint8ClampedArray]"]=A["[object Uint16Array]"]=A["[object Uint32Array]"]=!0,A["[object Error]"]=A[M]=A["[object WeakMap]"]=!1,e.exports=n},"./node_modules/lodash/_baseCreate.js":function(e,t,o){var n=o("./node_modules/lodash/isObject.js"),s=Object.create,r=function(){function e(){}return function(t){if(!n(t))return{};if(s)return s(t);e.prototype=t;var o=new e;return e.prototype=void 0,o}}();e.exports=r},"./node_modules/lodash/_baseDifference.js":function(e,t,o){function n(e,t,o,n){var c=-1,p=r,h=!0,m=e.length,f=[],_=t.length;if(!m)return f;o&&(t=i(t,l(o))),n?(p=a,h=!1):t.length>=d&&(p=u,h=!1,t=new s(t));e:for(;++c<m;){var g=e[c],v=null==o?g:o(g);if(g=n||0!==g?g:0,h&&v===v){for(var y=_;y--;)if(t[y]===v)continue e;f.push(g)}else p(t,v,n)||f.push(g)}return f}var s=o("./node_modules/lodash/_SetCache.js"),r=o("./node_modules/lodash/_arrayIncludes.js"),a=o("./node_modules/lodash/_arrayIncludesWith.js"),i=o("./node_modules/lodash/_arrayMap.js"),l=o("./node_modules/lodash/_baseUnary.js"),u=o("./node_modules/lodash/_cacheHas.js"),d=200;e.exports=n},"./node_modules/lodash/_baseEach.js":function(e,t,o){var n=o("./node_modules/lodash/_baseForOwn.js"),s=o("./node_modules/lodash/_createBaseEach.js"),r=s(n);e.exports=r},"./node_modules/lodash/_baseFilter.js":function(e,t,o){function n(e,t){var o=[];return s(e,function(e,n,s){t(e,n,s)&&o.push(e)}),o}var s=o("./node_modules/lodash/_baseEach.js");e.exports=n},"./node_modules/lodash/_baseFindIndex.js":function(e,t){function o(e,t,o,n){for(var s=e.length,r=o+(n?1:-1);n?r--:++r<s;)if(t(e[r],r,e))return r;return-1}e.exports=o},"./node_modules/lodash/_baseFlatten.js":function(e,t,o){function n(e,t,o,a,i){var l=-1,u=e.length;for(o||(o=r),i||(i=[]);++l<u;){var d=e[l];t>0&&o(d)?t>1?n(d,t-1,o,a,i):s(i,d):a||(i[i.length]=d)}return i}var s=o("./node_modules/lodash/_arrayPush.js"),r=o("./node_modules/lodash/_isFlattenable.js");e.exports=n},"./node_modules/lodash/_baseFor.js":function(e,t,o){var n=o("./node_modules/lodash/_createBaseFor.js"),s=n();e.exports=s},"./node_modules/lodash/_baseForOwn.js":function(e,t,o){function n(e,t){return e&&s(e,t,r)}var s=o("./node_modules/lodash/_baseFor.js"),r=o("./node_modules/lodash/keys.js");e.exports=n},"./node_modules/lodash/_baseGet.js":function(e,t,o){function n(e,t){t=s(t,e);for(var o=0,n=t.length;null!=e&&o<n;)e=e[r(t[o++])];return o&&o==n?e:void 0}var s=o("./node_modules/lodash/_castPath.js"),r=o("./node_modules/lodash/_toKey.js");e.exports=n},"./node_modules/lodash/_baseGetAllKeys.js":function(e,t,o){function n(e,t,o){var n=t(e);return r(e)?n:s(n,o(e))}var s=o("./node_modules/lodash/_arrayPush.js"),r=o("./node_modules/lodash/isArray.js");e.exports=n},"./node_modules/lodash/_baseGetTag.js":function(e,t,o){function n(e){return null==e?void 0===e?l:i:u&&u in Object(e)?r(e):a(e)}var s=o("./node_modules/lodash/_Symbol.js"),r=o("./node_modules/lodash/_getRawTag.js"),a=o("./node_modules/lodash/_objectToString.js"),i="[object Null]",l="[object Undefined]",u=s?s.toStringTag:void 0;e.exports=n},"./node_modules/lodash/_baseHasIn.js":function(e,t){function o(e,t){return null!=e&&t in Object(e)}e.exports=o},"./node_modules/lodash/_baseIndexOf.js":function(e,t,o){function n(e,t,o){return t===t?a(e,t,o):s(e,r,o)}var s=o("./node_modules/lodash/_baseFindIndex.js"),r=o("./node_modules/lodash/_baseIsNaN.js"),a=o("./node_modules/lodash/_strictIndexOf.js");e.exports=n},"./node_modules/lodash/_baseIntersection.js":function(e,t,o){function n(e,t,o){for(var n=o?a:r,c=e[0].length,p=e.length,h=p,m=Array(p),f=1/0,_=[];h--;){var g=e[h];h&&t&&(g=i(g,l(t))),f=d(g.length,f),m[h]=!o&&(t||c>=120&&g.length>=120)?new s(h&&g):void 0}g=e[0];var v=-1,y=m[0];e:for(;++v<c&&_.length<f;){var j=g[v],b=t?t(j):j;if(j=o||0!==j?j:0,!(y?u(y,b):n(_,b,o))){for(h=p;--h;){var C=m[h];if(!(C?u(C,b):n(e[h],b,o)))continue e}y&&y.push(b),_.push(j)}}return _}var s=o("./node_modules/lodash/_SetCache.js"),r=o("./node_modules/lodash/_arrayIncludes.js"),a=o("./node_modules/lodash/_arrayIncludesWith.js"),i=o("./node_modules/lodash/_arrayMap.js"),l=o("./node_modules/lodash/_baseUnary.js"),u=o("./node_modules/lodash/_cacheHas.js"),d=Math.min;e.exports=n},"./node_modules/lodash/_baseIsArguments.js":function(e,t,o){function n(e){return r(e)&&s(e)==a}var s=o("./node_modules/lodash/_baseGetTag.js"),r=o("./node_modules/lodash/isObjectLike.js"),a="[object Arguments]";e.exports=n},"./node_modules/lodash/_baseIsEqual.js":function(e,t,o){function n(e,t,o,a,i){return e===t||(null==e||null==t||!r(e)&&!r(t)?e!==e&&t!==t:s(e,t,o,a,n,i))}var s=o("./node_modules/lodash/_baseIsEqualDeep.js"),r=o("./node_modules/lodash/isObjectLike.js");e.exports=n},"./node_modules/lodash/_baseIsEqualDeep.js":function(e,t,o){function n(e,t,o,n,_,v){var y=u(e),j=u(t),b=y?m:l(e),C=j?m:l(t);b=b==h?f:b,C=C==h?f:C;var w=b==f,S=C==f,x=b==C;if(x&&d(e)){if(!d(t))return!1;y=!0,w=!1}if(x&&!w)return v||(v=new s),y||c(e)?r(e,t,o,n,_,v):a(e,t,b,o,n,_,v);if(!(o&p)){var E=w&&g.call(e,"__wrapped__"),P=S&&g.call(t,"__wrapped__");if(E||P){var O=E?e.value():e,M=P?t.value():t;return v||(v=new s),_(O,M,o,n,v)}}return!!x&&(v||(v=new s),i(e,t,o,n,_,v))}var s=o("./node_modules/lodash/_Stack.js"),r=o("./node_modules/lodash/_equalArrays.js"),a=o("./node_modules/lodash/_equalByTag.js"),i=o("./node_modules/lodash/_equalObjects.js"),l=o("./node_modules/lodash/_getTag.js"),u=o("./node_modules/lodash/isArray.js"),d=o("./node_modules/lodash/isBuffer.js"),c=o("./node_modules/lodash/isTypedArray.js"),p=1,h="[object Arguments]",m="[object Array]",f="[object Object]",_=Object.prototype,g=_.hasOwnProperty;e.exports=n},"./node_modules/lodash/_baseIsMap.js":function(e,t,o){function n(e){return r(e)&&s(e)==a}var s=o("./node_modules/lodash/_getTag.js"),r=o("./node_modules/lodash/isObjectLike.js"),a="[object Map]";e.exports=n},"./node_modules/lodash/_baseIsMatch.js":function(e,t,o){function n(e,t,o,n){var l=o.length,u=l,d=!n;if(null==e)return!u;for(e=Object(e);l--;){var c=o[l];if(d&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++l<u;){c=o[l];var p=c[0],h=e[p],m=c[1];if(d&&c[2]){if(void 0===h&&!(p in e))return!1}else{var f=new s;if(n)var _=n(h,m,p,e,t,f);if(!(void 0===_?r(m,h,a|i,n,f):_))return!1}}return!0}var s=o("./node_modules/lodash/_Stack.js"),r=o("./node_modules/lodash/_baseIsEqual.js"),a=1,i=2;e.exports=n},"./node_modules/lodash/_baseIsNaN.js":function(e,t){function o(e){return e!==e}e.exports=o},"./node_modules/lodash/_baseIsNative.js":function(e,t,o){function n(e){return!(!a(e)||r(e))&&(s(e)?m:u).test(i(e))}var s=o("./node_modules/lodash/isFunction.js"),r=o("./node_modules/lodash/_isMasked.js"),a=o("./node_modules/lodash/isObject.js"),i=o("./node_modules/lodash/_toSource.js"),l=/[\\^$.*+?()[\]{}|]/g,u=/^\[object .+?Constructor\]$/,d=Function.prototype,c=Object.prototype,p=d.toString,h=c.hasOwnProperty,m=RegExp("^"+p.call(h).replace(l,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=n},"./node_modules/lodash/_baseIsSet.js":function(e,t,o){function n(e){return r(e)&&s(e)==a}var s=o("./node_modules/lodash/_getTag.js"),r=o("./node_modules/lodash/isObjectLike.js"),a="[object Set]";e.exports=n},"./node_modules/lodash/_baseIsTypedArray.js":function(e,t,o){function n(e){return a(e)&&r(e.length)&&!!i[s(e)]}var s=o("./node_modules/lodash/_baseGetTag.js"),r=o("./node_modules/lodash/isLength.js"),a=o("./node_modules/lodash/isObjectLike.js"),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,e.exports=n},"./node_modules/lodash/_baseIteratee.js":function(e,t,o){function n(e){return"function"==typeof e?e:null==e?a:"object"==typeof e?i(e)?r(e[0],e[1]):s(e):l(e)}var s=o("./node_modules/lodash/_baseMatches.js"),r=o("./node_modules/lodash/_baseMatchesProperty.js"),a=o("./node_modules/lodash/identity.js"),i=o("./node_modules/lodash/isArray.js"),l=o("./node_modules/lodash/property.js");e.exports=n},"./node_modules/lodash/_baseKeys.js":function(e,t,o){function n(e){if(!s(e))return r(e);var t=[];for(var o in Object(e))i.call(e,o)&&"constructor"!=o&&t.push(o);return t}var s=o("./node_modules/lodash/_isPrototype.js"),r=o("./node_modules/lodash/_nativeKeys.js"),a=Object.prototype,i=a.hasOwnProperty;e.exports=n},"./node_modules/lodash/_baseKeysIn.js":function(e,t,o){function n(e){if(!s(e))return a(e);var t=r(e),o=[];for(var n in e)("constructor"!=n||!t&&l.call(e,n))&&o.push(n);return o}var s=o("./node_modules/lodash/isObject.js"),r=o("./node_modules/lodash/_isPrototype.js"),a=o("./node_modules/lodash/_nativeKeysIn.js"),i=Object.prototype,l=i.hasOwnProperty;e.exports=n},"./node_modules/lodash/_baseMap.js":function(e,t,o){function n(e,t){var o=-1,n=r(e)?Array(e.length):[];return s(e,function(e,s,r){n[++o]=t(e,s,r)}),n}var s=o("./node_modules/lodash/_baseEach.js"),r=o("./node_modules/lodash/isArrayLike.js");e.exports=n},"./node_modules/lodash/_baseMatches.js":function(e,t,o){function n(e){var t=r(e);return 1==t.length&&t[0][2]?a(t[0][0],t[0][1]):function(o){return o===e||s(o,e,t)}}var s=o("./node_modules/lodash/_baseIsMatch.js"),r=o("./node_modules/lodash/_getMatchData.js"),a=o("./node_modules/lodash/_matchesStrictComparable.js");e.exports=n},"./node_modules/lodash/_baseMatchesProperty.js":function(e,t,o){function n(e,t){return i(e)&&l(t)?u(d(e),t):function(o){var n=r(o,e);return void 0===n&&n===t?a(o,e):s(t,n,c|p)}}var s=o("./node_modules/lodash/_baseIsEqual.js"),r=o("./node_modules/lodash/get.js"),a=o("./node_modules/lodash/hasIn.js"),i=o("./node_modules/lodash/_isKey.js"),l=o("./node_modules/lodash/_isStrictComparable.js"),u=o("./node_modules/lodash/_matchesStrictComparable.js"),d=o("./node_modules/lodash/_toKey.js"),c=1,p=2;e.exports=n},"./node_modules/lodash/_baseOrderBy.js":function(e,t,o){function n(e,t,o){var n=-1;t=s(t.length?t:[d],l(r));var c=a(e,function(e,o,r){return{criteria:s(t,function(t){return t(e)}),index:++n,value:e}});return i(c,function(e,t){return u(e,t,o)})}var s=o("./node_modules/lodash/_arrayMap.js"),r=o("./node_modules/lodash/_baseIteratee.js"),a=o("./node_modules/lodash/_baseMap.js"),i=o("./node_modules/lodash/_baseSortBy.js"),l=o("./node_modules/lodash/_baseUnary.js"),u=o("./node_modules/lodash/_compareMultiple.js"),d=o("./node_modules/lodash/identity.js");e.exports=n},"./node_modules/lodash/_basePick.js":function(e,t,o){function n(e,t){return s(e,t,function(t,o){return r(e,o)})}var s=o("./node_modules/lodash/_basePickBy.js"),r=o("./node_modules/lodash/hasIn.js");e.exports=n},"./node_modules/lodash/_basePickBy.js":function(e,t,o){function n(e,t,o){for(var n=-1,i=t.length,l={};++n<i;){var u=t[n],d=s(e,u);o(d,u)&&r(l,a(u,e),d)}return l}var s=o("./node_modules/lodash/_baseGet.js"),r=o("./node_modules/lodash/_baseSet.js"),a=o("./node_modules/lodash/_castPath.js");e.exports=n},"./node_modules/lodash/_baseProperty.js":function(e,t){function o(e){return function(t){return null==t?void 0:t[e]}}e.exports=o},"./node_modules/lodash/_basePropertyDeep.js":function(e,t,o){function n(e){return function(t){return s(t,e)}}var s=o("./node_modules/lodash/_baseGet.js");e.exports=n},"./node_modules/lodash/_baseRest.js":function(e,t,o){function n(e,t){return a(r(e,t,s),e+"")}var s=o("./node_modules/lodash/identity.js"),r=o("./node_modules/lodash/_overRest.js"),a=o("./node_modules/lodash/_setToString.js");e.exports=n},"./node_modules/lodash/_baseSet.js":function(e,t,o){function n(e,t,o,n){if(!i(e))return e;t=r(t,e);for(var u=-1,d=t.length,c=d-1,p=e;null!=p&&++u<d;){var h=l(t[u]),m=o;if(u!=c){var f=p[h];void 0===(m=n?n(f,h,p):void 0)&&(m=i(f)?f:a(t[u+1])?[]:{})}s(p,h,m),p=p[h]}return e}var s=o("./node_modules/lodash/_assignValue.js"),r=o("./node_modules/lodash/_castPath.js"),a=o("./node_modules/lodash/_isIndex.js"),i=o("./node_modules/lodash/isObject.js"),l=o("./node_modules/lodash/_toKey.js");e.exports=n},"./node_modules/lodash/_baseSetToString.js":function(e,t,o){var n=o("./node_modules/lodash/constant.js"),s=o("./node_modules/lodash/_defineProperty.js"),r=o("./node_modules/lodash/identity.js"),a=s?function(e,t){return s(e,"toString",{configurable:!0,enumerable:!1,value:n(t),writable:!0})}:r;e.exports=a},"./node_modules/lodash/_baseSlice.js":function(e,t){function o(e,t,o){var n=-1,s=e.length;t<0&&(t=-t>s?0:s+t),o=o>s?s:o,o<0&&(o+=s),s=t>o?0:o-t>>>0,t>>>=0;for(var r=Array(s);++n<s;)r[n]=e[n+t];return r}e.exports=o},"./node_modules/lodash/_baseSome.js":function(e,t,o){function n(e,t){var o;return s(e,function(e,n,s){return!(o=t(e,n,s))}),!!o}var s=o("./node_modules/lodash/_baseEach.js");e.exports=n},"./node_modules/lodash/_baseSortBy.js":function(e,t){function o(e,t){var o=e.length;for(e.sort(t);o--;)e[o]=e[o].value;return e}e.exports=o},"./node_modules/lodash/_baseTimes.js":function(e,t){function o(e,t){for(var o=-1,n=Array(e);++o<e;)n[o]=t(o);return n}e.exports=o},"./node_modules/lodash/_baseToPairs.js":function(e,t,o){function n(e,t){return s(t,function(t){return[t,e[t]]})}var s=o("./node_modules/lodash/_arrayMap.js");e.exports=n},"./node_modules/lodash/_baseToString.js":function(e,t,o){function n(e){if("string"==typeof e)return e;if(a(e))return r(e,n)+"";if(i(e))return d?d.call(e):"";var t=e+"";return"0"==t&&1/e==-l?"-0":t}var s=o("./node_modules/lodash/_Symbol.js"),r=o("./node_modules/lodash/_arrayMap.js"),a=o("./node_modules/lodash/isArray.js"),i=o("./node_modules/lodash/isSymbol.js"),l=1/0,u=s?s.prototype:void 0,d=u?u.toString:void 0;e.exports=n},"./node_modules/lodash/_baseUnary.js":function(e,t){function o(e){return function(t){return e(t)}}e.exports=o},"./node_modules/lodash/_baseUnset.js":function(e,t,o){function n(e,t){return t=s(t,e),null==(e=a(e,t))||delete e[i(r(t))]}var s=o("./node_modules/lodash/_castPath.js"),r=o("./node_modules/lodash/last.js"),a=o("./node_modules/lodash/_parent.js"),i=o("./node_modules/lodash/_toKey.js");e.exports=n},"./node_modules/lodash/_baseValues.js":function(e,t,o){function n(e,t){return s(t,function(t){return e[t]})}var s=o("./node_modules/lodash/_arrayMap.js");e.exports=n},"./node_modules/lodash/_baseZipObject.js":function(e,t){function o(e,t,o){for(var n=-1,s=e.length,r=t.length,a={};++n<s;){var i=n<r?t[n]:void 0;o(a,e[n],i)}return a}e.exports=o},"./node_modules/lodash/_cacheHas.js":function(e,t){function o(e,t){return e.has(t)}e.exports=o},"./node_modules/lodash/_castArrayLikeObject.js":function(e,t,o){function n(e){return s(e)?e:[]}var s=o("./node_modules/lodash/isArrayLikeObject.js");e.exports=n},"./node_modules/lodash/_castFunction.js":function(e,t,o){function n(e){return"function"==typeof e?e:s}var s=o("./node_modules/lodash/identity.js");e.exports=n},"./node_modules/lodash/_castPath.js":function(e,t,o){function n(e,t){return s(e)?e:r(e,t)?[e]:a(i(e))}var s=o("./node_modules/lodash/isArray.js"),r=o("./node_modules/lodash/_isKey.js"),a=o("./node_modules/lodash/_stringToPath.js"),i=o("./node_modules/lodash/toString.js");e.exports=n},"./node_modules/lodash/_cloneArrayBuffer.js":function(e,t,o){function n(e){var t=new e.constructor(e.byteLength);return new s(t).set(new s(e)),t}var s=o("./node_modules/lodash/_Uint8Array.js");e.exports=n},"./node_modules/lodash/_cloneBuffer.js":function(e,t,o){(function(e){function n(e,t){if(t)return e.slice();var o=e.length,n=u?u(o):new e.constructor(o);return e.copy(n),n}var s=o("./node_modules/lodash/_root.js"),r="object"==typeof t&&t&&!t.nodeType&&t,a=r&&"object"==typeof e&&e&&!e.nodeType&&e,i=a&&a.exports===r,l=i?s.Buffer:void 0,u=l?l.allocUnsafe:void 0;e.exports=n}).call(t,o("./node_modules/webpack/buildin/module.js")(e))},"./node_modules/lodash/_cloneDataView.js":function(e,t,o){function n(e,t){var o=t?s(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)}var s=o("./node_modules/lodash/_cloneArrayBuffer.js");e.exports=n},"./node_modules/lodash/_cloneRegExp.js":function(e,t){function o(e){var t=new e.constructor(e.source,n.exec(e));return t.lastIndex=e.lastIndex,t}var n=/\w*$/;e.exports=o},"./node_modules/lodash/_cloneSymbol.js":function(e,t,o){function n(e){return a?Object(a.call(e)):{}}var s=o("./node_modules/lodash/_Symbol.js"),r=s?s.prototype:void 0,a=r?r.valueOf:void 0;e.exports=n},"./node_modules/lodash/_cloneTypedArray.js":function(e,t,o){function n(e,t){var o=t?s(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)}var s=o("./node_modules/lodash/_cloneArrayBuffer.js");e.exports=n},"./node_modules/lodash/_compareAscending.js":function(e,t,o){function n(e,t){if(e!==t){var o=void 0!==e,n=null===e,r=e===e,a=s(e),i=void 0!==t,l=null===t,u=t===t,d=s(t);if(!l&&!d&&!a&&e>t||a&&i&&u&&!l&&!d||n&&i&&u||!o&&u||!r)return 1;if(!n&&!a&&!d&&e<t||d&&o&&r&&!n&&!a||l&&o&&r||!i&&r||!u)return-1}return 0}var s=o("./node_modules/lodash/isSymbol.js");e.exports=n},"./node_modules/lodash/_compareMultiple.js":function(e,t,o){function n(e,t,o){for(var n=-1,r=e.criteria,a=t.criteria,i=r.length,l=o.length;++n<i;){var u=s(r[n],a[n]);if(u)return n>=l?u:u*("desc"==o[n]?-1:1)}return e.index-t.index}var s=o("./node_modules/lodash/_compareAscending.js");e.exports=n},"./node_modules/lodash/_copyArray.js":function(e,t){function o(e,t){var o=-1,n=e.length;for(t||(t=Array(n));++o<n;)t[o]=e[o];return t}e.exports=o},"./node_modules/lodash/_copyObject.js":function(e,t,o){function n(e,t,o,n){var a=!o;o||(o={});for(var i=-1,l=t.length;++i<l;){var u=t[i],d=n?n(o[u],e[u],u,o,e):void 0;void 0===d&&(d=e[u]),a?r(o,u,d):s(o,u,d)}return o}var s=o("./node_modules/lodash/_assignValue.js"),r=o("./node_modules/lodash/_baseAssignValue.js");e.exports=n},"./node_modules/lodash/_copySymbols.js":function(e,t,o){function n(e,t){return s(e,r(e),t)}var s=o("./node_modules/lodash/_copyObject.js"),r=o("./node_modules/lodash/_getSymbols.js");e.exports=n},"./node_modules/lodash/_copySymbolsIn.js":function(e,t,o){function n(e,t){return s(e,r(e),t)}var s=o("./node_modules/lodash/_copyObject.js"),r=o("./node_modules/lodash/_getSymbolsIn.js");e.exports=n},"./node_modules/lodash/_coreJsData.js":function(e,t,o){var n=o("./node_modules/lodash/_root.js"),s=n["__core-js_shared__"];e.exports=s},"./node_modules/lodash/_createAssigner.js":function(e,t,o){function n(e){return s(function(t,o){var n=-1,s=o.length,a=s>1?o[s-1]:void 0,i=s>2?o[2]:void 0;for(a=e.length>3&&"function"==typeof a?(s--,a):void 0,i&&r(o[0],o[1],i)&&(a=s<3?void 0:a,s=1),t=Object(t);++n<s;){var l=o[n];l&&e(t,l,n,a)}return t})}var s=o("./node_modules/lodash/_baseRest.js"),r=o("./node_modules/lodash/_isIterateeCall.js");e.exports=n},"./node_modules/lodash/_createBaseEach.js":function(e,t,o){function n(e,t){return function(o,n){if(null==o)return o;if(!s(o))return e(o,n);for(var r=o.length,a=t?r:-1,i=Object(o);(t?a--:++a<r)&&!1!==n(i[a],a,i););return o}}var s=o("./node_modules/lodash/isArrayLike.js");e.exports=n},"./node_modules/lodash/_createBaseFor.js":function(e,t){function o(e){return function(t,o,n){for(var s=-1,r=Object(t),a=n(t),i=a.length;i--;){var l=a[e?i:++s];if(!1===o(r[l],l,r))break}return t}}e.exports=o},"./node_modules/lodash/_createFind.js":function(e,t,o){function n(e){return function(t,o,n){var i=Object(t);if(!r(t)){var l=s(o,3);t=a(t),o=function(e){return l(i[e],e,i)}}var u=e(t,o,n);return u>-1?i[l?t[u]:u]:void 0}}var s=o("./node_modules/lodash/_baseIteratee.js"),r=o("./node_modules/lodash/isArrayLike.js"),a=o("./node_modules/lodash/keys.js");e.exports=n},"./node_modules/lodash/_createToPairs.js":function(e,t,o){function n(e){return function(t){var o=r(t);return o==l?a(t):o==u?i(t):s(t,e(t))}}var s=o("./node_modules/lodash/_baseToPairs.js"),r=o("./node_modules/lodash/_getTag.js"),a=o("./node_modules/lodash/_mapToArray.js"),i=o("./node_modules/lodash/_setToPairs.js"),l="[object Map]",u="[object Set]";e.exports=n},"./node_modules/lodash/_customOmitClone.js":function(e,t,o){function n(e){return s(e)?void 0:e}var s=o("./node_modules/lodash/isPlainObject.js");e.exports=n},"./node_modules/lodash/_defineProperty.js":function(e,t,o){var n=o("./node_modules/lodash/_getNative.js"),s=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=s},"./node_modules/lodash/_equalArrays.js":function(e,t,o){function n(e,t,o,n,u,d){var c=o&i,p=e.length,h=t.length;if(p!=h&&!(c&&h>p))return!1;var m=d.get(e);if(m&&d.get(t))return m==t;var f=-1,_=!0,g=o&l?new s:void 0;for(d.set(e,t),d.set(t,e);++f<p;){var v=e[f],y=t[f];if(n)var j=c?n(y,v,f,t,e,d):n(v,y,f,e,t,d);if(void 0!==j){if(j)continue;_=!1;break}if(g){if(!r(t,function(e,t){if(!a(g,t)&&(v===e||u(v,e,o,n,d)))return g.push(t)})){_=!1;break}}else if(v!==y&&!u(v,y,o,n,d)){_=!1;break}}return d.delete(e),d.delete(t),_}var s=o("./node_modules/lodash/_SetCache.js"),r=o("./node_modules/lodash/_arraySome.js"),a=o("./node_modules/lodash/_cacheHas.js"),i=1,l=2;e.exports=n},"./node_modules/lodash/_equalByTag.js":function(e,t,o){function n(e,t,o,n,s,w,x){switch(o){case C:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case b:return!(e.byteLength!=t.byteLength||!w(new r(e),new r(t)));case p:case h:case _:return a(+e,+t);case m:return e.name==t.name&&e.message==t.message;case g:case y:return e==t+"";case f:var E=l;case v:var P=n&d;if(E||(E=u),e.size!=t.size&&!P)return!1;var O=x.get(e);if(O)return O==t;n|=c,x.set(e,t);var M=i(E(e),E(t),n,s,w,x);return x.delete(e),M;case j:if(S)return S.call(e)==S.call(t)}return!1}var s=o("./node_modules/lodash/_Symbol.js"),r=o("./node_modules/lodash/_Uint8Array.js"),a=o("./node_modules/lodash/eq.js"),i=o("./node_modules/lodash/_equalArrays.js"),l=o("./node_modules/lodash/_mapToArray.js"),u=o("./node_modules/lodash/_setToArray.js"),d=1,c=2,p="[object Boolean]",h="[object Date]",m="[object Error]",f="[object Map]",_="[object Number]",g="[object RegExp]",v="[object Set]",y="[object String]",j="[object Symbol]",b="[object ArrayBuffer]",C="[object DataView]",w=s?s.prototype:void 0,S=w?w.valueOf:void 0;e.exports=n},"./node_modules/lodash/_equalObjects.js":function(e,t,o){function n(e,t,o,n,a,l){var u=o&r,d=s(e),c=d.length;if(c!=s(t).length&&!u)return!1;for(var p=c;p--;){var h=d[p];if(!(u?h in t:i.call(t,h)))return!1}var m=l.get(e);if(m&&l.get(t))return m==t;var f=!0;l.set(e,t),l.set(t,e);for(var _=u;++p<c;){h=d[p];var g=e[h],v=t[h];if(n)var y=u?n(v,g,h,t,e,l):n(g,v,h,e,t,l);if(!(void 0===y?g===v||a(g,v,o,n,l):y)){f=!1;break}_||(_="constructor"==h)}if(f&&!_){var j=e.constructor,b=t.constructor;j!=b&&"constructor"in e&&"constructor"in t&&!("function"==typeof j&&j instanceof j&&"function"==typeof b&&b instanceof b)&&(f=!1)}return l.delete(e),l.delete(t),f}var s=o("./node_modules/lodash/_getAllKeys.js"),r=1,a=Object.prototype,i=a.hasOwnProperty;e.exports=n},"./node_modules/lodash/_flatRest.js":function(e,t,o){function n(e){return a(r(e,void 0,s),e+"")}var s=o("./node_modules/lodash/flatten.js"),r=o("./node_modules/lodash/_overRest.js"),a=o("./node_modules/lodash/_setToString.js");e.exports=n},"./node_modules/lodash/_freeGlobal.js":function(e,t,o){(function(t){var o="object"==typeof t&&t&&t.Object===Object&&t;e.exports=o}).call(t,o("./node_modules/webpack/buildin/global.js"))},"./node_modules/lodash/_getAllKeys.js":function(e,t,o){function n(e){return s(e,a,r)}var s=o("./node_modules/lodash/_baseGetAllKeys.js"),r=o("./node_modules/lodash/_getSymbols.js"),a=o("./node_modules/lodash/keys.js");e.exports=n},"./node_modules/lodash/_getAllKeysIn.js":function(e,t,o){function n(e){return s(e,a,r)}var s=o("./node_modules/lodash/_baseGetAllKeys.js"),r=o("./node_modules/lodash/_getSymbolsIn.js"),a=o("./node_modules/lodash/keysIn.js");e.exports=n},"./node_modules/lodash/_getMapData.js":function(e,t,o){function n(e,t){var o=e.__data__;return s(t)?o["string"==typeof t?"string":"hash"]:o.map}var s=o("./node_modules/lodash/_isKeyable.js");e.exports=n},"./node_modules/lodash/_getMatchData.js":function(e,t,o){function n(e){for(var t=r(e),o=t.length;o--;){var n=t[o],a=e[n];t[o]=[n,a,s(a)]}return t}var s=o("./node_modules/lodash/_isStrictComparable.js"),r=o("./node_modules/lodash/keys.js");e.exports=n},"./node_modules/lodash/_getNative.js":function(e,t,o){function n(e,t){var o=r(e,t);return s(o)?o:void 0}var s=o("./node_modules/lodash/_baseIsNative.js"),r=o("./node_modules/lodash/_getValue.js");e.exports=n},"./node_modules/lodash/_getPrototype.js":function(e,t,o){var n=o("./node_modules/lodash/_overArg.js"),s=n(Object.getPrototypeOf,Object);e.exports=s},"./node_modules/lodash/_getRawTag.js":function(e,t,o){function n(e){var t=a.call(e,l),o=e[l];try{e[l]=void 0;var n=!0}catch(e){}var s=i.call(e);return n&&(t?e[l]=o:delete e[l]),s}var s=o("./node_modules/lodash/_Symbol.js"),r=Object.prototype,a=r.hasOwnProperty,i=r.toString,l=s?s.toStringTag:void 0;e.exports=n},"./node_modules/lodash/_getSymbols.js":function(e,t,o){var n=o("./node_modules/lodash/_arrayFilter.js"),s=o("./node_modules/lodash/stubArray.js"),r=Object.prototype,a=r.propertyIsEnumerable,i=Object.getOwnPropertySymbols,l=i?function(e){return null==e?[]:(e=Object(e),n(i(e),function(t){return a.call(e,t)}))}:s;e.exports=l},"./node_modules/lodash/_getSymbolsIn.js":function(e,t,o){var n=o("./node_modules/lodash/_arrayPush.js"),s=o("./node_modules/lodash/_getPrototype.js"),r=o("./node_modules/lodash/_getSymbols.js"),a=o("./node_modules/lodash/stubArray.js"),i=Object.getOwnPropertySymbols,l=i?function(e){for(var t=[];e;)n(t,r(e)),e=s(e);return t}:a;e.exports=l},"./node_modules/lodash/_getTag.js":function(e,t,o){var n=o("./node_modules/lodash/_DataView.js"),s=o("./node_modules/lodash/_Map.js"),r=o("./node_modules/lodash/_Promise.js"),a=o("./node_modules/lodash/_Set.js"),i=o("./node_modules/lodash/_WeakMap.js"),l=o("./node_modules/lodash/_baseGetTag.js"),u=o("./node_modules/lodash/_toSource.js"),d=u(n),c=u(s),p=u(r),h=u(a),m=u(i),f=l;(n&&"[object DataView]"!=f(new n(new ArrayBuffer(1)))||s&&"[object Map]"!=f(new s)||r&&"[object Promise]"!=f(r.resolve())||a&&"[object Set]"!=f(new a)||i&&"[object WeakMap]"!=f(new i))&&(f=function(e){var t=l(e),o="[object Object]"==t?e.constructor:void 0,n=o?u(o):"";if(n)switch(n){case d:return"[object DataView]";case c:return"[object Map]";case p:return"[object Promise]";case h:return"[object Set]";case m:return"[object WeakMap]"}return t}),e.exports=f},"./node_modules/lodash/_getValue.js":function(e,t){function o(e,t){return null==e?void 0:e[t]}e.exports=o},"./node_modules/lodash/_hasPath.js":function(e,t,o){function n(e,t,o){t=s(t,e);for(var n=-1,d=t.length,c=!1;++n<d;){var p=u(t[n]);if(!(c=null!=e&&o(e,p)))break;e=e[p]}return c||++n!=d?c:!!(d=null==e?0:e.length)&&l(d)&&i(p,d)&&(a(e)||r(e))}var s=o("./node_modules/lodash/_castPath.js"),r=o("./node_modules/lodash/isArguments.js"),a=o("./node_modules/lodash/isArray.js"),i=o("./node_modules/lodash/_isIndex.js"),l=o("./node_modules/lodash/isLength.js"),u=o("./node_modules/lodash/_toKey.js");e.exports=n},"./node_modules/lodash/_hashClear.js":function(e,t,o){function n(){this.__data__=s?s(null):{},this.size=0}var s=o("./node_modules/lodash/_nativeCreate.js");e.exports=n},"./node_modules/lodash/_hashDelete.js":function(e,t){function o(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}e.exports=o},"./node_modules/lodash/_hashGet.js":function(e,t,o){function n(e){var t=this.__data__;if(s){var o=t[e];return o===r?void 0:o}return i.call(t,e)?t[e]:void 0}var s=o("./node_modules/lodash/_nativeCreate.js"),r="__lodash_hash_undefined__",a=Object.prototype,i=a.hasOwnProperty;e.exports=n},"./node_modules/lodash/_hashHas.js":function(e,t,o){function n(e){var t=this.__data__;return s?void 0!==t[e]:a.call(t,e)}var s=o("./node_modules/lodash/_nativeCreate.js"),r=Object.prototype,a=r.hasOwnProperty;e.exports=n},"./node_modules/lodash/_hashSet.js":function(e,t,o){function n(e,t){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=s&&void 0===t?r:t,this}var s=o("./node_modules/lodash/_nativeCreate.js"),r="__lodash_hash_undefined__";e.exports=n},"./node_modules/lodash/_initCloneArray.js":function(e,t){function o(e){var t=e.length,o=new e.constructor(t);return t&&"string"==typeof e[0]&&s.call(e,"index")&&(o.index=e.index,o.input=e.input),o}var n=Object.prototype,s=n.hasOwnProperty;e.exports=o},"./node_modules/lodash/_initCloneByTag.js":function(e,t,o){function n(e,t,o){var n=e.constructor;switch(t){case g:return s(e);case u:case d:return new n(+e);case v:return r(e,o);case y:case j:case b:case C:case w:case S:case x:case E:case P:return l(e,o);case c:return new n;case p:case f:return new n(e);case h:return a(e);case m:return new n;case _:return i(e)}}var s=o("./node_modules/lodash/_cloneArrayBuffer.js"),r=o("./node_modules/lodash/_cloneDataView.js"),a=o("./node_modules/lodash/_cloneRegExp.js"),i=o("./node_modules/lodash/_cloneSymbol.js"),l=o("./node_modules/lodash/_cloneTypedArray.js"),u="[object Boolean]",d="[object Date]",c="[object Map]",p="[object Number]",h="[object RegExp]",m="[object Set]",f="[object String]",_="[object Symbol]",g="[object ArrayBuffer]",v="[object DataView]",y="[object Float32Array]",j="[object Float64Array]",b="[object Int8Array]",C="[object Int16Array]",w="[object Int32Array]",S="[object Uint8Array]",x="[object Uint8ClampedArray]",E="[object Uint16Array]",P="[object Uint32Array]";e.exports=n},"./node_modules/lodash/_initCloneObject.js":function(e,t,o){function n(e){return"function"!=typeof e.constructor||a(e)?{}:s(r(e))}var s=o("./node_modules/lodash/_baseCreate.js"),r=o("./node_modules/lodash/_getPrototype.js"),a=o("./node_modules/lodash/_isPrototype.js");e.exports=n},"./node_modules/lodash/_isFlattenable.js":function(e,t,o){function n(e){return a(e)||r(e)||!!(i&&e&&e[i])}var s=o("./node_modules/lodash/_Symbol.js"),r=o("./node_modules/lodash/isArguments.js"),a=o("./node_modules/lodash/isArray.js"),i=s?s.isConcatSpreadable:void 0;e.exports=n},"./node_modules/lodash/_isIndex.js":function(e,t){function o(e,t){var o=typeof e;return!!(t=null==t?n:t)&&("number"==o||"symbol"!=o&&s.test(e))&&e>-1&&e%1==0&&e<t}var n=9007199254740991,s=/^(?:0|[1-9]\d*)$/;e.exports=o},"./node_modules/lodash/_isIterateeCall.js":function(e,t,o){function n(e,t,o){if(!i(o))return!1;var n=typeof t;return!!("number"==n?r(o)&&a(t,o.length):"string"==n&&t in o)&&s(o[t],e)}var s=o("./node_modules/lodash/eq.js"),r=o("./node_modules/lodash/isArrayLike.js"),a=o("./node_modules/lodash/_isIndex.js"),i=o("./node_modules/lodash/isObject.js");e.exports=n},"./node_modules/lodash/_isKey.js":function(e,t,o){function n(e,t){if(s(e))return!1;var o=typeof e;return!("number"!=o&&"symbol"!=o&&"boolean"!=o&&null!=e&&!r(e))||i.test(e)||!a.test(e)||null!=t&&e in Object(t)}var s=o("./node_modules/lodash/isArray.js"),r=o("./node_modules/lodash/isSymbol.js"),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;e.exports=n},"./node_modules/lodash/_isKeyable.js":function(e,t){function o(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=o},"./node_modules/lodash/_isMasked.js":function(e,t,o){function n(e){return!!r&&r in e}var s=o("./node_modules/lodash/_coreJsData.js"),r=function(){var e=/[^.]+$/.exec(s&&s.keys&&s.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=n},"./node_modules/lodash/_isPrototype.js":function(e,t){function o(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n)}var n=Object.prototype;e.exports=o},"./node_modules/lodash/_isStrictComparable.js":function(e,t,o){function n(e){return e===e&&!s(e)}var s=o("./node_modules/lodash/isObject.js");e.exports=n},"./node_modules/lodash/_listCacheClear.js":function(e,t){function o(){this.__data__=[],this.size=0}e.exports=o},"./node_modules/lodash/_listCacheDelete.js":function(e,t,o){function n(e){var t=this.__data__,o=s(t,e);return!(o<0||(o==t.length-1?t.pop():a.call(t,o,1),--this.size,0))}var s=o("./node_modules/lodash/_assocIndexOf.js"),r=Array.prototype,a=r.splice;e.exports=n},"./node_modules/lodash/_listCacheGet.js":function(e,t,o){function n(e){var t=this.__data__,o=s(t,e);return o<0?void 0:t[o][1]}var s=o("./node_modules/lodash/_assocIndexOf.js");e.exports=n},"./node_modules/lodash/_listCacheHas.js":function(e,t,o){function n(e){return s(this.__data__,e)>-1}var s=o("./node_modules/lodash/_assocIndexOf.js");e.exports=n},"./node_modules/lodash/_listCacheSet.js":function(e,t,o){function n(e,t){var o=this.__data__,n=s(o,e);return n<0?(++this.size,o.push([e,t])):o[n][1]=t,this}var s=o("./node_modules/lodash/_assocIndexOf.js");e.exports=n},"./node_modules/lodash/_mapCacheClear.js":function(e,t,o){function n(){this.size=0,this.__data__={hash:new s,map:new(a||r),string:new s}}var s=o("./node_modules/lodash/_Hash.js"),r=o("./node_modules/lodash/_ListCache.js"),a=o("./node_modules/lodash/_Map.js");e.exports=n},"./node_modules/lodash/_mapCacheDelete.js":function(e,t,o){function n(e){var t=s(this,e).delete(e);return this.size-=t?1:0,t}var s=o("./node_modules/lodash/_getMapData.js");e.exports=n},"./node_modules/lodash/_mapCacheGet.js":function(e,t,o){function n(e){return s(this,e).get(e)}var s=o("./node_modules/lodash/_getMapData.js");e.exports=n},"./node_modules/lodash/_mapCacheHas.js":function(e,t,o){function n(e){return s(this,e).has(e)}var s=o("./node_modules/lodash/_getMapData.js");e.exports=n},"./node_modules/lodash/_mapCacheSet.js":function(e,t,o){function n(e,t){var o=s(this,e),n=o.size;return o.set(e,t),this.size+=o.size==n?0:1,this}var s=o("./node_modules/lodash/_getMapData.js");e.exports=n},"./node_modules/lodash/_mapToArray.js":function(e,t){function o(e){var t=-1,o=Array(e.size);return e.forEach(function(e,n){o[++t]=[n,e]}),o}e.exports=o},"./node_modules/lodash/_matchesStrictComparable.js":function(e,t){function o(e,t){return function(o){return null!=o&&o[e]===t&&(void 0!==t||e in Object(o))}}e.exports=o},"./node_modules/lodash/_memoizeCapped.js":function(e,t,o){function n(e){var t=s(e,function(e){return o.size===r&&o.clear(),e}),o=t.cache;return t}var s=o("./node_modules/lodash/memoize.js"),r=500;e.exports=n},"./node_modules/lodash/_nativeCreate.js":function(e,t,o){var n=o("./node_modules/lodash/_getNative.js"),s=n(Object,"create");e.exports=s},"./node_modules/lodash/_nativeKeys.js":function(e,t,o){var n=o("./node_modules/lodash/_overArg.js"),s=n(Object.keys,Object);e.exports=s},"./node_modules/lodash/_nativeKeysIn.js":function(e,t){function o(e){var t=[];if(null!=e)for(var o in Object(e))t.push(o);return t}e.exports=o},"./node_modules/lodash/_nodeUtil.js":function(e,t,o){(function(e){var n=o("./node_modules/lodash/_freeGlobal.js"),s="object"==typeof t&&t&&!t.nodeType&&t,r=s&&"object"==typeof e&&e&&!e.nodeType&&e,a=r&&r.exports===s,i=a&&n.process,l=function(){try{return r&&r.require&&r.require("util").types||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=l}).call(t,o("./node_modules/webpack/buildin/module.js")(e))},"./node_modules/lodash/_objectToString.js":function(e,t){function o(e){return s.call(e)}var n=Object.prototype,s=n.toString;e.exports=o},"./node_modules/lodash/_overArg.js":function(e,t){function o(e,t){return function(o){return e(t(o))}}e.exports=o},"./node_modules/lodash/_overRest.js":function(e,t,o){function n(e,t,o){return t=r(void 0===t?e.length-1:t,0),function(){for(var n=arguments,a=-1,i=r(n.length-t,0),l=Array(i);++a<i;)l[a]=n[t+a];a=-1;for(var u=Array(t+1);++a<t;)u[a]=n[a];return u[t]=o(l),s(e,this,u)}}var s=o("./node_modules/lodash/_apply.js"),r=Math.max;e.exports=n},"./node_modules/lodash/_parent.js":function(e,t,o){function n(e,t){return t.length<2?e:s(e,r(t,0,-1))}var s=o("./node_modules/lodash/_baseGet.js"),r=o("./node_modules/lodash/_baseSlice.js");e.exports=n},"./node_modules/lodash/_root.js":function(e,t,o){var n=o("./node_modules/lodash/_freeGlobal.js"),s="object"==typeof self&&self&&self.Object===Object&&self,r=n||s||Function("return this")();e.exports=r},"./node_modules/lodash/_setCacheAdd.js":function(e,t){function o(e){return this.__data__.set(e,n),this}var n="__lodash_hash_undefined__";e.exports=o},"./node_modules/lodash/_setCacheHas.js":function(e,t){function o(e){return this.__data__.has(e)}e.exports=o},"./node_modules/lodash/_setToArray.js":function(e,t){function o(e){var t=-1,o=Array(e.size);return e.forEach(function(e){o[++t]=e}),o}e.exports=o},"./node_modules/lodash/_setToPairs.js":function(e,t){function o(e){var t=-1,o=Array(e.size);return e.forEach(function(e){o[++t]=[e,e]}),o}e.exports=o},"./node_modules/lodash/_setToString.js":function(e,t,o){var n=o("./node_modules/lodash/_baseSetToString.js"),s=o("./node_modules/lodash/_shortOut.js"),r=s(n);e.exports=r},"./node_modules/lodash/_shortOut.js":function(e,t){function o(e){var t=0,o=0;return function(){var a=r(),i=s-(a-o);if(o=a,i>0){if(++t>=n)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var n=800,s=16,r=Date.now;e.exports=o},"./node_modules/lodash/_stackClear.js":function(e,t,o){function n(){this.__data__=new s,this.size=0}var s=o("./node_modules/lodash/_ListCache.js");e.exports=n},"./node_modules/lodash/_stackDelete.js":function(e,t){function o(e){var t=this.__data__,o=t.delete(e);return this.size=t.size,o}e.exports=o},"./node_modules/lodash/_stackGet.js":function(e,t){function o(e){return this.__data__.get(e)}e.exports=o},"./node_modules/lodash/_stackHas.js":function(e,t){function o(e){return this.__data__.has(e)}e.exports=o},"./node_modules/lodash/_stackSet.js":function(e,t,o){function n(e,t){var o=this.__data__;if(o instanceof s){var n=o.__data__;if(!r||n.length<i-1)return n.push([e,t]),this.size=++o.size,this;o=this.__data__=new a(n)}return o.set(e,t),this.size=o.size,this}var s=o("./node_modules/lodash/_ListCache.js"),r=o("./node_modules/lodash/_Map.js"),a=o("./node_modules/lodash/_MapCache.js"),i=200;e.exports=n},"./node_modules/lodash/_strictIndexOf.js":function(e,t){function o(e,t,o){for(var n=o-1,s=e.length;++n<s;)if(e[n]===t)return n;return-1}e.exports=o},"./node_modules/lodash/_stringToPath.js":function(e,t,o){var n=o("./node_modules/lodash/_memoizeCapped.js"),s=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,r=/\\(\\)?/g,a=n(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(s,function(e,o,n,s){t.push(n?s.replace(r,"$1"):o||e)}),t});e.exports=a},"./node_modules/lodash/_toKey.js":function(e,t,o){function n(e){if("string"==typeof e||s(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}var s=o("./node_modules/lodash/isSymbol.js"),r=1/0;e.exports=n},"./node_modules/lodash/_toSource.js":function(e,t){function o(e){if(null!=e){try{return s.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var n=Function.prototype,s=n.toString;e.exports=o},"./node_modules/lodash/assign.js":function(e,t,o){var n=o("./node_modules/lodash/_assignValue.js"),s=o("./node_modules/lodash/_copyObject.js"),r=o("./node_modules/lodash/_createAssigner.js"),a=o("./node_modules/lodash/isArrayLike.js"),i=o("./node_modules/lodash/_isPrototype.js"),l=o("./node_modules/lodash/keys.js"),u=Object.prototype,d=u.hasOwnProperty,c=r(function(e,t){if(i(t)||a(t))return void s(t,l(t),e);for(var o in t)d.call(t,o)&&n(e,o,t[o])});e.exports=c},"./node_modules/lodash/constant.js":function(e,t){function o(e){return function(){return e}}e.exports=o},"./node_modules/lodash/defaults.js":function(e,t,o){var n=o("./node_modules/lodash/_baseRest.js"),s=o("./node_modules/lodash/eq.js"),r=o("./node_modules/lodash/_isIterateeCall.js"),a=o("./node_modules/lodash/keysIn.js"),i=Object.prototype,l=i.hasOwnProperty,u=n(function(e,t){e=Object(e);var o=-1,n=t.length,u=n>2?t[2]:void 0;for(u&&r(t[0],t[1],u)&&(n=1);++o<n;)for(var d=t[o],c=a(d),p=-1,h=c.length;++p<h;){var m=c[p],f=e[m];(void 0===f||s(f,i[m])&&!l.call(e,m))&&(e[m]=d[m])}return e});e.exports=u},"./node_modules/lodash/difference.js":function(e,t,o){var n=o("./node_modules/lodash/_baseDifference.js"),s=o("./node_modules/lodash/_baseFlatten.js"),r=o("./node_modules/lodash/_baseRest.js"),a=o("./node_modules/lodash/isArrayLikeObject.js"),i=r(function(e,t){return a(e)?n(e,s(t,1,a,!0)):[]});e.exports=i},"./node_modules/lodash/drop.js":function(e,t,o){function n(e,t,o){var n=null==e?0:e.length;return n?(t=o||void 0===t?1:r(t),s(e,t<0?0:t,n)):[]}var s=o("./node_modules/lodash/_baseSlice.js"),r=o("./node_modules/lodash/toInteger.js");e.exports=n},"./node_modules/lodash/dropRight.js":function(e,t,o){function n(e,t,o){var n=null==e?0:e.length;return n?(t=o||void 0===t?1:r(t),t=n-t,s(e,0,t<0?0:t)):[]}var s=o("./node_modules/lodash/_baseSlice.js"),r=o("./node_modules/lodash/toInteger.js");e.exports=n},"./node_modules/lodash/eq.js":function(e,t){function o(e,t){return e===t||e!==e&&t!==t}e.exports=o},"./node_modules/lodash/filter.js":function(e,t,o){function n(e,t){return(i(e)?s:r)(e,a(t,3))}var s=o("./node_modules/lodash/_arrayFilter.js"),r=o("./node_modules/lodash/_baseFilter.js"),a=o("./node_modules/lodash/_baseIteratee.js"),i=o("./node_modules/lodash/isArray.js");e.exports=n},"./node_modules/lodash/find.js":function(e,t,o){var n=o("./node_modules/lodash/_createFind.js"),s=o("./node_modules/lodash/findIndex.js"),r=n(s);e.exports=r},"./node_modules/lodash/findIndex.js":function(e,t,o){function n(e,t,o){var n=null==e?0:e.length;if(!n)return-1;var l=null==o?0:a(o);return l<0&&(l=i(n+l,0)),s(e,r(t,3),l)}var s=o("./node_modules/lodash/_baseFindIndex.js"),r=o("./node_modules/lodash/_baseIteratee.js"),a=o("./node_modules/lodash/toInteger.js"),i=Math.max;e.exports=n},"./node_modules/lodash/flatten.js":function(e,t,o){function n(e){return(null==e?0:e.length)?s(e,1):[]}var s=o("./node_modules/lodash/_baseFlatten.js");e.exports=n},"./node_modules/lodash/forEach.js":function(e,t,o){function n(e,t){return(i(e)?s:r)(e,a(t))}var s=o("./node_modules/lodash/_arrayEach.js"),r=o("./node_modules/lodash/_baseEach.js"),a=o("./node_modules/lodash/_castFunction.js"),i=o("./node_modules/lodash/isArray.js");e.exports=n},"./node_modules/lodash/forOwn.js":function(e,t,o){function n(e,t){return e&&s(e,r(t))}var s=o("./node_modules/lodash/_baseForOwn.js"),r=o("./node_modules/lodash/_castFunction.js");e.exports=n},"./node_modules/lodash/get.js":function(e,t,o){function n(e,t,o){var n=null==e?void 0:s(e,t);return void 0===n?o:n}var s=o("./node_modules/lodash/_baseGet.js");e.exports=n},"./node_modules/lodash/hasIn.js":function(e,t,o){function n(e,t){return null!=e&&r(e,t,s)}var s=o("./node_modules/lodash/_baseHasIn.js"),r=o("./node_modules/lodash/_hasPath.js");e.exports=n},"./node_modules/lodash/identity.js":function(e,t){function o(e){return e}e.exports=o},"./node_modules/lodash/includes.js":function(e,t,o){function n(e,t,o,n){e=r(e)?e:l(e),o=o&&!n?i(o):0;var d=e.length;return o<0&&(o=u(d+o,0)),a(e)?o<=d&&e.indexOf(t,o)>-1:!!d&&s(e,t,o)>-1}var s=o("./node_modules/lodash/_baseIndexOf.js"),r=o("./node_modules/lodash/isArrayLike.js"),a=o("./node_modules/lodash/isString.js"),i=o("./node_modules/lodash/toInteger.js"),l=o("./node_modules/lodash/values.js"),u=Math.max;e.exports=n},"./node_modules/lodash/initial.js":function(e,t,o){function n(e){return(null==e?0:e.length)?s(e,0,-1):[]}var s=o("./node_modules/lodash/_baseSlice.js");e.exports=n},"./node_modules/lodash/intersection.js":function(e,t,o){var n=o("./node_modules/lodash/_arrayMap.js"),s=o("./node_modules/lodash/_baseIntersection.js"),r=o("./node_modules/lodash/_baseRest.js"),a=o("./node_modules/lodash/_castArrayLikeObject.js"),i=r(function(e){var t=n(e,a);return t.length&&t[0]===e[0]?s(t):[]});e.exports=i},"./node_modules/lodash/isArguments.js":function(e,t,o){var n=o("./node_modules/lodash/_baseIsArguments.js"),s=o("./node_modules/lodash/isObjectLike.js"),r=Object.prototype,a=r.hasOwnProperty,i=r.propertyIsEnumerable,l=n(function(){return arguments}())?n:function(e){return s(e)&&a.call(e,"callee")&&!i.call(e,"callee")};e.exports=l},"./node_modules/lodash/isArray.js":function(e,t){var o=Array.isArray;e.exports=o},"./node_modules/lodash/isArrayLike.js":function(e,t,o){function n(e){return null!=e&&r(e.length)&&!s(e)}var s=o("./node_modules/lodash/isFunction.js"),r=o("./node_modules/lodash/isLength.js");e.exports=n},"./node_modules/lodash/isArrayLikeObject.js":function(e,t,o){function n(e){return r(e)&&s(e)}var s=o("./node_modules/lodash/isArrayLike.js"),r=o("./node_modules/lodash/isObjectLike.js");e.exports=n},"./node_modules/lodash/isBuffer.js":function(e,t,o){(function(e){var n=o("./node_modules/lodash/_root.js"),s=o("./node_modules/lodash/stubFalse.js"),r="object"==typeof t&&t&&!t.nodeType&&t,a=r&&"object"==typeof e&&e&&!e.nodeType&&e,i=a&&a.exports===r,l=i?n.Buffer:void 0,u=l?l.isBuffer:void 0,d=u||s;e.exports=d}).call(t,o("./node_modules/webpack/buildin/module.js")(e))},"./node_modules/lodash/isEmpty.js":function(e,t,o){function n(e){if(null==e)return!0;if(l(e)&&(i(e)||"string"==typeof e||"function"==typeof e.splice||u(e)||c(e)||a(e)))return!e.length;var t=r(e);if(t==p||t==h)return!e.size;if(d(e))return!s(e).length;for(var o in e)if(f.call(e,o))return!1;return!0}var s=o("./node_modules/lodash/_baseKeys.js"),r=o("./node_modules/lodash/_getTag.js"),a=o("./node_modules/lodash/isArguments.js"),i=o("./node_modules/lodash/isArray.js"),l=o("./node_modules/lodash/isArrayLike.js"),u=o("./node_modules/lodash/isBuffer.js"),d=o("./node_modules/lodash/_isPrototype.js"),c=o("./node_modules/lodash/isTypedArray.js"),p="[object Map]",h="[object Set]",m=Object.prototype,f=m.hasOwnProperty;e.exports=n},"./node_modules/lodash/isFunction.js":function(e,t,o){function n(e){if(!r(e))return!1;var t=s(e);return t==i||t==l||t==a||t==u}var s=o("./node_modules/lodash/_baseGetTag.js"),r=o("./node_modules/lodash/isObject.js"),a="[object AsyncFunction]",i="[object Function]",l="[object GeneratorFunction]",u="[object Proxy]";e.exports=n},"./node_modules/lodash/isLength.js":function(e,t){function o(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}var n=9007199254740991;e.exports=o},"./node_modules/lodash/isMap.js":function(e,t,o){var n=o("./node_modules/lodash/_baseIsMap.js"),s=o("./node_modules/lodash/_baseUnary.js"),r=o("./node_modules/lodash/_nodeUtil.js"),a=r&&r.isMap,i=a?s(a):n;e.exports=i},"./node_modules/lodash/isNull.js":function(e,t){function o(e){return null===e}e.exports=o},"./node_modules/lodash/isObject.js":function(e,t){function o(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=o},"./node_modules/lodash/isObjectLike.js":function(e,t){function o(e){return null!=e&&"object"==typeof e}e.exports=o},"./node_modules/lodash/isPlainObject.js":function(e,t,o){function n(e){if(!a(e)||s(e)!=i)return!1;var t=r(e);if(null===t)return!0;var o=c.call(t,"constructor")&&t.constructor;return"function"==typeof o&&o instanceof o&&d.call(o)==p}var s=o("./node_modules/lodash/_baseGetTag.js"),r=o("./node_modules/lodash/_getPrototype.js"),a=o("./node_modules/lodash/isObjectLike.js"),i="[object Object]",l=Function.prototype,u=Object.prototype,d=l.toString,c=u.hasOwnProperty,p=d.call(Object);e.exports=n},"./node_modules/lodash/isSet.js":function(e,t,o){var n=o("./node_modules/lodash/_baseIsSet.js"),s=o("./node_modules/lodash/_baseUnary.js"),r=o("./node_modules/lodash/_nodeUtil.js"),a=r&&r.isSet,i=a?s(a):n;e.exports=i},"./node_modules/lodash/isString.js":function(e,t,o){function n(e){return"string"==typeof e||!r(e)&&a(e)&&s(e)==i}var s=o("./node_modules/lodash/_baseGetTag.js"),r=o("./node_modules/lodash/isArray.js"),a=o("./node_modules/lodash/isObjectLike.js"),i="[object String]";e.exports=n},"./node_modules/lodash/isSymbol.js":function(e,t,o){function n(e){return"symbol"==typeof e||r(e)&&s(e)==a}var s=o("./node_modules/lodash/_baseGetTag.js"),r=o("./node_modules/lodash/isObjectLike.js"),a="[object Symbol]";e.exports=n},"./node_modules/lodash/isTypedArray.js":function(e,t,o){var n=o("./node_modules/lodash/_baseIsTypedArray.js"),s=o("./node_modules/lodash/_baseUnary.js"),r=o("./node_modules/lodash/_nodeUtil.js"),a=r&&r.isTypedArray,i=a?s(a):n;e.exports=i},"./node_modules/lodash/isUndefined.js":function(e,t){function o(e){return void 0===e}e.exports=o},"./node_modules/lodash/keys.js":function(e,t,o){function n(e){return a(e)?s(e):r(e)}var s=o("./node_modules/lodash/_arrayLikeKeys.js"),r=o("./node_modules/lodash/_baseKeys.js"),a=o("./node_modules/lodash/isArrayLike.js");e.exports=n},"./node_modules/lodash/keysIn.js":function(e,t,o){function n(e){return a(e)?s(e,!0):r(e)}var s=o("./node_modules/lodash/_arrayLikeKeys.js"),r=o("./node_modules/lodash/_baseKeysIn.js"),a=o("./node_modules/lodash/isArrayLike.js");e.exports=n},"./node_modules/lodash/last.js":function(e,t){function o(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}e.exports=o},"./node_modules/lodash/map.js":function(e,t,o){function n(e,t){return(i(e)?s:a)(e,r(t,3))}var s=o("./node_modules/lodash/_arrayMap.js"),r=o("./node_modules/lodash/_baseIteratee.js"),a=o("./node_modules/lodash/_baseMap.js"),i=o("./node_modules/lodash/isArray.js");e.exports=n},"./node_modules/lodash/memoize.js":function(e,t,o){function n(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(r);var o=function(){var n=arguments,s=t?t.apply(this,n):n[0],r=o.cache;if(r.has(s))return r.get(s);var a=e.apply(this,n);return o.cache=r.set(s,a)||r,a};return o.cache=new(n.Cache||s),o}var s=o("./node_modules/lodash/_MapCache.js"),r="Expected a function";n.Cache=s,e.exports=n},"./node_modules/lodash/omit.js":function(e,t,o){var n=o("./node_modules/lodash/_arrayMap.js"),s=o("./node_modules/lodash/_baseClone.js"),r=o("./node_modules/lodash/_baseUnset.js"),a=o("./node_modules/lodash/_castPath.js"),i=o("./node_modules/lodash/_copyObject.js"),l=o("./node_modules/lodash/_customOmitClone.js"),u=o("./node_modules/lodash/_flatRest.js"),d=o("./node_modules/lodash/_getAllKeysIn.js"),c=u(function(e,t){var o={};if(null==e)return o;var u=!1;t=n(t,function(t){return t=a(t,e),u||(u=t.length>1),t}),i(e,d(e),o),u&&(o=s(o,7,l));for(var c=t.length;c--;)r(o,t[c]);return o});e.exports=c},"./node_modules/lodash/orderBy.js":function(e,t,o){function n(e,t,o,n){return null==e?[]:(r(t)||(t=null==t?[]:[t]),o=n?void 0:o,r(o)||(o=null==o?[]:[o]),s(e,t,o))}var s=o("./node_modules/lodash/_baseOrderBy.js"),r=o("./node_modules/lodash/isArray.js");e.exports=n},"./node_modules/lodash/pick.js":function(e,t,o){var n=o("./node_modules/lodash/_basePick.js"),s=o("./node_modules/lodash/_flatRest.js"),r=s(function(e,t){return null==e?{}:n(e,t)});e.exports=r},"./node_modules/lodash/property.js":function(e,t,o){function n(e){return a(e)?s(i(e)):r(e)}var s=o("./node_modules/lodash/_baseProperty.js"),r=o("./node_modules/lodash/_basePropertyDeep.js"),a=o("./node_modules/lodash/_isKey.js"),i=o("./node_modules/lodash/_toKey.js");e.exports=n},"./node_modules/lodash/some.js":function(e,t,o){function n(e,t,o){var n=i(e)?s:a;return o&&l(e,t,o)&&(t=void 0),n(e,r(t,3))}var s=o("./node_modules/lodash/_arraySome.js"),r=o("./node_modules/lodash/_baseIteratee.js"),a=o("./node_modules/lodash/_baseSome.js"),i=o("./node_modules/lodash/isArray.js"),l=o("./node_modules/lodash/_isIterateeCall.js");e.exports=n},"./node_modules/lodash/sortBy.js":function(e,t,o){var n=o("./node_modules/lodash/_baseFlatten.js"),s=o("./node_modules/lodash/_baseOrderBy.js"),r=o("./node_modules/lodash/_baseRest.js"),a=o("./node_modules/lodash/_isIterateeCall.js"),i=r(function(e,t){if(null==e)return[];var o=t.length;return o>1&&a(e,t[0],t[1])?t=[]:o>2&&a(t[0],t[1],t[2])&&(t=[t[0]]),s(e,n(t,1),[])});e.exports=i},"./node_modules/lodash/stubArray.js":function(e,t){function o(){return[]}e.exports=o},"./node_modules/lodash/stubFalse.js":function(e,t){function o(){return!1}e.exports=o},"./node_modules/lodash/take.js":function(e,t,o){function n(e,t,o){return e&&e.length?(t=o||void 0===t?1:r(t),s(e,0,t<0?0:t)):[]}var s=o("./node_modules/lodash/_baseSlice.js"),r=o("./node_modules/lodash/toInteger.js");e.exports=n},"./node_modules/lodash/toFinite.js":function(e,t,o){function n(e){return e?(e=s(e))===r||e===-r?(e<0?-1:1)*a:e===e?e:0:0===e?e:0}var s=o("./node_modules/lodash/toNumber.js"),r=1/0,a=1.7976931348623157e308;e.exports=n},"./node_modules/lodash/toInteger.js":function(e,t,o){function n(e){var t=s(e),o=t%1;return t===t?o?t-o:t:0}var s=o("./node_modules/lodash/toFinite.js");e.exports=n},"./node_modules/lodash/toNumber.js":function(e,t,o){function n(e){if("number"==typeof e)return e;if(r(e))return a;if(s(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=s(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=u.test(e);return o||d.test(e)?c(e.slice(2),o?2:8):l.test(e)?a:+e}var s=o("./node_modules/lodash/isObject.js"),r=o("./node_modules/lodash/isSymbol.js"),a=NaN,i=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,c=parseInt;e.exports=n},"./node_modules/lodash/toPairs.js":function(e,t,o){var n=o("./node_modules/lodash/_createToPairs.js"),s=o("./node_modules/lodash/keys.js"),r=n(s);e.exports=r},"./node_modules/lodash/toString.js":function(e,t,o){function n(e){return null==e?"":s(e)}var s=o("./node_modules/lodash/_baseToString.js");e.exports=n},"./node_modules/lodash/uniqueId.js":function(e,t,o){function n(e){var t=++r;return s(e)+t}var s=o("./node_modules/lodash/toString.js"),r=0;e.exports=n},"./node_modules/lodash/values.js":function(e,t,o){function n(e){return null==e?[]:s(e,r(e))}var s=o("./node_modules/lodash/_baseValues.js"),r=o("./node_modules/lodash/keys.js");e.exports=n},"./node_modules/lodash/without.js":function(e,t,o){var n=o("./node_modules/lodash/_baseDifference.js"),s=o("./node_modules/lodash/_baseRest.js"),r=o("./node_modules/lodash/isArrayLikeObject.js"),a=s(function(e,t){return r(e)?n(e,t):[]});e.exports=a},"./node_modules/lodash/zipObject.js":function(e,t,o){function n(e,t){return r(e||[],t||[],s)}var s=o("./node_modules/lodash/_assignValue.js"),r=o("./node_modules/lodash/_baseZipObject.js");e.exports=n},"./node_modules/object-assign/index.js":function(e,t,o){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},o=0;o<10;o++)t["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var o,i,l=n(e),u=1;u<arguments.length;u++){o=Object(arguments[u]);for(var d in o)r.call(o,d)&&(l[d]=o[d]);if(s){i=s(o);for(var c=0;c<i.length;c++)a.call(o,i[c])&&(l[i[c]]=o[i[c]])}}return l}},"./node_modules/react-resize-aware/dist/index.js":function(e,t,o){!function(e,n){!function(e,t){"use strict";function o(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return function(o){return t.createElement(c,l({component:e},o))}}var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),d={display:"block",opacity:0,position:"absolute",top:0,left:0,height:"100%",width:"100%",overflow:"hidden",pointerEvents:"none",zIndex:-1},c=function(e){function i(){var e,t,o,n;s(this,i);for(var a=arguments.length,l=Array(a),u=0;u<a;u++)l[u]=arguments[u];return t=o=r(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(l))),o.state={},o.handleObjectLoad=function(e){o.setState({resizeTarget:e.target.contentDocument.defaultView},function(){o.state.resizeTarget.addEventListener("resize",o.handleResize),o.handleResize()})},o.handleResize=function(){var e={width:o.container.offsetWidth,height:o.container.offsetHeight};o.setState(e),o.props.onResize&&o.props.onResize(e)},n=t,r(o,n)}return a(i,e),u(i,[{key:"componentDidMount",value:function(){this.resizeElement.data="about:blank"}},{key:"componentWillUnmount",value:function(){var e=this.state.resizeTarget;e&&"function"==typeof e.removeEventListener&&e.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e,s=this,r=this.props,a=r.children,i=(r.onResize,r.onlyEvent),u=r.component,c=r.widthPropName,p=r.heightPropName,h=n(r,["children","onResize","onlyEvent","component","widthPropName","heightPropName"]),m=this.state,f=m.width,_=m.height,g="string"!=typeof u,v=[c||"width"],y=[p||"height"],j=(e={},o(e,v,f),o(e,y,_),e);return t.createElement(u,l(o({},g?"getRef":"ref",function(e){return s.container=e}),g&&j,h),t.createElement("object",{type:"text/html",style:d,ref:function(e){return s.resizeElement=e},onLoad:this.handleObjectLoad,"aria-hidden":!0,tabIndex:-1}),"function"==typeof a?a({width:f,height:_}):t.Children.map(a,function(e){return t.isValidElement(e)?t.cloneElement(e,i?null:j):e}))}}]),i}(t.Component);c.defaultProps={component:"div",widthPropName:void 0,heightPropName:void 0},e.default=c,e.makeResizeAware=i,Object.defineProperty(e,"__esModule",{value:!0})}(t,o(0))}()},"./node_modules/uuid/lib/bytesToUuid.js":function(e,t){function o(e,t){var o=t||0,s=n;return[s[e[o++]],s[e[o++]],s[e[o++]],s[e[o++]],"-",s[e[o++]],s[e[o++]],"-",s[e[o++]],s[e[o++]],"-",s[e[o++]],s[e[o++]],"-",s[e[o++]],s[e[o++]],s[e[o++]],s[e[o++]],s[e[o++]],s[e[o++]]].join("")}for(var n=[],s=0;s<256;++s)n[s]=(s+256).toString(16).substr(1);e.exports=o},"./node_modules/uuid/lib/rng-browser.js":function(e,t){var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(o){var n=new Uint8Array(16);e.exports=function(){return o(n),n}}else{var s=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),s[t]=e>>>((3&t)<<3)&255;return s}}},"./node_modules/uuid/v1.js":function(e,t,o){function n(e,t,o){var n=t&&o||0,d=t||[];e=e||{};var c=e.node||s,p=void 0!==e.clockseq?e.clockseq:r;if(null==c||null==p){var h=a();null==c&&(c=s=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==p&&(p=r=16383&(h[6]<<8|h[7]))}var m=void 0!==e.msecs?e.msecs:(new Date).getTime(),f=void 0!==e.nsecs?e.nsecs:u+1,_=m-l+(f-u)/1e4;if(_<0&&void 0===e.clockseq&&(p=p+1&16383),(_<0||m>l)&&void 0===e.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=m,u=f,r=p,m+=122192928e5;var g=(1e4*(268435455&m)+f)%4294967296;d[n++]=g>>>24&255,d[n++]=g>>>16&255,d[n++]=g>>>8&255,d[n++]=255&g;var v=m/4294967296*1e4&268435455;d[n++]=v>>>8&255,d[n++]=255&v,d[n++]=v>>>24&15|16,d[n++]=v>>>16&255,d[n++]=p>>>8|128,d[n++]=255&p;for(var y=0;y<6;++y)d[n+y]=c[y];return t||i(d)}var s,r,a=o("./node_modules/uuid/lib/rng-browser.js"),i=o("./node_modules/uuid/lib/bytesToUuid.js"),l=0,u=0;e.exports=n},"./node_modules/webpack/buildin/global.js":function(e,t){var o;o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(o=window)}e.exports=o},"./node_modules/webpack/buildin/module.js":function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},0:function(e,t){e.exports=React},1:function(e,t){e.exports=PropTypes},10:function(e,t){e.exports=Reactstrap},11:function(e,t){e.exports=ViewModeActions},12:function(e,t){e.exports=jQuery},13:function(e,t){e.exports=Config},14:function(e,t){e.exports=FormBuilderLoader},15:function(e,t){e.exports=ReactDom},16:function(e,t){e.exports=moment},2:function(e,t){e.exports=Injector},3:function(e,t){e.exports=i18n},4:function(e,t){e.exports=ReactRedux},5:function(e,t){e.exports=Redux},6:function(e,t){e.exports=classnames},7:function(e,t){e.exports=ReactApollo},8:function(e,t){e.exports=GraphQLTag},9:function(e,t){e.exports=Loading}});
=======
<<<<<<< HEAD
!function(e){function t(n){if(o[n])return o[n].exports;var s=o[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./client/src/bundles/bundle.js")}({"./client/src/boot/index.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=o("./client/src/boot/registerComponents.js"),r=n(s),a=o("./client/src/boot/registerReducers.js"),i=n(a);window.document.addEventListener("DOMContentLoaded",function(){(0,r.default)(),(0,i.default)()})},"./client/src/boot/registerComponents.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(2),r=n(s),a=o("./client/src/components/HistoryViewer/HistoryViewer.js"),i=n(a),l=o("./client/src/components/HistoryViewer/SnapshotViewerContainer.js"),u=n(l),d=o("./client/src/components/HistoryViewer/HistoryViewerHeading.js"),c=n(d),p=o("./client/src/components/HistoryViewer/HistoryViewerToolbar.js"),h=n(p),m=o("./client/src/components/HistoryViewer/HistoryViewerVersion.js"),f=n(m),_=o("./client/src/components/HistoryViewer/HistoryViewerVersionDetail.js"),g=n(_),v=o("./client/src/components/HistoryViewer/HistoryViewerVersionList.js"),y=n(v),j=o("./client/src/components/HistoryViewer/HistoryViewerVersionState.js"),b=n(j),C=o("./client/src/components/HistoryViewer/HistoryViewerSnapshotState.js"),w=n(C),S=o("./client/src/components/HistoryViewer/HistoryViewerSnapshot.js"),x=n(S),E=o("./client/src/components/HistoryViewer/HistoryViewerCompareWarning.js"),P=n(E),O=o("./client/src/components/HistoryViewer/RollbackMutation.js"),M=n(O);t.default=function(){r.default.component.register("SnapshotViewer",i.default),r.default.component.register("SnapshotViewerContainer",u.default),r.default.component.register("SnapshotHistoryViewer",i.default),r.default.component.register("SnapshotRollbackMutation",M.default),r.default.component.registerMany({SnapshotHistoryViewerHeading:c.default,SnapshotHistoryViewerToolbar:h.default,SnapshotHistoryViewerVersion:f.default,SnapshotHistoryViewerVersionDetail:g.default,SnapshotHistoryViewerVersionList:y.default,SnapshotHistoryViewerVersionState:b.default,SnapshotHistoryViewerSnapshotState:w.default,SnapshotHistoryViewerSnapshot:x.default,SnapshotHistoryViewerCompareWarning:P.default},{force:!0})}},"./client/src/boot/registerReducers.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(2),r=n(s),a=o(5),i=o("./client/src/state/historyviewer/HistoryViewerReducer.js"),l=n(i),u=function(){r.default.reducer.register("versionedAdmin",(0,a.combineReducers)({historyViewer:l.default}),{force:!0})};t.default=u},"./client/src/bundles/bundle.js":function(e,t,o){"use strict";o("./node_modules/expose-loader/index.js?SnapshotsViewer!./client/src/components/HistoryViewer/HistoryViewer.js-exposed"),o("./node_modules/expose-loader/index.js?versionType!./client/src/types/versionType.js-exposed"),o("./client/src/legacy/ArchiveAdmin/ArchiveAdmin.js"),o("./client/src/legacy/HistoryViewer/HistoryViewerEntwine.js"),o("./client/src/boot/index.js")},"./client/src/components/HistoryViewer/HistoryViewer.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=e.versionedAdmin.historyViewer,o=t.currentPage,n=t.currentVersion,s=t.previewMode;return{page:o,currentVersion:n,compare:t.compare,previewMode:s,previewState:e.viewMode.activeState}}function l(e){return{onSelect:function(t){e((0,S.showVersion)(t)),e((0,S.clearMessages)())},onSetPage:function(t){e((0,S.setCurrentPage)(t))},onResize:function(t){e(A.enableOrDisableSplitMode(t))}}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=t.VERSION_MODE_DATE=t.VERSION_MODE_VERSION=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},d=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=o(0),p=n(c),h=o(5),m=o(4),f=o("./node_modules/griddle-react/modules/griddle.jsx.js"),_=n(f),g=o("./client/src/containers/HistoryViewer/HistoryViewerConfig.js"),v=n(g),y=o(3),j=n(y),b=o(2),C=o(9),w=n(C),S=o("./client/src/state/historyviewer/HistoryViewerActions.js"),x=o("./client/src/types/versionType.js"),E=o("./client/src/types/compareType.js"),P=o(6),O=n(P),M=o("./node_modules/react-resize-aware/dist/index.js"),R=n(M),V=o(11),A=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(V),T=o(1),N=n(T);t.VERSION_MODE_VERSION="VERSION",t.VERSION_MODE_DATE="DATE";var k=function(e){function t(e){s(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleSetPage=o.handleSetPage.bind(o),o.handleNextPage=o.handleNextPage.bind(o),o.handlePrevPage=o.handlePrevPage.bind(o),o}return a(t,e),d(t,[{key:"componentDidUpdate",value:function(e){var t=e.page,o=this.props,n=o.page,s=o.actions.versions;t!==n&&"function"==typeof s.goToPage&&s.goToPage(n)}},{key:"componentWillUnmount",value:function(){var e=this.props.onSelect;"function"==typeof e&&e(!1)}},{key:"getVersions",value:function(){var e=this.props.versions;return(e&&e.SnapshotHistory&&e.SnapshotHistory.edges?e.SnapshotHistory.edges:[]).map(function(t){var o=t.node;return u({},o,o.OriginVersion,{AbsoluteLink:o.IsFullVersion?o.OriginVersion.AbsoluteLink:e.AbsoluteLink,Version:o.IsFullVersion?o.OriginVersion.Version:o.BaseVersion})})}},{key:"getContainerClasses",value:function(){var e=this.props,t=e.compare,o=e.isInGridField;return(0,O.default)("history-viewer","fill-height",{"history-viewer__compare-mode":t,"history-viewer--no-margins":o&&!this.isListView()})}},{key:"getLatestVersion",value:function(){var e=this.props.currentVersion;if(e&&!0===e.LatestDraftVersion)return e;var t=this.getVersions().filter(function(e){return!0===e.LatestDraftVersion});return t.length?t[0]:null}},{key:"isListView",value:function(){var e=this.props,t=e.compare;return!e.currentVersion||!!t&&!(!t.versionFrom||t.versionTo)}},{key:"handleSetPage",value:function(e){var t=this.props.onSetPage;"function"==typeof t&&t(e+1)}},{key:"handleNextPage",value:function(){var e=this.props.page;this.handleSetPage(e)}},{key:"handlePrevPage",value:function(){var e=this.props.page,t=e-1;if(t<1)return void this.handleSetPage(t);this.handleSetPage(t-1)}},{key:"compareModeAvailable",value:function(){return this.getVersions().length>1}},{key:"renderVersionDetail",value:function(){var e=this,t=this.props,o=t.currentVersion,n=t.isPreviewable,s=t.recordId,r=t.recordClass,a=t.typeName,i=t.schemaUrl,l=t.VersionDetailComponent,u=t.compare,d=t.compare,c=d.versionFrom,h=void 0!==c&&c,m=d.versionTo,f=void 0!==m&&m,_=t.previewState,g={":id":s,":class":r,":date":"",":version":""};g[":date"]=o.LastEdited;var v={":id":s,":class":r,":from":h.Version||0,":to":f.Version||0},y=u?/:id|:class|:from|:to/g:/:id|:class|:version|:date/g,j=u?v:g,b=u?h:o,C=this.getLatestVersion(),w={isLatestVersion:!u&&C&&C.Version===b.Version,isPreviewable:n,recordId:s,typeName:a,schemaUrl:i.replace(y,function(e){return j[e]}),version:b,compare:u,compareModeAvailable:this.compareModeAvailable(),previewState:_};return p.default.createElement(R.default,{className:this.getContainerClasses(),onResize:function(t){var o=t.width;return e.props.onResize(o)}},p.default.createElement(l,w))}},{key:"renderPagination",value:function(){var e=this.props,t=e.limit,o=e.page,n=e.versions;if(!n)return null;var s=n.SnapshotHistory?n.SnapshotHistory.pageInfo.totalCount:0;if(s<=t)return null;var r={setPage:this.handleSetPage,maxPage:Math.ceil(s/t),next:this.handleNextPage,nextText:j.default._t("HistoryViewer.NEXT","Next"),previous:this.handlePrevPage,previousText:j.default._t("HistoryViewer.PREVIOUS","Previous"),currentPage:o-1,useGriddleStyles:!1};return p.default.createElement("div",{className:"griddle-footer"},p.default.createElement(_.default.GridPagination,r))}},{key:"renderComparisonSelectionList",value:function(){var e=this.props,t=e.compare.versionFrom,o=e.ListComponent;if(!t)return null;var n=(0,O.default)("history-viewer__table","history-viewer__table--comparison-selected");return p.default.createElement(o,{versions:[t],extraClass:n})}},{key:"renderVersionList",value:function(){var e=this.props,t=e.isInGridField,o=e.ListComponent,n=e.CompareWarningComponent,s=e.compare,r=e.compare.versionFrom;return p.default.createElement("div",{className:this.getContainerClasses()},p.default.createElement(n,null),p.default.createElement("div",{className:t?"":"panel panel--padded panel--scrollable"},this.renderComparisonSelectionList(),p.default.createElement(o,{versions:this.getVersions(),showHeader:!s||s&&!r,compareModeAvailable:this.compareModeAvailable()}),p.default.createElement("div",{className:"history-viewer__pagination"},this.renderPagination())))}},{key:"renderCompareMode",value:function(){var e=this.props.compare;return e&&e.versionFrom&&e.versionTo?this.renderVersionDetail():this.renderVersionList()}},{key:"render",value:function(){var e=this.props,t=e.loading,o=e.compare,n=e.previewMode;return t?p.default.createElement(w.default,null):this.compareModeAvailable()&&o?this.renderCompareMode():n?this.renderVersionDetail():this.renderVersionList()}}]),t}(c.Component);k.propTypes={contextKey:N.default.string,limit:N.default.number,ListComponent:N.default.oneOfType([N.default.node,N.default.func]).isRequired,offset:N.default.number,recordId:N.default.number.isRequired,recordClass:N.default.string.isRequired,typeName:N.default.string.isRequired,currentVersion:N.default.oneOfType([N.default.bool,x.versionType]),compare:E.compareType,isInGridField:N.default.bool,isPreviewable:N.default.bool,VersionDetailComponent:N.default.oneOfType([N.default.node,N.default.func]).isRequired,CompareWarningComponent:N.default.oneOfType([N.default.node,N.default.func]).isRequired,versions:N.default.shape({Versions:N.default.shape({pageInfo:N.default.shape({totalCount:N.default.number}),edges:N.default.arrayOf(N.default.shape({node:x.versionType}))})}),page:N.default.number,schemaUrl:N.default.string,previewState:N.default.oneOf(["edit","preview","split"]),actions:N.default.object,onSelect:N.default.func,onSetPage:N.default.func,onResize:N.default.func},k.defaultProps={compare:{},contextKey:"",currentVersion:!1,isInGridField:!1,isPreviewable:!1,typeName:"",schemaUrl:"",versions:{Versions:{pageInfo:{totalCount:0},edges:[]}}},t.Component=k,t.default=(0,h.compose)((0,m.connect)(i,l),v.default,(0,b.inject)(["SnapshotHistoryViewerVersionList","SnapshotHistoryViewerVersionDetail","SnapshotHistoryViewerCompareWarning"],function(e,t,o){return{ListComponent:e,VersionDetailComponent:t,CompareWarningComponent:o}},function(e){return"VersionedAdmin.HistoryViewer."+e.contextKey}))(k)},"./client/src/components/HistoryViewer/HistoryViewerCompareWarning.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{isCompare:!!e.versionedAdmin.historyViewer.compare}}function l(e){return{onDismissCompare:function(){e((0,g.setCompareMode)(!1))}}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),d=o(0),c=n(d),p=o(1),h=n(p),m=o(4),f=o(3),_=n(f),g=o("./client/src/state/historyviewer/HistoryViewerActions.js"),v=function(e){function t(e){s(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleDismissCompare=o.handleDismissCompare.bind(o),o}return a(t,e),u(t,[{key:"handleDismissCompare",value:function(){this.props.onDismissCompare()}},{key:"render",value:function(){return this.props.isCompare?c.default.createElement("div",{className:"history-viewer__compare-notice alert alert-info"},c.default.createElement("span",{className:"notice-message"},c.default.createElement("strong",null,_.default._t("HistoryViewer.COMPARE_MODE","Compare mode"),": "),_.default._t("HistoryViewer.SELECT_PROMPT","Select two versions")),c.default.createElement("button",{className:"btn dismiss-button font-icon-cancel",onClick:this.handleDismissCompare},_.default._t("HistoryViewer.EXIT","Exit"))):null}}]),t}(d.Component);v.propTypes={isCompare:h.default.bool.isRequired},t.default=(0,m.connect)(i,l)(v)},"./client/src/components/HistoryViewer/HistoryViewerHeading.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{compareModeSelected:!!e.versionedAdmin.historyViewer.compare}}function l(e){return{onCompareModeSelect:function(){e((0,f.setCompareMode)(!0))},onCompareModeUnselect:function(){e((0,f.setCompareMode)(!1))}}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),d=o(3),c=n(d),p=o(0),h=n(p),m=o(10),f=o("./client/src/state/historyviewer/HistoryViewerActions.js"),_=o(5),g=o(4),v=o(1),y=n(v),j=function(e){function t(e){s(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.toggle=o.toggle.bind(o),o.handleCompareModeChange=o.handleCompareModeChange.bind(o),o.state={dropdownOpen:!1},o}return a(t,e),u(t,[{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"handleCompareModeChange",value:function(){var e=this.props,t=e.compareModeSelected,o=e.onCompareModeUnselect,n=e.onCompareModeSelect;t?o():n()}},{key:"renderDropdown",value:function(){var e=this.props,t=e.compareModeAvailable,o=e.compareModeSelected,n=this.state.dropdownOpen;return t?h.default.createElement(m.Dropdown,{isOpen:n,toggle:this.toggle,className:"history-viewer__actions-dropdown"},h.default.createElement(m.DropdownToggle,{className:"font-icon-sliders"}),h.default.createElement(m.DropdownMenu,{right:!0},h.default.createElement("div",{className:"form-check"},h.default.createElement("input",{id:"history-viewer-compare-two",type:"checkbox",className:"no-change-track history-viewer-heading__compare-mode-checkbox",checked:o,onChange:this.handleCompareModeChange}),h.default.createElement("label",{className:"form-check-label",htmlFor:"history-viewer-compare-two"},c.default._t("HistoryViewerHeading.COMPARE_VERSIONS","Compare two versions"))))):null}},{key:"render",value:function(){return h.default.createElement("li",{className:"history-viewer__heading",role:"row"},h.default.createElement("span",{className:"history-viewer__version-state",role:"columnheader"},c.default._t("HistoryViewer.Date","Date")),h.default.createElement("span",{className:"history-viewer__message",role:"columnheader"},c.default._t("HistoryViewer.Activity","Activity")),h.default.createElement("span",{className:"history-viewer__author",role:"columnheader"},c.default._t("HistoryViewer.Author","Author")),h.default.createElement("span",{className:"history-viewer__actions",role:"columnheader"},this.renderDropdown()))}}]),t}(p.Component);j.propTypes={compareModeAvailable:y.default.bool,compareModeSelected:y.default.bool,onCompareModeSelect:y.default.func,onCompareModeUnselect:y.default.func},j.defaultProps={compareModeAvailable:!0},t.Component=j,t.default=(0,_.compose)((0,g.connect)(i,l))(j)},"./client/src/components/HistoryViewer/HistoryViewerSnapshot.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{onSelect:function(t){var o=t.IsFullVersion?v.showVersion:v.showDate;e(o(t)),e((0,v.clearMessages)())}}}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(0),d=n(u),c=o(1),p=n(c),h=o(2),m=o(3),f=n(m),_=o(5),g=o(4),v=o("./client/src/state/historyviewer/HistoryViewerActions.js"),y=o(6),j=n(y),b=o("./client/src/types/versionType.js"),C=o("./client/src/helpers/getDateFromVersion.js"),w=n(C),S=function(e){function t(e){s(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleClick=o.handleClick.bind(o),o.handleKeyUp=o.handleKeyUp.bind(o),o.handleClose=o.handleClose.bind(o),o}return a(t,e),l(t,[{key:"getClassNames",value:function(){var e=this.props,t=e.extraClass,o=e.initial,n=e.isComparing,s=e.isActive,r={"history-viewer__row":!0,"history-viewer__snapshot":!0,"history-viewer__row--current":s,"history-viewer__snapshot--initial":o,"history-viewer__snapshot--muted":n};return(0,j.default)(r,t)}},{key:"handleClick",value:function(){var e=this.props,t=e.onSelect,o=e.version;return!e.isActive&&(t(o),!1)}},{key:"handleClose",value:function(e){return e.stopPropagation(),this.props.onSelect(!1),!1}},{key:"handleKeyUp",value:function(e){13===e.keyCode&&this.handleClick()}},{key:"render",value:function(){var e=this.props,t=e.version,o=e.StateComponent,n=e.FormActionComponent,s=e.isComparing,r=e.isActive,a=t.Author,i=a.FirstName,l=a.Surname,u=(i||"")+" "+(l||""),c=f.default._t("HistoryViewerSnapshot.GO_TO_SNAPSHOT","Go to snapshot at {date}");return d.default.createElement("li",{className:this.getClassNames(),role:"row"},d.default.createElement("span",{className:"history-viewer__version-link",role:"button",title:f.default.inject(c,{date:t.LastEdited}),onClick:this.handleClick,onKeyUp:this.handleKeyUp,tabIndex:s?-1:0},d.default.createElement("span",{className:"history-viewer__message",role:"cell"},d.default.createElement("span",null,t.ActivityAgo)," ",d.default.createElement("small",{className:"text-muted"},(0,w.default)(t))),d.default.createElement(o,{version:t}),d.default.createElement("span",{className:"history-viewer__author",role:"cell"},u),d.default.createElement("span",{className:"history-viewer__actions",role:"cell"},r&&d.default.createElement(n,{onClick:this.handleClose,icon:"cancel",attributes:{title:f.default._t("HistoryViewerVersion.CLOSE","Close")},title:null,buttonStyle:"outline-light",extraClass:"history-viewer__close-button"}))))}}]),t}(u.Component);S.propTypes={isActive:p.default.bool,version:b.versionType,initial:p.default.bool,isComparing:p.default.bool},t.default=(0,_.compose)((0,g.connect)(null,i),(0,h.inject)(["FormAction","SnapshotHistoryViewerSnapshotState"],function(e,t){return{FormActionComponent:e,StateComponent:t}}))(S)},"./client/src/components/HistoryViewer/HistoryViewerSnapshotState.js":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=o("./client/src/components/HistoryViewer/HistoryViewerVersionState.js"),l=o(2),u=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),a(t,[{key:"translateType",value:function(e){var t=window,o=t.i18n;switch(e){case"MODIFIED":return o._t("HistoryViewerSnapshot.MODIFIED","Edited");case"DELETED":return o._t("HistoryViewerSnapshot.DELETED","Archived");case"CREATED":return o._t("HistoryViewerSnapshot.CREATED","Created");case"ADDED":return o._t("HistoryViewerSnapshot.ADDED","Added");case"REMOVED":return o._t("HistoryViewerSnapshot.REMOVED","Removed");case"UNPUBLISHED":return o._t("HistoryViewerSnapshot.UNPUBLISHED","Unpublished");case"PUBLISHED":return o._t("HistoryViewerSnapshot.PUBLISHED","Published");default:return""}}},{key:"getPublishedState",value:function(){var e=this.props.version,t=e.ActivityDescription,o=e.ActivityType,n=this.translateType(o),s=t.split("\n");return s.length>1?s.map(function(e,t){return React.createElement("div",{key:t},e)}):n+" "+t}},{key:"getBadges",value:function(){return null}}]),t}(i.Component);t.Component=u,t.default=(0,l.inject)(["Badge"],function(e){return{BadgeComponent:e}})(u)},"./client/src/components/HistoryViewer/HistoryViewerToolbar.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{onAfterRevert:function(t){e((0,v.addMessage)(_.default.sprintf(_.default._t("HistoryViewerToolbar.REVERTED_MESSAGE","Successfully reverted to version %s"),t))),e((0,v.showList)())}}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(0),d=n(u),c=o(1),p=n(c),h=o(5),m=o(4),f=o(3),_=n(f),g=o(2),v=o("./client/src/state/historyviewer/HistoryViewerActions.js"),y=o(10),j=function(e){function t(e){s(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleRevert=o.handleRevert.bind(o),o.handleToggleRevertTooltip=o.handleToggleRevertTooltip.bind(o),o.state={isReverting:!1,revertTooltipOpen:!1,tooltipTimer:null},o}return a(t,e),l(t,[{key:"handleRevert",value:function(e){var t=this.props,o=t.onAfterRevert,n=t.recordId,s=t.versionId;this.setState({isReverting:!0});var r="function"==typeof o?o:function(){};return e({variables:{id:n,toVersion:s}}).then(function(){return r(s)})}},{key:"handleToggleRevertTooltip",value:function(){this.setState(function(e){return{revertTooltipOpen:!e.revertTooltipOpen}})}},{key:"render",value:function(){var e=this,t=this.props,o=t.FormActionComponent,n=t.ViewModeComponent,s=t.RollbackMutation,r=t.isLatestVersion,a=t.isPreviewable,i=t.canRollback,l=t.rollbackMessage,u=t.typeName,c=this.state,p=c.isReverting,h=c.revertTooltipOpen,m=p?_.default._t("HistoryViewerToolbar.REVERT_IN_PROGRESS","Revert in progress..."):_.default._t("HistoryViewerToolbar.REVERT_UNAVAILABLE","Unavailable for the current version");return d.default.createElement(s,{typeName:u},function(t){return d.default.createElement("div",{className:"toolbar toolbar--south"},d.default.createElement("div",{className:"btn-toolbar"},d.default.createElement(o,{id:"HistoryRevertButton",onClick:function(){return e.handleRevert(t)},icon:"back-in-time",name:"revert",attributes:{title:m},data:{buttonStyle:"warning"},disabled:r||p||!i,loading:p,title:_.default._t("HistoryViewerToolbar.REVERT_TO_VERSION","Revert to this version")}),!i&&d.default.createElement(y.Tooltip,{trigger:"click hover focus",placement:"top",isOpen:h,toggle:e.handleToggleRevertTooltip,target:"HistoryRevertButton"},l),a&&d.default.createElement(n,{id:"history-viewer-edit-mode",area:"edit"})))})}}]),t}(u.Component);j.propTypes={actions:p.default.shape({revertToVersion:p.default.func.isRequired}),FormActionComponent:p.default.oneOfType([p.default.node,p.default.func]).isRequired,ViewModeComponent:p.default.oneOfType([p.default.node,p.default.func]).isRequired,isLatestVersion:p.default.bool,isPreviewable:p.default.bool,onAfterRevert:p.default.func,recordId:p.default.number.isRequired,typeName:p.default.string.isRequired,versionId:p.default.number.isRequired,canRollback:p.default.bool,rollbackMessage:p.default.string},j.defaultProps={isLatestVersion:!1,isPreviewable:!1,canRollback:!0},t.Component=j,t.default=(0,h.compose)((0,m.connect)(null,i),(0,g.inject)(["FormAction","ViewModeToggle","SnapshotRollbackMutation"],function(e,t,o){return{FormActionComponent:e,ViewModeComponent:t,RollbackMutation:o}},function(){return"VersionedAdmin.HistoryViewer.Toolbar"}))(j)},"./client/src/components/HistoryViewer/HistoryViewerVersion.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{onSelect:function(t,o){var n=o.versionFrom;o?e(n?(0,C.setCompareTo)(t):(0,C.setCompareFrom)(t)):(e((0,C.showVersion)(t)),e((0,C.clearMessages)()))},onCompareMode:function(t){e((0,C.setCompareFrom)(t)),e((0,C.setCompareMode)(!0))}}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(0),d=n(u),c=o(1),p=n(c),h=o(5),m=o(4),f=o(2),_=o("./client/src/types/versionType.js"),g=o("./client/src/types/compareType.js"),v=o(3),y=n(v),j=o(6),b=n(j),C=o("./client/src/state/historyviewer/HistoryViewerActions.js"),w=o("./client/src/helpers/getDateFromVersion.js"),S=n(w),x=function(e){function t(e){s(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleClick=o.handleClick.bind(o),o.handleClose=o.handleClose.bind(o),o.handleCompare=o.handleCompare.bind(o),o.handleKeyUp=o.handleKeyUp.bind(o),o}return a(t,e),l(t,[{key:"getAuthor",value:function(){var e=this.props.version,t={};return e.Published&&e.Publisher?t=e.Publisher:e.Author&&(t=e.Author),(t.FirstName||"")+" "+(t.Surname||"")}},{key:"getClassNames",value:function(){var e=this.props,t=e.extraClass,o=e.isActive,n=e.compare,s=e.compare,r=s.compareFrom,a=s.compareTo,i={"history-viewer__row":!0,"history-viewer__row--current":o,"history-viewer__row--comparison-selected":n&&!(r&&a)};return(0,b.default)(i,t)}},{key:"handleKeyUp",value:function(e){13===e.keyCode&&this.handleClick()}},{key:"handleClick",value:function(){var e=this.props,t=e.onSelect,o=e.version,n=e.isActive,s=e.compare;return!n&&(t(o,s),!1)}},{key:"handleCompare",value:function(){var e=this.props;(0,e.onCompareMode)(e.version)}},{key:"handleClose",value:function(){var e=this.props,t=e.onSelect,o=e.version,n=e.compare,s=e.compare.versionFrom;s&&s.Version===o.Version&&delete n.versionFrom,t(0,n)}},{key:"renderCompareButton",value:function(){var e=this.props,t=e.compareModeAvailable,o=e.compare,n=e.FormActionComponent,s=y.default._t("HistoryViewerVersion.COMPARE","Compare");return!t||o?null:d.default.createElement(n,{onClick:this.handleCompare,title:s,buttonStyle:"outline-light",extraClass:"history-viewer__compare-button"},s)}},{key:"renderClearButton",value:function(){var e=this.props,t=e.FormActionComponent;return e.isActive?d.default.createElement(t,{onClick:this.handleClose,icon:"cancel",attributes:{title:y.default._t("HistoryViewerVersion.CLOSE","Close")},title:null,buttonStyle:"outline-light",extraClass:"history-viewer__close-button"}):null}},{key:"renderSelectedMessage",value:function(){return this.props.isActive?d.default.createElement("span",{className:"history-viewer__selected-message"},y.default._t("HistoryViewerVersion.SELECTED","Already selected")):null}},{key:"renderActions",value:function(){var e=this.props,t=e.isActive,o=e.compare;return t||o?d.default.createElement("span",{className:"history-viewer__actions",role:"cell"},this.renderCompareButton(),this.renderSelectedMessage(),this.renderClearButton()):d.default.createElement("span",{className:"history-viewer__actions",role:"cell"})}},{key:"render",value:function(){var e=this.props,t=e.version,o=e.isActive,n=e.StateComponent,s=y.default._t("HistoryViewerVersion.GO_TO_VERSION","Go to version {version}");return d.default.createElement("li",{className:this.getClassNames(),role:"row"},d.default.createElement("span",{className:"history-viewer__version-link",role:"button",title:y.default.inject(s,{version:t.Version}),onClick:this.handleClick,onKeyUp:this.handleKeyUp,tabIndex:0},d.default.createElement("span",{className:"history-viewer__message",role:"cell"},d.default.createElement("span",null,t.ActivityAgo)," ",d.default.createElement("small",{className:"text-muted"},(0,S.default)(t))),d.default.createElement(n,{version:t,isActive:o}),d.default.createElement("span",{className:"history-viewer__author",role:"cell"},this.getAuthor()),this.renderActions()))}}]),t}(u.Component);x.propTypes={extraClass:p.default.oneOfType([p.default.string,p.default.array,p.default.object]),version:_.versionType,isActive:p.default.bool,onSelect:p.default.func,onCompareMode:p.default.func,compare:g.compareType,compareModeAvailable:p.default.bool,StateComponent:p.default.oneOfType([p.default.node,p.default.func]).isRequired,FormActionComponent:p.default.oneOfType([p.default.node,p.default.func]).isRequired},x.defaultProps={isActive:!1,version:_.defaultVersion,compare:!1,compareModeAvailable:!0},t.Component=x,t.default=(0,h.compose)((0,m.connect)(null,i),(0,f.inject)(["SnapshotHistoryViewerVersionState","FormAction"],function(e,t){return{StateComponent:e,FormActionComponent:t}},function(e){var t=e.version,o="VersionedAdmin.HistoryViewer.HistoryViewerVersion";return t&&(o+="."+t.Version),o}))(x)},"./client/src/components/HistoryViewer/HistoryViewerVersionDetail.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(0),u=n(l),d=o(6),c=n(d),p=o(14),h=n(p),m=o(2),f=o("./client/src/types/versionType.js"),_=o(1),g=n(_),v=o(3),y=n(v),j=function(e){function t(){return s(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"componentWillMount",value:function(){this.toggleToolbarClass(!0)}},{key:"componentWillReceiveProps",value:function(e){e.previewState!==this.props.previewState&&this.toggleToolbarClass("split"===e.previewState)}},{key:"componentWillUnmount",value:function(){this.toggleToolbarClass(!1)}},{key:"getListVersions",value:function(){var e=this.props,t=e.compare,o=e.version;return this.isCompareMode()?[t.versionTo,t.versionFrom]:[o]}},{key:"isPreviewable",value:function(){return this.props.isPreviewable&&!this.isCompareMode()}},{key:"isCompareMode",value:function(){var e=this.props.compare;return e&&e.versionFrom&&e.versionTo}},{key:"toggleToolbarClass",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=document.querySelector(".CMSPageHistoryViewerController div:not(.cms-content-tools) .cms-content-header"),o="history-viewer__toolbar--condensed";t&&this.isPreviewable()&&(e?t.classList.add(o):t.classList.remove(o))}},{key:"renderPreview",value:function(){var e=this.props,t=e.version,o=e.PreviewComponent,n=e.previewState;return this.isPreviewable()&&"edit"!==n?u.default.createElement("div",{className:"history-viewer-preview flexbox-area-grow"},u.default.createElement("div",{className:"history-viewer-preview__underlay"},u.default.createElement("div",{className:"history-viewer-preview__spinner"}),y.default._t("HistoryViewerVersionDetail.LOADING_PREVIEW","Generating preview...")),u.default.createElement(o,{className:"history-viewer-preview__frame flexbox-area-grow",itemLinks:{preview:{Stage:{href:t.AbsoluteLink+"&archiveDate="+t.LastEdited,type:"text/html"}}},itemId:t.Version})):null}},{key:"renderToolbar",value:function(){var e=this.props,t=e.ToolbarComponent,o=e.isLatestVersion,n=e.recordId,s=e.version,r=e.typeName;if(this.isCompareMode())return null;var a=y.default._t("HistoryViewerVersionDetail.CANNOT_ROLLBACK_SNAPSHOTS","You can only revert to base versions");return u.default.createElement(t,{identifier:"HistoryViewer.VersionDetail.Toolbar",isLatestVersion:o,recordId:n,typeName:r,versionId:s.Version,isPreviewable:this.isPreviewable(),canRollback:s.IsFullVersion,rollbackMessage:a})}},{key:"renderDetails",value:function(){var e=this.props,t=e.compareModeAvailable,o=e.ListComponent,n=e.schemaUrl,s=e.CompareWarningComponent,r=e.previewState,a=e.version;if(this.isPreviewable()&&"preview"===r)return null;var i=["flexbox-area-grow","panel","panel--scrollable","panel--padded","panel--padded-side"],l={"history-viewer__table":!0,"history-viewer__table--current":!0,"history-viewer__table--compare":this.isCompareMode()},d={"history-viewer__version-detail":!0,"history-viewer__version-detail--compare":this.isCompareMode()};return u.default.createElement("div",{className:"flexbox-area-grow fill-height"},u.default.createElement("div",{className:(0,c.default)(i)},u.default.createElement(o,{extraClass:(0,c.default)(l),versions:this.getListVersions(),compareModeAvailable:t}),u.default.createElement("div",{className:(0,c.default)(d)},u.default.createElement(h.default,{identifier:"HistoryViewer.VersionDetail."+a.ID,schemaUrl:n,refetchSchemaOnMount:!1}))),this.renderToolbar(),u.default.createElement(s,{fixed:!0}))}},{key:"render",value:function(){return u.default.createElement("div",{className:"flexbox-area-grow fill-width"},this.renderDetails(),this.renderPreview())}}]),t}(l.PureComponent);j.propTypes={isLatestVersion:g.default.bool,isPreviewable:g.default.bool,ListComponent:g.default.oneOfType([g.default.node,g.default.func]).isRequired,PreviewComponent:g.default.oneOfType([g.default.node,g.default.func]),recordId:g.default.number.isRequired,typeName:g.default.string.isRequired,schemaUrl:g.default.string.isRequired,ToolbarComponent:g.default.oneOfType([g.default.node,g.default.func]).isRequired,version:f.versionType,compare:g.default.oneOfType([g.default.shape({versionFrom:f.versionType,versionTo:f.versionType}),g.default.bool]),previewState:g.default.oneOf(["edit","preview","split"])},j.defaultProps={isLatestVersion:!1,isPreviewable:!1,compare:!1},t.Component=j,t.default=(0,m.inject)(["SnapshotHistoryViewerVersionList","SnapshotHistoryViewerToolbar","Preview","SnapshotHistoryViewerCompareWarning"],function(e,t,o,n){return{ListComponent:e,ToolbarComponent:t,PreviewComponent:o,CompareWarningComponent:n}},function(e,t){return t+".HistoryViewerVersionDetail."+e.version.Version})(j)},"./client/src/components/HistoryViewer/HistoryViewerVersionList.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=e.versionedAdmin.historyViewer;return{messages:t.messages,compare:t.compare,currentVersion:t.currentVersion}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(0),d=n(u),c=o(1),p=n(c),h=o(6),m=n(h),f=o(3),_=n(f),g=o(4),v=o(5),y=o(2),j=o("./client/src/types/messageType.js"),b=o("./client/src/types/versionType.js"),C=o("./client/src/types/compareType.js"),w=function(e){function t(){return s(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"getClassNames",value:function(){var e=this.props,t=e.extraClass,o=e.showHeader;return(0,m.default)(t,{table:!0,"history-viewer__table--headerless":!o})}},{key:"isVersionActive",value:function(e){var t=this.props,o=t.currentVersion,n=t.compare,s=t.compare,r=s.versionFrom,a=s.versionTo,i=o&&o.ID===e.ID,l=r&&r.ID===e.ID,u=a&&a.ID===e.ID;return!n&&i||l||u}},{key:"renderMessages",value:function(){var e=this.props,t=e.FormAlertComponent,o=e.messages;return o.length?d.default.createElement("div",{className:"history-viewer__messages"},o.map(function(e){return d.default.createElement(t,{key:e.id,type:e.type,value:e.message,closeLabel:_.default._t("HistoryViewerVersionList.CLOSE","Close")})})):null}},{key:"renderHeader",value:function(){var e=this.props,t=e.showHeader,o=e.HeadingComponent,n=e.compareModeAvailable;if(!t)return null;var s={compareModeAvailable:n};return d.default.createElement(o,s)}},{key:"render",value:function(){var e=this,t=this.props,o=t.VersionComponent,n=t.SnapshotComponent,s=t.versions,r=t.compareModeAvailable,a=t.compare;return d.default.createElement("div",{className:"history-viewer__list"},d.default.createElement("ul",{className:this.getClassNames(),role:"table"},this.renderHeader(),s.map(function(t,s){return t.IsFullVersion?d.default.createElement(o,{key:t.ID+"--"+t.LastEdited,isActive:e.isVersionActive(t),version:t,compare:a,compareModeAvailable:r}):d.default.createElement(n,{isComparing:!!a,key:t.ID+"--"+t.LastEdited,isActive:e.isVersionActive(t),version:t,initial:s<1})})))}}]),t}(u.PureComponent);w.propTypes={extraClass:p.default.oneOfType([p.default.string,p.default.array,p.default.object]),showHeader:p.default.bool,FormAlertComponent:p.default.oneOfType([p.default.node,p.default.func]).isRequired,HeadingComponent:p.default.oneOfType([p.default.node,p.default.func]).isRequired,messages:p.default.arrayOf(j.messageType),VersionComponent:p.default.oneOfType([p.default.node,p.default.func]).isRequired,versions:p.default.arrayOf(b.versionType),compare:C.compareType,compareModeAvailable:p.default.bool},w.defaultProps={compareModeAvailable:!0,extraClass:"history-viewer__table",messages:[],showHeader:!0,versions:[]},t.Component=w,t.default=(0,v.compose)((0,g.connect)(i),(0,y.inject)(["FormAlert","SnapshotHistoryViewerHeading","SnapshotHistoryViewerVersion","SnapshotHistoryViewerSnapshot"],function(e,t,o,n){return{FormAlertComponent:e,HeadingComponent:t,VersionComponent:o,SnapshotComponent:n}},function(){return"VersionedAdmin.HistoryViewer.HistoryViewerVersionList"}))(w)},"./client/src/components/HistoryViewer/HistoryViewerVersionState.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(0),u=n(l),d=o(6),c=n(d),p=o(3),h=n(p),m=o("./client/src/types/versionType.js"),f=o(2),_=o(1),g=n(_),v=function(e){function t(){return s(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"getClassNames",value:function(){var e=this.props.extraClass;return(0,c.default)("history-viewer__version-state",e)}},{key:"getPublishedState",value:function(){return this.props.version.Published?h.default._t("HistoryViewer.Published","Published"):h.default._t("HistoryViewer.Saved","Saved")}},{key:"getBadges",value:function(){var e=this.props,t=e.version,o=e.isActive,n=e.BadgeComponent;return t.IsLiveSnapshot?u.default.createElement(n,{status:"success",message:h.default._t("HistoryViewer.BadgeLive","Live"),className:"",inverted:o}):""}},{key:"render",value:function(){return u.default.createElement("span",{className:this.getClassNames(),role:"cell"},this.getPublishedState()," "," ",this.getBadges())}}]),t}(l.Component);v.propTypes={version:m.versionType,extraClass:g.default.string,isActive:g.default.bool,BadgeComponent:g.default.oneOfType([g.default.node,g.default.func]).isRequired},v.defaultProps={version:m.defaultVersion,extraClass:"",isActive:!1},t.Component=v,t.default=(0,f.inject)(["Badge"],function(e){return{BadgeComponent:e}},function(e){return"HistoryViewer.HistoryViewerVersionState."+e.version.Version})(v)},"./client/src/components/HistoryViewer/RollbackMutation.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(0),r=n(s),a=o(8),i=o("./client/src/graphql/createRollbackMutation.js"),l=n(i),u=function(e){var t=e.typeName,o=e.children,n=(0,s.useMemo)(function(){return(0,l.default)(t)},[t]);return r.default.createElement(a.Mutation,{mutation:n,refetchQueries:["ReadSnapshots"+t]},o)};t.default=u},"./client/src/components/HistoryViewer/SnapshotViewerContainer.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=o(0),a=n(r),i=o(1),l=n(i),u=o(7),d=(n(u),o(8)),c=o(2),p=o("./client/src/graphql/createSnapshotsQuery.js"),h=n(p),m=function(e){var t=e.typeName,o=e.recordId,n=e.limit,i=e.page,l=e.recordClass,u=e.actions,c=void 0===u?{versions:{}}:u,p=e.SnapshotViewerComponent,m=(0,r.useMemo)(function(){return(0,h.default)(t)},[t]),f={limit:n,offset:((i||1)-1)*n,page_id:o};return a.default.createElement(d.Query,{query:m,variables:f,fetchPolicy:"network-only"},function(e){var r=e.loading,u=e.error,d=e.data,h=e.refetch,m=null;d&&(m=d["readOne"+t]);var f=m||null,_=u&&u.graphQLErrors&&u.graphQLErrors.map(function(e){return e.message}),g={loading:r||!f,versions:f,graphQLErrors:_,actions:s({},c,{versions:s({},f,{goToPage:function(e){h({offset:((e||1)-1)*n,limit:n,page_id:o})}})}),recordId:o,recordClass:l,typeName:t,limit:n,page:i};return a.default.createElement(p,g)})};m.propTypes={typeName:l.default.string.isRequired,recordId:l.default.number.isRequired,limit:l.default.number,page:l.default.number,actions:l.default.object},t.default=(0,c.inject)(["SnapshotViewer"],function(e){return{SnapshotViewerComponent:e}},function(e){return"VersionedAdmin.HistoryViewer."+e.contextKey})(m)},"./client/src/containers/HistoryViewer/HistoryViewerConfig.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(0),d=n(u),c=o(13),p=n(c),h=o(2),m=function(e){var t=function(t){function o(){return s(this,o),r(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return a(o,t),l(o,[{key:"getConfig",value:function(){return p.default.getSection("SilverStripe\\VersionedAdmin\\Controllers\\HistoryViewerController")}},{key:"getSchemaUrlDetails",value:function(){return this.props.compare?{formName:"compareForm",queryParts:["RecordVersionFrom=:from","RecordVersionTo=:to"]}:{formName:"versionForm",queryParts:["RecordVersion=:version","RecordDate=:date"]}}},{key:"getSchemaUrl",value:function(){var e=this.getConfig(),t=this.getSchemaUrlDetails(),o=t.formName,n=t.queryParts;return e.form[o].schemaUrl+"/:id?"+n.concat("RecordClass=:class&RecordID=:id").join("&")}},{key:"render",value:function(){var t=i({},this.props,{config:this.getConfig(),HistoryViewer:e,schemaUrl:this.getSchemaUrl()});return d.default.createElement(e,t)}}]),o}(d.default.Component);return(0,h.inject)(["SnapshotHistoryViewer"])(t)};t.default=m},"./client/src/graphql/createRollbackMutation.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation rollback","($id:ID!, $toVersion:Int!) {\n    rollback","(\n      ID: $id\n      ToVersion: $toVersion\n    ) {\n      ID\n    }\n  }\n  "],["\n  mutation rollback","($id:ID!, $toVersion:Int!) {\n    rollback","(\n      ID: $id\n      ToVersion: $toVersion\n    ) {\n      ID\n    }\n  }\n  "]),s=(o(8),o(7)),r=function(e){return e&&e.__esModule?e:{default:e}}(s),a=function(e){return(0,r.default)(n,e,e)};t.default=a},"./client/src/graphql/createSnapshotsQuery.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    query ReadSnapshots"," ($page_id: ID!, $limit: Int!, $offset: Int!) {\n        readOne","(\n          ID: $page_id\n        ) {\n          ID\n          AbsoluteLink\n          SnapshotHistory (limit: $limit, offset: $offset) {\n            pageInfo {\n              totalCount\n            }\n            edges {\n              node {\n                ID\n                LastEdited\n                ActivityDescription\n                ActivityType\n                ActivityAgo\n                IsFullVersion\n                IsLiveSnapshot\n                BaseVersion\n                Message\n                Author {\n                  FirstName\n                  Surname\n                }\n                OriginVersion {\n                  Version\n                  AbsoluteLink\n                  Author {\n                    FirstName\n                    Surname\n                  }\n\n                  Published\n                  Publisher {\n                    FirstName\n                    Surname\n                  }\n                  LatestDraftVersion\n                }\n              }\n            }\n          }\n        }\n      }\n\n    "],["\n    query ReadSnapshots"," ($page_id: ID!, $limit: Int!, $offset: Int!) {\n        readOne","(\n          ID: $page_id\n        ) {\n          ID\n          AbsoluteLink\n          SnapshotHistory (limit: $limit, offset: $offset) {\n            pageInfo {\n              totalCount\n            }\n            edges {\n              node {\n                ID\n                LastEdited\n                ActivityDescription\n                ActivityType\n                ActivityAgo\n                IsFullVersion\n                IsLiveSnapshot\n                BaseVersion\n                Message\n                Author {\n                  FirstName\n                  Surname\n                }\n                OriginVersion {\n                  Version\n                  AbsoluteLink\n                  Author {\n                    FirstName\n                    Surname\n                  }\n\n                  Published\n                  Publisher {\n                    FirstName\n                    Surname\n                  }\n                  LatestDraftVersion\n                }\n              }\n            }\n          }\n        }\n      }\n\n    "]),s=o(7),r=function(e){return e&&e.__esModule?e:{default:e}}(s),a=function(e){return(0,r.default)(n,e,e)};t.default=a},"./client/src/helpers/getDateFromVersion.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(3),r=n(s),a=o(16),i=n(a),l=function(e){return i.default.locale(r.default.detectLocale()),(0,i.default)(e.LastEdited).format("L LT")};t.default=l},"./client/src/legacy/ArchiveAdmin/ArchiveAdmin.js":function(e,t,o){"use strict";var n=o(12);(function(e){return e&&e.__esModule?e:{default:e}})(n).default.entwine("ss",function(e){e(".ArchiveAdmin__action--restore").entwine({onmatch:function(){e(this).attr("readonly",!1),e(this).attr("disabled",!1)}}),e(".ArchiveAdmin .other-model-selector select").entwine({onchange:function(t){t.preventDefault();var o=e(this).val(),n=e(this).data("others-archive-url");if(o){o=o.replace(/\\/g,"-");var s=n+o;e(".cms-container").loadPanel(s,"",{pjax:"CurrentForm"})}}})})},"./client/src/legacy/HistoryViewer/HistoryViewerEntwine.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=o(12),a=n(r),i=o(0),l=n(i),u=o(15),d=n(u),c=o(2);a.default.entwine("ss",function(e){e(".js-injector-boot .snapshot-history-viewer__container").entwine({onmatch:function(){var e=this.closest(".cms-content").attr("id"),t=e?{context:e}:{},o=(0,c.loadComponent)("SnapshotViewerContainer",t),n=this.data("schema"),r=s({},n.data,{isInGridField:n.data.isInGridField||!this.hasClass("history-viewer--standalone")});d.default.render(l.default.createElement(o,r),this[0])},onunmatch:function(){d.default.unmountComponentAtNode(this[0])}}),e(".history-viewer__version-detail .nav-link").entwine({onclick:function(e){e.preventDefault(),this._super(e)}}),e(".tab.tab--history-viewer[aria-hidden=false]").entwine({onmatch:function(){e(".toolbar--south.cms-content-actions").hide()},onunmatch:function(){e(".toolbar--south.cms-content-actions").show()}}),e(".tab.tab--history-viewer .history-viewer__version-detail").entwine({onmatch:function(){this.parent().css("padding-bottom","3rem").next(".toolbar--south").css({position:"absolute",bottom:0,left:0,right:0})}})})},"./client/src/state/historyviewer/HistoryViewerActionTypes.js":function(e,t,o){"use strict";function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=["SHOW_VERSION","SHOW_DATE","SHOW_LIST","SET_CURRENT_PAGE","ADD_MESSAGE","CLEAR_MESSAGES","SET_COMPARE_MODE","SET_COMPARE_FROM","SET_COMPARE_TO"].reduce(function(e,t){return Object.assign(e,n({},t,"HISTORY_VIEWER."+t))},{})},"./client/src/state/historyviewer/HistoryViewerActions.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e){return{type:m.default.SHOW_VERSION,payload:{version:e}}}function r(e){return{type:m.default.SHOW_DATE,payload:{version:e}}}function a(){return{type:m.default.SHOW_LIST}}function i(e){return{type:m.default.SET_CURRENT_PAGE,payload:{page:e}}}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";return{type:m.default.ADD_MESSAGE,payload:{id:(0,_.default)(),message:e,type:t}}}function u(){return{type:m.default.CLEAR_MESSAGES}}function d(e){return{type:m.default.SET_COMPARE_MODE,payload:{enabled:e}}}function c(e){return{type:m.default.SET_COMPARE_FROM,payload:{version:e}}}function p(e){return{type:m.default.SET_COMPARE_TO,payload:{version:e}}}Object.defineProperty(t,"__esModule",{value:!0}),t.showVersion=s,t.showDate=r,t.showList=a,t.setCurrentPage=i,t.addMessage=l,t.clearMessages=u,t.setCompareMode=d,t.setCompareFrom=c,t.setCompareTo=p;var h=o("./client/src/state/historyviewer/HistoryViewerActionTypes.js"),m=n(h),f=o("./node_modules/uuid/v1.js"),_=n(f)},"./client/src/state/historyviewer/HistoryViewerReducer.js":function(e,t,o){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.type,s=t.payload;switch(o){case i.default.SET_CURRENT_PAGE:return r({},e,{currentPage:s.page});case i.default.SHOW_VERSION:var a=s.version;return r({},e,{previewMode:a&&u.VERSION_MODE_VERSION,currentVersion:a});case i.default.SHOW_DATE:var l=s.version;return r({},e,{previewMode:l&&u.VERSION_MODE_DATE,currentVersion:l});case i.default.SHOW_LIST:return r({},e,{currentVersion:!1,currentDate:!1,previewMode:!1,currentPage:0});case i.default.ADD_MESSAGE:return r({},e,{messages:[s].concat(n(e.messages))});case i.default.CLEAR_MESSAGES:return r({},e,{messages:[]});case i.default.SET_COMPARE_MODE:var c=r({versionFrom:!1,versionTo:!1},e.compare);return r({},e,{compare:!!s.enabled&&c,previewMode:!!s.enabled&&e.previewMode});case i.default.SET_COMPARE_FROM:var p=e.compare,h=p.versionFrom,m=p.versionTo;return h=s.version||!1,h||(h=m,m=!1),r({},e,{currentVersion:h,compare:{versionFrom:h,versionTo:m}});case i.default.SET_COMPARE_TO:var f=e.compare,_=f.versionFrom,g=f.versionTo;return g=s.version||!1,g&&_&&g.Version<_.Version&&(_=g,g=e.compare.versionFrom),r({},e,{currentVersion:_,compare:{versionFrom:_,versionTo:g}});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e};t.default=s;var a=o("./client/src/state/historyviewer/HistoryViewerActionTypes.js"),i=function(e){return e&&e.__esModule?e:{default:e}}(a),l=o("./client/src/types/compareType.js"),u=o("./client/src/components/HistoryViewer/HistoryViewer.js"),d={currentPage:1,previewMode:!1,currentVersion:!1,compare:l.defaultCompare,loading:!1,messages:[]}},"./client/src/types/compareType.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultCompare=t.compareType=void 0;var n=o(1),s=function(e){return e&&e.__esModule?e:{default:e}}(n),r=o("./client/src/types/versionType.js"),a=s.default.oneOfType([s.default.bool,s.default.shape({versionFrom:r.versionType,versionTo:r.versionType})]);t.compareType=a,t.defaultCompare=!1},"./client/src/types/messageType.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.messageType=void 0;var n=o(1),s=function(e){return e&&e.__esModule?e:{default:e}}(n),r=s.default.shape({id:s.default.string,message:s.default.string,type:s.default.oneOf(["error","info","success","warning"])});t.messageType=r},"./client/src/types/versionType.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultVersion=t.versionType=void 0;var n=o(1),s=function(e){return e&&e.__esModule?e:{default:e}}(n),r=s.default.shape({FirstName:s.default.string,Surname:s.default.string}),a=s.default.shape({Version:s.default.number,AbsoluteLink:s.default.string,LastEdited:s.default.string,Published:s.default.boolean,LiveVersion:s.default.boolean,LatestDraftVersion:s.default.boolean,Message:s.default.string,Publisher:r,Author:r}),i={Version:0,AbsoluteLink:"",LastEdited:"",Published:!1,LiveVersion:!1,LatestDraftVersion:!1,Message:"",Publisher:{FirstName:"",Surname:""},Author:{FirstName:"",Surname:""}};t.versionType=a,t.defaultVersion=i},'./node_modules/babel-loader/lib/index.js?{"presets":[["env",{"modules":false}],"react"],"plugins":["transform-object-rest-spread"],"comments":false,"cacheDirectory":false}!./client/src/components/HistoryViewer/HistoryViewer.js':function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=e.versionedAdmin.historyViewer,o=t.currentPage,n=t.currentVersion,s=t.previewMode;return{page:o,currentVersion:n,compare:t.compare,previewMode:s,previewState:e.viewMode.activeState}}function l(e){return{onSelect:function(t){e((0,S.showVersion)(t)),e((0,S.clearMessages)())},onSetPage:function(t){e((0,S.setCurrentPage)(t))},onResize:function(t){e(A.enableOrDisableSplitMode(t))}}}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=t.VERSION_MODE_DATE=t.VERSION_MODE_VERSION=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},d=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=o(0),p=n(c),h=o(5),m=o(4),f=o("./node_modules/griddle-react/modules/griddle.jsx.js"),_=n(f),g=o("./client/src/containers/HistoryViewer/HistoryViewerConfig.js"),v=n(g),y=o(3),j=n(y),b=o(2),C=o(9),w=n(C),S=o("./client/src/state/historyviewer/HistoryViewerActions.js"),x=o("./client/src/types/versionType.js"),E=o("./client/src/types/compareType.js"),P=o(6),O=n(P),M=o("./node_modules/react-resize-aware/dist/index.js"),R=n(M),V=o(11),A=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(V),T=o(1),N=n(T);t.VERSION_MODE_VERSION="VERSION",t.VERSION_MODE_DATE="DATE";var k=function(e){function t(e){s(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleSetPage=o.handleSetPage.bind(o),o.handleNextPage=o.handleNextPage.bind(o),o.handlePrevPage=o.handlePrevPage.bind(o),o}return a(t,e),d(t,[{key:"componentDidUpdate",value:function(e){var t=e.page,o=this.props,n=o.page,s=o.actions.versions;t!==n&&"function"==typeof s.goToPage&&s.goToPage(n)}},{key:"componentWillUnmount",value:function(){var e=this.props.onSelect;"function"==typeof e&&e(!1)}},{key:"getVersions",value:function(){var e=this.props.versions;return(e&&e.SnapshotHistory&&e.SnapshotHistory.edges?e.SnapshotHistory.edges:[]).map(function(t){var o=t.node;return u({},o,o.OriginVersion,{AbsoluteLink:o.IsFullVersion?o.OriginVersion.AbsoluteLink:e.AbsoluteLink,Version:o.IsFullVersion?o.OriginVersion.Version:o.BaseVersion})})}},{key:"getContainerClasses",value:function(){var e=this.props,t=e.compare,o=e.isInGridField;return(0,O.default)("history-viewer","fill-height",{"history-viewer__compare-mode":t,"history-viewer--no-margins":o&&!this.isListView()})}},{key:"getLatestVersion",value:function(){var e=this.props.currentVersion;if(e&&!0===e.LatestDraftVersion)return e;var t=this.getVersions().filter(function(e){return!0===e.LatestDraftVersion});return t.length?t[0]:null}},{key:"isListView",value:function(){var e=this.props,t=e.compare;return!e.currentVersion||!!t&&!(!t.versionFrom||t.versionTo)}},{key:"handleSetPage",value:function(e){var t=this.props.onSetPage;"function"==typeof t&&t(e+1)}},{key:"handleNextPage",value:function(){var e=this.props.page;this.handleSetPage(e)}},{key:"handlePrevPage",value:function(){var e=this.props.page,t=e-1;if(t<1)return void this.handleSetPage(t);this.handleSetPage(t-1)}},{key:"compareModeAvailable",value:function(){return this.getVersions().length>1}},{key:"renderVersionDetail",value:function(){var e=this,t=this.props,o=t.currentVersion,n=t.isPreviewable,s=t.recordId,r=t.recordClass,a=t.typeName,i=t.schemaUrl,l=t.VersionDetailComponent,u=t.compare,d=t.compare,c=d.versionFrom,h=void 0!==c&&c,m=d.versionTo,f=void 0!==m&&m,_=t.previewState,g={":id":s,":class":r,":date":"",":version":""};g[":date"]=o.LastEdited;var v={":id":s,":class":r,":from":h.Version||0,":to":f.Version||0},y=u?/:id|:class|:from|:to/g:/:id|:class|:version|:date/g,j=u?v:g,b=u?h:o,C=this.getLatestVersion(),w={isLatestVersion:!u&&C&&C.Version===b.Version,isPreviewable:n,recordId:s,typeName:a,schemaUrl:i.replace(y,function(e){return j[e]}),version:b,compare:u,compareModeAvailable:this.compareModeAvailable(),previewState:_};return p.default.createElement(R.default,{className:this.getContainerClasses(),onResize:function(t){var o=t.width;return e.props.onResize(o)}},p.default.createElement(l,w))}},{key:"renderPagination",value:function(){var e=this.props,t=e.limit,o=e.page,n=e.versions;if(!n)return null;var s=n.SnapshotHistory?n.SnapshotHistory.pageInfo.totalCount:0;if(s<=t)return null;var r={setPage:this.handleSetPage,maxPage:Math.ceil(s/t),next:this.handleNextPage,nextText:j.default._t("HistoryViewer.NEXT","Next"),previous:this.handlePrevPage,previousText:j.default._t("HistoryViewer.PREVIOUS","Previous"),currentPage:o-1,useGriddleStyles:!1};return p.default.createElement("div",{className:"griddle-footer"},p.default.createElement(_.default.GridPagination,r))}},{key:"renderComparisonSelectionList",value:function(){var e=this.props,t=e.compare.versionFrom,o=e.ListComponent;if(!t)return null;var n=(0,O.default)("history-viewer__table","history-viewer__table--comparison-selected");return p.default.createElement(o,{versions:[t],extraClass:n})}},{key:"renderVersionList",value:function(){var e=this.props,t=e.isInGridField,o=e.ListComponent,n=e.CompareWarningComponent,s=e.compare,r=e.compare.versionFrom;return p.default.createElement("div",{className:this.getContainerClasses()},p.default.createElement(n,null),p.default.createElement("div",{className:t?"":"panel panel--padded panel--scrollable"},this.renderComparisonSelectionList(),p.default.createElement(o,{versions:this.getVersions(),showHeader:!s||s&&!r,compareModeAvailable:this.compareModeAvailable()}),p.default.createElement("div",{className:"history-viewer__pagination"},this.renderPagination())))}},{key:"renderCompareMode",value:function(){var e=this.props.compare;return e&&e.versionFrom&&e.versionTo?this.renderVersionDetail():this.renderVersionList()}},{key:"render",value:function(){var e=this.props,t=e.loading,o=e.compare,n=e.previewMode;return t?p.default.createElement(w.default,null):this.compareModeAvailable()&&o?this.renderCompareMode():n?this.renderVersionDetail():this.renderVersionList()}}]),t}(c.Component);k.propTypes={contextKey:N.default.string,limit:N.default.number,ListComponent:N.default.oneOfType([N.default.node,N.default.func]).isRequired,offset:N.default.number,recordId:N.default.number.isRequired,recordClass:N.default.string.isRequired,typeName:N.default.string.isRequired,currentVersion:N.default.oneOfType([N.default.bool,x.versionType]),compare:E.compareType,isInGridField:N.default.bool,isPreviewable:N.default.bool,VersionDetailComponent:N.default.oneOfType([N.default.node,N.default.func]).isRequired,CompareWarningComponent:N.default.oneOfType([N.default.node,N.default.func]).isRequired,versions:N.default.shape({Versions:N.default.shape({pageInfo:N.default.shape({totalCount:N.default.number}),edges:N.default.arrayOf(N.default.shape({node:x.versionType}))})}),page:N.default.number,schemaUrl:N.default.string,previewState:N.default.oneOf(["edit","preview","split"]),actions:N.default.object,onSelect:N.default.func,onSetPage:N.default.func,onResize:N.default.func},k.defaultProps={compare:{},contextKey:"",currentVersion:!1,isInGridField:!1,isPreviewable:!1,typeName:"",schemaUrl:"",versions:{Versions:{pageInfo:{totalCount:0},edges:[]}}},t.Component=k,t.default=(0,h.compose)((0,m.connect)(i,l),v.default,(0,b.inject)(["SnapshotHistoryViewerVersionList","SnapshotHistoryViewerVersionDetail","SnapshotHistoryViewerCompareWarning"],function(e,t,o){return{ListComponent:e,VersionDetailComponent:t,CompareWarningComponent:o}},function(e){return"VersionedAdmin.HistoryViewer."+e.contextKey}))(k)},'./node_modules/babel-loader/lib/index.js?{"presets":[["env",{"modules":false}],"react"],"plugins":["transform-object-rest-spread"],"comments":false,"cacheDirectory":false}!./client/src/types/versionType.js':function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultVersion=t.versionType=void 0;var n=o(1),s=function(e){return e&&e.__esModule?e:{default:e}}(n),r=s.default.shape({FirstName:s.default.string,Surname:s.default.string}),a=s.default.shape({Version:s.default.number,AbsoluteLink:s.default.string,LastEdited:s.default.string,Published:s.default.boolean,LiveVersion:s.default.boolean,LatestDraftVersion:s.default.boolean,Message:s.default.string,Publisher:r,Author:r}),i={Version:0,AbsoluteLink:"",LastEdited:"",Published:!1,LiveVersion:!1,LatestDraftVersion:!1,Message:"",Publisher:{FirstName:"",Surname:""},Author:{FirstName:"",Surname:""}};t.versionType=a,t.defaultVersion=i},"./node_modules/create-react-class/factory.js":function(e,t,o){"use strict";function n(e){return e}function s(e,t,o){function s(e,t){var o=v.hasOwnProperty(t)?v[t]:null;w.hasOwnProperty(t)&&i("OVERRIDE_BASE"===o,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&i("DEFINE_MANY"===o||"DEFINE_MANY_MERGED"===o,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function u(e,o){if(o){i("function"!=typeof o,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!t(o),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var n=e.prototype,r=n.__reactAutoBindPairs;o.hasOwnProperty(l)&&j.mixins(e,o.mixins);for(var a in o)if(o.hasOwnProperty(a)&&a!==l){var u=o[a],d=n.hasOwnProperty(a);if(s(d,a),j.hasOwnProperty(a))j[a](e,u);else{var c=v.hasOwnProperty(a),m="function"==typeof u,f=m&&!c&&!d&&!1!==o.autobind;if(f)r.push(a,u),n[a]=u;else if(d){var _=v[a];i(c&&("DEFINE_MANY_MERGED"===_||"DEFINE_MANY"===_),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",_,a),"DEFINE_MANY_MERGED"===_?n[a]=p(n[a],u):"DEFINE_MANY"===_&&(n[a]=h(n[a],u))}else n[a]=u}}}}function d(e,t){if(t)for(var o in t){var n=t[o];if(t.hasOwnProperty(o)){var s=o in j;i(!s,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',o);var r=o in e;if(r){var a=y.hasOwnProperty(o)?y[o]:null;return i("DEFINE_MANY_MERGED"===a,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",o),void(e[o]=p(e[o],n))}e[o]=n}}}function c(e,t){i(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var o in t)t.hasOwnProperty(o)&&(i(void 0===e[o],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",o),e[o]=t[o]);return e}function p(e,t){return function(){var o=e.apply(this,arguments),n=t.apply(this,arguments);if(null==o)return n;if(null==n)return o;var s={};return c(s,o),c(s,n),s}}function h(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){return t.bind(e)}function f(e){for(var t=e.__reactAutoBindPairs,o=0;o<t.length;o+=2){var n=t[o],s=t[o+1];e[n]=m(e,s)}}function _(e){var t=n(function(e,n,s){this.__reactAutoBindPairs.length&&f(this),this.props=e,this.context=n,this.refs=a,this.updater=s||o,this.state=null;var r=this.getInitialState?this.getInitialState():null;i("object"==typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=r});t.prototype=new S,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],g.forEach(u.bind(null,t)),u(t,b),u(t,e),u(t,C),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),i(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var s in v)t.prototype[s]||(t.prototype[s]=null);return t}var g=[],v={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},y={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},j={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var o=0;o<t.length;o++)u(e,t[o])},childContextTypes:function(e,t){e.childContextTypes=r({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=r({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=p(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=r({},e.propTypes,t)},statics:function(e,t){d(e,t)},autobind:function(){}},b={componentDidMount:function(){this.__isMounted=!0}},C={componentWillUnmount:function(){this.__isMounted=!1}},w={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},S=function(){};return r(S.prototype,e.prototype,w),_}var r=o("./node_modules/object-assign/index.js"),a=o("./node_modules/fbjs/lib/emptyObject.js"),i=o("./node_modules/fbjs/lib/invariant.js"),l="mixins";e.exports=s},"./node_modules/create-react-class/index.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/factory.js");if(void 0===n)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var r=(new n.Component).updater;e.exports=s(n.Component,n.isValidElement,r)},"./node_modules/expose-loader/index.js?SnapshotsViewer!./client/src/components/HistoryViewer/HistoryViewer.js-exposed":function(e,t,o){(function(t){e.exports=t.SnapshotsViewer=o('./node_modules/babel-loader/lib/index.js?{"presets":[["env",{"modules":false}],"react"],"plugins":["transform-object-rest-spread"],"comments":false,"cacheDirectory":false}!./client/src/components/HistoryViewer/HistoryViewer.js')}).call(t,o("./node_modules/webpack/buildin/global.js"))},"./node_modules/expose-loader/index.js?versionType!./client/src/types/versionType.js-exposed":function(e,t,o){(function(t){e.exports=t.versionType=o('./node_modules/babel-loader/lib/index.js?{"presets":[["env",{"modules":false}],"react"],"plugins":["transform-object-rest-spread"],"comments":false,"cacheDirectory":false}!./client/src/types/versionType.js')}).call(t,o("./node_modules/webpack/buildin/global.js"))},"./node_modules/fbjs/lib/emptyObject.js":function(e,t,o){"use strict";var n={};e.exports=n},"./node_modules/fbjs/lib/invariant.js":function(e,t,o){"use strict";function n(e,t,o,n,r,a,i,l){if(s(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[o,n,r,a,i,l],c=0;u=new Error(t.replace(/%s/g,function(){return d[c++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}var s=function(e){};e.exports=n},"./node_modules/griddle-react/modules/columnProperties.js":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=o("./node_modules/lodash/map.js"),a=o("./node_modules/lodash/filter.js"),i=o("./node_modules/lodash/find.js"),l=o("./node_modules/lodash/sortBy.js"),u=o("./node_modules/lodash/difference.js"),d=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],o=arguments.length<=1||void 0===arguments[1]?[]:arguments[1],s=arguments.length<=2||void 0===arguments[2]?"children":arguments[2],r=arguments.length<=3||void 0===arguments[3]?[]:arguments[3],a=arguments.length<=4||void 0===arguments[4]?[]:arguments[4];n(this,e),this.allColumns=t,this.filteredColumns=o,this.childrenColumnName=s,this.columnMetadata=r,this.metadataColumns=a}return s(e,[{key:"getMetadataColumns",value:function(){var e=r(a(this.columnMetadata,{visible:!1}),function(e){return e.columnName});return e.indexOf(this.childrenColumnName)<0&&e.push(this.childrenColumnName),e.concat(this.metadataColumns)}},{key:"getVisibleColumnCount",value:function(){return this.getColumns().length}},{key:"getColumnMetadataByName",value:function(e){return i(this.columnMetadata,{columnName:e})}},{key:"hasColumnMetadata",value:function(){return null!==this.columnMetadata&&this.columnMetadata.length>0}},{key:"getMetadataColumnProperty",value:function(e,t,o){var n=this.getColumnMetadataByName(e);return void 0===n||null===n?o:n.hasOwnProperty(t)?n[t]:o}},{key:"orderColumns",value:function(e){var t=this;return l(e,function(e){var o=i(t.columnMetadata,{columnName:e});return void 0===o||null===o||isNaN(o.order)?100:o.order})}},{key:"getColumns",value:function(){var e=0===this.filteredColumns.length?this.allColumns:this.filteredColumns;return e=u(e,this.metadataColumns),e=this.orderColumns(e)}}]),e}();e.exports=d},"./node_modules/griddle-react/modules/customFilterContainer.jsx.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/index.js"),r=s({getDefaultProps:function(){return{placeholderText:""}},render:function(){var e=this;return"function"!=typeof e.props.customFilterComponent?(console.log("Couldn't find valid template."),n.createElement("div",null)):n.createElement(e.props.customFilterComponent,{changeFilter:this.props.changeFilter,results:this.props.results,currentResults:this.props.currentResults,placeholderText:this.props.placeholderText})}});e.exports=r},"./node_modules/griddle-react/modules/customPaginationContainer.jsx.js":function(e,t,o){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},s=o(0),r=o("./node_modules/create-react-class/index.js"),a=r({getDefaultProps:function(){return{maxPage:0,nextText:"",previousText:"",currentPage:0,customPagerComponent:{},customPagerComponentOptions:{}}},render:function(){var e=this;return"function"!=typeof e.props.customPagerComponent?(console.log("Couldn't find valid template."),s.createElement("div",null)):s.createElement(e.props.customPagerComponent,n({},this.props.customPagerComponentOptions,{maxPage:this.props.maxPage,nextText:this.props.nextText,previousText:this.props.previousText,currentPage:this.props.currentPage,setPage:this.props.setPage,previous:this.props.previous,next:this.props.next}))}});e.exports=a},"./node_modules/griddle-react/modules/customRowComponentContainer.jsx.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/index.js"),r=s({getDefaultProps:function(){return{data:[],metadataColumns:[],className:"",customComponent:{},globalData:{}}},render:function(){var e=this;if("function"!=typeof e.props.customComponent)return console.log("Couldn't find valid template."),n.createElement("div",{className:this.props.className});var t=this.props.data.map(function(t,o){return n.createElement(e.props.customComponent,{data:t,metadataColumns:e.props.metadataColumns,key:o,globalData:e.props.globalData})});return this.props.showPager&&this.props.pagingContent,n.createElement("div",{className:this.props.className,style:this.props.style},t)}});e.exports=r},"./node_modules/griddle-react/modules/deep.js":function(e,t,o){"use strict";function n(e){for(var t,o=/\[("|')(.+)\1\]|([^.\[\]]+)/g,n=[];null!==(t=o.exec(e));)n.push(t[2]||t[3]);return n}function s(e,t){if("string"==typeof t){if(void 0!==e[t])return e[t];t=n(t)}for(var o=-1,s=t.length;++o<s&&null!=e;)e=e[t[o]];return o===s?e:void 0}function r(e,t){var o,n={},r=e;o=function(e,t){return e in t},r=Object(r);for(var a=0,i=t.length;a<i;a++){var l=t[a];o(l,r)&&(n[l]=s(r,l))}return n}function a(e,t){var o=[];return u(e,function(e,n){var s=t?t+"."+n:n;!d(e)||c(e)||p(e)||e instanceof Date?o.push(s):o=o.concat(a(e,s))}),o}function i(e,t){c(e)?u(e,function(e){i(e,t)}):h(e)?m(e,function(e){i(e,t)}):t(e)}function l(e){var t=[];return i(e,function(e){t.push(e)}),t}var u=o("./node_modules/lodash/forEach.js"),d=o("./node_modules/lodash/isObject.js"),c=o("./node_modules/lodash/isArray.js"),p=o("./node_modules/lodash/isFunction.js"),h=o("./node_modules/lodash/isPlainObject.js"),m=o("./node_modules/lodash/forOwn.js");e.exports={pick:r,getAt:s,keys:a,getObjectValues:l}},"./node_modules/griddle-react/modules/gridFilter.jsx.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/index.js"),r=s({getDefaultProps:function(){return{placeholderText:""}},handleChange:function(e){this.props.changeFilter(e.target.value)},render:function(){return n.createElement("div",{className:"filter-container"},n.createElement("input",{type:"text",name:"filter",placeholder:this.props.placeholderText,className:"form-control",onChange:this.handleChange}))}});e.exports=r},"./node_modules/griddle-react/modules/gridNoData.jsx.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/index.js"),r=s({getDefaultProps:function(){return{noDataMessage:"No Data"}},render:function(){return n.createElement("div",null,this.props.noDataMessage)}});e.exports=r},"./node_modules/griddle-react/modules/gridPagination.jsx.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/index.js"),r=o("./node_modules/lodash/assign.js"),a=s({getDefaultProps:function(){return{maxPage:0,nextText:"",previousText:"",currentPage:0,useGriddleStyles:!0,nextClassName:"griddle-next",previousClassName:"griddle-previous",nextIconComponent:null,previousIconComponent:null}},pageChange:function(e){this.props.setPage(parseInt(e.target.value,10)-1)},render:function(){var e="",t="";this.props.currentPage>0&&(e=n.createElement("button",{type:"button",onClick:this.props.previous,style:this.props.useGriddleStyles?{color:"#222",border:"none",background:"none",margin:"0 0 0 10px"}:null},this.props.previousIconComponent,this.props.previousText)),this.props.currentPage!==this.props.maxPage-1&&(t=n.createElement("button",{type:"button",onClick:this.props.next,style:this.props.useGriddleStyles?{color:"#222",border:"none",background:"none",margin:"0 10px 0 0"}:null},this.props.nextText,this.props.nextIconComponent));var o=null,s=null,a=null;if(!0===this.props.useGriddleStyles){var i={float:"left",minHeight:"1px",marginTop:"5px"};a=r({textAlign:"right",width:"34%"},i),s=r({textAlign:"center",width:"33%"},i),o=r({width:"33%"},i)}for(var l=[],u=1;u<=this.props.maxPage;u++)l.push(n.createElement("option",{value:u,key:u},u));return n.createElement("div",{style:this.props.useGriddleStyles?{minHeight:"35px"}:null},n.createElement("div",{className:this.props.previousClassName,style:o},e),n.createElement("div",{className:"griddle-page",style:s},n.createElement("select",{value:this.props.currentPage+1,onChange:this.pageChange},l)," / ",this.props.maxPage),n.createElement("div",{className:this.props.nextClassName,style:a},t))}});e.exports=a},"./node_modules/griddle-react/modules/gridRow.jsx.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/index.js"),r=(o("./node_modules/griddle-react/modules/columnProperties.js"),o("./node_modules/griddle-react/modules/deep.js")),a=o("./node_modules/lodash/isFunction.js"),i=o("./node_modules/lodash/zipObject.js"),l=o("./node_modules/lodash/assign.js"),u=o("./node_modules/lodash/defaults.js"),d=o("./node_modules/lodash/toPairs.js"),c=o("./node_modules/lodash/without.js"),p=s({getDefaultProps:function(){return{isChildRow:!1,showChildren:!1,data:{},columnSettings:null,rowSettings:null,hasChildren:!1,useGriddleStyles:!0,useGriddleIcons:!0,isSubGriddle:!1,paddingHeight:null,rowHeight:null,parentRowCollapsedClassName:"parent-row",parentRowExpandedClassName:"parent-row expanded",parentRowCollapsedComponent:"▶",parentRowExpandedComponent:"▼",onRowClick:null,multipleSelectionSettings:null,onRowMouseEnter:null,onRowMouseLeave:null,onRowWillMount:null,onRowWillUnmount:null}},componentWillMount:function(){null!==this.props.onRowWillMount&&a(this.props.onRowWillMount)&&this.props.onRowWillMount(this)},componentWillUnmount:function(){null!==this.props.onRowWillUnmount&&a(this.props.onRowWillUnmount)&&this.props.onRowWillUnmount(this)},handleClick:function(e){null!==this.props.onRowClick&&a(this.props.onRowClick)?this.props.onRowClick(this,e):this.props.hasChildren&&this.props.toggleChildren()},handleMouseEnter:function(e){null!==this.props.onRowMouseEnter&&a(this.props.onRowMouseEnter)&&this.props.onRowMouseEnter(this,e)},handleMouseLeave:function(e){null!==this.props.onRowMouseLeave&&a(this.props.onRowMouseLeave)&&this.props.onRowMouseLeave(this,e)},handleSelectionChange:function(e){},handleSelectClick:function(e){this.props.multipleSelectionSettings.isMultipleSelection&&("checkbox"===e.target.type?this.props.multipleSelectionSettings.toggleSelectRow(this.props.data,this.refs.selected.checked):this.props.multipleSelectionSettings.toggleSelectRow(this.props.data,!this.refs.selected.checked))},verifyProps:function(){null===this.props.columnSettings&&console.error("gridRow: The columnSettings prop is null and it shouldn't be")},formatData:function(e){return"boolean"==typeof e?String(e):e},render:function(){var e=this;this.verifyProps();var t=this,o=null;this.props.useGriddleStyles&&(o={margin:"0px",padding:t.props.paddingHeight+"px 5px "+t.props.paddingHeight+"px 5px",height:t.props.rowHeight?this.props.rowHeight-2*t.props.paddingHeight+"px":null,backgroundColor:"#FFF",borderTopColor:"#DDD",color:"#222"});var s=this.props.columnSettings.getColumns(),p=i(s,[]),h=l({},this.props.data);u(h,p);var m,f,_=d(r.pick(h,c(s,"children"))),g=_.map(function(t,s){var r=null,a=e.props.columnSettings.getColumnMetadataByName(t[0]),i=0===s&&e.props.hasChildren&&!1===e.props.showChildren&&e.props.useGriddleIcons?n.createElement("span",{style:e.props.useGriddleStyles?{fontSize:"10px",marginRight:"5px"}:null},e.props.parentRowCollapsedComponent):0===s&&e.props.hasChildren&&e.props.showChildren&&e.props.useGriddleIcons?n.createElement("span",{style:e.props.useGriddleStyles?{fontSize:"10px"}:null},e.props.parentRowExpandedComponent):"";if(0===s&&e.props.isChildRow&&e.props.useGriddleStyles&&(o=l(o,{paddingLeft:10})),e.props.columnSettings.hasColumnMetadata()&&void 0!==a&&null!==a)if(void 0!==a.customComponent&&null!==a.customComponent){var u=n.createElement(a.customComponent,{data:t[1],rowData:h,metadata:a});r=n.createElement("td",{onClick:e.handleClick,onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave,className:a.cssClassName,key:s,style:o},u)}else r=n.createElement("td",{onClick:e.handleClick,onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave,className:a.cssClassName,key:s,style:o},i,e.formatData(t[1]));return r||n.createElement("td",{onClick:e.handleClick,onMouseEnter:e.handleMouseEnter,onMouseLeave:e.handleMouseLeave,key:s,style:o},i,t[1])});null!==this.props.onRowClick&&a(this.props.onRowClick)?(m=null,f=this.handleSelectClick):this.props.multipleSelectionSettings&&this.props.multipleSelectionSettings.isMultipleSelection?(m=this.handleSelectClick,f=null):(m=null,f=null),g&&this.props.multipleSelectionSettings&&this.props.multipleSelectionSettings.isMultipleSelection&&(this.props.multipleSelectionSettings.getSelectedRowIds(),g.unshift(n.createElement("td",{key:"selection",style:o,className:"griddle-select griddle-select-cell",onClick:f},n.createElement("input",{type:"checkbox",checked:this.props.multipleSelectionSettings.getIsRowChecked(h),onChange:this.handleSelectionChange,ref:"selected"}))));var v=t.props.rowSettings&&t.props.rowSettings.getBodyRowMetadataClass(t.props.data)||"standard-row";return t.props.isChildRow?v="child-row":t.props.hasChildren&&(v=t.props.showChildren?this.props.parentRowExpandedClassName:this.props.parentRowCollapsedClassName),n.createElement("tr",{onClick:m,className:v},g)}});e.exports=p},"./node_modules/griddle-react/modules/gridRowContainer.jsx.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/index.js"),r=(o("./node_modules/griddle-react/modules/columnProperties.js"),o("./node_modules/lodash/pick.js")),a=s({getDefaultProps:function(){return{useGriddleStyles:!0,useGriddleIcons:!0,isSubGriddle:!1,columnSettings:null,rowSettings:null,paddingHeight:null,rowHeight:null,parentRowCollapsedClassName:"parent-row",parentRowExpandedClassName:"parent-row expanded",parentRowCollapsedComponent:"▶",parentRowExpandedComponent:"▼",onRowClick:null,onRowMouseEnter:null,onRowMouseLeave:null,onRowWillMount:null,onRowWillUnmount:null,multipleSelectionSettings:null}},getInitialState:function(){return{data:{},showChildren:!1}},componentWillReceiveProps:function(){this.setShowChildren(!1)},toggleChildren:function(){this.setShowChildren(!1===this.state.showChildren)},setShowChildren:function(e){this.setState({showChildren:e})},verifyProps:function(){null===this.props.columnSettings&&console.error("gridRowContainer: The columnSettings prop is null and it shouldn't be")},render:function(){this.verifyProps();var e=this;if(void 0===this.props.data)return n.createElement("tbody",null);var t=[],o=this.props.columnSettings.getColumns();t.push(n.createElement(this.props.rowSettings.rowComponent,{useGriddleStyles:this.props.useGriddleStyles,isSubGriddle:this.props.isSubGriddle,data:this.props.rowSettings.isCustom?r(this.props.data,o):this.props.data,rowData:this.props.rowSettings.isCustom?this.props.data:null,columnSettings:this.props.columnSettings,rowSettings:this.props.rowSettings,hasChildren:e.props.hasChildren,toggleChildren:e.toggleChildren,showChildren:e.state.showChildren,key:e.props.uniqueId+"_base_row",useGriddleIcons:e.props.useGriddleIcons,parentRowExpandedClassName:this.props.parentRowExpandedClassName,parentRowCollapsedClassName:this.props.parentRowCollapsedClassName,parentRowExpandedComponent:this.props.parentRowExpandedComponent,parentRowCollapsedComponent:this.props.parentRowCollapsedComponent,paddingHeight:e.props.paddingHeight,rowHeight:e.props.rowHeight,onRowClick:e.props.onRowClick,onRowMouseEnter:e.props.onRowMouseEnter,onRowMouseLeave:e.props.onRowMouseLeave,multipleSelectionSettings:this.props.multipleSelectionSettings,onRowWillMount:e.props.onRowWillMount,onRowWillUnmount:e.props.onRowWillUnmount}));var s=null;return e.state.showChildren&&(s=e.props.hasChildren&&this.props.data.children.map(function(t,o){var s=e.props.rowSettings.getRowKey(t,o);if(void 0!==t.children){var r=e.constructor.Griddle;return n.createElement("tr",{key:s,style:{paddingLeft:5}},n.createElement("td",{colSpan:e.props.columnSettings.getVisibleColumnCount(),className:"griddle-parent",style:e.props.useGriddleStyles?{border:"none",padding:"0 0 0 5px"}:null},n.createElement(r,{rowMetadata:{key:"id"},isSubGriddle:!0,results:[t],columns:e.props.columnSettings.getColumns(),tableClassName:e.props.tableClassName,parentRowExpandedClassName:e.props.parentRowExpandedClassName,parentRowCollapsedClassName:e.props.parentRowCollapsedClassName,showTableHeading:!1,showPager:!1,columnMetadata:e.props.columnSettings.columnMetadata,parentRowExpandedComponent:e.props.parentRowExpandedComponent,parentRowCollapsedComponent:e.props.parentRowCollapsedComponent,paddingHeight:e.props.paddingHeight,rowHeight:e.props.rowHeight})))}return n.createElement(e.props.rowSettings.rowComponent,{useGriddleStyles:e.props.useGriddleStyles,isSubGriddle:e.props.isSubGriddle,data:t,columnSettings:e.props.columnSettings,isChildRow:!0,columnMetadata:e.props.columnSettings.columnMetadata,key:s})})),!1===e.props.hasChildren?t[0]:n.createElement("tbody",null,e.state.showChildren?t.concat(s):t)}});e.exports=a},"./node_modules/griddle-react/modules/gridSettings.jsx.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/index.js"),r=o("./node_modules/lodash/includes.js"),a=o("./node_modules/lodash/without.js"),i=o("./node_modules/lodash/find.js"),l=s({getDefaultProps:function(){return{columns:[],columnMetadata:[],selectedColumns:[],settingsText:"",maxRowsText:"",resultsPerPage:0,enableToggleCustom:!1,useCustomComponent:!1,useGriddleStyles:!0,toggleCustomComponent:function(){}}},setPageSize:function(e){var t=parseInt(e.target.value,10);this.props.setPageSize(t)},handleChange:function(e){var t=e.target.dataset?e.target.dataset.name:e.target.getAttribute("data-name");!0===e.target.checked&&!1===r(this.props.selectedColumns,t)?(this.props.selectedColumns.push(t),this.props.setColumns(this.props.selectedColumns)):this.props.setColumns(a(this.props.selectedColumns,t))},render:function(){var e=this,t=[];!1===e.props.useCustomComponent&&(t=this.props.columns.map(function(t,o){var s=r(e.props.selectedColumns,t),a=i(e.props.columnMetadata,{columnName:t}),l=t;return void 0!==a&&void 0!==a.displayName&&null!=a.displayName&&(l=a.displayName),void 0!==a&&null!=a&&a.locked?n.createElement("div",{className:"column checkbox"},n.createElement("label",null,n.createElement("input",{type:"checkbox",disabled:!0,name:"check",checked:s,"data-name":t}),l)):void 0!==a&&null!=a&&void 0!==a.visible&&!1===a.visible?null:n.createElement("div",{className:"griddle-column-selection checkbox",key:t,style:e.props.useGriddleStyles?{float:"left",width:"20%"}:null},n.createElement("label",null,n.createElement("input",{type:"checkbox",name:"check",onChange:e.handleChange,checked:s,"data-name":t}),l))}));var o=e.props.enableToggleCustom?n.createElement("div",{className:"form-group"},n.createElement("label",{htmlFor:"maxRows"},n.createElement("input",{type:"checkbox",checked:this.props.useCustomComponent,onChange:this.props.toggleCustomComponent})," ",this.props.enableCustomFormatText)):"",s=this.props.showSetPageSize?n.createElement("div",null,n.createElement("label",{htmlFor:"maxRows"},this.props.maxRowsText,":",n.createElement("select",{onChange:this.setPageSize,value:this.props.resultsPerPage},n.createElement("option",{value:"5"},"5"),n.createElement("option",{value:"10"},"10"),n.createElement("option",{value:"25"},"25"),n.createElement("option",{value:"50"},"50"),n.createElement("option",{value:"100"},"100")))):"";return n.createElement("div",{className:"griddle-settings",style:this.props.useGriddleStyles?{backgroundColor:"#FFF",border:"1px solid #DDD",color:"#222",padding:"10px",marginBottom:"10px"}:null},n.createElement("h6",null,this.props.settingsText),n.createElement("div",{className:"griddle-columns",style:this.props.useGriddleStyles?{clear:"both",display:"table",width:"100%",borderBottom:"1px solid #EDEDED",marginBottom:"10px"}:null},t),s,o)}});e.exports=l},"./node_modules/griddle-react/modules/gridTable.jsx.js":function(e,t,o){"use strict";var n=o(0),s=o("./node_modules/create-react-class/index.js"),r=o("./node_modules/griddle-react/modules/gridTitle.jsx.js"),a=o("./node_modules/griddle-react/modules/gridRowContainer.jsx.js"),i=(o("./node_modules/griddle-react/modules/columnProperties.js"),o("./node_modules/griddle-react/modules/rowProperties.js"),s({getDefaultProps:function(){return{data:[],columnSettings:null,rowSettings:null,sortSettings:null,multipleSelectionSettings:null,className:"",enableInfiniteScroll:!1,nextPage:null,hasMorePages:!1,useFixedHeader:!1,useFixedLayout:!0,paddingHeight:null,rowHeight:null,filterByColumn:null,infiniteScrollLoadTreshold:null,bodyHeight:null,useGriddleStyles:!0,useGriddleIcons:!0,isSubGriddle:!1,parentRowCollapsedClassName:"parent-row",parentRowExpandedClassName:"parent-row expanded",parentRowCollapsedComponent:"▶",parentRowExpandedComponent:"▼",externalLoadingComponent:null,externalIsLoading:!1,onRowClick:null,onRowMouseEnter:null,onRowMouseLeave:null,onRowWillMount:null,onRowWillUnmount:null}},getInitialState:function(){return{scrollTop:0,scrollHeight:this.props.bodyHeight,clientHeight:this.props.bodyHeight}},componentDidMount:function(){this.gridScroll()},componentDidUpdate:function(e,t){this.gridScroll()},gridScroll:function(){if(this.props.enableInfiniteScroll&&!this.props.externalIsLoading){var e=this.refs.scrollable,t=e.scrollTop,o=e.scrollHeight,n=e.clientHeight;if(null!==this.props.rowHeight&&this.state.scrollTop!==t&&Math.abs(this.state.scrollTop-t)>=this.getAdjustedRowHeight()){var s={scrollTop:t,scrollHeight:o,clientHeight:n};this.setState(s)}.6*(o-(t+n)-this.props.infiniteScrollLoadTreshold)<=this.props.infiniteScrollLoadTreshold&&this.props.nextPage()}},verifyProps:function(){null===this.props.columnSettings&&console.error("gridTable: The columnSettings prop is null and it shouldn't be"),null===this.props.rowSettings&&console.error("gridTable: The rowSettings prop is null and it shouldn't be")},getAdjustedRowHeight:function(){return this.props.rowHeight+2*this.props.paddingHeight},getNodeContent:function(){this.verifyProps();var e=this,t=!1;if(!this.props.externalIsLoading||this.props.enableInfiniteScroll){var o=e.props.data,s=null,r=null;if(this.props.enableInfiniteScroll&&null!==this.props.rowHeight&&void 0!==this.refs.scrollable){var i=e.getAdjustedRowHeight(),l=Math.ceil(e.state.clientHeight/i),u=Math.max(0,Math.floor(e.state.scrollTop/i)-.25*l),d=Math.min(u+1.25*l,this.props.data.length-1);o=o.slice(u,d+1);var c={height:u*i+"px"};s=n.createElement("tr",{key:"above-"+c.height,style:c});var p={height:(this.props.data.length-d)*i+"px"};r=n.createElement("tr",{key:"below-"+p.height,style:p})}var h=o.map(function(o,s){var r=void 0!==o.children&&o.children.length>0,i=e.props.rowSettings.getRowKey(o,s);return r&&(t=r),n.createElement(a,{useGriddleStyles:e.props.useGriddleStyles,isSubGriddle:e.props.isSubGriddle,parentRowExpandedClassName:e.props.parentRowExpandedClassName,parentRowCollapsedClassName:e.props.parentRowCollapsedClassName,parentRowExpandedComponent:e.props.parentRowExpandedComponent,parentRowCollapsedComponent:e.props.parentRowCollapsedComponent,data:o,key:i+"-container",uniqueId:i,columnSettings:e.props.columnSettings,rowSettings:e.props.rowSettings,paddingHeight:e.props.paddingHeight,multipleSelectionSettings:e.props.multipleSelectionSettings,rowHeight:e.props.rowHeight,hasChildren:r,tableClassName:e.props.className,onRowClick:e.props.onRowClick,onRowMouseEnter:e.props.onRowMouseEnter,onRowMouseLeave:e.props.onRowMouseLeave,onRowWillMount:e.props.onRowWillMount,onRowWillUnmount:e.props.onRowWillUnmount})});if(this.props.showNoData){var m=this.props.columnSettings.getVisibleColumnCount();h.push(n.createElement("tr",{key:"no-data-section"},n.createElement("td",{colSpan:m},this.props.noDataSection)))}return s&&h.unshift(s),r&&h.push(r),{nodes:h,anyHasChildren:t}}return null},render:function(){var e=[],t=!1,o=this.getNodeContent();o&&(e=o.nodes,t=o.anyHasChildren);var s=null,a=null,i={width:"100%"};if(this.props.useFixedLayout&&(i.tableLayout="fixed"),this.props.enableInfiniteScroll&&(s={position:"relative",overflowY:"scroll",height:this.props.bodyHeight+"px",width:"100%"}),this.props.externalIsLoading){var l=null,u=null;this.props.useGriddleStyles&&(l={textAlign:"center",paddingBottom:"40px"}),u=this.props.columnSettings.getVisibleColumnCount();var d=this.props.externalLoadingComponent?n.createElement(this.props.externalLoadingComponent,null):n.createElement("div",null,"Loading...");a=n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",{style:l,colSpan:u},d)))}var c=this.props.showTableHeading?n.createElement(r,{useGriddleStyles:this.props.useGriddleStyles,useGriddleIcons:this.props.useGriddleIcons,sortSettings:this.props.sortSettings,multipleSelectionSettings:this.props.multipleSelectionSettings,columnSettings:this.props.columnSettings,filterByColumn:this.props.filterByColumn,rowSettings:this.props.rowSettings}):void 0;t||(e=n.createElement("tbody",null,e));var p=n.createElement("tbody",null);if(this.props.showPager){var h=this.props.useGriddleStyles?{padding:"0px",backgroundColor:"#EDEDED",border:"0px",color:"#222",height:this.props.showNoData?"20px":null}:null;p=n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",{colSpan:this.props.multipleSelectionSettings.isMultipleSelection?this.props.columnSettings.getVisibleColumnCount()+1:this.props.columnSettings.getVisibleColumnCount(),style:h,className:"footer-container"},this.props.showNoData?null:this.props.pagingContent)))}return this.props.useFixedHeader?(this.props.useGriddleStyles&&(i.tableLayout="fixed"),n.createElement("div",null,n.createElement("table",{className:this.props.className,style:this.props.useGriddleStyles&&i||null},c),n.createElement("div",{ref:"scrollable",onScroll:this.gridScroll,style:s},n.createElement("table",{className:this.props.className,style:this.props.useGriddleStyles&&i||null},e,a,p)))):n.createElement("div",{ref:"scrollable",onScroll:this.gridScroll,style:s},n.createElement("table",{className:this.props.className,style:this.props.useGriddleStyles&&i||null},c,e,a,p))}}));e.exports=i},"./node_modules/griddle-react/modules/gridTitle.jsx.js":function(e,t,o){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},s=o(0),r=o("./node_modules/create-react-class/index.js"),a=(o("./node_modules/griddle-react/modules/columnProperties.js"),o("./node_modules/lodash/assign.js")),i=r({render:function(){return s.createElement("span",null,this.props.displayName)}}),l=r({getDefaultProps:function(){return{columnSettings:null,filterByColumn:function(){},rowSettings:null,sortSettings:null,multipleSelectionSettings:null,headerStyle:null,useGriddleStyles:!0,useGriddleIcons:!0,headerStyles:{}}},componentWillMount:function(){this.verifyProps()},sort:function(e){var t=this;return function(o){t.props.sortSettings.changeSort(e)}},toggleSelectAll:function(e){this.props.multipleSelectionSettings.toggleSelectAll()},handleSelectionChange:function(e){},verifyProps:function(){null===this.props.columnSettings&&console.error("gridTitle: The columnSettings prop is null and it shouldn't be"),null===this.props.sortSettings&&console.error("gridTitle: The sortSettings prop is null and it shouldn't be")},render:function(){this.verifyProps();var e=this,t={},o=this.props.columnSettings.getColumns().map(function(o,r){var l={},u="",d=e.props.columnSettings.getMetadataColumnProperty(o,"sortable",!0),c=d?e.props.sortSettings.sortDefaultComponent:null;e.props.sortSettings.sortColumn==o&&"asc"===e.props.sortSettings.sortDirection?(u=e.props.sortSettings.sortAscendingClassName,c=e.props.useGriddleIcons&&e.props.sortSettings.sortAscendingComponent):e.props.sortSettings.sortColumn==o&&"desc"===e.props.sortSettings.sortDirection&&(u+=e.props.sortSettings.sortDescendingClassName,c=e.props.useGriddleIcons&&e.props.sortSettings.sortDescendingComponent);var p=e.props.columnSettings.getColumnMetadataByName(o),h=e.props.columnSettings.getMetadataColumnProperty(o,"displayName",o),m=e.props.columnSettings.getMetadataColumnProperty(o,"customHeaderComponent",i),f=e.props.columnSettings.getMetadataColumnProperty(o,"customHeaderComponentProps",{});u=null==p?u:(u&&u+" "||u)+e.props.columnSettings.getMetadataColumnProperty(o,"cssClassName",""),e.props.useGriddleStyles&&(l={backgroundColor:"#EDEDEF",border:"0px",borderBottom:"1px solid #DDD",color:"#222",padding:"5px",cursor:d?"pointer":"default"}),t=p&&p.titleStyles?a({},l,p.titleStyles):a({},l);var _=h?"th":"td";return s.createElement(_,{onClick:d?e.sort(o):null,"data-title":o,className:u,key:o,style:t},s.createElement(m,n({columnName:o,displayName:h,filterByColumn:e.props.filterByColumn},f)),c)});o&&this.props.multipleSelectionSettings.isMultipleSelection&&o.unshift(s.createElement("th",{key:"selection",onClick:this.toggleSelectAll,style:t,className:"griddle-select griddle-select-title"},s.createElement("input",{type:"checkbox",checked:this.props.multipleSelectionSettings.getIsSelectAllChecked(),onChange:this.handleSelectionChange})));var r=e.props.rowSettings&&e.props.rowSettings.getHeaderRowMetadataClass()||null;return s.createElement("thead",null,s.createElement("tr",{className:r,style:this.props.headerStyles},o))}});e.exports=l},"./node_modules/griddle-react/modules/griddle.jsx.js":function(e,t,o){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},s=o(0),r=o(1),a=o("./node_modules/create-react-class/index.js"),i=o("./node_modules/griddle-react/modules/gridTable.jsx.js"),l=o("./node_modules/griddle-react/modules/gridFilter.jsx.js"),u=o("./node_modules/griddle-react/modules/gridPagination.jsx.js"),d=o("./node_modules/griddle-react/modules/gridSettings.jsx.js"),c=o("./node_modules/griddle-react/modules/gridNoData.jsx.js"),p=o("./node_modules/griddle-react/modules/gridRow.jsx.js"),h=o("./node_modules/griddle-react/modules/gridRowContainer.jsx.js"),m=o("./node_modules/griddle-react/modules/customRowComponentContainer.jsx.js"),f=o("./node_modules/griddle-react/modules/customPaginationContainer.jsx.js"),_=o("./node_modules/griddle-react/modules/customFilterContainer.jsx.js"),g=o("./node_modules/griddle-react/modules/columnProperties.js"),v=o("./node_modules/griddle-react/modules/rowProperties.js"),y=o("./node_modules/griddle-react/modules/deep.js"),j=o("./node_modules/lodash/drop.js"),b=o("./node_modules/lodash/dropRight.js"),C=o("./node_modules/lodash/find.js"),w=o("./node_modules/lodash/take.js"),S=o("./node_modules/lodash/forEach.js"),x=o("./node_modules/lodash/initial.js"),E=o("./node_modules/lodash/intersection.js"),P=o("./node_modules/lodash/isArray.js"),O=o("./node_modules/lodash/isEmpty.js"),M=o("./node_modules/lodash/isNull.js"),R=o("./node_modules/lodash/isUndefined.js"),V=o("./node_modules/lodash/omit.js"),A=o("./node_modules/lodash/map.js"),T=o("./node_modules/lodash/assign.js"),N=o("./node_modules/lodash/filter.js"),k=o("./node_modules/lodash/orderBy.js"),I=(o("./node_modules/lodash/property.js"),o("./node_modules/lodash/get.js")),D=o("./node_modules/lodash/some.js"),H=a({statics:{GridTable:i,GridFilter:l,GridPagination:u,GridSettings:d,GridRow:p},columnSettings:null,rowSettings:null,getDefaultProps:function(){return{columns:[],gridMetadata:null,columnMetadata:[],rowMetadata:null,results:[],initialSort:"",gridClassName:"",tableClassName:"",customRowComponentClassName:"",settingsText:"Settings",filterPlaceholderText:"Filter Results",nextText:"Next",previousText:"Previous",maxRowsText:"Rows per page",enableCustomFormatText:"Enable Custom Formatting",childrenColumnName:"children",metadataColumns:[],showFilter:!1,showSettings:!1,useCustomRowComponent:!1,useCustomGridComponent:!1,useCustomPagerComponent:!1,useCustomFilterer:!1,useCustomFilterComponent:!1,useGriddleStyles:!0,useGriddleIcons:!0,customRowComponent:null,customGridComponent:null,customPagerComponent:{},customFilterComponent:null,customFilterer:null,globalData:null,enableToggleCustom:!1,noDataMessage:"There is no data to display.",noDataClassName:"griddle-nodata",customNoDataComponent:null,customNoDataComponentProps:null,allowEmptyGrid:!1,showTableHeading:!0,showPager:!0,useFixedHeader:!1,useExternal:!1,externalSetPage:null,externalChangeSort:null,externalSetFilter:null,externalSetPageSize:null,externalMaxPage:null,externalCurrentPage:null,externalSortColumn:null,externalSortAscending:!0,externalLoadingComponent:null,externalIsLoading:!1,enableInfiniteScroll:!1,bodyHeight:null,paddingHeight:5,rowHeight:25,infiniteScrollLoadTreshold:50,useFixedLayout:!0,isSubGriddle:!1,enableSort:!0,onRowClick:null,onRowMouseEnter:null,onRowMouseLeave:null,onRowWillMount:null,onRowWillUnmount:null,sortAscendingClassName:"sort-ascending",sortDescendingClassName:"sort-descending",parentRowCollapsedClassName:"parent-row",parentRowExpandedClassName:"parent-row expanded",settingsToggleClassName:"settings",nextClassName:"griddle-next",previousClassName:"griddle-previous",headerStyles:{},sortAscendingComponent:" ▲",sortDescendingComponent:" ▼",sortDefaultComponent:null,parentRowCollapsedComponent:"▶",parentRowExpandedComponent:"▼",settingsIconComponent:"",nextIconComponent:"",previousIconComponent:"",isMultipleSelection:!1,selectedRowIds:[],uniqueIdentifier:"id",onSelectionChange:null,columnFilterFunc:null}},propTypes:{isMultipleSelection:r.bool,selectedRowIds:r.oneOfType([r.arrayOf(r.number),r.arrayOf(r.string)]),uniqueIdentifier:r.string,onSelectionChange:r.func,columnFilterFunc:r.func},defaultFilter:function(e,t){var o=this;return N(e,function(e){for(var n=y.keys(e),s=0;s<n.length;s++)if(o.columnSettings.getMetadataColumnProperty(n[s],"filterable",!0)&&(y.getAt(e,n[s])||"").toString().toLowerCase().indexOf(t.toLowerCase())>=0)return!0;return!1})},defaultColumnFilter:function(e,t,o){var n=A(P(o)?o:[o],function(e){return(e||"").toLowerCase()});return D(y.getObjectValues(t),function(e){return e=e.toString().toLowerCase(),D(n,function(t){return e.indexOf(t)>=0})})},filterByColumnFilters:function(e){var t=this.props.columnFilterFunc||this.defaultColumnFilter,o=Object.keys(e).reduce(function(o,n){return N(o,function(o){var s=y.getAt(o,n||""),r=e[n];return t(n||"",s,r)})},this.props.results),n={columnFilters:e};e?(n.filteredResults=o,n.maxPage=this.getMaxPage(n.filteredResults)):this.state.filter?n.filteredResults=this.props.useCustomFilterer?this.props.customFilterer(this.props.results,filter):this.defaultFilter(this.props.results,filter):n.filteredResults=null,this.setState(n)},filterByColumn:function(e,t){var o=this.state.columnFilters;if(o.hasOwnProperty(t)&&!e)o=V(o,t);else{var n={};n[t]=e,o=T({},o,n)}this.filterByColumnFilters(o)},setFilter:function(e){var t=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(this.props.useExternal)return void this.props.externalSetFilter(e);var o=this,n={page:0,filter:e};n.filteredResults=this.props.useCustomFilterer?this.props.customFilterer(t||this.props.results,e):this.defaultFilter(t||this.props.results,e),n.maxPage=o.getMaxPage(n.filteredResults),(R(e)||M(e)||O(e))&&(n.filter=e,n.filteredResults=null),o.setState(n),this._resetSelectedRows()},setPageSize:function(e){if(this.props.useExternal)return this.setState({resultsPerPage:e}),void this.props.externalSetPageSize(e);this.state.resultsPerPage=e,this.setMaxPage()},toggleColumnChooser:function(){this.setState({showColumnChooser:!this.state.showColumnChooser})},isNullOrUndefined:function(e){return void 0===e||null===e},shouldUseCustomRowComponent:function(){return this.isNullOrUndefined(this.state.useCustomRowComponent)?this.props.useCustomRowComponent:this.state.useCustomRowComponent},shouldUseCustomGridComponent:function(){return this.isNullOrUndefined(this.state.useCustomGridComponent)?this.props.useCustomGridComponent:this.state.useCustomGridComponent},toggleCustomComponent:function(){"grid"===this.state.customComponentType?this.setState({useCustomGridComponent:!this.shouldUseCustomGridComponent()}):"row"===this.state.customComponentType&&this.setState({useCustomRowComponent:!this.shouldUseCustomRowComponent()})},getMaxPage:function(e,t){return this.props.useExternal?this.props.externalMaxPage:(t||(t=(e||this.getCurrentResults()).length),Math.ceil(t/this.state.resultsPerPage))},setMaxPage:function(e){var t=this.getMaxPage(e);this.state.maxPage!==t&&this.setState({page:0,maxPage:t,filteredColumns:this.columnSettings.filteredColumns})},setPage:function(e){if(this.props.useExternal)return void this.props.externalSetPage(e);if(e*this.state.resultsPerPage<=this.state.resultsPerPage*this.state.maxPage){var t=this,o={page:e};t.setState(o)}this.props.enableInfiniteScroll&&this.setState({isSelectAllChecked:!1})},setColumns:function(e){this.columnSettings.filteredColumns=P(e)?e:[e],this.setState({filteredColumns:this.columnSettings.filteredColumns})},nextPage:function(){var e=this.getCurrentPage();e<this.getCurrentMaxPage()-1&&this.setPage(e+1)},previousPage:function(){var e=this.getCurrentPage();e>0&&this.setPage(e-1)},changeSort:function(e){if(!1!==this.props.enableSort){if(this.props.useExternal){var t=this.props.externalSortColumn!==e||!this.props.externalSortAscending;return this.setState({sortColumn:e,sortDirection:t?"asc":"desc"}),void this.props.externalChangeSort(e,t)}var o=C(this.props.columnMetadata,{columnName:e})||{},n=o.sortDirectionCycle?o.sortDirectionCycle:[null,"asc","desc"],s=null,r=n.indexOf(this.state.sortDirection&&e===this.state.sortColumn?this.state.sortDirection:null);r=(r+1)%n.length,s=n[r]?n[r]:null;var a={page:0,sortColumn:e,sortDirection:s};this.setState(a)}},componentWillReceiveProps:function(e){if(e.results!==this.props.results&&this.setFilter(this.state.filter,e.results),this.setMaxPage(e.results),e.resultsPerPage!==this.props.resultsPerPage&&this.setPageSize(e.resultsPerPage),this.columnSettings.columnMetadata=e.columnMetadata,e.results.length>0){var t=y.keys(e.results[0]);this.columnSettings.allColumns.length==t.length&&this.columnSettings.allColumns.every(function(e,o){return e===t[o]})||(this.columnSettings.allColumns=t)}else this.columnSettings.allColumns.length>0&&(this.columnSettings.allColumns=[]);if(e.selectedRowIds){var o=this.getDataForRender(this.getCurrentResults(e.results),this.columnSettings.getColumns(),!0);this.setState({isSelectAllChecked:this._getAreAllRowsChecked(e.selectedRowIds,A(o,this.props.uniqueIdentifier)),selectedRowIds:e.selectedRowIds})}},getInitialState:function(){return{maxPage:0,page:0,filteredResults:null,filteredColumns:[],filter:"",columnFilters:{},resultsPerPage:this.props.resultsPerPage||5,showColumnChooser:!1,isSelectAllChecked:!1,selectedRowIds:this.props.selectedRowIds}},componentWillMount:function(){this.verifyExternal(),this.verifyCustom(),this.columnSettings=new g(this.props.results.length>0?y.keys(this.props.results[0]):[],this.props.columns,this.props.childrenColumnName,this.props.columnMetadata,this.props.metadataColumns),this.rowSettings=new v(this.props.rowMetadata,this.props.useCustomTableRowComponent&&this.props.customTableRowComponent?this.props.customTableRowComponent:p,this.props.useCustomTableRowComponent),this.props.initialSort&&(this.props.useExternal?this.setState({sortColumn:this.props.externalSortColumn,sortDirection:this.props.externalSortAscending?"asc":"desc"}):this.changeSort(this.props.initialSort)),this.setMaxPage(),this.shouldUseCustomGridComponent()?this.setState({customComponentType:"grid"}):this.shouldUseCustomRowComponent()?this.setState({customComponentType:"row"}):this.setState({filteredColumns:this.columnSettings.filteredColumns})},componentDidMount:function(){if(this.props.componentDidMount&&"function"==typeof this.props.componentDidMount)return this.props.componentDidMount()},componentDidUpdate:function(){if(this.props.componentDidUpdate&&"function"==typeof this.props.componentDidUpdate)return this.props.componentDidUpdate(this.state)},verifyExternal:function(){!0===this.props.useExternal&&(null===this.props.externalSetPage&&console.error("useExternal is set to true but there is no externalSetPage function specified."),null===this.props.externalChangeSort&&console.error("useExternal is set to true but there is no externalChangeSort function specified."),null===this.props.externalSetFilter&&console.error("useExternal is set to true but there is no externalSetFilter function specified."),null===this.props.externalSetPageSize&&console.error("useExternal is set to true but there is no externalSetPageSize function specified."),null===this.props.externalMaxPage&&console.error("useExternal is set to true but externalMaxPage is not set."),null===this.props.externalCurrentPage&&console.error("useExternal is set to true but externalCurrentPage is not set. Griddle will not page correctly without that property when using external data."))},verifyCustom:function(){!0===this.props.useCustomGridComponent&&null===this.props.customGridComponent&&console.error("useCustomGridComponent is set to true but no custom component was specified."),!0===this.props.useCustomRowComponent&&null===this.props.customRowComponent&&console.error("useCustomRowComponent is set to true but no custom component was specified."),!0===this.props.useCustomGridComponent&&!0===this.props.useCustomRowComponent&&console.error("Cannot currently use both customGridComponent and customRowComponent."),!0===this.props.useCustomFilterer&&null===this.props.customFilterer&&console.error("useCustomFilterer is set to true but no custom filter function was specified."),!0===this.props.useCustomFilterComponent&&null===this.props.customFilterComponent&&console.error("useCustomFilterComponent is set to true but no customFilterComponent was specified.")},getDataForRender:function(e,t,o){var n=this,s=this;if(!this.props.useExternal){if(""!==this.state.sortColumn){var r,a=this.state.sortColumn,i=N(this.props.columnMetadata,{columnName:a}),l={columns:[],orders:[]};if(i.length>0&&(r=i[0].hasOwnProperty("customCompareFn")&&i[0].customCompareFn,i[0].multiSort&&(l=i[0].multiSort)),this.state.sortDirection)if("function"==typeof r)2===r.length?(e=e.sort(function(e,t){return r(I(e,a),I(t,a))}),"desc"===this.state.sortDirection&&e.reverse()):1===r.length&&(e=k(e,function(e){return r(I(e,a))},[this.state.sortDirection]));else{var u=[function(e){return(I(e,a)||"").toString().toLowerCase()}],d=[this.state.sortDirection];l.columns.forEach(function(e,t){u.push(function(t){return(I(t,e)||"").toString().toLowerCase()}),"asc"===l.orders[t]||"desc"===l.orders[t]?d.push(l.orders[t]):d.push(n.state.sortDirection)}),e=k(e,u,d)}}var c=this.getCurrentPage();if(!this.props.useExternal&&o&&this.state.resultsPerPage*(c+1)<=this.state.resultsPerPage*this.state.maxPage&&c>=0)if(this.isInfiniteScrollEnabled())e=w(e,(c+1)*this.state.resultsPerPage);else{var p=j(e,c*this.state.resultsPerPage);e=(b||x)(p,p.length-this.state.resultsPerPage)}}for(var h=[],m=0;m<e.length;m++){var f=e[m];void 0!==f[s.props.childrenColumnName]&&f[s.props.childrenColumnName].length>0&&(f.children=s.getDataForRender(f[s.props.childrenColumnName],t,!1),"children"!==s.props.childrenColumnName&&delete f[s.props.childrenColumnName]),h.push(f)}return h},getCurrentResults:function(e){return this.state.filteredResults||e||this.props.results},getCurrentPage:function(){return this.props.externalCurrentPage||this.state.page},getCurrentSort:function(){return this.props.useExternal?this.props.externalSortColumn:this.state.sortColumn},getCurrentSortAscending:function(){return this.props.useExternal?this.props.externalSortAscending:"asc"===this.state.sortDirection},getCurrentMaxPage:function(){return this.props.useExternal?this.props.externalMaxPage:this.state.maxPage},getSortObject:function(){return{enableSort:this.props.enableSort,changeSort:this.changeSort,sortColumn:this.getCurrentSort(),sortAscending:this.getCurrentSortAscending(),sortDirection:this.state.sortDirection,sortAscendingClassName:this.props.sortAscendingClassName,sortDescendingClassName:this.props.sortDescendingClassName,sortAscendingComponent:this.props.sortAscendingComponent,sortDescendingComponent:this.props.sortDescendingComponent,sortDefaultComponent:this.props.sortDefaultComponent}},_toggleSelectAll:function(){var e=this.getDataForRender(this.getCurrentResults(),this.columnSettings.getColumns(),!0),t=!this.state.isSelectAllChecked,o=JSON.parse(JSON.stringify(this.state.selectedRowIds)),n=this;S(e,function(e){n._updateSelectedRowIds(e[n.props.uniqueIdentifier],o,t)},this),this.setState({isSelectAllChecked:t,selectedRowIds:o}),this.props.onSelectionChange&&this.props.onSelectionChange(o,t)},_toggleSelectRow:function(e,t){var o=this.getDataForRender(this.getCurrentResults(),this.columnSettings.getColumns(),!0),n=JSON.parse(JSON.stringify(this.state.selectedRowIds));this._updateSelectedRowIds(e[this.props.uniqueIdentifier],n,t);var s=this._getAreAllRowsChecked(n,A(o,this.props.uniqueIdentifier));this.setState({isSelectAllChecked:s,selectedRowIds:n}),this.props.onSelectionChange&&this.props.onSelectionChange(n,s)},_updateSelectedRowIds:function(e,t,o){o?void 0===C(t,function(t){return e===t})&&t.push(e):t.splice(t.indexOf(e),1)},_getIsSelectAllChecked:function(){return this.state.isSelectAllChecked},_getAreAllRowsChecked:function(e,t){return t.length===E(t,e).length},_getIsRowChecked:function(e){return this.state.selectedRowIds.indexOf(e[this.props.uniqueIdentifier])>-1},getSelectedRowIds:function(){return this.state.selectedRowIds},_resetSelectedRows:function(){this.setState({isSelectAllChecked:!1,selectedRowIds:[]})},getMultipleSelectionObject:function(){return{isMultipleSelection:!C(this.props.results,function(e){return"children"in e})&&this.props.isMultipleSelection,toggleSelectAll:this._toggleSelectAll,getIsSelectAllChecked:this._getIsSelectAllChecked,toggleSelectRow:this._toggleSelectRow,getSelectedRowIds:this.getSelectedRowIds,getIsRowChecked:this._getIsRowChecked}},isInfiniteScrollEnabled:function(){return!this.props.useCustomPagerComponent&&this.props.enableInfiniteScroll},getClearFixStyles:function(){return{clear:"both",display:"table",width:"100%"}},getSettingsStyles:function(){return{float:"left",width:"50%",textAlign:"right"}},getFilterStyles:function(){return{float:"left",width:"50%",textAlign:"left",color:"#222",minHeight:"1px"}},getFilter:function(){return this.props.showFilter&&!1===this.shouldUseCustomGridComponent()?this.props.useCustomFilterComponent?s.createElement(_,{changeFilter:this.setFilter,placeholderText:this.props.filterPlaceholderText,customFilterComponent:this.props.customFilterComponent,results:this.props.results,currentResults:this.getCurrentResults()}):s.createElement(l,{changeFilter:this.setFilter,placeholderText:this.props.filterPlaceholderText}):""},getSettings:function(){return this.props.showSettings?s.createElement("button",{type:"button",className:this.props.settingsToggleClassName,onClick:this.toggleColumnChooser,style:this.props.useGriddleStyles?{background:"none",border:"none",padding:0,margin:0,fontSize:14}:null},this.props.settingsText,this.props.settingsIconComponent):""},getTopSection:function(e,t){if(!1===this.props.showFilter&&!1===this.props.showSettings)return"";var o=null,n=null,r=null;return this.props.useGriddleStyles&&(o=this.getFilterStyles(),n=this.getSettingsStyles(),r=this.getClearFixStyles()),s.createElement("div",{className:"top-section",style:r},s.createElement("div",{className:"griddle-filter",style:o},e),s.createElement("div",{className:"griddle-settings-toggle",style:n},t))},getPagingSection:function(e,t){if(!1!==(this.props.showPager&&!this.isInfiniteScrollEnabled()&&!this.shouldUseCustomGridComponent()))return s.createElement("div",{className:"griddle-footer"},this.props.useCustomPagerComponent?s.createElement(f,{customPagerComponentOptions:this.props.customPagerComponentOptions,next:this.nextPage,previous:this.previousPage,currentPage:e,maxPage:t,setPage:this.setPage,nextText:this.props.nextText,previousText:this.props.previousText,customPagerComponent:this.props.customPagerComponent}):s.createElement(u,{useGriddleStyles:this.props.useGriddleStyles,next:this.nextPage,previous:this.previousPage,nextClassName:this.props.nextClassName,nextIconComponent:this.props.nextIconComponent,previousClassName:this.props.previousClassName,previousIconComponent:this.props.previousIconComponent,currentPage:e,maxPage:t,setPage:this.setPage,nextText:this.props.nextText,previousText:this.props.previousText}))},getColumnSelectorSection:function(e,t){return this.state.showColumnChooser?s.createElement(d,{columns:e,selectedColumns:t,setColumns:this.setColumns,settingsText:this.props.settingsText,settingsIconComponent:this.props.settingsIconComponent,maxRowsText:this.props.maxRowsText,setPageSize:this.setPageSize,showSetPageSize:!this.shouldUseCustomGridComponent(),resultsPerPage:this.state.resultsPerPage,enableToggleCustom:this.props.enableToggleCustom,toggleCustomComponent:this.toggleCustomComponent,useCustomComponent:this.shouldUseCustomRowComponent()||this.shouldUseCustomGridComponent(),useGriddleStyles:this.props.useGriddleStyles,enableCustomFormatText:this.props.enableCustomFormatText,columnMetadata:this.props.columnMetadata}):""},getCustomGridSection:function(){return s.createElement(this.props.customGridComponent,n({data:this.props.results,className:this.props.customGridComponentClassName},this.props.gridMetadata))},getCustomRowSection:function(e,t,o,n,r){return s.createElement("div",null,s.createElement(m,{data:e,columns:t,metadataColumns:o,globalData:r,className:this.props.customRowComponentClassName,customComponent:this.props.customRowComponent,style:this.props.useGriddleStyles?this.getClearFixStyles():null}),this.props.showPager&&n)},getStandardGridSection:function(e,t,o,n,r){var a=this.getSortObject(),l=this.getMultipleSelectionObject(),u=this.shouldShowNoDataSection(e),d=this.getNoDataSection();return s.createElement("div",{className:"griddle-body"},s.createElement(i,{useGriddleStyles:this.props.useGriddleStyles,noDataSection:d,showNoData:u,columnSettings:this.columnSettings,rowSettings:this.rowSettings,sortSettings:a,multipleSelectionSettings:l,filterByColumn:this.filterByColumn,isSubGriddle:this.props.isSubGriddle,useGriddleIcons:this.props.useGriddleIcons,useFixedLayout:this.props.useFixedLayout,showPager:this.props.showPager,pagingContent:n,data:e,className:this.props.tableClassName,enableInfiniteScroll:this.isInfiniteScrollEnabled(),nextPage:this.nextPage,showTableHeading:this.props.showTableHeading,useFixedHeader:this.props.useFixedHeader,parentRowCollapsedClassName:this.props.parentRowCollapsedClassName,parentRowExpandedClassName:this.props.parentRowExpandedClassName,parentRowCollapsedComponent:this.props.parentRowCollapsedComponent,parentRowExpandedComponent:this.props.parentRowExpandedComponent,bodyHeight:this.props.bodyHeight,paddingHeight:this.props.paddingHeight,rowHeight:this.props.rowHeight,infiniteScrollLoadTreshold:this.props.infiniteScrollLoadTreshold,externalLoadingComponent:this.props.externalLoadingComponent,externalIsLoading:this.props.externalIsLoading,hasMorePages:r,onRowClick:this.props.onRowClick,onRowMouseEnter:this.props.onRowMouseEnter,onRowMouseLeave:this.props.onRowMouseLeave,onRowWillMount:this.props.onRowWillMount,onRowWillUnmount:this.props.onRowWillUnmount}))},getContentSection:function(e,t,o,n,s,r){return this.shouldUseCustomGridComponent()&&null!==this.props.customGridComponent?this.getCustomGridSection():this.shouldUseCustomRowComponent()?this.getCustomRowSection(e,t,o,n,r):this.getStandardGridSection(e,t,o,n,s)},getNoDataSection:function(){return null!=this.props.customNoDataComponent?s.createElement("div",{className:this.props.noDataClassName},s.createElement(this.props.customNoDataComponent,this.props.customNoDataComponentProps)):s.createElement(c,{noDataMessage:this.props.noDataMessage})},shouldShowNoDataSection:function(e){return!this.props.allowEmptyGrid&&(!1===this.props.useExternal&&(void 0===e||0===e.length)||!0===this.props.useExternal&&!1===this.props.externalIsLoading&&0===e.length)},render:function(){var e=this.getCurrentResults(),t=(this.props.tableClassName,this.getFilter()),o=this.getSettings(),n=this.getTopSection(t,o),r=[],a=this.columnSettings.getColumns(),i=this.getDataForRender(e,a,!0),l=this.columnSettings.getMetadataColumns();this.props.columnMetadata?S(this.props.columnMetadata,function(e){"boolean"==typeof e.visible&&!1===e.visible||r.push(e.columnName)}):r=y.keys(V(e[0],l)),r=this.columnSettings.orderColumns(r);var u=this.getCurrentPage(),d=this.getCurrentMaxPage(),c=u+1<d,p=this.getPagingSection(u,d),h=this.getContentSection(i,a,l,p,c,this.props.globalData),m=this.getColumnSelectorSection(r,a),f=this.props.gridClassName.length>0?"griddle "+this.props.gridClassName:"griddle";return f+=this.shouldUseCustomRowComponent()?" griddle-custom":"",s.createElement("div",{className:f},n,m,s.createElement("div",{className:"griddle-container",style:this.props.useGriddleStyles&&!this.props.isSubGriddle?{border:"1px solid #DDD"}:null},h))}});h.Griddle=e.exports=H},"./node_modules/griddle-react/modules/rowProperties.js":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=o("./node_modules/lodash/uniqueId.js"),a=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],o=arguments.length<=1||void 0===arguments[1]?null:arguments[1],s=!(arguments.length<=2||void 0===arguments[2])&&arguments[2];n(this,e),this.rowMetadata=t,this.rowComponent=o,this.isCustom=s}return s(e,[{key:"getRowKey",value:function(e,t){return this.hasRowMetadataKey()?e[this.rowMetadata.key]:r("grid_row")}},{key:"hasRowMetadataKey",value:function(){return this.hasRowMetadata()&&null!==this.rowMetadata.key&&void 0!==this.rowMetadata.key}},{key:"getBodyRowMetadataClass",value:function(e){return this.hasRowMetadata()&&null!==this.rowMetadata.bodyCssClassName&&void 0!==this.rowMetadata.bodyCssClassName?"function"==typeof this.rowMetadata.bodyCssClassName?this.rowMetadata.bodyCssClassName(e):this.rowMetadata.bodyCssClassName:null}},{key:"getHeaderRowMetadataClass",value:function(){return this.hasRowMetadata()&&null!==this.rowMetadata.headerCssClassName&&void 0!==this.rowMetadata.headerCssClassName?this.rowMetadata.headerCssClassName:null}},{key:"hasRowMetadata",value:function(){return null!==this.rowMetadata}}]),e}();e.exports=a},"./node_modules/lodash/_DataView.js":function(e,t,o){var n=o("./node_modules/lodash/_getNative.js"),s=o("./node_modules/lodash/_root.js"),r=n(s,"DataView");e.exports=r},"./node_modules/lodash/_Hash.js":function(e,t,o){function n(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}var s=o("./node_modules/lodash/_hashClear.js"),r=o("./node_modules/lodash/_hashDelete.js"),a=o("./node_modules/lodash/_hashGet.js"),i=o("./node_modules/lodash/_hashHas.js"),l=o("./node_modules/lodash/_hashSet.js");n.prototype.clear=s,n.prototype.delete=r,n.prototype.get=a,n.prototype.has=i,n.prototype.set=l,e.exports=n},"./node_modules/lodash/_ListCache.js":function(e,t,o){function n(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}var s=o("./node_modules/lodash/_listCacheClear.js"),r=o("./node_modules/lodash/_listCacheDelete.js"),a=o("./node_modules/lodash/_listCacheGet.js"),i=o("./node_modules/lodash/_listCacheHas.js"),l=o("./node_modules/lodash/_listCacheSet.js");n.prototype.clear=s,n.prototype.delete=r,n.prototype.get=a,n.prototype.has=i,n.prototype.set=l,e.exports=n},"./node_modules/lodash/_Map.js":function(e,t,o){var n=o("./node_modules/lodash/_getNative.js"),s=o("./node_modules/lodash/_root.js"),r=n(s,"Map");e.exports=r},"./node_modules/lodash/_MapCache.js":function(e,t,o){function n(e){var t=-1,o=null==e?0:e.length;for(this.clear();++t<o;){var n=e[t];this.set(n[0],n[1])}}var s=o("./node_modules/lodash/_mapCacheClear.js"),r=o("./node_modules/lodash/_mapCacheDelete.js"),a=o("./node_modules/lodash/_mapCacheGet.js"),i=o("./node_modules/lodash/_mapCacheHas.js"),l=o("./node_modules/lodash/_mapCacheSet.js");n.prototype.clear=s,n.prototype.delete=r,n.prototype.get=a,n.prototype.has=i,n.prototype.set=l,e.exports=n},"./node_modules/lodash/_Promise.js":function(e,t,o){var n=o("./node_modules/lodash/_getNative.js"),s=o("./node_modules/lodash/_root.js"),r=n(s,"Promise");e.exports=r},"./node_modules/lodash/_Set.js":function(e,t,o){var n=o("./node_modules/lodash/_getNative.js"),s=o("./node_modules/lodash/_root.js"),r=n(s,"Set");e.exports=r},"./node_modules/lodash/_SetCache.js":function(e,t,o){function n(e){var t=-1,o=null==e?0:e.length;for(this.__data__=new s;++t<o;)this.add(e[t])}var s=o("./node_modules/lodash/_MapCache.js"),r=o("./node_modules/lodash/_setCacheAdd.js"),a=o("./node_modules/lodash/_setCacheHas.js");n.prototype.add=n.prototype.push=r,n.prototype.has=a,e.exports=n},"./node_modules/lodash/_Stack.js":function(e,t,o){function n(e){var t=this.__data__=new s(e);this.size=t.size}var s=o("./node_modules/lodash/_ListCache.js"),r=o("./node_modules/lodash/_stackClear.js"),a=o("./node_modules/lodash/_stackDelete.js"),i=o("./node_modules/lodash/_stackGet.js"),l=o("./node_modules/lodash/_stackHas.js"),u=o("./node_modules/lodash/_stackSet.js");n.prototype.clear=r,n.prototype.delete=a,n.prototype.get=i,n.prototype.has=l,n.prototype.set=u,e.exports=n},"./node_modules/lodash/_Symbol.js":function(e,t,o){var n=o("./node_modules/lodash/_root.js"),s=n.Symbol;e.exports=s},"./node_modules/lodash/_Uint8Array.js":function(e,t,o){var n=o("./node_modules/lodash/_root.js"),s=n.Uint8Array;e.exports=s},"./node_modules/lodash/_WeakMap.js":function(e,t,o){var n=o("./node_modules/lodash/_getNative.js"),s=o("./node_modules/lodash/_root.js"),r=n(s,"WeakMap");e.exports=r},"./node_modules/lodash/_apply.js":function(e,t){function o(e,t,o){switch(o.length){case 0:return e.call(t);case 1:return e.call(t,o[0]);case 2:return e.call(t,o[0],o[1]);case 3:return e.call(t,o[0],o[1],o[2])}return e.apply(t,o)}e.exports=o},"./node_modules/lodash/_arrayEach.js":function(e,t){function o(e,t){for(var o=-1,n=null==e?0:e.length;++o<n&&!1!==t(e[o],o,e););return e}e.exports=o},"./node_modules/lodash/_arrayFilter.js":function(e,t){function o(e,t){for(var o=-1,n=null==e?0:e.length,s=0,r=[];++o<n;){var a=e[o];t(a,o,e)&&(r[s++]=a)}return r}e.exports=o},"./node_modules/lodash/_arrayIncludes.js":function(e,t,o){function n(e,t){return!!(null==e?0:e.length)&&s(e,t,0)>-1}var s=o("./node_modules/lodash/_baseIndexOf.js");e.exports=n},"./node_modules/lodash/_arrayIncludesWith.js":function(e,t){function o(e,t,o){for(var n=-1,s=null==e?0:e.length;++n<s;)if(o(t,e[n]))return!0;return!1}e.exports=o},"./node_modules/lodash/_arrayLikeKeys.js":function(e,t,o){function n(e,t){var o=a(e),n=!o&&r(e),d=!o&&!n&&i(e),p=!o&&!n&&!d&&u(e),h=o||n||d||p,m=h?s(e.length,String):[],f=m.length;for(var _ in e)!t&&!c.call(e,_)||h&&("length"==_||d&&("offset"==_||"parent"==_)||p&&("buffer"==_||"byteLength"==_||"byteOffset"==_)||l(_,f))||m.push(_);return m}var s=o("./node_modules/lodash/_baseTimes.js"),r=o("./node_modules/lodash/isArguments.js"),a=o("./node_modules/lodash/isArray.js"),i=o("./node_modules/lodash/isBuffer.js"),l=o("./node_modules/lodash/_isIndex.js"),u=o("./node_modules/lodash/isTypedArray.js"),d=Object.prototype,c=d.hasOwnProperty;e.exports=n},"./node_modules/lodash/_arrayMap.js":function(e,t){function o(e,t){for(var o=-1,n=null==e?0:e.length,s=Array(n);++o<n;)s[o]=t(e[o],o,e);return s}e.exports=o},"./node_modules/lodash/_arrayPush.js":function(e,t){function o(e,t){for(var o=-1,n=t.length,s=e.length;++o<n;)e[s+o]=t[o];return e}e.exports=o},"./node_modules/lodash/_arraySome.js":function(e,t){function o(e,t){for(var o=-1,n=null==e?0:e.length;++o<n;)if(t(e[o],o,e))return!0;return!1}e.exports=o},"./node_modules/lodash/_assignValue.js":function(e,t,o){function n(e,t,o){var n=e[t];i.call(e,t)&&r(n,o)&&(void 0!==o||t in e)||s(e,t,o)}var s=o("./node_modules/lodash/_baseAssignValue.js"),r=o("./node_modules/lodash/eq.js"),a=Object.prototype,i=a.hasOwnProperty;e.exports=n},"./node_modules/lodash/_assocIndexOf.js":function(e,t,o){function n(e,t){for(var o=e.length;o--;)if(s(e[o][0],t))return o;return-1}var s=o("./node_modules/lodash/eq.js");e.exports=n},"./node_modules/lodash/_baseAssign.js":function(e,t,o){function n(e,t){return e&&s(t,r(t),e)}var s=o("./node_modules/lodash/_copyObject.js"),r=o("./node_modules/lodash/keys.js");e.exports=n},"./node_modules/lodash/_baseAssignIn.js":function(e,t,o){function n(e,t){return e&&s(t,r(t),e)}var s=o("./node_modules/lodash/_copyObject.js"),r=o("./node_modules/lodash/keysIn.js");e.exports=n},"./node_modules/lodash/_baseAssignValue.js":function(e,t,o){function n(e,t,o){"__proto__"==t&&s?s(e,t,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[t]=o}var s=o("./node_modules/lodash/_defineProperty.js");e.exports=n},"./node_modules/lodash/_baseClone.js":function(e,t,o){function n(e,t,o,T,N,k){var I,D=t&x,H=t&E,F=t&P;if(o&&(I=N?o(e,T,N,k):o(e)),void 0!==I)return I;if(!C(e))return e;var L=y(e);if(L){if(I=_(e),!D)return d(e,I)}else{var G=f(e),U=G==M||G==R;if(j(e))return u(e,D);if(G==V||G==O||U&&!N){if(I=H||U?{}:v(e),!D)return H?p(e,l(I,e)):c(e,i(I,e))}else{if(!A[G])return N?e:{};I=g(e,G,D)}}k||(k=new s);var B=k.get(e);if(B)return B;k.set(e,I),w(e)?e.forEach(function(s){I.add(n(s,t,o,s,e,k))}):b(e)&&e.forEach(function(s,r){I.set(r,n(s,t,o,r,e,k))});var W=F?H?m:h:H?keysIn:S,z=L?void 0:W(e);return r(z||e,function(s,r){z&&(r=s,s=e[r]),a(I,r,n(s,t,o,r,e,k))}),I}var s=o("./node_modules/lodash/_Stack.js"),r=o("./node_modules/lodash/_arrayEach.js"),a=o("./node_modules/lodash/_assignValue.js"),i=o("./node_modules/lodash/_baseAssign.js"),l=o("./node_modules/lodash/_baseAssignIn.js"),u=o("./node_modules/lodash/_cloneBuffer.js"),d=o("./node_modules/lodash/_copyArray.js"),c=o("./node_modules/lodash/_copySymbols.js"),p=o("./node_modules/lodash/_copySymbolsIn.js"),h=o("./node_modules/lodash/_getAllKeys.js"),m=o("./node_modules/lodash/_getAllKeysIn.js"),f=o("./node_modules/lodash/_getTag.js"),_=o("./node_modules/lodash/_initCloneArray.js"),g=o("./node_modules/lodash/_initCloneByTag.js"),v=o("./node_modules/lodash/_initCloneObject.js"),y=o("./node_modules/lodash/isArray.js"),j=o("./node_modules/lodash/isBuffer.js"),b=o("./node_modules/lodash/isMap.js"),C=o("./node_modules/lodash/isObject.js"),w=o("./node_modules/lodash/isSet.js"),S=o("./node_modules/lodash/keys.js"),x=1,E=2,P=4,O="[object Arguments]",M="[object Function]",R="[object GeneratorFunction]",V="[object Object]",A={};A[O]=A["[object Array]"]=A["[object ArrayBuffer]"]=A["[object DataView]"]=A["[object Boolean]"]=A["[object Date]"]=A["[object Float32Array]"]=A["[object Float64Array]"]=A["[object Int8Array]"]=A["[object Int16Array]"]=A["[object Int32Array]"]=A["[object Map]"]=A["[object Number]"]=A[V]=A["[object RegExp]"]=A["[object Set]"]=A["[object String]"]=A["[object Symbol]"]=A["[object Uint8Array]"]=A["[object Uint8ClampedArray]"]=A["[object Uint16Array]"]=A["[object Uint32Array]"]=!0,A["[object Error]"]=A[M]=A["[object WeakMap]"]=!1,e.exports=n},"./node_modules/lodash/_baseCreate.js":function(e,t,o){var n=o("./node_modules/lodash/isObject.js"),s=Object.create,r=function(){function e(){}return function(t){if(!n(t))return{};if(s)return s(t);e.prototype=t;var o=new e;return e.prototype=void 0,o}}();e.exports=r},"./node_modules/lodash/_baseDifference.js":function(e,t,o){function n(e,t,o,n){var c=-1,p=r,h=!0,m=e.length,f=[],_=t.length;if(!m)return f;o&&(t=i(t,l(o))),n?(p=a,h=!1):t.length>=d&&(p=u,h=!1,t=new s(t));e:for(;++c<m;){var g=e[c],v=null==o?g:o(g);if(g=n||0!==g?g:0,h&&v===v){for(var y=_;y--;)if(t[y]===v)continue e;f.push(g)}else p(t,v,n)||f.push(g)}return f}var s=o("./node_modules/lodash/_SetCache.js"),r=o("./node_modules/lodash/_arrayIncludes.js"),a=o("./node_modules/lodash/_arrayIncludesWith.js"),i=o("./node_modules/lodash/_arrayMap.js"),l=o("./node_modules/lodash/_baseUnary.js"),u=o("./node_modules/lodash/_cacheHas.js"),d=200;e.exports=n},"./node_modules/lodash/_baseEach.js":function(e,t,o){var n=o("./node_modules/lodash/_baseForOwn.js"),s=o("./node_modules/lodash/_createBaseEach.js"),r=s(n);e.exports=r},"./node_modules/lodash/_baseFilter.js":function(e,t,o){function n(e,t){var o=[];return s(e,function(e,n,s){t(e,n,s)&&o.push(e)}),o}var s=o("./node_modules/lodash/_baseEach.js");e.exports=n},"./node_modules/lodash/_baseFindIndex.js":function(e,t){function o(e,t,o,n){for(var s=e.length,r=o+(n?1:-1);n?r--:++r<s;)if(t(e[r],r,e))return r;return-1}e.exports=o},"./node_modules/lodash/_baseFlatten.js":function(e,t,o){function n(e,t,o,a,i){var l=-1,u=e.length;for(o||(o=r),i||(i=[]);++l<u;){var d=e[l];t>0&&o(d)?t>1?n(d,t-1,o,a,i):s(i,d):a||(i[i.length]=d)}return i}var s=o("./node_modules/lodash/_arrayPush.js"),r=o("./node_modules/lodash/_isFlattenable.js");e.exports=n},"./node_modules/lodash/_baseFor.js":function(e,t,o){var n=o("./node_modules/lodash/_createBaseFor.js"),s=n();e.exports=s},"./node_modules/lodash/_baseForOwn.js":function(e,t,o){function n(e,t){return e&&s(e,t,r)}var s=o("./node_modules/lodash/_baseFor.js"),r=o("./node_modules/lodash/keys.js");e.exports=n},"./node_modules/lodash/_baseGet.js":function(e,t,o){function n(e,t){t=s(t,e);for(var o=0,n=t.length;null!=e&&o<n;)e=e[r(t[o++])];return o&&o==n?e:void 0}var s=o("./node_modules/lodash/_castPath.js"),r=o("./node_modules/lodash/_toKey.js");e.exports=n},"./node_modules/lodash/_baseGetAllKeys.js":function(e,t,o){function n(e,t,o){var n=t(e);return r(e)?n:s(n,o(e))}var s=o("./node_modules/lodash/_arrayPush.js"),r=o("./node_modules/lodash/isArray.js");e.exports=n},"./node_modules/lodash/_baseGetTag.js":function(e,t,o){function n(e){return null==e?void 0===e?l:i:u&&u in Object(e)?r(e):a(e)}var s=o("./node_modules/lodash/_Symbol.js"),r=o("./node_modules/lodash/_getRawTag.js"),a=o("./node_modules/lodash/_objectToString.js"),i="[object Null]",l="[object Undefined]",u=s?s.toStringTag:void 0;e.exports=n},"./node_modules/lodash/_baseHasIn.js":function(e,t){function o(e,t){return null!=e&&t in Object(e)}e.exports=o},"./node_modules/lodash/_baseIndexOf.js":function(e,t,o){function n(e,t,o){return t===t?a(e,t,o):s(e,r,o)}var s=o("./node_modules/lodash/_baseFindIndex.js"),r=o("./node_modules/lodash/_baseIsNaN.js"),a=o("./node_modules/lodash/_strictIndexOf.js");e.exports=n},"./node_modules/lodash/_baseIntersection.js":function(e,t,o){function n(e,t,o){for(var n=o?a:r,c=e[0].length,p=e.length,h=p,m=Array(p),f=1/0,_=[];h--;){var g=e[h];h&&t&&(g=i(g,l(t))),f=d(g.length,f),m[h]=!o&&(t||c>=120&&g.length>=120)?new s(h&&g):void 0}g=e[0];var v=-1,y=m[0];e:for(;++v<c&&_.length<f;){var j=g[v],b=t?t(j):j;if(j=o||0!==j?j:0,!(y?u(y,b):n(_,b,o))){for(h=p;--h;){var C=m[h];if(!(C?u(C,b):n(e[h],b,o)))continue e}y&&y.push(b),_.push(j)}}return _}var s=o("./node_modules/lodash/_SetCache.js"),r=o("./node_modules/lodash/_arrayIncludes.js"),a=o("./node_modules/lodash/_arrayIncludesWith.js"),i=o("./node_modules/lodash/_arrayMap.js"),l=o("./node_modules/lodash/_baseUnary.js"),u=o("./node_modules/lodash/_cacheHas.js"),d=Math.min;e.exports=n},"./node_modules/lodash/_baseIsArguments.js":function(e,t,o){function n(e){return r(e)&&s(e)==a}var s=o("./node_modules/lodash/_baseGetTag.js"),r=o("./node_modules/lodash/isObjectLike.js"),a="[object Arguments]";e.exports=n},"./node_modules/lodash/_baseIsEqual.js":function(e,t,o){function n(e,t,o,a,i){return e===t||(null==e||null==t||!r(e)&&!r(t)?e!==e&&t!==t:s(e,t,o,a,n,i))}var s=o("./node_modules/lodash/_baseIsEqualDeep.js"),r=o("./node_modules/lodash/isObjectLike.js");e.exports=n},"./node_modules/lodash/_baseIsEqualDeep.js":function(e,t,o){function n(e,t,o,n,_,v){var y=u(e),j=u(t),b=y?m:l(e),C=j?m:l(t);b=b==h?f:b,C=C==h?f:C;var w=b==f,S=C==f,x=b==C;if(x&&d(e)){if(!d(t))return!1;y=!0,w=!1}if(x&&!w)return v||(v=new s),y||c(e)?r(e,t,o,n,_,v):a(e,t,b,o,n,_,v);if(!(o&p)){var E=w&&g.call(e,"__wrapped__"),P=S&&g.call(t,"__wrapped__");if(E||P){var O=E?e.value():e,M=P?t.value():t;return v||(v=new s),_(O,M,o,n,v)}}return!!x&&(v||(v=new s),i(e,t,o,n,_,v))}var s=o("./node_modules/lodash/_Stack.js"),r=o("./node_modules/lodash/_equalArrays.js"),a=o("./node_modules/lodash/_equalByTag.js"),i=o("./node_modules/lodash/_equalObjects.js"),l=o("./node_modules/lodash/_getTag.js"),u=o("./node_modules/lodash/isArray.js"),d=o("./node_modules/lodash/isBuffer.js"),c=o("./node_modules/lodash/isTypedArray.js"),p=1,h="[object Arguments]",m="[object Array]",f="[object Object]",_=Object.prototype,g=_.hasOwnProperty;e.exports=n},"./node_modules/lodash/_baseIsMap.js":function(e,t,o){function n(e){return r(e)&&s(e)==a}var s=o("./node_modules/lodash/_getTag.js"),r=o("./node_modules/lodash/isObjectLike.js"),a="[object Map]";e.exports=n},"./node_modules/lodash/_baseIsMatch.js":function(e,t,o){function n(e,t,o,n){var l=o.length,u=l,d=!n;if(null==e)return!u;for(e=Object(e);l--;){var c=o[l];if(d&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++l<u;){c=o[l];var p=c[0],h=e[p],m=c[1];if(d&&c[2]){if(void 0===h&&!(p in e))return!1}else{var f=new s;if(n)var _=n(h,m,p,e,t,f);if(!(void 0===_?r(m,h,a|i,n,f):_))return!1}}return!0}var s=o("./node_modules/lodash/_Stack.js"),r=o("./node_modules/lodash/_baseIsEqual.js"),a=1,i=2;e.exports=n},"./node_modules/lodash/_baseIsNaN.js":function(e,t){function o(e){return e!==e}e.exports=o},"./node_modules/lodash/_baseIsNative.js":function(e,t,o){function n(e){return!(!a(e)||r(e))&&(s(e)?m:u).test(i(e))}var s=o("./node_modules/lodash/isFunction.js"),r=o("./node_modules/lodash/_isMasked.js"),a=o("./node_modules/lodash/isObject.js"),i=o("./node_modules/lodash/_toSource.js"),l=/[\\^$.*+?()[\]{}|]/g,u=/^\[object .+?Constructor\]$/,d=Function.prototype,c=Object.prototype,p=d.toString,h=c.hasOwnProperty,m=RegExp("^"+p.call(h).replace(l,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=n},"./node_modules/lodash/_baseIsSet.js":function(e,t,o){function n(e){return r(e)&&s(e)==a}var s=o("./node_modules/lodash/_getTag.js"),r=o("./node_modules/lodash/isObjectLike.js"),a="[object Set]";e.exports=n},"./node_modules/lodash/_baseIsTypedArray.js":function(e,t,o){function n(e){return a(e)&&r(e.length)&&!!i[s(e)]}var s=o("./node_modules/lodash/_baseGetTag.js"),r=o("./node_modules/lodash/isLength.js"),a=o("./node_modules/lodash/isObjectLike.js"),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,e.exports=n},"./node_modules/lodash/_baseIteratee.js":function(e,t,o){function n(e){return"function"==typeof e?e:null==e?a:"object"==typeof e?i(e)?r(e[0],e[1]):s(e):l(e)}var s=o("./node_modules/lodash/_baseMatches.js"),r=o("./node_modules/lodash/_baseMatchesProperty.js"),a=o("./node_modules/lodash/identity.js"),i=o("./node_modules/lodash/isArray.js"),l=o("./node_modules/lodash/property.js");e.exports=n},"./node_modules/lodash/_baseKeys.js":function(e,t,o){function n(e){if(!s(e))return r(e);var t=[];for(var o in Object(e))i.call(e,o)&&"constructor"!=o&&t.push(o);return t}var s=o("./node_modules/lodash/_isPrototype.js"),r=o("./node_modules/lodash/_nativeKeys.js"),a=Object.prototype,i=a.hasOwnProperty;e.exports=n},"./node_modules/lodash/_baseKeysIn.js":function(e,t,o){function n(e){if(!s(e))return a(e);var t=r(e),o=[];for(var n in e)("constructor"!=n||!t&&l.call(e,n))&&o.push(n);return o}var s=o("./node_modules/lodash/isObject.js"),r=o("./node_modules/lodash/_isPrototype.js"),a=o("./node_modules/lodash/_nativeKeysIn.js"),i=Object.prototype,l=i.hasOwnProperty;e.exports=n},"./node_modules/lodash/_baseMap.js":function(e,t,o){function n(e,t){var o=-1,n=r(e)?Array(e.length):[];return s(e,function(e,s,r){n[++o]=t(e,s,r)}),n}var s=o("./node_modules/lodash/_baseEach.js"),r=o("./node_modules/lodash/isArrayLike.js");e.exports=n},"./node_modules/lodash/_baseMatches.js":function(e,t,o){function n(e){var t=r(e);return 1==t.length&&t[0][2]?a(t[0][0],t[0][1]):function(o){return o===e||s(o,e,t)}}var s=o("./node_modules/lodash/_baseIsMatch.js"),r=o("./node_modules/lodash/_getMatchData.js"),a=o("./node_modules/lodash/_matchesStrictComparable.js");e.exports=n},"./node_modules/lodash/_baseMatchesProperty.js":function(e,t,o){function n(e,t){return i(e)&&l(t)?u(d(e),t):function(o){var n=r(o,e);return void 0===n&&n===t?a(o,e):s(t,n,c|p)}}var s=o("./node_modules/lodash/_baseIsEqual.js"),r=o("./node_modules/lodash/get.js"),a=o("./node_modules/lodash/hasIn.js"),i=o("./node_modules/lodash/_isKey.js"),l=o("./node_modules/lodash/_isStrictComparable.js"),u=o("./node_modules/lodash/_matchesStrictComparable.js"),d=o("./node_modules/lodash/_toKey.js"),c=1,p=2;e.exports=n},"./node_modules/lodash/_baseOrderBy.js":function(e,t,o){function n(e,t,o){var n=-1;t=s(t.length?t:[d],l(r));var c=a(e,function(e,o,r){return{criteria:s(t,function(t){return t(e)}),index:++n,value:e}});return i(c,function(e,t){return u(e,t,o)})}var s=o("./node_modules/lodash/_arrayMap.js"),r=o("./node_modules/lodash/_baseIteratee.js"),a=o("./node_modules/lodash/_baseMap.js"),i=o("./node_modules/lodash/_baseSortBy.js"),l=o("./node_modules/lodash/_baseUnary.js"),u=o("./node_modules/lodash/_compareMultiple.js"),d=o("./node_modules/lodash/identity.js");e.exports=n},"./node_modules/lodash/_basePick.js":function(e,t,o){function n(e,t){return s(e,t,function(t,o){return r(e,o)})}var s=o("./node_modules/lodash/_basePickBy.js"),r=o("./node_modules/lodash/hasIn.js");e.exports=n},"./node_modules/lodash/_basePickBy.js":function(e,t,o){function n(e,t,o){for(var n=-1,i=t.length,l={};++n<i;){var u=t[n],d=s(e,u);o(d,u)&&r(l,a(u,e),d)}return l}var s=o("./node_modules/lodash/_baseGet.js"),r=o("./node_modules/lodash/_baseSet.js"),a=o("./node_modules/lodash/_castPath.js");e.exports=n},"./node_modules/lodash/_baseProperty.js":function(e,t){function o(e){return function(t){return null==t?void 0:t[e]}}e.exports=o},"./node_modules/lodash/_basePropertyDeep.js":function(e,t,o){function n(e){return function(t){return s(t,e)}}var s=o("./node_modules/lodash/_baseGet.js");e.exports=n},"./node_modules/lodash/_baseRest.js":function(e,t,o){function n(e,t){return a(r(e,t,s),e+"")}var s=o("./node_modules/lodash/identity.js"),r=o("./node_modules/lodash/_overRest.js"),a=o("./node_modules/lodash/_setToString.js");e.exports=n},"./node_modules/lodash/_baseSet.js":function(e,t,o){function n(e,t,o,n){if(!i(e))return e;t=r(t,e);for(var u=-1,d=t.length,c=d-1,p=e;null!=p&&++u<d;){var h=l(t[u]),m=o;if(u!=c){var f=p[h];void 0===(m=n?n(f,h,p):void 0)&&(m=i(f)?f:a(t[u+1])?[]:{})}s(p,h,m),p=p[h]}return e}var s=o("./node_modules/lodash/_assignValue.js"),r=o("./node_modules/lodash/_castPath.js"),a=o("./node_modules/lodash/_isIndex.js"),i=o("./node_modules/lodash/isObject.js"),l=o("./node_modules/lodash/_toKey.js");e.exports=n},"./node_modules/lodash/_baseSetToString.js":function(e,t,o){var n=o("./node_modules/lodash/constant.js"),s=o("./node_modules/lodash/_defineProperty.js"),r=o("./node_modules/lodash/identity.js"),a=s?function(e,t){return s(e,"toString",{configurable:!0,enumerable:!1,value:n(t),writable:!0})}:r;e.exports=a},"./node_modules/lodash/_baseSlice.js":function(e,t){function o(e,t,o){var n=-1,s=e.length;t<0&&(t=-t>s?0:s+t),o=o>s?s:o,o<0&&(o+=s),s=t>o?0:o-t>>>0,t>>>=0;for(var r=Array(s);++n<s;)r[n]=e[n+t];return r}e.exports=o},"./node_modules/lodash/_baseSome.js":function(e,t,o){function n(e,t){var o;return s(e,function(e,n,s){return!(o=t(e,n,s))}),!!o}var s=o("./node_modules/lodash/_baseEach.js");e.exports=n},"./node_modules/lodash/_baseSortBy.js":function(e,t){function o(e,t){var o=e.length;for(e.sort(t);o--;)e[o]=e[o].value;return e}e.exports=o},"./node_modules/lodash/_baseTimes.js":function(e,t){function o(e,t){for(var o=-1,n=Array(e);++o<e;)n[o]=t(o);return n}e.exports=o},"./node_modules/lodash/_baseToPairs.js":function(e,t,o){function n(e,t){return s(t,function(t){return[t,e[t]]})}var s=o("./node_modules/lodash/_arrayMap.js");e.exports=n},"./node_modules/lodash/_baseToString.js":function(e,t,o){function n(e){if("string"==typeof e)return e;if(a(e))return r(e,n)+"";if(i(e))return d?d.call(e):"";var t=e+"";return"0"==t&&1/e==-l?"-0":t}var s=o("./node_modules/lodash/_Symbol.js"),r=o("./node_modules/lodash/_arrayMap.js"),a=o("./node_modules/lodash/isArray.js"),i=o("./node_modules/lodash/isSymbol.js"),l=1/0,u=s?s.prototype:void 0,d=u?u.toString:void 0;e.exports=n},"./node_modules/lodash/_baseUnary.js":function(e,t){function o(e){return function(t){return e(t)}}e.exports=o},"./node_modules/lodash/_baseUnset.js":function(e,t,o){function n(e,t){return t=s(t,e),null==(e=a(e,t))||delete e[i(r(t))]}var s=o("./node_modules/lodash/_castPath.js"),r=o("./node_modules/lodash/last.js"),a=o("./node_modules/lodash/_parent.js"),i=o("./node_modules/lodash/_toKey.js");e.exports=n},"./node_modules/lodash/_baseValues.js":function(e,t,o){function n(e,t){return s(t,function(t){return e[t]})}var s=o("./node_modules/lodash/_arrayMap.js");e.exports=n},"./node_modules/lodash/_baseZipObject.js":function(e,t){function o(e,t,o){for(var n=-1,s=e.length,r=t.length,a={};++n<s;){var i=n<r?t[n]:void 0;o(a,e[n],i)}return a}e.exports=o},"./node_modules/lodash/_cacheHas.js":function(e,t){function o(e,t){return e.has(t)}e.exports=o},"./node_modules/lodash/_castArrayLikeObject.js":function(e,t,o){function n(e){return s(e)?e:[]}var s=o("./node_modules/lodash/isArrayLikeObject.js");e.exports=n},"./node_modules/lodash/_castFunction.js":function(e,t,o){function n(e){return"function"==typeof e?e:s}var s=o("./node_modules/lodash/identity.js");e.exports=n},"./node_modules/lodash/_castPath.js":function(e,t,o){function n(e,t){return s(e)?e:r(e,t)?[e]:a(i(e))}var s=o("./node_modules/lodash/isArray.js"),r=o("./node_modules/lodash/_isKey.js"),a=o("./node_modules/lodash/_stringToPath.js"),i=o("./node_modules/lodash/toString.js");e.exports=n},"./node_modules/lodash/_cloneArrayBuffer.js":function(e,t,o){function n(e){var t=new e.constructor(e.byteLength);return new s(t).set(new s(e)),t}var s=o("./node_modules/lodash/_Uint8Array.js");e.exports=n},"./node_modules/lodash/_cloneBuffer.js":function(e,t,o){(function(e){function n(e,t){if(t)return e.slice();var o=e.length,n=u?u(o):new e.constructor(o);return e.copy(n),n}var s=o("./node_modules/lodash/_root.js"),r="object"==typeof t&&t&&!t.nodeType&&t,a=r&&"object"==typeof e&&e&&!e.nodeType&&e,i=a&&a.exports===r,l=i?s.Buffer:void 0,u=l?l.allocUnsafe:void 0;e.exports=n}).call(t,o("./node_modules/webpack/buildin/module.js")(e))},"./node_modules/lodash/_cloneDataView.js":function(e,t,o){function n(e,t){var o=t?s(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)}var s=o("./node_modules/lodash/_cloneArrayBuffer.js");e.exports=n},"./node_modules/lodash/_cloneRegExp.js":function(e,t){function o(e){var t=new e.constructor(e.source,n.exec(e));return t.lastIndex=e.lastIndex,t}var n=/\w*$/;e.exports=o},"./node_modules/lodash/_cloneSymbol.js":function(e,t,o){function n(e){return a?Object(a.call(e)):{}}var s=o("./node_modules/lodash/_Symbol.js"),r=s?s.prototype:void 0,a=r?r.valueOf:void 0;e.exports=n},"./node_modules/lodash/_cloneTypedArray.js":function(e,t,o){function n(e,t){var o=t?s(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)}var s=o("./node_modules/lodash/_cloneArrayBuffer.js");e.exports=n},"./node_modules/lodash/_compareAscending.js":function(e,t,o){function n(e,t){if(e!==t){var o=void 0!==e,n=null===e,r=e===e,a=s(e),i=void 0!==t,l=null===t,u=t===t,d=s(t);if(!l&&!d&&!a&&e>t||a&&i&&u&&!l&&!d||n&&i&&u||!o&&u||!r)return 1;if(!n&&!a&&!d&&e<t||d&&o&&r&&!n&&!a||l&&o&&r||!i&&r||!u)return-1}return 0}var s=o("./node_modules/lodash/isSymbol.js");e.exports=n},"./node_modules/lodash/_compareMultiple.js":function(e,t,o){function n(e,t,o){for(var n=-1,r=e.criteria,a=t.criteria,i=r.length,l=o.length;++n<i;){var u=s(r[n],a[n]);if(u)return n>=l?u:u*("desc"==o[n]?-1:1)}return e.index-t.index}var s=o("./node_modules/lodash/_compareAscending.js");e.exports=n},"./node_modules/lodash/_copyArray.js":function(e,t){function o(e,t){var o=-1,n=e.length;for(t||(t=Array(n));++o<n;)t[o]=e[o];return t}e.exports=o},"./node_modules/lodash/_copyObject.js":function(e,t,o){function n(e,t,o,n){var a=!o;o||(o={});for(var i=-1,l=t.length;++i<l;){var u=t[i],d=n?n(o[u],e[u],u,o,e):void 0;void 0===d&&(d=e[u]),a?r(o,u,d):s(o,u,d)}return o}var s=o("./node_modules/lodash/_assignValue.js"),r=o("./node_modules/lodash/_baseAssignValue.js");e.exports=n},"./node_modules/lodash/_copySymbols.js":function(e,t,o){function n(e,t){return s(e,r(e),t)}var s=o("./node_modules/lodash/_copyObject.js"),r=o("./node_modules/lodash/_getSymbols.js");e.exports=n},"./node_modules/lodash/_copySymbolsIn.js":function(e,t,o){function n(e,t){return s(e,r(e),t)}var s=o("./node_modules/lodash/_copyObject.js"),r=o("./node_modules/lodash/_getSymbolsIn.js");e.exports=n},"./node_modules/lodash/_coreJsData.js":function(e,t,o){var n=o("./node_modules/lodash/_root.js"),s=n["__core-js_shared__"];e.exports=s},"./node_modules/lodash/_createAssigner.js":function(e,t,o){function n(e){return s(function(t,o){var n=-1,s=o.length,a=s>1?o[s-1]:void 0,i=s>2?o[2]:void 0;for(a=e.length>3&&"function"==typeof a?(s--,a):void 0,i&&r(o[0],o[1],i)&&(a=s<3?void 0:a,s=1),t=Object(t);++n<s;){var l=o[n];l&&e(t,l,n,a)}return t})}var s=o("./node_modules/lodash/_baseRest.js"),r=o("./node_modules/lodash/_isIterateeCall.js");e.exports=n},"./node_modules/lodash/_createBaseEach.js":function(e,t,o){function n(e,t){return function(o,n){if(null==o)return o;if(!s(o))return e(o,n);for(var r=o.length,a=t?r:-1,i=Object(o);(t?a--:++a<r)&&!1!==n(i[a],a,i););return o}}var s=o("./node_modules/lodash/isArrayLike.js");e.exports=n},"./node_modules/lodash/_createBaseFor.js":function(e,t){function o(e){return function(t,o,n){for(var s=-1,r=Object(t),a=n(t),i=a.length;i--;){var l=a[e?i:++s];if(!1===o(r[l],l,r))break}return t}}e.exports=o},"./node_modules/lodash/_createFind.js":function(e,t,o){function n(e){return function(t,o,n){var i=Object(t);if(!r(t)){var l=s(o,3);t=a(t),o=function(e){return l(i[e],e,i)}}var u=e(t,o,n);return u>-1?i[l?t[u]:u]:void 0}}var s=o("./node_modules/lodash/_baseIteratee.js"),r=o("./node_modules/lodash/isArrayLike.js"),a=o("./node_modules/lodash/keys.js");e.exports=n},"./node_modules/lodash/_createToPairs.js":function(e,t,o){function n(e){return function(t){var o=r(t);return o==l?a(t):o==u?i(t):s(t,e(t))}}var s=o("./node_modules/lodash/_baseToPairs.js"),r=o("./node_modules/lodash/_getTag.js"),a=o("./node_modules/lodash/_mapToArray.js"),i=o("./node_modules/lodash/_setToPairs.js"),l="[object Map]",u="[object Set]";e.exports=n},"./node_modules/lodash/_customOmitClone.js":function(e,t,o){function n(e){return s(e)?void 0:e}var s=o("./node_modules/lodash/isPlainObject.js");e.exports=n},"./node_modules/lodash/_defineProperty.js":function(e,t,o){var n=o("./node_modules/lodash/_getNative.js"),s=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=s},"./node_modules/lodash/_equalArrays.js":function(e,t,o){function n(e,t,o,n,u,d){var c=o&i,p=e.length,h=t.length;if(p!=h&&!(c&&h>p))return!1;var m=d.get(e);if(m&&d.get(t))return m==t;var f=-1,_=!0,g=o&l?new s:void 0;for(d.set(e,t),d.set(t,e);++f<p;){var v=e[f],y=t[f];if(n)var j=c?n(y,v,f,t,e,d):n(v,y,f,e,t,d);if(void 0!==j){if(j)continue;_=!1;break}if(g){if(!r(t,function(e,t){if(!a(g,t)&&(v===e||u(v,e,o,n,d)))return g.push(t)})){_=!1;break}}else if(v!==y&&!u(v,y,o,n,d)){_=!1;break}}return d.delete(e),d.delete(t),_}var s=o("./node_modules/lodash/_SetCache.js"),r=o("./node_modules/lodash/_arraySome.js"),a=o("./node_modules/lodash/_cacheHas.js"),i=1,l=2;e.exports=n},"./node_modules/lodash/_equalByTag.js":function(e,t,o){function n(e,t,o,n,s,w,x){switch(o){case C:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case b:return!(e.byteLength!=t.byteLength||!w(new r(e),new r(t)));case p:case h:case _:return a(+e,+t);case m:return e.name==t.name&&e.message==t.message;case g:case y:return e==t+"";case f:var E=l;case v:var P=n&d;if(E||(E=u),e.size!=t.size&&!P)return!1;var O=x.get(e);if(O)return O==t;n|=c,x.set(e,t);var M=i(E(e),E(t),n,s,w,x);return x.delete(e),M;case j:if(S)return S.call(e)==S.call(t)}return!1}var s=o("./node_modules/lodash/_Symbol.js"),r=o("./node_modules/lodash/_Uint8Array.js"),a=o("./node_modules/lodash/eq.js"),i=o("./node_modules/lodash/_equalArrays.js"),l=o("./node_modules/lodash/_mapToArray.js"),u=o("./node_modules/lodash/_setToArray.js"),d=1,c=2,p="[object Boolean]",h="[object Date]",m="[object Error]",f="[object Map]",_="[object Number]",g="[object RegExp]",v="[object Set]",y="[object String]",j="[object Symbol]",b="[object ArrayBuffer]",C="[object DataView]",w=s?s.prototype:void 0,S=w?w.valueOf:void 0;e.exports=n},"./node_modules/lodash/_equalObjects.js":function(e,t,o){function n(e,t,o,n,a,l){var u=o&r,d=s(e),c=d.length;if(c!=s(t).length&&!u)return!1;for(var p=c;p--;){var h=d[p];if(!(u?h in t:i.call(t,h)))return!1}var m=l.get(e);if(m&&l.get(t))return m==t;var f=!0;l.set(e,t),l.set(t,e);for(var _=u;++p<c;){h=d[p];var g=e[h],v=t[h];if(n)var y=u?n(v,g,h,t,e,l):n(g,v,h,e,t,l);if(!(void 0===y?g===v||a(g,v,o,n,l):y)){f=!1;break}_||(_="constructor"==h)}if(f&&!_){var j=e.constructor,b=t.constructor;j!=b&&"constructor"in e&&"constructor"in t&&!("function"==typeof j&&j instanceof j&&"function"==typeof b&&b instanceof b)&&(f=!1)}return l.delete(e),l.delete(t),f}var s=o("./node_modules/lodash/_getAllKeys.js"),r=1,a=Object.prototype,i=a.hasOwnProperty;e.exports=n},"./node_modules/lodash/_flatRest.js":function(e,t,o){function n(e){return a(r(e,void 0,s),e+"")}var s=o("./node_modules/lodash/flatten.js"),r=o("./node_modules/lodash/_overRest.js"),a=o("./node_modules/lodash/_setToString.js");e.exports=n},"./node_modules/lodash/_freeGlobal.js":function(e,t,o){(function(t){var o="object"==typeof t&&t&&t.Object===Object&&t;e.exports=o}).call(t,o("./node_modules/webpack/buildin/global.js"))},"./node_modules/lodash/_getAllKeys.js":function(e,t,o){function n(e){return s(e,a,r)}var s=o("./node_modules/lodash/_baseGetAllKeys.js"),r=o("./node_modules/lodash/_getSymbols.js"),a=o("./node_modules/lodash/keys.js");e.exports=n},"./node_modules/lodash/_getAllKeysIn.js":function(e,t,o){function n(e){return s(e,a,r)}var s=o("./node_modules/lodash/_baseGetAllKeys.js"),r=o("./node_modules/lodash/_getSymbolsIn.js"),a=o("./node_modules/lodash/keysIn.js");e.exports=n},"./node_modules/lodash/_getMapData.js":function(e,t,o){function n(e,t){var o=e.__data__;return s(t)?o["string"==typeof t?"string":"hash"]:o.map}var s=o("./node_modules/lodash/_isKeyable.js");e.exports=n},"./node_modules/lodash/_getMatchData.js":function(e,t,o){function n(e){for(var t=r(e),o=t.length;o--;){var n=t[o],a=e[n];t[o]=[n,a,s(a)]}return t}var s=o("./node_modules/lodash/_isStrictComparable.js"),r=o("./node_modules/lodash/keys.js");e.exports=n},"./node_modules/lodash/_getNative.js":function(e,t,o){function n(e,t){var o=r(e,t);return s(o)?o:void 0}var s=o("./node_modules/lodash/_baseIsNative.js"),r=o("./node_modules/lodash/_getValue.js");e.exports=n},"./node_modules/lodash/_getPrototype.js":function(e,t,o){var n=o("./node_modules/lodash/_overArg.js"),s=n(Object.getPrototypeOf,Object);e.exports=s},"./node_modules/lodash/_getRawTag.js":function(e,t,o){function n(e){var t=a.call(e,l),o=e[l];try{e[l]=void 0;var n=!0}catch(e){}var s=i.call(e);return n&&(t?e[l]=o:delete e[l]),s}var s=o("./node_modules/lodash/_Symbol.js"),r=Object.prototype,a=r.hasOwnProperty,i=r.toString,l=s?s.toStringTag:void 0;e.exports=n},"./node_modules/lodash/_getSymbols.js":function(e,t,o){var n=o("./node_modules/lodash/_arrayFilter.js"),s=o("./node_modules/lodash/stubArray.js"),r=Object.prototype,a=r.propertyIsEnumerable,i=Object.getOwnPropertySymbols,l=i?function(e){return null==e?[]:(e=Object(e),n(i(e),function(t){return a.call(e,t)}))}:s;e.exports=l},"./node_modules/lodash/_getSymbolsIn.js":function(e,t,o){var n=o("./node_modules/lodash/_arrayPush.js"),s=o("./node_modules/lodash/_getPrototype.js"),r=o("./node_modules/lodash/_getSymbols.js"),a=o("./node_modules/lodash/stubArray.js"),i=Object.getOwnPropertySymbols,l=i?function(e){for(var t=[];e;)n(t,r(e)),e=s(e);return t}:a;e.exports=l},"./node_modules/lodash/_getTag.js":function(e,t,o){var n=o("./node_modules/lodash/_DataView.js"),s=o("./node_modules/lodash/_Map.js"),r=o("./node_modules/lodash/_Promise.js"),a=o("./node_modules/lodash/_Set.js"),i=o("./node_modules/lodash/_WeakMap.js"),l=o("./node_modules/lodash/_baseGetTag.js"),u=o("./node_modules/lodash/_toSource.js"),d=u(n),c=u(s),p=u(r),h=u(a),m=u(i),f=l;(n&&"[object DataView]"!=f(new n(new ArrayBuffer(1)))||s&&"[object Map]"!=f(new s)||r&&"[object Promise]"!=f(r.resolve())||a&&"[object Set]"!=f(new a)||i&&"[object WeakMap]"!=f(new i))&&(f=function(e){var t=l(e),o="[object Object]"==t?e.constructor:void 0,n=o?u(o):"";if(n)switch(n){case d:return"[object DataView]";case c:return"[object Map]";case p:return"[object Promise]";case h:return"[object Set]";case m:return"[object WeakMap]"}return t}),e.exports=f},"./node_modules/lodash/_getValue.js":function(e,t){function o(e,t){return null==e?void 0:e[t]}e.exports=o},"./node_modules/lodash/_hasPath.js":function(e,t,o){function n(e,t,o){t=s(t,e);for(var n=-1,d=t.length,c=!1;++n<d;){var p=u(t[n]);if(!(c=null!=e&&o(e,p)))break;e=e[p]}return c||++n!=d?c:!!(d=null==e?0:e.length)&&l(d)&&i(p,d)&&(a(e)||r(e))}var s=o("./node_modules/lodash/_castPath.js"),r=o("./node_modules/lodash/isArguments.js"),a=o("./node_modules/lodash/isArray.js"),i=o("./node_modules/lodash/_isIndex.js"),l=o("./node_modules/lodash/isLength.js"),u=o("./node_modules/lodash/_toKey.js");e.exports=n},"./node_modules/lodash/_hashClear.js":function(e,t,o){function n(){this.__data__=s?s(null):{},this.size=0}var s=o("./node_modules/lodash/_nativeCreate.js");e.exports=n},"./node_modules/lodash/_hashDelete.js":function(e,t){function o(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}e.exports=o},"./node_modules/lodash/_hashGet.js":function(e,t,o){function n(e){var t=this.__data__;if(s){var o=t[e];return o===r?void 0:o}return i.call(t,e)?t[e]:void 0}var s=o("./node_modules/lodash/_nativeCreate.js"),r="__lodash_hash_undefined__",a=Object.prototype,i=a.hasOwnProperty;e.exports=n},"./node_modules/lodash/_hashHas.js":function(e,t,o){function n(e){var t=this.__data__;return s?void 0!==t[e]:a.call(t,e)}var s=o("./node_modules/lodash/_nativeCreate.js"),r=Object.prototype,a=r.hasOwnProperty;e.exports=n},"./node_modules/lodash/_hashSet.js":function(e,t,o){function n(e,t){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=s&&void 0===t?r:t,this}var s=o("./node_modules/lodash/_nativeCreate.js"),r="__lodash_hash_undefined__";e.exports=n},"./node_modules/lodash/_initCloneArray.js":function(e,t){function o(e){var t=e.length,o=new e.constructor(t);return t&&"string"==typeof e[0]&&s.call(e,"index")&&(o.index=e.index,o.input=e.input),o}var n=Object.prototype,s=n.hasOwnProperty;e.exports=o},"./node_modules/lodash/_initCloneByTag.js":function(e,t,o){function n(e,t,o){var n=e.constructor;switch(t){case g:return s(e);case u:case d:return new n(+e);case v:return r(e,o);case y:case j:case b:case C:case w:case S:case x:case E:case P:return l(e,o);case c:return new n;case p:case f:return new n(e);case h:return a(e);case m:return new n;case _:return i(e)}}var s=o("./node_modules/lodash/_cloneArrayBuffer.js"),r=o("./node_modules/lodash/_cloneDataView.js"),a=o("./node_modules/lodash/_cloneRegExp.js"),i=o("./node_modules/lodash/_cloneSymbol.js"),l=o("./node_modules/lodash/_cloneTypedArray.js"),u="[object Boolean]",d="[object Date]",c="[object Map]",p="[object Number]",h="[object RegExp]",m="[object Set]",f="[object String]",_="[object Symbol]",g="[object ArrayBuffer]",v="[object DataView]",y="[object Float32Array]",j="[object Float64Array]",b="[object Int8Array]",C="[object Int16Array]",w="[object Int32Array]",S="[object Uint8Array]",x="[object Uint8ClampedArray]",E="[object Uint16Array]",P="[object Uint32Array]";e.exports=n},"./node_modules/lodash/_initCloneObject.js":function(e,t,o){function n(e){return"function"!=typeof e.constructor||a(e)?{}:s(r(e))}var s=o("./node_modules/lodash/_baseCreate.js"),r=o("./node_modules/lodash/_getPrototype.js"),a=o("./node_modules/lodash/_isPrototype.js");e.exports=n},"./node_modules/lodash/_isFlattenable.js":function(e,t,o){function n(e){return a(e)||r(e)||!!(i&&e&&e[i])}var s=o("./node_modules/lodash/_Symbol.js"),r=o("./node_modules/lodash/isArguments.js"),a=o("./node_modules/lodash/isArray.js"),i=s?s.isConcatSpreadable:void 0;e.exports=n},"./node_modules/lodash/_isIndex.js":function(e,t){function o(e,t){var o=typeof e;return!!(t=null==t?n:t)&&("number"==o||"symbol"!=o&&s.test(e))&&e>-1&&e%1==0&&e<t}var n=9007199254740991,s=/^(?:0|[1-9]\d*)$/;e.exports=o},"./node_modules/lodash/_isIterateeCall.js":function(e,t,o){function n(e,t,o){if(!i(o))return!1;var n=typeof t;return!!("number"==n?r(o)&&a(t,o.length):"string"==n&&t in o)&&s(o[t],e)}var s=o("./node_modules/lodash/eq.js"),r=o("./node_modules/lodash/isArrayLike.js"),a=o("./node_modules/lodash/_isIndex.js"),i=o("./node_modules/lodash/isObject.js");e.exports=n},"./node_modules/lodash/_isKey.js":function(e,t,o){function n(e,t){if(s(e))return!1;var o=typeof e;return!("number"!=o&&"symbol"!=o&&"boolean"!=o&&null!=e&&!r(e))||i.test(e)||!a.test(e)||null!=t&&e in Object(t)}var s=o("./node_modules/lodash/isArray.js"),r=o("./node_modules/lodash/isSymbol.js"),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;e.exports=n},"./node_modules/lodash/_isKeyable.js":function(e,t){function o(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=o},"./node_modules/lodash/_isMasked.js":function(e,t,o){function n(e){return!!r&&r in e}var s=o("./node_modules/lodash/_coreJsData.js"),r=function(){var e=/[^.]+$/.exec(s&&s.keys&&s.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=n},"./node_modules/lodash/_isPrototype.js":function(e,t){function o(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n)}var n=Object.prototype;e.exports=o},"./node_modules/lodash/_isStrictComparable.js":function(e,t,o){function n(e){return e===e&&!s(e)}var s=o("./node_modules/lodash/isObject.js");e.exports=n},"./node_modules/lodash/_listCacheClear.js":function(e,t){function o(){this.__data__=[],this.size=0}e.exports=o},"./node_modules/lodash/_listCacheDelete.js":function(e,t,o){function n(e){var t=this.__data__,o=s(t,e);return!(o<0||(o==t.length-1?t.pop():a.call(t,o,1),--this.size,0))}var s=o("./node_modules/lodash/_assocIndexOf.js"),r=Array.prototype,a=r.splice;e.exports=n},"./node_modules/lodash/_listCacheGet.js":function(e,t,o){function n(e){var t=this.__data__,o=s(t,e);return o<0?void 0:t[o][1]}var s=o("./node_modules/lodash/_assocIndexOf.js");e.exports=n},"./node_modules/lodash/_listCacheHas.js":function(e,t,o){function n(e){return s(this.__data__,e)>-1}var s=o("./node_modules/lodash/_assocIndexOf.js");e.exports=n},"./node_modules/lodash/_listCacheSet.js":function(e,t,o){function n(e,t){var o=this.__data__,n=s(o,e);return n<0?(++this.size,o.push([e,t])):o[n][1]=t,this}var s=o("./node_modules/lodash/_assocIndexOf.js");e.exports=n},"./node_modules/lodash/_mapCacheClear.js":function(e,t,o){function n(){this.size=0,this.__data__={hash:new s,map:new(a||r),string:new s}}var s=o("./node_modules/lodash/_Hash.js"),r=o("./node_modules/lodash/_ListCache.js"),a=o("./node_modules/lodash/_Map.js");e.exports=n},"./node_modules/lodash/_mapCacheDelete.js":function(e,t,o){function n(e){var t=s(this,e).delete(e);return this.size-=t?1:0,t}var s=o("./node_modules/lodash/_getMapData.js");e.exports=n},"./node_modules/lodash/_mapCacheGet.js":function(e,t,o){function n(e){return s(this,e).get(e)}var s=o("./node_modules/lodash/_getMapData.js");e.exports=n},"./node_modules/lodash/_mapCacheHas.js":function(e,t,o){function n(e){return s(this,e).has(e)}var s=o("./node_modules/lodash/_getMapData.js");e.exports=n},"./node_modules/lodash/_mapCacheSet.js":function(e,t,o){function n(e,t){var o=s(this,e),n=o.size;return o.set(e,t),this.size+=o.size==n?0:1,this}var s=o("./node_modules/lodash/_getMapData.js");e.exports=n},"./node_modules/lodash/_mapToArray.js":function(e,t){function o(e){var t=-1,o=Array(e.size);return e.forEach(function(e,n){o[++t]=[n,e]}),o}e.exports=o},"./node_modules/lodash/_matchesStrictComparable.js":function(e,t){function o(e,t){return function(o){return null!=o&&o[e]===t&&(void 0!==t||e in Object(o))}}e.exports=o},"./node_modules/lodash/_memoizeCapped.js":function(e,t,o){function n(e){var t=s(e,function(e){return o.size===r&&o.clear(),e}),o=t.cache;return t}var s=o("./node_modules/lodash/memoize.js"),r=500;e.exports=n},"./node_modules/lodash/_nativeCreate.js":function(e,t,o){var n=o("./node_modules/lodash/_getNative.js"),s=n(Object,"create");e.exports=s},"./node_modules/lodash/_nativeKeys.js":function(e,t,o){var n=o("./node_modules/lodash/_overArg.js"),s=n(Object.keys,Object);e.exports=s},"./node_modules/lodash/_nativeKeysIn.js":function(e,t){function o(e){var t=[];if(null!=e)for(var o in Object(e))t.push(o);return t}e.exports=o},"./node_modules/lodash/_nodeUtil.js":function(e,t,o){(function(e){var n=o("./node_modules/lodash/_freeGlobal.js"),s="object"==typeof t&&t&&!t.nodeType&&t,r=s&&"object"==typeof e&&e&&!e.nodeType&&e,a=r&&r.exports===s,i=a&&n.process,l=function(){try{return r&&r.require&&r.require("util").types||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=l}).call(t,o("./node_modules/webpack/buildin/module.js")(e))},"./node_modules/lodash/_objectToString.js":function(e,t){function o(e){return s.call(e)}var n=Object.prototype,s=n.toString;e.exports=o},"./node_modules/lodash/_overArg.js":function(e,t){function o(e,t){return function(o){return e(t(o))}}e.exports=o},"./node_modules/lodash/_overRest.js":function(e,t,o){function n(e,t,o){return t=r(void 0===t?e.length-1:t,0),function(){for(var n=arguments,a=-1,i=r(n.length-t,0),l=Array(i);++a<i;)l[a]=n[t+a];a=-1;for(var u=Array(t+1);++a<t;)u[a]=n[a];return u[t]=o(l),s(e,this,u)}}var s=o("./node_modules/lodash/_apply.js"),r=Math.max;e.exports=n},"./node_modules/lodash/_parent.js":function(e,t,o){function n(e,t){return t.length<2?e:s(e,r(t,0,-1))}var s=o("./node_modules/lodash/_baseGet.js"),r=o("./node_modules/lodash/_baseSlice.js");e.exports=n},"./node_modules/lodash/_root.js":function(e,t,o){var n=o("./node_modules/lodash/_freeGlobal.js"),s="object"==typeof self&&self&&self.Object===Object&&self,r=n||s||Function("return this")();e.exports=r},"./node_modules/lodash/_setCacheAdd.js":function(e,t){function o(e){return this.__data__.set(e,n),this}var n="__lodash_hash_undefined__";e.exports=o},"./node_modules/lodash/_setCacheHas.js":function(e,t){function o(e){return this.__data__.has(e)}e.exports=o},"./node_modules/lodash/_setToArray.js":function(e,t){function o(e){var t=-1,o=Array(e.size);return e.forEach(function(e){o[++t]=e}),o}e.exports=o},"./node_modules/lodash/_setToPairs.js":function(e,t){function o(e){var t=-1,o=Array(e.size);return e.forEach(function(e){o[++t]=[e,e]}),o}e.exports=o},"./node_modules/lodash/_setToString.js":function(e,t,o){var n=o("./node_modules/lodash/_baseSetToString.js"),s=o("./node_modules/lodash/_shortOut.js"),r=s(n);e.exports=r},"./node_modules/lodash/_shortOut.js":function(e,t){function o(e){var t=0,o=0;return function(){var a=r(),i=s-(a-o);if(o=a,i>0){if(++t>=n)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var n=800,s=16,r=Date.now;e.exports=o},"./node_modules/lodash/_stackClear.js":function(e,t,o){function n(){this.__data__=new s,this.size=0}var s=o("./node_modules/lodash/_ListCache.js");e.exports=n},"./node_modules/lodash/_stackDelete.js":function(e,t){function o(e){var t=this.__data__,o=t.delete(e);return this.size=t.size,o}e.exports=o},"./node_modules/lodash/_stackGet.js":function(e,t){function o(e){return this.__data__.get(e)}e.exports=o},"./node_modules/lodash/_stackHas.js":function(e,t){function o(e){return this.__data__.has(e)}e.exports=o},"./node_modules/lodash/_stackSet.js":function(e,t,o){function n(e,t){var o=this.__data__;if(o instanceof s){var n=o.__data__;if(!r||n.length<i-1)return n.push([e,t]),this.size=++o.size,this;o=this.__data__=new a(n)}return o.set(e,t),this.size=o.size,this}var s=o("./node_modules/lodash/_ListCache.js"),r=o("./node_modules/lodash/_Map.js"),a=o("./node_modules/lodash/_MapCache.js"),i=200;e.exports=n},"./node_modules/lodash/_strictIndexOf.js":function(e,t){function o(e,t,o){for(var n=o-1,s=e.length;++n<s;)if(e[n]===t)return n;return-1}e.exports=o},"./node_modules/lodash/_stringToPath.js":function(e,t,o){var n=o("./node_modules/lodash/_memoizeCapped.js"),s=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,r=/\\(\\)?/g,a=n(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(s,function(e,o,n,s){t.push(n?s.replace(r,"$1"):o||e)}),t});e.exports=a},"./node_modules/lodash/_toKey.js":function(e,t,o){function n(e){if("string"==typeof e||s(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}var s=o("./node_modules/lodash/isSymbol.js"),r=1/0;e.exports=n},"./node_modules/lodash/_toSource.js":function(e,t){function o(e){if(null!=e){try{return s.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var n=Function.prototype,s=n.toString;e.exports=o},"./node_modules/lodash/assign.js":function(e,t,o){var n=o("./node_modules/lodash/_assignValue.js"),s=o("./node_modules/lodash/_copyObject.js"),r=o("./node_modules/lodash/_createAssigner.js"),a=o("./node_modules/lodash/isArrayLike.js"),i=o("./node_modules/lodash/_isPrototype.js"),l=o("./node_modules/lodash/keys.js"),u=Object.prototype,d=u.hasOwnProperty,c=r(function(e,t){if(i(t)||a(t))return void s(t,l(t),e);for(var o in t)d.call(t,o)&&n(e,o,t[o])});e.exports=c},"./node_modules/lodash/constant.js":function(e,t){function o(e){return function(){return e}}e.exports=o},"./node_modules/lodash/defaults.js":function(e,t,o){var n=o("./node_modules/lodash/_baseRest.js"),s=o("./node_modules/lodash/eq.js"),r=o("./node_modules/lodash/_isIterateeCall.js"),a=o("./node_modules/lodash/keysIn.js"),i=Object.prototype,l=i.hasOwnProperty,u=n(function(e,t){e=Object(e);var o=-1,n=t.length,u=n>2?t[2]:void 0;for(u&&r(t[0],t[1],u)&&(n=1);++o<n;)for(var d=t[o],c=a(d),p=-1,h=c.length;++p<h;){var m=c[p],f=e[m];(void 0===f||s(f,i[m])&&!l.call(e,m))&&(e[m]=d[m])}return e});e.exports=u},"./node_modules/lodash/difference.js":function(e,t,o){var n=o("./node_modules/lodash/_baseDifference.js"),s=o("./node_modules/lodash/_baseFlatten.js"),r=o("./node_modules/lodash/_baseRest.js"),a=o("./node_modules/lodash/isArrayLikeObject.js"),i=r(function(e,t){return a(e)?n(e,s(t,1,a,!0)):[]});e.exports=i},"./node_modules/lodash/drop.js":function(e,t,o){function n(e,t,o){var n=null==e?0:e.length;return n?(t=o||void 0===t?1:r(t),s(e,t<0?0:t,n)):[]}var s=o("./node_modules/lodash/_baseSlice.js"),r=o("./node_modules/lodash/toInteger.js");e.exports=n},"./node_modules/lodash/dropRight.js":function(e,t,o){function n(e,t,o){var n=null==e?0:e.length;return n?(t=o||void 0===t?1:r(t),t=n-t,s(e,0,t<0?0:t)):[]}var s=o("./node_modules/lodash/_baseSlice.js"),r=o("./node_modules/lodash/toInteger.js");e.exports=n},"./node_modules/lodash/eq.js":function(e,t){function o(e,t){return e===t||e!==e&&t!==t}e.exports=o},"./node_modules/lodash/filter.js":function(e,t,o){function n(e,t){return(i(e)?s:r)(e,a(t,3))}var s=o("./node_modules/lodash/_arrayFilter.js"),r=o("./node_modules/lodash/_baseFilter.js"),a=o("./node_modules/lodash/_baseIteratee.js"),i=o("./node_modules/lodash/isArray.js");e.exports=n},"./node_modules/lodash/find.js":function(e,t,o){var n=o("./node_modules/lodash/_createFind.js"),s=o("./node_modules/lodash/findIndex.js"),r=n(s);e.exports=r},"./node_modules/lodash/findIndex.js":function(e,t,o){function n(e,t,o){var n=null==e?0:e.length;if(!n)return-1;var l=null==o?0:a(o);return l<0&&(l=i(n+l,0)),s(e,r(t,3),l)}var s=o("./node_modules/lodash/_baseFindIndex.js"),r=o("./node_modules/lodash/_baseIteratee.js"),a=o("./node_modules/lodash/toInteger.js"),i=Math.max;e.exports=n},"./node_modules/lodash/flatten.js":function(e,t,o){function n(e){return(null==e?0:e.length)?s(e,1):[]}var s=o("./node_modules/lodash/_baseFlatten.js");e.exports=n},"./node_modules/lodash/forEach.js":function(e,t,o){function n(e,t){return(i(e)?s:r)(e,a(t))}var s=o("./node_modules/lodash/_arrayEach.js"),r=o("./node_modules/lodash/_baseEach.js"),a=o("./node_modules/lodash/_castFunction.js"),i=o("./node_modules/lodash/isArray.js");e.exports=n},"./node_modules/lodash/forOwn.js":function(e,t,o){function n(e,t){return e&&s(e,r(t))}var s=o("./node_modules/lodash/_baseForOwn.js"),r=o("./node_modules/lodash/_castFunction.js");e.exports=n},"./node_modules/lodash/get.js":function(e,t,o){function n(e,t,o){var n=null==e?void 0:s(e,t);return void 0===n?o:n}var s=o("./node_modules/lodash/_baseGet.js");e.exports=n},"./node_modules/lodash/hasIn.js":function(e,t,o){function n(e,t){return null!=e&&r(e,t,s)}var s=o("./node_modules/lodash/_baseHasIn.js"),r=o("./node_modules/lodash/_hasPath.js");e.exports=n},"./node_modules/lodash/identity.js":function(e,t){function o(e){return e}e.exports=o},"./node_modules/lodash/includes.js":function(e,t,o){function n(e,t,o,n){e=r(e)?e:l(e),o=o&&!n?i(o):0;var d=e.length;return o<0&&(o=u(d+o,0)),a(e)?o<=d&&e.indexOf(t,o)>-1:!!d&&s(e,t,o)>-1}var s=o("./node_modules/lodash/_baseIndexOf.js"),r=o("./node_modules/lodash/isArrayLike.js"),a=o("./node_modules/lodash/isString.js"),i=o("./node_modules/lodash/toInteger.js"),l=o("./node_modules/lodash/values.js"),u=Math.max;e.exports=n},"./node_modules/lodash/initial.js":function(e,t,o){function n(e){return(null==e?0:e.length)?s(e,0,-1):[]}var s=o("./node_modules/lodash/_baseSlice.js");e.exports=n},"./node_modules/lodash/intersection.js":function(e,t,o){var n=o("./node_modules/lodash/_arrayMap.js"),s=o("./node_modules/lodash/_baseIntersection.js"),r=o("./node_modules/lodash/_baseRest.js"),a=o("./node_modules/lodash/_castArrayLikeObject.js"),i=r(function(e){var t=n(e,a);return t.length&&t[0]===e[0]?s(t):[]});e.exports=i},"./node_modules/lodash/isArguments.js":function(e,t,o){var n=o("./node_modules/lodash/_baseIsArguments.js"),s=o("./node_modules/lodash/isObjectLike.js"),r=Object.prototype,a=r.hasOwnProperty,i=r.propertyIsEnumerable,l=n(function(){return arguments}())?n:function(e){return s(e)&&a.call(e,"callee")&&!i.call(e,"callee")};e.exports=l},"./node_modules/lodash/isArray.js":function(e,t){var o=Array.isArray;e.exports=o},"./node_modules/lodash/isArrayLike.js":function(e,t,o){function n(e){return null!=e&&r(e.length)&&!s(e)}var s=o("./node_modules/lodash/isFunction.js"),r=o("./node_modules/lodash/isLength.js");e.exports=n},"./node_modules/lodash/isArrayLikeObject.js":function(e,t,o){function n(e){return r(e)&&s(e)}var s=o("./node_modules/lodash/isArrayLike.js"),r=o("./node_modules/lodash/isObjectLike.js");e.exports=n},"./node_modules/lodash/isBuffer.js":function(e,t,o){(function(e){var n=o("./node_modules/lodash/_root.js"),s=o("./node_modules/lodash/stubFalse.js"),r="object"==typeof t&&t&&!t.nodeType&&t,a=r&&"object"==typeof e&&e&&!e.nodeType&&e,i=a&&a.exports===r,l=i?n.Buffer:void 0,u=l?l.isBuffer:void 0,d=u||s;e.exports=d}).call(t,o("./node_modules/webpack/buildin/module.js")(e))},"./node_modules/lodash/isEmpty.js":function(e,t,o){function n(e){if(null==e)return!0;if(l(e)&&(i(e)||"string"==typeof e||"function"==typeof e.splice||u(e)||c(e)||a(e)))return!e.length;var t=r(e);if(t==p||t==h)return!e.size;if(d(e))return!s(e).length;for(var o in e)if(f.call(e,o))return!1;return!0}var s=o("./node_modules/lodash/_baseKeys.js"),r=o("./node_modules/lodash/_getTag.js"),a=o("./node_modules/lodash/isArguments.js"),i=o("./node_modules/lodash/isArray.js"),l=o("./node_modules/lodash/isArrayLike.js"),u=o("./node_modules/lodash/isBuffer.js"),d=o("./node_modules/lodash/_isPrototype.js"),c=o("./node_modules/lodash/isTypedArray.js"),p="[object Map]",h="[object Set]",m=Object.prototype,f=m.hasOwnProperty;e.exports=n},"./node_modules/lodash/isFunction.js":function(e,t,o){function n(e){if(!r(e))return!1;var t=s(e);return t==i||t==l||t==a||t==u}var s=o("./node_modules/lodash/_baseGetTag.js"),r=o("./node_modules/lodash/isObject.js"),a="[object AsyncFunction]",i="[object Function]",l="[object GeneratorFunction]",u="[object Proxy]";e.exports=n},"./node_modules/lodash/isLength.js":function(e,t){function o(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}var n=9007199254740991;e.exports=o},"./node_modules/lodash/isMap.js":function(e,t,o){var n=o("./node_modules/lodash/_baseIsMap.js"),s=o("./node_modules/lodash/_baseUnary.js"),r=o("./node_modules/lodash/_nodeUtil.js"),a=r&&r.isMap,i=a?s(a):n;e.exports=i},"./node_modules/lodash/isNull.js":function(e,t){function o(e){return null===e}e.exports=o},"./node_modules/lodash/isObject.js":function(e,t){function o(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=o},"./node_modules/lodash/isObjectLike.js":function(e,t){function o(e){return null!=e&&"object"==typeof e}e.exports=o},"./node_modules/lodash/isPlainObject.js":function(e,t,o){function n(e){if(!a(e)||s(e)!=i)return!1;var t=r(e);if(null===t)return!0;var o=c.call(t,"constructor")&&t.constructor;return"function"==typeof o&&o instanceof o&&d.call(o)==p}var s=o("./node_modules/lodash/_baseGetTag.js"),r=o("./node_modules/lodash/_getPrototype.js"),a=o("./node_modules/lodash/isObjectLike.js"),i="[object Object]",l=Function.prototype,u=Object.prototype,d=l.toString,c=u.hasOwnProperty,p=d.call(Object);e.exports=n},"./node_modules/lodash/isSet.js":function(e,t,o){var n=o("./node_modules/lodash/_baseIsSet.js"),s=o("./node_modules/lodash/_baseUnary.js"),r=o("./node_modules/lodash/_nodeUtil.js"),a=r&&r.isSet,i=a?s(a):n;e.exports=i},"./node_modules/lodash/isString.js":function(e,t,o){function n(e){return"string"==typeof e||!r(e)&&a(e)&&s(e)==i}var s=o("./node_modules/lodash/_baseGetTag.js"),r=o("./node_modules/lodash/isArray.js"),a=o("./node_modules/lodash/isObjectLike.js"),i="[object String]";e.exports=n},"./node_modules/lodash/isSymbol.js":function(e,t,o){function n(e){return"symbol"==typeof e||r(e)&&s(e)==a}var s=o("./node_modules/lodash/_baseGetTag.js"),r=o("./node_modules/lodash/isObjectLike.js"),a="[object Symbol]";e.exports=n},"./node_modules/lodash/isTypedArray.js":function(e,t,o){var n=o("./node_modules/lodash/_baseIsTypedArray.js"),s=o("./node_modules/lodash/_baseUnary.js"),r=o("./node_modules/lodash/_nodeUtil.js"),a=r&&r.isTypedArray,i=a?s(a):n;e.exports=i},"./node_modules/lodash/isUndefined.js":function(e,t){function o(e){return void 0===e}e.exports=o},"./node_modules/lodash/keys.js":function(e,t,o){function n(e){return a(e)?s(e):r(e)}var s=o("./node_modules/lodash/_arrayLikeKeys.js"),r=o("./node_modules/lodash/_baseKeys.js"),a=o("./node_modules/lodash/isArrayLike.js");e.exports=n},"./node_modules/lodash/keysIn.js":function(e,t,o){function n(e){return a(e)?s(e,!0):r(e)}var s=o("./node_modules/lodash/_arrayLikeKeys.js"),r=o("./node_modules/lodash/_baseKeysIn.js"),a=o("./node_modules/lodash/isArrayLike.js");e.exports=n},"./node_modules/lodash/last.js":function(e,t){function o(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}e.exports=o},"./node_modules/lodash/map.js":function(e,t,o){function n(e,t){return(i(e)?s:a)(e,r(t,3))}var s=o("./node_modules/lodash/_arrayMap.js"),r=o("./node_modules/lodash/_baseIteratee.js"),a=o("./node_modules/lodash/_baseMap.js"),i=o("./node_modules/lodash/isArray.js");e.exports=n},"./node_modules/lodash/memoize.js":function(e,t,o){function n(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(r);var o=function(){var n=arguments,s=t?t.apply(this,n):n[0],r=o.cache;if(r.has(s))return r.get(s);var a=e.apply(this,n);return o.cache=r.set(s,a)||r,a};return o.cache=new(n.Cache||s),o}var s=o("./node_modules/lodash/_MapCache.js"),r="Expected a function";n.Cache=s,e.exports=n},"./node_modules/lodash/omit.js":function(e,t,o){var n=o("./node_modules/lodash/_arrayMap.js"),s=o("./node_modules/lodash/_baseClone.js"),r=o("./node_modules/lodash/_baseUnset.js"),a=o("./node_modules/lodash/_castPath.js"),i=o("./node_modules/lodash/_copyObject.js"),l=o("./node_modules/lodash/_customOmitClone.js"),u=o("./node_modules/lodash/_flatRest.js"),d=o("./node_modules/lodash/_getAllKeysIn.js"),c=u(function(e,t){var o={};if(null==e)return o;var u=!1;t=n(t,function(t){return t=a(t,e),u||(u=t.length>1),t}),i(e,d(e),o),u&&(o=s(o,7,l));for(var c=t.length;c--;)r(o,t[c]);return o});e.exports=c},"./node_modules/lodash/orderBy.js":function(e,t,o){function n(e,t,o,n){return null==e?[]:(r(t)||(t=null==t?[]:[t]),o=n?void 0:o,r(o)||(o=null==o?[]:[o]),s(e,t,o))}var s=o("./node_modules/lodash/_baseOrderBy.js"),r=o("./node_modules/lodash/isArray.js");e.exports=n},"./node_modules/lodash/pick.js":function(e,t,o){var n=o("./node_modules/lodash/_basePick.js"),s=o("./node_modules/lodash/_flatRest.js"),r=s(function(e,t){return null==e?{}:n(e,t)});e.exports=r},"./node_modules/lodash/property.js":function(e,t,o){function n(e){return a(e)?s(i(e)):r(e)}var s=o("./node_modules/lodash/_baseProperty.js"),r=o("./node_modules/lodash/_basePropertyDeep.js"),a=o("./node_modules/lodash/_isKey.js"),i=o("./node_modules/lodash/_toKey.js");e.exports=n},"./node_modules/lodash/some.js":function(e,t,o){function n(e,t,o){var n=i(e)?s:a;return o&&l(e,t,o)&&(t=void 0),n(e,r(t,3))}var s=o("./node_modules/lodash/_arraySome.js"),r=o("./node_modules/lodash/_baseIteratee.js"),a=o("./node_modules/lodash/_baseSome.js"),i=o("./node_modules/lodash/isArray.js"),l=o("./node_modules/lodash/_isIterateeCall.js");e.exports=n},"./node_modules/lodash/sortBy.js":function(e,t,o){var n=o("./node_modules/lodash/_baseFlatten.js"),s=o("./node_modules/lodash/_baseOrderBy.js"),r=o("./node_modules/lodash/_baseRest.js"),a=o("./node_modules/lodash/_isIterateeCall.js"),i=r(function(e,t){if(null==e)return[];var o=t.length;return o>1&&a(e,t[0],t[1])?t=[]:o>2&&a(t[0],t[1],t[2])&&(t=[t[0]]),s(e,n(t,1),[])});e.exports=i},"./node_modules/lodash/stubArray.js":function(e,t){function o(){return[]}e.exports=o},"./node_modules/lodash/stubFalse.js":function(e,t){function o(){return!1}e.exports=o},"./node_modules/lodash/take.js":function(e,t,o){function n(e,t,o){return e&&e.length?(t=o||void 0===t?1:r(t),s(e,0,t<0?0:t)):[]}var s=o("./node_modules/lodash/_baseSlice.js"),r=o("./node_modules/lodash/toInteger.js");e.exports=n},"./node_modules/lodash/toFinite.js":function(e,t,o){function n(e){return e?(e=s(e))===r||e===-r?(e<0?-1:1)*a:e===e?e:0:0===e?e:0}var s=o("./node_modules/lodash/toNumber.js"),r=1/0,a=1.7976931348623157e308;e.exports=n},"./node_modules/lodash/toInteger.js":function(e,t,o){function n(e){var t=s(e),o=t%1;return t===t?o?t-o:t:0}var s=o("./node_modules/lodash/toFinite.js");e.exports=n},"./node_modules/lodash/toNumber.js":function(e,t,o){function n(e){if("number"==typeof e)return e;if(r(e))return a;if(s(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=s(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=u.test(e);return o||d.test(e)?c(e.slice(2),o?2:8):l.test(e)?a:+e}var s=o("./node_modules/lodash/isObject.js"),r=o("./node_modules/lodash/isSymbol.js"),a=NaN,i=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,c=parseInt;e.exports=n},"./node_modules/lodash/toPairs.js":function(e,t,o){var n=o("./node_modules/lodash/_createToPairs.js"),s=o("./node_modules/lodash/keys.js"),r=n(s);e.exports=r},"./node_modules/lodash/toString.js":function(e,t,o){function n(e){return null==e?"":s(e)}var s=o("./node_modules/lodash/_baseToString.js");e.exports=n},"./node_modules/lodash/uniqueId.js":function(e,t,o){function n(e){var t=++r;return s(e)+t}var s=o("./node_modules/lodash/toString.js"),r=0;e.exports=n},"./node_modules/lodash/values.js":function(e,t,o){function n(e){return null==e?[]:s(e,r(e))}var s=o("./node_modules/lodash/_baseValues.js"),r=o("./node_modules/lodash/keys.js");e.exports=n},"./node_modules/lodash/without.js":function(e,t,o){var n=o("./node_modules/lodash/_baseDifference.js"),s=o("./node_modules/lodash/_baseRest.js"),r=o("./node_modules/lodash/isArrayLikeObject.js"),a=s(function(e,t){return r(e)?n(e,t):[]});e.exports=a},"./node_modules/lodash/zipObject.js":function(e,t,o){function n(e,t){return r(e||[],t||[],s)}var s=o("./node_modules/lodash/_assignValue.js"),r=o("./node_modules/lodash/_baseZipObject.js");e.exports=n},"./node_modules/object-assign/index.js":function(e,t,o){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},o=0;o<10;o++)t["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var o,i,l=n(e),u=1;u<arguments.length;u++){o=Object(arguments[u]);for(var d in o)r.call(o,d)&&(l[d]=o[d]);if(s){i=s(o);for(var c=0;c<i.length;c++)a.call(o,i[c])&&(l[i[c]]=o[i[c]])}}return l}},"./node_modules/react-resize-aware/dist/index.js":function(e,t,o){!function(e,n){!function(e,t){"use strict";function o(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return function(o){return t.createElement(c,l({component:e},o))}}var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),d={display:"block",opacity:0,position:"absolute",top:0,left:0,height:"100%",width:"100%",overflow:"hidden",pointerEvents:"none",zIndex:-1},c=function(e){function i(){var e,t,o,n;s(this,i);for(var a=arguments.length,l=Array(a),u=0;u<a;u++)l[u]=arguments[u];return t=o=r(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(l))),o.state={},o.handleObjectLoad=function(e){o.setState({resizeTarget:e.target.contentDocument.defaultView},function(){o.state.resizeTarget.addEventListener("resize",o.handleResize),o.handleResize()})},o.handleResize=function(){var e={width:o.container.offsetWidth,height:o.container.offsetHeight};o.setState(e),o.props.onResize&&o.props.onResize(e)},n=t,r(o,n)}return a(i,e),u(i,[{key:"componentDidMount",value:function(){this.resizeElement.data="about:blank"}},{key:"componentWillUnmount",value:function(){var e=this.state.resizeTarget;e&&"function"==typeof e.removeEventListener&&e.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e,s=this,r=this.props,a=r.children,i=(r.onResize,r.onlyEvent),u=r.component,c=r.widthPropName,p=r.heightPropName,h=n(r,["children","onResize","onlyEvent","component","widthPropName","heightPropName"]),m=this.state,f=m.width,_=m.height,g="string"!=typeof u,v=[c||"width"],y=[p||"height"],j=(e={},o(e,v,f),o(e,y,_),e);return t.createElement(u,l(o({},g?"getRef":"ref",function(e){return s.container=e}),g&&j,h),t.createElement("object",{type:"text/html",style:d,ref:function(e){return s.resizeElement=e},onLoad:this.handleObjectLoad,"aria-hidden":!0,tabIndex:-1}),"function"==typeof a?a({width:f,height:_}):t.Children.map(a,function(e){return t.isValidElement(e)?t.cloneElement(e,i?null:j):e}))}}]),i}(t.Component);c.defaultProps={component:"div",widthPropName:void 0,heightPropName:void 0},e.default=c,e.makeResizeAware=i,Object.defineProperty(e,"__esModule",{value:!0})}(t,o(0))}()},"./node_modules/uuid/lib/bytesToUuid.js":function(e,t){function o(e,t){var o=t||0,s=n;return[s[e[o++]],s[e[o++]],s[e[o++]],s[e[o++]],"-",s[e[o++]],s[e[o++]],"-",s[e[o++]],s[e[o++]],"-",s[e[o++]],s[e[o++]],"-",s[e[o++]],s[e[o++]],s[e[o++]],s[e[o++]],s[e[o++]],s[e[o++]]].join("")}for(var n=[],s=0;s<256;++s)n[s]=(s+256).toString(16).substr(1);e.exports=o},"./node_modules/uuid/lib/rng-browser.js":function(e,t){var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(o){var n=new Uint8Array(16);e.exports=function(){return o(n),n}}else{var s=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),s[t]=e>>>((3&t)<<3)&255;return s}}},"./node_modules/uuid/v1.js":function(e,t,o){function n(e,t,o){var n=t&&o||0,d=t||[];e=e||{};var c=e.node||s,p=void 0!==e.clockseq?e.clockseq:r;if(null==c||null==p){var h=a();null==c&&(c=s=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==p&&(p=r=16383&(h[6]<<8|h[7]))}var m=void 0!==e.msecs?e.msecs:(new Date).getTime(),f=void 0!==e.nsecs?e.nsecs:u+1,_=m-l+(f-u)/1e4;if(_<0&&void 0===e.clockseq&&(p=p+1&16383),(_<0||m>l)&&void 0===e.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=m,u=f,r=p,m+=122192928e5;var g=(1e4*(268435455&m)+f)%4294967296;d[n++]=g>>>24&255,d[n++]=g>>>16&255,d[n++]=g>>>8&255,d[n++]=255&g;var v=m/4294967296*1e4&268435455;d[n++]=v>>>8&255,d[n++]=255&v,d[n++]=v>>>24&15|16,d[n++]=v>>>16&255,d[n++]=p>>>8|128,d[n++]=255&p;for(var y=0;y<6;++y)d[n+y]=c[y];return t||i(d)}var s,r,a=o("./node_modules/uuid/lib/rng-browser.js"),i=o("./node_modules/uuid/lib/bytesToUuid.js"),l=0,u=0;e.exports=n},"./node_modules/webpack/buildin/global.js":function(e,t){var o;o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(o=window)}e.exports=o},"./node_modules/webpack/buildin/module.js":function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},0:function(e,t){e.exports=React},1:function(e,t){e.exports=PropTypes},10:function(e,t){e.exports=Reactstrap},11:function(e,t){e.exports=ViewModeActions},12:function(e,t){e.exports=jQuery},13:function(e,t){e.exports=Config},14:function(e,t){e.exports=FormBuilderLoader},15:function(e,t){e.exports=ReactDom},16:function(e,t){e.exports=moment},2:function(e,t){e.exports=Injector},3:function(e,t){e.exports=i18n},4:function(e,t){e.exports=ReactRedux},5:function(e,t){e.exports=Redux},6:function(e,t){e.exports=classnames},7:function(e,t){e.exports=GraphQLTag},8:function(e,t){e.exports=ReactApollo},9:function(e,t){e.exports=Loading}});
=======
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/bundles/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/boot/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _registerComponents = __webpack_require__("./client/src/boot/registerComponents.js");

var _registerComponents2 = _interopRequireDefault(_registerComponents);

var _registerReducers = __webpack_require__("./client/src/boot/registerReducers.js");

var _registerReducers2 = _interopRequireDefault(_registerReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.document.addEventListener('DOMContentLoaded', function () {
  (0, _registerComponents2.default)();

  (0, _registerReducers2.default)();
});

/***/ }),

/***/ "./client/src/boot/registerComponents.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(2);

var _Injector2 = _interopRequireDefault(_Injector);

var _HistoryViewer = __webpack_require__("./client/src/components/HistoryViewer/HistoryViewer.js");

var _HistoryViewer2 = _interopRequireDefault(_HistoryViewer);

var _SnapshotViewerContainer = __webpack_require__("./client/src/components/HistoryViewer/SnapshotViewerContainer.js");

var _SnapshotViewerContainer2 = _interopRequireDefault(_SnapshotViewerContainer);

var _HistoryViewerHeading = __webpack_require__("./client/src/components/HistoryViewer/HistoryViewerHeading.js");

var _HistoryViewerHeading2 = _interopRequireDefault(_HistoryViewerHeading);

var _HistoryViewerToolbar = __webpack_require__("./client/src/components/HistoryViewer/HistoryViewerToolbar.js");

var _HistoryViewerToolbar2 = _interopRequireDefault(_HistoryViewerToolbar);

var _HistoryViewerVersion = __webpack_require__("./client/src/components/HistoryViewer/HistoryViewerVersion.js");

var _HistoryViewerVersion2 = _interopRequireDefault(_HistoryViewerVersion);

var _HistoryViewerVersionDetail = __webpack_require__("./client/src/components/HistoryViewer/HistoryViewerVersionDetail.js");

var _HistoryViewerVersionDetail2 = _interopRequireDefault(_HistoryViewerVersionDetail);

var _HistoryViewerVersionList = __webpack_require__("./client/src/components/HistoryViewer/HistoryViewerVersionList.js");

var _HistoryViewerVersionList2 = _interopRequireDefault(_HistoryViewerVersionList);

var _HistoryViewerVersionState = __webpack_require__("./client/src/components/HistoryViewer/HistoryViewerVersionState.js");

var _HistoryViewerVersionState2 = _interopRequireDefault(_HistoryViewerVersionState);

var _HistoryViewerSnapshotState = __webpack_require__("./client/src/components/HistoryViewer/HistoryViewerSnapshotState.js");

var _HistoryViewerSnapshotState2 = _interopRequireDefault(_HistoryViewerSnapshotState);

var _HistoryViewerSnapshot = __webpack_require__("./client/src/components/HistoryViewer/HistoryViewerSnapshot.js");

var _HistoryViewerSnapshot2 = _interopRequireDefault(_HistoryViewerSnapshot);

var _HistoryViewerCompareWarning = __webpack_require__("./client/src/components/HistoryViewer/HistoryViewerCompareWarning.js");

var _HistoryViewerCompareWarning2 = _interopRequireDefault(_HistoryViewerCompareWarning);

var _RollbackMutation = __webpack_require__("./client/src/components/HistoryViewer/RollbackMutation.js");

var _RollbackMutation2 = _interopRequireDefault(_RollbackMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  _Injector2.default.component.register('SnapshotViewer', _HistoryViewer2.default);
  _Injector2.default.component.register('SnapshotViewerContainer', _SnapshotViewerContainer2.default);
  _Injector2.default.component.register('SnapshotHistoryViewer', _HistoryViewer2.default);
  _Injector2.default.component.register('SnapshotRollbackMutation', _RollbackMutation2.default);
  _Injector2.default.component.registerMany({
    SnapshotHistoryViewerHeading: _HistoryViewerHeading2.default,
    SnapshotHistoryViewerToolbar: _HistoryViewerToolbar2.default,
    SnapshotHistoryViewerVersion: _HistoryViewerVersion2.default,
    SnapshotHistoryViewerVersionDetail: _HistoryViewerVersionDetail2.default,
    SnapshotHistoryViewerVersionList: _HistoryViewerVersionList2.default,
    SnapshotHistoryViewerVersionState: _HistoryViewerVersionState2.default,
    SnapshotHistoryViewerSnapshotState: _HistoryViewerSnapshotState2.default,
    SnapshotHistoryViewerSnapshot: _HistoryViewerSnapshot2.default,
    SnapshotHistoryViewerCompareWarning: _HistoryViewerCompareWarning2.default
  }, { force: true });
};

/***/ }),

/***/ "./client/src/boot/registerReducers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(2);

var _Injector2 = _interopRequireDefault(_Injector);

var _redux = __webpack_require__(5);

var _HistoryViewerReducer = __webpack_require__("./client/src/state/historyviewer/HistoryViewerReducer.js");

var _HistoryViewerReducer2 = _interopRequireDefault(_HistoryViewerReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerReducers = function registerReducers() {
  _Injector2.default.reducer.register('versionedAdmin', (0, _redux.combineReducers)({
    historyViewer: _HistoryViewerReducer2.default
  }), { force: true });
};

exports.default = registerReducers;

/***/ }),

/***/ "./client/src/bundles/bundle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./node_modules/expose-loader/index.js?SnapshotsViewer!./client/src/components/HistoryViewer/HistoryViewer.js-exposed");

__webpack_require__("./node_modules/expose-loader/index.js?versionType!./client/src/types/versionType.js-exposed");

__webpack_require__("./client/src/legacy/ArchiveAdmin/ArchiveAdmin.js");

__webpack_require__("./client/src/legacy/HistoryViewer/HistoryViewerEntwine.js");

__webpack_require__("./client/src/boot/index.js");

/***/ }),

/***/ "./client/src/components/HistoryViewer/HistoryViewer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = exports.VERSION_MODE_DATE = exports.VERSION_MODE_VERSION = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _griddleReact = __webpack_require__("./node_modules/griddle-react/modules/griddle.jsx.js");

var _griddleReact2 = _interopRequireDefault(_griddleReact);

var _HistoryViewerConfig = __webpack_require__("./client/src/containers/HistoryViewer/HistoryViewerConfig.js");

var _HistoryViewerConfig2 = _interopRequireDefault(_HistoryViewerConfig);

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

var _Injector = __webpack_require__(2);

var _Loading = __webpack_require__(9);

var _Loading2 = _interopRequireDefault(_Loading);

var _HistoryViewerActions = __webpack_require__("./client/src/state/historyviewer/HistoryViewerActions.js");

var _versionType = __webpack_require__("./client/src/types/versionType.js");

var _compareType = __webpack_require__("./client/src/types/compareType.js");

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactResizeAware = __webpack_require__("./node_modules/react-resize-aware/dist/index.js");

var _reactResizeAware2 = _interopRequireDefault(_reactResizeAware);

var _ViewModeActions = __webpack_require__(11);

var viewModeActions = _interopRequireWildcard(_ViewModeActions);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VERSION_MODE_VERSION = 'VERSION';
var VERSION_MODE_DATE = 'DATE';

exports.VERSION_MODE_VERSION = VERSION_MODE_VERSION;
exports.VERSION_MODE_DATE = VERSION_MODE_DATE;

var HistoryViewer = function (_Component) {
  _inherits(HistoryViewer, _Component);

  function HistoryViewer(props) {
    _classCallCheck(this, HistoryViewer);

    var _this = _possibleConstructorReturn(this, (HistoryViewer.__proto__ || Object.getPrototypeOf(HistoryViewer)).call(this, props));

    _this.handleSetPage = _this.handleSetPage.bind(_this);
    _this.handleNextPage = _this.handleNextPage.bind(_this);
    _this.handlePrevPage = _this.handlePrevPage.bind(_this);
    return _this;
  }

  _createClass(HistoryViewer, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var prevPage = prevProps.page;
      var _props = this.props,
          currentPage = _props.page,
          versions = _props.actions.versions;


      if (prevPage !== currentPage && typeof versions.goToPage === 'function') {
        versions.goToPage(currentPage);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var onSelect = this.props.onSelect;

      if (typeof onSelect === 'function') {
        onSelect(false);
      }
    }
  }, {
    key: 'getVersions',
    value: function getVersions() {
      var versions = this.props.versions;

      var edges = versions && versions.SnapshotHistory && versions.SnapshotHistory.edges ? versions.SnapshotHistory.edges : [];
      return edges.map(function (_ref) {
        var node = _ref.node;

        return _extends({}, node, node.OriginVersion, {
          AbsoluteLink: node.IsFullVersion ? node.OriginVersion.AbsoluteLink : versions.AbsoluteLink,
          Version: node.IsFullVersion ? node.OriginVersion.Version : node.BaseVersion
        });
      });
    }
  }, {
    key: 'getContainerClasses',
    value: function getContainerClasses() {
      var _props2 = this.props,
          compare = _props2.compare,
          isInGridField = _props2.isInGridField;

      return (0, _classnames2.default)('history-viewer', 'fill-height', {
        'history-viewer__compare-mode': compare,
        'history-viewer--no-margins': isInGridField && !this.isListView()
      });
    }
  }, {
    key: 'getLatestVersion',
    value: function getLatestVersion() {
      var currentVersion = this.props.currentVersion;

      if (currentVersion && currentVersion.LatestDraftVersion === true) {
        return currentVersion;
      }

      var latestDraftVersion = this.getVersions().filter(function (version) {
        return version.LatestDraftVersion === true;
      });

      if (latestDraftVersion.length) {
        return latestDraftVersion[0];
      }

      return null;
    }
  }, {
    key: 'isListView',
    value: function isListView() {
      var _props3 = this.props,
          compare = _props3.compare,
          currentVersion = _props3.currentVersion;

      if (!currentVersion) {
        return true;
      }

      if (!compare) {
        return false;
      }

      if (compare.versionFrom && !compare.versionTo) {
        return true;
      }

      return false;
    }
  }, {
    key: 'handleSetPage',
    value: function handleSetPage(page) {
      var onSetPage = this.props.onSetPage;

      if (typeof onSetPage === 'function') {
        onSetPage(page + 1);
      }
    }
  }, {
    key: 'handleNextPage',
    value: function handleNextPage() {
      var page = this.props.page;

      this.handleSetPage(page);
    }
  }, {
    key: 'handlePrevPage',
    value: function handlePrevPage() {
      var page = this.props.page;

      var currentPage = page - 1;
      if (currentPage < 1) {
        this.handleSetPage(currentPage);
        return;
      }
      this.handleSetPage(currentPage - 1);
    }
  }, {
    key: 'compareModeAvailable',
    value: function compareModeAvailable() {
      return this.getVersions().length > 1;
    }
  }, {
    key: 'renderVersionDetail',
    value: function renderVersionDetail() {
      var _this2 = this;

      var _props4 = this.props,
          currentVersion = _props4.currentVersion,
          isPreviewable = _props4.isPreviewable,
          recordId = _props4.recordId,
          recordClass = _props4.recordClass,
          typeName = _props4.typeName,
          schemaUrl = _props4.schemaUrl,
          VersionDetailComponent = _props4.VersionDetailComponent,
          compare = _props4.compare,
          _props4$compare = _props4.compare,
          _props4$compare$versi = _props4$compare.versionFrom,
          versionFrom = _props4$compare$versi === undefined ? false : _props4$compare$versi,
          _props4$compare$versi2 = _props4$compare.versionTo,
          versionTo = _props4$compare$versi2 === undefined ? false : _props4$compare$versi2,
          previewState = _props4.previewState;

      var schemaVersionReplacements = {
        ':id': recordId,
        ':class': recordClass,
        ':date': '',
        ':version': ''
      };

      schemaVersionReplacements[':date'] = currentVersion.LastEdited;

      var schemaCompareReplacements = {
        ':id': recordId,
        ':class': recordClass,
        ':from': versionFrom.Version || 0,
        ':to': versionTo.Version || 0
      };
      var schemaSearch = compare ? /:id|:class|:from|:to/g : /:id|:class|:version|:date/g;
      var schemaReplacements = compare ? schemaCompareReplacements : schemaVersionReplacements;

      var version = compare ? versionFrom : currentVersion;
      var latestVersion = this.getLatestVersion();
      var props = {
        isLatestVersion: !compare && latestVersion && latestVersion.Version === version.Version,
        isPreviewable: isPreviewable,
        recordId: recordId,
        typeName: typeName,
        schemaUrl: schemaUrl.replace(schemaSearch, function (match) {
          return schemaReplacements[match];
        }),
        version: version,
        compare: compare,
        compareModeAvailable: this.compareModeAvailable(),
        previewState: previewState
      };

      return _react2.default.createElement(
        _reactResizeAware2.default,
        {
          className: this.getContainerClasses(),
          onResize: function onResize(_ref2) {
            var width = _ref2.width;
            return _this2.props.onResize(width);
          }
        },
        _react2.default.createElement(VersionDetailComponent, props)
      );
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      var _props5 = this.props,
          limit = _props5.limit,
          page = _props5.page,
          versions = _props5.versions;


      if (!versions) {
        return null;
      }

      var totalVersions = versions.SnapshotHistory ? versions.SnapshotHistory.pageInfo.totalCount : 0;

      if (totalVersions <= limit) {
        return null;
      }

      var props = {
        setPage: this.handleSetPage,
        maxPage: Math.ceil(totalVersions / limit),
        next: this.handleNextPage,
        nextText: _i18n2.default._t('HistoryViewer.NEXT', 'Next'),
        previous: this.handlePrevPage,
        previousText: _i18n2.default._t('HistoryViewer.PREVIOUS', 'Previous'),

        currentPage: page - 1,
        useGriddleStyles: false
      };

      return _react2.default.createElement(
        'div',
        { className: 'griddle-footer' },
        _react2.default.createElement(_griddleReact2.default.GridPagination, props)
      );
    }
  }, {
    key: 'renderComparisonSelectionList',
    value: function renderComparisonSelectionList() {
      var _props6 = this.props,
          versionFrom = _props6.compare.versionFrom,
          ListComponent = _props6.ListComponent;


      if (!versionFrom) {
        return null;
      }

      var selectionListClasses = (0, _classnames2.default)('history-viewer__table', 'history-viewer__table--comparison-selected');

      return _react2.default.createElement(ListComponent, {
        versions: [versionFrom],
        extraClass: selectionListClasses
      });
    }
  }, {
    key: 'renderVersionList',
    value: function renderVersionList() {
      var _props7 = this.props,
          isInGridField = _props7.isInGridField,
          ListComponent = _props7.ListComponent,
          CompareWarningComponent = _props7.CompareWarningComponent,
          compare = _props7.compare,
          hasVersionFrom = _props7.compare.versionFrom;


      return _react2.default.createElement(
        'div',
        { className: this.getContainerClasses() },
        _react2.default.createElement(CompareWarningComponent, null),
        _react2.default.createElement(
          'div',
          { className: isInGridField ? '' : 'panel panel--padded panel--scrollable' },
          this.renderComparisonSelectionList(),
          _react2.default.createElement(ListComponent, {
            versions: this.getVersions(),
            showHeader: !compare || compare && !hasVersionFrom,
            compareModeAvailable: this.compareModeAvailable()
          }),
          _react2.default.createElement(
            'div',
            { className: 'history-viewer__pagination' },
            this.renderPagination()
          )
        )
      );
    }
  }, {
    key: 'renderCompareMode',
    value: function renderCompareMode() {
      var compare = this.props.compare;


      if (compare && compare.versionFrom && compare.versionTo) {
        return this.renderVersionDetail();
      }
      return this.renderVersionList();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props8 = this.props,
          loading = _props8.loading,
          compare = _props8.compare,
          previewMode = _props8.previewMode;


      if (loading) {
        return _react2.default.createElement(_Loading2.default, null);
      }

      if (this.compareModeAvailable() && compare) {
        return this.renderCompareMode();
      }

      if (previewMode) {
        return this.renderVersionDetail();
      }

      return this.renderVersionList();
    }
  }]);

  return HistoryViewer;
}(_react.Component);

HistoryViewer.propTypes = {
  contextKey: _propTypes2.default.string,
  limit: _propTypes2.default.number,
  ListComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
  offset: _propTypes2.default.number,
  recordId: _propTypes2.default.number.isRequired,
  recordClass: _propTypes2.default.string.isRequired,
  typeName: _propTypes2.default.string.isRequired,
  currentVersion: _propTypes2.default.oneOfType([_propTypes2.default.bool, _versionType.versionType]),
  compare: _compareType.compareType,
  isInGridField: _propTypes2.default.bool,
  isPreviewable: _propTypes2.default.bool,
  VersionDetailComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
  CompareWarningComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
  versions: _propTypes2.default.shape({
    Versions: _propTypes2.default.shape({
      pageInfo: _propTypes2.default.shape({
        totalCount: _propTypes2.default.number
      }),
      edges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        node: _versionType.versionType
      }))
    })
  }),
  page: _propTypes2.default.number,
  schemaUrl: _propTypes2.default.string,

  previewState: _propTypes2.default.oneOf(['edit', 'preview', 'split']),
  actions: _propTypes2.default.object,
  onSelect: _propTypes2.default.func,
  onSetPage: _propTypes2.default.func,
  onResize: _propTypes2.default.func
};

HistoryViewer.defaultProps = {
  compare: {},
  contextKey: '',
  currentVersion: false,
  isInGridField: false,
  isPreviewable: false,
  typeName: '',
  schemaUrl: '',
  versions: {
    Versions: {
      pageInfo: {
        totalCount: 0
      },
      edges: []
    }
  }
};

function mapStateToProps(state) {
  var _state$versionedAdmin = state.versionedAdmin.historyViewer,
      currentPage = _state$versionedAdmin.currentPage,
      currentVersion = _state$versionedAdmin.currentVersion,
      previewMode = _state$versionedAdmin.previewMode,
      compare = _state$versionedAdmin.compare;
  var activeState = state.viewMode.activeState;


  return {
    page: currentPage,
    currentVersion: currentVersion,
    compare: compare,
    previewMode: previewMode,
    previewState: activeState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelect: function onSelect(id) {
      dispatch((0, _HistoryViewerActions.showVersion)(id));
      dispatch((0, _HistoryViewerActions.clearMessages)());
    },
    onSetPage: function onSetPage(page) {
      dispatch((0, _HistoryViewerActions.setCurrentPage)(page));
    },
    onResize: function onResize(panelWidth) {
      dispatch(viewModeActions.enableOrDisableSplitMode(panelWidth));
    }
  };
}

exports.Component = HistoryViewer;
exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _HistoryViewerConfig2.default, (0, _Injector.inject)(['SnapshotHistoryViewerVersionList', 'SnapshotHistoryViewerVersionDetail', 'SnapshotHistoryViewerCompareWarning'], function (ListComponent, VersionDetailComponent, CompareWarningComponent) {
  return {
    ListComponent: ListComponent,
    VersionDetailComponent: VersionDetailComponent,
    CompareWarningComponent: CompareWarningComponent
  };
}, function (_ref3) {
  var contextKey = _ref3.contextKey;
  return 'VersionedAdmin.HistoryViewer.' + contextKey;
}))(HistoryViewer);

/***/ }),

/***/ "./client/src/components/HistoryViewer/HistoryViewerCompareWarning.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

var _HistoryViewerActions = __webpack_require__("./client/src/state/historyviewer/HistoryViewerActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HistoryViewerCompareWarning = function (_Component) {
  _inherits(HistoryViewerCompareWarning, _Component);

  function HistoryViewerCompareWarning(props) {
    _classCallCheck(this, HistoryViewerCompareWarning);

    var _this = _possibleConstructorReturn(this, (HistoryViewerCompareWarning.__proto__ || Object.getPrototypeOf(HistoryViewerCompareWarning)).call(this, props));

    _this.handleDismissCompare = _this.handleDismissCompare.bind(_this);
    return _this;
  }

  _createClass(HistoryViewerCompareWarning, [{
    key: 'handleDismissCompare',
    value: function handleDismissCompare() {
      this.props.onDismissCompare();
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.isCompare) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'history-viewer__compare-notice alert alert-info' },
        _react2.default.createElement(
          'span',
          { className: 'notice-message' },
          _react2.default.createElement(
            'strong',
            null,
            _i18n2.default._t('HistoryViewer.COMPARE_MODE', 'Compare mode'),
            ': '
          ),
          _i18n2.default._t('HistoryViewer.SELECT_PROMPT', 'Select two versions')
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn dismiss-button font-icon-cancel', onClick: this.handleDismissCompare },
          _i18n2.default._t('HistoryViewer.EXIT', 'Exit')
        )
      );
    }
  }]);

  return HistoryViewerCompareWarning;
}(_react.Component);

HistoryViewerCompareWarning.propTypes = {
  isCompare: _propTypes2.default.bool.isRequired
};

function mapStateToProps(state) {
  var compare = state.versionedAdmin.historyViewer.compare;


  return {
    isCompare: !!compare
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDismissCompare: function onDismissCompare() {
      dispatch((0, _HistoryViewerActions.setCompareMode)(false));
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HistoryViewerCompareWarning);

/***/ }),

/***/ "./client/src/components/HistoryViewer/HistoryViewerHeading.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(10);

var _HistoryViewerActions = __webpack_require__("./client/src/state/historyviewer/HistoryViewerActions.js");

var _redux = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HistoryViewerHeading = function (_Component) {
  _inherits(HistoryViewerHeading, _Component);

  function HistoryViewerHeading(props) {
    _classCallCheck(this, HistoryViewerHeading);

    var _this = _possibleConstructorReturn(this, (HistoryViewerHeading.__proto__ || Object.getPrototypeOf(HistoryViewerHeading)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.handleCompareModeChange = _this.handleCompareModeChange.bind(_this);

    _this.state = {
      dropdownOpen: false
    };
    return _this;
  }

  _createClass(HistoryViewerHeading, [{
    key: 'toggle',
    value: function toggle() {
      this.setState(function (prevState) {
        return {
          dropdownOpen: !prevState.dropdownOpen
        };
      });
    }
  }, {
    key: 'handleCompareModeChange',
    value: function handleCompareModeChange() {
      var _props = this.props,
          compareModeSelected = _props.compareModeSelected,
          onCompareModeUnselect = _props.onCompareModeUnselect,
          onCompareModeSelect = _props.onCompareModeSelect;

      if (compareModeSelected) {
        onCompareModeUnselect();
      } else {
        onCompareModeSelect();
      }
    }
  }, {
    key: 'renderDropdown',
    value: function renderDropdown() {
      var _props2 = this.props,
          compareModeAvailable = _props2.compareModeAvailable,
          compareModeSelected = _props2.compareModeSelected;
      var dropdownOpen = this.state.dropdownOpen;


      if (!compareModeAvailable) {
        return null;
      }

      return _react2.default.createElement(
        _reactstrap.Dropdown,
        {
          isOpen: dropdownOpen,
          toggle: this.toggle,
          className: 'history-viewer__actions-dropdown'
        },
        _react2.default.createElement(_reactstrap.DropdownToggle, { className: 'font-icon-sliders' }),
        _react2.default.createElement(
          _reactstrap.DropdownMenu,
          { right: true },
          _react2.default.createElement(
            'div',
            { className: 'form-check' },
            _react2.default.createElement('input', {
              id: 'history-viewer-compare-two',
              type: 'checkbox',
              className: 'no-change-track history-viewer-heading__compare-mode-checkbox',
              checked: compareModeSelected,
              onChange: this.handleCompareModeChange
            }),
            _react2.default.createElement(
              'label',
              { className: 'form-check-label', htmlFor: 'history-viewer-compare-two' },
              _i18n2.default._t('HistoryViewerHeading.COMPARE_VERSIONS', 'Compare two versions')
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        { className: 'history-viewer__heading', role: 'row' },
        _react2.default.createElement(
          'span',
          { className: 'history-viewer__version-state', role: 'columnheader' },
          _i18n2.default._t('HistoryViewer.Date', 'Date')
        ),
        _react2.default.createElement(
          'span',
          { className: 'history-viewer__author', role: 'columnheader' },
          _i18n2.default._t('HistoryViewer.Author', 'Author')
        ),
        _react2.default.createElement(
          'span',
          { className: 'history-viewer__actions', role: 'columnheader' },
          this.renderDropdown()
        )
      );
    }
  }]);

  return HistoryViewerHeading;
}(_react.Component);

HistoryViewerHeading.propTypes = {
  compareModeAvailable: _propTypes2.default.bool,
  compareModeSelected: _propTypes2.default.bool,
  onCompareModeSelect: _propTypes2.default.func,
  onCompareModeUnselect: _propTypes2.default.func
};

HistoryViewerHeading.defaultProps = {
  compareModeAvailable: true
};

function mapStateToProps(state) {
  return {
    compareModeSelected: !!state.versionedAdmin.historyViewer.compare
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCompareModeSelect: function onCompareModeSelect() {
      dispatch((0, _HistoryViewerActions.setCompareMode)(true));
    },
    onCompareModeUnselect: function onCompareModeUnselect() {
      dispatch((0, _HistoryViewerActions.setCompareMode)(false));
    }
  };
}

exports.Component = HistoryViewerHeading;
exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(HistoryViewerHeading);

/***/ }),

/***/ "./client/src/components/HistoryViewer/HistoryViewerSnapshot.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Injector = __webpack_require__(2);

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

var _redux = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _HistoryViewerActions = __webpack_require__("./client/src/state/historyviewer/HistoryViewerActions.js");

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _versionType = __webpack_require__("./client/src/types/versionType.js");

var _getDateFromVersion = __webpack_require__("./client/src/helpers/getDateFromVersion.js");

var _getDateFromVersion2 = _interopRequireDefault(_getDateFromVersion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HistoryViewerSnapshot = function (_Component) {
  _inherits(HistoryViewerSnapshot, _Component);

  function HistoryViewerSnapshot(props) {
    _classCallCheck(this, HistoryViewerSnapshot);

    var _this = _possibleConstructorReturn(this, (HistoryViewerSnapshot.__proto__ || Object.getPrototypeOf(HistoryViewerSnapshot)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleActivity = _this.handleActivity.bind(_this);
    return _this;
  }

  _createClass(HistoryViewerSnapshot, [{
    key: 'getClassNames',
    value: function getClassNames() {
      var _props = this.props,
          extraClass = _props.extraClass,
          initial = _props.initial,
          isComparing = _props.isComparing,
          isActive = _props.isActive;

      var defaultClasses = {
        'history-viewer__row': true,
        'history-viewer__snapshot': true,
        'history-viewer__row--current': isActive,
        'history-viewer__snapshot--initial': initial,
        'history-viewer__snapshot--muted': isComparing
      };
      return (0, _classnames2.default)(defaultClasses, extraClass);
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var _props2 = this.props,
          onSelect = _props2.onSelect,
          version = _props2.version,
          isActive = _props2.isActive;

      if (isActive) {
        return false;
      }
      onSelect(version);
      return false;
    }
  }, {
    key: 'handleClose',
    value: function handleClose(e) {
      e.stopPropagation();
      this.props.onSelect(false);
      return false;
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(event) {
      if (event.keyCode === 13) {
        this.handleClick();
      }
    }
  }, {
    key: 'handleActivity',
    value: function handleActivity(event) {
      event.preventDefault();
      alert('activity');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          version = _props3.version,
          FormActionComponent = _props3.FormActionComponent,
          isActive = _props3.isActive;
      var _version$Author = version.Author,
          FirstName = _version$Author.FirstName,
          Surname = _version$Author.Surname;

      var author = (FirstName || '') + ' ' + (Surname || '');
      var rowTitle = _i18n2.default._t('HistoryViewerSnapshot.GO_TO_SNAPSHOT', 'Go to snapshot at {date}');

      return _react2.default.createElement(
        'li',
        { className: this.getClassNames(), role: 'row' },
        _react2.default.createElement(
          'span',
          {
            className: 'history-viewer__version-link',
            role: 'button',
            title: _i18n2.default.inject(rowTitle, { date: version.LastEdited }),
            onClick: this.handleClick,
            onKeyUp: this.handleKeyUp,
            tabIndex: 0
          },
          _react2.default.createElement(
            'span',
            { className: 'history-viewer__message', role: 'cell' },
            _react2.default.createElement(
              'span',
              null,
              version.ActivityAgo
            ),
            ' ',
            _react2.default.createElement(
              'small',
              { className: 'text-muted' },
              (0, _getDateFromVersion2.default)(version)
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'history-viewer__author', role: 'cell' },
            author
          ),
          _react2.default.createElement(
            'span',
            { className: 'history-viewer__actions', role: 'cell' },
            _react2.default.createElement(FormActionComponent, {
              onClick: this.handleActivity,
              icon: 'pulse',
              attributes: {
                title: _i18n2.default._t('HistoryViewerVersion.SHOW_ACTIVITY', 'Show activity')
              },
              title: null,
              buttonStyle: 'outline-dark',
              extraClass: 'history-viewer__activity-button'
            }),
            isActive && _react2.default.createElement(FormActionComponent, {
              onClick: this.handleClose,
              icon: 'cancel',

              attributes: {
                title: _i18n2.default._t('HistoryViewerVersion.CLOSE', 'Close')
              },
              title: null,
              buttonStyle: 'outline-light',
              extraClass: 'history-viewer__close-button'
            })
          )
        )
      );
    }
  }]);

  return HistoryViewerSnapshot;
}(_react.Component);

HistoryViewerSnapshot.propTypes = {
  isActive: _propTypes2.default.bool,
  version: _versionType.versionType,
  initial: _propTypes2.default.bool,
  isComparing: _propTypes2.default.bool
};

function mapDispatchToProps(dispatch) {
  return {
    onSelect: function onSelect(selectedVersion) {
      var func = selectedVersion.IsFullVersion ? _HistoryViewerActions.showVersion : _HistoryViewerActions.showDate;
      dispatch(func(selectedVersion));
      dispatch((0, _HistoryViewerActions.clearMessages)());
    }
  };
}

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(null, mapDispatchToProps), (0, _Injector.inject)(['FormAction'], function (FormAction) {
  return {
    FormActionComponent: FormAction
  };
}))(HistoryViewerSnapshot);

/***/ }),

/***/ "./client/src/components/HistoryViewer/HistoryViewerSnapshotState.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HistoryViewerVersionState = __webpack_require__("./client/src/components/HistoryViewer/HistoryViewerVersionState.js");

var _Injector = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HistoryViewerSnapshotState = function (_VersionedState) {
  _inherits(HistoryViewerSnapshotState, _VersionedState);

  function HistoryViewerSnapshotState() {
    _classCallCheck(this, HistoryViewerSnapshotState);

    return _possibleConstructorReturn(this, (HistoryViewerSnapshotState.__proto__ || Object.getPrototypeOf(HistoryViewerSnapshotState)).apply(this, arguments));
  }

  _createClass(HistoryViewerSnapshotState, [{
    key: 'translateType',
    value: function translateType(type) {
      var _window = window,
          i18n = _window.i18n;

      switch (type) {
        case 'MODIFIED':
          return i18n._t('HistoryViewerSnapshot.MODIFIED', 'Edited');
        case 'DELETED':
          return i18n._t('HistoryViewerSnapshot.DELETED', 'Archived');
        case 'CREATED':
          return i18n._t('HistoryViewerSnapshot.CREATED', 'Created');
        case 'ADDED':
          return i18n._t('HistoryViewerSnapshot.ADDED', 'Added');
        case 'REMOVED':
          return i18n._t('HistoryViewerSnapshot.REMOVED', 'Removed');
        case 'UNPUBLISHED':
          return i18n._t('HistoryViewerSnapshot.UNPUBLISHED', 'Unpublished');
        case 'PUBLISHED':
          return i18n._t('HistoryViewerSnapshot.PUBLISHED', 'Published');
        default:
          return '';
      }
    }
  }, {
    key: 'getPublishedState',
    value: function getPublishedState() {
      var _props$version = this.props.version,
          ActivityDescription = _props$version.ActivityDescription,
          ActivityType = _props$version.ActivityType;


      var prefix = this.translateType(ActivityType);
      var lines = ActivityDescription.split('\n');
      if (lines.length > 1) {
        return lines.map(function (l, i) {
          return React.createElement(
            'div',
            { key: i },
            l
          );
        });
      }
      return prefix + ' ' + ActivityDescription;
    }
  }, {
    key: 'getBadges',
    value: function getBadges() {
      return null;
    }
  }]);

  return HistoryViewerSnapshotState;
}(_HistoryViewerVersionState.Component);

exports.Component = HistoryViewerSnapshotState;
exports.default = (0, _Injector.inject)(['Badge'], function (BadgeComponent) {
  return { BadgeComponent: BadgeComponent };
})(HistoryViewerSnapshotState);

/***/ }),

/***/ "./client/src/components/HistoryViewer/HistoryViewerToolbar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

var _Injector = __webpack_require__(2);

var _HistoryViewerActions = __webpack_require__("./client/src/state/historyviewer/HistoryViewerActions.js");

var _reactstrap = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HistoryViewerToolbar = function (_Component) {
  _inherits(HistoryViewerToolbar, _Component);

  function HistoryViewerToolbar(props) {
    _classCallCheck(this, HistoryViewerToolbar);

    var _this = _possibleConstructorReturn(this, (HistoryViewerToolbar.__proto__ || Object.getPrototypeOf(HistoryViewerToolbar)).call(this, props));

    _this.handleRevert = _this.handleRevert.bind(_this);
    _this.handleToggleRevertTooltip = _this.handleToggleRevertTooltip.bind(_this);

    _this.state = {
      isReverting: false,
      revertTooltipOpen: false,
      tooltipTimer: null
    };
    return _this;
  }

  _createClass(HistoryViewerToolbar, [{
    key: 'handleRevert',
    value: function handleRevert(rollback) {
      var _props = this.props,
          onAfterRevert = _props.onAfterRevert,
          recordId = _props.recordId,
          versionId = _props.versionId;


      this.setState({ isReverting: true });

      var handler = typeof onAfterRevert === 'function' ? onAfterRevert : function () {};
      return rollback({ variables: {
          id: recordId,
          toVersion: versionId
        } }).then(function () {
        return handler(versionId);
      });
    }
  }, {
    key: 'handleToggleRevertTooltip',
    value: function handleToggleRevertTooltip() {
      this.setState(function (state) {
        return {
          revertTooltipOpen: !state.revertTooltipOpen
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          FormActionComponent = _props2.FormActionComponent,
          ViewModeComponent = _props2.ViewModeComponent,
          RollbackMutation = _props2.RollbackMutation,
          isLatestVersion = _props2.isLatestVersion,
          isPreviewable = _props2.isPreviewable,
          canRollback = _props2.canRollback,
          rollbackMessage = _props2.rollbackMessage,
          typeName = _props2.typeName;
      var _state = this.state,
          isReverting = _state.isReverting,
          revertTooltipOpen = _state.revertTooltipOpen;


      var revertButtonTitle = isReverting ? _i18n2.default._t('HistoryViewerToolbar.REVERT_IN_PROGRESS', 'Revert in progress...') : _i18n2.default._t('HistoryViewerToolbar.REVERT_UNAVAILABLE', 'Unavailable for the current version');

      return _react2.default.createElement(
        RollbackMutation,
        { typeName: typeName },
        function (rollback) {
          return _react2.default.createElement(
            'div',
            { className: 'toolbar toolbar--south' },
            _react2.default.createElement(
              'div',
              { className: 'btn-toolbar' },
              _react2.default.createElement(FormActionComponent, {
                id: 'HistoryRevertButton',
                onClick: function onClick() {
                  return _this2.handleRevert(rollback);
                },
                icon: 'back-in-time',
                name: 'revert',
                attributes: {
                  title: revertButtonTitle
                },
                data: {
                  buttonStyle: 'warning'
                },
                disabled: isLatestVersion || isReverting || !canRollback,
                loading: isReverting,
                title: _i18n2.default._t('HistoryViewerToolbar.REVERT_TO_VERSION', 'Revert to this version')
              }),
              !canRollback && _react2.default.createElement(
                _reactstrap.Tooltip,
                {
                  trigger: 'click hover focus',
                  placement: 'top',
                  isOpen: revertTooltipOpen,
                  toggle: _this2.handleToggleRevertTooltip,
                  target: 'HistoryRevertButton'
                },
                rollbackMessage
              ),
              isPreviewable && _react2.default.createElement(ViewModeComponent, { id: 'history-viewer-edit-mode', area: 'edit' })
            )
          );
        }
      );
    }
  }]);

  return HistoryViewerToolbar;
}(_react.Component);

HistoryViewerToolbar.propTypes = {
  actions: _propTypes2.default.shape({
    revertToVersion: _propTypes2.default.func.isRequired
  }),
  FormActionComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
  ViewModeComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
  isLatestVersion: _propTypes2.default.bool,
  isPreviewable: _propTypes2.default.bool,
  onAfterRevert: _propTypes2.default.func,
  recordId: _propTypes2.default.number.isRequired,
  typeName: _propTypes2.default.string.isRequired,
  versionId: _propTypes2.default.number.isRequired,
  canRollback: _propTypes2.default.bool,
  rollbackMessage: _propTypes2.default.string
};

HistoryViewerToolbar.defaultProps = {
  isLatestVersion: false,
  isPreviewable: false,
  canRollback: true
};

function mapDispatchToProps(dispatch) {
  return {
    onAfterRevert: function onAfterRevert(versionId) {
      dispatch((0, _HistoryViewerActions.addMessage)(_i18n2.default.sprintf(_i18n2.default._t('HistoryViewerToolbar.REVERTED_MESSAGE', 'Successfully reverted to version %s'), versionId)));
      dispatch((0, _HistoryViewerActions.showList)());
    }
  };
}

exports.Component = HistoryViewerToolbar;
exports.default = (0, _redux.compose)((0, _reactRedux.connect)(null, mapDispatchToProps), (0, _Injector.inject)(['FormAction', 'ViewModeToggle', 'SnapshotRollbackMutation'], function (FormActionComponent, ViewModeComponent, RollbackMutation) {
  return {
    FormActionComponent: FormActionComponent,
    ViewModeComponent: ViewModeComponent,
    RollbackMutation: RollbackMutation
  };
}, function () {
  return 'VersionedAdmin.HistoryViewer.Toolbar';
}))(HistoryViewerToolbar);

/***/ }),

/***/ "./client/src/components/HistoryViewer/HistoryViewerVersion.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _Injector = __webpack_require__(2);

var _versionType = __webpack_require__("./client/src/types/versionType.js");

var _compareType = __webpack_require__("./client/src/types/compareType.js");

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _HistoryViewerActions = __webpack_require__("./client/src/state/historyviewer/HistoryViewerActions.js");

var _getDateFromVersion = __webpack_require__("./client/src/helpers/getDateFromVersion.js");

var _getDateFromVersion2 = _interopRequireDefault(_getDateFromVersion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HistoryViewerVersion = function (_Component) {
  _inherits(HistoryViewerVersion, _Component);

  function HistoryViewerVersion(props) {
    _classCallCheck(this, HistoryViewerVersion);

    var _this = _possibleConstructorReturn(this, (HistoryViewerVersion.__proto__ || Object.getPrototypeOf(HistoryViewerVersion)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleCompare = _this.handleCompare.bind(_this);
    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    _this.handleActivity = _this.handleActivity.bind(_this);
    return _this;
  }

  _createClass(HistoryViewerVersion, [{
    key: 'getAuthor',
    value: function getAuthor() {
      var version = this.props.version;

      var member = {};

      if (version.Published && version.Publisher) {
        member = version.Publisher;
      } else if (version.Author) {
        member = version.Author;
      }

      return (member.FirstName || '') + ' ' + (member.Surname || '');
    }
  }, {
    key: 'getClassNames',
    value: function getClassNames() {
      var _props = this.props,
          extraClass = _props.extraClass,
          isActive = _props.isActive,
          compare = _props.compare,
          _props$compare = _props.compare,
          compareFrom = _props$compare.compareFrom,
          compareTo = _props$compare.compareTo;

      var defaultClasses = {
        'history-viewer__row': true,
        'history-viewer__row--current': isActive,
        'history-viewer__row--comparison-selected': compare && !(compareFrom && compareTo)
      };
      return (0, _classnames2.default)(defaultClasses, extraClass);
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(event) {
      if (event.keyCode === 13) {
        this.handleClick();
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var _props2 = this.props,
          onSelect = _props2.onSelect,
          version = _props2.version,
          isActive = _props2.isActive,
          compare = _props2.compare;

      if (isActive) {
        return false;
      }
      onSelect(version, compare);
      return false;
    }
  }, {
    key: 'handleCompare',
    value: function handleCompare() {
      var _props3 = this.props,
          onCompareMode = _props3.onCompareMode,
          version = _props3.version;

      onCompareMode(version);
    }
  }, {
    key: 'handleActivity',
    value: function handleActivity(event) {
      event.preventDefault();
      alert('activity version');
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      var _props4 = this.props,
          onSelect = _props4.onSelect,
          version = _props4.version,
          compare = _props4.compare,
          versionFrom = _props4.compare.versionFrom;

      if (versionFrom && versionFrom.Version === version.Version) {
        delete compare.versionFrom;
      }
      onSelect(0, compare);
    }
  }, {
    key: 'renderCompareButton',
    value: function renderCompareButton() {
      var _props5 = this.props,
          compareModeAvailable = _props5.compareModeAvailable,
          compare = _props5.compare,
          FormActionComponent = _props5.FormActionComponent;

      var translatedText = _i18n2.default._t('HistoryViewerVersion.COMPARE', 'Compare');

      if (!compareModeAvailable || compare) {
        return null;
      }

      return _react2.default.createElement(
        FormActionComponent,
        {
          onClick: this.handleCompare,
          title: translatedText,
          buttonStyle: 'outline-light',
          extraClass: 'history-viewer__compare-button'
        },
        translatedText
      );
    }
  }, {
    key: 'renderActivityButton',
    value: function renderActivityButton() {
      var FormActionComponent = this.props.FormActionComponent;


      return _react2.default.createElement(FormActionComponent, {
        onClick: this.handleActivity,
        icon: 'pulse',
        attributes: {
          title: _i18n2.default._t('HistoryViewerVersion.SHOW_ACTIVITY', 'Show activity')
        },
        title: null,
        buttonStyle: 'outline-dark',
        extraClass: 'history-viewer__activity-button'
      });
    }
  }, {
    key: 'renderClearButton',
    value: function renderClearButton() {
      var _props6 = this.props,
          FormActionComponent = _props6.FormActionComponent,
          isActive = _props6.isActive;


      if (!isActive) {
        return null;
      }

      return _react2.default.createElement(FormActionComponent, {
        onClick: this.handleClose,
        icon: 'cancel',

        attributes: {
          title: _i18n2.default._t('HistoryViewerVersion.CLOSE', 'Close')
        },
        title: null,
        buttonStyle: 'outline-light',
        extraClass: 'history-viewer__close-button'
      });
    }
  }, {
    key: 'renderSelectedMessage',
    value: function renderSelectedMessage() {
      var isActive = this.props.isActive;


      if (!isActive) {
        return null;
      }

      return _react2.default.createElement(
        'span',
        { className: 'history-viewer__selected-message' },
        _i18n2.default._t('HistoryViewerVersion.SELECTED', 'Already selected')
      );
    }
  }, {
    key: 'renderActions',
    value: function renderActions() {
      var _props7 = this.props,
          isActive = _props7.isActive,
          compare = _props7.compare;


      if (!isActive && !compare) {
        return _react2.default.createElement(
          'span',
          { className: 'history-viewer__actions', role: 'cell' },
          this.renderActivityButton()
        );
      }

      return _react2.default.createElement(
        'span',
        { className: 'history-viewer__actions', role: 'cell' },
        this.renderActivityButton(),
        this.renderCompareButton(),
        this.renderSelectedMessage(),
        this.renderClearButton()
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props8 = this.props,
          version = _props8.version,
          isActive = _props8.isActive,
          StateComponent = _props8.StateComponent;

      var rowTitle = _i18n2.default._t('HistoryViewerVersion.GO_TO_VERSION', 'Go to version {version}');

      return _react2.default.createElement(
        'li',
        { className: this.getClassNames(), role: 'row' },
        _react2.default.createElement(
          'span',
          {
            className: 'history-viewer__version-link',
            role: 'button',
            title: _i18n2.default.inject(rowTitle, { version: version.Version }),
            onClick: this.handleClick,
            onKeyUp: this.handleKeyUp,
            tabIndex: 0
          },
          _react2.default.createElement(
            'span',
            { className: 'history-viewer__message', role: 'cell' },
            _react2.default.createElement(
              'span',
              null,
              version.ActivityAgo
            ),
            ' ',
            _react2.default.createElement(
              'small',
              { className: 'text-muted' },
              (0, _getDateFromVersion2.default)(version)
            ),
            version.ActivityType === 'PUBLISHED' && _react2.default.createElement(
              'span',
              { clasName: 'history-viewer__publish-badge' },
              _react2.default.createElement('span', { className: 'icon font-icon-rocket' }),
              ' Published'
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'history-viewer__author', role: 'cell' },
            this.getAuthor()
          ),
          this.renderActions()
        )
      );
    }
  }]);

  return HistoryViewerVersion;
}(_react.Component);

HistoryViewerVersion.propTypes = {
  extraClass: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.object]),
  version: _versionType.versionType,
  isActive: _propTypes2.default.bool,
  onSelect: _propTypes2.default.func,
  onCompareMode: _propTypes2.default.func,
  compare: _compareType.compareType,
  compareModeAvailable: _propTypes2.default.bool,
  StateComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
  FormActionComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired
};

HistoryViewerVersion.defaultProps = {
  isActive: false,
  version: _versionType.defaultVersion,
  compare: false,
  compareModeAvailable: true
};

exports.Component = HistoryViewerVersion;


function mapDispatchToProps(dispatch) {
  return {
    onSelect: function onSelect(selectedVersion, compare) {
      var versionFrom = compare.versionFrom;

      if (compare) {
        if (!versionFrom) {
          dispatch((0, _HistoryViewerActions.setCompareFrom)(selectedVersion));
        } else {
          dispatch((0, _HistoryViewerActions.setCompareTo)(selectedVersion));
        }
      } else {
        dispatch((0, _HistoryViewerActions.showVersion)(selectedVersion));
        dispatch((0, _HistoryViewerActions.clearMessages)());
      }
    },
    onCompareMode: function onCompareMode(version) {
      dispatch((0, _HistoryViewerActions.setCompareFrom)(version));
      dispatch((0, _HistoryViewerActions.setCompareMode)(true));
    }
  };
}

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(null, mapDispatchToProps), (0, _Injector.inject)(['SnapshotHistoryViewerVersionState', 'FormAction'], function (StateComponent, FormActionComponent) {
  return {
    StateComponent: StateComponent,
    FormActionComponent: FormActionComponent
  };
}, function (_ref) {
  var version = _ref.version;

  var context = 'VersionedAdmin.HistoryViewer.HistoryViewerVersion';
  if (version) {
    context += '.' + version.Version;
  }
  return context;
}))(HistoryViewerVersion);

/***/ }),

/***/ "./client/src/components/HistoryViewer/HistoryViewerVersionDetail.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _FormBuilderLoader = __webpack_require__(14);

var _FormBuilderLoader2 = _interopRequireDefault(_FormBuilderLoader);

var _Injector = __webpack_require__(2);

var _versionType = __webpack_require__("./client/src/types/versionType.js");

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HistoryViewerVersionDetail = function (_PureComponent) {
  _inherits(HistoryViewerVersionDetail, _PureComponent);

  function HistoryViewerVersionDetail() {
    _classCallCheck(this, HistoryViewerVersionDetail);

    return _possibleConstructorReturn(this, (HistoryViewerVersionDetail.__proto__ || Object.getPrototypeOf(HistoryViewerVersionDetail)).apply(this, arguments));
  }

  _createClass(HistoryViewerVersionDetail, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.toggleToolbarClass(true);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.previewState !== this.props.previewState) {
        this.toggleToolbarClass(nextProps.previewState === 'split');
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.toggleToolbarClass(false);
    }
  }, {
    key: 'getListVersions',
    value: function getListVersions() {
      var _props = this.props,
          compare = _props.compare,
          version = _props.version;

      if (this.isCompareMode()) {
        return [compare.versionTo, compare.versionFrom];
      }
      return [version];
    }
  }, {
    key: 'isPreviewable',
    value: function isPreviewable() {
      var isPreviewable = this.props.isPreviewable;

      return isPreviewable && !this.isCompareMode();
    }
  }, {
    key: 'isCompareMode',
    value: function isCompareMode() {
      var compare = this.props.compare;

      return compare && compare.versionFrom && compare.versionTo;
    }
  }, {
    key: 'toggleToolbarClass',
    value: function toggleToolbarClass() {
      var add = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var selector = document.querySelector('.CMSPageHistoryViewerController div:not(.cms-content-tools) .cms-content-header');
      var className = 'history-viewer__toolbar--condensed';

      if (selector && this.isPreviewable()) {
        if (add) {
          selector.classList.add(className);
        } else {
          selector.classList.remove(className);
        }
      }
    }
  }, {
    key: 'renderPreview',
    value: function renderPreview() {
      var _props2 = this.props,
          version = _props2.version,
          PreviewComponent = _props2.PreviewComponent,
          previewState = _props2.previewState;

      if (!this.isPreviewable() || previewState === 'edit') {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'history-viewer-preview flexbox-area-grow' },
        _react2.default.createElement(
          'div',
          { className: 'history-viewer-preview__underlay' },
          _react2.default.createElement('div', { className: 'history-viewer-preview__spinner' }),
          _i18n2.default._t('HistoryViewerVersionDetail.LOADING_PREVIEW', 'Generating preview...')
        ),
        _react2.default.createElement(PreviewComponent, {
          className: 'history-viewer-preview__frame flexbox-area-grow',
          itemLinks: {
            preview: {
              Stage: {
                href: version.AbsoluteLink + '&archiveDate=' + version.LastEdited,
                type: 'text/html'
              }
            }
          },
          itemId: version.Version
        })
      );
    }
  }, {
    key: 'renderToolbar',
    value: function renderToolbar() {
      var _props3 = this.props,
          ToolbarComponent = _props3.ToolbarComponent,
          isLatestVersion = _props3.isLatestVersion,
          recordId = _props3.recordId,
          version = _props3.version,
          typeName = _props3.typeName;


      if (this.isCompareMode()) {
        return null;
      }

      var rollbackMessage = _i18n2.default._t('HistoryViewerVersionDetail.CANNOT_ROLLBACK_SNAPSHOTS', 'You can only revert to base versions');

      return _react2.default.createElement(ToolbarComponent, {
        identifier: 'HistoryViewer.VersionDetail.Toolbar',
        isLatestVersion: isLatestVersion,
        recordId: recordId,
        typeName: typeName,
        versionId: version.Version,
        isPreviewable: this.isPreviewable(),
        canRollback: version.IsFullVersion,
        rollbackMessage: rollbackMessage
      });
    }
  }, {
    key: 'renderDetails',
    value: function renderDetails() {
      var _props4 = this.props,
          compareModeAvailable = _props4.compareModeAvailable,
          ListComponent = _props4.ListComponent,
          schemaUrl = _props4.schemaUrl,
          CompareWarningComponent = _props4.CompareWarningComponent,
          previewState = _props4.previewState,
          version = _props4.version;

      if (this.isPreviewable() && previewState === 'preview') {
        return null;
      }

      var containerClasses = ['flexbox-area-grow', 'panel', 'panel--scrollable', 'panel--padded', 'panel--padded-side'];
      var extraListClasses = {
        'history-viewer__table': true,
        'history-viewer__table--current': true,
        'history-viewer__table--compare': this.isCompareMode()
      };
      var formClasses = {
        'history-viewer__version-detail': true,
        'history-viewer__version-detail--compare': this.isCompareMode()
      };

      return _react2.default.createElement(
        'div',
        { className: 'flexbox-area-grow fill-height' },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(containerClasses) },
          _react2.default.createElement(ListComponent, {
            extraClass: (0, _classnames2.default)(extraListClasses),
            versions: this.getListVersions(),
            compareModeAvailable: compareModeAvailable
          }),
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(formClasses) },
            _react2.default.createElement(_FormBuilderLoader2.default, {
              identifier: 'HistoryViewer.VersionDetail.' + version.ID,
              schemaUrl: schemaUrl,
              refetchSchemaOnMount: false
            })
          )
        ),
        this.renderToolbar(),
        _react2.default.createElement(CompareWarningComponent, { fixed: true })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'flexbox-area-grow fill-width' },
        this.renderDetails(),
        this.renderPreview()
      );
    }
  }]);

  return HistoryViewerVersionDetail;
}(_react.PureComponent);

HistoryViewerVersionDetail.propTypes = {
  isLatestVersion: _propTypes2.default.bool,
  isPreviewable: _propTypes2.default.bool,
  ListComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
  PreviewComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  recordId: _propTypes2.default.number.isRequired,
  typeName: _propTypes2.default.string.isRequired,
  schemaUrl: _propTypes2.default.string.isRequired,
  ToolbarComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
  version: _versionType.versionType,
  compare: _propTypes2.default.oneOfType([_propTypes2.default.shape({
    versionFrom: _versionType.versionType,
    versionTo: _versionType.versionType
  }), _propTypes2.default.bool]),

  previewState: _propTypes2.default.oneOf(['edit', 'preview', 'split'])
};

HistoryViewerVersionDetail.defaultProps = {
  isLatestVersion: false,
  isPreviewable: false,
  compare: false
};

exports.Component = HistoryViewerVersionDetail;
exports.default = (0, _Injector.inject)(['SnapshotHistoryViewerVersionList', 'SnapshotHistoryViewerToolbar', 'Preview', 'SnapshotHistoryViewerCompareWarning'], function (ListComponent, ToolbarComponent, PreviewComponent, CompareWarningComponent) {
  return {
    ListComponent: ListComponent,
    ToolbarComponent: ToolbarComponent,
    PreviewComponent: PreviewComponent,
    CompareWarningComponent: CompareWarningComponent
  };
}, function (_ref, context) {
  var version = _ref.version;
  return context + '.HistoryViewerVersionDetail.' + version.Version;
})(HistoryViewerVersionDetail);

/***/ }),

/***/ "./client/src/components/HistoryViewer/HistoryViewerVersionList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(5);

var _Injector = __webpack_require__(2);

var _messageType = __webpack_require__("./client/src/types/messageType.js");

var _versionType = __webpack_require__("./client/src/types/versionType.js");

var _compareType = __webpack_require__("./client/src/types/compareType.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HistoryViewerVersionList = function (_PureComponent) {
  _inherits(HistoryViewerVersionList, _PureComponent);

  function HistoryViewerVersionList() {
    _classCallCheck(this, HistoryViewerVersionList);

    return _possibleConstructorReturn(this, (HistoryViewerVersionList.__proto__ || Object.getPrototypeOf(HistoryViewerVersionList)).apply(this, arguments));
  }

  _createClass(HistoryViewerVersionList, [{
    key: 'getClassNames',
    value: function getClassNames() {
      var _props = this.props,
          extraClass = _props.extraClass,
          showHeader = _props.showHeader;


      return (0, _classnames2.default)(extraClass, {
        table: true,
        'history-viewer__table--headerless': !showHeader
      });
    }
  }, {
    key: 'isVersionActive',
    value: function isVersionActive(version) {
      var _props2 = this.props,
          currentVersion = _props2.currentVersion,
          compare = _props2.compare,
          _props2$compare = _props2.compare,
          versionFrom = _props2$compare.versionFrom,
          versionTo = _props2$compare.versionTo;

      console.log(currentVersion);
      currentVersion && console.log(currentVersion, currentVersion.ID, version.ID);
      var isCurrent = currentVersion && currentVersion.ID === version.ID;
      var isCompareFrom = versionFrom && versionFrom.ID === version.ID;
      var isCompareTo = versionTo && versionTo.ID === version.ID;

      return !compare && isCurrent || isCompareFrom || isCompareTo;
    }
  }, {
    key: 'renderMessages',
    value: function renderMessages() {
      var _props3 = this.props,
          FormAlertComponent = _props3.FormAlertComponent,
          messages = _props3.messages;


      if (!messages.length) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'history-viewer__messages' },
        messages.map(function (data) {
          return _react2.default.createElement(FormAlertComponent, {
            key: data.id,
            type: data.type,
            value: data.message,
            closeLabel: _i18n2.default._t('HistoryViewerVersionList.CLOSE', 'Close')
          });
        })
      );
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      var _props4 = this.props,
          showHeader = _props4.showHeader,
          HeadingComponent = _props4.HeadingComponent,
          compareModeAvailable = _props4.compareModeAvailable;


      if (!showHeader) {
        return null;
      }

      var headingProps = {
        compareModeAvailable: compareModeAvailable
      };

      return _react2.default.createElement(HeadingComponent, headingProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props5 = this.props,
          VersionComponent = _props5.VersionComponent,
          SnapshotComponent = _props5.SnapshotComponent,
          versions = _props5.versions,
          compareModeAvailable = _props5.compareModeAvailable,
          compare = _props5.compare;


      return _react2.default.createElement(
        'div',
        { className: 'history-viewer__list' },
        _react2.default.createElement(
          'ul',
          { className: this.getClassNames(), role: 'table' },
          this.renderHeader(),
          versions.map(function (version, index) {
            return version.IsFullVersion ? _react2.default.createElement(VersionComponent, {
              key: version.ID + '--' + version.LastEdited,
              isActive: _this2.isVersionActive(version),
              version: version,
              compare: compare,
              compareModeAvailable: compareModeAvailable
            }) : _react2.default.createElement(SnapshotComponent, {
              isComparing: !!compare,
              key: version.ID + '--' + version.LastEdited,
              isActive: _this2.isVersionActive(version),
              version: version,
              initial: index < 1
            });
          })
        )
      );
    }
  }]);

  return HistoryViewerVersionList;
}(_react.PureComponent);

HistoryViewerVersionList.propTypes = {
  extraClass: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.object]),
  showHeader: _propTypes2.default.bool,
  FormAlertComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
  HeadingComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
  messages: _propTypes2.default.arrayOf(_messageType.messageType),
  VersionComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
  versions: _propTypes2.default.arrayOf(_versionType.versionType),
  compare: _compareType.compareType,
  compareModeAvailable: _propTypes2.default.bool
};

HistoryViewerVersionList.defaultProps = {
  compareModeAvailable: true,
  extraClass: 'history-viewer__table',
  messages: [],
  showHeader: true,
  versions: []
};

function mapStateToProps(state) {
  var _state$versionedAdmin = state.versionedAdmin.historyViewer,
      messages = _state$versionedAdmin.messages,
      compare = _state$versionedAdmin.compare,
      currentVersion = _state$versionedAdmin.currentVersion;

  return {
    messages: messages,
    compare: compare,
    currentVersion: currentVersion
  };
}

exports.Component = HistoryViewerVersionList;
exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps), (0, _Injector.inject)(['FormAlert', 'SnapshotHistoryViewerHeading', 'SnapshotHistoryViewerVersion', 'SnapshotHistoryViewerSnapshot'], function (FormAlert, HistoryViewerHeading, HistoryViewerVersion, HistoryViewerSnapshot) {
  return {
    FormAlertComponent: FormAlert,
    HeadingComponent: HistoryViewerHeading,
    VersionComponent: HistoryViewerVersion,
    SnapshotComponent: HistoryViewerSnapshot
  };
}, function () {
  return 'VersionedAdmin.HistoryViewer.HistoryViewerVersionList';
}))(HistoryViewerVersionList);

/***/ }),

/***/ "./client/src/components/HistoryViewer/HistoryViewerVersionState.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

var _versionType = __webpack_require__("./client/src/types/versionType.js");

var _Injector = __webpack_require__(2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HistoryViewerVersionState = function (_Component) {
  _inherits(HistoryViewerVersionState, _Component);

  function HistoryViewerVersionState() {
    _classCallCheck(this, HistoryViewerVersionState);

    return _possibleConstructorReturn(this, (HistoryViewerVersionState.__proto__ || Object.getPrototypeOf(HistoryViewerVersionState)).apply(this, arguments));
  }

  _createClass(HistoryViewerVersionState, [{
    key: 'getClassNames',
    value: function getClassNames() {
      var extraClass = this.props.extraClass;

      return (0, _classnames2.default)('history-viewer__version-state', extraClass);
    }
  }, {
    key: 'getPublishedState',
    value: function getPublishedState() {
      var version = this.props.version;


      if (version.Published) {
        return _i18n2.default._t('HistoryViewer.Published', 'Published');
      }
      return _i18n2.default._t('HistoryViewer.Saved', 'Saved');
    }
  }, {
    key: 'getBadges',
    value: function getBadges() {
      var _props = this.props,
          version = _props.version,
          isActive = _props.isActive,
          BadgeComponent = _props.BadgeComponent;


      if (version.LiveVersion) {
        return _react2.default.createElement(BadgeComponent, {
          status: 'success',
          message: _i18n2.default._t('HistoryViewer.BadgeLive', 'Live'),
          className: '',
          inverted: isActive
        });
      }

      return '';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        { className: this.getClassNames(), role: 'cell' },
        this.getPublishedState(),
        ' ',
        ' ',
        this.getBadges()
      );
    }
  }]);

  return HistoryViewerVersionState;
}(_react.Component);

HistoryViewerVersionState.propTypes = {
  version: _versionType.versionType,
  extraClass: _propTypes2.default.string,
  isActive: _propTypes2.default.bool,
  BadgeComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired
};

HistoryViewerVersionState.defaultProps = {
  version: _versionType.defaultVersion,
  extraClass: '',
  isActive: false
};

exports.Component = HistoryViewerVersionState;
exports.default = (0, _Injector.inject)(['Badge'], function (BadgeComponent) {
  return { BadgeComponent: BadgeComponent };
}, function (_ref) {
  var version = _ref.version;
  return 'HistoryViewer.HistoryViewerVersionState.' + version.Version;
})(HistoryViewerVersionState);

/***/ }),

/***/ "./client/src/components/HistoryViewer/RollbackMutation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(8);

var _createRollbackMutation = __webpack_require__("./client/src/graphql/createRollbackMutation.js");

var _createRollbackMutation2 = _interopRequireDefault(_createRollbackMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RollbackMutation = function RollbackMutation(_ref) {
    var typeName = _ref.typeName,
        children = _ref.children;

    var ROLLBACK = (0, _react.useMemo)(function () {
        return (0, _createRollbackMutation2.default)(typeName);
    }, [typeName]);
    return _react2.default.createElement(
        _reactApollo.Mutation,
        { mutation: ROLLBACK, refetchQueries: ['ReadSnapshots' + typeName] },
        children
    );
};

exports.default = RollbackMutation;

/***/ }),

/***/ "./client/src/components/HistoryViewer/SnapshotViewerContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _graphqlTag = __webpack_require__(7);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactApollo = __webpack_require__(8);

var _Injector = __webpack_require__(2);

var _createSnapshotsQuery = __webpack_require__("./client/src/graphql/createSnapshotsQuery.js");

var _createSnapshotsQuery2 = _interopRequireDefault(_createSnapshotsQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SnapshotViewerContainer = function SnapshotViewerContainer(_ref) {
    var typeName = _ref.typeName,
        recordId = _ref.recordId,
        limit = _ref.limit,
        page = _ref.page,
        recordClass = _ref.recordClass,
        _ref$actions = _ref.actions,
        actions = _ref$actions === undefined ? { versions: {} } : _ref$actions,
        SnapshotViewerComponent = _ref.SnapshotViewerComponent;

    var QUERY = (0, _react.useMemo)(function () {
        return (0, _createSnapshotsQuery2.default)(typeName);
    }, [typeName]);

    var variables = {
        limit: limit,
        offset: ((page || 1) - 1) * limit,
        page_id: recordId
    };
    return _react2.default.createElement(
        _reactApollo.Query,
        { query: QUERY, variables: variables, fetchPolicy: 'network-only' },
        function (_ref2) {
            var loading = _ref2.loading,
                error = _ref2.error,
                data = _ref2.data,
                refetch = _ref2.refetch;

            var readOne = null;
            if (data) {
                readOne = data['readOne' + typeName];
            }
            var versions = readOne || null;

            var errors = error && error.graphQLErrors && error.graphQLErrors.map(function (graphQLError) {
                return graphQLError.message;
            });

            var props = {
                loading: loading || !versions,
                versions: versions,
                graphQLErrors: errors,
                actions: _extends({}, actions, {
                    versions: _extends({}, versions, {
                        goToPage: function goToPage(page) {
                            refetch({
                                offset: ((page || 1) - 1) * limit,
                                limit: limit,
                                page_id: recordId
                            });
                        }
                    })
                }),
                recordId: recordId,
                recordClass: recordClass,
                typeName: typeName,
                limit: limit,
                page: page
            };

            return _react2.default.createElement(SnapshotViewerComponent, props);
        }
    );
};

SnapshotViewerContainer.propTypes = {
    typeName: _propTypes2.default.string.isRequired,
    recordId: _propTypes2.default.number.isRequired,
    limit: _propTypes2.default.number,
    page: _propTypes2.default.number,
    actions: _propTypes2.default.object
};

exports.default = (0, _Injector.inject)(['SnapshotViewer'], function (SnapshotViewerComponent) {
    return {
        SnapshotViewerComponent: SnapshotViewerComponent
    };
}, function (_ref3) {
    var contextKey = _ref3.contextKey;
    return 'VersionedAdmin.HistoryViewer.' + contextKey;
})(SnapshotViewerContainer);

/***/ }),

/***/ "./client/src/containers/HistoryViewer/HistoryViewerConfig.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Config = __webpack_require__(13);

var _Config2 = _interopRequireDefault(_Config);

var _Injector = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var historyViewerConfig = function historyViewerConfig(HistoryViewer) {
  var HistoryViewerConfigProvider = function (_React$Component) {
    _inherits(HistoryViewerConfigProvider, _React$Component);

    function HistoryViewerConfigProvider() {
      _classCallCheck(this, HistoryViewerConfigProvider);

      return _possibleConstructorReturn(this, (HistoryViewerConfigProvider.__proto__ || Object.getPrototypeOf(HistoryViewerConfigProvider)).apply(this, arguments));
    }

    _createClass(HistoryViewerConfigProvider, [{
      key: 'getConfig',
      value: function getConfig() {
        var sectionKey = 'SilverStripe\\VersionedAdmin\\Controllers\\HistoryViewerController';
        return _Config2.default.getSection(sectionKey);
      }
    }, {
      key: 'getSchemaUrlDetails',
      value: function getSchemaUrlDetails() {
        var compare = this.props.compare;

        if (compare) {
          return {
            formName: 'compareForm',
            queryParts: ['RecordVersionFrom=:from', 'RecordVersionTo=:to']
          };
        }
        return {
          formName: 'versionForm',
          queryParts: ['RecordVersion=:version', 'RecordDate=:date']
        };
      }
    }, {
      key: 'getSchemaUrl',
      value: function getSchemaUrl() {
        var config = this.getConfig();

        var _getSchemaUrlDetails = this.getSchemaUrlDetails(),
            formName = _getSchemaUrlDetails.formName,
            queryParts = _getSchemaUrlDetails.queryParts;

        var schemaUrlBase = config.form[formName].schemaUrl + '/:id';
        var schemaUrlQuery = queryParts.concat('RecordClass=:class&RecordID=:id').join('&');
        return schemaUrlBase + '?' + schemaUrlQuery;
      }
    }, {
      key: 'render',
      value: function render() {
        var props = _extends({}, this.props, {
          config: this.getConfig(),
          HistoryViewer: HistoryViewer,
          schemaUrl: this.getSchemaUrl()
        });

        return _react2.default.createElement(HistoryViewer, props);
      }
    }]);

    return HistoryViewerConfigProvider;
  }(_react2.default.Component);

  return (0, _Injector.inject)(['SnapshotHistoryViewer'])(HistoryViewerConfigProvider);
};

exports.default = historyViewerConfig;

/***/ }),

/***/ "./client/src/graphql/createRollbackMutation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  mutation rollback', '($id:ID!, $toVersion:Int!) {\n    rollback', '(\n      ID: $id\n      ToVersion: $toVersion\n    ) {\n      ID\n    }\n  }\n  '], ['\n  mutation rollback', '($id:ID!, $toVersion:Int!) {\n    rollback', '(\n      ID: $id\n      ToVersion: $toVersion\n    ) {\n      ID\n    }\n  }\n  ']);

var _reactApollo = __webpack_require__(8);

var _graphqlTag = __webpack_require__(7);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var createRollbakMutation = function createRollbakMutation(typeName) {
  return (0, _graphqlTag2.default)(_templateObject, typeName, typeName);
};

exports.default = createRollbakMutation;

/***/ }),

/***/ "./client/src/graphql/createSnapshotsQuery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    query ReadSnapshots', ' ($page_id: ID!, $limit: Int!, $offset: Int!) {\n        readOne', '(\n          ID: $page_id\n        ) {\n          ID\n          AbsoluteLink\n          SnapshotHistory (limit: $limit, offset: $offset) {\n            pageInfo {\n              totalCount\n            }\n            edges {\n              node {\n                ID\n                LastEdited\n                ActivityDescription\n                ActivityType\n                ActivityAgo\n                IsFullVersion\n                BaseVersion\n                Message\n                Author {\n                  FirstName\n                  Surname\n                }\n                OriginVersion {\n                  Version\n                  AbsoluteLink\n                  Author {\n                    FirstName\n                    Surname\n                  }\n      \n                  Published\n                  Publisher {\n                    FirstName\n                    Surname\n                  }\n                  LiveVersion\n                  LatestDraftVersion\n                }\n              }\n            }\n          }\n        }\n      }\n  \n    '], ['\n    query ReadSnapshots', ' ($page_id: ID!, $limit: Int!, $offset: Int!) {\n        readOne', '(\n          ID: $page_id\n        ) {\n          ID\n          AbsoluteLink\n          SnapshotHistory (limit: $limit, offset: $offset) {\n            pageInfo {\n              totalCount\n            }\n            edges {\n              node {\n                ID\n                LastEdited\n                ActivityDescription\n                ActivityType\n                ActivityAgo\n                IsFullVersion\n                BaseVersion\n                Message\n                Author {\n                  FirstName\n                  Surname\n                }\n                OriginVersion {\n                  Version\n                  AbsoluteLink\n                  Author {\n                    FirstName\n                    Surname\n                  }\n      \n                  Published\n                  Publisher {\n                    FirstName\n                    Surname\n                  }\n                  LiveVersion\n                  LatestDraftVersion\n                }\n              }\n            }\n          }\n        }\n      }\n  \n    ']);

var _graphqlTag = __webpack_require__(7);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var createSnapshotsQuery = function createSnapshotsQuery(typeName) {
  return (0, _graphqlTag2.default)(_templateObject, typeName, typeName);
};

exports.default = createSnapshotsQuery;

/***/ }),

/***/ "./client/src/helpers/getDateFromVersion.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

var _moment = __webpack_require__(16);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDateFromVersion = function getDateFromVersion(version) {
  _moment2.default.locale(_i18n2.default.detectLocale());
  return (0, _moment2.default)(version.LastEdited).format('L LT');
};

exports.default = getDateFromVersion;

/***/ }),

/***/ "./client/src/legacy/ArchiveAdmin/ArchiveAdmin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(12);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {
  $('.ArchiveAdmin__action--restore').entwine({
    onmatch: function onmatch() {
      $(this).attr('readonly', false);
      $(this).attr('disabled', false);
    }
  });

  $('.ArchiveAdmin .other-model-selector select').entwine({
    onchange: function onchange(e) {
      e.preventDefault();

      var targetClassName = $(this).val();
      var othersArchiveUrl = $(this).data('others-archive-url');
      if (targetClassName) {
        targetClassName = targetClassName.replace(/\\/g, '-');
        var url = othersArchiveUrl + targetClassName;

        $('.cms-container').loadPanel(url, '', { pjax: 'CurrentForm' });
      }
    }
  });
});

/***/ }),

/***/ "./client/src/legacy/HistoryViewer/HistoryViewerEntwine.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jquery = __webpack_require__(12);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Injector = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {
  $('.js-injector-boot .snapshot-history-viewer__container').entwine({
    onmatch: function onmatch() {
      var cmsContent = this.closest('.cms-content').attr('id');
      var context = cmsContent ? { context: cmsContent } : {};

      var HistoryViewerComponent = (0, _Injector.loadComponent)('SnapshotViewerContainer', context);
      var schemaData = this.data('schema');

      var props = _extends({}, schemaData.data, {
        isInGridField: schemaData.data.isInGridField || !this.hasClass('history-viewer--standalone')
      });

      _reactDom2.default.render(_react2.default.createElement(HistoryViewerComponent, props), this[0]);
    },
    onunmatch: function onunmatch() {
      _reactDom2.default.unmountComponentAtNode(this[0]);
    }
  });

  $('.history-viewer__version-detail .nav-link').entwine({
    onclick: function onclick(e) {
      e.preventDefault();
      this._super(e);
    }
  });

  $('.tab.tab--history-viewer[aria-hidden=false]').entwine({
    onmatch: function onmatch() {
      $('.toolbar--south.cms-content-actions').hide();
    },
    onunmatch: function onunmatch() {
      $('.toolbar--south.cms-content-actions').show();
    }
  });
  $('.tab.tab--history-viewer .history-viewer__version-detail').entwine({
    onmatch: function onmatch() {
      this.parent().css('padding-bottom', '3rem').next('.toolbar--south').css({
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
      });
    }
  });
});

/***/ }),

/***/ "./client/src/state/historyviewer/HistoryViewerActionTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = ['SHOW_VERSION', 'SHOW_DATE', 'SHOW_LIST', 'SET_CURRENT_PAGE', 'ADD_MESSAGE', 'CLEAR_MESSAGES', 'SET_COMPARE_MODE', 'SET_COMPARE_FROM', 'SET_COMPARE_TO'].reduce(function (obj, item) {
  return Object.assign(obj, _defineProperty({}, item, 'HISTORY_VIEWER.' + item));
}, {});

/***/ }),

/***/ "./client/src/state/historyviewer/HistoryViewerActions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showVersion = showVersion;
exports.showDate = showDate;
exports.showList = showList;
exports.setCurrentPage = setCurrentPage;
exports.addMessage = addMessage;
exports.clearMessages = clearMessages;
exports.setCompareMode = setCompareMode;
exports.setCompareFrom = setCompareFrom;
exports.setCompareTo = setCompareTo;

var _HistoryViewerActionTypes = __webpack_require__("./client/src/state/historyviewer/HistoryViewerActionTypes.js");

var _HistoryViewerActionTypes2 = _interopRequireDefault(_HistoryViewerActionTypes);

var _v = __webpack_require__("./node_modules/uuid/v1.js");

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showVersion(version) {
  return {
    type: _HistoryViewerActionTypes2.default.SHOW_VERSION,
    payload: { version: version }
  };
}

function showDate(version) {
  return {
    type: _HistoryViewerActionTypes2.default.SHOW_DATE,
    payload: { version: version }
  };
}

function showList() {
  return {
    type: _HistoryViewerActionTypes2.default.SHOW_LIST
  };
}

function setCurrentPage(page) {
  return {
    type: _HistoryViewerActionTypes2.default.SET_CURRENT_PAGE,
    payload: { page: page }
  };
}

function addMessage(message) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';

  return {
    type: _HistoryViewerActionTypes2.default.ADD_MESSAGE,
    payload: { id: (0, _v2.default)(), message: message, type: type }
  };
}

function clearMessages() {
  return {
    type: _HistoryViewerActionTypes2.default.CLEAR_MESSAGES
  };
}

function setCompareMode(enabled) {
  return {
    type: _HistoryViewerActionTypes2.default.SET_COMPARE_MODE,
    payload: { enabled: enabled }
  };
}

function setCompareFrom(version) {
  return {
    type: _HistoryViewerActionTypes2.default.SET_COMPARE_FROM,
    payload: { version: version }
  };
}

function setCompareTo(version) {
  return {
    type: _HistoryViewerActionTypes2.default.SET_COMPARE_TO,
    payload: { version: version }
  };
}

/***/ }),

/***/ "./client/src/state/historyviewer/HistoryViewerReducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = historyViewerReducer;

var _HistoryViewerActionTypes = __webpack_require__("./client/src/state/historyviewer/HistoryViewerActionTypes.js");

var _HistoryViewerActionTypes2 = _interopRequireDefault(_HistoryViewerActionTypes);

var _compareType = __webpack_require__("./client/src/types/compareType.js");

var _HistoryViewer = __webpack_require__("./client/src/components/HistoryViewer/HistoryViewer.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  currentPage: 1,
  previewMode: false,
  currentVersion: false,
  compare: _compareType.defaultCompare,
  loading: false,
  messages: []
};

function historyViewerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _HistoryViewerActionTypes2.default.SET_CURRENT_PAGE:
      {
        return _extends({}, state, {
          currentPage: payload.page
        });
      }

    case _HistoryViewerActionTypes2.default.SHOW_VERSION:
      {
        var version = payload.version;

        return _extends({}, state, {
          previewMode: version && _HistoryViewer.VERSION_MODE_VERSION,
          currentVersion: version
        });
      }

    case _HistoryViewerActionTypes2.default.SHOW_DATE:
      {
        var _version = payload.version;

        return _extends({}, state, {
          previewMode: _version && _HistoryViewer.VERSION_MODE_DATE,
          currentVersion: _version
        });
      }

    case _HistoryViewerActionTypes2.default.SHOW_LIST:
      {
        return _extends({}, state, {
          currentVersion: false,
          currentDate: false,
          previewMode: false,
          currentPage: 0
        });
      }

    case _HistoryViewerActionTypes2.default.ADD_MESSAGE:
      {
        return _extends({}, state, {
          messages: [payload].concat(_toConsumableArray(state.messages))
        });
      }

    case _HistoryViewerActionTypes2.default.CLEAR_MESSAGES:
      {
        return _extends({}, state, {
          messages: []
        });
      }

    case _HistoryViewerActionTypes2.default.SET_COMPARE_MODE:
      {
        var initialCompare = _extends({
          versionFrom: false,
          versionTo: false
        }, state.compare);

        return _extends({}, state, {
          compare: payload.enabled ? initialCompare : false
        });
      }

    case _HistoryViewerActionTypes2.default.SET_COMPARE_FROM:
      {
        var _state$compare = state.compare,
            versionFrom = _state$compare.versionFrom,
            versionTo = _state$compare.versionTo;

        versionFrom = payload.version || false;

        if (!versionFrom) {
          versionFrom = versionTo;
          versionTo = false;
        }

        return _extends({}, state, {
          currentVersion: versionFrom,
          compare: { versionFrom: versionFrom, versionTo: versionTo }
        });
      }

    case _HistoryViewerActionTypes2.default.SET_COMPARE_TO:
      {
        var _state$compare2 = state.compare,
            _versionFrom = _state$compare2.versionFrom,
            _versionTo = _state$compare2.versionTo;

        _versionTo = payload.version || false;

        if (_versionTo && _versionFrom && _versionTo.Version < _versionFrom.Version) {
          _versionFrom = _versionTo;
          _versionTo = state.compare.versionFrom;
        }

        return _extends({}, state, {
          currentVersion: _versionFrom,
          compare: { versionFrom: _versionFrom, versionTo: _versionTo }
        });
      }

    default:
      return state;
  }
}

/***/ }),

/***/ "./client/src/types/compareType.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultCompare = exports.compareType = undefined;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _versionType = __webpack_require__("./client/src/types/versionType.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compareType = _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
  versionFrom: _versionType.versionType,
  versionTo: _versionType.versionType
})]);

var defaultCompare = false;

exports.compareType = compareType;
exports.defaultCompare = defaultCompare;

/***/ }),

/***/ "./client/src/types/messageType.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messageType = undefined;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messageType = _propTypes2.default.shape({
  id: _propTypes2.default.string,
  message: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['error', 'info', 'success', 'warning'])
});

exports.messageType = messageType;

/***/ }),

/***/ "./client/src/types/versionType.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultVersion = exports.versionType = undefined;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var memberShape = _propTypes2.default.shape({
  FirstName: _propTypes2.default.string,
  Surname: _propTypes2.default.string
});

var versionType = _propTypes2.default.shape({
  Version: _propTypes2.default.number,
  AbsoluteLink: _propTypes2.default.string,
  LastEdited: _propTypes2.default.string,
  Published: _propTypes2.default.boolean,
  LiveVersion: _propTypes2.default.boolean,
  LatestDraftVersion: _propTypes2.default.boolean,
  Message: _propTypes2.default.string,
  Publisher: memberShape,
  Author: memberShape
});

var defaultVersion = {
  Version: 0,
  AbsoluteLink: '',
  LastEdited: '',
  Published: false,
  LiveVersion: false,
  LatestDraftVersion: false,
  Message: '',
  Publisher: {
    FirstName: '',
    Surname: ''
  },
  Author: {
    FirstName: '',
    Surname: ''
  }
};

exports.versionType = versionType;
exports.defaultVersion = defaultVersion;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"presets\":[[\"env\",{\"modules\":false}],\"react\"],\"plugins\":[\"transform-object-rest-spread\"],\"comments\":false,\"cacheDirectory\":true}!./client/src/components/HistoryViewer/HistoryViewer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = exports.VERSION_MODE_DATE = exports.VERSION_MODE_VERSION = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _griddleReact = __webpack_require__("./node_modules/griddle-react/modules/griddle.jsx.js");

var _griddleReact2 = _interopRequireDefault(_griddleReact);

var _HistoryViewerConfig = __webpack_require__("./client/src/containers/HistoryViewer/HistoryViewerConfig.js");

var _HistoryViewerConfig2 = _interopRequireDefault(_HistoryViewerConfig);

var _i18n = __webpack_require__(3);

var _i18n2 = _interopRequireDefault(_i18n);

var _Injector = __webpack_require__(2);

var _Loading = __webpack_require__(9);

var _Loading2 = _interopRequireDefault(_Loading);

var _HistoryViewerActions = __webpack_require__("./client/src/state/historyviewer/HistoryViewerActions.js");

var _versionType = __webpack_require__("./client/src/types/versionType.js");

var _compareType = __webpack_require__("./client/src/types/compareType.js");

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactResizeAware = __webpack_require__("./node_modules/react-resize-aware/dist/index.js");

var _reactResizeAware2 = _interopRequireDefault(_reactResizeAware);

var _ViewModeActions = __webpack_require__(11);

var viewModeActions = _interopRequireWildcard(_ViewModeActions);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VERSION_MODE_VERSION = 'VERSION';
var VERSION_MODE_DATE = 'DATE';

exports.VERSION_MODE_VERSION = VERSION_MODE_VERSION;
exports.VERSION_MODE_DATE = VERSION_MODE_DATE;

var HistoryViewer = function (_Component) {
  _inherits(HistoryViewer, _Component);

  function HistoryViewer(props) {
    _classCallCheck(this, HistoryViewer);

    var _this = _possibleConstructorReturn(this, (HistoryViewer.__proto__ || Object.getPrototypeOf(HistoryViewer)).call(this, props));

    _this.handleSetPage = _this.handleSetPage.bind(_this);
    _this.handleNextPage = _this.handleNextPage.bind(_this);
    _this.handlePrevPage = _this.handlePrevPage.bind(_this);
    return _this;
  }

  _createClass(HistoryViewer, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var prevPage = prevProps.page;
      var _props = this.props,
          currentPage = _props.page,
          versions = _props.actions.versions;


      if (prevPage !== currentPage && typeof versions.goToPage === 'function') {
        versions.goToPage(currentPage);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var onSelect = this.props.onSelect;

      if (typeof onSelect === 'function') {
        onSelect(false);
      }
    }
  }, {
    key: 'getVersions',
    value: function getVersions() {
      var versions = this.props.versions;

      var edges = versions && versions.SnapshotHistory && versions.SnapshotHistory.edges ? versions.SnapshotHistory.edges : [];
      return edges.map(function (_ref) {
        var node = _ref.node;

        return _extends({}, node, node.OriginVersion, {
          AbsoluteLink: node.IsFullVersion ? node.OriginVersion.AbsoluteLink : versions.AbsoluteLink,
          Version: node.IsFullVersion ? node.OriginVersion.Version : node.BaseVersion
        });
      });
    }
  }, {
    key: 'getContainerClasses',
    value: function getContainerClasses() {
      var _props2 = this.props,
          compare = _props2.compare,
          isInGridField = _props2.isInGridField;

      return (0, _classnames2.default)('history-viewer', 'fill-height', {
        'history-viewer__compare-mode': compare,
        'history-viewer--no-margins': isInGridField && !this.isListView()
      });
    }
  }, {
    key: 'getLatestVersion',
    value: function getLatestVersion() {
      var currentVersion = this.props.currentVersion;

      if (currentVersion && currentVersion.LatestDraftVersion === true) {
        return currentVersion;
      }

      var latestDraftVersion = this.getVersions().filter(function (version) {
        return version.LatestDraftVersion === true;
      });

      if (latestDraftVersion.length) {
        return latestDraftVersion[0];
      }

      return null;
    }
  }, {
    key: 'isListView',
    value: function isListView() {
      var _props3 = this.props,
          compare = _props3.compare,
          currentVersion = _props3.currentVersion;

      if (!currentVersion) {
        return true;
      }

      if (!compare) {
        return false;
      }

      if (compare.versionFrom && !compare.versionTo) {
        return true;
      }

      return false;
    }
  }, {
    key: 'handleSetPage',
    value: function handleSetPage(page) {
      var onSetPage = this.props.onSetPage;

      if (typeof onSetPage === 'function') {
        onSetPage(page + 1);
      }
    }
  }, {
    key: 'handleNextPage',
    value: function handleNextPage() {
      var page = this.props.page;

      this.handleSetPage(page);
    }
  }, {
    key: 'handlePrevPage',
    value: function handlePrevPage() {
      var page = this.props.page;

      var currentPage = page - 1;
      if (currentPage < 1) {
        this.handleSetPage(currentPage);
        return;
      }
      this.handleSetPage(currentPage - 1);
    }
  }, {
    key: 'compareModeAvailable',
    value: function compareModeAvailable() {
      return this.getVersions().length > 1;
    }
  }, {
    key: 'renderVersionDetail',
    value: function renderVersionDetail() {
      var _this2 = this;

      var _props4 = this.props,
          currentVersion = _props4.currentVersion,
          isPreviewable = _props4.isPreviewable,
          recordId = _props4.recordId,
          recordClass = _props4.recordClass,
          typeName = _props4.typeName,
          schemaUrl = _props4.schemaUrl,
          VersionDetailComponent = _props4.VersionDetailComponent,
          compare = _props4.compare,
          _props4$compare = _props4.compare,
          _props4$compare$versi = _props4$compare.versionFrom,
          versionFrom = _props4$compare$versi === undefined ? false : _props4$compare$versi,
          _props4$compare$versi2 = _props4$compare.versionTo,
          versionTo = _props4$compare$versi2 === undefined ? false : _props4$compare$versi2,
          previewState = _props4.previewState;

      var schemaVersionReplacements = {
        ':id': recordId,
        ':class': recordClass,
        ':date': '',
        ':version': ''
      };

      schemaVersionReplacements[':date'] = currentVersion.LastEdited;

      var schemaCompareReplacements = {
        ':id': recordId,
        ':class': recordClass,
        ':from': versionFrom.Version || 0,
        ':to': versionTo.Version || 0
      };
      var schemaSearch = compare ? /:id|:class|:from|:to/g : /:id|:class|:version|:date/g;
      var schemaReplacements = compare ? schemaCompareReplacements : schemaVersionReplacements;

      var version = compare ? versionFrom : currentVersion;
      var latestVersion = this.getLatestVersion();
      var props = {
        isLatestVersion: !compare && latestVersion && latestVersion.Version === version.Version,
        isPreviewable: isPreviewable,
        recordId: recordId,
        typeName: typeName,
        schemaUrl: schemaUrl.replace(schemaSearch, function (match) {
          return schemaReplacements[match];
        }),
        version: version,
        compare: compare,
        compareModeAvailable: this.compareModeAvailable(),
        previewState: previewState
      };

      return _react2.default.createElement(
        _reactResizeAware2.default,
        {
          className: this.getContainerClasses(),
          onResize: function onResize(_ref2) {
            var width = _ref2.width;
            return _this2.props.onResize(width);
          }
        },
        _react2.default.createElement(VersionDetailComponent, props)
      );
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      var _props5 = this.props,
          limit = _props5.limit,
          page = _props5.page,
          versions = _props5.versions;


      if (!versions) {
        return null;
      }

      var totalVersions = versions.SnapshotHistory ? versions.SnapshotHistory.pageInfo.totalCount : 0;

      if (totalVersions <= limit) {
        return null;
      }

      var props = {
        setPage: this.handleSetPage,
        maxPage: Math.ceil(totalVersions / limit),
        next: this.handleNextPage,
        nextText: _i18n2.default._t('HistoryViewer.NEXT', 'Next'),
        previous: this.handlePrevPage,
        previousText: _i18n2.default._t('HistoryViewer.PREVIOUS', 'Previous'),

        currentPage: page - 1,
        useGriddleStyles: false
      };

      return _react2.default.createElement(
        'div',
        { className: 'griddle-footer' },
        _react2.default.createElement(_griddleReact2.default.GridPagination, props)
      );
    }
  }, {
    key: 'renderComparisonSelectionList',
    value: function renderComparisonSelectionList() {
      var _props6 = this.props,
          versionFrom = _props6.compare.versionFrom,
          ListComponent = _props6.ListComponent;


      if (!versionFrom) {
        return null;
      }

      var selectionListClasses = (0, _classnames2.default)('history-viewer__table', 'history-viewer__table--comparison-selected');

      return _react2.default.createElement(ListComponent, {
        versions: [versionFrom],
        extraClass: selectionListClasses
      });
    }
  }, {
    key: 'renderVersionList',
    value: function renderVersionList() {
      var _props7 = this.props,
          isInGridField = _props7.isInGridField,
          ListComponent = _props7.ListComponent,
          CompareWarningComponent = _props7.CompareWarningComponent,
          compare = _props7.compare,
          hasVersionFrom = _props7.compare.versionFrom;


      return _react2.default.createElement(
        'div',
        { className: this.getContainerClasses() },
        _react2.default.createElement(CompareWarningComponent, null),
        _react2.default.createElement(
          'div',
          { className: isInGridField ? '' : 'panel panel--padded panel--scrollable' },
          this.renderComparisonSelectionList(),
          _react2.default.createElement(ListComponent, {
            versions: this.getVersions(),
            showHeader: !compare || compare && !hasVersionFrom,
            compareModeAvailable: this.compareModeAvailable()
          }),
          _react2.default.createElement(
            'div',
            { className: 'history-viewer__pagination' },
            this.renderPagination()
          )
        )
      );
    }
  }, {
    key: 'renderCompareMode',
    value: function renderCompareMode() {
      var compare = this.props.compare;


      if (compare && compare.versionFrom && compare.versionTo) {
        return this.renderVersionDetail();
      }
      return this.renderVersionList();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props8 = this.props,
          loading = _props8.loading,
          compare = _props8.compare,
          previewMode = _props8.previewMode;


      if (loading) {
        return _react2.default.createElement(_Loading2.default, null);
      }

      if (this.compareModeAvailable() && compare) {
        return this.renderCompareMode();
      }

      if (previewMode) {
        return this.renderVersionDetail();
      }

      return this.renderVersionList();
    }
  }]);

  return HistoryViewer;
}(_react.Component);

HistoryViewer.propTypes = {
  contextKey: _propTypes2.default.string,
  limit: _propTypes2.default.number,
  ListComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
  offset: _propTypes2.default.number,
  recordId: _propTypes2.default.number.isRequired,
  recordClass: _propTypes2.default.string.isRequired,
  typeName: _propTypes2.default.string.isRequired,
  currentVersion: _propTypes2.default.oneOfType([_propTypes2.default.bool, _versionType.versionType]),
  compare: _compareType.compareType,
  isInGridField: _propTypes2.default.bool,
  isPreviewable: _propTypes2.default.bool,
  VersionDetailComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
  CompareWarningComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
  versions: _propTypes2.default.shape({
    Versions: _propTypes2.default.shape({
      pageInfo: _propTypes2.default.shape({
        totalCount: _propTypes2.default.number
      }),
      edges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        node: _versionType.versionType
      }))
    })
  }),
  page: _propTypes2.default.number,
  schemaUrl: _propTypes2.default.string,

  previewState: _propTypes2.default.oneOf(['edit', 'preview', 'split']),
  actions: _propTypes2.default.object,
  onSelect: _propTypes2.default.func,
  onSetPage: _propTypes2.default.func,
  onResize: _propTypes2.default.func
};

HistoryViewer.defaultProps = {
  compare: {},
  contextKey: '',
  currentVersion: false,
  isInGridField: false,
  isPreviewable: false,
  typeName: '',
  schemaUrl: '',
  versions: {
    Versions: {
      pageInfo: {
        totalCount: 0
      },
      edges: []
    }
  }
};

function mapStateToProps(state) {
  var _state$versionedAdmin = state.versionedAdmin.historyViewer,
      currentPage = _state$versionedAdmin.currentPage,
      currentVersion = _state$versionedAdmin.currentVersion,
      previewMode = _state$versionedAdmin.previewMode,
      compare = _state$versionedAdmin.compare;
  var activeState = state.viewMode.activeState;


  return {
    page: currentPage,
    currentVersion: currentVersion,
    compare: compare,
    previewMode: previewMode,
    previewState: activeState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelect: function onSelect(id) {
      dispatch((0, _HistoryViewerActions.showVersion)(id));
      dispatch((0, _HistoryViewerActions.clearMessages)());
    },
    onSetPage: function onSetPage(page) {
      dispatch((0, _HistoryViewerActions.setCurrentPage)(page));
    },
    onResize: function onResize(panelWidth) {
      dispatch(viewModeActions.enableOrDisableSplitMode(panelWidth));
    }
  };
}

exports.Component = HistoryViewer;
exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _HistoryViewerConfig2.default, (0, _Injector.inject)(['SnapshotHistoryViewerVersionList', 'SnapshotHistoryViewerVersionDetail', 'SnapshotHistoryViewerCompareWarning'], function (ListComponent, VersionDetailComponent, CompareWarningComponent) {
  return {
    ListComponent: ListComponent,
    VersionDetailComponent: VersionDetailComponent,
    CompareWarningComponent: CompareWarningComponent
  };
}, function (_ref3) {
  var contextKey = _ref3.contextKey;
  return 'VersionedAdmin.HistoryViewer.' + contextKey;
}))(HistoryViewer);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"presets\":[[\"env\",{\"modules\":false}],\"react\"],\"plugins\":[\"transform-object-rest-spread\"],\"comments\":false,\"cacheDirectory\":true}!./client/src/types/versionType.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultVersion = exports.versionType = undefined;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var memberShape = _propTypes2.default.shape({
  FirstName: _propTypes2.default.string,
  Surname: _propTypes2.default.string
});

var versionType = _propTypes2.default.shape({
  Version: _propTypes2.default.number,
  AbsoluteLink: _propTypes2.default.string,
  LastEdited: _propTypes2.default.string,
  Published: _propTypes2.default.boolean,
  LiveVersion: _propTypes2.default.boolean,
  LatestDraftVersion: _propTypes2.default.boolean,
  Message: _propTypes2.default.string,
  Publisher: memberShape,
  Author: memberShape
});

var defaultVersion = {
  Version: 0,
  AbsoluteLink: '',
  LastEdited: '',
  Published: false,
  LiveVersion: false,
  LatestDraftVersion: false,
  Message: '',
  Publisher: {
    FirstName: '',
    Surname: ''
  },
  Author: {
    FirstName: '',
    Surname: ''
  }
};

exports.versionType = versionType;
exports.defaultVersion = defaultVersion;

/***/ }),

/***/ "./node_modules/create-react-class/factory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__("./node_modules/object-assign/index.js");

var emptyObject = __webpack_require__("./node_modules/fbjs/lib/emptyObject.js");
var _invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");

if (true) {
  var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");
}

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (true) {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
    UNSAFE_componentWillMount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Similar to ReactClassInterface but for static methods.
   */
  var ReactClassStaticInterface = {
    /**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (true) {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (true) {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (true) {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (true) {
          warning(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames[location],
            propName
          );
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (true) {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (true) {
          warning(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (true) {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }

    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isAlreadyDefined = name in Constructor;
      if (isAlreadyDefined) {
        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
          ? ReactClassStaticInterface[name]
          : null;

        _invariant(
          specPolicy === 'DEFINE_MANY_MERGED',
          'ReactClass: You are attempting to define ' +
            '`%s` on your component more than once. This conflict may be ' +
            'due to a mixin.',
          name
        );

        Constructor[name] = createMergedResultFunction(Constructor[name], property);

        return;
      }

      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (true) {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if (true) {
            warning(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          if (true) {
            warning(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (true) {
        warning(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (true) {
        warning(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (true) {
        // We allow auto-mocks to proceed as if they're returning null.
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (true) {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (true) {
      warning(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
          'Did you mean UNSAFE_componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;


/***/ }),

/***/ "./node_modules/create-react-class/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(0);
var factory = __webpack_require__("./node_modules/create-react-class/factory.js");

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),

/***/ "./node_modules/expose-loader/index.js?SnapshotsViewer!./client/src/components/HistoryViewer/HistoryViewer.js-exposed":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["SnapshotsViewer"] = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"presets\":[[\"env\",{\"modules\":false}],\"react\"],\"plugins\":[\"transform-object-rest-spread\"],\"comments\":false,\"cacheDirectory\":true}!./client/src/components/HistoryViewer/HistoryViewer.js");
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/expose-loader/index.js?versionType!./client/src/types/versionType.js-exposed":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["versionType"] = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"presets\":[[\"env\",{\"modules\":false}],\"react\"],\"plugins\":[\"transform-object-rest-spread\"],\"comments\":false,\"cacheDirectory\":true}!./client/src/types/versionType.js");
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyObject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (true) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/griddle-react/modules/columnProperties.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var map = __webpack_require__("./node_modules/lodash/map.js");
var filter = __webpack_require__("./node_modules/lodash/filter.js");
var find = __webpack_require__("./node_modules/lodash/find.js");
var sortBy = __webpack_require__("./node_modules/lodash/sortBy.js");
var difference = __webpack_require__("./node_modules/lodash/difference.js");

var ColumnProperties = (function () {
  function ColumnProperties() {
    var allColumns = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var filteredColumns = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
    var childrenColumnName = arguments.length <= 2 || arguments[2] === undefined ? "children" : arguments[2];
    var columnMetadata = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];
    var metadataColumns = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];

    _classCallCheck(this, ColumnProperties);

    this.allColumns = allColumns;
    this.filteredColumns = filteredColumns;
    this.childrenColumnName = childrenColumnName;
    this.columnMetadata = columnMetadata;
    this.metadataColumns = metadataColumns;
  }

  _createClass(ColumnProperties, [{
    key: 'getMetadataColumns',
    value: function getMetadataColumns() {
      var meta = map(filter(this.columnMetadata, { visible: false }), function (item) {
        return item.columnName;
      });
      if (meta.indexOf(this.childrenColumnName) < 0) {
        meta.push(this.childrenColumnName);
      }
      return meta.concat(this.metadataColumns);
    }
  }, {
    key: 'getVisibleColumnCount',
    value: function getVisibleColumnCount() {
      return this.getColumns().length;
    }
  }, {
    key: 'getColumnMetadataByName',
    value: function getColumnMetadataByName(name) {
      return find(this.columnMetadata, { columnName: name });
    }
  }, {
    key: 'hasColumnMetadata',
    value: function hasColumnMetadata() {
      return this.columnMetadata !== null && this.columnMetadata.length > 0;
    }
  }, {
    key: 'getMetadataColumnProperty',
    value: function getMetadataColumnProperty(columnName, propertyName, defaultValue) {
      var meta = this.getColumnMetadataByName(columnName);

      //send back the default value if meta isn't there
      if (typeof meta === "undefined" || meta === null) return defaultValue;

      return meta.hasOwnProperty(propertyName) ? meta[propertyName] : defaultValue;
    }
  }, {
    key: 'orderColumns',
    value: function orderColumns(cols) {
      var _this = this;

      var ORDER_MAX = 100;

      var orderedColumns = sortBy(cols, function (item) {
        var metaItem = find(_this.columnMetadata, { columnName: item });

        if (typeof metaItem === 'undefined' || metaItem === null || isNaN(metaItem.order)) {
          return ORDER_MAX;
        }

        return metaItem.order;
      });

      return orderedColumns;
    }
  }, {
    key: 'getColumns',
    value: function getColumns() {
      //if we didn't set default or filter
      var filteredColumns = this.filteredColumns.length === 0 ? this.allColumns : this.filteredColumns;

      filteredColumns = difference(filteredColumns, this.metadataColumns);

      filteredColumns = this.orderColumns(filteredColumns);

      return filteredColumns;
    }
  }]);

  return ColumnProperties;
})();

module.exports = ColumnProperties;


/***/ }),

/***/ "./node_modules/griddle-react/modules/customFilterContainer.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");

var CustomFilterContainer = createReactClass({
  getDefaultProps: function getDefaultProps() {
    return {
      "placeholderText": ""
    };
  },
  render: function render() {
    var that = this;

    if (typeof that.props.customFilterComponent !== 'function') {
      console.log("Couldn't find valid template.");
      return React.createElement('div', null);
    }

    return React.createElement(that.props.customFilterComponent, {
      changeFilter: this.props.changeFilter,
      results: this.props.results,
      currentResults: this.props.currentResults,
      placeholderText: this.props.placeholderText });
  }
});

module.exports = CustomFilterContainer;


/***/ }),

/***/ "./node_modules/griddle-react/modules/customPaginationContainer.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   Griddle - Simple Grid Component for React
   https://github.com/DynamicTyped/Griddle
   Copyright (c) 2014 Ryan Lanciaux | DynamicTyped

   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");

var CustomPaginationContainer = createReactClass({
  getDefaultProps: function getDefaultProps() {
    return {
      "maxPage": 0,
      "nextText": "",
      "previousText": "",
      "currentPage": 0,
      "customPagerComponent": {},
      "customPagerComponentOptions": {}
    };
  },
  render: function render() {
    var that = this;

    if (typeof that.props.customPagerComponent !== 'function') {
      console.log("Couldn't find valid template.");
      return React.createElement('div', null);
    }

    return React.createElement(that.props.customPagerComponent, _extends({}, this.props.customPagerComponentOptions, { maxPage: this.props.maxPage, nextText: this.props.nextText, previousText: this.props.previousText, currentPage: this.props.currentPage, setPage: this.props.setPage, previous: this.props.previous, next: this.props.next }));
  }
});

module.exports = CustomPaginationContainer;


/***/ }),

/***/ "./node_modules/griddle-react/modules/customRowComponentContainer.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   Griddle - Simple Grid Component for React
   https://github.com/DynamicTyped/Griddle
   Copyright (c) 2014 Ryan Lanciaux | DynamicTyped

   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");

var CustomRowComponentContainer = createReactClass({
  getDefaultProps: function getDefaultProps() {
    return {
      "data": [],
      "metadataColumns": [],
      "className": "",
      "customComponent": {},
      "globalData": {}
    };
  },
  render: function render() {
    var that = this;

    if (typeof that.props.customComponent !== 'function') {
      console.log("Couldn't find valid template.");
      return React.createElement('div', { className: this.props.className });
    }

    var nodes = this.props.data.map(function (row, index) {
      return React.createElement(that.props.customComponent, { data: row, metadataColumns: that.props.metadataColumns, key: index, globalData: that.props.globalData });
    });

    var footer = this.props.showPager && this.props.pagingContent;
    return React.createElement('div', { className: this.props.className, style: this.props.style }, nodes);
  }
});

module.exports = CustomRowComponentContainer;


/***/ }),

/***/ "./node_modules/griddle-react/modules/deep.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach = __webpack_require__("./node_modules/lodash/forEach.js");
var isObject = __webpack_require__("./node_modules/lodash/isObject.js");
var isArray = __webpack_require__("./node_modules/lodash/isArray.js");
var isFunction = __webpack_require__("./node_modules/lodash/isFunction.js");
var isPlainObject = __webpack_require__("./node_modules/lodash/isPlainObject.js");
var forOwn = __webpack_require__("./node_modules/lodash/forOwn.js");

// Credits: https://github.com/documentcloud/underscore-contrib
// Sub module: underscore.object.selectors
// License: MIT (https://github.com/documentcloud/underscore-contrib/blob/master/LICENSE)
// https://github.com/documentcloud/underscore-contrib/blob/master/underscore.object.selectors.js

// Will take a path like 'element[0][1].subElement["Hey!.What?"]["[hey]"]'
// and return ["element", "0", "1", "subElement", "Hey!.What?", "[hey]"]
function keysFromPath(path) {
  // from http://codereview.stackexchange.com/a/63010/8176
  /**
   * Repeatedly capture either:
   * - a bracketed expression, discarding optional matching quotes inside, or
   * - an unbracketed expression, delimited by a dot or a bracket.
   */
  var re = /\[("|')(.+)\1\]|([^.\[\]]+)/g;

  var elements = [];
  var result;
  while ((result = re.exec(path)) !== null) {
    elements.push(result[2] || result[3]);
  }
  return elements;
}

// Gets the value at any depth in a nested object based on the
// path described by the keys given. Keys may be given as an array
// or as a dot-separated string.
function getPath(obj, ks) {
  if (typeof ks == "string") {
    if (obj[ks] !== undefined) {
      return obj[ks];
    }
    ks = keysFromPath(ks);
  }

  var i = -1,
      length = ks.length;

  // If the obj is null or undefined we have to break as
  // a TypeError will result trying to access any property
  // Otherwise keep incrementally access the next property in
  // ks until complete
  while (++i < length && obj != null) {
    obj = obj[ks[i]];
  }
  return i === length ? obj : void 0;
}

// Based on the origin underscore _.pick function
// Credit: https://github.com/jashkenas/underscore/blob/master/underscore.js
function powerPick(object, keys) {
  var result = {},
      obj = object,
      iteratee;
  iteratee = function (key, obj) {
    return key in obj;
  };

  obj = Object(obj);

  for (var i = 0, length = keys.length; i < length; i++) {
    var key = keys[i];
    if (iteratee(key, obj)) result[key] = getPath(obj, key);
  }

  return result;
}

// Gets all the keys for a flattened object structure.
// Doesn't flatten arrays.
// Input:
// {
//  a: {
//    x: 1,
//    y: 2
//  },
//  b: [3, 4],
//  c: 5
// }
// Output:
// [
//  "a.x",
//  "a.y",
//  "b",
//  "c"
// ]
function getKeys(obj, prefix) {
  var keys = [];

  forEach(obj, function (value, key) {
    var fullKey = prefix ? prefix + "." + key : key;
    if (isObject(value) && !isArray(value) && !isFunction(value) && !(value instanceof Date)) {
      keys = keys.concat(getKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  });

  return keys;
}

// Recursivly traverse plain objects and arrays calling `fn` on each
// non-object/non-array leaf node.
function iterObject(thing, fn) {
  if (isArray(thing)) {
    forEach(thing, function (item) {
      iterObject(item, fn);
    });
  } else if (isPlainObject(thing)) {
    forOwn(thing, function (item) {
      iterObject(item, fn);
    });
  } else {
    fn(thing);
  }
}

// Recursivly traverse plain objects and arrays and build a list of all
// non-object/non-array leaf nodes.
//
// Input:
// { "array": [1, "two", {"tree": 3}], "string": "a string" }
//
// Output:
// [1, 'two', 3, 'a string']
//
function getObjectValues(thing) {
  var results = [];
  iterObject(thing, function (value) {
    results.push(value);
  });
  return results;
}

module.exports = {
  pick: powerPick,
  getAt: getPath,
  keys: getKeys,
  getObjectValues: getObjectValues
};


/***/ }),

/***/ "./node_modules/griddle-react/modules/gridFilter.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");

var GridFilter = createReactClass({
    getDefaultProps: function getDefaultProps() {
        return {
            "placeholderText": ""
        };
    },
    handleChange: function handleChange(event) {
        this.props.changeFilter(event.target.value);
    },
    render: function render() {
        return React.createElement('div', { className: 'filter-container' }, React.createElement('input', { type: 'text', name: 'filter', placeholder: this.props.placeholderText, className: 'form-control', onChange: this.handleChange }));
    }
});

module.exports = GridFilter;


/***/ }),

/***/ "./node_modules/griddle-react/modules/gridNoData.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");

var GridNoData = createReactClass({
    getDefaultProps: function getDefaultProps() {
        return {
            "noDataMessage": "No Data"
        };
    },
    render: function render() {
        var that = this;

        return React.createElement('div', null, this.props.noDataMessage);
    }
});

module.exports = GridNoData;


/***/ }),

/***/ "./node_modules/griddle-react/modules/gridPagination.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");
var assign = __webpack_require__("./node_modules/lodash/assign.js");

//needs props maxPage, currentPage, nextFunction, prevFunction
var GridPagination = createReactClass({
    getDefaultProps: function getDefaultProps() {
        return {
            "maxPage": 0,
            "nextText": "",
            "previousText": "",
            "currentPage": 0,
            "useGriddleStyles": true,
            "nextClassName": "griddle-next",
            "previousClassName": "griddle-previous",
            "nextIconComponent": null,
            "previousIconComponent": null
        };
    },
    pageChange: function pageChange(event) {
        this.props.setPage(parseInt(event.target.value, 10) - 1);
    },
    render: function render() {
        var previous = "";
        var next = "";

        if (this.props.currentPage > 0) {
            previous = React.createElement('button', { type: 'button', onClick: this.props.previous, style: this.props.useGriddleStyles ? { "color": "#222", border: "none", background: "none", margin: "0 0 0 10px" } : null }, this.props.previousIconComponent, this.props.previousText);
        }

        if (this.props.currentPage !== this.props.maxPage - 1) {
            next = React.createElement('button', { type: 'button', onClick: this.props.next, style: this.props.useGriddleStyles ? { "color": "#222", border: "none", background: "none", margin: "0 10px 0 0" } : null }, this.props.nextText, this.props.nextIconComponent);
        }

        var leftStyle = null;
        var middleStyle = null;
        var rightStyle = null;

        if (this.props.useGriddleStyles === true) {
            var baseStyle = {
                "float": "left",
                minHeight: "1px",
                marginTop: "5px"
            };

            rightStyle = assign({ textAlign: "right", width: "34%" }, baseStyle);
            middleStyle = assign({ textAlign: "center", width: "33%" }, baseStyle);
            leftStyle = assign({ width: "33%" }, baseStyle);
        }

        var options = [];

        for (var i = 1; i <= this.props.maxPage; i++) {
            options.push(React.createElement('option', { value: i, key: i }, i));
        }

        return React.createElement('div', { style: this.props.useGriddleStyles ? { minHeight: "35px" } : null }, React.createElement('div', { className: this.props.previousClassName, style: leftStyle }, previous), React.createElement('div', { className: 'griddle-page', style: middleStyle }, React.createElement('select', { value: this.props.currentPage + 1, onChange: this.pageChange }, options), ' / ', this.props.maxPage), React.createElement('div', { className: this.props.nextClassName, style: rightStyle }, next));
    }
});

module.exports = GridPagination;


/***/ }),

/***/ "./node_modules/griddle-react/modules/gridRow.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");
var ColumnProperties = __webpack_require__("./node_modules/griddle-react/modules/columnProperties.js");
var deep = __webpack_require__("./node_modules/griddle-react/modules/deep.js");
var isFunction = __webpack_require__("./node_modules/lodash/isFunction.js");
var zipObject = __webpack_require__("./node_modules/lodash/zipObject.js");
var assign = __webpack_require__("./node_modules/lodash/assign.js");
var defaults = __webpack_require__("./node_modules/lodash/defaults.js");
var toPairs = __webpack_require__("./node_modules/lodash/toPairs.js");
var without = __webpack_require__("./node_modules/lodash/without.js");

var GridRow = createReactClass({
    getDefaultProps: function getDefaultProps() {
        return {
            "isChildRow": false,
            "showChildren": false,
            "data": {},
            "columnSettings": null,
            "rowSettings": null,
            "hasChildren": false,
            "useGriddleStyles": true,
            "useGriddleIcons": true,
            "isSubGriddle": false,
            "paddingHeight": null,
            "rowHeight": null,
            "parentRowCollapsedClassName": "parent-row",
            "parentRowExpandedClassName": "parent-row expanded",
            "parentRowCollapsedComponent": "▶",
            "parentRowExpandedComponent": "▼",
            "onRowClick": null,
            "multipleSelectionSettings": null,
            "onRowMouseEnter": null,
            "onRowMouseLeave": null,
            "onRowWillMount": null,
            "onRowWillUnmount": null
        };
    },
    componentWillMount: function componentWillMount() {
        if (this.props.onRowWillMount !== null && isFunction(this.props.onRowWillMount)) {
            this.props.onRowWillMount(this);
        }
    },
    componentWillUnmount: function componentWillUnmount() {
        if (this.props.onRowWillUnmount !== null && isFunction(this.props.onRowWillUnmount)) {
            this.props.onRowWillUnmount(this);
        }
    },
    handleClick: function handleClick(e) {
        if (this.props.onRowClick !== null && isFunction(this.props.onRowClick)) {
            this.props.onRowClick(this, e);
        } else if (this.props.hasChildren) {
            this.props.toggleChildren();
        }
    },
    handleMouseEnter: function handleMouseEnter(e) {
        if (this.props.onRowMouseEnter !== null && isFunction(this.props.onRowMouseEnter)) {
            this.props.onRowMouseEnter(this, e);
        }
    },
    handleMouseLeave: function handleMouseLeave(e) {
        if (this.props.onRowMouseLeave !== null && isFunction(this.props.onRowMouseLeave)) {
            this.props.onRowMouseLeave(this, e);
        }
    },
    handleSelectionChange: function handleSelectionChange(e) {
        //hack to get around warning that's not super useful in this case
        return;
    },
    handleSelectClick: function handleSelectClick(e) {
        if (this.props.multipleSelectionSettings.isMultipleSelection) {
            if (e.target.type === "checkbox") {
                this.props.multipleSelectionSettings.toggleSelectRow(this.props.data, this.refs.selected.checked);
            } else {
                this.props.multipleSelectionSettings.toggleSelectRow(this.props.data, !this.refs.selected.checked);
            }
        }
    },
    verifyProps: function verifyProps() {
        if (this.props.columnSettings === null) {
            console.error("gridRow: The columnSettings prop is null and it shouldn't be");
        }
    },
    formatData: function formatData(data) {
        if (typeof data === 'boolean') {
            return String(data);
        }
        return data;
    },
    render: function render() {
        var _this = this;

        this.verifyProps();
        var that = this;
        var columnStyles = null;

        if (this.props.useGriddleStyles) {
            columnStyles = {
                margin: "0px",
                padding: that.props.paddingHeight + "px 5px " + that.props.paddingHeight + "px 5px",
                height: that.props.rowHeight ? this.props.rowHeight - that.props.paddingHeight * 2 + "px" : null,
                backgroundColor: "#FFF",
                borderTopColor: "#DDD",
                color: "#222"
            };
        }

        var columns = this.props.columnSettings.getColumns();

        // make sure that all the columns we need have default empty values
        // otherwise they will get clipped
        var defaultValues = zipObject(columns, []);

        // creates a 'view' on top the data so we will not alter the original data but will allow us to add default values to missing columns
        var dataView = assign({}, this.props.data);

        defaults(dataView, defaultValues);
        var data = toPairs(deep.pick(dataView, without(columns, 'children')));
        var nodes = data.map(function (col, index) {
            var returnValue = null;
            var meta = _this.props.columnSettings.getColumnMetadataByName(col[0]);

            //todo: Make this not as ridiculous looking
            var firstColAppend = index === 0 && _this.props.hasChildren && _this.props.showChildren === false && _this.props.useGriddleIcons ? React.createElement('span', { style: _this.props.useGriddleStyles ? { fontSize: "10px", marginRight: "5px" } : null }, _this.props.parentRowCollapsedComponent) : index === 0 && _this.props.hasChildren && _this.props.showChildren && _this.props.useGriddleIcons ? React.createElement('span', { style: _this.props.useGriddleStyles ? { fontSize: "10px" } : null }, _this.props.parentRowExpandedComponent) : "";

            if (index === 0 && _this.props.isChildRow && _this.props.useGriddleStyles) {
                columnStyles = assign(columnStyles, { paddingLeft: 10 });
            }

            if (_this.props.columnSettings.hasColumnMetadata() && typeof meta !== 'undefined' && meta !== null) {
                if (typeof meta.customComponent !== 'undefined' && meta.customComponent !== null) {
                    var customComponent = React.createElement(meta.customComponent, { data: col[1], rowData: dataView, metadata: meta });
                    returnValue = React.createElement('td', { onClick: _this.handleClick, onMouseEnter: _this.handleMouseEnter, onMouseLeave: _this.handleMouseLeave, className: meta.cssClassName, key: index, style: columnStyles }, customComponent);
                } else {
                    returnValue = React.createElement('td', { onClick: _this.handleClick, onMouseEnter: _this.handleMouseEnter, onMouseLeave: _this.handleMouseLeave, className: meta.cssClassName, key: index, style: columnStyles }, firstColAppend, _this.formatData(col[1]));
                }
            }

            return returnValue || React.createElement('td', { onClick: _this.handleClick, onMouseEnter: _this.handleMouseEnter, onMouseLeave: _this.handleMouseLeave, key: index, style: columnStyles }, firstColAppend, col[1]);
        });

        // Don't compete with onRowClick, but if no onRowClick function then
        // clicking on the row should trigger select
        var trOnClick, tdOnClick;
        if (this.props.onRowClick !== null && isFunction(this.props.onRowClick)) {
            trOnClick = null;
            tdOnClick = this.handleSelectClick;
        } else {
            if (this.props.multipleSelectionSettings && this.props.multipleSelectionSettings.isMultipleSelection) {
                trOnClick = this.handleSelectClick;
                tdOnClick = null;
            } else {
                trOnClick = null;
                tdOnClick = null;
            }
        }

        if (nodes && this.props.multipleSelectionSettings && this.props.multipleSelectionSettings.isMultipleSelection) {
            var selectedRowIds = this.props.multipleSelectionSettings.getSelectedRowIds();

            nodes.unshift(React.createElement('td', {
                key: 'selection',
                style: columnStyles,
                className: 'griddle-select griddle-select-cell',
                onClick: tdOnClick
            }, React.createElement('input', {
                type: 'checkbox',
                checked: this.props.multipleSelectionSettings.getIsRowChecked(dataView),
                onChange: this.handleSelectionChange,
                ref: 'selected'
            })));
        }

        //Get the row from the row settings.
        var className = that.props.rowSettings && that.props.rowSettings.getBodyRowMetadataClass(that.props.data) || "standard-row";

        if (that.props.isChildRow) {
            className = "child-row";
        } else if (that.props.hasChildren) {
            className = that.props.showChildren ? this.props.parentRowExpandedClassName : this.props.parentRowCollapsedClassName;
        }

        return React.createElement('tr', { onClick: trOnClick, className: className }, nodes);
    }
});

module.exports = GridRow;


/***/ }),

/***/ "./node_modules/griddle-react/modules/gridRowContainer.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");
var ColumnProperties = __webpack_require__("./node_modules/griddle-react/modules/columnProperties.js");
var pick = __webpack_require__("./node_modules/lodash/pick.js");

var GridRowContainer = createReactClass({
  getDefaultProps: function getDefaultProps() {
    return {
      "useGriddleStyles": true,
      "useGriddleIcons": true,
      "isSubGriddle": false,
      "columnSettings": null,
      "rowSettings": null,
      "paddingHeight": null,
      "rowHeight": null,
      "parentRowCollapsedClassName": "parent-row",
      "parentRowExpandedClassName": "parent-row expanded",
      "parentRowCollapsedComponent": "▶",
      "parentRowExpandedComponent": "▼",
      "onRowClick": null,
      "onRowMouseEnter": null,
      "onRowMouseLeave": null,
      "onRowWillMount": null,
      "onRowWillUnmount": null,
      "multipleSelectionSettings": null
    };
  },
  getInitialState: function getInitialState() {
    return {
      "data": {},
      "showChildren": false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps() {
    this.setShowChildren(false);
  },
  toggleChildren: function toggleChildren() {
    this.setShowChildren(this.state.showChildren === false);
  },
  setShowChildren: function setShowChildren(visible) {
    this.setState({
      showChildren: visible
    });
  },
  verifyProps: function verifyProps() {
    if (this.props.columnSettings === null) {
      console.error("gridRowContainer: The columnSettings prop is null and it shouldn't be");
    }
  },
  render: function render() {
    this.verifyProps();
    var that = this;
    if (typeof this.props.data === "undefined") {
      return React.createElement('tbody', null);
    }
    var arr = [];

    var columns = this.props.columnSettings.getColumns();

    arr.push(React.createElement(this.props.rowSettings.rowComponent, {
      useGriddleStyles: this.props.useGriddleStyles,
      isSubGriddle: this.props.isSubGriddle,
      data: this.props.rowSettings.isCustom ? pick(this.props.data, columns) : this.props.data,
      rowData: this.props.rowSettings.isCustom ? this.props.data : null,
      columnSettings: this.props.columnSettings,
      rowSettings: this.props.rowSettings,
      hasChildren: that.props.hasChildren,
      toggleChildren: that.toggleChildren,
      showChildren: that.state.showChildren,
      key: that.props.uniqueId + '_base_row',
      useGriddleIcons: that.props.useGriddleIcons,
      parentRowExpandedClassName: this.props.parentRowExpandedClassName,
      parentRowCollapsedClassName: this.props.parentRowCollapsedClassName,
      parentRowExpandedComponent: this.props.parentRowExpandedComponent,
      parentRowCollapsedComponent: this.props.parentRowCollapsedComponent,
      paddingHeight: that.props.paddingHeight,
      rowHeight: that.props.rowHeight,
      onRowClick: that.props.onRowClick,
      onRowMouseEnter: that.props.onRowMouseEnter,
      onRowMouseLeave: that.props.onRowMouseLeave,
      multipleSelectionSettings: this.props.multipleSelectionSettings,
      onRowWillMount: that.props.onRowWillMount,
      onRowWillUnmount: that.props.onRowWillUnmount }));

    var children = null;

    if (that.state.showChildren) {
      children = that.props.hasChildren && this.props.data["children"].map(function (row, index) {
        var key = that.props.rowSettings.getRowKey(row, index);

        if (typeof row["children"] !== "undefined") {
          var Griddle = that.constructor.Griddle;
          return React.createElement('tr', { key: key, style: { paddingLeft: 5 } }, React.createElement('td', { colSpan: that.props.columnSettings.getVisibleColumnCount(), className: 'griddle-parent', style: that.props.useGriddleStyles ? { border: "none", "padding": "0 0 0 5px" } : null }, React.createElement(Griddle, {
            rowMetadata: { key: 'id' },
            isSubGriddle: true,
            results: [row],
            columns: that.props.columnSettings.getColumns(),
            tableClassName: that.props.tableClassName,
            parentRowExpandedClassName: that.props.parentRowExpandedClassName,
            parentRowCollapsedClassName: that.props.parentRowCollapsedClassName,
            showTableHeading: false,
            showPager: false,
            columnMetadata: that.props.columnSettings.columnMetadata,
            parentRowExpandedComponent: that.props.parentRowExpandedComponent,
            parentRowCollapsedComponent: that.props.parentRowCollapsedComponent,
            paddingHeight: that.props.paddingHeight,
            rowHeight: that.props.rowHeight
          })));
        }

        return React.createElement(that.props.rowSettings.rowComponent, {
          useGriddleStyles: that.props.useGriddleStyles,
          isSubGriddle: that.props.isSubGriddle,
          data: row,
          columnSettings: that.props.columnSettings,
          isChildRow: true,
          columnMetadata: that.props.columnSettings.columnMetadata,
          key: key
        });
      });
    }

    return that.props.hasChildren === false ? arr[0] : React.createElement('tbody', null, that.state.showChildren ? arr.concat(children) : arr);
  }
});

module.exports = GridRowContainer;


/***/ }),

/***/ "./node_modules/griddle-react/modules/gridSettings.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");
var includes = __webpack_require__("./node_modules/lodash/includes.js");
var without = __webpack_require__("./node_modules/lodash/without.js");
var find = __webpack_require__("./node_modules/lodash/find.js");

var GridSettings = createReactClass({
    getDefaultProps: function getDefaultProps() {
        return {
            "columns": [],
            "columnMetadata": [],
            "selectedColumns": [],
            "settingsText": "",
            "maxRowsText": "",
            "resultsPerPage": 0,
            "enableToggleCustom": false,
            "useCustomComponent": false,
            "useGriddleStyles": true,
            "toggleCustomComponent": function toggleCustomComponent() {}
        };
    },
    setPageSize: function setPageSize(event) {
        var value = parseInt(event.target.value, 10);
        this.props.setPageSize(value);
    },
    handleChange: function handleChange(event) {
        var columnName = event.target.dataset ? event.target.dataset.name : event.target.getAttribute('data-name');
        if (event.target.checked === true && includes(this.props.selectedColumns, columnName) === false) {
            this.props.selectedColumns.push(columnName);
            this.props.setColumns(this.props.selectedColumns);
        } else {
            /* redraw with the selected columns minus the one just unchecked */
            this.props.setColumns(without(this.props.selectedColumns, columnName));
        }
    },
    render: function render() {
        var that = this;

        var nodes = [];
        //don't show column selector if we're on a custom component
        if (that.props.useCustomComponent === false) {
            nodes = this.props.columns.map(function (col, index) {
                var checked = includes(that.props.selectedColumns, col);
                //check column metadata -- if this one is locked make it disabled and don't put an onChange event
                var meta = find(that.props.columnMetadata, { columnName: col });
                var displayName = col;

                if (typeof meta !== "undefined" && typeof meta.displayName !== "undefined" && meta.displayName != null) {
                    displayName = meta.displayName;
                }

                if (typeof meta !== "undefined" && meta != null && meta.locked) {
                    return React.createElement('div', { className: 'column checkbox' }, React.createElement('label', null, React.createElement('input', { type: 'checkbox', disabled: true, name: 'check', checked: checked, 'data-name': col }), displayName));
                } else if (typeof meta !== "undefined" && meta != null && typeof meta.visible !== "undefined" && meta.visible === false) {
                    return null;
                }
                return React.createElement('div', { className: 'griddle-column-selection checkbox', key: col, style: that.props.useGriddleStyles ? { "float": "left", width: "20%" } : null }, React.createElement('label', null, React.createElement('input', { type: 'checkbox', name: 'check', onChange: that.handleChange, checked: checked, 'data-name': col }), displayName));
            });
        }

        var toggleCustom = that.props.enableToggleCustom ? React.createElement('div', { className: 'form-group' }, React.createElement('label', { htmlFor: 'maxRows' }, React.createElement('input', { type: 'checkbox', checked: this.props.useCustomComponent, onChange: this.props.toggleCustomComponent }), ' ', this.props.enableCustomFormatText)) : "";

        var setPageSize = this.props.showSetPageSize ? React.createElement('div', null, React.createElement('label', { htmlFor: 'maxRows' }, this.props.maxRowsText, ':', React.createElement('select', { onChange: this.setPageSize, value: this.props.resultsPerPage }, React.createElement('option', { value: '5' }, '5'), React.createElement('option', { value: '10' }, '10'), React.createElement('option', { value: '25' }, '25'), React.createElement('option', { value: '50' }, '50'), React.createElement('option', { value: '100' }, '100')))) : "";

        return React.createElement('div', { className: 'griddle-settings', style: this.props.useGriddleStyles ? { backgroundColor: "#FFF", border: "1px solid #DDD", color: "#222", padding: "10px", marginBottom: "10px" } : null }, React.createElement('h6', null, this.props.settingsText), React.createElement('div', { className: 'griddle-columns', style: this.props.useGriddleStyles ? { clear: "both", display: "table", width: "100%", borderBottom: "1px solid #EDEDED", marginBottom: "10px" } : null }, nodes), setPageSize, toggleCustom);
    }
});

module.exports = GridSettings;


/***/ }),

/***/ "./node_modules/griddle-react/modules/gridTable.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");
var GridTitle = __webpack_require__("./node_modules/griddle-react/modules/gridTitle.jsx.js");
var GridRowContainer = __webpack_require__("./node_modules/griddle-react/modules/gridRowContainer.jsx.js");
var ColumnProperties = __webpack_require__("./node_modules/griddle-react/modules/columnProperties.js");
var RowProperties = __webpack_require__("./node_modules/griddle-react/modules/rowProperties.js");

var GridTable = createReactClass({
  getDefaultProps: function getDefaultProps() {
    return {
      "data": [],
      "columnSettings": null,
      "rowSettings": null,
      "sortSettings": null,
      "multipleSelectionSettings": null,
      "className": "",
      "enableInfiniteScroll": false,
      "nextPage": null,
      "hasMorePages": false,
      "useFixedHeader": false,
      "useFixedLayout": true,
      "paddingHeight": null,
      "rowHeight": null,
      "filterByColumn": null,
      "infiniteScrollLoadTreshold": null,
      "bodyHeight": null,
      "useGriddleStyles": true,
      "useGriddleIcons": true,
      "isSubGriddle": false,
      "parentRowCollapsedClassName": "parent-row",
      "parentRowExpandedClassName": "parent-row expanded",
      "parentRowCollapsedComponent": "▶",
      "parentRowExpandedComponent": "▼",
      "externalLoadingComponent": null,
      "externalIsLoading": false,
      "onRowClick": null,
      "onRowMouseEnter": null,
      "onRowMouseLeave": null,
      "onRowWillMount": null,
      "onRowWillUnmount": null
    };
  },
  getInitialState: function getInitialState() {
    return {
      scrollTop: 0,
      scrollHeight: this.props.bodyHeight,
      clientHeight: this.props.bodyHeight
    };
  },
  componentDidMount: function componentDidMount() {
    // After the initial render, see if we need to load additional pages.
    this.gridScroll();
  },
  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    // After the subsequent renders, see if we need to load additional pages.
    this.gridScroll();
  },
  gridScroll: function gridScroll() {
    if (this.props.enableInfiniteScroll && !this.props.externalIsLoading) {
      // If the scroll height is greater than the current amount of rows displayed, update the page.
      var scrollable = this.refs.scrollable;
      var scrollTop = scrollable.scrollTop;
      var scrollHeight = scrollable.scrollHeight;
      var clientHeight = scrollable.clientHeight;

      // If the scroll position changed and the difference is greater than a row height
      if (this.props.rowHeight !== null && this.state.scrollTop !== scrollTop && Math.abs(this.state.scrollTop - scrollTop) >= this.getAdjustedRowHeight()) {
        var newState = {
          scrollTop: scrollTop,
          scrollHeight: scrollHeight,
          clientHeight: clientHeight
        };

        // Set the state to the new state
        this.setState(newState);
      }

      // Determine the diff by subtracting the amount scrolled by the total height, taking into consideratoin
      // the spacer's height.
      var scrollHeightDiff = scrollHeight - (scrollTop + clientHeight) - this.props.infiniteScrollLoadTreshold;

      // Make sure that we load results a little before reaching the bottom.
      var compareHeight = scrollHeightDiff * 0.6;

      if (compareHeight <= this.props.infiniteScrollLoadTreshold) {
        this.props.nextPage();
      }
    }
  },
  verifyProps: function verifyProps() {
    if (this.props.columnSettings === null) {
      console.error("gridTable: The columnSettings prop is null and it shouldn't be");
    }
    if (this.props.rowSettings === null) {
      console.error("gridTable: The rowSettings prop is null and it shouldn't be");
    }
  },
  getAdjustedRowHeight: function getAdjustedRowHeight() {
    return this.props.rowHeight + this.props.paddingHeight * 2; // account for padding.
  },
  getNodeContent: function getNodeContent() {
    this.verifyProps();
    var that = this;

    //figure out if we need to wrap the group in one tbody or many
    var anyHasChildren = false;

    // If the data is still being loaded, don't build the nodes unless this is an infinite scroll table.
    if (!this.props.externalIsLoading || this.props.enableInfiniteScroll) {
      var nodeData = that.props.data;
      var aboveSpacerRow = null;
      var belowSpacerRow = null;
      var usingDefault = false;

      // If we have a row height specified, only render what's going to be visible.
      if (this.props.enableInfiniteScroll && this.props.rowHeight !== null && this.refs.scrollable !== undefined) {
        var adjustedHeight = that.getAdjustedRowHeight();
        var visibleRecordCount = Math.ceil(that.state.clientHeight / adjustedHeight);

        // Inspired by : http://jsfiddle.net/vjeux/KbWJ2/9/
        var displayStart = Math.max(0, Math.floor(that.state.scrollTop / adjustedHeight) - visibleRecordCount * 0.25);
        var displayEnd = Math.min(displayStart + visibleRecordCount * 1.25, this.props.data.length - 1);

        // Split the amount of nodes.
        nodeData = nodeData.slice(displayStart, displayEnd + 1);

        // Set the above and below nodes.
        var aboveSpacerRowStyle = { height: displayStart * adjustedHeight + "px" };
        aboveSpacerRow = React.createElement('tr', { key: 'above-' + aboveSpacerRowStyle.height, style: aboveSpacerRowStyle });
        var belowSpacerRowStyle = { height: (this.props.data.length - displayEnd) * adjustedHeight + "px" };
        belowSpacerRow = React.createElement('tr', { key: 'below-' + belowSpacerRowStyle.height, style: belowSpacerRowStyle });
      }

      var nodes = nodeData.map(function (row, index) {
        var hasChildren = typeof row["children"] !== "undefined" && row["children"].length > 0;
        var uniqueId = that.props.rowSettings.getRowKey(row, index);

        //at least one item in the group has children.
        if (hasChildren) {
          anyHasChildren = hasChildren;
        }

        return React.createElement(GridRowContainer, {
          useGriddleStyles: that.props.useGriddleStyles,
          isSubGriddle: that.props.isSubGriddle,
          parentRowExpandedClassName: that.props.parentRowExpandedClassName,
          parentRowCollapsedClassName: that.props.parentRowCollapsedClassName,
          parentRowExpandedComponent: that.props.parentRowExpandedComponent,
          parentRowCollapsedComponent: that.props.parentRowCollapsedComponent,
          data: row,
          key: uniqueId + '-container',
          uniqueId: uniqueId,
          columnSettings: that.props.columnSettings,
          rowSettings: that.props.rowSettings,
          paddingHeight: that.props.paddingHeight,
          multipleSelectionSettings: that.props.multipleSelectionSettings,
          rowHeight: that.props.rowHeight,
          hasChildren: hasChildren,
          tableClassName: that.props.className,
          onRowClick: that.props.onRowClick,
          onRowMouseEnter: that.props.onRowMouseEnter,
          onRowMouseLeave: that.props.onRowMouseLeave,
          onRowWillMount: that.props.onRowWillMount,
          onRowWillUnmount: that.props.onRowWillUnmount
        });
      });

      // no data section
      if (this.props.showNoData) {
        var colSpan = this.props.columnSettings.getVisibleColumnCount();
        nodes.push(React.createElement('tr', { key: 'no-data-section' }, React.createElement('td', { colSpan: colSpan }, this.props.noDataSection)));
      }

      // Add the spacer rows for nodes we're not rendering.
      if (aboveSpacerRow) {
        nodes.unshift(aboveSpacerRow);
      }
      if (belowSpacerRow) {
        nodes.push(belowSpacerRow);
      }

      // Send back the nodes.
      return {
        nodes: nodes,
        anyHasChildren: anyHasChildren
      };
    } else {
      return null;
    }
  },
  render: function render() {
    var that = this;
    var nodes = [];

    // for if we need to wrap the group in one tbody or many
    var anyHasChildren = false;

    // Grab the nodes to render
    var nodeContent = this.getNodeContent();
    if (nodeContent) {
      nodes = nodeContent.nodes;
      anyHasChildren = nodeContent.anyHasChildren;
    }

    var gridStyle = null;
    var loadingContent = null;
    var tableStyle = {
      width: "100%"
    };

    if (this.props.useFixedLayout) {
      tableStyle.tableLayout = "fixed";
    }

    if (this.props.enableInfiniteScroll) {
      // If we're enabling infinite scrolling, we'll want to include the max height of the grid body + allow scrolling.
      gridStyle = {
        "position": "relative",
        "overflowY": "scroll",
        "height": this.props.bodyHeight + "px",
        "width": "100%"
      };
    }

    // If we're currently loading, populate the loading content
    if (this.props.externalIsLoading) {
      var defaultLoadingStyle = null;
      var defaultColSpan = null;

      if (this.props.useGriddleStyles) {
        defaultLoadingStyle = {
          textAlign: "center",
          paddingBottom: "40px"
        };
      }

      defaultColSpan = this.props.columnSettings.getVisibleColumnCount();

      var loadingComponent = this.props.externalLoadingComponent ? React.createElement(this.props.externalLoadingComponent, null) : React.createElement('div', null, 'Loading...');

      loadingContent = React.createElement('tbody', null, React.createElement('tr', null, React.createElement('td', { style: defaultLoadingStyle, colSpan: defaultColSpan }, loadingComponent)));
    }

    //construct the table heading component
    var tableHeading = this.props.showTableHeading ? React.createElement(GridTitle, { useGriddleStyles: this.props.useGriddleStyles, useGriddleIcons: this.props.useGriddleIcons,
      sortSettings: this.props.sortSettings,
      multipleSelectionSettings: this.props.multipleSelectionSettings,
      columnSettings: this.props.columnSettings,
      filterByColumn: this.props.filterByColumn,
      rowSettings: this.props.rowSettings }) : undefined;

    //check to see if any of the rows have children... if they don't wrap everything in a tbody so the browser doesn't auto do this
    if (!anyHasChildren) {
      nodes = React.createElement('tbody', null, nodes);
    }

    var pagingContent = React.createElement('tbody', null);
    if (this.props.showPager) {
      var pagingStyles = this.props.useGriddleStyles ? {
        padding: "0px",
        backgroundColor: "#EDEDED",
        border: "0px",
        color: "#222",
        height: this.props.showNoData ? "20px" : null
      } : null;
      pagingContent = React.createElement('tbody', null, React.createElement('tr', null, React.createElement('td', { colSpan: this.props.multipleSelectionSettings.isMultipleSelection ? this.props.columnSettings.getVisibleColumnCount() + 1 : this.props.columnSettings.getVisibleColumnCount(), style: pagingStyles, className: 'footer-container' }, !this.props.showNoData ? this.props.pagingContent : null)));
    }

    // If we have a fixed header, split into two tables.
    if (this.props.useFixedHeader) {
      if (this.props.useGriddleStyles) {
        tableStyle.tableLayout = "fixed";
      }

      return React.createElement('div', null, React.createElement('table', { className: this.props.className, style: this.props.useGriddleStyles && tableStyle || null }, tableHeading), React.createElement('div', { ref: 'scrollable', onScroll: this.gridScroll, style: gridStyle }, React.createElement('table', { className: this.props.className, style: this.props.useGriddleStyles && tableStyle || null }, nodes, loadingContent, pagingContent)));
    }

    return React.createElement('div', { ref: 'scrollable', onScroll: this.gridScroll, style: gridStyle }, React.createElement('table', { className: this.props.className, style: this.props.useGriddleStyles && tableStyle || null }, tableHeading, nodes, loadingContent, pagingContent));
  }
});

module.exports = GridTable;


/***/ }),

/***/ "./node_modules/griddle-react/modules/gridTitle.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
 */


var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");
var ColumnProperties = __webpack_require__("./node_modules/griddle-react/modules/columnProperties.js");
var assign = __webpack_require__("./node_modules/lodash/assign.js");

var DefaultHeaderComponent = createReactClass({
    render: function render() {
        return React.createElement('span', null, this.props.displayName);
    }
});

var GridTitle = createReactClass({
    getDefaultProps: function getDefaultProps() {
        return {
            "columnSettings": null,
            "filterByColumn": function filterByColumn() {},
            "rowSettings": null,
            "sortSettings": null,
            "multipleSelectionSettings": null,
            "headerStyle": null,
            "useGriddleStyles": true,
            "useGriddleIcons": true,
            "headerStyles": {}
        };
    },
    componentWillMount: function componentWillMount() {
        this.verifyProps();
    },
    sort: function sort(column) {
        var that = this;
        return function (event) {
            that.props.sortSettings.changeSort(column);
        };
    },
    toggleSelectAll: function toggleSelectAll(event) {
        this.props.multipleSelectionSettings.toggleSelectAll();
    },
    handleSelectionChange: function handleSelectionChange(event) {
        //hack to get around warning message that's not helpful in this case
        return;
    },
    verifyProps: function verifyProps() {
        if (this.props.columnSettings === null) {
            console.error("gridTitle: The columnSettings prop is null and it shouldn't be");
        }

        if (this.props.sortSettings === null) {
            console.error("gridTitle: The sortSettings prop is null and it shouldn't be");
        }
    },
    render: function render() {
        this.verifyProps();
        var that = this;
        var titleStyles = {};

        var nodes = this.props.columnSettings.getColumns().map(function (col, index) {
            var defaultTitleStyles = {};
            var columnSort = "";
            var columnIsSortable = that.props.columnSettings.getMetadataColumnProperty(col, "sortable", true);
            var sortComponent = columnIsSortable ? that.props.sortSettings.sortDefaultComponent : null;

            if (that.props.sortSettings.sortColumn == col && that.props.sortSettings.sortDirection === 'asc') {
                columnSort = that.props.sortSettings.sortAscendingClassName;
                sortComponent = that.props.useGriddleIcons && that.props.sortSettings.sortAscendingComponent;
            } else if (that.props.sortSettings.sortColumn == col && that.props.sortSettings.sortDirection === 'desc') {
                columnSort += that.props.sortSettings.sortDescendingClassName;
                sortComponent = that.props.useGriddleIcons && that.props.sortSettings.sortDescendingComponent;
            }

            var meta = that.props.columnSettings.getColumnMetadataByName(col);
            var displayName = that.props.columnSettings.getMetadataColumnProperty(col, "displayName", col);
            var HeaderComponent = that.props.columnSettings.getMetadataColumnProperty(col, "customHeaderComponent", DefaultHeaderComponent);
            var headerProps = that.props.columnSettings.getMetadataColumnProperty(col, "customHeaderComponentProps", {});

            columnSort = meta == null ? columnSort : (columnSort && columnSort + " " || columnSort) + that.props.columnSettings.getMetadataColumnProperty(col, "cssClassName", "");

            if (that.props.useGriddleStyles) {
                defaultTitleStyles = {
                    backgroundColor: "#EDEDEF",
                    border: "0px",
                    borderBottom: "1px solid #DDD",
                    color: "#222",
                    padding: "5px",
                    cursor: columnIsSortable ? "pointer" : "default"
                };
            }
            titleStyles = meta && meta.titleStyles ? assign({}, defaultTitleStyles, meta.titleStyles) : assign({}, defaultTitleStyles);

            var ComponentClass = displayName ? 'th' : 'td';
            return React.createElement(ComponentClass, { onClick: columnIsSortable ? that.sort(col) : null, 'data-title': col, className: columnSort, key: col,
                style: titleStyles }, React.createElement(HeaderComponent, _extends({ columnName: col, displayName: displayName,
                filterByColumn: that.props.filterByColumn }, headerProps)), sortComponent);
        });

        if (nodes && this.props.multipleSelectionSettings.isMultipleSelection) {
            nodes.unshift(React.createElement('th', { key: 'selection', onClick: this.toggleSelectAll, style: titleStyles, className: 'griddle-select griddle-select-title' }, React.createElement('input', {
                type: 'checkbox',
                checked: this.props.multipleSelectionSettings.getIsSelectAllChecked(),
                onChange: this.handleSelectionChange
            })));
        }

        //Get the row from the row settings.
        var className = that.props.rowSettings && that.props.rowSettings.getHeaderRowMetadataClass() || null;

        return React.createElement('thead', null, React.createElement('tr', {
            className: className,
            style: this.props.headerStyles }, nodes));
    }
});

module.exports = GridTitle;


/***/ }),

/***/ "./node_modules/griddle-react/modules/griddle.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   Griddle - Simple Grid Component for React
   https://github.com/DynamicTyped/Griddle
   Copyright (c) 2014 Ryan Lanciaux | DynamicTyped

   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var React = __webpack_require__(0);
var PropTypes = __webpack_require__(1);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");
var GridTable = __webpack_require__("./node_modules/griddle-react/modules/gridTable.jsx.js");
var GridFilter = __webpack_require__("./node_modules/griddle-react/modules/gridFilter.jsx.js");
var GridPagination = __webpack_require__("./node_modules/griddle-react/modules/gridPagination.jsx.js");
var GridSettings = __webpack_require__("./node_modules/griddle-react/modules/gridSettings.jsx.js");
var GridNoData = __webpack_require__("./node_modules/griddle-react/modules/gridNoData.jsx.js");
var GridRow = __webpack_require__("./node_modules/griddle-react/modules/gridRow.jsx.js");
var GridRowContainer = __webpack_require__("./node_modules/griddle-react/modules/gridRowContainer.jsx.js");
var CustomRowComponentContainer = __webpack_require__("./node_modules/griddle-react/modules/customRowComponentContainer.jsx.js");
var CustomPaginationContainer = __webpack_require__("./node_modules/griddle-react/modules/customPaginationContainer.jsx.js");
var CustomFilterContainer = __webpack_require__("./node_modules/griddle-react/modules/customFilterContainer.jsx.js");
var ColumnProperties = __webpack_require__("./node_modules/griddle-react/modules/columnProperties.js");
var RowProperties = __webpack_require__("./node_modules/griddle-react/modules/rowProperties.js");
var deep = __webpack_require__("./node_modules/griddle-react/modules/deep.js");

var drop = __webpack_require__("./node_modules/lodash/drop.js");
var dropRight = __webpack_require__("./node_modules/lodash/dropRight.js");
var find = __webpack_require__("./node_modules/lodash/find.js");
var first = __webpack_require__("./node_modules/lodash/take.js");
var forEach = __webpack_require__("./node_modules/lodash/forEach.js");
var initial = __webpack_require__("./node_modules/lodash/initial.js");
var intersection = __webpack_require__("./node_modules/lodash/intersection.js");
var isArray = __webpack_require__("./node_modules/lodash/isArray.js");
var isEmpty = __webpack_require__("./node_modules/lodash/isEmpty.js");
var isNull = __webpack_require__("./node_modules/lodash/isNull.js");
var isUndefined = __webpack_require__("./node_modules/lodash/isUndefined.js");
var omit = __webpack_require__("./node_modules/lodash/omit.js");
var map = __webpack_require__("./node_modules/lodash/map.js");
var extend = __webpack_require__("./node_modules/lodash/assign.js");
var _filter = __webpack_require__("./node_modules/lodash/filter.js");

var _orderBy = __webpack_require__("./node_modules/lodash/orderBy.js");
var _property = __webpack_require__("./node_modules/lodash/property.js");
var _get = __webpack_require__("./node_modules/lodash/get.js");
var _some = __webpack_require__("./node_modules/lodash/some.js");

var Griddle = createReactClass({
    statics: {
        GridTable: GridTable,
        GridFilter: GridFilter,
        GridPagination: GridPagination,
        GridSettings: GridSettings,
        GridRow: GridRow
    },
    columnSettings: null,
    rowSettings: null,
    getDefaultProps: function getDefaultProps() {
        return {
            "columns": [],
            "gridMetadata": null,
            "columnMetadata": [],
            "rowMetadata": null,
            "results": [], // Used if all results are already loaded.
            "initialSort": "",
            "gridClassName": "",
            "tableClassName": "",
            "customRowComponentClassName": "",
            "settingsText": "Settings",
            "filterPlaceholderText": "Filter Results",
            "nextText": "Next",
            "previousText": "Previous",
            "maxRowsText": "Rows per page",
            "enableCustomFormatText": "Enable Custom Formatting",
            //this column will determine which column holds subgrid data
            //it will be passed through with the data object but will not be rendered
            "childrenColumnName": "children",
            //Any column in this list will be treated as metadata and will be passed through with the data but won't be rendered
            "metadataColumns": [],
            "showFilter": false,
            "showSettings": false,
            "useCustomRowComponent": false,
            "useCustomGridComponent": false,
            "useCustomPagerComponent": false,
            "useCustomFilterer": false,
            "useCustomFilterComponent": false,
            "useGriddleStyles": true,
            "useGriddleIcons": true,
            "customRowComponent": null,
            "customGridComponent": null,
            "customPagerComponent": {},
            "customFilterComponent": null,
            "customFilterer": null,
            "globalData": null,
            "enableToggleCustom": false,
            "noDataMessage": "There is no data to display.",
            "noDataClassName": "griddle-nodata",
            "customNoDataComponent": null,
            "customNoDataComponentProps": null,
            "allowEmptyGrid": false,
            "showTableHeading": true,
            "showPager": true,
            "useFixedHeader": false,
            "useExternal": false,
            "externalSetPage": null,
            "externalChangeSort": null,
            "externalSetFilter": null,
            "externalSetPageSize": null,
            "externalMaxPage": null,
            "externalCurrentPage": null,
            "externalSortColumn": null,
            "externalSortAscending": true,
            "externalLoadingComponent": null,
            "externalIsLoading": false,
            "enableInfiniteScroll": false,
            "bodyHeight": null,
            "paddingHeight": 5,
            "rowHeight": 25,
            "infiniteScrollLoadTreshold": 50,
            "useFixedLayout": true,
            "isSubGriddle": false,
            "enableSort": true,
            "onRowClick": null,
            "onRowMouseEnter": null,
            "onRowMouseLeave": null,
            "onRowWillMount": null,
            "onRowWillUnmount": null,
            /* css class names */
            "sortAscendingClassName": "sort-ascending",
            "sortDescendingClassName": "sort-descending",
            "parentRowCollapsedClassName": "parent-row",
            "parentRowExpandedClassName": "parent-row expanded",
            "settingsToggleClassName": "settings",
            "nextClassName": "griddle-next",
            "previousClassName": "griddle-previous",
            "headerStyles": {},
            /* icon components */
            "sortAscendingComponent": " ▲",
            "sortDescendingComponent": " ▼",
            "sortDefaultComponent": null,
            "parentRowCollapsedComponent": "▶",
            "parentRowExpandedComponent": "▼",
            "settingsIconComponent": "",
            "nextIconComponent": "",
            "previousIconComponent": "",
            "isMultipleSelection": false, //currently does not support subgrids
            "selectedRowIds": [],
            "uniqueIdentifier": "id",
            "onSelectionChange": null,
            "columnFilterFunc": null
        };
    },
    propTypes: {
        isMultipleSelection: PropTypes.bool,
        selectedRowIds: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.arrayOf(PropTypes.string)]),
        uniqueIdentifier: PropTypes.string,
        onSelectionChange: PropTypes.func,
        columnFilterFunc: PropTypes.func
    },
    defaultFilter: function defaultFilter(results, filter) {
        var that = this;
        return _filter(results, function (item) {
            var arr = deep.keys(item);
            for (var i = 0; i < arr.length; i++) {
                var isFilterable = that.columnSettings.getMetadataColumnProperty(arr[i], "filterable", true);
                if (isFilterable && (deep.getAt(item, arr[i]) || "").toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                    return true;
                }
            }
            return false;
        });
    },

    defaultColumnFilter: function defaultColumnFilter(columnName, value, filter) {
        var filters = map(isArray(filter) ? filter : [filter], function (filter) {
            return (filter || '').toLowerCase();
        });
        return _some(deep.getObjectValues(value), function (value) {
            value = value.toString().toLowerCase();
            return _some(filters, function (filter) {
                return value.indexOf(filter) >= 0;
            });
        });
    },

    filterByColumnFilters: function filterByColumnFilters(columnFilters) {
        var filterFunction = this.props.columnFilterFunc || this.defaultColumnFilter;
        var filteredResults = Object.keys(columnFilters).reduce(function (previous, current) {
            return _filter(previous, function (item) {
                var value = deep.getAt(item, current || "");
                var filter = columnFilters[current];
                return filterFunction(current || '', value, filter);
            });
        }, this.props.results);

        var newState = {
            columnFilters: columnFilters
        };

        if (columnFilters) {
            newState.filteredResults = filteredResults;
            newState.maxPage = this.getMaxPage(newState.filteredResults);
        } else if (this.state.filter) {
            newState.filteredResults = this.props.useCustomFilterer ? this.props.customFilterer(this.props.results, filter) : this.defaultFilter(this.props.results, filter);
        } else {
            newState.filteredResults = null;
        }

        this.setState(newState);
    },

    filterByColumn: function filterByColumn(filter, column) {
        var columnFilters = this.state.columnFilters;

        //if filter is "" remove it from the columnFilters object
        if (columnFilters.hasOwnProperty(column) && !filter) {
            columnFilters = omit(columnFilters, column);
        } else {
            var newObject = {};
            newObject[column] = filter;
            columnFilters = extend({}, columnFilters, newObject);
        }

        this.filterByColumnFilters(columnFilters);
    },

    /* if we have a filter display the max page and results accordingly */
    setFilter: function setFilter(filter) {
        var updatedResults = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

        if (this.props.useExternal) {
            this.props.externalSetFilter(filter);
            return;
        }

        var that = this,
            updatedState = {
            page: 0,
            filter: filter
        };

        // Obtain the state results.
        updatedState.filteredResults = this.props.useCustomFilterer ? this.props.customFilterer(updatedResults || this.props.results, filter) : this.defaultFilter(updatedResults || this.props.results, filter);

        // Update the max page.
        updatedState.maxPage = that.getMaxPage(updatedState.filteredResults);

        //if filter is null or undefined reset the filter.
        if (isUndefined(filter) || isNull(filter) || isEmpty(filter)) {
            updatedState.filter = filter;
            updatedState.filteredResults = null;
        }

        // Set the state.
        that.setState(updatedState);

        this._resetSelectedRows();
    },
    setPageSize: function setPageSize(size) {
        if (this.props.useExternal) {
            this.setState({
                resultsPerPage: size
            });
            this.props.externalSetPageSize(size);
            return;
        }
        //make this better.
        this.state.resultsPerPage = size;
        this.setMaxPage();
    },
    toggleColumnChooser: function toggleColumnChooser() {
        this.setState({
            showColumnChooser: !this.state.showColumnChooser
        });
    },
    isNullOrUndefined: function isNullOrUndefined(value) {
        return value === undefined || value === null;
    },
    shouldUseCustomRowComponent: function shouldUseCustomRowComponent() {
        return this.isNullOrUndefined(this.state.useCustomRowComponent) ? this.props.useCustomRowComponent : this.state.useCustomRowComponent;
    },
    shouldUseCustomGridComponent: function shouldUseCustomGridComponent() {
        return this.isNullOrUndefined(this.state.useCustomGridComponent) ? this.props.useCustomGridComponent : this.state.useCustomGridComponent;
    },
    toggleCustomComponent: function toggleCustomComponent() {
        if (this.state.customComponentType === "grid") {
            this.setState({
                useCustomGridComponent: !this.shouldUseCustomGridComponent()
            });
        } else if (this.state.customComponentType === "row") {
            this.setState({
                useCustomRowComponent: !this.shouldUseCustomRowComponent()
            });
        }
    },
    getMaxPage: function getMaxPage(results, totalResults) {
        if (this.props.useExternal) {
            return this.props.externalMaxPage;
        }

        if (!totalResults) {
            totalResults = (results || this.getCurrentResults()).length;
        }
        var maxPage = Math.ceil(totalResults / this.state.resultsPerPage);
        return maxPage;
    },
    setMaxPage: function setMaxPage(results) {
        var maxPage = this.getMaxPage(results);
        //re-render if we have new max page value
        if (this.state.maxPage !== maxPage) {
            this.setState({ page: 0, maxPage: maxPage, filteredColumns: this.columnSettings.filteredColumns });
        }
    },
    setPage: function setPage(number) {
        if (this.props.useExternal) {
            this.props.externalSetPage(number);
            return;
        }

        //check page size and move the filteredResults to pageSize * pageNumber
        if (number * this.state.resultsPerPage <= this.state.resultsPerPage * this.state.maxPage) {
            var that = this,
                state = {
                page: number
            };

            that.setState(state);
        }

        //When infinite scrolling is enabled, uncheck the "select all" checkbox, since more unchecked rows will be appended at the end
        if (this.props.enableInfiniteScroll) {
            this.setState({
                isSelectAllChecked: false
            });
        }
    },
    setColumns: function setColumns(columns) {
        this.columnSettings.filteredColumns = isArray(columns) ? columns : [columns];

        this.setState({
            filteredColumns: this.columnSettings.filteredColumns
        });
    },
    nextPage: function nextPage() {
        var currentPage = this.getCurrentPage();
        if (currentPage < this.getCurrentMaxPage() - 1) {
            this.setPage(currentPage + 1);
        }
    },
    previousPage: function previousPage() {
        var currentPage = this.getCurrentPage();
        if (currentPage > 0) {
            this.setPage(currentPage - 1);
        }
    },
    changeSort: function changeSort(column) {
        if (this.props.enableSort === false) {
            return;
        }

        if (this.props.useExternal) {
            var isAscending = this.props.externalSortColumn === column ? !this.props.externalSortAscending : true;
            this.setState({
                sortColumn: column,
                sortDirection: isAscending ? 'asc' : 'desc'
            });
            this.props.externalChangeSort(column, isAscending);
            return;
        }
        var columnMeta = find(this.props.columnMetadata, { columnName: column }) || {};
        var sortDirectionCycle = columnMeta.sortDirectionCycle ? columnMeta.sortDirectionCycle : [null, 'asc', 'desc'];
        var sortDirection = null;
        // Find the current position in the cycle (or -1).
        var i = sortDirectionCycle.indexOf(this.state.sortDirection && column === this.state.sortColumn ? this.state.sortDirection : null);

        // Proceed to the next position in the cycle (or start at the beginning).
        i = (i + 1) % sortDirectionCycle.length;

        if (sortDirectionCycle[i]) {
            sortDirection = sortDirectionCycle[i];
        } else {
            sortDirection = null;
        }

        var state = {
            page: 0,
            sortColumn: column,
            sortDirection: sortDirection
        };

        this.setState(state);
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        // Check if results props changed
        if (nextProps.results !== this.props.results) {
            this.setFilter(this.state.filter, nextProps.results);
        }

        this.setMaxPage(nextProps.results);
        if (nextProps.resultsPerPage !== this.props.resultsPerPage) {
            this.setPageSize(nextProps.resultsPerPage);
        }
        //This will updaet the column Metadata
        this.columnSettings.columnMetadata = nextProps.columnMetadata;
        if (nextProps.results.length > 0) {
            var deepKeys = deep.keys(nextProps.results[0]);

            var is_same = this.columnSettings.allColumns.length == deepKeys.length && this.columnSettings.allColumns.every(function (element, index) {
                return element === deepKeys[index];
            });

            if (!is_same) {
                this.columnSettings.allColumns = deepKeys;
            }
        } else if (this.columnSettings.allColumns.length > 0) {
            this.columnSettings.allColumns = [];
        }

        if (nextProps.selectedRowIds) {
            var visibleRows = this.getDataForRender(this.getCurrentResults(nextProps.results), this.columnSettings.getColumns(), true);

            this.setState({
                isSelectAllChecked: this._getAreAllRowsChecked(nextProps.selectedRowIds, map(visibleRows, this.props.uniqueIdentifier)),
                selectedRowIds: nextProps.selectedRowIds
            });
        }
    },
    getInitialState: function getInitialState() {
        var state = {
            maxPage: 0,
            page: 0,
            filteredResults: null,
            filteredColumns: [],
            filter: "",
            //this sets the individual column filters
            columnFilters: {},
            resultsPerPage: this.props.resultsPerPage || 5,
            showColumnChooser: false,
            isSelectAllChecked: false,
            selectedRowIds: this.props.selectedRowIds
        };
        return state;
    },
    componentWillMount: function componentWillMount() {
        this.verifyExternal();
        this.verifyCustom();

        this.columnSettings = new ColumnProperties(this.props.results.length > 0 ? deep.keys(this.props.results[0]) : [], this.props.columns, this.props.childrenColumnName, this.props.columnMetadata, this.props.metadataColumns);

        this.rowSettings = new RowProperties(this.props.rowMetadata, this.props.useCustomTableRowComponent && this.props.customTableRowComponent ? this.props.customTableRowComponent : GridRow, this.props.useCustomTableRowComponent);

        if (this.props.initialSort) {
            // shouldn't change Sort on init for external
            if (this.props.useExternal) {
                this.setState({
                    sortColumn: this.props.externalSortColumn,
                    sortDirection: this.props.externalSortAscending ? 'asc' : 'desc'
                });
            } else {
                this.changeSort(this.props.initialSort);
            }
        }
        this.setMaxPage();

        //don't like the magic strings
        if (this.shouldUseCustomGridComponent()) {
            this.setState({
                customComponentType: "grid"
            });
        } else if (this.shouldUseCustomRowComponent()) {
            this.setState({
                customComponentType: "row"
            });
        } else {
            this.setState({
                filteredColumns: this.columnSettings.filteredColumns
            });
        }
    },
    componentDidMount: function componentDidMount() {
        if (this.props.componentDidMount && typeof this.props.componentDidMount === "function") {
            return this.props.componentDidMount();
        }
    },
    componentDidUpdate: function componentDidUpdate() {
        if (this.props.componentDidUpdate && typeof this.props.componentDidUpdate === "function") {
            return this.props.componentDidUpdate(this.state);
        }
    },
    //todo: clean these verify methods up
    verifyExternal: function verifyExternal() {
        if (this.props.useExternal === true) {
            //hooray for big ugly nested if
            if (this.props.externalSetPage === null) {
                console.error("useExternal is set to true but there is no externalSetPage function specified.");
            }

            if (this.props.externalChangeSort === null) {
                console.error("useExternal is set to true but there is no externalChangeSort function specified.");
            }

            if (this.props.externalSetFilter === null) {
                console.error("useExternal is set to true but there is no externalSetFilter function specified.");
            }

            if (this.props.externalSetPageSize === null) {
                console.error("useExternal is set to true but there is no externalSetPageSize function specified.");
            }

            if (this.props.externalMaxPage === null) {
                console.error("useExternal is set to true but externalMaxPage is not set.");
            }

            if (this.props.externalCurrentPage === null) {
                console.error("useExternal is set to true but externalCurrentPage is not set. Griddle will not page correctly without that property when using external data.");
            }
        }
    },
    //TODO: Do this with propTypes
    verifyCustom: function verifyCustom() {
        if (this.props.useCustomGridComponent === true && this.props.customGridComponent === null) {
            console.error("useCustomGridComponent is set to true but no custom component was specified.");
        }
        if (this.props.useCustomRowComponent === true && this.props.customRowComponent === null) {
            console.error("useCustomRowComponent is set to true but no custom component was specified.");
        }
        if (this.props.useCustomGridComponent === true && this.props.useCustomRowComponent === true) {
            console.error("Cannot currently use both customGridComponent and customRowComponent.");
        }
        if (this.props.useCustomFilterer === true && this.props.customFilterer === null) {
            console.error("useCustomFilterer is set to true but no custom filter function was specified.");
        }
        if (this.props.useCustomFilterComponent === true && this.props.customFilterComponent === null) {
            console.error("useCustomFilterComponent is set to true but no customFilterComponent was specified.");
        }
    },
    getDataForRender: function getDataForRender(data, cols, pageList) {
        var _this = this;

        var that = this;

        if (!this.props.useExternal) {
            if (this.state.sortColumn !== "") {
                var column = this.state.sortColumn;
                var sortColumn = _filter(this.props.columnMetadata, { columnName: column });
                var customCompareFn;
                var multiSort = {
                    columns: [],
                    orders: []
                };

                if (sortColumn.length > 0) {
                    customCompareFn = sortColumn[0].hasOwnProperty("customCompareFn") && sortColumn[0]["customCompareFn"];
                    if (sortColumn[0]["multiSort"]) {
                        multiSort = sortColumn[0]["multiSort"];
                    }
                }

                if (this.state.sortDirection) {
                    if (typeof customCompareFn === 'function') {
                        if (customCompareFn.length === 2) {
                            data = data.sort(function (a, b) {
                                return customCompareFn(_get(a, column), _get(b, column));
                            });

                            if (this.state.sortDirection === 'desc') {
                                data.reverse();
                            }
                        } else if (customCompareFn.length === 1) {
                            data = _orderBy(data, function (item) {
                                return customCompareFn(_get(item, column));
                            }, [this.state.sortDirection]);
                        }
                    } else {
                        var iteratees = [function (row) {
                            return (_get(row, column) || '').toString().toLowerCase();
                        }];
                        var orders = [this.state.sortDirection];
                        multiSort.columns.forEach(function (col, i) {
                            iteratees.push(function (row) {
                                return (_get(row, col) || '').toString().toLowerCase();
                            });
                            if (multiSort.orders[i] === 'asc' || multiSort.orders[i] === 'desc') {
                                orders.push(multiSort.orders[i]);
                            } else {
                                orders.push(_this.state.sortDirection);
                            }
                        });

                        data = _orderBy(data, iteratees, orders);
                    }
                }
            }

            var currentPage = this.getCurrentPage();

            if (!this.props.useExternal && pageList && this.state.resultsPerPage * (currentPage + 1) <= this.state.resultsPerPage * this.state.maxPage && currentPage >= 0) {
                if (this.isInfiniteScrollEnabled()) {
                    // If we're doing infinite scroll, grab all results up to the current page.
                    data = first(data, (currentPage + 1) * this.state.resultsPerPage);
                } else {
                    //the 'rest' is grabbing the whole array from index on and the 'initial' is getting the first n results
                    var rest = drop(data, currentPage * this.state.resultsPerPage);
                    data = (dropRight || initial)(rest, rest.length - this.state.resultsPerPage);
                }
            }
        }

        var transformedData = [];

        for (var i = 0; i < data.length; i++) {
            var mappedData = data[i];

            if (typeof mappedData[that.props.childrenColumnName] !== "undefined" && mappedData[that.props.childrenColumnName].length > 0) {
                //internally we're going to use children instead of whatever it is so we don't have to pass the custom name around
                mappedData["children"] = that.getDataForRender(mappedData[that.props.childrenColumnName], cols, false);

                if (that.props.childrenColumnName !== "children") {
                    delete mappedData[that.props.childrenColumnName];
                }
            }

            transformedData.push(mappedData);
        }
        return transformedData;
    },
    getCurrentResults: function getCurrentResults(results) {
        return this.state.filteredResults || results || this.props.results;
    },
    getCurrentPage: function getCurrentPage() {
        return this.props.externalCurrentPage || this.state.page;
    },
    getCurrentSort: function getCurrentSort() {
        return this.props.useExternal ? this.props.externalSortColumn : this.state.sortColumn;
    },
    getCurrentSortAscending: function getCurrentSortAscending() {
        return this.props.useExternal ? this.props.externalSortAscending : this.state.sortDirection === 'asc';
    },
    getCurrentMaxPage: function getCurrentMaxPage() {
        return this.props.useExternal ? this.props.externalMaxPage : this.state.maxPage;
    },
    //This takes the props relating to sort and puts them in one object
    getSortObject: function getSortObject() {
        return {
            enableSort: this.props.enableSort,
            changeSort: this.changeSort,
            sortColumn: this.getCurrentSort(),
            sortAscending: this.getCurrentSortAscending(),
            sortDirection: this.state.sortDirection,
            sortAscendingClassName: this.props.sortAscendingClassName,
            sortDescendingClassName: this.props.sortDescendingClassName,
            sortAscendingComponent: this.props.sortAscendingComponent,
            sortDescendingComponent: this.props.sortDescendingComponent,
            sortDefaultComponent: this.props.sortDefaultComponent
        };
    },
    _toggleSelectAll: function _toggleSelectAll() {
        var visibleRows = this.getDataForRender(this.getCurrentResults(), this.columnSettings.getColumns(), true),
            newIsSelectAllChecked = !this.state.isSelectAllChecked,
            newSelectedRowIds = JSON.parse(JSON.stringify(this.state.selectedRowIds));

        var self = this;
        forEach(visibleRows, function (row) {
            self._updateSelectedRowIds(row[self.props.uniqueIdentifier], newSelectedRowIds, newIsSelectAllChecked);
        }, this);

        this.setState({
            isSelectAllChecked: newIsSelectAllChecked,
            selectedRowIds: newSelectedRowIds
        });

        if (this.props.onSelectionChange) {
            this.props.onSelectionChange(newSelectedRowIds, newIsSelectAllChecked);
        }
    },
    _toggleSelectRow: function _toggleSelectRow(row, isChecked) {
        var visibleRows = this.getDataForRender(this.getCurrentResults(), this.columnSettings.getColumns(), true),
            newSelectedRowIds = JSON.parse(JSON.stringify(this.state.selectedRowIds));

        this._updateSelectedRowIds(row[this.props.uniqueIdentifier], newSelectedRowIds, isChecked);

        var newIsSelectAllChecked = this._getAreAllRowsChecked(newSelectedRowIds, map(visibleRows, this.props.uniqueIdentifier));

        this.setState({
            isSelectAllChecked: newIsSelectAllChecked,
            selectedRowIds: newSelectedRowIds
        });

        if (this.props.onSelectionChange) {
            this.props.onSelectionChange(newSelectedRowIds, newIsSelectAllChecked);
        }
    },
    _updateSelectedRowIds: function _updateSelectedRowIds(id, selectedRowIds, isChecked) {

        var isFound;

        if (isChecked) {
            isFound = find(selectedRowIds, function (item) {
                return id === item;
            });

            if (isFound === undefined) {
                selectedRowIds.push(id);
            }
        } else {
            selectedRowIds.splice(selectedRowIds.indexOf(id), 1);
        }
    },
    _getIsSelectAllChecked: function _getIsSelectAllChecked() {

        return this.state.isSelectAllChecked;
    },
    _getAreAllRowsChecked: function _getAreAllRowsChecked(selectedRowIds, visibleRowIds) {

        return visibleRowIds.length === intersection(visibleRowIds, selectedRowIds).length;
    },
    _getIsRowChecked: function _getIsRowChecked(row) {

        return this.state.selectedRowIds.indexOf(row[this.props.uniqueIdentifier]) > -1 ? true : false;
    },
    getSelectedRowIds: function getSelectedRowIds() {

        return this.state.selectedRowIds;
    },
    _resetSelectedRows: function _resetSelectedRows() {

        this.setState({
            isSelectAllChecked: false,
            selectedRowIds: []
        });
    },
    //This takes the props relating to multiple selection and puts them in one object
    getMultipleSelectionObject: function getMultipleSelectionObject() {

        return {
            isMultipleSelection: find(this.props.results, function (result) {
                return 'children' in result;
            }) ? false : this.props.isMultipleSelection, //does not support subgrids
            toggleSelectAll: this._toggleSelectAll,
            getIsSelectAllChecked: this._getIsSelectAllChecked,
            toggleSelectRow: this._toggleSelectRow,
            getSelectedRowIds: this.getSelectedRowIds,
            getIsRowChecked: this._getIsRowChecked
        };
    },
    isInfiniteScrollEnabled: function isInfiniteScrollEnabled() {
        // If a custom pager is included, don't allow for infinite scrolling.
        if (this.props.useCustomPagerComponent) {
            return false;
        }

        // Otherwise, send back the property.
        return this.props.enableInfiniteScroll;
    },
    getClearFixStyles: function getClearFixStyles() {
        return {
            clear: "both",
            display: "table",
            width: "100%"
        };
    },
    getSettingsStyles: function getSettingsStyles() {
        return {
            "float": "left",
            width: "50%",
            textAlign: "right"
        };
    },
    getFilterStyles: function getFilterStyles() {
        return {
            "float": "left",
            width: "50%",
            textAlign: "left",
            color: "#222",
            minHeight: "1px"
        };
    },
    getFilter: function getFilter() {
        return this.props.showFilter && this.shouldUseCustomGridComponent() === false ? this.props.useCustomFilterComponent ? React.createElement(CustomFilterContainer, { changeFilter: this.setFilter, placeholderText: this.props.filterPlaceholderText, customFilterComponent: this.props.customFilterComponent, results: this.props.results, currentResults: this.getCurrentResults() }) : React.createElement(GridFilter, { changeFilter: this.setFilter, placeholderText: this.props.filterPlaceholderText }) : "";
    },
    getSettings: function getSettings() {
        return this.props.showSettings ? React.createElement('button', { type: 'button', className: this.props.settingsToggleClassName, onClick: this.toggleColumnChooser,
            style: this.props.useGriddleStyles ? { background: "none", border: "none", padding: 0, margin: 0, fontSize: 14 } : null }, this.props.settingsText, this.props.settingsIconComponent) : "";
    },
    getTopSection: function getTopSection(filter, settings) {
        if (this.props.showFilter === false && this.props.showSettings === false) {
            return "";
        }

        var filterStyles = null,
            settingsStyles = null,
            topContainerStyles = null;

        if (this.props.useGriddleStyles) {
            filterStyles = this.getFilterStyles();
            settingsStyles = this.getSettingsStyles();

            topContainerStyles = this.getClearFixStyles();
        }

        return React.createElement('div', { className: 'top-section', style: topContainerStyles }, React.createElement('div', { className: 'griddle-filter', style: filterStyles }, filter), React.createElement('div', { className: 'griddle-settings-toggle', style: settingsStyles }, settings));
    },
    getPagingSection: function getPagingSection(currentPage, maxPage) {
        if ((this.props.showPager && !this.isInfiniteScrollEnabled() && !this.shouldUseCustomGridComponent()) === false) {
            return undefined;
        }

        return React.createElement('div', { className: 'griddle-footer' }, this.props.useCustomPagerComponent ? React.createElement(CustomPaginationContainer, { customPagerComponentOptions: this.props.customPagerComponentOptions, next: this.nextPage, previous: this.previousPage, currentPage: currentPage, maxPage: maxPage, setPage: this.setPage, nextText: this.props.nextText, previousText: this.props.previousText, customPagerComponent: this.props.customPagerComponent }) : React.createElement(GridPagination, { useGriddleStyles: this.props.useGriddleStyles, next: this.nextPage, previous: this.previousPage, nextClassName: this.props.nextClassName, nextIconComponent: this.props.nextIconComponent, previousClassName: this.props.previousClassName, previousIconComponent: this.props.previousIconComponent, currentPage: currentPage, maxPage: maxPage, setPage: this.setPage, nextText: this.props.nextText, previousText: this.props.previousText }));
    },
    getColumnSelectorSection: function getColumnSelectorSection(keys, cols) {
        return this.state.showColumnChooser ? React.createElement(GridSettings, { columns: keys, selectedColumns: cols, setColumns: this.setColumns, settingsText: this.props.settingsText,
            settingsIconComponent: this.props.settingsIconComponent, maxRowsText: this.props.maxRowsText, setPageSize: this.setPageSize,
            showSetPageSize: !this.shouldUseCustomGridComponent(), resultsPerPage: this.state.resultsPerPage, enableToggleCustom: this.props.enableToggleCustom,
            toggleCustomComponent: this.toggleCustomComponent, useCustomComponent: this.shouldUseCustomRowComponent() || this.shouldUseCustomGridComponent(),
            useGriddleStyles: this.props.useGriddleStyles, enableCustomFormatText: this.props.enableCustomFormatText, columnMetadata: this.props.columnMetadata }) : "";
    },
    getCustomGridSection: function getCustomGridSection() {
        return React.createElement(this.props.customGridComponent, _extends({ data: this.props.results, className: this.props.customGridComponentClassName }, this.props.gridMetadata));
    },
    getCustomRowSection: function getCustomRowSection(data, cols, meta, pagingContent, globalData) {
        return React.createElement('div', null, React.createElement(CustomRowComponentContainer, { data: data, columns: cols, metadataColumns: meta, globalData: globalData,
            className: this.props.customRowComponentClassName, customComponent: this.props.customRowComponent,
            style: this.props.useGriddleStyles ? this.getClearFixStyles() : null }), this.props.showPager && pagingContent);
    },
    getStandardGridSection: function getStandardGridSection(data, cols, meta, pagingContent, hasMorePages) {
        var sortProperties = this.getSortObject();
        var multipleSelectionProperties = this.getMultipleSelectionObject();

        // no data section
        var showNoData = this.shouldShowNoDataSection(data);
        var noDataSection = this.getNoDataSection();

        return React.createElement('div', { className: 'griddle-body' }, React.createElement(GridTable, { useGriddleStyles: this.props.useGriddleStyles,
            noDataSection: noDataSection,
            showNoData: showNoData,
            columnSettings: this.columnSettings,
            rowSettings: this.rowSettings,
            sortSettings: sortProperties,
            multipleSelectionSettings: multipleSelectionProperties,
            filterByColumn: this.filterByColumn,
            isSubGriddle: this.props.isSubGriddle,
            useGriddleIcons: this.props.useGriddleIcons,
            useFixedLayout: this.props.useFixedLayout,
            showPager: this.props.showPager,
            pagingContent: pagingContent,
            data: data,
            className: this.props.tableClassName,
            enableInfiniteScroll: this.isInfiniteScrollEnabled(),
            nextPage: this.nextPage,
            showTableHeading: this.props.showTableHeading,
            useFixedHeader: this.props.useFixedHeader,
            parentRowCollapsedClassName: this.props.parentRowCollapsedClassName,
            parentRowExpandedClassName: this.props.parentRowExpandedClassName,
            parentRowCollapsedComponent: this.props.parentRowCollapsedComponent,
            parentRowExpandedComponent: this.props.parentRowExpandedComponent,
            bodyHeight: this.props.bodyHeight,
            paddingHeight: this.props.paddingHeight,
            rowHeight: this.props.rowHeight,
            infiniteScrollLoadTreshold: this.props.infiniteScrollLoadTreshold,
            externalLoadingComponent: this.props.externalLoadingComponent,
            externalIsLoading: this.props.externalIsLoading,
            hasMorePages: hasMorePages,
            onRowClick: this.props.onRowClick,
            onRowMouseEnter: this.props.onRowMouseEnter,
            onRowMouseLeave: this.props.onRowMouseLeave,
            onRowWillMount: this.props.onRowWillMount,
            onRowWillUnmount: this.props.onRowWillUnmount }));
    },
    getContentSection: function getContentSection(data, cols, meta, pagingContent, hasMorePages, globalData) {
        if (this.shouldUseCustomGridComponent() && this.props.customGridComponent !== null) {
            return this.getCustomGridSection();
        } else if (this.shouldUseCustomRowComponent()) {
            return this.getCustomRowSection(data, cols, meta, pagingContent, globalData);
        } else {
            return this.getStandardGridSection(data, cols, meta, pagingContent, hasMorePages);
        }
    },
    getNoDataSection: function getNoDataSection() {
        if (this.props.customNoDataComponent != null) {
            return React.createElement('div', { className: this.props.noDataClassName }, React.createElement(this.props.customNoDataComponent, this.props.customNoDataComponentProps));
        }
        return React.createElement(GridNoData, { noDataMessage: this.props.noDataMessage });
    },
    shouldShowNoDataSection: function shouldShowNoDataSection(results) {
        if (this.props.allowEmptyGrid) {
            return false;
        }

        return this.props.useExternal === false && (typeof results === 'undefined' || results.length === 0) || this.props.useExternal === true && this.props.externalIsLoading === false && results.length === 0;
    },
    render: function render() {
        var that = this,
            results = this.getCurrentResults(); // Attempt to assign to the filtered results, if we have any.

        var headerTableClassName = this.props.tableClassName + " table-header";

        //figure out if we want to show the filter section
        var filter = this.getFilter();
        var settings = this.getSettings();

        //if we have neither filter or settings don't need to render this stuff
        var topSection = this.getTopSection(filter, settings);

        var keys = [];
        var cols = this.columnSettings.getColumns();
        //figure out which columns are displayed and show only those
        var data = this.getDataForRender(results, cols, true);

        var meta = this.columnSettings.getMetadataColumns();

        if (this.props.columnMetadata) {
            // Get column keys from column metadata
            forEach(this.props.columnMetadata, function (meta) {
                if (!(typeof meta.visible === 'boolean' && meta.visible === false)) {
                    keys.push(meta.columnName);
                }
            });
        } else {
            // Grab the column keys from the first results
            keys = deep.keys(omit(results[0], meta));
        }

        // sort keys by order
        keys = this.columnSettings.orderColumns(keys);

        // Grab the current and max page values.
        var currentPage = this.getCurrentPage();
        var maxPage = this.getCurrentMaxPage();

        // Determine if we need to enable infinite scrolling on the table.
        var hasMorePages = currentPage + 1 < maxPage;

        // Grab the paging content if it's to be displayed
        var pagingContent = this.getPagingSection(currentPage, maxPage);

        var resultContent = this.getContentSection(data, cols, meta, pagingContent, hasMorePages, this.props.globalData);

        var columnSelector = this.getColumnSelectorSection(keys, cols);

        var gridClassName = this.props.gridClassName.length > 0 ? "griddle " + this.props.gridClassName : "griddle";
        //add custom to the class name so we can style it differently
        gridClassName += this.shouldUseCustomRowComponent() ? " griddle-custom" : "";

        return React.createElement('div', { className: gridClassName }, topSection, columnSelector, React.createElement('div', { className: 'griddle-container', style: this.props.useGriddleStyles && !this.props.isSubGriddle ? { border: "1px solid #DDD" } : null }, resultContent));
    }
});

GridRowContainer.Griddle = module.exports = Griddle;


/***/ }),

/***/ "./node_modules/griddle-react/modules/rowProperties.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _uniqueId = __webpack_require__("./node_modules/lodash/uniqueId.js");

var RowProperties = (function () {
  function RowProperties() {
    var rowMetadata = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var rowComponent = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    var isCustom = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

    _classCallCheck(this, RowProperties);

    this.rowMetadata = rowMetadata;
    this.rowComponent = rowComponent;
    this.isCustom = isCustom;
    // assign unique Id to each griddle instance
  }

  _createClass(RowProperties, [{
    key: 'getRowKey',
    value: function getRowKey(row, key) {
      var uniqueId;

      if (this.hasRowMetadataKey()) {
        uniqueId = row[this.rowMetadata.key];
      } else {
        uniqueId = _uniqueId("grid_row");
      }

      //todo: add error handling

      return uniqueId;
    }
  }, {
    key: 'hasRowMetadataKey',
    value: function hasRowMetadataKey() {
      return this.hasRowMetadata() && this.rowMetadata.key !== null && this.rowMetadata.key !== undefined;
    }
  }, {
    key: 'getBodyRowMetadataClass',
    value: function getBodyRowMetadataClass(rowData) {
      if (this.hasRowMetadata() && this.rowMetadata.bodyCssClassName !== null && this.rowMetadata.bodyCssClassName !== undefined) {
        if (typeof this.rowMetadata.bodyCssClassName === 'function') {
          return this.rowMetadata.bodyCssClassName(rowData);
        } else {
          return this.rowMetadata.bodyCssClassName;
        }
      }
      return null;
    }
  }, {
    key: 'getHeaderRowMetadataClass',
    value: function getHeaderRowMetadataClass() {
      return this.hasRowMetadata() && this.rowMetadata.headerCssClassName !== null && this.rowMetadata.headerCssClassName !== undefined ? this.rowMetadata.headerCssClassName : null;
    }
  }, {
    key: 'hasRowMetadata',
    value: function hasRowMetadata() {
      return this.rowMetadata !== null;
    }
  }]);

  return RowProperties;
})();

module.exports = RowProperties;


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js"),
    root = __webpack_require__("./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__("./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__("./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__("./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__("./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__("./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__("./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__("./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__("./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__("./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__("./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js"),
    root = __webpack_require__("./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__("./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__("./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__("./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__("./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__("./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js"),
    root = __webpack_require__("./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js"),
    root = __webpack_require__("./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__("./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__("./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__("./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__("./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__("./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__("./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__("./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__("./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js"),
    root = __webpack_require__("./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__("./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__("./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__("./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__("./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__("./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__("./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__("./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__("./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__("./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__("./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__("./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__("./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__("./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__("./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__("./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__("./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__("./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__("./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__("./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__("./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__("./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__("./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__("./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__("./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__("./node_modules/lodash/isSet.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseDifference.js":
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__("./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__("./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__("./node_modules/lodash/_arrayIncludesWith.js"),
    arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js"),
    baseUnary = __webpack_require__("./node_modules/lodash/_baseUnary.js"),
    cacheHas = __webpack_require__("./node_modules/lodash/_cacheHas.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__("./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__("./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseFilter.js":
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__("./node_modules/lodash/_baseEach.js");

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__("./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__("./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__("./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__("./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__("./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__("./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__("./node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__("./node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__("./node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseIntersection.js":
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__("./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__("./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__("./node_modules/lodash/_arrayIncludesWith.js"),
    arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js"),
    baseUnary = __webpack_require__("./node_modules/lodash/_baseUnary.js"),
    cacheHas = __webpack_require__("./node_modules/lodash/_cacheHas.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseIntersection;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__("./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__("./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__("./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__("./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__("./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__("./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__("./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__("./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__("./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__("./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__("./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__("./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__("./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__("./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__("./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__("./node_modules/lodash/identity.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    property = __webpack_require__("./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__("./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__("./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__("./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__("./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__("./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__("./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__("./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__("./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__("./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__("./node_modules/lodash/get.js"),
    hasIn = __webpack_require__("./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__("./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__("./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__("./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__("./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseOrderBy.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__("./node_modules/lodash/_baseMap.js"),
    baseSortBy = __webpack_require__("./node_modules/lodash/_baseSortBy.js"),
    baseUnary = __webpack_require__("./node_modules/lodash/_baseUnary.js"),
    compareMultiple = __webpack_require__("./node_modules/lodash/_compareMultiple.js"),
    identity = __webpack_require__("./node_modules/lodash/identity.js");

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ "./node_modules/lodash/_basePick.js":
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__("./node_modules/lodash/_basePickBy.js"),
    hasIn = __webpack_require__("./node_modules/lodash/hasIn.js");

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ "./node_modules/lodash/_basePickBy.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("./node_modules/lodash/_baseGet.js"),
    baseSet = __webpack_require__("./node_modules/lodash/_baseSet.js"),
    castPath = __webpack_require__("./node_modules/lodash/_castPath.js");

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__("./node_modules/lodash/identity.js"),
    overRest = __webpack_require__("./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__("./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__("./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__("./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__("./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__("./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__("./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__("./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_baseSome.js":
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__("./node_modules/lodash/_baseEach.js");

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

module.exports = baseSome;


/***/ }),

/***/ "./node_modules/lodash/_baseSortBy.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToPairs.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js");

/**
 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
 * of key-value pairs for `object` corresponding to the property names of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the key-value pairs.
 */
function baseToPairs(object, props) {
  return arrayMap(props, function(key) {
    return [key, object[key]];
  });
}

module.exports = baseToPairs;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseUnset.js":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("./node_modules/lodash/_castPath.js"),
    last = __webpack_require__("./node_modules/lodash/last.js"),
    parent = __webpack_require__("./node_modules/lodash/_parent.js"),
    toKey = __webpack_require__("./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ "./node_modules/lodash/_baseValues.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js");

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ "./node_modules/lodash/_baseZipObject.js":
/***/ (function(module, exports) {

/**
 * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
 *
 * @private
 * @param {Array} props The property identifiers.
 * @param {Array} values The property values.
 * @param {Function} assignFunc The function to assign values.
 * @returns {Object} Returns the new object.
 */
function baseZipObject(props, values, assignFunc) {
  var index = -1,
      length = props.length,
      valsLength = values.length,
      result = {};

  while (++index < length) {
    var value = index < valsLength ? values[index] : undefined;
    assignFunc(result, props[index], value);
  }
  return result;
}

module.exports = baseZipObject;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castArrayLikeObject.js":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLikeObject = __webpack_require__("./node_modules/lodash/isArrayLikeObject.js");

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

module.exports = castArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__("./node_modules/lodash/identity.js");

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__("./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__("./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__("./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__("./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_compareAscending.js":
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ "./node_modules/lodash/_compareMultiple.js":
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__("./node_modules/lodash/_compareAscending.js");

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__("./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__("./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__("./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__("./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__("./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_createFind.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ "./node_modules/lodash/_createToPairs.js":
/***/ (function(module, exports, __webpack_require__) {

var baseToPairs = __webpack_require__("./node_modules/lodash/_baseToPairs.js"),
    getTag = __webpack_require__("./node_modules/lodash/_getTag.js"),
    mapToArray = __webpack_require__("./node_modules/lodash/_mapToArray.js"),
    setToPairs = __webpack_require__("./node_modules/lodash/_setToPairs.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Creates a `_.toPairs` or `_.toPairsIn` function.
 *
 * @private
 * @param {Function} keysFunc The function to get the keys of a given object.
 * @returns {Function} Returns the new pairs function.
 */
function createToPairs(keysFunc) {
  return function(object) {
    var tag = getTag(object);
    if (tag == mapTag) {
      return mapToArray(object);
    }
    if (tag == setTag) {
      return setToPairs(object);
    }
    return baseToPairs(object, keysFunc(object));
  };
}

module.exports = createToPairs;


/***/ }),

/***/ "./node_modules/lodash/_customOmitClone.js":
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__("./node_modules/lodash/isPlainObject.js");

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__("./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__("./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__("./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__("./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__("./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__("./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__("./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__("./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__("./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_flatRest.js":
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__("./node_modules/lodash/flatten.js"),
    overRest = __webpack_require__("./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__("./node_modules/lodash/_setToString.js");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__("./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__("./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__("./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__("./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__("./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__("./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__("./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__("./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__("./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__("./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__("./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__("./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__("./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__("./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__("./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__("./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__("./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__("./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__("./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__("./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__("./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__("./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__("./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__("./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__("./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__("./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__("./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__("./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__("./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__("./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__("./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__("./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__("./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__("./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__("./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__("./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__("./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_parent.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("./node_modules/lodash/_baseGet.js"),
    baseSlice = __webpack_require__("./node_modules/lodash/_baseSlice.js");

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_setToPairs.js":
/***/ (function(module, exports) {

/**
 * Converts `set` to its value-value pairs.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the value-value pairs.
 */
function setToPairs(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = [value, value];
  });
  return result;
}

module.exports = setToPairs;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__("./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__("./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__("./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__("./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__("./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/assign.js":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("./node_modules/lodash/_assignValue.js"),
    copyObject = __webpack_require__("./node_modules/lodash/_copyObject.js"),
    createAssigner = __webpack_require__("./node_modules/lodash/_createAssigner.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    isPrototype = __webpack_require__("./node_modules/lodash/_isPrototype.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/defaults.js":
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__("./node_modules/lodash/_baseRest.js"),
    eq = __webpack_require__("./node_modules/lodash/eq.js"),
    isIterateeCall = __webpack_require__("./node_modules/lodash/_isIterateeCall.js"),
    keysIn = __webpack_require__("./node_modules/lodash/keysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/lodash/difference.js":
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__("./node_modules/lodash/_baseDifference.js"),
    baseFlatten = __webpack_require__("./node_modules/lodash/_baseFlatten.js"),
    baseRest = __webpack_require__("./node_modules/lodash/_baseRest.js"),
    isArrayLikeObject = __webpack_require__("./node_modules/lodash/isArrayLikeObject.js");

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),

/***/ "./node_modules/lodash/drop.js":
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__("./node_modules/lodash/_baseSlice.js"),
    toInteger = __webpack_require__("./node_modules/lodash/toInteger.js");

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.drop([1, 2, 3]);
 * // => [2, 3]
 *
 * _.drop([1, 2, 3], 2);
 * // => [3]
 *
 * _.drop([1, 2, 3], 5);
 * // => []
 *
 * _.drop([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
function drop(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  return baseSlice(array, n < 0 ? 0 : n, length);
}

module.exports = drop;


/***/ }),

/***/ "./node_modules/lodash/dropRight.js":
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__("./node_modules/lodash/_baseSlice.js"),
    toInteger = __webpack_require__("./node_modules/lodash/toInteger.js");

/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.dropRight([1, 2, 3]);
 * // => [1, 2]
 *
 * _.dropRight([1, 2, 3], 2);
 * // => [1]
 *
 * _.dropRight([1, 2, 3], 5);
 * // => []
 *
 * _.dropRight([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
function dropRight(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  n = length - n;
  return baseSlice(array, 0, n < 0 ? 0 : n);
}

module.exports = dropRight;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/filter.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__("./node_modules/lodash/_arrayFilter.js"),
    baseFilter = __webpack_require__("./node_modules/lodash/_baseFilter.js"),
    baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),

/***/ "./node_modules/lodash/find.js":
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__("./node_modules/lodash/_createFind.js"),
    findIndex = __webpack_require__("./node_modules/lodash/findIndex.js");

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ "./node_modules/lodash/findIndex.js":
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__("./node_modules/lodash/_baseFindIndex.js"),
    baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js"),
    toInteger = __webpack_require__("./node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__("./node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "./node_modules/lodash/forEach.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__("./node_modules/lodash/_arrayEach.js"),
    baseEach = __webpack_require__("./node_modules/lodash/_baseEach.js"),
    castFunction = __webpack_require__("./node_modules/lodash/_castFunction.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),

/***/ "./node_modules/lodash/forOwn.js":
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__("./node_modules/lodash/_baseForOwn.js"),
    castFunction = __webpack_require__("./node_modules/lodash/_castFunction.js");

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  return object && baseForOwn(object, castFunction(iteratee));
}

module.exports = forOwn;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__("./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__("./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/includes.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__("./node_modules/lodash/_baseIndexOf.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    isString = __webpack_require__("./node_modules/lodash/isString.js"),
    toInteger = __webpack_require__("./node_modules/lodash/toInteger.js"),
    values = __webpack_require__("./node_modules/lodash/values.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;


/***/ }),

/***/ "./node_modules/lodash/initial.js":
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__("./node_modules/lodash/_baseSlice.js");

/**
 * Gets all but the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.initial([1, 2, 3]);
 * // => [1, 2]
 */
function initial(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseSlice(array, 0, -1) : [];
}

module.exports = initial;


/***/ }),

/***/ "./node_modules/lodash/intersection.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js"),
    baseIntersection = __webpack_require__("./node_modules/lodash/_baseIntersection.js"),
    baseRest = __webpack_require__("./node_modules/lodash/_baseRest.js"),
    castArrayLikeObject = __webpack_require__("./node_modules/lodash/_castArrayLikeObject.js");

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = baseRest(function(arrays) {
  var mapped = arrayMap(arrays, castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)
    : [];
});

module.exports = intersection;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__("./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__("./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__("./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isEmpty.js":
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__("./node_modules/lodash/_baseKeys.js"),
    getTag = __webpack_require__("./node_modules/lodash/_getTag.js"),
    isArguments = __webpack_require__("./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    isBuffer = __webpack_require__("./node_modules/lodash/isBuffer.js"),
    isPrototype = __webpack_require__("./node_modules/lodash/_isPrototype.js"),
    isTypedArray = __webpack_require__("./node_modules/lodash/isTypedArray.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__("./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__("./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__("./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isNull.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__("./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__("./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__("./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__("./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isString.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__("./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__("./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__("./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/isUndefined.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__("./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__("./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/last.js":
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ "./node_modules/lodash/map.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__("./node_modules/lodash/_baseMap.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js");

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__("./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/omit.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js"),
    baseClone = __webpack_require__("./node_modules/lodash/_baseClone.js"),
    baseUnset = __webpack_require__("./node_modules/lodash/_baseUnset.js"),
    castPath = __webpack_require__("./node_modules/lodash/_castPath.js"),
    copyObject = __webpack_require__("./node_modules/lodash/_copyObject.js"),
    customOmitClone = __webpack_require__("./node_modules/lodash/_customOmitClone.js"),
    flatRest = __webpack_require__("./node_modules/lodash/_flatRest.js"),
    getAllKeysIn = __webpack_require__("./node_modules/lodash/_getAllKeysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ "./node_modules/lodash/orderBy.js":
/***/ (function(module, exports, __webpack_require__) {

var baseOrderBy = __webpack_require__("./node_modules/lodash/_baseOrderBy.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js");

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

module.exports = orderBy;


/***/ }),

/***/ "./node_modules/lodash/pick.js":
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__("./node_modules/lodash/_basePick.js"),
    flatRest = __webpack_require__("./node_modules/lodash/_flatRest.js");

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__("./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__("./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__("./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__("./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/some.js":
/***/ (function(module, exports, __webpack_require__) {

var arraySome = __webpack_require__("./node_modules/lodash/_arraySome.js"),
    baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js"),
    baseSome = __webpack_require__("./node_modules/lodash/_baseSome.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isIterateeCall = __webpack_require__("./node_modules/lodash/_isIterateeCall.js");

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = some;


/***/ }),

/***/ "./node_modules/lodash/sortBy.js":
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__("./node_modules/lodash/_baseFlatten.js"),
    baseOrderBy = __webpack_require__("./node_modules/lodash/_baseOrderBy.js"),
    baseRest = __webpack_require__("./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__("./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/take.js":
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__("./node_modules/lodash/_baseSlice.js"),
    toInteger = __webpack_require__("./node_modules/lodash/toInteger.js");

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.take([1, 2, 3]);
 * // => [1]
 *
 * _.take([1, 2, 3], 2);
 * // => [1, 2]
 *
 * _.take([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.take([1, 2, 3], 0);
 * // => []
 */
function take(array, n, guard) {
  if (!(array && array.length)) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  return baseSlice(array, 0, n < 0 ? 0 : n);
}

module.exports = take;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__("./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__("./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/lodash/toPairs.js":
/***/ (function(module, exports, __webpack_require__) {

var createToPairs = __webpack_require__("./node_modules/lodash/_createToPairs.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable string keyed-value pairs for `object`
 * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
 * entries are returned.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias entries
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the key-value pairs.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.toPairs(new Foo);
 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
 */
var toPairs = createToPairs(keys);

module.exports = toPairs;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__("./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/uniqueId.js":
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__("./node_modules/lodash/toString.js");

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

module.exports = uniqueId;


/***/ }),

/***/ "./node_modules/lodash/values.js":
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__("./node_modules/lodash/_baseValues.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ "./node_modules/lodash/without.js":
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__("./node_modules/lodash/_baseDifference.js"),
    baseRest = __webpack_require__("./node_modules/lodash/_baseRest.js"),
    isArrayLikeObject = __webpack_require__("./node_modules/lodash/isArrayLikeObject.js");

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

module.exports = without;


/***/ }),

/***/ "./node_modules/lodash/zipObject.js":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("./node_modules/lodash/_assignValue.js"),
    baseZipObject = __webpack_require__("./node_modules/lodash/_baseZipObject.js");

/**
 * This method is like `_.fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 0.4.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.zipObject(['a', 'b'], [1, 2]);
 * // => { 'a': 1, 'b': 2 }
 */
function zipObject(props, values) {
  return baseZipObject(props || [], values || [], assignValue);
}

module.exports = zipObject;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/react-resize-aware/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(0)) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.ReactResizeAware = global.ReactResizeAware || {}),global.React));
}(this, (function (exports,react) { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
// react-resize-aware component
//
// Triggers a `resize` event everytime the component changes its sizes
// MIT License
// Copyright 2016, Federico Zivolo
//

var style = {
  display: 'block',
  opacity: 0,
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  pointerEvents: 'none',
  zIndex: -1
};

var ResizeAware = function (_Component) {
  _inherits(ResizeAware, _Component);

  function ResizeAware() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ResizeAware);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ResizeAware.__proto__ || Object.getPrototypeOf(ResizeAware)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleObjectLoad = function (evt) {
      _this.setState({
        resizeTarget: evt.target.contentDocument.defaultView
      }, function () {
        _this.state.resizeTarget.addEventListener('resize', _this.handleResize);
        _this.handleResize();
      });
    }, _this.handleResize = function () {
      var sizes = {
        width: _this.container.offsetWidth,
        height: _this.container.offsetHeight
      };
      _this.setState(sizes);
      _this.props.onResize && _this.props.onResize(sizes);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ResizeAware, [{
    key: 'componentDidMount',


    // Init the resizeElement
    value: function componentDidMount() {
      this.resizeElement.data = 'about:blank';
    }

    // Called when the object is loaded

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var resizeTarget = this.state.resizeTarget;

      // ensure the resizeTarget exists and is in fact an event listener
      // this fixes an issue where contentDocument.defaultView is not a real window object
      // as can be the case when used with react portals

      var isListener = resizeTarget && typeof resizeTarget.removeEventListener === 'function';

      isListener && resizeTarget.removeEventListener('resize', this.handleResize);
    }

    // Function called on component resize

  }, {
    key: 'render',
    value: function render() {
      var _sizes,
          _this2 = this;

      var _props = this.props,
          children = _props.children,
          onResize = _props.onResize,
          onlyEvent = _props.onlyEvent,
          component = _props.component,
          widthPropName = _props.widthPropName,
          heightPropName = _props.heightPropName,
          props = _objectWithoutProperties(_props, ['children', 'onResize', 'onlyEvent', 'component', 'widthPropName', 'heightPropName']);

      var _state = this.state,
          width = _state.width,
          height = _state.height;


      var hasCustomComponent = typeof component !== 'string';

      var widthProp = [widthPropName || 'width'];
      var heightProp = [heightPropName || 'height'];

      var sizes = (_sizes = {}, _defineProperty(_sizes, widthProp, width), _defineProperty(_sizes, heightProp, height), _sizes);

      return react.createElement(component, _extends(_defineProperty({}, hasCustomComponent ? 'getRef' : 'ref', function (el) {
        return _this2.container = el;
      }), hasCustomComponent && sizes, props), react.createElement('object', {
        type: 'text/html',
        style: style,
        ref: function ref(el) {
          return _this2.resizeElement = el;
        },
        onLoad: this.handleObjectLoad,
        'aria-hidden': true,
        tabIndex: -1
      }), typeof children === 'function' ? children({ width: width, height: height }) : react.Children.map(children, function (child) {
        return react.isValidElement(child) ? react.cloneElement(child, !onlyEvent ? sizes : null) : child;
      }));
    }
  }]);

  return ResizeAware;
}(react.Component);

ResizeAware.defaultProps = {
  component: 'div',
  // don't define here the defaults to avoid to break
  // the render result of previous versions
  // TODO: use defaultProps to define default values
  widthPropName: undefined,
  heightPropName: undefined
};
function makeResizeAware(component) {
  return function (props) {
    return react.createElement(ResizeAware, _extends({ component: component }, props));
  };
}

exports['default'] = ResizeAware;
exports.makeResizeAware = makeResizeAware;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__("./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__("./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = Reactstrap;

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = ViewModeActions;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = Config;

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = FormBuilderLoader;

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = ReactDom;

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = moment;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = Injector;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = i18n;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = Redux;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = classnames;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = GraphQLTag;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = ReactApollo;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = Loading;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
>>>>>>> The query works
>>>>>>> The query works
