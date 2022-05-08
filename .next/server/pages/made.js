"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/made";
exports.ids = ["pages/made"];
exports.modules = {

/***/ "./components/Seo.js":
/*!***************************!*\
  !*** ./components/Seo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Seo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Head */ \"next/Head\");\n/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Seo({ title  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n            children: title\n        }, void 0, false, {\n            fileName: \"/Users/gimhojin/Desktop/soozipweb/sskw/kiwi/components/Seo.js\",\n            lineNumber: 6,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/gimhojin/Desktop/soozipweb/sskw/kiwi/components/Seo.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nlby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTRCO0FBRWIsU0FBU0MsR0FBRyxDQUFDLEVBQUNDLEtBQUssR0FBQyxFQUFDO0lBQ2hDLHFCQUNJLDhEQUFDRixrREFBSTtrQkFDRCw0RUFBQ0UsT0FBSztzQkFDREEsS0FBSzs7Ozs7Z0JBQ0Y7Ozs7O1lBQ0wsQ0FDVjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2l3aS8uL2NvbXBvbmVudHMvU2VvLmpzPzQyOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9IZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZW8oe3RpdGxlfSl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJIZWFkIiwiU2VvIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Seo.js\n");

/***/ }),

/***/ "./pages/made.js":
/*!***********************!*\
  !*** ./pages/made.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Seo */ \"./components/Seo.js\");\n/* harmony import */ var _src_tools_fbase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/tools/fbase */ \"./src/tools/fbase.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_tools_fbase__WEBPACK_IMPORTED_MODULE_4__]);\n_src_tools_fbase__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst Made = ()=>{\n    const { /*#__PURE__*/ 0: item , 1: setItem  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        loadData();\n    }, []);\n    const loadData = async ()=>{\n        let userOrder = [];\n        userOrder = await _src_tools_fbase__WEBPACK_IMPORTED_MODULE_4__.dbService.collection(\"published-page\").where(\"urlId\", \"==\", \"mercury\").get(); // uid를 creatorId로 줬었으니까.\n        let orderData = userOrder.docs.map((doc)=>{\n            return {\n                ...doc.data(),\n                id: doc.id\n            };\n        });\n        if (orderData.length === 0) {\n            props.history.push(\"/\");\n            props.history.go();\n        }\n        setItem(orderData[0]);\n        setLoading(false);\n        console.log(orderData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-c1143301e47b99dd\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: item ? item.setting.title : \"\\uC11C\\uD53C\\uC758 \\uD398\\uC774\\uC9C0\"\n            }, void 0, false, {\n                fileName: \"/Users/gimhojin/Desktop/soozipweb/sskw/kiwi/pages/made.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            \"\\uBA54\\uC774\\uB4DC\",\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"c1143301e47b99dd\",\n                children: \"a.jsx-c1143301e47b99dd{color:blue}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gimhojin/Desktop/soozipweb/sskw/kiwi/pages/made.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Made);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYWRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBDO0FBQ1A7QUFDUztBQUNQO0FBRXJDLE1BQU1LLElBQUksR0FBRyxJQUFNO0lBQ2pCLE1BQU0sZ0JBTlIsR0FNVUMsSUFBSSxHQU5kLEdBTWdCQyxPQUFPLE1BQUtQLCtDQUFRLEVBQUU7SUFDcEMsTUFBTSxFQVBSLEdBT1VRLE9BQU8sR0FQakIsR0FPbUJDLFVBQVUsTUFBS1QsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFDOUMsTUFBTVUsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBRTFCSCxnREFBUyxDQUFDLElBQU07UUFDZFUsUUFBUSxFQUFFO0tBQ1gsRUFBQyxFQUFFLENBQUM7SUFFTCxNQUFNQSxRQUFRLEdBQUcsVUFBWTtRQUMzQixJQUFJQyxTQUFTLEdBQUcsRUFBRTtRQUNsQkEsU0FBUyxHQUFHLE1BQU1ULGtFQUNILENBQUMsZ0JBQWdCLENBQUMsQ0FDNUJXLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUMvQkMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUVFLElBQVZDLFNBQVMsR0FBR0osU0FBUyxDQUFDSyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQUEsR0FBRyxHQUFJO1lBQ3RDLE9BQU87Z0JBQUMsR0FBR0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7Z0JBQUVDLEVBQUUsRUFBQ0YsR0FBRyxDQUFDRSxFQUFFO2FBQUMsQ0FBQztTQUNyQyxDQUFDO1FBRUYsSUFBR0wsU0FBUyxDQUFDTSxNQUFNLEtBQUssQ0FBQyxFQUFDO1lBQ3RCQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCRixLQUFLLENBQUNDLE9BQU8sQ0FBQ0UsRUFBRSxFQUFFLENBQUM7U0FDdEI7UUFFRG5CLE9BQU8sQ0FBRVMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7UUFDeEJQLFVBQVUsQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUNwQmtCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWixTQUFTLENBQUM7S0FDekI7SUFFQyxxQkFDRSw4REFBQ2EsS0FBRzs7OzBCQUNGLDhEQUFDM0IsdURBQUc7Z0JBQUM0QixLQUFLLEVBQUV4QixJQUFJLEdBQUdBLElBQUksQ0FBQ3lCLE9BQU8sQ0FBQ0QsS0FBSyxHQUFHLHVDQUFTOzs7Ozt5QkFBaUI7WUFBQSxvQkFHdEQ7Ozs7Ozs7Ozs7aUJBTUksQ0FDTjtDQUNIO0FBRUQsaUVBQWV6QixJQUFJLEVBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raXdpLy4vcGFnZXMvbWFkZS5qcz9mZDZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlbyBmcm9tICcuLi9jb21wb25lbnRzL1NlbydcbmltcG9ydCB7ZGJTZXJ2aWNlfSBmcm9tICcuLi9zcmMvdG9vbHMvZmJhc2UnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IE1hZGUgPSAoKSA9PiB7XG4gIGNvbnN0IFsgaXRlbSwgc2V0SXRlbSBdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkRGF0YSgpXG4gIH0sW10pXG5cbiAgY29uc3QgbG9hZERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHVzZXJPcmRlciA9IFtdXG4gICAgdXNlck9yZGVyID0gYXdhaXQgZGJTZXJ2aWNlXG4gICAgICAgIC5jb2xsZWN0aW9uKFwicHVibGlzaGVkLXBhZ2VcIilcbiAgICAgICAgLndoZXJlKFwidXJsSWRcIiwgXCI9PVwiLCAnbWVyY3VyeScpXG4gICAgICAgIC5nZXQoKTsgLy8gdWlk66W8IGNyZWF0b3JJZOuhnCDspKzsl4jsnLzri4jquYwuXG4gICAgXG4gICAgbGV0IG9yZGVyRGF0YSA9IHVzZXJPcmRlci5kb2NzLm1hcChkb2MgPT4ge1xuICAgICAgICByZXR1cm4oey4uLmRvYy5kYXRhKCksIGlkOmRvYy5pZH0pXG4gICAgfSk7XG4gICAgXG4gICAgaWYob3JkZXJEYXRhLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xuICAgICAgICBwcm9wcy5oaXN0b3J5LmdvKCk7XG4gICAgfVxuXG4gICAgc2V0SXRlbSggb3JkZXJEYXRhWzBdICk7XG4gICAgc2V0TG9hZGluZyggZmFsc2UgKTtcbiAgICBjb25zb2xlLmxvZyhvcmRlckRhdGEpXG59XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNlbyB0aXRsZT17aXRlbSA/IGl0ZW0uc2V0dGluZy50aXRsZSA6IFwi7ISc7ZS87J2YIO2OmOydtOyngFwiIH0gLz5cbiAgICAgIOuplOydtOuTnFxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOmJsdWU7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PiAgICBcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hZGU7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VvIiwiZGJTZXJ2aWNlIiwidXNlUm91dGVyIiwiTWFkZSIsIml0ZW0iLCJzZXRJdGVtIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJsb2FkRGF0YSIsInVzZXJPcmRlciIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsImdldCIsIm9yZGVyRGF0YSIsImRvY3MiLCJtYXAiLCJkb2MiLCJkYXRhIiwiaWQiLCJsZW5ndGgiLCJwcm9wcyIsImhpc3RvcnkiLCJwdXNoIiwiZ28iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwidGl0bGUiLCJzZXR0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/made.js\n");

/***/ }),

/***/ "./src/tools/fbase.js":
/*!****************************!*\
  !*** ./src/tools/fbase.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"authService\": () => (/* binding */ authService),\n/* harmony export */   \"dbService\": () => (/* binding */ dbService),\n/* harmony export */   \"firebaseInstance\": () => (/* binding */ firebaseInstance),\n/* harmony export */   \"stService\": () => (/* binding */ stService)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\n/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/storage */ \"firebase/compat/storage\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_storage__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_storage__WEBPACK_IMPORTED_MODULE_3__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n// Import the functions you need from the SDKs you need\n\n// import { getAnalytics } from \"firebase/analytics\";\n\n\n\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDH_xQF-kBsVMEDwLNDJubGrzOp0Qnr_iU\",\n    authDomain: \"kiwi-d5dd3.firebaseapp.com\",\n    projectId: \"kiwi-d5dd3\",\n    storageBucket: \"kiwi-d5dd3.appspot.com\",\n    messagingSenderId: \"335393250887\",\n    appId: \"1:335393250887:web:231c18d1aa6d4356891b62\",\n    measurementId: \"G-7FJX546NWQ\"\n};\n// Initialize Firebase\n// export const app = firebase.initializeApp(firebaseConfig);\n// export const firebaseInstance = firebase;\n// const analytics = getAnalytics(app);\n// export const dbService = app.firestore();\n// export const stService = app.storage();\nconst app = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp(firebaseConfig);\nconst authService = app.auth();\nconst firebaseInstance = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst dbService = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].firestore();\nconst stService = app.storage();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9vbHMvZmJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUMxQyx1REFBdUQ7QUFDVjtBQUM3QyxxREFBcUQ7QUFDbEI7QUFDRjtBQUNKO0FBQzdCLGlFQUFpRTtBQUVqRSx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBQ25FLE1BQU1FLGNBQWMsR0FBRztJQUNyQkMsTUFBTSxFQUFFLHlDQUF5QztJQUNqREMsVUFBVSxFQUFFLDRCQUE0QjtJQUN4Q0MsU0FBUyxFQUFFLFlBQVk7SUFDdkJDLGFBQWEsRUFBRSx3QkFBd0I7SUFDdkNDLGlCQUFpQixFQUFFLGNBQWM7SUFDakNDLEtBQUssRUFBRSwyQ0FBMkM7SUFDbERDLGFBQWEsRUFBRSxjQUFjO0NBQzlCO0FBRUQsc0JBQXNCO0FBQ3RCLDZEQUE2RDtBQUM3RCw0Q0FBNEM7QUFDNUMsdUNBQXVDO0FBQ3ZDLDRDQUE0QztBQUM1QywwQ0FBMEM7QUFFbkMsTUFBTUMsR0FBRyxHQUFHVix5RUFBc0IsQ0FBQ0UsY0FBYyxDQUFDLENBQUM7QUFDbkQsTUFBTVMsV0FBVyxHQUFHRCxHQUFHLENBQUNFLElBQUksRUFBRSxDQUFDO0FBQy9CLE1BQU1DLGdCQUFnQixHQUFHYiwyREFBUSxDQUFDO0FBQ2xDLE1BQU1jLFNBQVMsR0FBR2QscUVBQWtCLEVBQUUsQ0FBQztBQUN2QyxNQUFNZ0IsU0FBUyxHQUFHTixHQUFHLENBQUNPLE9BQU8sRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2l3aS8uL3NyYy90b29scy9mYmFzZS5qcz85YTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvY29tcGF0L2FwcFwiXG4vLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuLy8gaW1wb3J0IHsgZ2V0QW5hbHl0aWNzIH0gZnJvbSBcImZpcmViYXNlL2FuYWx5dGljc1wiO1xuaW1wb3J0IFwiZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZVwiO1xuaW1wb3J0IFwiZmlyZWJhc2UvY29tcGF0L3N0b3JhZ2VcIjtcbmltcG9ydCBcImZpcmViYXNlL2NvbXBhdC9hdXRoXCJcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXG5cbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5REhfeFFGLWtCc1ZNRUR3TE5ESnViR3J6T3AwUW5yX2lVXCIsXG4gIGF1dGhEb21haW46IFwia2l3aS1kNWRkMy5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcImtpd2ktZDVkZDNcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJraXdpLWQ1ZGQzLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjMzNTM5MzI1MDg4N1wiLFxuICBhcHBJZDogXCIxOjMzNTM5MzI1MDg4Nzp3ZWI6MjMxYzE4ZDFhYTZkNDM1Njg5MWI2MlwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctN0ZKWDU0Nk5XUVwiXG59O1xuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG4vLyBleHBvcnQgY29uc3QgYXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4vLyBleHBvcnQgY29uc3QgZmlyZWJhc2VJbnN0YW5jZSA9IGZpcmViYXNlO1xuLy8gY29uc3QgYW5hbHl0aWNzID0gZ2V0QW5hbHl0aWNzKGFwcCk7XG4vLyBleHBvcnQgY29uc3QgZGJTZXJ2aWNlID0gYXBwLmZpcmVzdG9yZSgpO1xuLy8gZXhwb3J0IGNvbnN0IHN0U2VydmljZSA9IGFwcC5zdG9yYWdlKCk7XG5cbmV4cG9ydCBjb25zdCBhcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbmV4cG9ydCBjb25zdCBhdXRoU2VydmljZSA9IGFwcC5hdXRoKCk7XG5leHBvcnQgY29uc3QgZmlyZWJhc2VJbnN0YW5jZSA9IGZpcmViYXNlO1xuZXhwb3J0IGNvbnN0IGRiU2VydmljZSA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xuZXhwb3J0IGNvbnN0IHN0U2VydmljZSA9IGFwcC5zdG9yYWdlKCk7Il0sIm5hbWVzIjpbImZpcmViYXNlIiwiaW5pdGlhbGl6ZUFwcCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImF1dGhTZXJ2aWNlIiwiYXV0aCIsImZpcmViYXNlSW5zdGFuY2UiLCJkYlNlcnZpY2UiLCJmaXJlc3RvcmUiLCJzdFNlcnZpY2UiLCJzdG9yYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/tools/fbase.js\n");

/***/ }),

/***/ "next/Head":
/*!****************************!*\
  !*** external "next/Head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/Head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/compat/app":
/*!**************************************!*\
  !*** external "firebase/compat/app" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/app");;

/***/ }),

/***/ "firebase/compat/auth":
/*!***************************************!*\
  !*** external "firebase/compat/auth" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/auth");;

/***/ }),

/***/ "firebase/compat/firestore":
/*!********************************************!*\
  !*** external "firebase/compat/firestore" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/firestore");;

/***/ }),

/***/ "firebase/compat/storage":
/*!******************************************!*\
  !*** external "firebase/compat/storage" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/made.js"));
module.exports = __webpack_exports__;

})();