(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./app/components/PassageAnswerAdd/style.scss":function(e,t,n){var o=n("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/components/PassageAnswerAdd/style.scss");"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("./node_modules/style-loader/lib/addStyles.js")(o,r);o.locals&&(e.exports=o.locals)},"./app/containers/SectionAddPage/index.js":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/react-redux/lib/index.js"),s=n("./node_modules/redux/lib/redux.js"),c=n("./node_modules/reselect/es/index.js"),i=n("./app/utils/injectSaga.js"),u=n("./app/components/LoadingIndicator/index.js"),p=n("./app/containers/SectionAddPage/reducer.js"),l=function(e){return e.sectionAdd||p.b},d=n("./app/containers/SectionAddPage/actions.js"),f=n("./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.cjs.js"),m=n("./node_modules/react-router-redux/lib/index.js"),v=n("./app/utils/request.js"),b=n("./app/constants/service-model.js"),g=n("./app/constants/routers.js"),y=n("./app/utils/request-method.js"),h=n("./app/utils/notify.js"),j=n("./app/containers/SectionAddPage/utils.js"),O=n("./app/constants/questions.js"),x=regeneratorRuntime.mark(N),S=regeneratorRuntime.mark(I),w=regeneratorRuntime.mark(T),_=regeneratorRuntime.mark(q),C=regeneratorRuntime.mark(E),k=regeneratorRuntime.mark(A);n("./node_modules/lodash/lodash.js");function N(e){var t,n,o;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.parentId,o=t.childId,r.next=3,Object(f.put)(Object(m.push)("".concat(g.m,"/").concat(n,"/").concat(o)));case 3:case"end":return r.stop()}},x)}function I(e){var t,n,o,r;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t=e.payload,n=t.id,o=t.text,r=t.questionType,a.next=4,Object(f.call)(v.a,b.p,Object(y.b)({text:o,questionType:r}));case 4:if(!a.sent.data){a.next=9;break}return Object(h.a)(O.f.ERR_EXISTED_S),a.next=9,Object(f.put)(Object(d.t)(n));case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(0),a.next=15,Object(f.put)(Object(d.v)());case 15:case"end":return a.stop()}},S,null,[[0,11]])}function T(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(f.call)(v.a,b.a);case 3:return e=t.sent,t.next=6,Object(f.put)(Object(d.q)(e.data));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(f.put)(Object(d.v)());case 12:case"end":return t.stop()}},w,null,[[0,8]])}function q(e){var t,n;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,t=e.id,o.next=4,Object(f.call)(v.a,"".concat(b.b,"/").concat(t));case 4:return n=o.sent,o.next=7,Object(f.put)(Object(d.s)(n.data));case 7:o.next=13;break;case 9:return o.prev=9,o.t0=o.catch(0),o.next=13,Object(f.put)(Object(d.v)());case 13:case"end":return o.stop()}},_,null,[[0,9]])}function P(e,t){return e.map(function(e){return function(e,t){var n=e.text,o=e.questionType,r=e.sectionOptions,a=e.passageText,s=e.passageOptions,c=e.questionType;return c===O.i?{text:n,questionType:o,categoryId:t,sectionOptions:r}:O.m.includes(c)?{text:n,questionType:o,categoryId:t,passageText:a,passageOptions:s}:{text:n,questionType:o,categoryId:t}}(e,t)})}function E(e){var t,n,o,r,a;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,t=e.payload,n=t.sections,o=t.catId,!(r=!Object(j.a)(n))){s.next=6;break}Object(h.a)(O.f.ERR_MANDATORY),s.next=10;break;case 6:return s.next=8,Object(f.call)(v.a,b.n,Object(y.b)(P(n,o)));case 8:(a=s.sent).error&&(r=!0,Object(h.a)(a.error.message));case 10:return s.next=12,Object(f.put)(Object(d.x)({sections:n,hasError:r}));case 12:s.next=18;break;case 14:return s.prev=14,s.t0=s.catch(0),s.next=18,Object(f.put)(Object(d.v)());case 18:case"end":return s.stop()}},C,null,[[0,14]])}function A(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.takeLatest)(d.d,T);case 2:return e.next=4,Object(f.takeLatest)(d.f,q);case 4:return e.next=6,Object(f.takeLatest)(d.k,E);case 6:return e.next=8,Object(f.takeLatest)(d.a,I);case 8:return e.next=10,Object(f.takeLatest)(d.c,N);case 10:case"end":return e.stop()}},k)}n("./app/containers/SectionAddPage/style.scss");var R,Q=n("./node_modules/react-helmet/lib/Helmet.js"),F=n("./node_modules/react-router-dom/index.js");var D,L=function(e){var t=e.catId,n=e.childCatId;return function(e,t,n,o){R||(R="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===a)t.children=o;else if(a>1){for(var c=new Array(a),i=0;i<a;i++)c[i]=arguments[i+3];t.children=c}return{$$typeof:R,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}(F.Link,{className:"router-link btn",to:"".concat(g.m,"/").concat(t,"/").concat(n)},void 0,O.g.section)},H=(n("./app/containers/SectionAddPage/constants.js"),n("./app/components/Error/index.js")),G=n("./app/components/NoData/index.js");n("./app/components/PassageAnswerAdd/style.scss");function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t,n,o){D||(D="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===a)t.children=o;else if(a>1){for(var c=new Array(a),i=0;i<a;i++)c[i]=arguments[i+3];t.children=c}return{$$typeof:D,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function M(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("./node_modules/lodash/lodash.js");var W,X=V("i",{className:"fa fa-times","aria-hidden":"true"}),z=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=$(t).call(this,e),n=!r||"object"!==U(r)&&"function"!=typeof r?B(o):r,J(B(n),"saveTemp",function(e){n.props.onDataOutput({action:O.c.TEMP_SAVE,data:e})}),J(B(n),"onInputChange",function(e){var t=n.props.sec;t.passageText=e.target.value,n.saveTemp(t)}),J(B(n),"onNoOfQuesInputChange",function(e){return function(t){var o=t.target.value;e.noOfQues=o,e.passageOptions=[];for(var r=0;r<o;r++)e.passageOptions.push("");n.saveTemp(e)}}),J(B(n),"hasError",function(){var e=n.props.ques,t=e.pos;return""===e.text||0===t.length||""===t.a||""===t.b||""===t.c||""===t.d}),J(B(n),"onPassageInputChange",function(e){return function(t){var o=n.props.sec;o.passageOptions[e]=t.target.value,n.saveTemp(o)}}),J(B(n),"renderPassage",function(e,t){return V("div",{className:"col-md-3"},t,V("div",{className:"passage"},void 0,V("span",{},void 0,"(",t+1,")"),V("input",{className:"answer",type:"text",value:e,onChange:n.onPassageInputChange(t)})))}),J(B(n),"removeQues",function(e){var t=n.props.ques;n.saveTemp({action:O.c.REMOVE_QUES,data:t.id})}),J(B(n),"newQuestion",function(e){13===e.keyCode&&n.props.onDataOutput({action:O.c.NEW})}),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this,t=this.props,n=t.sec,o=t.idx,r=n.passageOptions,a=n.questionType;return V("div",{className:"q-container ".concat(n.error?"q-error":"")},void 0,V("div",{className:"row q-row"},void 0,V("div",{className:"col-md-12"},void 0,V("label",{htmlFor:"q_".concat(o)},void 0,V("h4",{},void 0,"Nhập đoạn văn   ",a===O.k&&V("input",{type:"text",className:"no-of-ques",placeholder:O.n.no_of_ques,onBlur:this.onNoOfQuesInputChange(n)}))),V("span",{className:"q-remove-icon",onClick:this.removeQues},void 0,X),V("div",{className:"passage"},void 0,V("textarea",{id:"q_".concat(o),rows:10,type:"text",className:"form-control question-input",placeholder:O.n.passage,value:n.passageText,onChange:this.onInputChange})))),O.k===a&&V("div",{className:"row q-row"},void 0,r.map(function(t,n){return e.renderPassage(t,n)})))}}])&&M(n.prototype,o),a&&M(n,a),t}();function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t,n,o){W||(W="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===a)t.children=o;else if(a>1){for(var c=new Array(a),i=0;i<a;i++)c[i]=arguments[i+3];t.children=c}return{$$typeof:W,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function ee(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e,t){return(oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("./node_modules/lodash/lodash.js");var ae=Z("span",{className:"icon-l"},void 0,Z("i",{className:"fa fa-paste"})),se=Z("i",{className:"fa fa-plus"}),ce=Z(u.a,{}),ie=Z(H.a,{}),ue=Z(G.a,{}),pe=Z("h5",{},void 0,"Tên loại câu hỏi"),le=Z("h5",{},void 0,"Thể loại"),de=Z(Q.Helmet,{},void 0,Z("title",{},void 0,"SectionAddPage")),fe=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=te(t).call(this,e),n=!r||"object"!==Y(r)&&"function"!=typeof r?ne(o):r,re(ne(n),"escFunction",function(e){27===e.keyCode&&n.goHome()}),re(ne(n),"goHome",function(){var e=n.props.match.params,t={parentId:e.catId,childId:e.childCatId};n.props.goHome(t)}),re(ne(n),"tempSaveSection",function(e){n.props.tempSaveSection(e)}),re(ne(n),"saveChange",function(e){n.setState({hasChange:!0},function(){n.tempSaveSection(e)})}),re(ne(n),"onOptionChange",function(e){return function(t){var o=t.target.value;e.questionType=o,n.saveChange(e)}}),re(ne(n),"onInputBlur",function(e){return function(t){if(n.state.hasChange){n.setState({hasChange:!1});var o=n.props.sections;Object(j.b)(o,e)?Object(h.a)(O.f.ERR_EXISTED_S):n.props.validateExistedSection(e)}}}),re(ne(n),"onPassageInputChange",function(e){return function(t){e.passageText=t.target.value,n.saveChange(e)}}),re(ne(n),"onInputChange",function(e){return function(t){e.text=t.target.value,n.saveChange(e)}}),re(ne(n),"pasteFromClipboard",function(e){return function(t){navigator.clipboard.readText().then(function(t){e.text=t,n.tempSaveSection(e)})}}),re(ne(n),"onKeyUp",function(e){return function(t){13===t.keyCode&&n.onOptionFromGivenAdd(e)}}),re(ne(n),"onValueOptionFromGivenChange",function(e,t){return function(o){e.questionType===O.k?e.passageOptions[t]=o.target.value:e.questionType===O.i&&(e.sectionOptions[t]=o.target.value),n.props.tempSaveSection(e)}}),re(ne(n),"onOptionFromGivenAdd",function(e){e.questionType===O.k?e.passageOptions.push(""):e.questionType===O.i&&e.sectionOptions.push(""),n.props.tempSaveSection(e)}),re(ne(n),"renderOptionFromGiven",function(e,t,o,r){return Z("div",{className:"col-md-3"},o,Z("div",{className:"icon-container"},void 0,Z("input",{type:"text",className:"form-control",placeholder:t,value:t,onKeyUp:n.onKeyUp(e),onChange:n.onValueOptionFromGivenChange(e,o)}),ae,o===r-1&&Z("span",{className:"icon-r",onClick:function(t){return n.onOptionFromGivenAdd(e)}},void 0,se)))}),re(ne(n),"onQuestionDataOutput",function(e){var t=e.action,o=e.data,r=n.props.match.params.childCatId;switch(o.categoryId=r,t){case O.c.TEMP_SAVE:n.props.tempSaveSection(o);break;case O.c.REMOVE_QUES:n.props.removeQuestion({data:o});break;case O.c.CHECK_QUES:var a=n.state.sectionId;n.props.checkExistedQuestion({data:o,sectionId:a})}}),re(ne(n),"renderInputText",function(e){return Z("input",{className:"form-control rounded-0 question-input",placeholder:O.n.sec,onChange:n.onInputChange(e),onBlur:n.onInputBlur(e),value:e.text})}),re(ne(n),"renderSections",function(){var e=n.props,t=e.loading,o=e.error,r=e.sections;return t?ce:o?ie:r?r.map(function(e,t){var o=e.questionType,r=e.sectionOptions.length;e.passageOptions.length;return Z("div",{className:"".concat(e.error?"q-error":"")},t,Z("div",{className:"row"},void 0,Z("div",{className:"col-md-9"},void 0,Z("div",{className:"form-group"},void 0,0===t&&pe,Z("div",{className:"icon-container"},void 0,n.renderInputText(e)))),Z("div",{className:"col-md-3"},void 0,Z("div",{className:"form-group"},void 0,0===t&&le,Z("select",{className:"form-control question-input",onChange:n.onOptionChange(e),defaultValue:e.questionType},void 0,O.q.map(function(e,t){return Z("option",{},t,e)}))))),O.m.includes(o)&&Z(z,{sec:e,idx:t,onDataOutput:n.onQuestionDataOutput}),O.i===o&&Z("div",{className:"row q-row"},void 0,e.sectionOptions.map(function(t,o){return n.renderOptionFromGiven(e,t,o,r)})))}):ue}),re(ne(n),"newSection",function(){n.props.newSection()}),re(ne(n),"saveSection",function(){var e=n.props.sections;if(0!==e.length){var t=n.props.match.params.childCatId;n.props.saveSection({sections:e,catId:t})}}),re(ne(n),"renderCategory",function(){var e=n.props.category;return e?Z("span",{},void 0,e.parent.catName,"/",e.catName):""}),re(ne(n),"renderSummary",function(){var e=n.props.match.params,t=e.catId,o=e.childCatId;return Z("div",{className:"row q-container"},void 0,Z("div",{className:"col-3 col-sm-3 col-md-2 col-lg-2 summary"},void 0,Z("h5",{className:"p-t-5"},void 0,Z("span",{className:"btn m-r-10",onClick:function(e){return n.goHome()}},void 0,"<<"),Z(L,{catId:t,childCatId:o}))),Z("div",{className:"col-8 col-sm-6 col-md-6 col-lg-7 summary"},void 0,Z("h5",{className:"p-t-5"},void 0,n.renderCategory())),Z("div",{className:"col-1 col-sm-3 col-md-4 col-lg-3 summary"},void 0,Z("h5",{className:"p-t-5"},void 0,Z("span",{className:"btn",onClick:n.newSection},void 0,O.g.them_moi),Z("span",{className:"btn",onClick:n.saveSection},void 0,"  ",O.g.luu,"  "))))}),n.state={hasChange:!1},n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&oe(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.escFunction,!1);var e=this.props.match.params,t=(e.catId,e.childCatId);this.props.loadCategory(t),this.props.newSection()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.escFunction,!1)}},{key:"render",value:function(){return Z("article",{},void 0,de,Z("div",{className:"section-add-page"},void 0,this.renderSummary(),this.renderSections()))}}])&&ee(n.prototype,o),a&&ee(n,a),t}(),me=Object(c.b)({sections:Object(c.a)(l,function(e){return e.sections}),categories:Object(c.a)(l,function(e){return e.categories}),category:Object(c.a)(l,function(e){return e.category}),selectedCat:Object(c.a)(l,function(e){return e.selectedCat}),loading:Object(c.a)(l,function(e){return e.loading}),error:Object(c.a)(l,function(e){return e.error})}),ve=Object(a.connect)(me,function(e){return{loadCategories:function(){return e(Object(d.p)())},deleteSection:function(t){return e(Object(d.n)(t))},newSection:function(){return e(Object(d.u)())},saveSection:function(t){return e(Object(d.w)(t))},tempSaveSection:function(t){return e(Object(d.z)(t))},loadCategory:function(t){return e(Object(d.r)(t))},selectCategory:function(t){return e(Object(d.y)(t))},validateExistedSection:function(t){return e(Object(d.A)(t))},goHome:function(t){return e(Object(d.o)(t))}}}),be=Object(i.a)({key:"section-add-page",saga:A});t.default=Object(s.compose)(be,ve)(fe)},"./app/containers/SectionAddPage/style.scss":function(e,t,n){var o=n("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/containers/SectionAddPage/style.scss");"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("./node_modules/style-loader/lib/addStyles.js")(o,r);o.locals&&(e.exports=o.locals)},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/components/PassageAnswerAdd/style.scss":function(e,t,n){(e.exports=n("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,"input{border:1px solid transparent;padding-left:5px}input:focus{outline:none}.passage span{padding-left:5px}.passage span:hover{color:red}.passage .ques-no{max-width:80px}\n",""])},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./app/containers/SectionAddPage/style.scss":function(e,t,n){(e.exports=n("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([e.i,"",""])}}]);